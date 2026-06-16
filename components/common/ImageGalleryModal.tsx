"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiShare2,
  FiMaximize,
  FiDownload,
} from "react-icons/fi";

interface ImageGalleryModalProps {
  title: string;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const ImageGalleryModal = ({
  title,
  images,
  initialIndex = 0,
  onClose,
}: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [toast, setToast] = useState<string | null>(null);

  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      nextImage();
    } else {
      prevImage();
    }
  };

  const shareImage = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: title,
          url: currentImage,
        });
      } else {
        await navigator.clipboard.writeText(currentImage);

        setToast("Image link copied!");
        setTimeout(() => setToast(null), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fullscreenImage = () => {
    if (!imageContainerRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      imageContainerRef.current.requestFullscreen();
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");

    link.href = currentImage;
    link.download = `${title
      .replace(/\s+/g, "-")
      .toLowerCase()}-${currentIndex + 1}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-5 py-2 rounded-full z-50">
          {toast}
        </div>
      )}

      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        {/* Toolbar */}
        <div className="absolute top-4 left-4 z-20 flex gap-4">
          <button
            onClick={shareImage}
            className="text-white hover:text-primary text-3xl"
          >
            <FiShare2 />
          </button>

          <button
            onClick={fullscreenImage}
            className="text-white hover:text-primary text-3xl"
          >
            <FiMaximize />
          </button>

          <button
            onClick={downloadImage}
            className="text-white hover:text-primary text-3xl"
          >
            <FiDownload />
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white hover:text-primary text-4xl"
        >
          <FiX />
        </button>

        {/* Image */}
        <div
          ref={imageContainerRef}
          className="flex items-center justify-center"
        >
          <img
            src={currentImage}
            alt={title}
            className="max-h-[85vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-5 text-white">
          <button
            onClick={prevImage}
            className="text-4xl hover:text-primary"
          >
            <FiChevronLeft />
          </button>

          <div className="text-center">
            <h3 className="text-xl">{title}</h3>

            <p className="text-sm text-white/60 mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="text-4xl hover:text-primary"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryModal;