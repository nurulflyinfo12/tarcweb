"use client";
import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaBed,
  FaRulerCombined,
} from "react-icons/fa";

const AtAGlance = () => {
  const roomsData = [
    {
      id: 1,
      title: "Royal Suite Superior",
      guests: 4,
      beds: 3,
      size: 1160,
      description:
        "Elevate your senses in our Royal Suites with elegant interiors and serene luxury surrounded by nature.",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Executive Deluxe Room",
      guests: 2,
      beds: 1,
      size: 650,
      description:
        "A perfect blend of comfort and modern design ideal for business and leisure travelers.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Presidential Suite",
      guests: 6,
      beds: 4,
      size: 2200,
      description:
        "Experience unmatched luxury with panoramic views, premium services, and exclusive comfort.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Honeymoon Cottage",
      guests: 2,
      beds: 1,
      size: 780,
      description:
        "A romantic private cottage surrounded by greenery, perfect for couples seeking peace and privacy.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Family Luxury Suite",
      guests: 5,
      beds: 3,
      size: 1400,
      description:
        "Spacious family suite with multiple beds, living area, and modern amenities for a comfortable stay.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roomsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roomsData.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % roomsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + roomsData.length) % roomsData.length);
  };

  const currentRoom = roomsData[currentIndex];

  return (
    <section className="text-white py-16 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-1">
          <span className="w-8 h-[1px] bg-primary-dark"></span>
          <p className="text-primary-dark text-xs font-semibold tracking-widest uppercase">
            At A Glance
          </p>
          <span className="w-8 h-[1px] bg-primary-dark"></span>
        </div>

        <h2 className="text-3xl font-serif font-bold">Our Rooms & Suites</h2>
      </div>

      {/* SLIDER */}
      <div className="relative w-full mb-8 px-0">
        <div className="relative h-[300px] sm:h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
          {roomsData.map((room, index) => {
            let positionClass =
              "opacity-0 scale-90 pointer-events-none absolute z-0";

            if (index === currentIndex) {
              positionClass =
                "opacity-100 scale-100 z-10 w-[85%] md:w-[65%] h-full relative";
            } else if (
              index ===
              (currentIndex - 1 + roomsData.length) % roomsData.length
            ) {
              positionClass =
                "opacity-60 scale-95 -translate-x-[75%] absolute left-[15%] md:left-[22%] z-0 w-[85%] md:w-[65%] h-full cursor-pointer";
            } else if (index === (currentIndex + 1) % roomsData.length) {
              positionClass =
                "opacity-60 scale-95 translate-x-[75%] absolute right-[15%] md:right-[22%] z-0 w-[85%] md:w-[65%] h-full cursor-pointer";
            }

            return (
              <div
                key={room.id}
                className={`transition-all duration-700 ease-in-out transform ${positionClass}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover select-none shadow-2xl"
                />

                {/* ARROWS */}
                {index === currentIndex && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevSlide();
                      }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full"
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextSlide();
                      }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
            );
          })}

          {/* GRADIENTS */}
          <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-[#051c05] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-[#051c05] to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      {/* INFO */}
      <div className="mx-auto px-8 md:px-[18%]">
        <h3 className="text-xl font-bold text-primary-dark mb-2">
          {currentRoom.title}
        </h3>

        <div className="flex items-center gap-6 text-xs text-gray-300 mb-4">
          <div className="flex items-center gap-1.5">
            <FaUsers className="text-primary-dark" />
            {currentRoom.guests}
          </div>

          <div className="flex items-center gap-1.5">
            <FaBed className="text-primary-dark" />
            {currentRoom.beds}
          </div>

          <div className="flex items-center gap-1.5">
            <FaRulerCombined className="text-primary-dark" />
            {currentRoom.size} sqft
          </div>
        </div>

        <p className="text-sm text-gray-400">{currentRoom.description}</p>
      </div>
    </section>
  );
};

export default AtAGlance;
