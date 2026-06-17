"use client";

import React, { useState, useRef } from "react";
import CallToAction from "../common/calltoaction";
import ImageGalleryModal from "../common/ImageGalleryModal";
import ImageCardSlider from "../common/ImageCardSlider";
import PageHero from "../common/pagehero";

const Relaxations = [
    {
        id: 1,
        name: "Swimming Pool & Jacuzzi",
        // type: "All Day Dine",
        description: "Perhaps the amoeba shaped, temperature controlled swimming pool, the largest in Bangladesh, can soothe your tired mind and body after a long day’s adventure whilst your children enjoy the 2 smaller children’s pools.",
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
        type: "Temporary Unavailable",
        description: "Relaxation and well being go hand in hand with the image of a pleasurable holiday. Rupnagari Spa and Gym presents you with a world class, fully equipped gym. The Spa offers Thai traditional massage, Aromatherapy massage, Thai Herbal, Swedish and sport massages as well as scrub massages for your relaxation. The Sauna, Steam room, Beauty Parlor and Men’s saloon all round off your holistic experience.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 3,
        name: "Gym",
        // type: "Cafe & Lounge",
        description: "Apart from spending the leisure time it is necessary to take a good care of health. Grand Sultan Tea Resort & Golf presents you a world class gym which can offer you the relax with lavishness.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 4,
        name: "Library",
        // type: "Poolside Cafe",
        description: "The Library affords the luxury of taking time out to relax with a book in solitude. Pick up a novel, a historical tome, a business magazine or reference book, a religious work or just bring your own and enjoy the quiet atmosphere.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    }
];

const Relaxation = () => {
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
                    {Relaxations.map((relax) => (
                        <ImageCardSlider
                            key={relax.id}
                            {...relax}
                            onImageClick={openModal}
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

export default Relaxation;