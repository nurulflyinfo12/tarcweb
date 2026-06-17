"use client";

import React from "react";
import Image from "next/image";

const MeetingsAndEvents = () => {
  const data = {
    sectionSubtitle: "Plan Your Perfect Getaway",
    sectionTitle: "Explore Our Other Facilities",
    cardSubtitle: "Elevate Your Business Occasions",
    cardTitle: "Meetings & Events",
    description:
      "Plan your next business event with us – be it an annual conference, product launch, or board meeting. Elevate your occasion with our expertise and make it a GRAND success. Contact us today to book your event.",
    buttonText: "Discover More",

    imageSrc:
      "/images/hallroom.jpg",
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center transition-colors duration-300">
      <div className=" mb-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="w-8 h-[1px] bg-amber-500/60"></span>
          <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase">
            {data.sectionSubtitle}
          </p>
          <span className="w-8 h-[1px] bg-amber-500/60"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
          {data.sectionTitle}
        </h2>
      </div>

     <div className="relative group">
  {/* Background Glass Layer */}
  <div className="absolute inset-x-10 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

  {/* Main Card */}
  <div className="relative">
    <div className="max-w-7xl mx-auto bg-white rounded-2xl p-4 sm:p-8 md:p-12 shadow-2xl">
      <div className="bg-[#f3f6f3] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12 border border-emerald-900/5 text-left">
        <div className="w-full md:w-1/2 relative min-h-[220px] sm:min-h-[300px] md:min-h-[340px] overflow-hidden shadow-md group">
          <Image
            src={data.imageSrc}
            alt={data.cardTitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            unoptimized
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <p className="text-amber-600 text-xs font-bold tracking-wider uppercase">
                {data.cardSubtitle}
              </p>
              <span className="w-6 h-[1px] bg-amber-500/80"></span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-800 leading-tight">
              {data.cardTitle}
            </h3>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed font-light">
            {data.description}
          </p>

          <div className="pt-2">
            <button className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 transition-all duration-300 group">
              <span className="tracking-wider">{data.buttonText}</span>
              <span className="transform group-hover:translate-x-1 transition-transform font-serif text-sm">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default MeetingsAndEvents;
