"use client";

import React, { useState, useRef } from "react";
import CallToAction from "../common/calltoaction";
import ImageGalleryModal from "../common/ImageGalleryModal";
import ImageCardSlider from "../common/ImageCardSlider";

const Meetings = [
    {
        id: 1,
        name: "Dewan-E-Khas",
        // type: "All Day Dine",
        description: "Dewan e Khas is a set of business meeting and conference rooms all designed to meet the expectations of the discerning busine...",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 2,
        name: "Panshala",
        // type: "Hilltop Restaurant",
        description: "Offers you luxurious environment with up to 100 guests in the banquet setup. The total area of 2,820 sft with 9 feet...",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 3,
        name: "Rashni Mahal",
        // type: "Cafe & Lounge",
        description: "It is a perfect venue for wedding, family gathering, and any type of corporate events with up to 500 guests in the banquet...",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 4,
        name: "Nowmi Manzil",
        // type: "Poolside Cafe",
        description: "Offers you luxurious environment with 200 guests in the banquet setup. The total area of 4,144 sft with 8 feet of height this...",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    }
];

const MeetingsAndEvents = () => {
    const [selectedRoom, setSelectedRoom] = useState<{ name: string; images: string[] } | null>(null);
    const [initialIndex, setInitialIndex] = useState(0);

    const openModal = (images: string[], name: string, startIndex = 0) => {
        setSelectedRoom({ name, images });
        setInitialIndex(startIndex);
    };

    const closeModal = () => {
        setSelectedRoom(null);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[45vh] flex items-center justify-center bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-light tracking-widest text-white mb-4">
                        Meetings &amp; Events
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Discover comfort and style in our meetings and events.
                    </p>
                </div>
            </section>

            {/* Rooms List */}
            <section className="bg-background py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
                    {Meetings.map((meeting) => (
                        <ImageCardSlider
                            key={meeting.id}
                            {...meeting}
                            onImageClick={openModal}
                            buttonText="Find More"
                            buttonHref="#"
                        />
                    ))}
                </div>
            </section>

            <CallToAction
                title="Have Any Queries For Us?"
                description="Get all your questions answered, we are just one call away!"
                phone="+880 9678 785959"
            />

            {/* Modal */}
            {selectedRoom && (
                <ImageGalleryModal
                    title={selectedRoom.name}
                    images={selectedRoom.images}
                    initialIndex={initialIndex}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default MeetingsAndEvents;