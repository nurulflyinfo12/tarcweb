"use client";

import React, { useState, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiShare2, FiMaximize, FiDownload } from "react-icons/fi";
import RoomsCardSlider from "./RoomsCardSlider";
import ImageModal from "./ImageModal";
import CallToAction from "../common/calltoaction";
import ImageGalleryModal from "../common/ImageGalleryModal";

const rooms = [
    {
        id: 1,
        name: "King Deluxe",
        sizeSQM: 36,
        sizeSQF: 382,
        maxGuests: 2,
        description: "Our King Deluxe room has a spacious layout, with an abundance of natural light coming in and a spectacular view. The lavish and cozy King size bed is ideal for a couple.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 2,
        name: "Queen Deluxe",
        sizeSQM: 36,
        sizeSQF: 382,
        maxGuests: 2,
        description: "Our Queen Deluxe room has a spacious layout, with an abundance of natural light and a spectacular view. The two luxurious Queen size beds are ideal for 2-4 adults.",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 3,
        name: "Triple Deluxe",
        sizeSQM: 36,
        sizeSQF: 382,
        maxGuests: 3,
        description: "Our Triple Deluxe room has a spacious layout, with an abundance of natural light and a spectacular view.",
        images: [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 4,
        name: "Executive Suite King",
        sizeSQM: 53,
        sizeSQF: 569,
        maxGuests: 2,
        description: "For a finer experience of a luxurious stay, our Executive Suite King is perfect.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 5,
        name: "Executive Suite Queen",
        sizeSQM: 53,
        sizeSQF: 569,
        maxGuests: 2,
        description: "For a finer experience of a luxurious stay, our Executive Suite Queen is ideal for 2 to 4 adults.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 6,
        name: "Royal Suite Deluxe",
        sizeSQM: 86,
        sizeSQF: 920,
        maxGuests: 4,
        description: "For larger groups or families, our spacious and beautifully designed Royal Suite Deluxe is perfect.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
    {
        id: 7,
        name: "Royal Suite Superior",
        sizeSQM: 108,
        sizeSQF: 1160,
        maxGuests: 4,
        description: "For families and larger groups to enjoy an exquisite luxurious space.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: false,
    },
    {
        id: 8,
        name: "Presidential Suite",
        sizeSQM: 162,
        sizeSQF: 1750,
        maxGuests: 6,
        description: "A luxury suite with two bedrooms, a living room, and dining space ideal for 4-6 guests.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
        ],
        reverse: true,
    },
];

const RoomsAndSuites = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedRoomName, setSelectedRoomName] = useState("");
    const [currentModalIndex, setCurrentModalIndex] = useState(0);
    const [toast, setToast] = useState<string | null>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const [selectedRoom, setSelectedRoom] = useState<{ name: string; images: string[] } | null>(null);
    const [initialIndex, setInitialIndex] = useState(0);

    const openModal = (images: string[], name: string, startIndex = 0) => {
        setSelectedRoom({ name, images });
        setInitialIndex(startIndex);
    };

    const closeModal = () => {
        setSelectedRoom(null);
    };

    const shareImage = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: selectedRoomName,
                    text: `Check out ${selectedRoomName}`,
                    url: selectedImage!,
                });
            } catch (error) {
                console.log("Error sharing", error);
            }
        } else {
            // Fallback: copy to clipboard
            try {
                await navigator.clipboard.writeText(selectedImage!);
                setToast("Image link copied to clipboard!");
                setTimeout(() => setToast(null), 2000);
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
    };

    const zoomImage = () => {
        if (imageContainerRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                imageContainerRef.current.requestFullscreen();
            }
        }
    };

    const downloadImage = () => {
        // Attempt to trigger download; falls back to opening in new tab
        const link = document.createElement("a");
        link.href = selectedImage!;
        link.download = `${selectedRoomName.replace(/\s+/g, "-")}-image.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const currentRoom = rooms.find((r) => r.name === selectedRoomName);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[45vh] flex items-center justify-center bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-light tracking-widest text-white mb-4">
                        Rooms &amp; Suites
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Discover comfort and style in our rooms and suites.
                    </p>
                </div>
            </section>

            {/* Rooms List */}
            <section className="bg-background py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
                    {rooms.map((room) => (
                        <RoomsCardSlider
                            key={room.id}
                            room={room}
                            onImageClick={openModal}
                        />
                    ))}
                </div>
            </section>

            {/* Booking CTA */}
            <CallToAction
                title="Ready to Reserve Your Table?"
                description="Call us now to make a reservation at our restaurant."
                phone="+880 9678 785959"
            />

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

export default RoomsAndSuites;