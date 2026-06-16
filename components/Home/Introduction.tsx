"use client";

import Link from "next/link";
import React from "react";

interface IntroductionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageTopRight?: string; 
  imageBottomLeft?: string;
}

const Introduction: React.FC<IntroductionProps> = ({
  subtitle = "Welcome To",
  title = "Grand Sultan Tea Resort & Golf",
  description = "The best five-star resort in the Sylhet region of Bangladesh. Equipped with all modern state-of-the-art amenities and facilities, located in Srimongal (the tea capital of Bangladesh), around four hours drive from Dhaka. This resort near Dhaka is the true combination of ultimate luxury, gracious hospitality and admirable greenery. Classified in 08 categories with 134 hotel rooms and suites Grand Sultan welcomes you in Srimongal to enjoy your holiday or vacation with comfort and luxury.",
  buttonText = "Discover More",
  buttonLink = "/roomsandsuites",
  imageTopRight = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop", 
  imageBottomLeft = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
}) => {
  return (
    // Dynamic Section wrapper: uses light-mode tokens (bg-background, text-foreground) 
    // and shifts back to your solid rich forest-green (#0b2411) when dark mode is present.
    <section className="py-20 bg-background dark:bg-[#0b2411] transition-colors duration-300 text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="w-full lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <p className="text-primary-dark dark:text-amber-500 text-sm font-semibold tracking-widest uppercase transition-colors duration-300">
                {subtitle}
              </p>
              <span className="w-12 h-[1px] bg-primary-dark/60 dark:bg-amber-500/60 transition-colors duration-300"></span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground dark:text-white leading-tight transition-colors duration-300">
              {title}
            </h2>

            <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed font-light whitespace-pre-line transition-colors duration-300">
              {description}
            </p>

            <div className="pt-2">
              <Link
                href={buttonLink}
                className="text-primary dark:text-amber-500 hover:text-primary-dark dark:hover:text-amber-400 transition-all duration-300 inline-flex items-center gap-2 font-semibold group"
              >
                <span>{buttonText}</span>
                <span className="transform group-hover:translate-x-1 transition-transform font-serif text-sm">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: DUAL ASYMMETRIC OVERLAPPING IMAGES */}
          <div className="w-full lg:col-span-6 relative min-h-[460px] sm:min-h-[520px]">
            
            {/* 1. Top Right Main Admin Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[300px] sm:h-[340px] rounded-xl overflow-hidden shadow-xl z-0">
              <img
                src={imageTopRight}
                alt={`${title} main view`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* 2. Bottom Left Custom Framed Admin Image */}
            <div className="absolute bottom-0 left-0 w-[70%] h-[240px] sm:h-[280px] z-10">
              {/* Dynamic image mask frame border color matches light mode layout card frame or dark mode green background */}
              <div className="w-full h-full border-[8px] border-background dark:border-[#0b2411] rounded-tr-[100px] rounded-bl-[40px] overflow-hidden shadow-2xl transition-colors duration-300">
                <img
                  src={imageBottomLeft}
                  alt={`${title} detailed view`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;