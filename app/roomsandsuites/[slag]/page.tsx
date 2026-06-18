
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useParams } from "next/navigation";
import PageHero from "@/components/common/pagehero";
import { rooms } from "@/components/RoomAndSuites/RoomsAndSuites";
import { FaAppleAlt, FaCoffee, FaHotTub, FaLongArrowAltRight, FaSwimmingPool } from "react-icons/fa";
import { FaBook, FaCheck, FaChevronDown, FaChevronLeft, FaChevronRight, FaChild, FaDumbbell, FaUtensils, FaWater, FaWifi } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import AtAGlance from "@/components/Home/AtAGlance";

interface RoomPageProps {
    params: {
        slag: string;
    };
}


const RoomPage = ({ params: initialParams }: RoomPageProps) => {
    const params = useParams();

    const [isPaused, setIsPaused] = useState(false);



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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Booking request submitted successfully! (Demo)");
    };

    const amenities = [
        "One 7 x 7 king size bed",
        "Heavenly duvet & pillows with duck down",
        "LED TV",
        "Mini bar",
        "Central air condition system",
        "Safety deposit box",
        "24 hours room service",
    ];

    const complimentaryServices = [
        { name: "Breakfast", icon: <FaUtensils size={14} /> },
        { name: "Swimming Pool", icon: <FaSwimmingPool size={15} /> },
        { name: "Fruit Basket", icon: <FaAppleAlt size={14} /> },
        { name: "Outdoor Jacuzzi", icon: <FaHotTub size={15} /> },
        { name: "Library", icon: <FaBook size={14} /> },
        { name: "Gym", icon: <FaDumbbell size={14} /> },
        { name: "Wi-Fi", icon: <FaWifi size={14} /> },
        { name: "Children Play Zone", icon: <FaChild size={14} /> },
        { name: "Tea & Coffee", icon: <FaCoffee size={14} /> },
        { name: "Mineral Water (2 bottles)", icon: <FaWater size={14} /> },
    ];

    // Fallback switch between hook data and dynamic layout props
    const currentSlug = params?.slag || initialParams?.slag;

    // Fixed slug matching identifier lookup from "params.slag" to currentSlug
    const room = rooms.find(
        (r) => r.id === Number(currentSlug)
    );

    // Dynamic stats mapper
    const stats = [
        { value: room?.sizeSQM || "36", label: "size sqm" },
        { value: room?.sizeSQF || "382", label: "size sqf" },
        { value: room?.maxGuests || "2", label: "max guests" },
    ];

    // Added the missing Carousel state machine for Rack Rate Slider
    const [currentIndex, setCurrentIndex] = useState(0);

    // Optional Auto-play effect for the rack rate carousel container (5 second intervals)
    useEffect(() => {
        if (!room?.images || room.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [room]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % rooms.length);
    }, [rooms.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
    }, [rooms.length]);

    return (
        <>
            {/* Hero Header Area */}
            <PageHero
                title={`${room?.name || "Room Details"}`}
                backgroundImage={`${room?.images?.[0] || ""}`}
            />

            {/* Images & Description Layer */}
            <div className="w-full py-12 md:py-16 my-8">
                <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6">

                    {/* Background Accent Backdrop - Pulled from your ImageCardSlider configuration */}
                    <div className="absolute inset-x-6 md:inset-x-10 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

                    <div
                        className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 shadow-xl border border-neutral-100/80 z-10"
                    >
                        {/* Text Content Block */}
                        <div className="w-full lg:w-[46%] shrink-0">
                            <div>
                                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                                    <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-secondary tracking-wide text-center lg:text-left">
                                        {room?.name}
                                    </h2>
                                    <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
                                </div>
                                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                                    {room?.description}
                                </p>
                            </div>
                        </div>

                        {/* Overlapping Image Collage Right */}
                        <div className="w-full flex flex-col items-center justify-center text-center lg:text-left px-2 py-2 lg:py-2">
                            <div className="w-full relative min-h-[360px] sm:min-h-[420px]">

                                {/* 1. Top Right Image frame */}
                                <div className="absolute top-0 right-0 w-[70%] h-[200px] sm:h-[240px] rounded-xl overflow-hidden shadow-xl z-0">
                                    <img
                                        src={`${room?.images?.[2] || ""}`}
                                        alt={`${room?.name || "Room"} main view`}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* 2. Bottom Left Custom Masked Image frame */}
                                <div className="absolute bottom-0 left-0 w-[60%] h-[200px] sm:h-[220px] z-10">
                                    <div className="w-full h-full border-[8px] border-white dark:border-[#0b2411] rounded-tr-[100px] rounded-bl-[40px] overflow-hidden shadow-2xl transition-colors duration-300">
                                        <img
                                            src={`${room?.images?.[1] || ""}`}
                                            alt={`${room?.name || "Room"} detail snapshot`}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facts & Figures Standalone Section Wrapper */}
            <section className="w-full bg-[#4E6241] py-12 border-t border-neutral-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Section Header with Cross Lines */}
                    <div className="flex items-center justify-center mb-10 sm:mb-14">
                        <div className="hidden sm:block flex-grow h-px bg-gradient-to-r from-transparent to-white/20"></div>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase px-6 whitespace-nowrap text-white">
                            Facts &amp; Figures
                        </h3>
                        <div className="hidden sm:block flex-grow h-px bg-gradient-to-l from-transparent to-white/20"></div>
                    </div>

                    {/* Highly Spaced Custom Metrics Row */}
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-32 max-w-5xl mx-auto py-0 px-4">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col items-center justify-around text-center px-4 text-white min-h-[130px] md:min-h-[160px]
                                    ${idx === 1 ? "sm:border-x sm:border-white/20 sm:px-12" : ""}
                                `}
                            >
                                <span className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-none">
                                    {stat.value}
                                </span>
                                <span className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#F8A529] m-0">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Rack Rate Feature Booking Split Component Box */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-4 py-16 md:py-24">

                {/* Left Column Slide Gallery */}
                <div className="relative group w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-neutral-100">
                    <div className="w-full h-full relative">
                        {room?.images?.slice(0, 3).map((imgUrl, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                <img
                                    src={imgUrl}
                                    alt={`Room slide view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Slider Arrow Controls */}
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <FiChevronRight size={24} />
                    </button>

                    {/* Dots Carousel Matrix Indicator dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-[#F8A529]" : "w-2 bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column Checkout Pricing Box Details */}
                <div className="flex flex-col items-center lg:items-center text-center lg:text-left space-y-6">

                    {/* Heading Title Accent Module */}
                    <div className="flex items-center gap-4 w-full justify-center">
                        <span className="h-px w-8 bg-[#F8A529]" />
                        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider whitespace-nowrap text-white">
                            Rack Rate
                        </h2>
                        <span className="h-px w-8 bg-[#F8A529]" />
                    </div>

                    {/* Price Value text element wrapper */}
                    <div>
                        <span className="block text-2xl font-black text-white tracking-tight">
                            BDT 36,000
                        </span>
                    </div>

                    {/* Marketing Promo Copy */}
                    <p className="text-base sm:text-lg text-white max-w-md">
                        Enjoy Special discount on room rack rate.
                    </p>

                    {/* Actionable Button Element */}
                    <div className="pt-4">
                        <a
                            href="#bookForm"
                            className="inline-flex items-center gap-3 bg-[#556B2F] hover:bg-[#3d4f22] text-white font-semibold tracking-widest text-sm px-8 py-4 rounded-xl shadow-lg shadow-[#556B2F]/20 transition-all duration-300 uppercase hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Book Now</span>
                            <FaLongArrowAltRight size={16} className="mt-0.5" />
                        </a>
                    </div>

                </div>
            </div>

            {/* Details info sections */}
            <div className="w-full py-12 md:py-16 my-8 bg-[#0B2214] p-4 md:p-8 rounded-3xl">
                {/* Container wrapper mimicking the dark green background crop from the image */}

                <div className="relative w-full max-w-[1400px] mx-auto px-2 sm:px-4">
                    <div className="absolute inset-x-6 md:inset-x-10 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
                    {/* Main Background Container with Mock Hotel Room Image */}
                    <div
                        className="relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 shadow-xl overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop')` }}
                    >
                        {/* Visual Dark Overlay to match the image transparency balance */}
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                        {/* ================= LEFT COLUMN: AMENITIES ================= */}
                        <div className="relative w-full lg:w-[45%] shrink-0 bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/40 shadow-lg z-10">
                            <div className="flex flex-col space-y-4 w-full">

                                {/* Title Header with Right-Side Green Accent Line */}
                                <div className="flex items-center gap-4 w-full">
                                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-[#3E5326] capitalize">
                                        Amenities
                                    </h2>
                                    <span className="h-[1px] flex-grow bg-[#3E5326]/40" />
                                </div>

                                {/* Styled Amenities Icon List */}
                                <ul className="flex flex-col space-y-4">
                                    {amenities.map((amenity, index) => (
                                        <li key={index} className="flex items-start gap-3 text-neutral-800">
                                            <span className="flex items-center justify-center text-[#3E5326] mt-1 shrink-0">
                                                <FaCheck size={12} className="stroke-[2]" />
                                            </span>
                                            <span className="text-[15px] font-medium leading-normal">
                                                {amenity}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        {/* ================= RIGHT COLUMN: COMPLIMENTARY SERVICES ================= */}
                        <div className="relative w-full lg:w-[55%] bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/40 shadow-lg z-10">
                            <div className="flex flex-col space-y-6 w-full">

                                {/* Complimentary Services Header Title with Line Accent */}
                                <div className="flex items-center gap-4 w-full">
                                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-[#3E5326] capitalize">
                                        Complimentary Services
                                    </h2>
                                    <span className="h-[1px] flex-grow bg-[#3E5326]/40" />
                                </div>

                                {/* 2-Column Responsive Layout Grid for Services */}
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                                    {complimentaryServices.map((service, index) => (
                                        <li key={index} className="flex items-center gap-3.5 text-neutral-800">
                                            {/* Dynamic Distinct Icons */}
                                            <span className="flex items-center justify-center text-[#556B2F] shrink-0 w-5">
                                                {service.icon}
                                            </span>
                                            <span className="text-[15px] font-medium leading-normal">
                                                {service.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* =========================================================
          DESKTOP ONLY CONTROLS: 3D THREE-COLUMN SPRING SLIDER
         ========================================================= */}
            <div
                className="hidden md:flex relative w-full mb-12 h-[480px] md:h-[580px] items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {room?.images?.map((img, index) => {
                    const total = room?.images?.length || 0;

                    const isCenter = index === currentIndex;
                    const isLeft =
                        index === (currentIndex - 1 + total) % total;
                    const isRight =
                        index === (currentIndex + 1) % total;

                    const isVisible = isCenter || isLeft || isRight;

                    return (
                        <motion.div
                            key={index}
                            layout
                            initial={false}
                            animate={{
                                x: isCenter ? 0 : isLeft ? -350 : isRight ? 350 : 0,
                                scale: isCenter ? 1 : 0.9,
                                opacity: isVisible ? (isCenter ? 1 : 0.55) : 0,
                                zIndex: isCenter ? 20 : 10,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                                mass: 1.2,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                pointerEvents: isVisible ? "auto" : "none",
                            }}
                            className="absolute w-[65%] h-full cursor-pointer select-none will-change-transform"
                        >
                            <img
                                src={img}
                                alt={`Room image ${index + 1}`}
                                draggable={false}
                                className="w-full h-full object-cover rounded-sm shadow-2xl transform-gpu"
                            />

                            {/* Navigation */}
                            {isCenter && (
                                <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevSlide();
                                        }}
                                        className="bg-black/20 hover:bg-primary p-4 rounded-full text-white backdrop-blur-sm transition-all duration-300"
                                    >
                                        <FaChevronLeft size={18} />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextSlide();
                                        }}
                                        className="bg-black/20 hover:bg-primary p-4 rounded-full text-white backdrop-blur-sm transition-all duration-300"
                                    >
                                        <FaChevronRight size={18} />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    );
                })}

                {/* EDGE GRADIENTS */}
                <div className="absolute left-0 top-0 w-[25%] h-full bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 top-0 w-[25%] h-full bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />
            </div>




            <AtAGlance></AtAGlance>
            {/* Booking Form */}
            <div className="w-full bg-[#0A1F0D] py-16 px-4 sm:px-6 md:px-10 min-h-screen font-sans">

                {/* ================= HEADER BRANDING SECTIONS ================= */}
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#E29A26]">
                        Book This Room Now
                    </h1>
                    <p className="text-white text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed opacity-90">
                        Booking rooms has never been this simple. Fill up the form below with all the necessary information and wait for your booking confirmation mail.
                    </p>
                </div>

                {/* ================= FORM BODY CONTAINER ================= */}
                <div className="max-w-[1100px] mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl space-y-6">

                        {/* Row 1: Names */}
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

                        {/* Row 2: Contact Details */}
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
                                        <option value="Social Media">Social Media</option>f
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

                        {/* Row 8: Rate Type & Add Button row */}
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
                            {/* The + Add More Room action box */}
                            <div className="flex justify-end">
                                <button type="button" className="bg-[#122A16] text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded shadow hover:bg-[#1A3D20] transition-colors uppercase">
                                    + Add More Room
                                </button>
                            </div>
                        </div>

                        {/* Message Text Panel */}
                        <div className="flex flex-col pt-2">
                            <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Messages:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Enter Your Message" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400 resize-y" />
                        </div>

                        {/* Center Submit Button container */}
                        <div className="flex justify-center pt-4">
                            <button type="submit" className="bg-[#051C08] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded hover:bg-[#0C2D11] transition-all duration-200 shadow-md">
                                Submit
                            </button>
                        </div>

                        {/* ================= RULES / NOTICES SECTION ================= */}
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
    );
};

export default RoomPage;