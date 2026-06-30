"use client";

import CallToAction from "@/components/common/calltoaction";
import PageHero from "@/components/common/pagehero";
import { Meetings } from "@/components/MeetingsAndEvents/MeetingsAndEvents";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type EventTypeItem = {
  title: string;
  image: string;
};

// ---------- EventTypesSection (images optimized) ----------
const EventTypesSection = ({ eventtypes }: { eventtypes: EventTypeItem[] }) => (
  <div className="py-8">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      {/* backdrop-blur removed – increased opacity for similar look */}
      <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 -top-2 -bottom-2 bg-white/30 rounded-2xl pointer-events-none z-0" />
      <div className="relative bg-white rounded-2xl p-5">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-[#556B2F]" />
            <h2 className="text-3xl sm:text-4xl font-medium text-secondary tracking-wide">
              Event Types
            </h2>
            <span className="h-[1px] w-12 bg-[#556B2F]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventtypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-secondary tracking-wide">
                  {event.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ---------- EventInquiryForm (blur background optimized) ----------
const EventInquiryForm = () => {
  const [formData, setFormData] = useState({
    eventDate: "",
    orgName: "",
    orgAddress: "",
    contactPerson: "",
    contactNo: "",
    email: "",
    participants: "",
    eventType: "",
    specialRequests: "",
    source: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your event inquiry has been submitted successfully.");
  };

  return (
    <div id="eventInquiryForm" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-white tracking-wide">
            Book Now
          </h2>
          <p className="text-gray-300 mt-2">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="relative px-4">
          {/* backdrop-blur removed */}
          <div className="absolute inset-x-8 -top-2 -bottom-2 bg-white/30 rounded-2xl md:inset-x-15 pointer-events-none z-0" />
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            {/* ... all form fields unchanged ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#5D7553] focus:border-transparent text-black/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Organization Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Address
                </label>
                <input
                  type="text"
                  name="orgAddress"
                  value={formData.orgAddress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Organization Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact No
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Your Contact Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Email Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Participants
                </label>
                <input
                  type="number"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Number of participants"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                >
                  <option value="">— Please choose an option —</option>
                  <option value="Corporate Meeting">Corporate Meeting</option>
                  <option value="Conference">Conference</option>
                  <option value="Training">Training</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <input
                  type="text"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Write special request"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Where You Learned About Us
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                >
                  <option value="">Where you learned about us?</option>
                  <option value="Website">Website</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black/50"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="bg-secondary hover:bg-background text-white font-medium px-8 py-2 rounded-xl transition-all duration-300 text-lg"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const meetingId = slug;

  const restaurant = Meetings.find((r) => r.id === meetingId);

  if (!restaurant) {
    return (
      <div className="mt-80 text-center text-white">
        <h1>Restaurant Not Found</h1>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  // Smooth Scroll Function
  const scrollToForm = () => {
    const form = document.getElementById("eventInquiryForm");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ---------- SliderComponent (images optimized) ----------
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
            <div className="relative rounded-xl shadow-2xl w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
              <Image
                src={restaurant.images[0]}
                alt={restaurant.name}
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="py-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* backdrop-blur removed */}
          <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 -top-2 -bottom-2 bg-white/30 rounded-2xl pointer-events-none z-0" />

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
                    <div className="relative w-full md:w-1/2 h-full">
                      <Image
                        src={restaurant.images[currentSlide]}
                        alt={`${restaurant.name} - ${currentSlide + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg shadow-md"
                        loading="lazy"
                      />
                    </div>

                    <div className="hidden md:block relative w-1/2 h-full">
                      <Image
                        src={restaurant.images[(currentSlide + 1) % total]}
                        alt={`${restaurant.name} - ${((currentSlide + 1) % total) + 1}`}
                        fill
                        sizes="50vw"
                        className="object-cover rounded-lg shadow-md"
                        loading="lazy"
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
        backgroundImage={restaurant.images[1]}
      />

      {/* main card */}
      <div className="py-8">
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">
          {/* backdrop-blur removed */}
          <div className="absolute inset-x-8 sm:inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/30 rounded-2xl pointer-events-none z-0" />

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
              {/* Hero image – above the fold, priority */}
              <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src={restaurant.images[1]}
                  alt={restaurant.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* At a Glance Section */}
      <div className="py-8">
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">
          {/* backdrop-blur removed */}
          <div className="absolute inset-x-8 md:inset-x-20 lg:inset-x-20 -top-2 -bottom-2 bg-white/30 rounded-2xl pointer-events-none z-0" />

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

              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src={restaurant.images[1] || restaurant.heroImage}
                  alt={restaurant.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
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
                    <span className="opacity-90 break-words">
                      {restaurant.cuisine.join(", ")}
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Atmosphere:</span>
                    <br />
                    <span className="opacity-90 break-words">
                      {restaurant.atmosphere}
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Service Style:</span>
                    <br />
                    <span className="opacity-90 break-words">
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
                    <span className="opacity-90 break-words">
                      {restaurant.location}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SliderComponent />
      <EventTypesSection eventtypes={restaurant.eventtypes} />
      <EventInquiryForm />

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
            {/* backdrop-blur removed */}
            <div className="absolute inset-x-8 -top-2 -bottom-2 bg-white/30 rounded-2xl md:inset-x-20 pointer-events-none z-0" />
            <div className="relative bg-white rounded-2xl items-center text-black p-10 space-x-2">
              <span>Call:</span>
              <a href="tel:01704199798" className="hover:underline">
                01704199798
              </a>
            </div>
          </div>
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