"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  path: string;
}

const slides: Slide[] = [
  {
    image: "/images/room4.webp",
    title: "Luxury Rooms",
    subtitle: "Comfort Meets Elegance",
    buttonText: "VIEW ROOMS",
    path: "/roomsandsuites",
  },
  {
    image: "/images/resturantone.webp",
    title: "Food & Dining",
    subtitle: "Taste The Finest Cuisine",
    buttonText: "EXPLORE RESTURENT",
    path: "/restaurantsandcafes",
  },
  {
    image: "/images/hallroom.webp",
    title: "Meeting Rooms",
    subtitle: "Business Made Premium",
    buttonText: "BOOK NOW",
    path: "/meetingsandevents",
  },
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image Zooming Cinematic Animation */}
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentIndex].image}')` }}
          />

          {/* Smooth Luxury Gradient Overlays */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 mix-blend-multiply" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />

          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-amber-400/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-[180px] pointer-events-none" />

          {/* Content Wrapper */}
          <div className="relative h-full flex items-center justify-center z-10">
            <div className="text-center px-6 max-w-5xl mx-auto flex flex-col items-center select-none">
              {/* Animated Accent Header */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
                <h2 className="text-white text-xs md:text-sm tracking-[0.4em] font-medium uppercase drop-shadow-md">
                  {slides[currentIndex].title}
                </h2>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
              </motion.div>

              {/* Animated Main Subtitle */}
              <motion.h1
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extralight tracking-[0.1em] mb-10 leading-tight bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              >
                {slides[currentIndex].subtitle}
              </motion.h1>

              {/* Animated Premium Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link href={slides[currentIndex].path}>
                  <button className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-b from-white/10 to-white/[0.02] hover:from-white hover:to-white border border-white/20 hover:border-white text-white hover:text-black font-serif font-medium text-xs sm:text-sm uppercase tracking-[0.3em] transition-all duration-500 rounded-none transform hover:scale-102 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
                    <span className="inline-block pt-[1px]">
                      {slides[currentIndex].buttonText}
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Blurred Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md z-20 cursor-pointer shadow-lg group"
      >
        <FiChevronLeft
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md z-20 cursor-pointer shadow-lg group"
      >
        <FiChevronRight
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
      </button>

      {/* Sophisticated Bar Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative py-2 cursor-pointer focus:outline-none"
          >
            <div
              className={`h-[2px] transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? "w-8 bg-amber-300"
                  : "w-4 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
