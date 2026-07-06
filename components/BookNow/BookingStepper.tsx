"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiCheck,
  FiArrowLeft,
  FiArrowRight,
  FiLoader,
  FiAlertCircle,
} from "react-icons/fi";
import PageHero from "../common/pagehero";
import BookingSearch from "./BookingSearch";
import { useSearchRooms } from "@/app/redux/hook/useSearchRooms";
import { BookingRequestPayload, useRooms } from "@/app/redux/hook/useRooms";
import Step1RoomSelection from "./Step1RoomSelection";
import Step2GuestDetails from "./Step2GuestDetails";
import Step3BookingSummary from "./Step3BookingSummary";

const BookingStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  // Ref to scroll the step content into view after a search
  const stepContentRef = useRef<HTMLDivElement>(null);

  const [toast, setToast] = useState<{
    message: string;
    visible: boolean;
    type?: "success" | "error" | "info";
  }>({ message: "", visible: false, type: "info" });

  const { results, loading, error, searchRooms } = useSearchRooms();
  const { createConfirmRoom } = useRooms();

  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    adults: "1",
    children: "0",
    rooms: 1,
    childrenAges: [] as number[],
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setToast({ message, visible: true, type });
    setTimeout(() => setToast({ message: "", visible: false }), 2000);
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestChange = (guestsData: {
    rooms: number;
    adults: number;
    children: number;
    childrenAges: number[];
  }) => {
    setSearchData((prev) => ({
      ...prev,
      rooms: guestsData.rooms,
      adults: guestsData.adults.toString(),
      children: guestsData.children.toString(),
      childrenAges: guestsData.childrenAges,
      guests: (guestsData.adults + guestsData.children).toString(),
    }));
  };

  const handleSearchSubmit = () => {
    searchRooms({
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      adultCount: Number(searchData.adults),
      childCount: Number(searchData.children),
      childAges: searchData.childrenAges,
    });
    setSelectedItems([]);
    setCurrentStep(1);

    // Smooth scroll to the room selection area
    setTimeout(() => {
      stepContentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const handleItemToggle = (room: any) => {
    const exists = selectedItems.find((item) => item.RoomId === room.RoomId);

    if (exists) {
      setSelectedItems((prev) =>
        prev.filter((item) => item.RoomId !== room.RoomId)
      );
    } else {
      if (selectedItems.length >= searchData.rooms) {
        showToast(
          `You can only select ${searchData.rooms} room(s).`,
          "info"
        );
        return;
      }
      setSelectedItems((prev) => [...prev, room]);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    
    // Modified Phone Validation - Only numbers allowed
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      errors.phone = "Phone number must contain only digits (0-9)";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 1 && selectedItems.length !== searchData.rooms) return;
    if (currentStep === 2 && !validateForm()) return;
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Navigation guard for step indicator clicks
  const handleStepClick = (targetStep: number) => {
    if (targetStep === currentStep) return;

    // Going backwards is always allowed
    if (targetStep < currentStep) {
      setCurrentStep(targetStep);
      return;
    }

    // Forward checks
    if (currentStep === 1 || targetStep > 2) {
      if (selectedItems.length !== searchData.rooms) {
        showToast(
          `Please select exactly ${searchData.rooms} room(s) to continue.`,
          "info"
        );
        return;
      }
    }
    if (targetStep === 3) {
      if (!validateForm()) return;
    }

    setCurrentStep(targetStep);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const finalPayload: BookingRequestPayload = {
      BookingRequest: {
        BookingRequestId: 0,
        CheckInDate: new Date(searchData.checkIn).toISOString(),
        CheckOutDate: new Date(searchData.checkOut).toISOString(),
        NumberOfRooms: searchData.rooms,
        NumberOfAdults: Number(searchData.adults),
        NumberOfChildren: Number(searchData.children),
        SpecialRequests: formData.message || "",
        Status: "Pending",
        CompanyId: "RRF-GUEST",
        CreatedAt: new Date().toISOString(),
        UpdatedAt: new Date().toISOString(),
      },
      BookingRequestGuest: {
        GuestId: 0,
        BookingRequestId: 0,
        FullName: `${formData.firstName} ${formData.lastName}`,
        Email: formData.email,
        Phone: formData.phone,
        Age: 0,
        IsPrimary: true,
        Nationality: "",
        PassportOrID: "",
      },
      BookingRequestRooms: selectedItems.map((room) => ({
        RoomRequestId: 0,
        BookingRequestId: 0,
        RoomType:
          room.RoomName ||
          room.roomName ||
          `Room ${room.RoomNumber || ""}`,
        NumberOfGuests: room.MaxOccupancy || 2,
        ExtraBedNeeded: false,
        SmokingPreference: false,
      })),
    };

    try {
      await createConfirmRoom(finalPayload);
      showToast("Booking request submitted successfully!", "success");
    } catch (err) {
      console.error("Booking error:", err);
      showToast("Booking failed. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPriceSum = selectedItems.reduce(
    (acc, item) => acc + (item.PricePerNight || 3500),
    0
  );

  // Determine if room selection is complete
  const isRoomSelectionComplete =
    currentStep === 1 && selectedItems.length === searchData.rooms;

  return (
    <>
      <PageHero
        title="Book Now"
        backgroundImage="/images/viproom/viproom.webp"
      />

      <BookingSearch
        searchData={searchData}
        handleSearchChange={handleSearchChange}
        onSearchClick={handleSearchSubmit}
        onGuestChange={handleGuestChange}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 relative z-20 font-biryani">
        <div className="bg-card text-foreground rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border overflow-hidden">
          {/* Progress Bar Header */}
          <div className="bg-background text-foreground pt-10 pb-8 px-8 lg:px-12 border-b border-border">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                Complete Your Booking
              </h2>
              <p className="text-sm text-text-muted mt-1">
                Please follow the steps below to reserve your luxury stay
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative px-4">
              <div className="flex justify-between items-center relative">
                {[1, 2, 3].map((step) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => handleStepClick(step)}
                    className="flex flex-col items-center z-10 group relative focus:outline-none cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-semibold text-sm transition-all duration-300 shadow-md ${
                        currentStep === step
                          ? "bg-primary text-background border-primary scale-110 ring-4 ring-primary/20"
                          : currentStep > step
                          ? "bg-secondary border-secondary text-foreground group-hover:opacity-80"
                          : "bg-card border-border text-text-muted backdrop-blur-sm group-hover:border-primary/40"
                      }`}
                    >
                      {currentStep > step ? (
                        <FiCheck className="text-lg stroke-[3]" />
                      ) : (
                        step
                      )}
                    </div>
                    <p
                      className={`text-xs mt-3 font-semibold tracking-wide uppercase transition-colors duration-200 ${
                        currentStep === step
                          ? "text-primary"
                          : "text-text-muted group-hover:text-foreground"
                      }`}
                    >
                      {step === 1 && "Select Rooms"}
                      {step === 2 && "Guest Details"}
                      {step === 3 && "Confirm & Pay"}
                    </p>
                  </button>
                ))}

                {/* Horizontal Progress Lines */}
                <div className="absolute top-6 left-6 right-6 h-[2px] bg-border -z-10 flex">
                  <div
                    className="bg-secondary h-full transition-all duration-500 ease-out"
                    style={{
                      width:
                        currentStep === 1
                          ? "0%"
                          : currentStep === 2
                          ? "50%"
                          : "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step Content – ref attached for scrolling */}
          <div
            ref={stepContentRef}
            className="p-6 md:p-14 min-h-[520px] bg-background/40"
          >
            <div className="max-w-6xl mx-auto">
              {currentStep === 1 && (
                <Step1RoomSelection
                  results={results}
                  loading={loading}
                  error={error}
                  selectedItems={selectedItems}
                  requiredRooms={searchData.rooms}
                  onItemToggle={handleItemToggle}
                  showToast={showToast}
                  onProceed={nextStep}
                  isSelectionComplete={isRoomSelectionComplete}
                />
              )}

              {currentStep === 2 && (
                <Step2GuestDetails
                  selectedItems={selectedItems}
                  formData={formData}
                  formErrors={formErrors}
                  totalPriceSum={totalPriceSum}
                  onFormChange={handleFormChange}
                />
              )}

              {currentStep === 3 && (
                <Step3BookingSummary
                  selectedItems={selectedItems}
                  searchData={searchData}
                  formData={formData}
                  totalPriceSum={totalPriceSum}
                />
              )}
            </div>
          </div>

          {/* Navigation Footer – hide Next button on step 1 if we have the inline one */}
          <div className="border-t border-border p-6 md:p-8 flex justify-between bg-card items-center">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-2 md:py-3.5 rounded-xl border border-border font-bold text-sm text-foreground bg-background transition-all duration-200 hover:bg-background/80 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <FiArrowLeft className="text-base" /> Previous
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 bg-primary text-background px-6 py-2 md:px-8 md:py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] shadow-sm cursor-pointer"
              >
                Next Step <FiArrowRight className="text-base" />
              </button>
            ) : currentStep === 3 ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-secondary text-foreground px-6 py-2 md:px-10 md:py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all duration-200 active:scale-[0.98] disabled:opacity-70 flex items-center gap-2 hover:bg-secondary/90 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    Processing <FiLoader className="animate-spin text-base" />
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Theme Aware Notification Toast */}
      {toast.visible && (
        <div
          className={`fixed top-6 right-6 px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-3.5 z-[100] min-w-[340px] text-foreground border transition-all duration-300 backdrop-blur-md ${
            toast.type === "success"
              ? "bg-secondary/95 border-secondary"
              : toast.type === "error"
              ? "bg-red-900/95 border-red-700"
              : "bg-card/95 border-border"
          }`}
        >
          {toast.type === "error" && (
            <FiAlertCircle className="text-xl shrink-0 text-accent" />
          )}
          {toast.type === "success" && (
            <FiCheck className="text-xl shrink-0 bg-foreground/20 p-0.5 rounded-full" />
          )}
          <p className="font-semibold text-sm pr-6 leading-relaxed">
            {toast.message}
          </p>
          <button
            onClick={() => setToast({ message: "", visible: false })}
            className="ml-auto text-text-muted hover:text-foreground bg-foreground/10 hover:bg-foreground/20 transition-colors rounded-full w-6 h-6 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default BookingStepper;