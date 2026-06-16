"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      title: "Royal Suite Superior",
      guests: 4,
      beds: 3,
      size: 1160,
      description:
        "Elevate your senses in our Royal Suites with elegant interiors and serene luxury surrounded by nature.",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Executive Deluxe Room",
      guests: 2,
      beds: 1,
      size: 650,
      description:
        "A perfect blend of comfort and modern design ideal for business and leisure travelers.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Presidential Suite",
      guests: 6,
      beds: 4,
      size: 2200,
      description:
        "Experience unmatched luxury with panoramic views, premium services, and exclusive comfort.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Honeymoon Cottage",
      guests: 2,
      beds: 1,
      size: 780,
      description:
        "A romantic private cottage surrounded by greenery, perfect for couples seeking peace and privacy.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Family Luxury Suite",
      guests: 5,
      beds: 3,
      size: 1400,
      description:
        "Spacious family suite with multiple beds, living area, and modern amenities for a comfortable stay.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
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

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const currentRoom = roomsData[currentIndex];

  return (
    <section className="bg-background py-16 overflow-hidden transition-colors duration-300">
      {/* HEADER */}
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

      {/* SLIDER */}
      <div
        className="relative w-full mb-12 h-[320px] sm:h-[480px] md:h-[580px] flex items-center justify-center"
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
              style={{
                pointerEvents: isVisible ? "auto" : "none",
              }}
              className="absolute w-[90%] md:w-[65%] h-full cursor-pointer select-none will-change-transform"
            >
              <img
                src={room.image}
                alt={room.title}
                draggable={false}
                className="w-full h-full object-cover rounded-sm shadow-2xl transform-gpu"
              />

              {/* Navigation */}
              {isCenter && (
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="bg-black/20 hover:bg-primary p-3 md:p-4 rounded-full text-white backdrop-blur-sm transition-all duration-300"
                  >
                    <FaChevronLeft size={18} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="bg-black/20 hover:bg-primary p-3 md:p-4 rounded-full text-white backdrop-blur-sm transition-all duration-300"
                  >
                    <FaChevronRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* EDGE GRADIENTS */}
        <div className="absolute left-0 top-0 w-[25%] h-full bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[25%] h-full bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />
      </div>

      {/* ROOM INFO */}
      <div className="max-w-4xl mx-auto  text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              {currentRoom.title}
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-text-muted mb-5">
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
    </section>
  );
};

export default AtAGlance;
