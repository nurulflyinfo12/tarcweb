"use client";
import React, { useState } from "react";
import {
  FaLongArrowAltRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const DiscoverAndReviews = () => {
  // --- MOCK API DATA SHAPES ---
  const diningData = {
    subtitle: "Dine & Drink",
    title: "Discover a Grand Dining Experience",
    description:
      "Enjoy an exquisite dining experience, at our multicuisine restaurants and cafes. With the most up to date, hygienic kitchen, maintained and operated by a highly skilled team, we ensure a delightful and lavish dining experience.",
    buttonText: "Discover More",
    imgLeft:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop", // outdoor dining
    imgRight:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", // indoor dining
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "It is an awesome place for 1/2 nights stay with family. Quality of buffet foods is superb. Summarily, it is an outstanding place and very worth for value",
      author: "Sefaul Islam",
      date: "15 June 2024",
    },
    {
      id: 2,
      rating: 5,
      text: "Excellent service and breathtaking views of the tea gardens. The staff goes above and beyond. Will definitely visit again!",
      author: "Rahat Chowdhury",
      date: "12 January 2026",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400&auto=format&fit=crop", // buffet
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=400&auto=format&fit=crop", // pool
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&auto=format&fit=crop", // cinema
    "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=400&auto=format&fit=crop", // sports/kids
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop", // kids zone
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop", // gym
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop", // library
  ];

  const awards = [
    {
      id: 1,
      name: "World Luxury Hotel Awards 2014",
      logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "TripAdvisor Certificate of Excellence 2018",
      logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "TripAdvisor Excellence 2019",
      logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "World Luxury Hotel Awards 2018",
      logo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=200&auto=format&fit=crop",
    },
  ];

  // --- STATE FOR SLIDERS ---
  const [reviewIdx, setReviewIdx] = useState(0);
  const [awardIndex, setAwardIndex] = useState(0);
  const nextAward = () => {
    setAwardIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setAwardIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };
  return (
    <section className=" py-16 max-w-7xl mx-auto px-6 lg:px-10 text-left">
      <div className=" bg-white rounded-2xl p-6 sm:p-10 shadow-2xl space-y-20">
        {/* =========================================================
            SECTION 1: DINE & DRINK BANNER
           ========================================================= */}
        <div className="bg-[#f4f7f4] rounded-xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 border border-emerald-900/5">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-amber-600 text-xs font-semibold tracking-wider uppercase">
                {diningData.subtitle}
              </span>
              <span className="w-8 h-[1px] bg-amber-500"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-900 leading-tight">
              {diningData.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {diningData.description}
            </p>
            <button className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors pt-2 group">
              <span>{diningData.buttonText}</span>
              <FaLongArrowAltRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Masked Custom Framed Images */}
          <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
            <div className="w-1/2 h-56 sm:h-64 rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-md">
              <img
                src={diningData.imgLeft}
                alt="Outdoor Dining"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-56 sm:h-64 rounded-md overflow-hidden shadow-md">
              <img
                src={diningData.imgRight}
                alt="Indoor Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 2: GUEST REVIEWS (MASONRY GRAPHIC + SLIDER)
           ========================================================= */}
        <div className="space-y-8">
          <h3 className="text-2xl font-serif font-bold text-center text-emerald-900">
            Guest Reviews
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side Mosaic Mini-Grid */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-2 auto-rows-[90px] sm:auto-rows-[110px]">
              <div className="col-span-1 row-span-1 rounded overflow-hidden">
                <img
                  src={galleryImages[0]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded overflow-hidden">
                <img
                  src={galleryImages[1]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-2 rounded overflow-hidden">
                <img
                  src={galleryImages[2]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded overflow-hidden">
                <img
                  src={galleryImages[3]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-2 rounded overflow-hidden">
                <img
                  src={galleryImages[4]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded overflow-hidden">
                <img
                  src={galleryImages[5]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side Review slider box */}
            <div className="lg:col-span-6 bg-gray-50 border border-gray-100 p-6 sm:p-8 rounded-xl relative shadow-sm">
              <div className="absolute right-6 top-6">
                <FcGoogle size={24} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(reviews[reviewIdx].rating)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-700 italic min-h-[80px] leading-relaxed">
                "{reviews[reviewIdx].text}"
              </p>

              {/* Profile Wrapper */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-200/60 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {reviews[reviewIdx].author[0]}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">
                      {reviews[reviewIdx].author}
                    </h5>
                    <p className="text-[10px] text-gray-400">
                      {reviews[reviewIdx].date}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setReviewIdx((prev) =>
                        prev === 0 ? reviews.length - 1 : prev - 1,
                      )
                    }
                    className="p-2 bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 rounded-full transition-all"
                  >
                    <FaChevronLeft size={10} />
                  </button>
                  <button
                    onClick={() =>
                      setReviewIdx((prev) =>
                        prev === reviews.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="p-2 bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 rounded-full transition-all"
                  >
                    <FaChevronRight size={10} />
                  </button>
                </div>
              </div>

              {/* All Reviews link */}
              <div className="mt-4 text-center lg:text-right">
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:underline">
                  <span>All Reviews</span>
                  <FaLongArrowAltRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 3: AWARDS & HONORS
           ========================================================= */}
        <div className="space-y-6 border-t border-gray-100 pt-12 text-center">
          <h3 className="text-2xl font-serif font-bold text-emerald-900">
            Award & Honors
          </h3>

          <div className="relative max-w-4xl mx-auto flex items-center justify-center gap-4 px-8 overflow-hidden">
            {/* LEFT BUTTON */}
            <button
              onClick={prevAward}
              className="absolute left-0 z-10 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition"
            >
              <FaChevronLeft size={12} />
            </button>

            {/* SLIDER WRAPPER */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${awardIndex * 100}%)`,
                }}
              >
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-6"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-[10px] text-gray-400 font-mono">
                      LOGO
                    </div>

                    <span className="text-[10px] text-gray-500 max-w-[120px] font-medium leading-tight">
                      {award.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextAward}
              className="absolute right-0 z-10 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition"
            >
              <FaChevronRight size={12} />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex items-center justify-center gap-1.5 pt-4">
            {awards.map((_, i) => (
              <span
                key={i}
                onClick={() => setAwardIndex(i)}
                className={`cursor-pointer rounded-full transition-all ${
                  i === awardIndex
                    ? "w-2 h-2 bg-stone-800"
                    : "w-1.5 h-1.5 bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAndReviews;
