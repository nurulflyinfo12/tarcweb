import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ExclusiveDelights = () => {
  const offerData = {
    subtitle: "Exclusive Delights",
    title: "Discover Our Special Offers",
    offerTitle: "Summer Breeze",
    validity: "Validity till 31st July 2026",
    description:
      "This season indulge in something special. Exclusive Special Rate awaits at Grand Sultan Tea Resort & Golf. Enjoy a vacation to remember with a delicious complimentary breakfast and so much more!",
    tagline:
      "Don't miss out on this special offer to relax and unwind in luxury.",
    buttonText: "Discover More",
    bannerImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <section className=" text-white max-w-7xl mx-auto px-6 lg:px-10">
      <div className=" text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-1">
          <span className="w-8 h-[1px] bg-primary-dark"></span>
          <p className="text-primary-dark text-xs font-semibold tracking-widest uppercase">
            {offerData.subtitle}
          </p>
          <span className="w-8 h-[1px] bg-primary-dark"></span>
        </div>
        <h2 className="text-3xl font-serif font-bold tracking-wide">
          {offerData.title}
        </h2>
      </div>

      <div className="relative group">
        {/* Glass Background Layer */}
        <div className="absolute inset-x-10 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 sm:p-6 md:p-8 relative">
            <div className="absolute inset-0 bg-emerald-800/5 pointer-events-none rounded-2xl m-2 border border-emerald-900/10" />

            <div className="relative z-10 flex flex-col md:flex-row bg-[#f4f7f4] rounded-xl overflow-hidden border border-gray-100">
              <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-serif font-bold text-[#2a592a] mb-1">
                  {offerData.offerTitle}
                </h3>

                <p className="text-xs font-semibold text-amber-600 mb-6 tracking-wide">
                  {offerData.validity}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  This season indulge in something special. Exclusive Special
                  Rate awaits at Grand Sultan Tea Resort & Golf. Enjoy a
                  vacation to remember with a delicious{" "}
                  <span className="font-bold text-gray-800">
                    complimentary breakfast
                  </span>{" "}
                  and so much more!
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {offerData.tagline}
                </p>

                <button className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-300 w-fit group">
                  <span>{offerData.buttonText}</span>
                  <FaLongArrowAltRight className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="w-full md:w-1/2 relative min-h-[250px] sm:min-h-[350px] md:min-h-full">
                <img
                  src={offerData.bannerImage}
                  alt={offerData.offerTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDelights;
