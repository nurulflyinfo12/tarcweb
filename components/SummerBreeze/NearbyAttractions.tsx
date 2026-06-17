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
    <section>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10  mb-8">
        <div className="absolute inset-x-6 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-25 backdrop-blur-[2px] pointer-events-none z-0" />
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 lg:p-12">
            <div className="w-full flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 sm:w-14 bg-secondary" />

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center">
                  NEARBY ATTRACTIONS
                </h2>

                <span className="h-[1px] w-10 sm:w-14 bg-secondary" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Attractions List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 items-start">
                  {attractions.map((column, colIndex) => (
                    <div key={colIndex}>
                      <ul
                        className={`
                          inline-block
                          space-y-3
                          text-black
                          text-[14px]
                          pr-1
                          ${colIndex !== attractions.length - 1 ? "border-r border-primary-dark" : ""}
                        `}
                      >
                        {column.map((place, index) => (
                          <li key={index}>
                            <span>{place.name}</span>
                            <br />
                            <span className="text-sm">{place.distance}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="380"
                    className="md:h-[480px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;