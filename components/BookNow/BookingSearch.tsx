"use client";

import React, { useState, useEffect } from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";

interface SearchData {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    adults: string;
    children: string;
}

interface BookingSearchProps {
    searchData: SearchData;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSearchClick: () => void;
}

const BookingSearch: React.FC<BookingSearchProps> = ({
    searchData,
    handleSearchChange,
    onSearchClick,
}) => {

    const [errors, setErrors] = useState({ checkIn: "", checkOut: "" });

    // Validation function - Now shows red text instead of alert
    // const validateDates = (): boolean => {
    //     const newErrors = { checkIn: "", checkOut: "" };
    //     let isValid = true;

    //     if (!searchData.checkIn || !searchData.checkOut) {
    //         newErrors.checkIn = "Please select both dates";
    //         newErrors.checkOut = "Please select both dates";
    //         isValid = false;
    //     } else {
    //         const checkInDate = new Date(searchData.checkIn);
    //         const checkOutDate = new Date(searchData.checkOut);
    //         const today = new Date();
    //         today.setHours(0, 0, 0, 0);

    //         if (checkInDate < today) {
    //             newErrors.checkIn = "Check-in date cannot be in the past";
    //             isValid = false;
    //         }

    //         if (checkOutDate <= checkInDate) {
    //             newErrors.checkOut = "Check-out date must be after Check-in date";
    //             isValid = false;
    //         }
    //     }

    //     setErrors(newErrors);
    //     return isValid;
    // };

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

    // Auto-fill today's date for Check-in and tomorrow for Check-out
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const todayStr = today.toISOString().split("T")[0];
        const tomorrowStr = tomorrow.toISOString().split("T")[0];

        if (!searchData.checkIn) {
            handleSearchChange({
                target: { name: "checkIn", value: todayStr }
            } as React.ChangeEvent<HTMLInputElement>);
        }

        if (!searchData.checkOut) {
            handleSearchChange({
                target: { name: "checkOut", value: tomorrowStr }
            } as React.ChangeEvent<HTMLInputElement>);
        }
    }, [searchData.checkIn, searchData.checkOut, handleSearchChange]);

    // Clear error when user changes the field
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e);
        setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    };

    useEffect(() => {
        if (searchData.checkIn || searchData.checkOut) {
            validateDates();
        }
    }, [searchData.checkIn, searchData.checkOut]);

    // Open date picker when calendar icon is clicked
    const openDatePicker = (name: string) => {
        const input = document.querySelector(`input[name="${name}"]`) as HTMLInputElement;
        if (input) {
            input.focus();
            input.showPicker?.(); // Modern browsers support
        }
    };

    return (
        <section className="-mt-26 relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_32px_50px_-20px_rgba(0,0,0,0.08)] border border-white/60 p-3 sm:p-5">

                    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden ring-1 ring-black/[0.01]">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                            {/* Check In */}
                            <div className="p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
                                <div 
                                    className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200 relative cursor-pointer"
                                    onClick={() => openDatePicker("checkIn")}
                                >
                                    <FiCalendar className="w-5 h-5 z-10 relative" />
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={searchData.checkIn}
                                        onChange={handleDateChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hide-date-icon"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label className="block text-[10px] font-extrabold text-slate-400 mb-0.5 tracking-widest uppercase">
                                        Check In
                                    </label>
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={searchData.checkIn}
                                        onChange={handleDateChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        onFocus={(e) => { if (e.target.value === "") e.target.placeholder = ""; }}
                                        className="w-full font-bold text-sm text-slate-800 bg-transparent focus:outline-none focus:text-emerald-600 transition-colors cursor-text"
                                        placeholder="Select Date"
                                    />
                                    {errors.checkIn && (
                                        <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>
                                    )}
                                </div>
                            </div>

                            {/* Check Out */}
                            <div className="p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
                                <div 
                                    className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200 relative cursor-pointer"
                                    onClick={() => openDatePicker("checkOut")}
                                >
                                    <FiCalendar className="w-5 h-5 z-10 relative" />
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={searchData.checkOut}
                                        onChange={handleDateChange}
                                        min={searchData.checkIn || new Date().toISOString().split("T")[0]}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hide-date-icon"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label className="block text-[10px] font-extrabold text-slate-400 mb-0.5 tracking-widest uppercase">
                                        Check Out
                                    </label>
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={searchData.checkOut}
                                        onChange={handleDateChange}
                                        min={searchData.checkIn || new Date().toISOString().split("T")[0]}
                                        onFocus={(e) => { if (e.target.value === "") e.target.placeholder = ""; }}
                                        className="w-full font-bold text-sm text-slate-800 bg-transparent focus:outline-none focus:text-emerald-600 transition-colors cursor-text"
                                        placeholder="Select Date"
                                    />
                                    {errors.checkOut && (
                                        <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>
                                    )}
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
                                    <FiUsers className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label className="block text-[10px] font-extrabold text-slate-400 mb-1.5 tracking-widest uppercase">
                                        Guests
                                    </label>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 group-hover:bg-white transition-colors duration-200">
                                            <span className="text-xs font-semibold text-slate-600">Total Guests:</span>
                                            <input
                                                type="text"
                                                name="guests"
                                                value={searchData.guests}
                                                onChange={handleSearchChange}
                                                onFocus={(e) => {
                                                    if (e.target.value === "0") e.target.value = "";
                                                    e.target.select();
                                                }}
                                                onBlur={(e) => {
                                                    if (e.target.value === "") e.target.value = "0";
                                                }}
                                                onKeyPress={(e) => {
                                                    if (!/[0-9]/.test(e.key)) e.preventDefault();
                                                }}
                                                inputMode="numeric"
                                                className="w-10 font-bold text-sm text-slate-800 bg-transparent focus:outline-none text-right hide-number-arrows cursor-text"
                                                min="1"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 w-full">
                                            <div className="flex items-center justify-between bg-slate-50/80 px-2.5 py-1 rounded-lg border border-slate-100/60">
                                                <span className="text-[11px] font-medium text-slate-500">Adults:</span>
                                                <input
                                                    type="text"
                                                    name="adults"
                                                    value={searchData.adults}
                                                    onChange={handleSearchChange}
                                                    onFocus={(e) => {
                                                        if (e.target.value === "0") e.target.value = "";
                                                        e.target.select();
                                                    }}
                                                    onBlur={(e) => {
                                                        if (e.target.value === "") e.target.value = "0";
                                                    }}
                                                    onKeyPress={(e) => {
                                                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                                                    }}
                                                    inputMode="numeric"
                                                    className="w-6 font-bold text-xs text-slate-800 bg-transparent focus:outline-none text-right hide-number-arrows cursor-text"
                                                    min="0"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between bg-slate-50/80 px-2.5 py-1 rounded-lg border border-slate-100/60">
                                                <span className="text-[11px] font-medium text-slate-500">Child:</span>
                                                <input
                                                    type="text"
                                                    name="children"
                                                    value={searchData.children}
                                                    onChange={handleSearchChange}
                                                    onFocus={(e) => {
                                                        if (e.target.value === "0") e.target.value = "";
                                                        e.target.select();
                                                    }}
                                                    onBlur={(e) => {
                                                        if (e.target.value === "") e.target.value = "0";
                                                    }}
                                                    onKeyPress={(e) => {
                                                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                                                    }}
                                                    inputMode="numeric"
                                                    className="w-6 font-bold text-xs text-slate-800 bg-transparent focus:outline-none text-right hide-number-arrows cursor-text"
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center -mb-9 mt-6 relative z-10">
                        <button
                            onClick={() => {
                                if (validateDates()) {
                                    onSearchClick();
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-sans font-bold tracking-widest uppercase rounded-xl transform transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg bg-secondary text-white hover:bg-secondary/90 dark:bg-white dark:text-secondary dark:hover:bg-slate-100 cursor-pointer"
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

















// "use client";

// import React, { useState, useEffect } from "react";
// import { FiCalendar, FiUsers } from "react-icons/fi";

// interface SearchData {
//     location: string;
//     checkIn: string;
//     checkOut: string;
//     guests: string;
//     adults: string;
//     children: string;
// }

// interface BookingSearchProps {
//     searchData: SearchData;
//     handleSearchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
//     onSearchClick: () => void;
// }

// const BookingSearch: React.FC<BookingSearchProps> = ({
//     searchData,
//     handleSearchChange,
//     onSearchClick,
// }) => {

//     const [errors, setErrors] = useState({ checkIn: "", checkOut: "" });

//     // Real-time validation
//     const validateDates = (): boolean => {
//         const newErrors = { checkIn: "", checkOut: "" };
//         let isValid = true;

//         if (!searchData.checkIn || !searchData.checkOut) {
//             newErrors.checkIn = "Please select both dates";
//             newErrors.checkOut = "Please select both dates";
//             isValid = false;
//         } else {
//             const checkInDate = new Date(searchData.checkIn);
//             const checkOutDate = new Date(searchData.checkOut);
//             const today = new Date();
//             today.setHours(0, 0, 0, 0);

//             if (checkInDate < today) {
//                 newErrors.checkIn = "Check-in date cannot be in the past";
//                 isValid = false;
//             }

//             if (checkOutDate <= checkInDate) {
//                 newErrors.checkOut = "Check-out date must be after Check-in date";
//                 isValid = false;
//             }
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     // Auto-fill today's date for Check-in and tomorrow for Check-out
//     useEffect(() => {
//         const today = new Date();
//         const tomorrow = new Date(today);
//         tomorrow.setDate(tomorrow.getDate() + 1);

//         const todayStr = today.toISOString().split("T")[0];
//         const tomorrowStr = tomorrow.toISOString().split("T")[0];

//         if (!searchData.checkIn) {
//             handleSearchChange({
//                 target: { name: "checkIn", value: todayStr }
//             } as React.ChangeEvent<HTMLInputElement>);
//         }

//         if (!searchData.checkOut) {
//             handleSearchChange({
//                 target: { name: "checkOut", value: tomorrowStr }
//             } as React.ChangeEvent<HTMLInputElement>);
//         }
//     }, []); // Removed dependencies to run only once

//     // Real-time validation on date change
//     useEffect(() => {
//         if (searchData.checkIn || searchData.checkOut) {
//             validateDates();
//         }
//     }, [searchData.checkIn, searchData.checkOut]);

//     // Handle date change + immediate validation
//     const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         handleSearchChange(e);
//         // Validation will run automatically via useEffect
//     };

//     // Open date picker when calendar icon is clicked
//     const openDatePicker = (name: string) => {
//         const input = document.querySelector(`input[name="${name}"]`) as HTMLInputElement;
//         if (input) {
//             input.focus();
//             input.showPicker?.();
//         }
//     };

//     return (
//         <section className="-mt-26 relative z-30">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_32px_50px_-20px_rgba(0,0,0,0.08)] border border-white/60 p-3 sm:p-5">

//                     <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden ring-1 ring-black/[0.01]">
//                         <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

//                             {/* Check In */}
//                             <div className="p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
//                                 <div 
//                                     className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200 relative cursor-pointer"
//                                     onClick={() => openDatePicker("checkIn")}
//                                 >
//                                     <FiCalendar className="w-5 h-5 z-10 relative" />
//                                     <input
//                                         type="date"
//                                         name="checkIn"
//                                         value={searchData.checkIn}
//                                         onChange={handleDateChange}
//                                         min={new Date().toISOString().split("T")[0]}
//                                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hide-date-icon"
//                                     />
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <label className="block text-[10px] font-extrabold text-slate-400 mb-0.5 tracking-widest uppercase">
//                                         Check In
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="checkIn"
//                                         value={searchData.checkIn}
//                                         onChange={handleDateChange}
//                                         min={new Date().toISOString().split("T")[0]}
//                                         className="w-full font-bold text-sm text-slate-800 bg-transparent focus:outline-none focus:text-emerald-600 transition-colors cursor-text"
//                                         placeholder="Select Date"
//                                     />
//                                     {errors.checkIn && (
//                                         <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Check Out */}
//                             <div className="p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
//                                 <div 
//                                     className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200 relative cursor-pointer"
//                                     onClick={() => openDatePicker("checkOut")}
//                                 >
//                                     <FiCalendar className="w-5 h-5 z-10 relative" />
//                                     <input
//                                         type="date"
//                                         name="checkOut"
//                                         value={searchData.checkOut}
//                                         onChange={handleDateChange}
//                                         min={searchData.checkIn || new Date().toISOString().split("T")[0]}
//                                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hide-date-icon"
//                                     />
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <label className="block text-[10px] font-extrabold text-slate-400 mb-0.5 tracking-widest uppercase">
//                                         Check Out
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="checkOut"
//                                         value={searchData.checkOut}
//                                         onChange={handleDateChange}
//                                         min={searchData.checkIn || new Date().toISOString().split("T")[0]}
//                                         className="w-full font-bold text-sm text-slate-800 bg-transparent focus:outline-none focus:text-emerald-600 transition-colors cursor-text"
//                                         placeholder="Select Date"
//                                     />
//                                     {errors.checkOut && (
//                                         <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Guests Section (unchanged) */}
//                             <div className="p-5 hover:bg-slate-50/50 transition-all duration-200 flex gap-4 items-center group">
//                                 <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
//                                     <FiUsers className="w-5 h-5" />
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <label className="block text-[10px] font-extrabold text-slate-400 mb-1.5 tracking-widest uppercase">
//                                         Guests
//                                     </label>
//                                     <div className="flex flex-col gap-2 w-full">
//                                         <div className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 group-hover:bg-white transition-colors duration-200">
//                                             <span className="text-xs font-semibold text-slate-600">Total Guests:</span>
//                                             <input
//                                                 type="text"
//                                                 name="guests"
//                                                 value={searchData.guests}
//                                                 onChange={handleSearchChange}
//                                                 onFocus={(e) => {
//                                                     if (e.target.value === "0") e.target.value = "";
//                                                     e.target.select();
//                                                 }}
//                                                 onBlur={(e) => {
//                                                     if (e.target.value === "") e.target.value = "0";
//                                                 }}
//                                                 onKeyPress={(e) => {
//                                                     if (!/[0-9]/.test(e.key)) e.preventDefault();
//                                                 }}
//                                                 inputMode="numeric"
//                                                 className="w-10 font-bold text-sm text-slate-800 bg-transparent focus:outline-none text-right hide-number-arrows cursor-text"
//                                                 min="1"
//                                             />
//                                         </div>
//                                         <div className="grid grid-cols-2 gap-2 w-full">
//                                             <div className="flex items-center justify-between bg-slate-50/80 px-2.5 py-1 rounded-lg border border-slate-100/60">
//                                                 <span className="text-[11px] font-medium text-slate-500">Adults:</span>
//                                                 <input
//                                                     type="text"
//                                                     name="adults"
//                                                     value={searchData.adults}
//                                                     onChange={handleSearchChange}
//                                                     onFocus={(e) => {
//                                                         if (e.target.value === "0") e.target.value = "";
//                                                         e.target.select();
//                                                     }}
//                                                     onBlur={(e) => {
//                                                         if (e.target.value === "") e.target.value = "0";
//                                                     }}
//                                                     onKeyPress={(e) => {
//                                                         if (!/[0-9]/.test(e.key)) e.preventDefault();
//                                                     }}
//                                                     inputMode="numeric"
//                                                     className="w-6 font-bold text-xs text-slate-800 bg-transparent focus:outline-none text-right hide-number-arrows cursor-text"
//                                                     min="0"
//                                                 />
//                                             </div>
//                                             <div className="flex items-center justify-between bg-slate-50/80 px-2.5 py-1 rounded-lg border border-slate-100/60">
//                                                 <span className="text-[11px] font-medium text-slate-500">Child:</span>
//                                                 <input
//                                                     type="text"
//                                                     name="children"
//                                                     value={searchData.children}
//                                                     onChange={handleSearchChange}
//                                                     onFocus={(e) => {
//                                                         if (e.target.value === "0") e.target.value = "";
//                                                         e.target.select();
//                                                     }}
//                                                     onBlur={(e) => {
//                                                         if (e.target.value === "") e.target.value = "0";
//                                                     }}
//                                                     onKeyPress={(e) => {
//                                                         if (!/[0-9]/.test(e.key)) e.preventDefault();
//                                                     }}
//                                                     inputMode="numeric"
//                                                     className="w-6 font-bold text-xs text-slate-800 bg-transparent focus:outline-none text-right hide-number-arrows cursor-text"
//                                                     min="0"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex justify-center -mb-9 mt-6 relative z-10">
//                         <button
//                             onClick={() => {
//                                 if (validateDates()) {
//                                     onSearchClick();
//                                 }
//                             }}
//                             className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-sans font-bold tracking-widest uppercase rounded-xl transform transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg bg-secondary text-white hover:bg-secondary/90 dark:bg-white dark:text-secondary dark:hover:bg-slate-100 cursor-pointer"
//                         >
//                             Search Properties
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BookingSearch;