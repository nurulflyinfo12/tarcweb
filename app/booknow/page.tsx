"use client"

import PageHero from "@/components/common/pagehero";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const booknow = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        designation: "",
        address: "",
        checkIn: "",
        checkOut: "",
        adults: "2",
        children: "0",
        childrenAge: "",
        roomCategory: "",
        roomQuantity: "1",
        suiteType: "",
        message: "",
        source: "",
        rateType: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you! Your event inquiry has been submitted successfully.");
    };

    return (
        <>
        <PageHero 
         title="Book Now"
         backgroundImage="/images/specialoffers/specialoffers.png"
        />
        <div id="bookForm" className="w-full py-8 px-4 sm:px-6 md:px-10 min-h-screen font-sans">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#E29A26]">
                    Book This Now!
                </h1>
                <p className="text-white text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed opacity-90">
                    Booking restaurant has never been this simple. Fill up the form below with all the necessary information and wait for your booking confirmation mail.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl space-y-6">
                    {/* All form fields remain exactly the same as you provided */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">First Name:</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter Your First Name" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Last Name:</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter Your Last Name" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                    </div>

                    {/* ... Rest of the form is unchanged (kept exactly as you had) ... */}
                    {/* Row 2 to Rules - All same as your original code */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Phone Number:</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter Your Phone Number" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Your Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                    </div>

                    {/* (All other rows are kept exactly the same - omitted here for brevity but fully present in the file) */}
                    {/* Row 3: Corporate Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Designation And Organisation Name:</label>
                            <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter Designation & Organisation" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Enter Your Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                    </div>

                    {/* Row 4: Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Check In:</label>
                            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full border border-neutral-300 p-3 text-sm text-neutral-500 rounded-md focus:outline-none focus:border-neutral-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Check out:</label>
                            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full border border-neutral-300 p-3 text-sm text-neutral-500 rounded-md focus:outline-none focus:border-neutral-500" />
                        </div>
                    </div>

                    {/* Row 5: Group Count */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Number Of Adults:</label>
                            <input type="text" name="adults" value={formData.adults} onChange={handleChange} placeholder="Number of Adults (ex. 2)" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Number Of Children:</label>
                            <input type="text" name="children" value={formData.children} onChange={handleChange} placeholder="Number of Children (ex. 2)" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                    </div>

                    {/* Row 6: Info Source */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Children's Age:</label>
                            <input type="text" name="childrenAge" value={formData.childrenAge} onChange={handleChange} placeholder="Children's Age (ex. Child 1: 5, Child 2: 4)" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Where You Learned About Us:</label>
                            <div className="relative">
                                <select name="source" value={formData.source} onChange={handleChange} className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500">
                                    <option value="">Where you learned about us?</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Google">Google Search</option>
                                    <option value="Friend">From a Friend</option>
                                </select>
                                <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Row 7: Room Categories & Quantity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <div className="flex flex-col relative">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Room Category:</label>
                            <div className="relative">
                                <select name="roomCategory" value={formData.roomCategory} onChange={handleChange} className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500">
                                    <option value="">---Please choose an option---</option>
                                    <option value="King Deluxe">King Deluxe</option>
                                    <option value="Queen Deluxe">Queen Deluxe</option>
                                    <option value="Executive Suite">Executive Suite</option>
                                </select>
                                <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none" size={16} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Room Quantity:</label>
                            <input type="text" name="roomQuantity" value={formData.roomQuantity} onChange={handleChange} placeholder="Enter number of quantity" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
                        </div>
                    </div>

                    {/* Row 8: Rate Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-end">
                        <div className="flex flex-col relative">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Rate Type:</label>
                            <div className="relative">
                                <select name="rateType" value={formData.rateType} onChange={handleChange} className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500">
                                    <option value="">---Please choose an option---</option>
                                    <option value="Standard">Standard Rate</option>
                                    <option value="Package">Package Rate</option>
                                </select>
                                <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none" size={16} />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="bg-[#122A16] text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded shadow hover:bg-[#1A3D20] transition-colors uppercase">
                                + Add More Room
                            </button>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col pt-2">
                        <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Messages:</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Enter Your Message" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400 resize-y" />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button type="submit" className="bg-[#051C08] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded hover:bg-[#0C2D11] transition-all duration-200 shadow-md">
                            Submit
                        </button>
                    </div>

                    <div className="pt-6 border-t border-neutral-100 space-y-2">
                        {[
                            "Room up to 10 years image is dynamic condition.",
                            "Child age below 5 years will get complimentary food.",
                            "Child age 5 to below 10 years will be charged 50% food of total.",
                            "Extra bed is dynamic depending on standard chargeable.",
                            "Extra Person Age 10 years & above will be charged full price for room & food 2500 BDT per person for accommodation."
                        ].map((rule, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-[11px] font-medium text-neutral-500 leading-normal">
                                <span className="text-[#E29A26] mt-0.5 shrink-0">👉</span>
                                <p>{rule}</p>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default booknow;