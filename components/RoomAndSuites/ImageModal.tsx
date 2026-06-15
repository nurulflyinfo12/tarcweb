"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiShare2, FiMaximize, FiDownload } from "react-icons/fi";

interface Room {
  name: string;
  images: string[];
}

interface ImageModalProps {
  room: Room;
  initialIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ room, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [toast, setToast] = useState<string | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal opens, unlock on close
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const currentImage = room.images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextImage();
    } else if (e.deltaY < 0) {
      prevImage();
    }
  };

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: room.name,
          text: `Check out ${room.name}`,
          url: currentImage,
        });
      } catch (error) {
        console.log("Error sharing", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentImage);
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
    const link = document.createElement("a");
    link.href = currentImage;
    link.download = `${room.name.replace(/\s+/g, "-")}-image.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg z-50">
          {toast}
        </div>
      )}

      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()} onWheel={handleWheel}>
        {/* Toolbar */}
        <div className="absolute top-4 left-4 flex space-x-3 z-20">
          <button onClick={shareImage} className="text-white hover:text-primary text-3xl transition-colors" title="Share image">
            <FiShare2 />
          </button>
          <button onClick={zoomImage} className="text-white hover:text-primary text-3xl transition-colors" title="Full-screen view">
            <FiMaximize />
          </button>
          <button onClick={downloadImage} className="text-white hover:text-primary text-3xl transition-colors" title="Download image">
            <FiDownload />
          </button>
        </div>

        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-primary text-4xl z-20 transition-colors">
          <FiX />
        </button>

        {/* Image container */}
        <div ref={imageContainerRef} className="flex items-center justify-center">
          <img
            src={currentImage}
            alt={room.name}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4 text-white">
          <button onClick={prevImage} className="text-4xl hover:text-primary transition-colors">
            <FiChevronLeft />
          </button>
          <p className="text-xl font-light">{room.name}</p>
          <button onClick={nextImage} className="text-4xl hover:text-primary transition-colors">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;