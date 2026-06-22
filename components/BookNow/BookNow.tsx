"use client";

import React, { useState } from "react";
import { FiCheck, FiArrowLeft, FiArrowRight, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import PageHero from "../common/pagehero";
import BookingSearch from "./BookingSearch";
import Image from "next/image";

const EnhancedBookingStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedType, setSelectedType] = useState<"room" | "restaurant" | "meeting">("room");
    const [selectedItem, setSelectedItem] = useState<any>(null);

    console.log("current", currentStep)

    const [searchData, setSearchData] = useState({
        location: "Cox's Bazar",
        checkIn: "",
        checkOut: "",
        guests: "1",
        adults: "0",
        children: "0",
    });

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });

    const getCurrentData = () => {
        // switch (selectedType) {
        //     case "room": return rooms;
        //     case "restaurant": return Restaurants;
        //     case "meeting": return Meetings;
        //     default: return rooms;
        // }
    };

    const currentData = getCurrentData();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value = e.target.value;

        // Clear leading zero when user starts typing
        if ((e.target.name === "guests" || e.target.name === "adults" || e.target.name === "children") && value === "0") {
            value = "";
        }

        setSearchData({ ...searchData, [e.target.name]: value });
    };

    const handleSearchSubmit = () => {
        console.log("✅ Search Submitted with following data:", searchData);
        
        // You can add more logic here later (API call, filter rooms, etc.)
        alert("Search Submitted Successfully!\n\nCheck console for data.");

        // Move to next step (you can change this behavior)
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

            {/* search section*/}
            <BookingSearch
                searchData={searchData}
                handleSearchChange={handleSearchChange}
                onSearchClick={handleSearchSubmit}
            />

            {/* ====================== STEPPER SECTION (Below Hero) ====================== */}
            
        </>
    );
};

export default EnhancedBookingStepper;