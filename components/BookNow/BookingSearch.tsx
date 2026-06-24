"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";

interface SearchData {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    adults: string;
    children: string;
    rooms?: number;
    childrenAges?: number[];
}

interface BookingSearchProps {
    searchData: SearchData;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSearchClick: () => void;
    onGuestChange?: (guestsData: { rooms: number; adults: number; children: number; childrenAges: number[] }) => void;
}

const BookingSearch: React.FC<BookingSearchProps> = ({
    searchData,
    handleSearchChange,
    onSearchClick,
    onGuestChange,
}) => {
    const [errors, setErrors] = useState({ checkIn: "", checkOut: "" });
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);

    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [childrenAges, setChildrenAges] = useState<number[]>([]);

    // Ref for the guests section to detect outside clicks
    const guestSectionRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                guestSectionRef.current &&
                !guestSectionRef.current.contains(event.target as Node)
            ) {
                setShowGuestDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Sync with parent when dropdown is opened
    useEffect(() => {
        if (showGuestDropdown) {
            setRooms(Number(searchData.rooms) || 1);
            setAdults(Number(searchData.adults) || 1);
            setChildren(Number(searchData.children) || 0);
            setChildrenAges(searchData.childrenAges || []);
        }
    }, [showGuestDropdown, searchData]);

    // Update parent whenever guest data changes
    const updateParentGuests = () => {
        onGuestChange?.({
            rooms,
            adults,
            children,
            childrenAges,
        });
    };

    // Update parent when dropdown closes
    useEffect(() => {
        if (!showGuestDropdown) {
            updateParentGuests();
        }
    }, [showGuestDropdown, rooms, adults, children, childrenAges]);

    // Validation
    const validateDates = (): boolean => {
        const newErrors = { checkIn: "", checkOut: "" };
        let isValid = true;

        if (!searchData.checkIn || !searchData.checkOut) {
            newErrors.checkIn = "Please select both dates";
            newErrors.checkOut = "Please select both dates";
            isValid = false;
        } else {
            const checkInDate = new Date(searchData.checkIn);
            const checkOutDate = new Date(searchData.checkOut);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (checkInDate < today) {
                newErrors.checkIn = "Check-in date cannot be in the past";
                isValid = false;
            }
            if (checkOutDate <= checkInDate) {
                newErrors.checkOut = "Check-out date must be after Check-in date";
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    // Auto-fill dates
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const todayStr = today.toISOString().split("T")[0];
        const tomorrowStr = tomorrow.toISOString().split("T")[0];

        if (!searchData.checkIn) {
            handleSearchChange({ target: { name: "checkIn", value: todayStr } } as React.ChangeEvent<HTMLInputElement>);
        }
        if (!searchData.checkOut) {
            handleSearchChange({ target: { name: "checkOut", value: tomorrowStr } } as React.ChangeEvent<HTMLInputElement>);
        }
    }, [searchData.checkIn, searchData.checkOut, handleSearchChange]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e);
        setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    };

    useEffect(() => {
        if (searchData.checkIn || searchData.checkOut) {
            validateDates();
        }
    }, [searchData.checkIn, searchData.checkOut]);

    const openDatePicker = (name: string) => {
        const input = document.querySelector(`input[name="${name}"]`) as HTMLInputElement;
        if (input) {
            input.focus();
            input.showPicker?.();
        }
    };

    const increaseRooms = () => {
        const newRooms = rooms + 1;
        setRooms(newRooms);
        if (adults < newRooms) setAdults(newRooms);
    };

    const decreaseRooms = () => {
        if (rooms > 1) setRooms(rooms - 1);
    };

    const increaseAdults = () => setAdults(adults + 1);
    const decreaseAdults = () => {
        if (adults > rooms) setAdults(adults - 1);
    };

    const increaseChildren = () => {
        setChildren(prev => prev + 1);
        setChildrenAges(prev => [...prev, 0]);
    };

    const decreaseChildren = () => {
        if (children > 0) {
            setChildren(prev => prev - 1);
            setChildrenAges(prev => prev.slice(0, -1));
        }
    };

    return (
        <section className="-mt-26 relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_32px_50px_-20px_rgba(0,0,0,0.08)] border border-white/60 p-3 sm:p-5">
                    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-visible ring-1 ring-black/[0.01]">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                            {/* Check In */}
                            <div className="p-4 sm:p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
                                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200 relative cursor-pointer flex-shrink-0"
                                    onClick={() => openDatePicker("checkIn")}>
                                    <FiCalendar className="w-5 h-5 z-10 relative" />
                                    <input type="date" name="checkIn" value={searchData.checkIn} onChange={handleDateChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hide-date-icon" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label className="block text-[10px] font-extrabold text-slate-400 mb-0.5 tracking-widest uppercase">Check In</label>
                                    <input type="date" name="checkIn" value={searchData.checkIn} onChange={handleDateChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="w-full font-bold text-sm text-slate-800 bg-transparent focus:outline-none focus:text-emerald-600 transition-colors cursor-text" />
                                    {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                                </div>
                            </div>

                            {/* Check Out */}
                            <div className="p-4 sm:p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
                                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200 relative cursor-pointer flex-shrink-0"
                                    onClick={() => openDatePicker("checkOut")}>
                                    <FiCalendar className="w-5 h-5 z-10 relative" />
                                    <input type="date" name="checkOut" value={searchData.checkOut} onChange={handleDateChange}
                                        min={searchData.checkIn || new Date().toISOString().split("T")[0]}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hide-date-icon" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label className="block text-[10px] font-extrabold text-slate-400 mb-0.5 tracking-widest uppercase">Check Out</label>
                                    <input type="date" name="checkOut" value={searchData.checkOut} onChange={handleDateChange}
                                        min={searchData.checkIn || new Date().toISOString().split("T")[0]}
                                        className="w-full font-bold text-sm text-slate-800 bg-transparent focus:outline-none focus:text-emerald-600 transition-colors cursor-text" />
                                    {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                                </div>
                            </div>

                            {/* Guests Dropdown */}
                            <div className="relative" ref={guestSectionRef}>
                                <div className="relative flex gap-4 items-center group z-[999] p-4 sm:p-5 transition-all duration-200 cursor-pointer">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex-shrink-0">
                                        <FiUsers className="w-5 h-5" />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowGuestDropdown(prev => !prev)}
                                        className="flex-1 flex items-center justify-between text-left min-w-0"
                                    >
                                        <div className="truncate">
                                            <p className="font-medium text-slate-800">
                                                {adults} adults
                                                {children > 0 && `, ${children} ${children === 1 ? "child" : "children"}`}
                                            </p>
                                            <p className="text-sm text-slate-500">{rooms} rooms</p>
                                        </div>
                                        <svg className={`w-5 h-5 transition-transform text-gray-600 flex-shrink-0 ${showGuestDropdown ? "rotate-180" : ""}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>

                                {showGuestDropdown && (
                                    <div className="absolute top-full left-0 right-0 -mt-3 md:left-auto md:right-0 md:w-[350px] w-full bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4 z-[9999] max-h-[85vh] overflow-auto">
                                        <div className="space-y-6 text-black">
                                            {/* Rooms */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold text-lg">Rooms</h4>
                                                    <p className="text-sm text-gray-500">Number of rooms</p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button type="button" onClick={decreaseRooms} disabled={rooms === 1}
                                                        className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xl font-medium transition-all ${rooms === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}>
                                                        -
                                                    </button>
                                                    <span className="font-bold text-2xl w-8 text-center">{rooms}</span>
                                                    <button type="button" onClick={increaseRooms}
                                                        className="w-9 h-9 rounded-xl border border-gray-300 flex items-center justify-center text-xl font-medium text-blue-600 hover:bg-blue-50 transition-all">
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Adults */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold text-lg">Adults</h4>
                                                    <p className="text-sm text-gray-500">Ages 18+</p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button type="button" onClick={decreaseAdults} disabled={adults <= rooms}
                                                        className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xl font-medium transition-all ${adults <= rooms ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}>
                                                        -
                                                    </button>
                                                    <span className="font-bold text-2xl w-8 text-center">{adults}</span>
                                                    <button type="button" onClick={increaseAdults}
                                                        className="w-9 h-9 rounded-xl border border-gray-300 flex items-center justify-center text-xl font-medium text-blue-600 hover:bg-blue-50 transition-all">
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Children */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold text-lg">Children</h4>
                                                    <p className="text-sm text-gray-500">Ages 0-17</p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button type="button" onClick={decreaseChildren} disabled={children === 0}
                                                        className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xl font-medium transition-all ${children === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}>
                                                        -
                                                    </button>
                                                    <span className="font-bold text-2xl w-8 text-center">{children}</span>
                                                    <button type="button" onClick={increaseChildren}
                                                        className="w-9 h-9 rounded-xl border border-gray-300 flex items-center justify-center text-xl font-medium text-blue-600 hover:bg-blue-50 transition-all">
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {children > 0 && (
                                                <div className="pt-4 border-t border-gray-200">
                                                    <p className="text-sm text-gray-600 mb-4">
                                                        For accurate pricing, please enter each child&apos;s age:
                                                    </p>
                                                    <div className="space-y-3">
                                                        {childrenAges.map((age, index) => (
                                                            <select
                                                                key={index}
                                                                value={age}
                                                                onChange={(e) => {
                                                                    const updated = [...childrenAges];
                                                                    updated[index] = Number(e.target.value);
                                                                    setChildrenAges(updated);
                                                                }}
                                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                                                            >
                                                                {Array.from({ length: 18 }, (_, i) => (
                                                                    <option key={i} value={i}>Child {index + 1} — {i} years old</option>
                                                                ))}
                                                            </select>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="" >
                                                <button
                                                    onClick={() => {
                                                        updateParentGuests();
                                                        if (validateDates()) onSearchClick(); 
                                                        setShowGuestDropdown(prev => !prev)

                                                    }}
                                                    className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-sans font-bold tracking-widest uppercase rounded-xl transform transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg bg-secondary text-white hover:bg-secondary/90 dark:bg-white dark:text-secondary dark:hover:bg-slate-100 cursor-pointer w-full sm:w-auto"
                                                >
                                                    Search Properties
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center -mb-9 mt-6 relative z-10 px-4">
                        <button
                            onClick={() => {
                                updateParentGuests();
                                if (validateDates()) onSearchClick();
                            }}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-sans font-bold tracking-widest uppercase rounded-xl transform transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg bg-secondary text-white hover:bg-secondary/90 dark:bg-white dark:text-secondary dark:hover:bg-slate-100 cursor-pointer w-full sm:w-auto"
                        >
                            Search Properties
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSearch;
