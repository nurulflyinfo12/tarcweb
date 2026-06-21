"use client";

import React, { useEffect } from "react";
import { FiCheck } from "react-icons/fi";

export interface RoomPackage {
  name: string;
  price: string;
  offer: string;
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
  onImageClick?: (images: string[], name: string, index: number) => void;
  onBookNow?: () => void;
}

const RoomPackageCard: React.FC<RoomPackageCardProps> = ({
  pkg,
  isEven,
  currentSlide,
  onSlideChange,
  onImageClick,
  onBookNow,
}) => {
  const imagesCount = pkg.images.length;

  useEffect(() => {
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
    <div className="w-full py-8">
      <div className="relative w-full max-w-7xl mx-auto px-0 sm:px-4">
        {/* Background Glow */}
        <div className="absolute inset-x-8 md:inset-x-15 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

        {/* Main Card */}
        <div className="relative bg-white flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl p-6 items-center justify-center">
          {/* Content Section */}
          <div
            className={`w-full lg:w-1/2 py-6 md:p-8 flex flex-col ${
              isEven ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3">
                {pkg.name}
              </h3>

              <p className="text-black font-medium mb-6 md:mb-8 text-base md:text-lg">
                Room Size: {pkg.size}
              </p>

              <ul className="space-y-4 md:space-y-5 pt-6 border-t border-primary-dark mb-8 text-black">
                {pkg.inclusions.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] md:text-base">
                    <FiCheck className="text-primary-dark mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Button */}
            <div className="pt-6 md:pt-8 border-t border-primary-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-auto">
              <div>
                <p className="text-sm text-foreground/60">Total payable</p>

                <div className="flex items-baseline gap-3">
                  <p className="text-2xl font-bold text-secondary">PRICE:</p>
                  {pkg.offer && (
                    <p className="text-2xl md:text-2xl font-bold text-primary">
                      {pkg.offer}
                    </p>
                  )}
                  {pkg.price !== pkg.offer && (
                    <p className="text-lg md:text-xl text-gray-400 line-through">
                      {pkg.price}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={onBookNow}
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold cursor-pointer px-10 md:px-6 xl:px-10 py-4 rounded-2xl transition flex items-center gap-2 text-base w-full sm:w-auto justify-center"
              >
                BOOK NOW →
              </button>
            </div>
          </div>

          {/* Image Slider - Fixed for lg */}
          <div
            className={`w-full lg:w-1/2 relative group cursor-pointer overflow-hidden rounded-3xl  lg:rounded-2xl h-[340px] lg:h-[700px] ${
              isEven ? "lg:order-2" : "lg:order-1"
            }`}
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
          >
            {/* Responsive Image Container */}
            <div className="relative w-full h-full md:h-[460px] lg:h-full">
              <div className="relative w-full h-full overflow-hidden">
                {pkg.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${pkg.name} ${imgIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                      imgIndex === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

            {/* Controls */}
            {imagesCount > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSlideChange(
                      (currentSlide - 1 + imagesCount) % imagesCount,
                    );
                  }}
                  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
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
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSlideChange((currentSlide + 1) % imagesCount);
                  }}
                  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
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
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                  {pkg.images.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSlideChange(dotIndex);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        dotIndex === currentSlide
                          ? "w-9 h-2.5 bg-white shadow-lg"
                          : "w-2.5 h-2.5 bg-white/70 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="absolute top-5 right-5 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
                  {currentSlide + 1} / {imagesCount}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPackageCard;

// "use client";

// import React, { useEffect } from "react";
// import { FiCheck } from "react-icons/fi";

// export interface RoomPackage {
//   name: string;
//   price: string;
//   size: string;
//   images: string[];
//   inclusions: string[];
// }

// interface RoomPackageCardProps {
//   pkg: RoomPackage;
//   index: number;
//   isEven: boolean;
//   currentSlide: number;
//   onSlideChange: (newIndex: number) => void;
//   onImageClick?: (
//     images: string[],
//     name: string,
//     index: number
//   ) => void;
// }

// const RoomPackageCard: React.FC<RoomPackageCardProps> = ({
//   pkg,
//   isEven,
//   currentSlide,
//   onSlideChange,
//   onImageClick,
// }) => {
//   const imagesCount = pkg.images.length;

//   useEffect(() => {
//     if (imagesCount <= 1) return;

//     const timer = setTimeout(() => {
//       onSlideChange((currentSlide + 1) % imagesCount);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [currentSlide, imagesCount, onSlideChange]);

//   const handleImageClick = () => {
//     onImageClick?.(pkg.images, pkg.name, currentSlide);
//   };

//   return (
//     <div className="w-full py-8 md:py-12 lg:py-16">
//       <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Background Glow */}
//         <div className="absolute inset-x-8 md:inset-x-8 -top-2 -bottom-2 bg-white/20 rounded-3xl backdrop-blur-[2px] pointer-events-none z-0" />

//         {/* Main Card */}
//         <div className="relative bg-white flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl p-4">
//           {/* Content Section */}
//           <div
//             className={`w-full lg:w-1/2 py-6 md:p-10 lg:p-14 flex flex-col ${
//               isEven ? "lg:order-1" : "lg:order-2"
//             }`}
//           >
//             <div className="flex-1">
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3">
//                 {pkg.name}
//               </h3>

//               <p className="text-black font-medium mb-6 md:mb-8 text-base md:text-lg">
//                 Room Size: {pkg.size}
//               </p>

//               <ul className="space-y-4 md:space-y-5 pt-6 border-t border-primary-dark mb-8 text-black">
//                 {pkg.inclusions.map((item, i) => (
//                   <li key={i} className="flex gap-3 text-[15px] md:text-base">
//                     <FiCheck className="text-primary-dark mt-1.5 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Price & Button */}
//             <div className="pt-6 md:pt-8 border-t border-primary-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-auto">
//               <div>
//                 <p className="text-sm text-foreground/60">Total payable</p>
//                 <p className="text-3xl md:text-4xl font-bold text-primary">
//                   {pkg.price}
//                 </p>
//               </div>

//               <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-10 py-4 rounded-2xl transition flex items-center gap-2 text-base w-full sm:w-auto justify-center">
//                 BOOK NOW →
//               </button>
//             </div>
//           </div>

//           {/* Image Slider - Perfect Responsive */}
//           <div
//             className={`w-full lg:w-1/2 relative group cursor-pointer overflow-hidden rounded-3xl lg:rounded-l-none lg:rounded-r-3xl ${
//               isEven ? "lg:order-2" : "lg:order-1"
//             }`}
//             style={{ height: "340px" }}           // Mobile
//             onClick={handleImageClick}
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
//           >
//             {/* Responsive Image Container */}
//             <div className="md:h-[460px] lg:h-[620px] w-full h-full relative">
//               <div className="relative w-full h-full overflow-hidden">
//                 {pkg.images.map((img, imgIndex) => (
//                   <img
//                     key={imgIndex}
//                     src={img}
//                     alt={`${pkg.name} ${imgIndex + 1}`}
//                     className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
//                       imgIndex === currentSlide
//                         ? "opacity-100 scale-100"
//                         : "opacity-0 scale-110"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Luxury Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

//             {/* Controls */}
//             {imagesCount > 1 && (
//               <>
//                 {/* Left Arrow */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onSlideChange((currentSlide - 1 + imagesCount) % imagesCount);
//                   }}
//                   className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {/* Right Arrow */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onSlideChange((currentSlide + 1) % imagesCount);
//                   }}
//                   className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>

//                 {/* Dots */}
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
//                   {pkg.images.map((_, dotIndex) => (
//                     <button
//                       key={dotIndex}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         onSlideChange(dotIndex);
//                       }}
//                       className={`rounded-full transition-all duration-300 ${
//                         dotIndex === currentSlide
//                           ? "w-9 h-2.5 bg-white shadow-lg"
//                           : "w-2.5 h-2.5 bg-white/70 hover:bg-white"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Counter */}
//                 <div className="absolute top-5 right-5 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
//                   {currentSlide + 1} / {imagesCount}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomPackageCard;
