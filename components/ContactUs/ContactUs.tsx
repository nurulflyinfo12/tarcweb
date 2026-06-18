"use client";

import React, { useState } from "react";
import { BiLocationPlus } from "react-icons/bi";
import { FiPhone, FiMapPin } from "react-icons/fi";
import CallToAction from "../common/calltoaction";
import PageHero from "../common/pagehero";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with your actual API endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after successful submission
      e.currentTarget.reset();

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="We would love to respond to your queries and help you succeeded. Feel free to get in touch with us"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      />

      {/* Main Contact Card - Exact Design Match */}
      <section className="py-12 md:py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="absolute inset-x-8 sm:inset-x-12  -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Left Column - Info Boxes */}
                <div className="lg:w-5/12 p-6 sm:p-8 lg:p-5 space-y-6">
                  {/* tarc Tea Resort */}
                  <div className="bg-[#4F6240] rounded-sm p-6 sm:p-7 text-white">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-9 h-9 bg-[#D4AF37] text-[#0A2F1F] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                        <BiLocationPlus />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                          The Imperial Institute Of Hospitality & Hotel
                          Management
                        </h3>
                        <p className="text-sm opacity-90">
                          Srimongal, Moulvibazar - 3210, Bangladesh.
                        </p>
                        <div className="mt-4 space-y-1.5 text-sm">
                          <p>
                            <strong>Tel:</strong> +880 2997 738501-3
                          </p>
                          <p>
                            <strong>For Reservation:</strong> +880 9678 785959 /
                            +880 1730 793501-4
                          </p>
                          <p>
                            <strong>For Corporate or Group Event:</strong> +880
                            1730 793555
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            reservations@grandsultanresort.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corporate Office */}
                  <div className="bg-[#4F6240] rounded-sm p-6 sm:p-7 text-white">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-9 h-9 bg-[#D4AF37] text-[#0A2F1F] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                        <BiLocationPlus />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                          Corporate Office
                        </h3>
                        <p className="text-sm opacity-90">
                          House# 108, Apt.# D2, Road 11, Block C, Banani, Dhaka
                          1213, Bangladesh.
                        </p>
                        <p className="mt-4 text-sm">
                          <strong>Tel:</strong> +880 9678 762929
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Excursion & Resorts */}
                  <div className="bg-[#4F6240] rounded-sm p-6 sm:p-7 text-white">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-9 h-9 bg-[#D4AF37] text-[#0A2F1F] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                        🗺️
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                          Excursion & Resorts Bangladesh Ltd
                        </h3>
                        <p className="text-sm opacity-90">
                          The Imperial Institute Of Hospitality & Hotel
                          Management is a wholly owned subsidiary of Excursion &
                          Resorts Bangladesh Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="lg:w-7/12 p-6 sm:p-8 lg:p-5 bg-white">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A2F1F] mb-8">
                    We'd Love To Hear From You
                  </h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-sm text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-5 py-3.5 border border-gray-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-black"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-5 py-3.5 border border-gray-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-black"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-5 py-3.5 border border-gray-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-black"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your message (optional)
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-5 py-3.5 border border-gray-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-black resize-y"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0A2F1F] cursor-pointer hover:bg-black disabled:bg-gray-400 text-white font-semibold px-10 sm:px-12 py-4 rounded-sm transition duration-300 text-base sm:text-lg w-full sm:w-auto"
                    >
                      {isSubmitting ? "SENDING..." : "SUBMIT"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="pb-12 md:pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="absolute inset-x-8 sm:inset-x-12  -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="h-[1px] w-8 sm:w-10 md:w-14 bg-secondary" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-secondary tracking-wide">
                  Find Us
                </h2>
                <span className="h-[1px] w-8 sm:w-10 md:w-14 bg-[#556B2F]" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10478.229564444935!2d89.19960057836589!3d23.164956528855356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff1094a2327a8d%3A0xe15cd28ef02f9570!2sRural%20Reconstruction%20Foundation!5e1!3m2!1sen!2sbd!4v1781689838796!5m2!1sen!2sbd"
                  width="100%"
                  height="380"
                  className="md:h-[480px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <CallToAction
        title="Ready to Book Your Stay?"
        description="Call us now to check availability and secure your desired rooms before they're all gone!"
        phone="+880 9678 785959"
      />
    </>
  );
};

export default ContactUs;
