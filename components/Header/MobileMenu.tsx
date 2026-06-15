// components/PopupMenu.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { 
  FiHome, 
  FiBookOpen,        
  FiCoffee,          
  FiUsers,           
  FiSun,             
  FiActivity,        
  FiGift,            
  FiPhone            
} from "react-icons/fi";

const mainMenuItems = [
  { name: "Home", icon: FiHome },
  { name: "Rooms & Suites", icon: FiBookOpen },
  { name: "Restaurants & Cafes", icon: FiCoffee },
  { name: "Meetings & Events", icon: FiUsers },
  { name: "Relaxation", icon: FiSun },
  { name: "Recreations", icon: FiActivity },
  { name: "Special Offers", icon: FiGift },
  { name: "Contact Us", icon: FiPhone },
];

const bottomMenuItems = [
  "Surrounding Us",
  "Getting There",
  "Photo Gallery",
  "Contact",
  "Guest Policy",
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/95 backdrop-blur-md z-[999] transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Dark Tint */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-amber-400 transition z-10"
      >
        <FiX size={40} />
      </button>

      <div className="relative h-full flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="mb-10">
          <Image 
            src="/images/logo.png" 
            alt="Grand Sultan Logo" 
            width={180} 
            height={80}
            className="mx-auto"
            priority
          />
        </div>

        {/* Table Style Menu */}
        <div className="w-full max-w-5xl border-1 border-amber-400/80 bg-black/30 overflow-hidden rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-amber-400/30 divide-y divide-amber-400/30">
            {mainMenuItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                onClick={onClose}
                className="group flex flex-col items-center justify-center py-10 px-6 hover:bg-amber-400/10 transition duration-300 text-center border-amber-400/20"
              >
                <div className="text-5xl mb-4 text-amber-300 group-hover:scale-110 transition-transform duration-300">
                  <item.icon />
                </div>
                <span className="text-lg font-light tracking-wider text-amber-100 group-hover:text-amber-400">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Rounded Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {bottomMenuItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              onClick={onClose}
              className="border border-amber-400/70 hover:border-amber-400 text-amber-100 hover:text-amber-400 px-6 py-2.5 rounded-full text-sm font-light tracking-widest transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}