"use client";

import React, { useState } from "react";
import { FiCheck, FiArrowLeft, FiArrowRight, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import Image from "next/image";

import { rooms } from "../RoomAndSuites/RoomsAndSuites";
import { Meetings, Restaurants } from "@/data";
import PageHero from "../common/pagehero";

const EnhancedBookingStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedType, setSelectedType] = useState<"room" | "restaurant" | "meeting">("room");

    const [searchData, setSearchData] = useState({
        location: "Cox's Bazar",
        checkIn: "",
        checkOut: "",
        adults: "2",
        children: "0",
    });

    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    const getCurrentData = () => {
        switch (selectedType) {
            case "room": return rooms;
            case "restaurant": return Restaurants;
            case "meeting": return Meetings;
            default: return rooms;
        }
    };

    const currentData = getCurrentData();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
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
            {/*  SEARCH */}

            <PageHero title="Book" backgroundImage="/images/couple/couple1.jpg" />

            <section className="-mt-32 relative z-30">
                {/* Search Bar Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_32px_64px_-16px_rgba(5,28,8,0.15)] border border-white/40 p-4 sm:p-6 lg:p-8">

                        {/* Main Search Panel */}
                        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden ring-1 ring-black/[0.02]">
                            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                                {/* Destination */}
                                <div className="p-6 hover:bg-slate-50/60 transition-colors duration-200 group flex gap-4 items-start">
                                    <div className="p-3 bg-amber-50 rounded-xl text-amber-600 group-hover:bg-amber-100 transition-colors mt-0.5">
                                        <FiMapPin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <label className="block text-[11px] font-bold text-slate-400 mb-1 tracking-widest uppercase">
                                            Where to go
                                        </label>
                                        <select
                                            name="location"
                                            value={searchData.location}
                                            onChange={handleSearchChange}
                                            className="w-full font-bold text-base text-slate-800 bg-transparent focus:outline-none cursor-pointer appearance-none truncate pr-4"
                                        >
                                            <option value="Cox's Bazar">Cox's Bazar, BD</option>
                                            <option value="Jessore">Jessore, BD</option>
                                            <option value="Dhaka">Dhaka, BD</option>
                                            <option value="Sylhet">Sylhet, BD</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Check In */}
                                <div className="p-6 hover:bg-slate-50/60 transition-colors duration-200 flex gap-4 items-start">
                                    <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 mt-0.5">
                                        <FiCalendar className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[11px] font-bold text-slate-400 mb-1 tracking-widest uppercase">
                                            Check In
                                        </label>
                                        <input
                                            type="date"
                                            name="checkIn"
                                            value={searchData.checkIn}
                                            onChange={handleSearchChange}
                                            className="w-full font-bold text-sm text-slate-700 bg-transparent focus:outline-none cursor-pointer placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Check Out */}
                                <div className="p-6 hover:bg-slate-50/60 transition-colors duration-200 flex gap-4 items-start">
                                    <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 mt-0.5">
                                        <FiCalendar className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[11px] font-bold text-slate-400 mb-1 tracking-widest uppercase">
                                            Check Out
                                        </label>
                                        <input
                                            type="date"
                                            name="checkOut"
                                            value={searchData.checkOut}
                                            onChange={handleSearchChange}
                                            className="w-full font-bold text-sm text-slate-700 bg-transparent focus:outline-none cursor-pointer placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Rooms & Guests */}
                                <div className="p-6 hover:bg-slate-50/60 transition-colors duration-200 flex gap-4 items-start">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 mt-0.5">
                                        <FiUsers className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[11px] font-bold text-slate-400 mb-2 tracking-widest uppercase">
                                            Rooms & Guests
                                        </label>
                                        <div className="flex gap-4 items-center mt-1">
                                            <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                                                <span className="text-xs font-semibold text-slate-400">Adults:</span>
                                                <input
                                                    type="number"
                                                    name="adults"
                                                    value={searchData.adults}
                                                    onChange={handleSearchChange}
                                                    className="w-8 font-bold text-sm text-slate-800 bg-transparent focus:outline-none text-center"
                                                    min="1"
                                                />
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                                                <span className="text-xs font-semibold text-slate-400">Child:</span>
                                                <input
                                                    type="number"
                                                    name="children"
                                                    value={searchData.children}
                                                    onChange={handleSearchChange}
                                                    className="w-8 font-bold text-sm text-slate-800 bg-transparent focus:outline-none text-center"
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Centered Search Button */}
                        <div className="flex justify-center -mb-12 mt-8 relative z-10">
                            <button
                                onClick={() => setCurrentStep(1)}
                                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-serif font-bold tracking-widest rounded-sm transform bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary "
                            >
                                Search
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ====================== STEPPER SECTION (Below Hero) ====================== */}
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
                        {/* STEP 1 */}
                        {currentStep === 1 && (
                            <div>
                                <h3 className="text-2xl font-semibold text-center mb-8">
                                    Available {selectedType === "room" ? "Rooms" : selectedType === "restaurant" ? "Restaurants" : "Meeting Venues"}
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentData.map((item: any) => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleItemSelect(item)}
                                            className="border rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer group"
                                        >
                                            <div className="relative h-52">
                                                <Image
                                                    src={item.coverImage || item.heroImage || item.images?.[0]}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                                                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                                                {item.price && (
                                                    <p className="text-xl font-bold text-green-600">৳{item.offer || item.price}</p>
                                                )}
                                                <button className="mt-4 w-full bg-[#051C08] text-white py-3 rounded-xl hover:bg-black">
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 2 & STEP 3 remain the same as before */}
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
                                        <p className="font-semibold capitalize">{selectedType}</p>
                                        <p className="font-medium text-gray-600">Item:</p>
                                        <p className="font-semibold">{selectedItem.name}</p>
                                        <p className="font-medium text-gray-600">Check-In:</p>
                                        <p className="font-semibold">{searchData.checkIn || "—"}</p>
                                        <p className="font-medium text-gray-600">Check-Out:</p>
                                        <p className="font-semibold">{searchData.checkOut || "—"}</p>
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

export default EnhancedBookingStepper;