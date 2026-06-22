"use client";

import PageHero from "@/components/common/pagehero";
import { motion } from "framer-motion";
import { useState } from "react";

const GettingThereData = [
 {
  id: "road",
  mode: "By Road",
  icon: "🚗",
  description: [
    "By Car / Luxury Van: Approximately 4:00 - 5:00 hrs driving time via the Padma Bridge route.",
    "Drive through the iconic Padma Bridge, crossing over the river for the fastest and smoothest connection.",
    "Scenic route passing through beautiful landscapes from Dhaka to The Imperial Institute of Hospitality & Hotel Management area.",
    "Secure parking is available 24/7 for guest vehicles.",
  ],
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117462.6288424956!2d89.15066925!3d23.16263595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10207a90b4d9%3A0x63dae2023d53ef69!2sRRF%20Jessore!5e0!3m2!1sen!2sbd!4v1710000000000",
  reverse: false,
},
  {
    id: "air",
    mode: "By Air",
    icon: "✈️",
    description: [
      "Daily domestic flights operating from Dhaka Hazrat Shahjalal International Airport (DAC) to Jessore Airport (JSR).",
      "Short flight duration of approximately 35 to 40 minutes via Biman Bangladesh, US-Bangla, or Air Astra.",
      "Private premium shuttle transfers can be arranged directly from Jessore Airport to the institute location.",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5244584218654!2d89.1578330761271!3d23.18754591018898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10629eaad49b%3A0xeae06df6697009!2sJessore%20Airport!5e0!3m2!1sen!2sbd!4v1710000000001",
    reverse: true,
  },
 {
  id: "train",
  mode: "Train",
  icon: "🚂",
  description: [
    "From Dhaka Kamalapur Railway Station to Jessore Railway Station.",
    "Available trains include the Sundarban Express and Benapole Express operating on this route.",
    "Enjoy a scenic, comfortable ride through the local landscapes.",
    "A short air-conditioned van or private car drive will pick you up at Jessore station for transfer to the institute.",
  ],
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117462.6288424956!2d89.15066925!3d23.16263595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10207a90b4d9%3A0x63dae2023d53ef69!2sRRF%20Jessore!5e0!3m2!1sen!2sbd!4v1710000000000",
},
  {
    id: "helicopter",
    mode: "Helicopter",
    icon: "🚁",
    description: [
      "From Dhaka to Jessore Airport approximately 40 minutes flight time.",
      "The GPS Coordinates are 23°10'16.8\"N 89°09'28.2\"E ALT 20m.",
      "Management must be informed and booking coordinate arrangements must be cleared prior to arrival.",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5244584218654!2d89.1578330761271!3d23.18754591018898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10629eaad49b%3A0xeae06df6697009!2sJessore%20Airport!5e0!3m2!1sen!2sbd!4v1710000000001",
    reverse: true,
  },
];

export default function GettingThere() {
  const [activeTab, setActiveTab] = useState("road");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero title="Getting There" backgroundImage="/images/cooridoor.jpg" />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gray-300 mt-3 text-lg">
              Available Modes of Travel
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2 text-sm">
              Your journey is the first step to your destination. Explore and
              choose the most suitable mode of travel from Dhaka to The Imperial
              Institute of Hospitality & Hotel Management.
            </p>
          </div>

          {/* Dynamic Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {GettingThereData.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-8 py-2 border transition-all duration-300 text-sm font-medium rounded-2xl cursor-pointer ${
                  activeTab === item.id
                    ? "bg-primary text-black"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {item.mode === "By Road" ? "Car" : item.mode}
              </button>
            ))}
          </div>

          {/* Content Cards */}
          <div className="space-y-15">
            {GettingThereData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Original Translucent Border / Blur Accent */}
                <div className="absolute inset-x-8 md:inset-x-15 -top-2 -bottom-2 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />

                <motion.div
                  id={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 scroll-mt-24 relative p-4"
                >
                  {/* Content Layout */}
                  <div
                    className={`p-8 md:p-12 ${item.reverse ? "md:order-2" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{item.icon}</span>
                      <h3 className="text-2xl font-semibold text-[#1a3c34]">
                        {item.mode}
                      </h3>
                    </div>

                    <ul className="space-y-3 text-gray-600">
                      {item.description.map((line, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#556B2F] mt-1">✓</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Map / Frame Layout */}
                  <div
                    className={`relative rounded-2xl overflow-hidden ${item.reverse ? "md:order-1" : ""}`}
                  >
                    <iframe
                      src={item.map}
                      width="100%"
                      height="460"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full min-h-[340px] md:min-h-[360px] rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
