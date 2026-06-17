"use client";

import ImageGalleryModal from "@/components/common/ImageGalleryModal";
import PageHero from "@/components/common/pagehero";
import AdditionalFacilities from "@/components/SummerBreeze/AdditionalFacilities";
import ComplimentaryServices from "@/components/SummerBreeze/ComplimentaryServices";
import NearbyAttractions from "@/components/SummerBreeze/NearbyAttractions";
import RoomPackageCard from "@/components/SummerBreeze/RoomPackageCard";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

// Data 
const packages = [
    {
        name: "Vip room regular",
        price: "6500",
        offer: "5500",
        size: "382 sqft",
        images: [
            "/images/viproom.jpeg",
            "/images/vip1.jpeg",
            "/images/vip2.jpeg"
        ],
        inclusions: [
            "01 King Size Bed (7' x 7') along with a living room.",
            "Check-in: 02:00 pm. Check-out: 12:00 pm.",
            "02 persons Breakfast Included.",
            "Guests up to 10 years of age are defined as children.",
            "Children age up to 05 years STAY & BREAKFAST FREE.",
        ],
    },
    {
        name: "Super Deluxe Twin",
        price: "3000",
        offer: "2500",
        size: "382 sqft",
        images: [
            "/images/superdeluxetwin.jpeg",
            "/images/superdelux1.jpeg",
            "/images/superdelux2.jpeg",
            "/images/superdelux3.jpeg",
        ],
        inclusions: [
            "01 King Size Bed (7' x 7') along with a living room.",
            "Check-in: 02:00 pm. Check-out: 12:00 pm.",
            "02 persons Breakfast Included.",
            "Guests up to 10 years of age are defined as children.",
            "Children age up to 05 years STAY & BREAKFAST FREE.",
        ],
    },
    {
        name: "Super Deluxe Couple",
        price: "3500",
        offer: "3000",
        size: "382 sqft",
        images: [
            "/images/superdeluxecouple.jpeg",
            "/images/superdelux3.jpeg",
        ],
        inclusions: [
            "01 King Size Bed (7' x 7') along with a living room.",
            "Check-in: 02:00 pm. Check-out: 12:00 pm.",
            "02 persons Breakfast Included.",
            "Guests up to 10 years of age are defined as children.",
            "Children age up to 05 years STAY & BREAKFAST FREE.",
            "Extra Child age up to 10 years will be charged 50% price for Food.",
            "Extra Person age above 10 years will be charged BDT 1500 Net per person for Breakfast and BDT 2000 Net per person for Accommodation.",
        ],
    },
];

const nearbyAttractions = [
    [
        { name: "Lawachara National Park", distance: "4.2 km" },
        { name: "Madhabkunda Waterfall", distance: "68.7 km" },
        { name: "Baikka Beel", distance: "21.1 km" },
        { name: "Nilkantha Tea Cabin", distance: "4 km" },
        { name: "Hum Hum Waterfall", distance: "61.1 km" },
        { name: "Madhapur Lake", distance: "20.5 km" },
    ],
    [
        { name: "Monipuri Tribal Village", distance: "5.5 km" },
        { name: "Bangladesh Tea Research Institute", distance: "3.1 km" },
        { name: "Manipuri Tribal Handicraft Market", distance: "5.5 km" },
        { name: "Memorial of Birshreshtho Hamidur Rahman", distance: "26.4 km" },
        { name: "Darjeeling Tila", distance: "8.4 km" },
    ],
    [
        { name: "Jaflong", distance: "129 km" },
        { name: "Bisanakandi", distance: "125 km" },
        { name: "Bholagonj", distance: "120 km" },
        { name: "Lala Khal", distance: "117 km" },
        { name: "Rataragul Swamp Forest", distance: "105 km" },
        { name: "Lovachora", distance: "141 km" },
    ],
];

const additionalFacilities = [
    {
        title: "RESTAURANTS",
        image: "/images/resturantone.jpg",
    },
    {
        title: "GYM",
        image: "/images/gym.jpg",
    },
    {
        title: "Boar Meeting",
        image: "/images/boardmeeting.jpeg",
    },
    {
        title: "Training",
        image: "/images/trainingroom.jpeg",
    },
    {
        title: "Board Meeting",
        image: "/images/boardmeeting.jpeg",
    },
];

const services = [
    { icon: "🍽️", label: "Breakfast" },
    { icon: "☕", label: "Tea & Coffee" },
    { icon: "🏋️", label: "Gym" },
    { icon: "📶", label: "Wi-Fi" },
    { icon: "💧", label: "Mineral Water" },
];

const serviceImages = [
    {
        src: "/images/resturantone.jpg",
        alt: "Restaurant",
        className: "rounded-2xl w-full h-52 object-fill",
    },
    {
        src: "/images/resturanttwo.jpg",
        alt: "Breakfast",
        className: "rounded-2xl w-full h-52 object-fill",
    },
    {
        src: "/images/trainingroom.jpeg",
        alt: "Training",
        className: "rounded-2xl w-full h-52 object-cover",
    },
    {
        src: "/images/gym.jpg",
        alt: "Gym",
        className: "rounded-2xl w-full h-52 object-fill",
    },
    {
        src: "/images/conference.jpeg",
        alt: "conference",
        className: "rounded-2xl w-full h-40 object-fill",
    },
];

const SummerBreeze = () => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", phone: "", email: "", designation: "", address: "",
        checkIn: "", checkOut: "", adults: "2", children: "0", childrenAge: "",
        roomCategory: "", roomQuantity: "1", suiteType: "", message: ""
    });

    const [activeSlides, setActiveSlides] = useState<number[]>(
        packages.map(() => 0)
    );

    // New modal state
    const [selectedRoom, setSelectedRoom] = useState<{ name: string; images: string[] } | null>(null);
    const [initialIndex, setInitialIndex] = useState(0);

    const handleSlideChange = (packageIndex: number, newIndex: number) => {
        setActiveSlides(prev => {
            const updated = [...prev];
            updated[packageIndex] = newIndex;
            return updated;
        });
    };

    // Modal handlers
    const openModal = (images: string[], name: string, startIndex: number) => {
        setSelectedRoom({ name, images });
        setInitialIndex(startIndex);
    };

    const closeModal = () => {
        setSelectedRoom(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Booking request submitted successfully! (Demo)");
    };

    const mapUrl =
        "https://maps.google.com/maps?q=23.8603983,90.4315503&z=15&output=embed";
    return (
        <div className="">
            {/* hero section  */}
            <PageHero
                title="Summer Breeze"
                subtitle="Refresh Your Soul This Summer"
                backgroundImage="/images/cooridoor.jpg"
            />

            {/* Room Packages */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    {packages.map((pkg, index) => (
                        <RoomPackageCard
                            key={index}
                            pkg={pkg}
                            index={index}
                            isEven={index % 2 === 0}
                            currentSlide={activeSlides[index] || 0}
                            onSlideChange={(newIndex) =>
                                handleSlideChange(index, newIndex)
                            }
                            onImageClick={openModal}
                        />
                    ))}
                </div>

                {/* Image Gallery Modal */}
                {selectedRoom && (
                    <ImageGalleryModal
                        title={selectedRoom.name}
                        images={selectedRoom.images}
                        initialIndex={initialIndex}
                        onClose={closeModal}
                    />
                )}
            </section>

            {/* COMPLIMENTARY SERVICES*/}
            <section className="pb-8">
                <ComplimentaryServices
                    services={services}
                    images={serviceImages}
                />
            </section>

            {/* Additional Facilities */}
            <section className="py-8">
                <AdditionalFacilities facilities={additionalFacilities} />
            </section>

            {/* Booking Form */}
            <section className="py-8">
                <div>
                    <h2 className="text-4xl font-light text-center mb-4">Book This Package Now!</h2>
                    <p className="text-center text-foreground/70 mb-12">Booking rooms has never been this simple. Fill up the form below with all the necessary information.</p>
                </div>
                <div className=" relative max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="absolute inset-x-8 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
                    <div className=" relative">

                        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm mb-2 text-black">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your first name"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your last name"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm mb-2 text-black">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your phone number"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                        placeholder="Enter your email address"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm mb-2 text-black">Designation / Organization Name</label>
                                    <input 
                                        type="text" 
                                        name="designation" 
                                        value={formData.designation} 
                                        onChange={handleChange} 
                                        placeholder="Enter your designation or organization"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Address</label>
                                    <input 
                                        type="text" 
                                        name="address" 
                                        value={formData.address} 
                                        onChange={handleChange} 
                                        placeholder="Enter your address"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm mb-2 text-black">Check In</label>
                                    <input 
                                        type="date" 
                                        name="checkIn" 
                                        value={formData.checkIn} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black text-black" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Check Out</label>
                                    <input 
                                        type="date" 
                                        name="checkOut" 
                                        value={formData.checkOut} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black text-black" 
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm mb-2 text-black">Number of Adults</label>
                                    <select name="adults" value={formData.adults} onChange={handleChange} className="w-full border border-border p-4 rounded-2xl text-black">
                                        {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Number of Children</label>
                                    <select name="children" value={formData.children} onChange={handleChange} className="w-full border border-border p-4 rounded-2xl text-black">
                                        {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Children's Age (If any)</label>
                                    <input 
                                        type="text" 
                                        name="childrenAge" 
                                        value={formData.childrenAge} 
                                        onChange={handleChange} 
                                        placeholder="e.g. 5, 8"
                                        className="w-full border border-border p-4 rounded-2xl focus:outline-none focus:border-primary placeholder:text-black" 
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm mb-2 text-black">Room Category</label>
                                    <select name="roomCategory" value={formData.roomCategory} onChange={handleChange} className="w-full border border-border p-4 rounded-2xl text-black">
                                        <option value="">Please choose an option</option>
                                        <option value="King Deluxe">King Deluxe</option>
                                        <option value="Queen Deluxe">Queen Deluxe</option>
                                        <option value="Executive Suite">Executive Suite</option>
                                        <option value="Royal Suite">Royal Suite</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Room Quantity</label>
                                    <select name="roomQuantity" value={formData.roomQuantity} onChange={handleChange} className="w-full border border-border p-4 rounded-2xl text-black">
                                        {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 text-black">Suite Type</label>
                                    <select name="suiteType" value={formData.suiteType} onChange={handleChange} className="w-full border border-border p-4 rounded-2xl text-black">
                                        <option value="">Please choose an option</option>
                                        <option value="Standard">Standard</option>
                                        <option value="Premium">Premium</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-2 text-black">Message</label>
                                <textarea 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    rows={5} 
                                    placeholder="Any special request or message..."
                                    className="w-full border border-border p-4 rounded-3xl focus:outline-none focus:border-primary placeholder:text-black"
                                ></textarea>
                            </div>

                            <button type="submit" className="bg-secondary px-6 hover:bg-background text-black font-semibold py-5 rounded-2xl text-lg transition-all duration-300 text-white">
                                SUBMIT BOOKING REQUEST
                            </button>
                            <p className="text-xs text-foreground/60 text-center mt-4">
                                * All fields are mandatory except Message. We will confirm your booking shortly.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SummerBreeze;