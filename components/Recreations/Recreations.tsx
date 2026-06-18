"use client";

import React, { useState, useRef } from "react";
import CallToAction from "../common/calltoaction";
import ImageGalleryModal from "../common/ImageGalleryModal";
import ImageCardSlider from "../common/ImageCardSlider";
import PageHero from "../common/pagehero";

const Recreation = [
    {
        id: 1,
        name: "Golf",
        // type: "All Day Dine",
        description: "Tarc Tea Resort & Golf proudly boasts having a 9 hole recreational golf course, for you to enjoy a memorable experience with your friends and associates.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 2,
        name: "Roopnogori Spa",
        // type: "Temporary Unavailable",
        description: "Relaxation and well being go hand in hand with the image of a pleasurable holiday. Rupnagari Spa and Gym presents you with a world class, fully equipped gym. The Spa offers Thai traditional massage, Aromatherapy massage, Thai Herbal, Swedish and sport massages as well as scrub massages for your relaxation. The Sauna, Steam room, Beauty Parlor and Men's saloon all round off your holistic experience.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 3,
        name: "Lawn Tennis ",
        // type: "Cafe & Lounge",
        description: "Enjoy a game with your friends and family at our lawn tennis court, in our sports valley.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 4,
        name: "Badminton",
        // type: "Poolside Cafe",
        description: "Enjoy an exciting game of badminton with your friends and loved ones at our badminton court, which offers a large space along with a kid's badminton court next to it.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 5,
        name: "Basketball",
        // type: "Poolside Cafe",
        description: "Have a thrilling game with your travel buddies and family, at our basketball court.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 6,
        name: "Children Play Zone",
        // type: "Poolside Cafe",
        description: "Our indoor children's playroom on level 5, provides a spacious, colorful and cozy environment for your children to enjoy a fun pastime.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    }
];

const Recreations = () => {
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
            <PageHero
              title="Relaxation"
              subtitle="Revive and rejuvenate in our modern state of art amenities and relaxation facilities."
              backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            />

            {/* Rooms List */}
            <section className="bg-background py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
                    {Recreation.map((recr) => (
                        <ImageCardSlider
                            key={recr.id}
                            {...recr}
                            onImageClick={openModal}
                        />
                    ))}
                </div>
            </section>

            <CallToAction
                title="Have Any Queries For Us?"
                description="Get all your questions answered, we are just one call away!"
                phone="(0421) 66906, 65663"
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

export default Recreations;