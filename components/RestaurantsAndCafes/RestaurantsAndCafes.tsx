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
import RestaurantsCardSlider from "./RestaurantsCardSlider";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";
import CallToAction from "../common/calltoaction";
import ImageGalleryModal from "../common/ImageGalleryModal";
import ImageCardSlider from "../common/ImageCardSlider";
import PageHero from "../common/pagehero";

const Restaurants = [
  {
    id: 1,
    name: "Fowara Dine",
    type: "All Day Dine",
    description:
      "Time spend all day dining restaurant Fowara Dine provides a stunning atmosphere in which to sample European, Asian, Pan Asian...",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
    ],
    reverse: false,
  },
  {
    id: 2,
    name: "Oronno Bilash",
    type: "Hilltop Restaurant",
    description:
      "Experience our BBQ in the perfect ambiance against the backdrop of the green tea gardens at our hilltop Restaurant Oronno Bilash...",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
    ],
    reverse: true,
  },
  {
    id: 3,
    name: "Shahi Dine",
    type: "Fine Dine",
    description:
      "For your special occasion with your special one, shahi dine (Fine Dining) at The Imperial Institute Of Hospitality & Hotel Management can be your resort...",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
    ],
    reverse: false,
  },
  {
    id: 4,
    name: "Cafe Mongal",
    type: "Cafe & Lounge",
    description:
      "The casual wooden floored cafe Mongal welcomes you all day to sit, relax with a book and to enjoy leisure of specialty blends...",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
    ],
    reverse: true,
  },
  {
    id: 5,
    name: "Pool Deck Cafe",
    type: "Poolside Cafe",
    description:
      "Enjoy our mocktails and juices in the relaxed atmosphere of the Pool Deck or if you have a favorite drink or wish to create...",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070",
    ],
    reverse: false,
  },
];

const RestaurantSAndCafes = () => {
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

  const currentRoom = Restaurants.find((r) => r.name === selectedRoomName);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Restaurants &amp; Cafes"
        subtitle="Discover comfort and style in our Restaurants and Cafes."
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      />

      {/* Rooms List */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
          {Restaurants.map((restaurant) => (
            <ImageCardSlider
              key={restaurant.id}
              {...restaurant}
              onImageClick={openModal}
              buttonText="Find More"
              buttonHref="#"
            />
          ))}
        </div>
      </section>

      <CallToAction
        title="Ready to Reserve Your Table?"
        description="Call us now to make a reservation at our restaurant."
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

export default RestaurantSAndCafes;
