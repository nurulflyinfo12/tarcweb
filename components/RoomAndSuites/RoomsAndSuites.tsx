"use client";

import React, { useState, useRef } from "react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiShare2,
  FiMaximize,
  FiDownload,
} from "react-icons/fi";
import RoomsCardSlider from "./RoomsCardSlider";
import ImageModal from "./ImageModal";
import CallToAction from "../common/calltoaction";
import ImageGalleryModal from "../common/ImageGalleryModal";
import ImageCardSlider from "../common/ImageCardSlider";
import PageHero from "../common/pagehero";
import {
  FaBook,
  FaChild,
  FaDumbbell,
  FaUtensils,
  FaWater,
  FaWifi,
} from "react-icons/fa6";
import { FaAppleAlt, FaCoffee, FaHotTub, FaSwimmingPool } from "react-icons/fa";

export const rooms = [
  {
    id: 1,
    name: "Super Deluxe Twin",
    sizeSQM: 36,
    sizeSQF: 382,
    maxGuests: 2,
    price: "3000",
    offer: "2500",
    description:
      "Experience comfort and convenience in our Super Deluxe Twin Room, featuring two cozy twin beds and elegant modern interiors. Perfect for friends, colleagues, or family travelers seeking a relaxing and spacious stay.",
    coverImage: "/images/superdeluxetwin.jpeg",
    images: [
      "/images/tiwnroom.jpg",
      "/images/superdeluxetwin.jpeg",
      "/images/superdeluxe1.jpeg",
      "/images/superdeluxetwin.jpeg",
    ],
    complimentaryServices: [
      { name: "Breakfast", icon: <FaUtensils size={14} /> },
      { name: "Gym", icon: <FaDumbbell size={14} /> },
      { name: "Wi-Fi", icon: <FaWifi size={14} /> },
      { name: "Mineral Water (2 bottles)", icon: <FaWater size={14} /> },
    ],

    amenities: [
      "One 7 x 7 king size bed",
      "LED TV",
      "Central air condition system",
      "24 hours room service",
    ],
    reverse: false,
  },
  {
    id: 2,
    name: "Super Deluxe Couple",
    sizeSQM: 36,
    sizeSQF: 382,
    maxGuests: 2,
    price: "3500",
    offer: "3000",
    description:
      "Our King Deluxe room has a spacious layout, with an abundance of natural light coming in and a spectacular view. The lavish and cozy King size bed is ideal for a couple.",
    coverImage: "/images/superdeluxecouple.jpeg",
    images: [
      "/images/superdeluxecouple.jpeg",
      "/images/superdeluxe2.jpeg",
      "/images/couple/couple.jpg",
      "/images/couple/couple1.jpg",
    ],
    complimentaryServices: [
      { name: "Breakfast", icon: <FaUtensils size={14} /> },
      { name: "Gym", icon: <FaDumbbell size={14} /> },
      { name: "Wi-Fi", icon: <FaWifi size={14} /> },
    ],

    amenities: [
      "One 7 x 7 king size bed",
      "Heavenly duvet & pillows with duck down",
      "LED TV",
      "Mini bar",
      "24 hours room service",
    ],
    reverse: true,
  },
  {
    id: 3,
    name: "Vip Room Regular",
    sizeSQM: 36,
    sizeSQF: 382,
    maxGuests: 3,
    price: "6500",
    offer: "5500",
    description:
      "Enjoy a comfortable and relaxing stay in our VIP Room Regular, thoughtfully designed with modern amenities and stylish interiors. Ideal for guests seeking extra comfort, privacy, and a premium hospitality experience.",
    coverImage: "/images/vip1.jpeg",
    images: ["/images/viproom.jpeg", "/images/vip1.jpeg", "/images/vip2.jpeg"],
    complimentaryServices: [
      { name: "Breakfast", icon: <FaUtensils size={14} /> },
      { name: "Gym", icon: <FaDumbbell size={14} /> },
      { name: "Wi-Fi", icon: <FaWifi size={14} /> },
      { name: "Mineral Water (2 bottles)", icon: <FaWater size={14} /> },
    ],

    amenities: [
      "One 7 x 7 king size bed",
      "LED TV",
      "Central air condition system",
      "24 hours room service",
    ],
    reverse: false,
  },
];

const RoomsAndSuites = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedRoomName, setSelectedRoomName] = useState("");
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const [selectedRoom, setSelectedRoom] = useState<{
    name: string;
    images: string[];
  } | null>(null);
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
      <PageHero
        title="Rooms &amp; Suites"
        subtitle="Discover comfort and style in our rooms and suites."
        backgroundImage="/images/cooridoor.jpg"
      />

      {/* Rooms List */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
          {rooms.map((room) => (
            <ImageCardSlider
              key={room.id}
              {...room}
              onImageClick={openModal}
              buttonText="Find More"
              buttonHref={`roomsandsuites/${room.id}`}
            />
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <CallToAction
        title="Ready to Reserve Your Table?"
        description="Call us now to make a reservation at our restaurant."
        phone="01704199798"
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
