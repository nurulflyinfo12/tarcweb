"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiPhone } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-[0px_3px_9px_0px_rgba(0,0,0,0.72)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-4 md:py-6">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="TRAC Resort"
                width={160}
                height={70}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-4 md:gap-6">
              
              {/* Phone Numbers - Hidden on mobile, visible on large screens */}
              <div className="hidden lg:flex items-center gap-4 text-white text-sm">
                <div className="flex items-center gap-2">
                  <FiPhone size={16} />
                  <span>+880 9678 785959</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone size={16} />
                  <span>+880 1730 793555</span>
                </div>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 md:gap-3 group cursor-pointer text-white"
                aria-label="Open Menu"
              >
                <span className="text-base md:text-lg font-medium">Menu</span>
                <FiMenu
                  size={32}
                  className="group-hover:text-primary transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}