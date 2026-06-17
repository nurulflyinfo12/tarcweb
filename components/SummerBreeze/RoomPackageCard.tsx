"use client";

import React, { useEffect } from "react";
import { FiCheck } from "react-icons/fi";

export interface RoomPackage {
  name: string;
  price: string;
  size: string;
  images: string[];
  inclusions: string[];
}

interface RoomPackageCardProps {
  pkg: RoomPackage;
  index: number;
  isEven: boolean;
  currentSlide: number;
  onSlideChange: (newIndex: number) => void;
  onImageClick?: (
    images: string[],
    name: string,
    index: number
  ) => void;
}

const RoomPackageCard: React.FC<RoomPackageCardProps> = ({
  pkg,
  isEven,
  currentSlide,
  onSlideChange,
  onImageClick,
}) => {
  const imagesCount = pkg.images.length;

  useEffect (() => {
    if (imagesCount <= 1) return;
  
    const timer = setTimeout(() => {
      onSlideChange((currentSlide + 1) % imagesCount);
    }, 4000);
  
    return () => clearTimeout(timer);
  }, [currentSlide, imagesCount, onSlideChange]);

  const handleImageClick = () => {
    onImageClick?.(pkg.images, pkg.name, currentSlide);
  };

  return (
    <div className="w-full py-8 md:py-8">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute inset-x-6 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-15 backdrop-blur-[2px] pointer-events-none z-0" />

        <div className="relative bg-white flex flex-col lg:flex-row rounded-2xl p-8">
          {/* Content */}
          <div
            className={`lg:w-1/2 p-8 lg:p-12 ${
              isEven ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <h3 className="text-3xl font-bold text-secondary mb-2">
              {pkg.name}
            </h3>

            <p className="text-black font-medium mb-8">
              Room Size: {pkg.size}
            </p>

            <ul className="space-y-4 pt-6 border-t border-primary-dark mb-10 text-black">
              {pkg.inclusions.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <FiCheck className="text-primary-dark mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-primary-dark flex items-end justify-between">
              <div>
                <p className="text-sm text-foreground/60">
                  Total payable
                </p>
                <p className="text-4xl font-bold text-primary">
                  {pkg.price}
                </p>
              </div>

              <button className="bg-secondary hover:bg-background text-white font-semibold px-10 py-4 rounded-xl transition flex items-center gap-2 cursor-pointer">
                BOOK NOW →
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            className={`lg:w-1/2 relative h-[500px] lg:h-auto group cursor-pointer overflow-hidden ${
              isEven ? "lg:order-2" : "lg:order-1"
            }`}
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
          >
            {/* Images */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {pkg.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${pkg.name} ${imgIndex + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
                    imgIndex === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}
            </div>
          
            {/* Luxury Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
          
            {/* Left Arrow */}
            {imagesCount > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSlideChange(
                    (currentSlide - 1 + imagesCount) % imagesCount
                  );
                }}
                className="
                  absolute left-5 top-1/2 -translate-y-1/2 z-20
                  h-12 w-12
                  rounded-full
                  bg-white/15
                  backdrop-blur-md
                  border border-white/30
                  text-white
                  flex items-center justify-center
                  shadow-lg
                  opacity-0 group-hover:opacity-100
                  group-hover:left-6
                  hover:bg-white
                  hover:text-black
                  transition-all duration-300
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
          
            {/* Right Arrow */}
            {imagesCount > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSlideChange(
                    (currentSlide + 1) % imagesCount
                  );
                }}
                className="
                  absolute right-5 top-1/2 -translate-y-1/2 z-20
                  h-12 w-12
                  rounded-full
                  bg-white/15
                  backdrop-blur-md
                  border border-white/30
                  text-white
                  flex items-center justify-center
                  shadow-lg
                  opacity-0 group-hover:opacity-100
                  group-hover:right-6
                  hover:bg-white
                  hover:text-black
                  transition-all duration-300
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          
            {/* Premium Dots */}
            {imagesCount > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {pkg.images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSlideChange(dotIndex);
                    }}
                    className={`rounded-full transition-all duration-500 ${
                      dotIndex === currentSlide
                        ? "w-10 h-2 bg-white shadow-lg"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}
          
            {/* Image Counter */}
            {imagesCount > 1 && (
              <div className="absolute top-5 right-5 z-20 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {currentSlide + 1} / {imagesCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPackageCard;