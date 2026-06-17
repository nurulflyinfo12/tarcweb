"use client";

import React from "react";

interface Facility {
  title: string;
  image: string;
}

interface AdditionalFacilitiesProps {
  facilities: Facility[];
}

const AdditionalFacilities: React.FC<AdditionalFacilitiesProps> = ({
  facilities,
}) => {
  return (
    <section className="">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="absolute inset-x-8 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
        <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="w-full flex justify-center mb-12">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-10 sm:w-14 bg-secondary" />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center">
                ADDITIONAL FACILITIES
              </h2>

              <span className="h-[1px] w-10 sm:w-14 bg-secondary" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl h-64 shadow-md">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                <p className="text-center font-semibold mt-5 text-lg text-black tracking-wide">
                  {facility.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFacilities;