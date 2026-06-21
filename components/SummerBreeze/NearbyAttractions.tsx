"use client";

import React from "react";

interface Attraction {
  name: string;
  distance: string;
}

interface NearbyAttractionsProps {
  attractions: Attraction[][];
  mapUrl: string;
}

const NearbyAttractions: React.FC<NearbyAttractionsProps> = ({
  attractions,
  mapUrl,
}) => {
  return (
    <section className="py-8">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Glow */}
        <div className="absolute inset-x-8 md:inset-x-20 -top-2 -bottom-2 bg-white/20 rounded-3xl backdrop-blur-[2px] pointer-events-none z-0" />

        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 md:p-10 lg:p-14">
            {/* Heading - Fully Responsive */}
            <div className="w-full flex justify-center mb-12">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 sm:w-14 bg-secondary" />

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center">
                  NEARBY ATTRACTIONS
                </h2>

                <span className="h-[1px] w-10 sm:w-14 bg-secondary" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {/* Attractions List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 lg:gap-y-10">
                {attractions.map((column, colIndex) => (
                  <div key={colIndex}>
                    <ul
                      className={`
                        space-y-4 text-black text-[15px] md:text-base
                        ${
                          colIndex !== attractions.length - 1
                            ? "sm:border-r sm:border-primary-dark pr-4 sm:pr-8"
                            : ""
                        }
                      `}
                    >
                      {column.map((place, index) => (
                        <li key={index} className="leading-snug">
                          <span className="font-medium">{place.name}</span>
                          <br />
                          <span className="text-sm text-gray-600">
                            {place.distance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10478.229564444935!2d89.19960057836589!3d23.164956528855356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff1094a2327a8d%3A0xe15cd28ef02f9570!2sRural%20Reconstruction%20Foundation!5e1!3m2!1sen!2sbd!4v1781689838796!5m2!1sen!2sbd"
                  width="100%"
                  height="360"
                  className="w-full md:h-[460px] lg:h-[540px] rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;
