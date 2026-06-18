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
            "By Car: 4:00 - 4:30 hrs driving time.",
            "From Kuril Flyover Turnpike to Kanchan bridge area - 114 km.",
        ],
        map: "https://maps.app.goo.gl/CGuPtKZTW9ezNdJw9",
        reverse: false,
    },
    {
        id: "train",
        mode: "Train",
        icon: "🚂",
        description: [
            "From Dhaka Kamalapur or kamalapur Railway Station to jashore Railway Station, then a short 107 km drive by resort car or van.",
            "Parabat Express departs from Dhaka kamalapur Railway Station at 6:20 AM (except Tuesday).",
            "Kalni Express departs from Dhaka kamalapur Railway Station at 3:00 PM (except Friday)."
        ],
        reverse: true,
    },
    {
        id: "helicopter",
        mode: "Helicopter",
        icon: "🚁",
        description: [
            "From Dhaka to Resort Heli Pad approximately 40 minutes flight.",
            "The GPS Coordinates are 24°18'6.32\"N 91°45'51.88\"E ALT 4.1m."
        ],
        reverse: false,
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
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* Page Hero */}
            <PageHero
                title="Getting There"
                backgroundImage="/images/cooridoor.jpg"
            />

            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">


                    <div className="text-center mb-12">
                        <p className="text-gray-300 mt-3 text-lg">Available Modes of Travel</p>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-2 text-sm">
                            Your journey is the first step to your luxury getaway. Explore and choose the most suitable mode of travel.
                        </p>
                    </div>

                    {/* Dynamic Tabs from GettingThereData */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {GettingThereData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-8 py-2 border transition-all duration-300 text-sm font-medium rounded-2xl ${
                                    activeTab === item.id
                                        ? "bg-primary text-black"
                                        : "border-white/30 text-white hover:bg-white/10"
                                }`}
                            >
                                {item.mode === "By Road" ? "Car" : item.mode}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-15">

                        {GettingThereData.map((item, index) => (
                            
                            <div className="relative ">
                                
                            <div className="absolute inset-x-8 md:inset-x-15 -top-3 -bottom-3 bg-white/20 rounded-2xl backdrop-blur-[2px] pointer-events-none z-0" />
                            <motion.div
                                id={item.id}
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 scroll-mt-24 relative p-4"
                            >
                                {/* Content */}
                                <div className={`p-8 md:p-12 ${item.reverse ? 'md:order-2' : ''}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-4xl">{item.icon}</span>
                                        <h3 className="text-2xl font-semibold text-[#1a3c34]">{item.mode}</h3>
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

                                {/* Map / Image */}
                                <div className={`relative rounded-2xl ${item.reverse ? 'md:order-1' : ''}`}>
                                    {item.mode === "Helicopter" ? (
                                        <img
                                            src="/images/helicopter.jpg"
                                            alt="Helicopter"
                                            className="w-full h-full object-cover min-h-[380px] md:min-h-[360px]"
                                        />
                                    ) : (
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10478.229564444935!2d89.19960057836589!3d23.164956528855356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff1094a2327a8d%3A0xe15cd28ef02f9570!2sRural%20Reconstruction%20Foundation!5e1!3m2!1sen!2sbd!4v1781689838796!5m2!1sen!2sbd"
                                            width="100%"
                                            height="460"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="w-full h-full min-h-[340px] md:min-h-[360px] rounded-2xl"
                                        />
                                    )}
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