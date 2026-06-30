"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaLongArrowAltRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const DiscoverAndReviews = () => {
  const diningData = {
    subtitle: "Dine & Drink",
    title: "Discover a Grand Dining Experience",
    description:
      "Enjoy an exquisite dining experience, at our multicuisine restaurants and cafes. With the most up to date, hygienic kitchen, maintained and operated by a highly skilled team, we ensure a delightful and lavish dining experience.",
    buttonText: "Discover More",
    imgLeft: "/images/resturanttwo.webp",
    imgRight: "/images/resturantone.webp",
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
    "/images/resturanttwo.webp",
    "/images/resturantone.webp",
    "/images/room1.webp",
    "/images/room2.webp",
    "/images/room3.webp",
    "/images/room4.webp",
    "/images/room5.webp",
  ];

  const [reviewIdx, setReviewIdx] = useState(0);

  // (award slider commented out – no changes)

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-28 xl:py-30 max-w-7xl mx-auto px-6 lg:px-10 text-left">
      <div className="relative group">
        <div className="absolute inset-x-10 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
        <div className="relative">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl space-y-20">
            {/* Dining Section */}
            <div className="bg-[#f4f7f4] rounded-xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 border border-emerald-900/5">
              <div className="w-full lg:w-1/2 space-y-4">
                {/* ... subtitle, title, description unchanged ... */}
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
                <Link href="/restaurantsandcafes">
                  <button className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors pt-2 group cursor-pointer">
                    <span>{diningData.buttonText}</span>
                    <FaLongArrowAltRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Dining Images – now with next/image + priority */}
              <div className="w-full lg:w-1/2 flex items-center justify-center gap-4">
                <div className="w-1/2 h-56 sm:h-64 rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-md relative">
                  <Image
                    src={diningData.imgLeft}
                    alt="Outdoor Dining"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="w-1/2 h-56 sm:h-64 rounded-md overflow-hidden shadow-md relative">
                  <Image
                    src={diningData.imgRight}
                    alt="Indoor Restaurant"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-center text-emerald-900 mb-6">
              Guest Reviews
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side - Gallery – all images lazy loaded */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-3 gap-2 auto-rows-[90px] sm:auto-rows-[110px]">
                  {[
                    galleryImages[0],
                    galleryImages[1],
                    galleryImages[2],
                    galleryImages[3],
                    galleryImages[4],
                    galleryImages[5],
                    galleryImages[1], // duplicate – kept exactly as original
                  ].map((src, idx) => {
                    // Different grid placements based on index – preserved
                    let colSpan = 1;
                    let rowSpan = 1;
                    if (idx === 2) rowSpan = 2; // 3rd image spans 2 rows
                    if (idx === 3) colSpan = 2; // 4th image spans 2 cols
                    if (idx === 4) rowSpan = 2; // 5th image spans 2 rows
                    if (idx === 5) colSpan = 2; // 6th image spans 2 cols
                    if (idx === 6) colSpan = 2; // last spans 2 cols

                    return (
                      <div
                        key={idx}
                        className={`col-span-${colSpan} row-span-${rowSpan} rounded overflow-hidden relative`}
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 33vw, 16vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Review Card – unchanged (text only, no images) */}
              <div className="lg:col-span-6 bg-gray-50 border border-gray-100 p-6 sm:p-8 rounded-xl relative shadow-sm h-fit">
                <div className="absolute right-6 top-6">
                  <FcGoogle size={24} />
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(reviews[reviewIdx].rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="text-sm text-gray-700 italic min-h-[80px] leading-relaxed">
                  "{reviews[reviewIdx].text}"
                </p>

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

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setReviewIdx((prev) =>
                          prev === 0 ? reviews.length - 1 : prev - 1
                        )
                      }
                      className="p-2 bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 rounded-full transition-all"
                    >
                      <FaChevronLeft size={10} />
                    </button>
                    <button
                      onClick={() =>
                        setReviewIdx((prev) =>
                          prev === reviews.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="p-2 bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 rounded-full transition-all"
                    >
                      <FaChevronRight size={10} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center lg:text-right">
                  <Link
                    href="/guestreview"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:underline"
                  >
                    <span>All Reviews</span>
                    <FaLongArrowAltRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAndReviews;