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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
          scrolled
            ? "bg-white/85 dark:bg-white/50 backdrop-blur-md text-secondary dark:text-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]"
            : "bg-white/50 dark:bg-black/50 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-3 md:py-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 max-w-[140px] sm:max-w-none"
            >
              <Image
                src="/images/logo.png"
                alt="TRAC Resort"
                width={160}
                height={70}
                className={`h-10 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300 ${
                  scrolled ? "" : ""
                }`}
                priority
              />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Phone */}
              <div className="hidden xl:flex items-center gap-6 text-sm font-medium">
                <a
                  href="tel:+8809678785959"
                  className="flex items-center gap-2"
                >
                  <FiPhone size={14} />
                  <span>+880 9678 785959</span>
                </a>

                <a
                  href="tel:+8801730793555"
                  className="flex items-center gap-2"
                >
                  <FiPhone size={14} />
                  <span>+880 1730 793555</span>
                </a>
              </div>

              <ThemeToggle scrolled={scrolled} />

              <div className="hidden sm:block h-5 w-px bg-current opacity-20" />

              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center cursor-pointer gap-1 sm:gap-2"
              >
                <span className="hidden sm:block text-sm font-serif font-bold uppercase">
                  Menu
                </span>

                <FiMenu size={24} className="sm:size-[26px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
