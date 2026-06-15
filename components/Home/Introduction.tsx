import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Introduction = () => {
  const sectionData = {
    subtitle: "Welcome To",
    title: "Grand Sultan Tea Resort & Golf",
    description:
      "The best five-star resort in the Sylhet region of Bangladesh. Equipped with all modern state-of-the-art amenities and facilities, located in Srimongal (the tea capital of Bangladesh), around four hours drive from Dhaka. This resort near Dhaka is the true combination of ultimate luxury, gracious hospitality and admirable greenery.  Classified in 08 categories with 134 hotel rooms and suites Grand Sultan welcomes you in Srimongal to enjoy your holiday or vacation with comfort and luxury",
    buttonText: "Discover More",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <p className="text-primary-dark font-semibold tracking-wider">
                {sectionData.subtitle}
              </p>

              <span className="w-12 h-[2px] bg-primary-dark"></span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              {sectionData.title}
            </h2>

            <p className="text-white-600 leading-8 mb-5">
              {sectionData.description}
            </p>

            <button className="text-primary-dark hover:text-white transition-all duration-300 flex items-center gap-2">
              {sectionData.buttonText}
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <img
              src={sectionData.image}
              alt={sectionData.title}
              className="w-full h-[500px] rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
