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

export const Restaurants = [
  {
    id: "1",
    name: "Taste & Tradition",
    type: "Signature Dining",
    description:
      "Experience a culinary journey featuring a diverse selection of local and international flavors. Prepared by our expert chefs using the freshest ingredients, our menu offers something delightful for every palate in a warm and welcoming ambiance",
    images: [
      "/images/resturantone1.jpg",
      "/images/resturanttwo.jpg",
      "/images/resturent/resturent1.jpg",
      "/images/resturent/resturent2.jpg",
      "/images/resturent/resturent3.jpg",
    ],
    reverse: false,

    heroImage: "/images/fowara-dine-hero.jpg",
    cuisine: [
      "Continental",
      "Mexican",
      "Sea Food",
      "Arabic",
      "Thai",
      "Chinese",
      "Indian & Bangla",
    ],
    atmosphere: "Friendly and Informal",
    serviceStyle: "Buffet & A la Carte",
    serviceHours: {
      breakfast: "7:00 a.m. to 10:30 a.m.",
      lunch: "12:30 p.m. to 3:00 p.m.",
      dinner: "7:00 p.m. to 10:30 p.m.",
    },
    location: "At Lobby Level",
  },
  {
    id: "2",
    name: "The Grand Flavor",
    type: "Premium Culinary Experience",
    description:
      "Indulge in an exceptional dining experience where elegant design meets culinary artistry. From curated gourmet dishes to impeccable service, we offer the perfect setting for memorable family gatherings, romantic dinners, and special occasions..",
    images: [
      "/images/resturantone1.jpg",
      "/images/resturanttwo.jpg",
      "/images/resturent/resturent4.jpg",
      "/images/resturent/resturent5.jpg",
    ],
    reverse: true,

    heroImage: "/images/grand-flavor-hero.jpg",
    cuisine: ["European", "Asian", "Fusion"],
    atmosphere: "Elegant & Sophisticated",
    serviceStyle: "A la Carte",
    serviceHours: {
      breakfast: "7:00 a.m. to 11:00 a.m.",
      lunch: "12:00 p.m. to 4:00 p.m.",
      dinner: "6:30 p.m. to 11:00 p.m.",
    },
    location: "First Floor",
  },
  {
    id: "3",
    name: "The Hub Eatery",
    type: "Dine & Unwind",
    description:
      "Whether you are starting your morning with a freshly brewed coffee, stopping by for a hearty lunch, or enjoying a relaxed dinner with loved ones, our vibrant space welcomes you all day to sit back, relax, and savor exceptional food.",
    images: [
      "/images/resturent/resturent6.jpg",
      "/images/resturanttwo.jpg",
      "/images/resturent/resturent3.jpg",
    ],
    reverse: false,

    heroImage: "/images/hub-eatery-hero.jpg",
    cuisine: ["International", "Fast Casual", "Beverages"],
    atmosphere: "Casual & Vibrant",
    serviceStyle: "Buffet & A la Carte",
    serviceHours: {
      breakfast: "6:30 a.m. to 11:00 a.m.",
      lunch: "11:30 a.m. to 5:00 p.m.",
      dinner: "6:00 p.m. to 10:30 p.m.",
    },
    location: "Ground Floor",
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
        title="Restaurants"
        subtitle="Discover comfort and style in our Restaurants."
        backgroundImage="/images/resturantone.jpg"
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
              buttonHref={`/restaurantsandcafes/${restaurant.id}`}
            />
          ))}
        </div>
      </section>

      <CallToAction
        title="Ready to Reserve Your Table?"
        description="Call us now to make a reservation at our restaurant."
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

export default RestaurantSAndCafes;
