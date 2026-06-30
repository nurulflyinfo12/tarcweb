"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaBed,
  FaRulerCombined,
} from "react-icons/fa";

const AtAGlance = () => {
    const roomsData = [
    {
      id: 1,
      title: "Super Deluxe Twin",
      guests: 4,
      beds: 3,
      size: 1160,
      description:
        "Experience comfort and convenience in our Super Deluxe Twin Room, featuring two cozy twin beds and elegant modern interiors. Perfect for friends, colleagues, or family travelers seeking a relaxing and spacious stay.",
      image: "/images/tiwnroom.webp",
    },
    {
      id: 2,
      title: "Super Deluxe Couple",
      guests: 2,
      beds: 1,
      size: 650,
      description:
        "Our King Deluxe room has a spacious layout, with an abundance of natural light coming in and a spectacular view. The lavish and cozy King size bed is ideal for a couple.",
      image: "/images/superdeluxecouple.webp",
    },
    {
      id: 3,
      title: "Vip Room Regular",
      guests: 6,
      beds: 4,
      size: 2200,
      description:
        "Enjoy a comfortable and relaxing stay in our VIP Room Regular, thoughtfully designed with modern amenities and stylish interiors. Ideal for guests seeking extra comfort, privacy, and a premium hospitality experience..",
      image: "/images/viproom.webp",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % roomsData.length);
  }, [roomsData.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + roomsData.length) % roomsData.length);
  }, [roomsData.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const currentRoom = roomsData[currentIndex];

  return (
    <section className="bg-background py-10 sm:py-14 md:py-20 lg:py-28 xl:py-30 overflow-hidden transition-colors duration-300">
      {/* Header */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="w-10 h-[1px] bg-primary/40"></span>
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            At A Glance
          </p>
          <span className="w-10 h-[1px] bg-primary/40"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground transition-colors">
          Our Rooms & Suites
        </h2>
      </div>

      {/* =========================================================
          DESKTOP SLIDER – Replaced <img> with next/image
      ========================================================= */}
      <div
        className="hidden md:flex relative w-full mb-12 h-[480px] md:h-[580px] items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {roomsData.map((room, index) => {
          const isCenter = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + roomsData.length) % roomsData.length;
          const isRight = index === (currentIndex + 1) % roomsData.length;
          const isVisible = isCenter || isLeft || isRight;

          return (
            <motion.div
              key={room.id}
              layout
              initial={false}
              animate={{
                x: isCenter ? 0 : isLeft ? -350 : isRight ? 350 : 0,
                scale: isCenter ? 1 : 0.9,
                opacity: isVisible ? (isCenter ? 1 : 0.55) : 0,
                zIndex: isCenter ? 20 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 1.2,
              }}
              onClick={() => setCurrentIndex(index)}
              style={{ pointerEvents: isVisible ? "auto" : "none" }}
              className="absolute w-[65%] h-full cursor-pointer select-none will-change-transform"
            >
              {/* ✅ Replace <img> with next/image – fill container */}
              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="65vw"
                  className="object-cover transform-gpu"
                  priority={isCenter} // only current slide loads eagerly
                  draggable={false}
                />
              </div>

              {/* Navigation arrows – backdrop-blur removed */}
              {isCenter && (
                <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    // Replaced backdrop-blur-sm with a slightly more solid bg
                    className="bg-black/40 hover:bg-primary p-4 rounded-full text-white transition-all duration-300"
                  >
                    <FaChevronLeft size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="bg-black/40 hover:bg-primary p-4 rounded-full text-white transition-all duration-300"
                  >
                    <FaChevronRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Edge gradients (unchanged) */}
        <div className="absolute left-0 top-0 w-[25%] h-full bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[25%] h-full bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />
      </div>

      {/* DESKTOP DETAIL PANEL – unchanged (kept motion for text) */}
      <div className="hidden md:block max-w-4xl mx-auto px-6 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              {currentRoom.title}
            </h3>
            <div className="flex items-center gap-6 text-sm text-text-muted mb-5">
              <div className="flex items-center gap-2">
                <FaUsers className="text-primary" />
                <span className="font-medium">{currentRoom.guests} Guests</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBed className="text-primary" />
                <span className="font-medium">{currentRoom.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRulerCombined className="text-primary" />
                <span className="font-medium">{currentRoom.size} sqft</span>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed max-w-2xl font-light">
              {currentRoom.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================
          MOBILE LAYOUT – replaced <img> with next/image, lazy loaded
      ========================================================= */}
      <div className="block md:hidden max-w-7xl mx-auto px-6 space-y-10">
        {roomsData.map((room) => (
          <div
            key={room.id}
            className="flex flex-col gap-4 border-b border-border/40 pb-8 last:border-0 last:pb-0"
          >
            {/* Image container – uses fill & lazy loading */}
            <div className="relative w-full h-[240px] overflow-hidden shadow-lg">
              <Image
                src={room.image}
                alt={room.title}
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Info content (unchanged) */}
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-primary">
                {room.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                <div className="flex items-center gap-1.5">
                  <FaUsers className="text-primary text-xs" />
                  <span>{room.guests} Guests</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaBed className="text-primary text-xs" />
                  <span>{room.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRulerCombined className="text-primary text-xs" />
                  <span>{room.size} sqft</span>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed font-light pt-1">
                {room.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AtAGlance;