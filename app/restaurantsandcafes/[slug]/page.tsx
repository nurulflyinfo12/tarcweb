"use client";

// import { Restaurants } from "@/components/RestaurantsAndCafes/RestaurantsAndCafes";

import CallToAction from "@/components/common/calltoaction";
import PageHero from "@/components/common/pagehero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { Restaurants } from "@/components/RestaurantsAndCafes/RestaurantsAndCafes";



export default function Page() {
  const params = useParams();
  const restaurantId = params.slug as string;

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

  const restaurant = Restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return (
      <div className="mt-80 text-center text-white">
        <h1>Restaurant Not Found</h1>
        <p>Slug: {restaurantId}</p>
      </div>
    );
  }

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

  // Smooth Scroll to Form
  const scrollToForm = () => {
    const form = document.getElementById("bookForm");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Two-image slider component
  const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const total = restaurant.images.length;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % total);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + total) % total);
    };

    const ChevronLeftIcon = ({ className = "w-6 h-6" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    );

    const ChevronRightIcon = ({ className = "w-6 h-6" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    );

    if (total === 1) {
      return (
        <div className="py-8">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl text-white text-center mb-12 font-serif">
              Photo Gallery
            </h3>
            <img
              src={restaurant.images[0]}
              alt={restaurant.name}
              className="rounded-xl shadow-2xl w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="py-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

          <div className="relative bg-white rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-secondary tracking-wide whitespace-nowrap text-center">
                Photo Gallery
              </h2>
              <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <div className="relative w-full h-[420px] sm:h-[480px] md:h-[420px] lg:h-[480px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0 flex gap-3 md:gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full md:w-1/2 h-full">
                      <img
                        src={restaurant.images[currentSlide]}
                        alt={`${restaurant.name} - ${currentSlide + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>

                    <div className="hidden md:block w-1/2 h-full">
                      <img
                        src={restaurant.images[(currentSlide + 1) % total]}
                        alt={`${restaurant.name} - ${((currentSlide + 1) % total) + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition z-10"
                aria-label="Previous"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition z-10"
                aria-label="Next"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              <div className="flex justify-center mt-8 space-x-3">
                {restaurant.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "bg-[#556B2F] scale-125"
                        : "bg-[#556B2F]/50 hover:bg-[#556B2F]/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <PageHero
        title={restaurant.name}
        subtitle={restaurant.type}
        backgroundImage={restaurant.images[2]}
      />

      {/* main card */}
      <div className="py-8 sm:py-10 lg:py-14">
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

          <div className="relative bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-center order-2 lg:order-1"
            >
              <div className="flex items-center justify-center lg:justify-center gap-2 sm:gap-3 flex-wrap">
                <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-secondary tracking-wide text-center lg:text-left">
                  {restaurant.name}
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />
              </div>

              {restaurant.type && (
                <p className="text-secondary text-base sm:text-lg font-medium tracking-wide">
                  ({restaurant.type})
                </p>
              )}

              <p className="mt-6 text-gray-500 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
                {restaurant.description}
              </p>

              {/* Updated Book Now Button */}
              <button
                onClick={scrollToForm}
                className="mt-8 w-full sm:w-auto bg-secondary hover:bg-background text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer"
              >
                BOOK NOW →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <img
                src={restaurant.images[2]}
                alt={restaurant.name}
                className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* At a Glance Section */}
      <div className="py-8 sm:py-10 lg:py-14">
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="absolute inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

          <div className="relative bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
                <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-secondary tracking-wide text-center">
                  At a glance
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />
              </div>

              <img
                src={restaurant.images[1] || restaurant.heroImage}
                alt={restaurant.name}
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="order-2"
            >
              <div className="bg-[#5D7553] p-5 sm:p-6 md:p-8 rounded-xl text-white">
                <ul className="space-y-5 text-sm sm:text-base md:text-lg">
                  <li>
                    <span className="font-semibold">Cuisine:</span>
                    <br />
                    <span className="opacity-90">
                      {restaurant.cuisine.join(", ")}
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Atmosphere:</span>
                    <br />
                    <span className="opacity-90">{restaurant.atmosphere}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Service Style:</span>
                    <br />
                    <span className="opacity-90">
                      {restaurant.serviceStyle}
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Service Hours:</span>
                    <ul className="mt-2 space-y-1 text-xs sm:text-sm md:text-base ml-4">
                      <li>
                        <strong>Breakfast:</strong>{" "}
                        {restaurant.serviceHours.breakfast}
                      </li>
                      <li>
                        <strong>Lunch:</strong> {restaurant.serviceHours.lunch}
                      </li>
                      <li>
                        <strong>Dinner:</strong>{" "}
                        {restaurant.serviceHours.dinner}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Location:</span>
                    <br />
                    <span className="opacity-90">{restaurant.location}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SliderComponent />

      {/* Reserve Your Table Today! */}
      <div className="py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 px-4 md:px-0 mb-6">
            <span className="h-[1px] w-10 sm:w-14 bg-white" />
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-medium text-white tracking-wide text-center">
              Reserve Your Table Today!
            </h2>
            <span className="h-[1px] w-10 sm:w-14 bg-white" />
          </div>
          <div className="max-w-7xl mx-auto relative px-4 md:px-10">
            <div className="absolute inset-x-8 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
            <div className="relative bg-white rounded-2xl items-center text-black p-10 space-x-2">
              <span>Call:</span>
              <a href="tel:01704199798" className="hover:underline">
                01704199798
              </a>
              {/* <span className="text-gray-400">•</span>
                            <a href="tel:68546" className="hover:underline">68546</a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div
        id="bookForm"
        className="w-full py-8 px-4 sm:px-6 md:px-10 min-h-screen font-sans"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#E29A26]">
            Book Now
          </h1>
          <p className="text-white text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed opacity-90">
            Booking restaurant has never been this simple. Fill up the form
            below with all the necessary information and wait for your booking
            confirmation mail.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl space-y-6"
          >
            {/* All form fields remain exactly the same as you provided */}
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

            {/* Row 2  */}

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

            {/* (All other rows are kept exactly the same - omitted here for brevity but fully present in the file) */}
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

            {/* Row 8: Rate Type */}
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

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#051C08] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded hover:bg-[#0C2D11] transition-all duration-200 shadow-md"
              >
                Submit
              </button>
            </div>

            {/* <div className="pt-6 border-t border-neutral-100 space-y-2">
              {[
                "Room up to 10 years image is dynamic condition.",
                "Child age below 5 years will get complimentary food.",
                "Child age 5 to below 10 years will be charged 50% food of total.",
                "Extra bed is dynamic depending on standard chargeable.",
                "Extra Person Age 10 years & above will be charged full price for room & food 2500 BDT per person for accommodation.",
              ].map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-[11px] font-medium text-neutral-500 leading-normal"
                >
                  <span className="text-[#E29A26] mt-0.5 shrink-0">👉</span>
                  <p>{rule}</p>
                </div>
              ))}
            </div> */}
          </form>
        </div>
      </div>

      <CallToAction
        title="Ready To Get Assistance?"
        description="Get all your questions answered, we are just one call away!"
        phone="01704199798"
      />
    </>
  );
}

// "use client";

// // import { Restaurants } from "@/components/RestaurantsAndCafes/RestaurantsAndCafes";

// import CallToAction from "@/components/common/calltoaction";
// import PageHero from "@/components/common/pagehero";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa6";

// const Restaurants = [
//     {
//         id: "1",
//         name: "Taste & Tradition",
//         type: "Signature Dining",
//         description:
//             "Experience a culinary journey featuring a diverse selection of local and international flavors. Prepared by our expert chefs using the freshest ingredients, our menu offers something delightful for every palate in a warm and welcoming ambiance",
//         images: [
//             "/images/resturantone1.jpg",
//             "/images/resturanttwo.jpg",
//             "/images/room1.jpg",
//         ],
//         reverse: false,

//         heroImage: "/images/resturantone1.jpg",
//         cuisine: [
//             "Continental",
//             "Mexican",
//             "Sea Food",
//             "Arabic",
//             "Thai",
//             "Chinese",
//             "Indian & Bangla",
//         ],
//         atmosphere: "Friendly and Informal",
//         serviceStyle: "Buffet & A la Carte",
//         serviceHours: {
//             breakfast: "7:00 a.m. to 10:30 a.m.",
//             lunch: "12:30 p.m. to 3:00 p.m.",
//             dinner: "7:00 p.m. to 10:30 p.m.",
//         },
//         location: "At Lobby Level",
//     },
//     {
//         id: "2",
//         name: "The Grand Flavor",
//         type: "Premium Culinary Experience",
//         description:
//             "Indulge in an exceptional dining experience where elegant design meets culinary artistry. From curated gourmet dishes to impeccable service, we offer the perfect setting for memorable family gatherings, romantic dinners, and special occasions..",
//         images: [
//             "/images/resturantone1.jpg",
//             "/images/resturanttwo.jpg",
//             "/images/room1.jpg",
//         ],
//         reverse: true,

//         heroImage: "/images/resturantone1.jpg",
//         cuisine: ["European", "Asian", "Fusion"],
//         atmosphere: "Elegant & Sophisticated",
//         serviceStyle: "A la Carte",
//         serviceHours: {
//             breakfast: "7:00 a.m. to 11:00 a.m.",
//             lunch: "12:00 p.m. to 4:00 p.m.",
//             dinner: "6:30 p.m. to 11:00 p.m.",
//         },
//         location: "First Floor",
//     },
//     {
//         id: "3",
//         name: "The Hub Eatery",
//         type: "Dine & Unwind",
//         description:
//             "Whether you are starting your morning with a freshly brewed coffee, stopping by for a hearty lunch, or enjoying a relaxed dinner with loved ones, our vibrant space welcomes you all day to sit back, relax, and savor exceptional food.",
//         images: [
//             "/images/resturantone1.jpg",
//             "/images/resturanttwo.jpg",
//             "/images/room1.jpg",
//         ],
//         reverse: false,

//         heroImage: "/images/resturantone1.jpg",
//         cuisine: ["International", "Fast Casual", "Beverages"],
//         atmosphere: "Casual & Vibrant",
//         serviceStyle: "Buffet & A la Carte",
//         serviceHours: {
//             breakfast: "6:30 a.m. to 11:00 a.m.",
//             lunch: "11:30 a.m. to 5:00 p.m.",
//             dinner: "6:00 p.m. to 10:30 p.m.",
//         },
//         location: "Ground Floor",
//     },
// ];

// type PageProps = {
//     params: Promise<{
//         slug: string;
//     }>;
// };

// export default async function Page({ params }: PageProps) {
//     const { slug } = await params;
//     const restaurantId = slug;
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         phone: "",
//         email: "",
//         designation: "",
//         address: "",
//         checkIn: "",
//         checkOut: "",
//         adults: "2",
//         children: "0",
//         childrenAge: "",
//         roomCategory: "",
//         roomQuantity: "1",
//         suiteType: "",
//         message: "",
//         source: "",
//         rateType: ""
//     });

//     const restaurant = Restaurants.find(
//         (r) => r.id === restaurantId
//     );

//     if (!restaurant) {
//         return (
//             <div className="mt-80 text-center text-white">
//                 <h1>Restaurant Not Found</h1>
//                 <p>Slug: {slug}</p>
//             </div>
//         );
//     }

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         alert("Booking request submitted successfully! (Demo)");
//     };

//     // Two-image slider component (replaces the old single-image one)
//     // Two-image slider component (responsive)
//     const SliderComponent = () => {
//         const [currentSlide, setCurrentSlide] = useState(0);
//         const total = restaurant.images.length;

//         const nextSlide = () => {
//             setCurrentSlide((prev) => (prev + 1) % total);
//         };

//         const prevSlide = () => {
//             setCurrentSlide((prev) => (prev - 1 + total) % total);
//         };

//         const ChevronLeftIcon = ({ className = "w-6 h-6" }) => (
//             <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//         );

//         const ChevronRightIcon = ({ className = "w-6 h-6" }) => (
//             <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//         );

//         // Single image case
//         if (total === 1) {
//             return (
//                 <div className="py-8">
//                     <div className="max-w-5xl mx-auto px-6">
//                         <h3 className="text-3xl text-white text-center mb-12 font-serif">
//                             Photo Gallery
//                         </h3>
//                         <img
//                             src={restaurant.images[0]}
//                             alt={restaurant.name}
//                             className="rounded-xl shadow-2xl w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
//                         />
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div className="py-8">
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//                     {/* Background accent */}
//                     <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

//                     <div className="relative bg-white rounded-2xl p-6 sm:p-8">
//                         <div className="flex items-center justify-center gap-3 mb-8">
//                             <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-secondary tracking-wide whitespace-nowrap text-center">
//                                 Photo Gallery
//                             </h2>
//                             <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
//                         </div>

//                         <div className="relative overflow-hidden rounded-xl">
//                             {/* Slider Container */}
//                             <div className="relative w-full h-[420px] sm:h-[480px] md:h-[420px] lg:h-[480px]">
//                                 <AnimatePresence mode="wait">
//                                     <motion.div
//                                         key={currentSlide}
//                                         className="absolute inset-0 flex gap-3 md:gap-4"
//                                         initial={{ opacity: 0, x: 50 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         exit={{ opacity: 0, x: -50 }}
//                                         transition={{ duration: 0.5 }}
//                                     >
//                                         {/* Mobile: 1 image | Desktop: 2 images */}
//                                         <div className="w-full md:w-1/2 h-full">
//                                             <img
//                                                 src={restaurant.images[currentSlide]}
//                                                 alt={`${restaurant.name} - ${currentSlide + 1}`}
//                                                 className="w-full h-full object-cover rounded-lg shadow-md"
//                                             />
//                                         </div>

//                                         {/* Second image - hidden on mobile */}
//                                         <div className="hidden md:block w-1/2 h-full">
//                                             <img
//                                                 src={
//                                                     restaurant.images[
//                                                     (currentSlide + 1) % total
//                                                     ]
//                                                 }
//                                                 alt={`${restaurant.name} - ${(currentSlide + 1) % total + 1}`}
//                                                 className="w-full h-full object-cover rounded-lg shadow-md"
//                                             />
//                                         </div>
//                                     </motion.div>
//                                 </AnimatePresence>
//                             </div>

//                             {/* Navigation Buttons */}
//                             <button
//                                 onClick={prevSlide}
//                                 className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition z-10"
//                                 aria-label="Previous"
//                             >
//                                 <ChevronLeftIcon className="w-6 h-6" />
//                             </button>

//                             <button
//                                 onClick={nextSlide}
//                                 className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition z-10"
//                                 aria-label="Next"
//                             >
//                                 <ChevronRightIcon className="w-6 h-6" />
//                             </button>

//                             {/* Dots */}
//                             <div className="flex justify-center mt-8 space-x-3">
//                                 {restaurant.images.map((_, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setCurrentSlide(idx)}
//                                         className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide
//                                             ? "bg-[#556B2F] scale-125"
//                                             : "bg-[#556B2F]/50 hover:bg-[#556B2F]/80"
//                                             }`}
//                                         aria-label={`Go to slide ${idx + 1}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <>
//             {/* Hero Section - Matches top banner style */}
//             <PageHero
//                 title={restaurant.name}
//                 subtitle={restaurant.type}
//                 backgroundImage={restaurant.images[2]}
//             />

//             {/* main card */}
//             <div className="py-8 sm:py-10 lg:py-14">
//                 <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">
//                     {/* Background Layer */}
//                     <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

//                     {/* Main Card */}
//                     <div className="relative bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden">

//                         {/* Text Section */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 500 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="text-center lg:text-center order-2 lg:order-1"
//                         >
//                             {/* Title */}
//                             <div className="flex items-center justify-center lg:justify-center gap-2 sm:gap-3 flex-wrap">
//                                 <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />

//                                 <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-secondary tracking-wide text-center lg:text-left">
//                                     {restaurant.name}
//                                 </h2>

//                                 <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />
//                             </div>

//                             {/* Type */}
//                             {restaurant.type && (
//                                 <p className="text-secondary text-base sm:text-lg font-medium tracking-wide">
//                                     ({restaurant.type})
//                                 </p>
//                             )}

//                             {/* Description */}
//                             <p className="mt-6 text-gray-500 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
//                                 {restaurant.description}
//                             </p>

//                             {/* Button */}
//                             <button className="mt-8 w-full sm:w-auto bg-secondary hover:bg-background text-white px-8 py-3 rounded-xl font-medium transition-all duration-300">
//                                 BOOK NOW →
//                             </button>
//                         </motion.div>

//                         {/* Image Section */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 200 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//                             className="order-1 lg:order-2"
//                         >
//                             <img
//                                 src={restaurant.images[2]}
//                                 alt={restaurant.name}
//                                 className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
//                             />
//                         </motion.div>

//                     </div>
//                 </div>
//             </div>

//             {/* At a glance Section - Exact match to image */}

//             {/* At a Glance Section */}
//             <div className="py-8 sm:py-10 lg:py-14">
//                 <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">

//                     {/* Background */}
//                     <div className="absolute inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

//                     {/* Main Card */}
//                     <div className="relative bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden">

//                         {/* Left Side */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 500 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="order-1"
//                         >
//                             <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
//                                 <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />

//                                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-secondary tracking-wide text-center">
//                                     At a glance
//                                 </h2>

//                                 <span className="h-[1px] w-8 sm:w-12 bg-[#556B2F]" />
//                             </div>

//                             <img
//                                 src={restaurant.images[1] || restaurant.heroImage}
//                                 alt={restaurant.name}
//                                 className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
//                             />
//                         </motion.div>

//                         {/* Right Side */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 300 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//                             className="order-2"
//                         >
//                             <div className="bg-[#5D7553] p-5 sm:p-6 md:p-8 rounded-xl text-white">

//                                 <ul className="space-y-5 text-sm sm:text-base md:text-lg">

//                                     <li>
//                                         <span className="font-semibold">Cuisine:</span>
//                                         <br />
//                                         <span className="opacity-90 break-words">
//                                             {restaurant.cuisine.join(", ")}
//                                         </span>
//                                     </li>

//                                     <li>
//                                         <span className="font-semibold">Atmosphere:</span>
//                                         <br />
//                                         <span className="opacity-90 break-words">
//                                             {restaurant.atmosphere}
//                                         </span>
//                                     </li>

//                                     <li>
//                                         <span className="font-semibold">Service Style:</span>
//                                         <br />
//                                         <span className="opacity-90 break-words">
//                                             {restaurant.serviceStyle}
//                                         </span>
//                                     </li>

//                                     <li>
//                                         <span className="font-semibold">Service Hours:</span>

//                                         <ul className="mt-2 space-y-1 text-xs sm:text-sm md:text-base ml-4">
//                                             <li>
//                                                 <strong>Breakfast:</strong> {restaurant.serviceHours.breakfast}
//                                             </li>

//                                             <li>
//                                                 <strong>Lunch:</strong> {restaurant.serviceHours.lunch}
//                                             </li>

//                                             <li>
//                                                 <strong>Dinner:</strong> {restaurant.serviceHours.dinner}
//                                             </li>
//                                         </ul>
//                                     </li>

//                                     <li>
//                                         <span className="font-semibold">Location:</span>
//                                         <br />
//                                         <span className="opacity-90 break-words">
//                                             {restaurant.location}
//                                         </span>
//                                     </li>

//                                 </ul>

//                             </div>
//                         </motion.div>

//                     </div>
//                 </div>
//             </div>

//             {/* Photo Gallery - Two-image Slider */}
//             <SliderComponent />

//             {/* Reserve Your Table Today! */}
//             <div className="py-12">
//                 <div className=" text-center">
//                     <div className="flex items-center justify-center gap-3 px-4 md:px-0 mb-6">
//                         <span className="h-[1px] w-10 sm:w-14 bg-white" />
//                         <h2 className="text-2xl sm:text-2xl lg:text-3xl font-medium text-white tracking-wide  text-center">
//                             Reserve Your Table Today!
//                         </h2>
//                         <span className="h-[1px] w-10 sm:w-14 bg-white" />
//                     </div>
//                     <div className="max-w-7xl mx-auto relative px-4 md:px-10">
//                         <div className="absolute inset-x-8 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
//                         <div className="relative bg-white rounded-2xl items-center text-black p-10 space-x-2">
//                             <span>Call:</span>
//                             <a href="tel:01704199798" className="hover:underline">
//                                 +880 9678 785958
//                             </a>
//                             <span className="text-gray-400">•</span>
//                             <a href="tel:+8801730793501" className="hover:underline">
//                                 +880 1730 791907
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Booking Form - Added id="bookForm" */}
//             <div id="bookForm" className="w-full py-8 px-4 sm:px-6 md:px-10 min-h-screen font-sans">
//                 <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#E29A26]">
//                         Book Now
//                     </h1>
//                     <p className="text-white text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed opacity-90">
//                         Booking restaurant has never been this simple. Fill up the form below with all the necessary information and wait for your booking confirmation mail.
//                     </p>
//                 </div>

//                 <div className="max-w-7xl mx-auto px-4 md:px-10">
//                     <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl space-y-6">
//                         {/* ... rest of your form remains unchanged ... */}
//                         {/* Row 1 to Rules section - unchanged as per your request */}
//                         {/* (All form fields kept exactly the same) */}

//                         {/* Row 1: Names */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">First Name:</label>
//                                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter Your First Name" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Last Name:</label>
//                                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter Your Last Name" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                         </div>

//                         {/* Row 2: Contact Details */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Phone Number:</label>
//                                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter Your Phone Number" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Your Email:</label>
//                                 <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                         </div>

//                         {/* Row 3: Corporate Info */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Designation And Organisation Name:</label>
//                                 <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter Designation & Organisation" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Enter Your Address:</label>
//                                 <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                         </div>

//                         {/* Row 4: Dates */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Check In:</label>
//                                 <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full border border-neutral-300 p-3 text-sm text-neutral-500 rounded-md focus:outline-none focus:border-neutral-500" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Check out:</label>
//                                 <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full border border-neutral-300 p-3 text-sm text-neutral-500 rounded-md focus:outline-none focus:border-neutral-500" />
//                             </div>
//                         </div>

//                         {/* Row 5: Group Count */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Number Of Adults:</label>
//                                 <input type="text" name="adults" value={formData.adults} onChange={handleChange} placeholder="Number of Adults (ex. 2)" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Number Of Children:</label>
//                                 <input type="text" name="children" value={formData.children} onChange={handleChange} placeholder="Number of Children (ex. 2)" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                         </div>

//                         {/* Row 6: Info Source */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Children's Age:</label>
//                                 <input type="text" name="childrenAge" value={formData.childrenAge} onChange={handleChange} placeholder="Children's Age (ex. Child 1: 5, Child 2: 4)" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                             <div className="flex flex-col relative">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Where You Learned About Us:</label>
//                                 <div className="relative">
//                                     <select name="source" value={formData.source} onChange={handleChange} className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500">
//                                         <option value="">Where you learned about us?</option>
//                                         <option value="Social Media">Social Media</option>
//                                         <option value="Google">Google Search</option>
//                                         <option value="Friend">From a Friend</option>
//                                     </select>
//                                     <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none" size={16} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Row 7: Room Categories & Quantity */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                             <div className="flex flex-col relative">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Room Category:</label>
//                                 <div className="relative">
//                                     <select name="roomCategory" value={formData.roomCategory} onChange={handleChange} className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500">
//                                         <option value="">---Please choose an option---</option>
//                                         <option value="King Deluxe">King Deluxe</option>
//                                         <option value="Queen Deluxe">Queen Deluxe</option>
//                                         <option value="Executive Suite">Executive Suite</option>
//                                     </select>
//                                     <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none" size={16} />
//                                 </div>
//                             </div>
//                             <div className="flex flex-col">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Room Quantity:</label>
//                                 <input type="text" name="roomQuantity" value={formData.roomQuantity} onChange={handleChange} placeholder="Enter number of quantity" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400" />
//                             </div>
//                         </div>

//                         {/* Row 8: Rate Type */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-end">
//                             <div className="flex flex-col relative">
//                                 <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Rate Type:</label>
//                                 <div className="relative">
//                                     <select name="rateType" value={formData.rateType} onChange={handleChange} className="w-full border border-neutral-300 p-3 text-sm rounded-md bg-white appearance-none pr-10 text-neutral-600 focus:outline-none focus:border-neutral-500">
//                                         <option value="">---Please choose an option---</option>
//                                         <option value="Standard">Standard Rate</option>
//                                         <option value="Package">Package Rate</option>
//                                     </select>
//                                     <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none" size={16} />
//                                 </div>
//                             </div>
//                             <div className="flex justify-end">
//                                 <button type="button" className="bg-[#122A16] text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded shadow hover:bg-[#1A3D20] transition-colors uppercase">
//                                     + Add More Room
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Message */}
//                         <div className="flex flex-col pt-2">
//                             <label className="text-[13px] font-bold text-neutral-800 mb-1.5 tracking-wide">Messages:</label>
//                             <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Enter Your Message" className="w-full border border-neutral-300 p-3 text-sm rounded-md focus:outline-none focus:border-neutral-500 placeholder-neutral-400 resize-y" />
//                         </div>

//                         {/* Submit Button */}
//                         <div className="flex justify-center pt-4">
//                             <button type="submit" className="bg-[#051C08] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded hover:bg-[#0C2D11] transition-all duration-200 shadow-md">
//                                 Submit
//                             </button>
//                         </div>

//                         {/* Rules */}
//                         <div className="pt-6 border-t border-neutral-100 space-y-2">
//                             {[
//                                 "Room up to 10 years image is dynamic condition.",
//                                 "Child age below 5 years will get complimentary food.",
//                                 "Child age 5 to below 10 years will be charged 50% food of total.",
//                                 "Extra bed is dynamic depending on standard chargeable.",
//                                 "Extra Person Age 10 years & above will be charged full price for room & food 2500 BDT per person for accommodation."
//                             ].map((rule, idx) => (
//                                 <div key={idx} className="flex items-start gap-2.5 text-[11px] font-medium text-neutral-500 leading-normal">
//                                     <span className="text-[#E29A26] mt-0.5 shrink-0">👉</span>
//                                     <p>{rule}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             {/* Call to Action */}
//             <CallToAction
//                 title="Ready To Get Assistance?"
//                 description="Get all your questions answered, we are just one call away!"
//                 phone="01704199798"
//             />
//         </>
//     );
// }
