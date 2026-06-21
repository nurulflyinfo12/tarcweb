"use client";
import Link from "next/link";
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
    imgLeft: "/images/resturanttwo.jpg", // outdoor dining
    imgRight: "/images/resturantone.jpg", // indoor dining
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
    "/images/resturanttwo.jpg", // buffet
    "/images/resturantone.jpg", // pool
    "/images/room1.jpg", // cinema
    "/images/room2.jpg", // sports/kids
    "/images/room3.jpg", // kids zone
    "/images/room4.jpg", // gym
    "/images/room5.jpg", // library
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

  const [reviewIdx, setReviewIdx] = useState(0);
  const [awardIndex, setAwardIndex] = useState(0);
  const nextAward = () => {
    setAwardIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setAwardIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };
  return (
    <section className=" py-10 sm:py-14 md:py-20 lg:py-28 xl:py-30 max-w-7xl mx-auto px-6 lg:px-10 text-left">
      <div className="relative group">
        <div className="absolute inset-x-10 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
        <div className="relative">
          <div className=" bg-white rounded-2xl p-6 sm:p-10 shadow-2xl space-y-20">
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
                <Link href="/restaurantsandcafes ">
                  <button className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors pt-2 group cursor-pointer">
                    <span>{diningData.buttonText}</span>
                    <FaLongArrowAltRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

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
            <h3 className="text-2xl font-serif font-bold text-center text-emerald-900 mb-6">
              Guest Reviews
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side - Gallery */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-3 gap-2 auto-rows-[90px] sm:auto-rows-[110px]">
                  <div className="col-span-1 row-span-1 rounded overflow-hidden">
                    <img
                      src={galleryImages[0]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-1 row-span-1 rounded overflow-hidden">
                    <img
                      src={galleryImages[1]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-1 row-span-2 rounded overflow-hidden">
                    <img
                      src={galleryImages[2]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-2 row-span-1 rounded overflow-hidden">
                    <img
                      src={galleryImages[3]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-1 row-span-2 rounded overflow-hidden">
                    <img
                      src={galleryImages[4]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-2 row-span-1 rounded overflow-hidden">
                    <img
                      src={galleryImages[5]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="col-span-2 row-span-1 rounded overflow-hidden">
                    <img
                      src={galleryImages[1]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Review Card */}
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

                <div className="mt-4 text-center lg:text-right">
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:underline">
                    <span>All Reviews</span>
                    <FaLongArrowAltRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="space-y-8 border-t border-gray-100 pt-12 text-center">
              <div>
                <h3 className="mt-2 text-3xl font-serif font-bold text-emerald-900">
                  Awards & Honors
                </h3>
              </div>

              <div className="relative overflow-hidden py-6">
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />

                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                <div className="awards-marquee flex gap-10">
                  {[...awards, ...awards].map((award, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center min-w-[220px] shrink-0"
                    >
                      <div className="relative">
                        <div className="relative h-28 w-28 rounded-full bg-gradient-to-br flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                          <img
                            src={award.logo}
                            alt={award.name}
                            className="w-25 h-25 object-cover rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAndReviews;
