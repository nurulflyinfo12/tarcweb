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

        // className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-[0px_1px_6px_0px_rgba(0,0,0,0.72)]`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="TRAC Resort"
                width={180}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-6 text-white">
              <div className="hidden lg:flex items-center gap-6">
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
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="text-lg">Menu</span>
                <FiMenu
                  size={34}
                  className="group-hover:text-primary transition"
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
