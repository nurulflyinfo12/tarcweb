"use client";

import React, { useState } from "react";
import { FiCheck, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PageHero from "../common/pagehero";
import BookingSearch from "./BookingSearch";
import Image from "next/image";

const BookingStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedItem, setSelectedItem] = useState<any>(null);

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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchData(prev => ({ ...prev, [name]: value }));
    };

    const handleGuestChange = (guestsData: { rooms: number; adults: number; children: number; childrenAges: number[] }) => {
        setSearchData(prev => ({
            ...prev,
            rooms: guestsData.rooms,
            adults: guestsData.adults.toString(),
            children: guestsData.children.toString(),
            childrenAges: guestsData.childrenAges,
            guests: (guestsData.adults + guestsData.children).toString(),
        }));
    };

    const handleSearchSubmit = () => {
        console.log("✅ Search Submitted with following data:", searchData);
        alert("Search Submitted Successfully!\n\nCheck console for data.");
        setCurrentStep(2);
    };

    const handleItemSelect = (item: any) => {
        setSelectedItem(item);
        setCurrentStep(2);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const handleSubmit = () => {
        console.log("Booking Submitted:", { selectedItem, formData, searchData });
        alert("Booking Confirmed! (Demo)");
    };

    return (
        <>
            <PageHero title="Book Now" backgroundImage="/images/viproom/viproom.jpg" />

            {/* Search Section */}
            <BookingSearch
                searchData={searchData}
                handleSearchChange={handleSearchChange}
                onSearchClick={handleSearchSubmit}
                onGuestChange={handleGuestChange}
            />

            {/* STEPPER SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Progress */}
                    <div className="bg-[#051C08] text-white py-6 px-8">
                        <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
                        <div className="flex justify-between relative">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex flex-col items-center z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${currentStep === step ? "bg-white text-[#051C08]" :
                                        currentStep > step ? "bg-green-500 border-green-500" : "border-white/50 text-white/50"
                                        }`}>
                                        {currentStep > step ? <FiCheck /> : step}
                                    </div>
                                    <p className="text-xs mt-2">
                                        {step === 1 && "Select"}
                                        {step === 2 && "Details"}
                                        {step === 3 && "Confirm"}
                                    </p>
                                </div>
                            ))}
                            <div className="absolute top-5 left-0 right-0 h-[2px] bg-white/30 -z-10" />
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="p-8 md:p-12 min-h-[600px]">
                        {currentStep === 1 && (
                            <div>
                                <h3 className="text-2xl font-semibold text-center mb-8">Available Properties</h3>
                                {/* Add your property listing here later */}
                            </div>
                        )}

                        {currentStep === 2 && selectedItem && (
                            <div className="grid lg:grid-cols-5 gap-10">
                                <div className="lg:col-span-2">
                                    <h3 className="text-xl font-semibold mb-4">Your Selection</h3>
                                    <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
                                        <Image src={selectedItem.coverImage || selectedItem.heroImage || selectedItem.images?.[0]} alt={selectedItem.name} width={400} height={250} className="rounded-xl mb-4 w-full object-cover" />
                                        <h4 className="font-bold text-xl">{selectedItem.name}</h4>
                                        <p className="text-sm text-gray-600 mt-2">{selectedItem.description}</p>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 space-y-6">
                                    <h3 className="text-2xl font-semibold">Guest Information</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input type="text" name="firstName" placeholder="First Name" onChange={handleFormChange} className="p-4 border rounded-2xl focus:outline-none focus:border-[#051C08]" />
                                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleFormChange} className="p-4 border rounded-2xl focus:outline-none focus:border-[#051C08]" />
                                        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleFormChange} className="p-4 border rounded-2xl focus:outline-none focus:border-[#051C08]" />
                                        <input type="email" name="email" placeholder="Email Address" onChange={handleFormChange} className="p-4 border rounded-2xl focus:outline-none focus:border-[#051C08]" />
                                    </div>
                                    <textarea name="message" placeholder="Special Requests..." onChange={handleFormChange} rows={5} className="w-full p-4 border rounded-2xl focus:outline-none focus:border-[#051C08]" />
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && selectedItem && (
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl font-semibold text-center mb-8">Booking Preview</h3>
                                <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                                        <p className="font-medium text-gray-600">Type:</p>
                                        <p className="font-semibold">{selectedItem.name}</p>
                                        <p className="font-medium text-gray-600">Check-In:</p>
                                        <p className="font-semibold">{searchData.checkIn}</p>
                                        <p className="font-medium text-gray-600">Check-Out:</p>
                                        <p className="font-semibold">{searchData.checkOut}</p>
                                        <p className="font-medium text-gray-600">Rooms:</p>
                                        <p className="font-semibold">{searchData.rooms}</p>
                                        <p className="font-medium text-gray-600">Adults:</p>
                                        <p className="font-semibold">{searchData.adults}</p>
                                        <p className="font-medium text-gray-600">Children:</p>
                                        <p className="font-semibold">{searchData.children}</p>
                                        <p className="font-medium text-gray-600">Name:</p>
                                        <p className="font-semibold">{formData.firstName} {formData.lastName}</p>
                                        <p className="font-medium text-gray-600">Contact:</p>
                                        <p className="font-semibold">{formData.phone} • {formData.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="border-t p-8 flex justify-between bg-gray-50">
                        <button onClick={prevStep} disabled={currentStep === 1} className="flex items-center gap-2 px-8 py-4 rounded-2xl border disabled:opacity-50 hover:bg-gray-100">
                            <FiArrowLeft /> Previous
                        </button>

                        {currentStep < 3 ? (
                            <button onClick={nextStep} disabled={currentStep === 1 && !selectedItem} className="flex items-center gap-2 bg-[#051C08] text-white px-10 py-4 rounded-2xl hover:bg-black">
                                Next <FiArrowRight />
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-2xl font-semibold">
                                Confirm Booking
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingStepper;