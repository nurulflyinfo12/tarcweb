"use client";

import ImageGalleryModal from "@/components/common/ImageGalleryModal";
import PageHero from "@/components/common/pagehero";
import AdditionalFacilities from "@/components/SummerBreeze/AdditionalFacilities";
import ComplimentaryServices from "@/components/SummerBreeze/ComplimentaryServices";
import NearbyAttractions from "@/components/SummerBreeze/NearbyAttractions";
import RoomPackageCard from "@/components/SummerBreeze/RoomPackageCard";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";

// Data – unchanged
const packages = [
  {
    name: "Vip room regular",
    price: "6500",
    offer: "5500",
    size: "382 sqft",
    images: ["/images/viproom.webp", "/images/vip1.webp", "/images/vip2.webp"],
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
      "/images/superdeluxetwin.webp",
      "/images/superdeluxe1.webp",
      "/images/superdeluxe2.webp",
      "/images/superdeluxe3.webp",
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
    images: ["/images/superdeluxecouple.webp", "/images/superdeluxe3.webp"],
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
  { title: "RESTAURANTS", image: "/images/resturantone.webp" },
  { title: "GYM", image: "/images/gym.webp" },
  { title: "Boar Meeting", image: "/images/boardmeeting.webp" },
  { title: "Training", image: "/images/trainingroom.webp" },
  { title: "Board Meeting", image: "/images/boardmeeting.webp" },
];

import {      
  FaMugHot,     
  FaDumbbell,       
  FaWifi,           
  FaBottleWater       
} from 'react-icons/fa6';   
import { FaCoffee } from "react-icons/fa";

const services = [
  { icon: FaCoffee, label: "Breakfast" },
  { icon: FaMugHot, label: "Tea & Coffee" },
  { icon: FaDumbbell, label: "Gym" },
  { icon: FaWifi, label: "Wi-Fi" },
  { icon: FaBottleWater, label: "Mineral Water" },
];

const serviceImages = [
  {
    src: "/images/resturantone.webp",
    alt: "Restaurant",
    className: "rounded-2xl w-full h-52 object-fill",
  },
  {
    src: "/images/resturanttwo.webp",
    alt: "Breakfast",
    className: "rounded-2xl w-full h-52 object-fill",
  },
  {
    src: "/images/trainingroom.webp",
    alt: "Training",
    className: "rounded-2xl w-full h-52 object-cover",
  },
  {
    src: "/images/gym.webp",
    alt: "Gym",
    className: "rounded-2xl w-full h-52 object-fill",
  },
  {
    src: "/images/conference.webp",
    alt: "conference",
    className: "rounded-2xl w-full h-40 object-fill",
  },
];

const SummerBreeze = () => {
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
    rateType: "",
  });

  const [activeSlides, setActiveSlides] = useState<number[]>(
    packages.map(() => 0),
  );

  const [selectedRoom, setSelectedRoom] = useState<{
    name: string;
    images: string[];
  } | null>(null);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleSlideChange = (packageIndex: number, newIndex: number) => {
    setActiveSlides((prev) => {
      const updated = [...prev];
      updated[packageIndex] = newIndex;
      return updated;
    });
  };

  const openModal = (images: string[], name: string, startIndex: number) => {
    setSelectedRoom({ name, images });
    setInitialIndex(startIndex);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted successfully! (Demo)");
  };

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="">
      {/* hero section */}
      <PageHero
        title="Special rooms offer"
        subtitle="Special Room Offers - The Perfect Way to Refresh Your Soul"
        backgroundImage="/images/cooridoor.webp"
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
              onSlideChange={(newIndex) => handleSlideChange(index, newIndex)}
              onImageClick={openModal}
              onBookNow={scrollToBooking}
            />
          ))}
        </div>

        {selectedRoom && (
          <ImageGalleryModal
            title={selectedRoom.name}
            images={selectedRoom.images}
            initialIndex={initialIndex}
            onClose={closeModal}
          />
        )}
      </section>

      {/* COMPLIMENTARY SERVICES */}
      <section className="pb-8">
        <ComplimentaryServices
          services={services}
          images={serviceImages}
          onBookNow={scrollToBooking}
        />
      </section>

      {/* Additional Facilities */}
      <section className="py-8">
        <AdditionalFacilities facilities={additionalFacilities} />
      </section>

      {/* Booking Form – only backdrop-blur replaced with solid bg */}
      <section id="booking-form" className="py-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#E29A26]">
            Book Now!
          </h1>
          <p className="text-white text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed opacity-90">
            Booking restaurant has never been this simple. Fill up the form
            below with all the necessary information and wait for your booking
            confirmation mail.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10">
          {/* Glass background – no more backdrop-blur, uses higher opacity to mimic the frosted look */}
          <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/30 rounded-2xl pointer-events-none z-0" />

          <form
            onSubmit={handleSubmit}
            className="relative bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl space-y-6"
          >
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your First Name"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Last Name"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Row 2: Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Phone Number"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Your Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Row 3: Corporate Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Designation And Organisation Name:
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Enter Designation & Organisation"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Enter Your Address:
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Row 4: Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Check In:
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-300 p-3 text-sm text-neutral-500 rounded-md focus:outline-none focus:border-neutral-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Check out:
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-300 p-3 text-sm text-neutral-500 rounded-md focus:outline-none focus:border-neutral-500"
                />
              </div>
            </div>

            {/* Row 5: Group Count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Number Of Adults:
                </label>
                <input
                  type="text"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  placeholder="Number of Adults (ex. 2)"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Number Of Children:
                </label>
                <input
                  type="text"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  placeholder="Number of Children (ex. 2)"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Row 6: Info Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Children's Age:
                </label>
                <input
                  type="text"
                  name="childrenAge"
                  value={formData.childrenAge}
                  onChange={handleChange}
                  placeholder="Children's Age (ex. Child 1: 5, Child 2: 4)"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Where You Learned About Us:
                </label>
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500"
                  >
                    <option value="">Where you learned about us?</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Google">Google Search</option>
                    <option value="Friend">From a Friend</option>
                  </select>
                  <FaChevronDown
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            </div>

            {/* Row 7: Room Categories & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <div className="flex flex-col relative">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Room Category:
                </label>
                <div className="relative">
                  <select
                    name="roomCategory"
                    value={formData.roomCategory}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500"
                  >
                    <option value="">---Please choose an option---</option>
                    <option value="King Deluxe">King Deluxe</option>
                    <option value="Queen Deluxe">Queen Deluxe</option>
                    <option value="Executive Suite">Executive Suite</option>
                  </select>
                  <FaChevronDown
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Room Quantity:
                </label>
                <input
                  type="text"
                  name="roomQuantity"
                  value={formData.roomQuantity}
                  onChange={handleChange}
                  placeholder="Enter number of quantity"
                  className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Row 8: Rate Type & Add More Room */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-end">
              <div className="flex flex-col relative">
                <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                  Rate Type:
                </label>
                <div className="relative">
                  <select
                    name="rateType"
                    value={formData.rateType}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500"
                  >
                    <option value="">---Please choose an option---</option>
                    <option value="Standard">Standard Rate</option>
                    <option value="Package">Package Rate</option>
                  </select>
                  <FaChevronDown
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#122A16] text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded shadow hover:bg-[#1A3D20] transition-colors uppercase"
                >
                  + Add More Room
                </button>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col pt-2">
              <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">
                Messages:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter Your Message"
                className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400 resize-y"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#051C08] text-white font-bold text-xs cursor-pointer uppercase tracking-widest px-8 py-3.5 rounded hover:bg-[#0C2D11] transition-all duration-200 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SummerBreeze;