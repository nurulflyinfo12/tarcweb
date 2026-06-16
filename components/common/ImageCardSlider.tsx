"use client";

import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface ImageCardSliderProps {
  id: number | string;
  name: string;
  description: string;
  images: string[];
  reverse?: boolean;
  
  sizeSQM?: number;
  sizeSQF?: number;
  maxGuests?: number;
  type?: string;

  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;

  onImageClick: (images: string[], name: string, index: number) => void;
}

const ImageCardSlider = ({
  name,
  description,
  images,
  reverse = false,
  sizeSQM,
  sizeSQF,
  maxGuests,
  type,
  buttonText,
  buttonHref,
  onButtonClick,
  onImageClick,
}: ImageCardSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  const showButton = !!(buttonText || buttonHref || onButtonClick);

  return (
    <div className="w-full py-8 md:py-8">
      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* Background Accent */}
        <div className="absolute inset-x-6 md:inset-x-10 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

        <div
          className={`relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 shadow-xl border border-neutral-100/80 z-10 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Slider */}
          <div className="w-full lg:w-[46%] shrink-0">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden group shadow-md bg-neutral-50">
              <img
                src={images[currentIndex]}
                alt={name}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                onClick={() => onImageClick(images, name, currentIndex)}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); 
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md transition z-20"
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setCurrentIndex((prev) => (prev + 1) % images.length); 
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md transition z-20"
                  >
                    <FiChevronRight size={20} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setCurrentIndex(idx); 
                        }}
                        className={`h-[3px] rounded-full transition-all duration-300 ${
                          idx === currentIndex 
                            ? "w-8 bg-neutral-800" 
                            : "w-2 bg-neutral-400/70 hover:bg-neutral-500"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col items-center justify-center text-center lg:text-left px-2 py-6 lg:py-4">
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-secondary tracking-wide">
                {name}
              </h2>
              <span className="h-[1px] w-10 sm:w-14 bg-[#556B2F]" />
            </div>

            {type && (
              <p className="text-secondary text-lg font-medium tracking-wide mb-6">
                ({type})
              </p>
            )}

            {(sizeSQM || sizeSQF || maxGuests) && (
              <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 my-6">
                {sizeSQM && (
                  <div className="flex flex-col items-center">
                    <span className="text-3xl lg:text-4xl font-semibold text-neutral-700">{sizeSQM}</span>
                    <span className="text-xs font-medium text-[#D4AF37] tracking-widest mt-1">SQM</span>
                  </div>
                )}
                {sizeSQF && (
                  <div className="flex flex-col items-center">
                    <span className="text-3xl lg:text-4xl font-semibold text-neutral-700">{sizeSQF}</span>
                    <span className="text-xs font-medium text-[#D4AF37] tracking-widest mt-1">SQF</span>
                  </div>
                )}
                {maxGuests && (
                  <div className="flex flex-col items-center">
                    <span className="text-3xl lg:text-4xl font-semibold text-neutral-700">{maxGuests}</span>
                    <span className="text-xs font-medium text-[#D4AF37] tracking-widest mt-1">GUESTS</span>
                  </div>
                )}
              </div>
            )}

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              {description}
            </p>

            {showButton && (
              <div className="mt-8">
                {onButtonClick ? (
                  <button
                    onClick={onButtonClick}
                    className="inline-flex items-center text-sm font-bold text-[#D4AF37] hover:text-[#B3922E] transition-colors duration-300 group tracking-widest uppercase"
                  >
                    {buttonText || "FIND MORE"}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                ) : (
                  <Link
                    href={buttonHref || "#"}
                    className="inline-flex items-center text-sm font-bold text-[#D4AF37] hover:text-[#B3922E] transition-colors duration-300 group tracking-widest uppercase"
                  >
                    {buttonText || "FIND MORE"}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardSlider;