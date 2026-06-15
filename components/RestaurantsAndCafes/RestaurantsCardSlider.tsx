"use client";

import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface Room {
  id: number;
  name: string;
//   sizeSQM: number;
//   sizeSQF: number;
//   maxGuests: number;
  description: string;
  images: string[];
  reverse: boolean;
}

interface RoomCardProps {
  room: Room;
  onImageClick: (images: string[], name: string, index: number) => void;
}

const RestaurantsCardSlider = ({ room, onImageClick }: RoomCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slider
  useEffect(() => {
    if (room.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % room.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [room.images.length]);

  return (
    // Main container wrapping the full-width dark green context section
    <div className="w-full py-6">
      
      <div className="relative w-full max-w-7xl mx-auto">
        
        <div className="absolute inset-x-10 -top-3 -bottom-3 bg-white/10 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

        {/* Foreground Card Base */}
        <div
          className={`relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-xl border border-neutral-100/80 z-10 ${
            room.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left Block Image Slider Gallery */}
          <div className="w-full md:w-[45%] lg:w-[42%] shrink-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-sm bg-neutral-50">
              <img
                src={room.images[currentIndex]}
                alt={room.name}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                onClick={() => onImageClick(room.images, room.name, currentIndex)}
              />

              {/* Slider Directional Controls */}x
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm transition z-10"
                  >
                    <FiChevronLeft size={16} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex((prev) => (prev + 1) % room.images.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm transition z-10"
                  >
                    <FiChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Horizontal Navigation Bars */}
              {room.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {room.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`h-[3px] rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                          ? "w-6 bg-neutral-800" 
                          : "w-2 bg-neutral-400/60 hover:bg-neutral-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Block Descriptive Information Summary */}
<div className="w-full flex flex-col items-center justify-center text-center px-2 py-4 animate-slide-in-right">
  
  <div className="flex items-center gap-3 mb-5">
    <span className="h-[1px] w-8 sm:w-14 bg-[#556B2F]" />
    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#4A5D26] tracking-wide whitespace-nowrap">
      {room.name}
    </h2>
    <span className="h-[1px] w-8 sm:w-14 bg-[#556B2F]" />
  </div>

  <p className="text-neutral-600 font-normal text-xs sm:text-sm leading-relaxed max-w-md mt-4 mb-6">
    {room.description}
  </p>

  <div>
    <Link
      href="#"
      className="inline-flex items-center text-xs font-bold text-[#D4AF37] hover:text-[#B3922E] transition-colors duration-300 group tracking-widest uppercase"
    >
      <span>Find More</span>
      <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300">
        →
      </span>
    </Link>
  </div>

</div>

        </div>
      </div>

    </div>
  );
};

export default RestaurantsCardSlider;