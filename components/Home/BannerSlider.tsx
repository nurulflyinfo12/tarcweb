"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Experience",
    subtitle: "The Elegance",
    buttonText: "BOOK NOW",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Luxury Redefined",
    subtitle: "Ocean View Suites",
    buttonText: "EXPLORE ROOMS",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    title: "Tropical Paradise",
    subtitle: "Unforgettable Stays",
    buttonText: "DISCOVER MORE",
  },
  {
    image: "/images/cooridoor.jpg",
    title: "Relax & Rejuvenate",
    subtitle: "World-Class Spa",
    buttonText: "VISIT SPA",
  },
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Overlay - Better for both modes */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl mx-auto">
              <h2 className="text-foreground text-5xl md:text-6xl font-bold mb-4 tracking-wide">
                {slide.title}
              </h2>

              <h1 className="text-foreground text-6xl md:text-7xl lg:text-8xl font-serif mb-8">
                {slide.subtitle}
              </h1>

              <button className="mt-6 bg-primary hover:bg-primary-dark transition px-12 py-4 text-black font-semibold text-lg rounded-sm cursor-pointer">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-foreground p-4 rounded-full transition z-10 hover:text-primary"
      >
        <FiChevronLeft size={28} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-foreground p-4 rounded-full transition z-10 hover:text-primary"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-white/50 dark:bg-white/40 hover:bg-primary/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}