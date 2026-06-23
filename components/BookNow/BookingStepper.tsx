"use client";

import React, { useState, useEffect } from "react";
import {
  FiCheck,
  FiArrowLeft,
  FiArrowRight,
  FiLoader,
  FiX,
  FiInfo,
  FiEye,
} from "react-icons/fi";
import {
  MdOutlineAirlineSeatIndividualSuite,
  MdAcUnit,
  MdMeetingRoom,
} from "react-icons/md";
import PageHero from "../common/pagehero";
import BookingSearch from "./BookingSearch";
import Image from "next/image";
import { useSearchRooms } from "@/app/redux/hook/useSearchRooms";

const BookingStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // Track multi-room selections as an array based on unique RoomId
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  // Modal states for single room API details lookup
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [modalLoading, setModalLoading] = useState(false);

  const { results, loading, error, searchRooms } = useSearchRooms();

  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    adults: "1",
    children: "0",
    rooms: 1, // Determines how many allocations are required
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

  // Fetch Room details dynamically when a modal opens using the dynamic activeModalId
  useEffect(() => {
    if (!activeModalId) return;

    const fetchRoomDetails = async () => {
      setModalLoading(true);
      try {
        const res = await fetch(
          `https://api.rrfguesthouse.com/Dev/dev_api/public/get-room?roomId=${activeModalId}`,
        );
        const data = await res.json();
        setModalData(data);
      } catch (err) {
        console.error("Failed fetching room specs:", err);
      } finally {
        setModalLoading(false);
      }
    };

    fetchRoomDetails();
  }, [activeModalId]);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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

    setSelectedItems([]); // Clear selection when performing a new search
    setCurrentStep(1);
  };

  // Toggles room selections accurately checking for room.RoomId
  const handleItemToggle = (room: any) => {
    const exists = selectedItems.find((item) => item.RoomId === room.RoomId);
    if (exists) {
      setSelectedItems((prev) =>
        prev.filter((item) => item.RoomId !== room.RoomId),
      );
    } else {
      if (selectedItems.length >= searchData.rooms) {
        alert(
          `You have already selected the required ${searchData.rooms} room(s) based on your search fields.`,
        );
        return;
      }
      setSelectedItems((prev) => [...prev, room]);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
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

  const handleSubmit = async () => {
    const finalPayload = {
      roomsSelected: selectedItems,
      guestDetails: formData,
      bookingDates: {
        checkIn: searchData.checkIn,
        checkOut: searchData.checkOut,
        roomsCount: searchData.rooms,
        adults: Number(searchData.adults),
        children: Number(searchData.children),
        childrenAges: searchData.childrenAges,
      },
    };

    console.log("🚀 Confirming Final Booking Payload:", finalPayload);
    alert("Booking Confirmed Successfully! Check development console logs.");
  };

  const totalPriceSum = selectedItems.reduce(
    (acc, item) => acc + (item.PricePerNight || 3500),
    0,
  );

  return (
    <>
      <PageHero
        title="Book Now"
        backgroundImage="/images/viproom/viproom.jpg"
      />

      <BookingSearch
        searchData={searchData}
        handleSearchChange={handleSearchChange}
        onSearchClick={handleSearchSubmit}
        onGuestChange={handleGuestChange}
      />

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress Bar Header Layout */}
          <div className="bg-[#051C08] text-white py-6 px-8">
            <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
            <div className="flex justify-between relative">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      currentStep === step
                        ? "bg-white text-[#051C08] border-white font-bold"
                        : currentStep > step
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-white/50 text-white/50"
                    }`}
                  >
                    {currentStep > step ? <FiCheck /> : step}
                  </div>
                  <p className="text-xs mt-2 font-medium tracking-wide">
                    {step === 1 && "Select Rooms"}
                    {step === 2 && "Guest Details"}
                    {step === 3 && "Confirm & Pay"}
                  </p>
                </div>
              ))}
              <div className="absolute top-5 left-0 right-0 h-[2px] bg-white/20 -z-10" />
            </div>
          </div>

          {/* Step Selection Banner */}
          {currentStep === 1 && (
            <div className="bg-emerald-50/80 px-8 py-3.5 border-b border-emerald-100 flex items-center justify-between text-sm text-emerald-800">
              <div className="flex items-center gap-2">
                <FiInfo className="text-emerald-700 text-base shrink-0" />
                <span>
                  Required: Select exactly{" "}
                  <strong>{searchData.rooms} room(s)</strong> to advance.
                </span>
              </div>
              <span className="bg-emerald-700 text-white font-semibold text-xs px-2.5 py-1 rounded-full">
                {selectedItems.length} / {searchData.rooms} Selected
              </span>
            </div>
          )}

          {/* Step Content Shell */}
          <div className="p-8 md:p-12 min-h-[500px]">
            {/* STEP 1: Property Feed Selection Grid */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">
                  Available Accommodations
                </h3>

                {loading && (
                  <div className="flex flex-col items-center justify-center py-20 text-slate-500 gap-3">
                    <FiLoader className="w-8 h-8 animate-spin text-emerald-700" />
                    <p>Searching for open matching rooms...</p>
                  </div>
                )}

                {error && (
                  <p className="text-center text-red-500 bg-red-50 py-4 rounded-xl border border-red-100">
                    {error}
                  </p>
                )}

                {!loading && results.length === 0 && !error && (
                  <div className="text-center py-16 border border-dashed border-slate-200 rounded-3xl">
                    <p className="text-slate-400 font-medium">
                      Please enter preferred dates to view properties.
                    </p>
                  </div>
                )}

                {!loading && results.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {results.map((room: any) => {
                      const matchIndex = selectedItems.findIndex(
                        (item) => item.RoomId === room.RoomId,
                      );
                      const isSelected = matchIndex !== -1;

                      return (
                        <div
                          key={room.RoomId || room.id}
                          className={`bg-white transition-all duration-300 flex flex-col justify-between border-b-2 rounded-none ${
                            isSelected
                              ? "border-emerald-700 shadow-xl"
                              : "border-slate-200 hover:border-slate-800"
                          }`}
                        >
                          <div>
                            {/* Image Frame with Offset Border Styling */}
                            <div className="relative h-64 w-full bg-slate-50 overflow-hidden rounded-none group p-2">
                              <div className="relative w-full h-full overflow-hidden rounded-none">
                                <Image
                                  src={
                                    room.RoomImage ||
                                    room.coverImage ||
                                    "/images/viproom/viproom.jpg"
                                  }
                                  alt={
                                    room.RoomName ||
                                    room.roomName ||
                                    "Hotel Room Card"
                                  }
                                  fill
                                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-none"
                                />
                              </div>

                              {/* Floating Minimalist Price Tag */}
                              <div className="absolute bottom-4 left-4 bg-slate-900 text-white font-mono text-sm px-3 py-1.5 rounded-none tracking-tight">
                                BDT{" "}
                                {(room.PricePerNight || 3500).toLocaleString()}{" "}
                                <span className="text-[10px] text-slate-400 font-light uppercase">
                                  / night
                                </span>
                              </div>

                              {/* Crisp Top Selection Overlay Banner */}
                              {isSelected && (
                                <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-none">
                                  Selected (Slot #{matchIndex + 1})
                                </div>
                              )}
                            </div>

                            {/* Content Area */}
                            <div className="p-6 px-2">
                              <div className="flex justify-between items-start gap-4 mb-3">
                                <h4 className="font-serif text-2xl font-normal text-slate-900 tracking-wide truncate">
                                  {room.RoomName ||
                                    room.roomName ||
                                    `Room ${room.RoomNumber || "Unit"}`}
                                </h4>

                                <button
                                  type="button"
                                  onClick={() => setActiveModalId(room.RoomId)}
                                  className="text-slate-400 hover:text-slate-900 text-xs font-semibold uppercase tracking-widest flex items-center gap-1 transition-colors rounded-none shrink-0 border-b border-transparent hover:border-slate-900 pb-0.5"
                                >
                                  View Details
                                </button>
                              </div>

                              <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-2 mb-6">
                                {room.description ||
                                  "Beautiful spacious room fully structured and prepared with premier options."}
                              </p>

                              {/* Minimalist Grid Specs instead of bulk tags */}
                              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-[11px] text-slate-600 uppercase tracking-wider font-medium">
                                <div className="flex items-center gap-2">
                                  <MdOutlineAirlineSeatIndividualSuite className="text-sm text-slate-400" />
                                  <span>
                                    Limit: {room.MaxOccupancy || 2} Guests
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MdAcUnit
                                    className={`text-sm ${room.IsAC ? "text-blue-500" : "text-slate-300"}`}
                                  />
                                  <span>
                                    {room.IsAC
                                      ? "Air Conditioning"
                                      : "Standard Air"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Clean Action Interface */}
                          <div className="p-6 px-2 pt-2 pb-6">
                            <button
                              type="button"
                              onClick={() => handleItemToggle(room)}
                              className={`w-full py-4 font-semibold text-xs uppercase tracking-widest transition-all rounded-none border ${
                                isSelected
                                  ? "bg-emerald-800 text-white border-emerald-800 hover:bg-emerald-900"
                                  : "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white"
                              }`}
                            >
                              {isSelected
                                ? "Remove Selection"
                                : "Book This Accommodation"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: Checkout Form & Selection Review Layout */}
            {currentStep === 2 && selectedItems.length > 0 && (
              <div className="grid lg:grid-cols-5 gap-10">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Your Selection List
                  </h3>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4 max-h-[480px] overflow-y-auto">
                    {selectedItems.map((room, idx) => (
                      <div
                        key={room.RoomId || idx}
                        className="flex gap-3 bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm"
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                          <Image
                            src={
                              room.RoomImage ||
                              room.coverImage ||
                              "/images/viproom/viproom.jpg"
                            }
                            alt="Selected item preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="font-bold text-sm text-slate-800 truncate">
                              {room.RoomName ||
                                room.roomName ||
                                `Room ${room.RoomNumber || "Allocated Unit"}`}
                            </p>
                            <p className="text-xs text-slate-500">
                              Max Occupancy: {room.MaxOccupancy || 2} persons
                            </p>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-emerald-700 font-semibold">
                              BDT{" "}
                              {(room.PricePerNight || 3500).toLocaleString()}
                            </span>
                            <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-mono">
                              Slot #{idx + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="pt-3 border-t border-dashed border-slate-200 flex justify-between items-center text-sm font-bold text-slate-800">
                      <span>Combined Total Price:</span>
                      <span className="text-emerald-700 text-base">
                        BDT {totalPriceSum.toLocaleString()} / night
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Guest Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="First Name *"
                        onChange={handleFormChange}
                        className={`w-full p-4 border rounded-2xl focus:outline-none focus:border-[#051C08] text-sm text-slate-800 ${formErrors.firstName ? "border-red-500" : "border-slate-200"}`}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Last Name *"
                        onChange={handleFormChange}
                        className={`w-full p-4 border rounded-2xl focus:outline-none focus:border-[#051C08] text-sm text-slate-800 ${formErrors.lastName ? "border-red-500" : "border-slate-200"}`}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        placeholder="Phone Number *"
                        onChange={handleFormChange}
                        className={`w-full p-4 border rounded-2xl focus:outline-none focus:border-[#051C08] text-sm text-slate-800 ${formErrors.phone ? "border-red-500" : "border-slate-200"}`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email Address *"
                        onChange={handleFormChange}
                        className={`w-full p-4 border rounded-2xl focus:outline-none focus:border-[#051C08] text-sm text-slate-800 ${formErrors.email ? "border-red-500" : "border-slate-200"}`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      placeholder="Special Requests or arrival notes (optional)..."
                      onChange={handleFormChange}
                      rows={4}
                      className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#051C08] text-sm text-slate-800"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Preview Total Layout Before Booking Post */}
            {currentStep === 3 && selectedItems.length > 0 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-center mb-6 text-slate-800">
                  Booking Summary Preview
                </h3>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6 text-slate-700">
                  <div className="grid grid-cols-2 gap-y-4 text-sm divide-y divide-slate-100">
                    <div className="pt-3 font-medium text-slate-500">
                      Rooms Secured:
                    </div>
                    <div className="pt-3 font-bold text-slate-800">
                      {selectedItems.length} Unit(s) selected
                    </div>

                    <div className="pt-3 font-medium text-slate-500">
                      Combined Total Rate:
                    </div>
                    <div className="pt-3 font-bold text-emerald-700">
                      BDT {totalPriceSum.toLocaleString()} / night
                    </div>

                    <div className="pt-3 font-medium text-slate-500">
                      Check-In Date:
                    </div>
                    <div className="pt-3 font-semibold text-slate-800">
                      {searchData.checkIn || "Not Configured"}
                    </div>

                    <div className="pt-3 font-medium text-slate-500">
                      Check-Out Date:
                    </div>
                    <div className="pt-3 font-semibold text-slate-800">
                      {searchData.checkOut || "Not Configured"}
                    </div>

                    <div className="pt-3 font-medium text-slate-500">
                      Primary Guest:
                    </div>
                    <div className="pt-3 font-semibold text-slate-800">
                      {formData.firstName} {formData.lastName}
                    </div>

                    <div className="pt-3 font-medium text-slate-500">
                      Contact Channels:
                    </div>
                    <div className="pt-3 font-semibold text-slate-800 truncate">
                      {formData.email} <br /> {formData.phone}
                    </div>

                    {formData.message.trim() && (
                      <>
                        <div className="pt-3 font-medium text-slate-500">
                          Special Request:
                        </div>
                        <div className="pt-3 italic text-slate-600 text-xs">
                          {formData.message}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Actions Footer */}
          <div className="border-t p-8 flex justify-between bg-slate-50/80 items-center">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 font-semibold text-sm text-slate-600 bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
            >
              <FiArrowLeft /> Previous
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  currentStep === 1 && selectedItems.length !== searchData.rooms
                }
                className="flex items-center gap-2 bg-[#051C08] text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                Next <FiArrowRight />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md transition-colors"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>

      {/* DETAILED ROOM MODAL */}
      {activeModalId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-100">
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Room Specifications Lookup
                </h3>
                <p className="text-xs text-slate-500">
                  Room reference sequence: #{activeModalId}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveModalId(null);
                  setModalData(null);
                }}
                className="p-2 text-slate-400 hover:text-slate-700 bg-white rounded-full border shadow-sm transition-colors"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="p-6 min-h-[220px]">
              {modalLoading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-500">
                  <FiLoader className="w-8 h-8 animate-spin text-[#051C08]" />
                  <p className="text-sm">
                    Fetching real-time unit data metrics...
                  </p>
                </div>
              ) : modalData ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-50 border rounded-xl p-3">
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        Room No.
                      </p>
                      <div className="flex items-center justify-center gap-1 font-bold text-slate-800 text-base">
                        <MdMeetingRoom className="text-emerald-700" />
                        <span>{modalData.RoomNumber || "N/A"}</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 border rounded-xl p-3">
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        Max Capacity
                      </p>
                      <div className="flex items-center justify-center gap-1 font-bold text-slate-800 text-base">
                        <MdOutlineAirlineSeatIndividualSuite className="text-emerald-700" />
                        <span>{modalData.MaxOccupancy || 2} Pax</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 border rounded-xl p-3">
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        AC Option
                      </p>
                      <div className="flex items-center justify-center gap-1 font-bold text-slate-800 text-base">
                        <MdAcUnit className="text-blue-500" />
                        <span>{modalData.IsAC ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex justify-between items-center">
                    <span className="text-sm font-medium text-emerald-900">
                      Standard Pricing Rate:
                    </span>
                    <span className="text-xl font-black text-emerald-800">
                      BDT {(modalData.PricePerNight || 3500).toLocaleString()}{" "}
                      <span className="text-xs font-normal text-slate-500">
                        / night
                      </span>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Detailed Amenities List
                    </h4>
                    {modalData.Amenities &&
                    modalData.Amenities !== "<p>N/A</p>" ? (
                      <div
                        className="p-4 bg-slate-50 border rounded-xl text-sm text-slate-700 prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: modalData.Amenities,
                        }}
                      />
                    ) : (
                      <div className="p-4 bg-slate-50 border border-dashed rounded-xl text-xs text-slate-400 text-center italic">
                        No amenities listed for this room
                        unit.
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-center py-6 text-sm text-red-500">
                  Failed to render unit details info summary payload.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingStepper;
