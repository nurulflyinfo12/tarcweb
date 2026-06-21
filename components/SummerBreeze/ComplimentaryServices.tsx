"use client";

import React from "react";

interface Service {
  icon: string;
  label: string;
}

interface ServiceImage {
  src: string;
  alt: string;
  className?: string;
}

interface ComplimentaryServicesProps {
  services: Service[];
  images: ServiceImage[];
  onBookNow?: () => void;
}

const ComplimentaryServices = ({
  services,
  images,
  onBookNow,
}: ComplimentaryServicesProps) => {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="absolute inset-x-8 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-25 backdrop-blur-[2px] pointer-events-none z-0" />
        <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  {images.slice(0, 2).map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={image.className}
                    />
                  ))}
                </div>

                <div className="space-y-3 pt-8">
                  {images.slice(2).map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={image.className}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-center text-black mb-5 text-lg">
                Along with the room, enjoy these complimentary services in this
                package.
              </p>
              <h3 className="text-3xl font-bold pt-5 border-t-1 border-primary-dark text-secondary mb-8">
                Complimentary Services
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="border border-primary-dark hover:border-primary rounded-2xl p-6 text-center text-primary-dark hover:bg-primary/5 transition-all"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>

                    <p>{service.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <button
                  onClick={onBookNow}
                  className="bg-secondary hover:bg-background cursor-pointer text-foreground font-semibold px-12 py-4 rounded-xl"
                >
                  BOOK NOW →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplimentaryServices;
