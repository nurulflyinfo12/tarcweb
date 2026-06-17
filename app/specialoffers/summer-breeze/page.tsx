"use client";

import ImageGalleryModal from "@/components/common/ImageGalleryModal";
import PageHero from "@/components/common/pagehero";
import ComplimentaryServices from "@/components/SummerBreeze/ComplimentaryServices";
import NearbyAttractions from "@/components/SummerBreeze/NearbyAttractions";
import RoomPackageCard from "@/components/SummerBreeze/RoomPackageCard";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

// Data 
const packages = [
    {
        name: "King Deluxe (2 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
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
    {
        name: "Queen Deluxe (2 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1598928506311-c55defcf5b6e"
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
    {
        name: "Triple Deluxe (3 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
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
    {
        name: "Executive Suite King (2 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1560185007-5f0bb1866cab",
            "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9"
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
    {
        name: "Executive Suite Queen (2 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
            "https://images.unsplash.com/photo-1609766856964-ef03659cc664"
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
    {
        name: "Royal Suite Deluxe (4 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1598228723793-52759bba239c",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
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
    {
        name: "Royal Suite Superior (4 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
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
    {
        name: "Presidential Suite (6 Persons)",
        price: "BDT 18,000",
        size: "382 sqft",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427",
            "https://images.unsplash.com/photo-1585544314089-607f3c8f9e54"
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
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34b4",
    },
    {
        title: "KIDS PLAYGROUND",
        image: "https://images.unsplash.com/photo-1502082553048-9d3d4f7c6c4f",
    },
    {
        title: "GYM",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
    {
        title: "OUTDOOR SPORTS",
        image: "https://images.unsplash.com/photo-1622296089863-6c1f5b7c5e0e",
    },
    {
        title: "INDOOR SPORTS",
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe",
    },
    {
        title: "TEA GARDENS",
        image: "https://images.unsplash.com/photo-1587502536900-baf0c55a17e9",
    },
];

const services = [
  { icon: "🍽️", label: "Breakfast" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🍎", label: "Fruit Basket" },
  { icon: "🛁", label: "Outdoor Jacuzzi" },
  { icon: "☕", label: "Tea & Coffee" },
  { icon: "📚", label: "Library" },
  { icon: "🏋️", label: "Gym" },
  { icon: "📶", label: "Wi-Fi" },
  { icon: "🎠", label: "Children Play Zone" },
  { icon: "💧", label: "Mineral Water" },
];

const serviceImages = [
  {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    alt: "Restaurant",
    className: "rounded-2xl w-full h-52 object-cover",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    alt: "Swimming Pool",
    className: "rounded-2xl w-full h-52 object-cover",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Kids Playground",
    className: "rounded-2xl w-full h-52 object-cover",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    alt: "Gym",
    className: "rounded-2xl w-full h-52 object-cover",
  },
  {
    src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9",
    alt: "Library",
    className: "rounded-2xl w-full h-40 object-cover",
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
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d91.45!3d24.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDE4JzAwLjAiTiA5McKwMjcnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1720000000000";

    return (
        <div className="">
            {/* hero section  */}
            <PageHero
              title="Summer Breeze"
              subtitle="Refresh Your Soul This Summer"
              backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            />

            {/* Room Packages */}
            <section className="py-10">
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
            <ComplimentaryServices 
                services={services}
                images={serviceImages}
            />
            <section className="py-8">
            {/* NEARBY ATTRACTIONS */}
            <NearbyAttractions
              attractions={nearbyAttractions}
              mapUrl={mapUrl}
            />
            </section>

            {/* Additional Facilities (unchanged) */}
            <section className="py-2">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                        <h2 className="text-4xl font-light text-center mb-12 text-secondary">Additional Facilities</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {additionalFacilities.map((facility, index) => (
                                <div key={index} className="group">
                                    <div className="relative overflow-hidden rounded-2xl h-64 shadow-md">
                                        <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>
                                    <p className="text-center font-semibold mt-5 text-lg text-black tracking-wide">{facility.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form (unchanged) */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-10">
                    <h2 className="text-4xl font-light text-center mb-4">Book This Package Now!</h2>
                    <p className="text-center text-foreground/70 mb-12">Booking rooms has never been this simple. Fill up the form below with all the necessary information.</p>
                    <form onSubmit={handleSubmit} className="bg-background p-10 rounded-3xl shadow-xl space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Your Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Designation / Organization Name</label>
                                <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Check In</label>
                                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Check Out</label>
                                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full bg-card border border-border p-4 rounded-2xl focus:outline-none focus:border-primary" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Number of Adults</label>
                                <select name="adults" value={formData.adults} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl">
                                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Number of Children</label>
                                <select name="children" value={formData.children} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl">
                                    {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Children's Age (If any)</label>
                                <input type="text" name="childrenAge" value={formData.childrenAge} onChange={handleChange} placeholder="e.g. 5, 8" className="w-full bg-card border border-border p-4 rounded-2xl" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Room Category</label>
                                <select name="roomCategory" value={formData.roomCategory} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl">
                                    <option value="">Please choose an option</option>
                                    <option value="King Deluxe">King Deluxe</option>
                                    <option value="Queen Deluxe">Queen Deluxe</option>
                                    <option value="Executive Suite">Executive Suite</option>
                                    <option value="Royal Suite">Royal Suite</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Room Quantity</label>
                                <select name="roomQuantity" value={formData.roomQuantity} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl">
                                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-foreground/70">Suite Type</label>
                                <select name="suiteType" value={formData.suiteType} onChange={handleChange} className="w-full bg-card border border-border p-4 rounded-2xl">
                                    <option value="">Please choose an option</option>
                                    <option value="Standard">Standard</option>
                                    <option value="Premium">Premium</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm mb-2 text-foreground/70">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Any special request or message..." className="w-full bg-card border border-border p-4 rounded-3xl focus:outline-none focus:border-primary"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-black font-semibold py-5 rounded-2xl text-lg transition-all duration-300">
                            SUBMIT BOOKING REQUEST
                        </button>
                        <p className="text-xs text-foreground/60 text-center mt-4">
                            * All fields are mandatory except Message. We will confirm your booking shortly.
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SummerBreeze;