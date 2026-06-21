"use client";
import React, { useState } from "react";
import PageHero from "../common/pagehero";
import { rooms } from "../RoomAndSuites/RoomsAndSuites";
import CallToAction from "../common/calltoaction";

type Gallery = {
  id: number;
  title: string;
  coverImage: string;
  images: string[];
  photoCount: number;
};

const diningGalleries = [
  {
    id: 7688,
    title: "Restaurant",
    photoCount: 3,
    coverImage: "/images/resturantone.jpg",
    images: [
      "/images/resturantone.jpg",
      "/images/resturanttwo.jpg",
      "/images/resturantone1.jpg",
    ],
  },
];
const MeetingGalleries = [
  {
    id: 1,
    title: "Meeting",
    photoCount: 3,
    coverImage: "/images/boardmeeting.jpeg",
    images: [
      "/images/boardmeeting.jpeg",
      "/images/conference.jpeg",
      "/images/hallroom.jpg",
    ],
  },
  {
    id: 2,
    title: "Restaurant",
    photoCount: 3,
    coverImage: "/images/resturantone.jpg",
    images: [
      "/images/resturantone.jpg",
      "/images/resturanttwo.jpg",
      "/images/resturantone1.jpg",
    ],
  },
  {
    id: 3,
    title: "Gym",
    photoCount: 1,
    coverImage: "/images/gym.jpg",
    images: ["/images/gym.jpg"],
  },
];

const PhotoGallery = () => {
  const roomData = rooms.map((r) => ({
    id: r.id,
    title: r.name || "",
    coverImage: r.coverImage || [],
    images: r.images,
    photoCount: r.images.length,
  }));

  console.log(roomData);

  // Lightbox Slider States
  const [activeGallery, setActiveGallery] = useState<Gallery | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openLightbox = (gallery: Gallery) => {
    setActiveGallery(gallery);
    setCurrentImgIndex(0);
  };

  const closeLightbox = () => {
    setActiveGallery(null);
  };

  const nextSlide = (e: any) => {
    e.stopPropagation();
    if (!activeGallery) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeGallery.images.length);
  };

  const prevSlide = (e: any) => {
    e.stopPropagation();
    if (!activeGallery) return;
    setCurrentImgIndex(
      (prev) =>
        (prev - 1 + activeGallery.images.length) % activeGallery.images.length,
    );
  };

  return (
    <div className="text-white min-h-screen font-sans pb-16 relative">
      {/* Hero Section */}
      <PageHero
        title="Photo Gallery"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      />

      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <div className="flex items-center justify-center gap-4 text-gray-300 text-3xl tracking-widest uppercase font-['Kanit',sans-serif] font-extrabold mb-2">
          <span className="w-8 h-[1px] bg-gray-400"></span>
          Join Us On A Visual Tour
          <span className="w-8 h-[1px] bg-gray-400"></span>
        </div>
        <p className="text-gray-300 text-md max-w-xl mx-auto font-['Biryani',sans-serif] font-normal">
          Explore through our gallery for a visual tour of our property and
          facilities.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-8 my-9">
        <h2 className="text-center text-2xl md:text-3xl font-serif text-white mb-10">
          Room & Suites
        </h2>

        {/* Grid Layout matching standard 3-column system */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {roomData.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full group"
            >
              {/* Clickable Image Outer Framework */}
              <div
                className="relative w-full cursor-pointer transition-transform duration-300 active:scale-95"
                onClick={() => openLightbox(item)}
              >
                {/* 1. Outermost Decorative Border */}
                <div className="absolute -left-2 -bottom-2 right-2 top-2 border-l border-b border-white pointer-events-none" />

                {/* 2. Second Inline Decorative Border */}
                <div className="absolute -left-1 -bottom-1 right-1 top-1 border-l border-b border-white pointer-events-none" />

                {/* 3. Main Image Container (The Green Pass-partout / Gap Spacer) */}
                <div className="relative p-1 bg-[#041a0b] border border-white shadow-xl">
                  {/* 4. Inner tight border framing the photo */}
                  <div className="border border-white/40 overflow-hidden">
                    {/* Image Wrapper */}
                    <div className="relative aspect-[1.22] w-full">
                      <img
                        decoding="async"
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Item Details */}
              <button
                onClick={() => openLightbox(item)}
                className="mt-4 text-center block text-[#df9a1b] hover:text-amber-400 font-medium text-lg tracking-wide transition-colors duration-200 focus:outline-none"
              >
                {item.title}
              </button>
              <div className="text-center text-xs text-gray-400 italic mt-0.5">
                {item.photoCount} Photos
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 my-9">
        <h2 className="text-center text-2xl md:text-3xl font-serif text-white mb-10">
          Others
        </h2>

        {/* Grid Layout matching standard 3-column system */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {MeetingGalleries.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full group"
            >
              {/* Clickable Image Outer Framework */}
              <div
                className="relative w-full cursor-pointer transition-transform duration-300 active:scale-95"
                onClick={() => openLightbox(item)}
              >
                {/* 1. Outermost Decorative Border */}
                <div className="absolute -left-2 -bottom-2 right-2 top-2 border-l border-b border-white pointer-events-none" />

                {/* 2. Second Inline Decorative Border */}
                <div className="absolute -left-1 -bottom-1 right-1 top-1 border-l border-b border-white pointer-events-none" />

                {/* 3. Main Image Container (The Green Pass-partout / Gap Spacer) */}
                <div className="relative p-1 bg-[#041a0b] border border-white shadow-xl">
                  {/* 4. Inner tight border framing the photo */}
                  <div className="border border-white/40 overflow-hidden">
                    {/* Image Wrapper */}
                    <div className="relative aspect-[1.22] w-full">
                      <img
                        decoding="async"
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Item Details */}
              <button
                onClick={() => openLightbox(item)}
                className="mt-4 text-center block text-[#df9a1b] hover:text-amber-400 font-medium text-lg tracking-wide transition-colors duration-200 focus:outline-none"
              >
                {item.title}
              </button>
              <div className="text-center text-xs text-gray-400 italic mt-0.5">
                {item.photoCount} Photos
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToAction
        title="Have Any Queries For Us?"
        description="Get all your questions answered, we are just one call away!"
        phone="01704199798"
      ></CallToAction>

      {/* LIGHTBOX SLIDER MODAL */}
      {activeGallery && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between items-center backdrop-blur-md p-4 transition-all duration-300 ease-out animate-fadeIn select-none"
          onClick={closeLightbox}
        >
          {/* Modern Glassmorphic Top Bar */}
          <div
            className="w-full max-w-7xl mx-auto flex justify-between items-center z-50 px-6 py-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] mt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#df9a1b] font-medium block mb-0.5">
                Now Viewing
              </span>
              <h3 className="text-xl font-['Kanit',sans-serif] font-semibold text-white tracking-wide">
                {activeGallery.title}
              </h3>
            </div>

            <div className="flex items-center gap-6">
              {/* Elegant Counter Capsule */}
              <span className="text-xs font-mono bg-white/[0.07] text-gray-300 px-3 py-1 rounded-full border border-white/[0.05]">
                {currentImgIndex + 1}{" "}
                <span className="text-gray-500 mx-0.5">/</span>{" "}
                {activeGallery.images.length}
              </span>

              {/* Minimalist Close Button */}
              <button
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all duration-200 focus:outline-none"
                onClick={closeLightbox}
                aria-label="Close gallery"
              >
                <svg
                  className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Immersive Viewport */}
          <div
            className="relative flex-1 w-full max-w-5xl my-6 flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modern Hover-Triggered Floating Navigation Arrow: Left */}
            <button
              className="absolute left-4 md:-left-20 bg-white/[0.03] hover:bg-[#df9a1b] border border-white/[0.08] hover:border-[#df9a1b] text-white hover:text-black rounded-full p-4 transition-all duration-300 z-50 focus:outline-none shadow-2xl group active:scale-95"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Modern Hover-Triggered Floating Navigation Arrow: Right */}
            <button
              className="absolute right-4 md:-right-20 bg-white/[0.03] hover:bg-[#df9a1b] border border-white/[0.08] hover:border-[#df9a1b] text-white hover:text-black rounded-full p-4 transition-all duration-300 z-50 focus:outline-none shadow-2xl group active:scale-95"
              onClick={nextSlide}
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Polished Image Stage with subtle lighting drop-shadow */}
            <div className="relative max-w-full max-h-[65vh] p-2 bg-[#020d05] border border-white/[0.1] shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-md overflow-hidden group">
              <img
                src={activeGallery.images[currentImgIndex]}
                alt={`${activeGallery.title} - view ${currentImgIndex + 1}`}
                className="max-w-full max-h-[62vh] object-contain rounded-sm transition-all duration-500 ease-in-out transform scale-100"
              />
            </div>
          </div>

          {/* Elegant Interactive Carousel Dot Indicators */}
          <div
            className="w-full max-w-xs mx-auto flex justify-center items-center gap-2.5 pb-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {activeGallery.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImgIndex(idx)}
                className={`transition-all duration-300 focus:outline-none h-1.5 rounded-full ${
                  idx === currentImgIndex
                    ? "w-8 bg-[#df9a1b]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
