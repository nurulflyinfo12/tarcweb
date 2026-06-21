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
            ? "bg-white/85 dark:bg-white/90 backdrop-blur-md text-secondary dark:text-secondary shadow-[0px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]"
            : "bg-white/85 dark:bg-white/50 backdrop-blur-md text-secondary dark:text-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]"
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
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Desktop Phone */}
              <div className="hidden xl:flex items-center gap-6 text-md font-medium">
                <a
                  href="tel:(0421) 66906, 65663"
                  className="flex items-center gap-2"
                >
                  <FiPhone size={14} />
                  <span>(0421) 66906, 65663</span>
                </a>
              </div>

              {/* Book Now Button - Styled & Aligned */}
              <Link
                href="/booknow"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest border border-current transition-all duration-300 rounded-none transform hover:scale-105 hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary shadow-sm"
              >
                Book Now
              </Link>

              {/* <ThemeToggle scrolled={scrolled} /> */}

              <div className="hidden sm:block h-5 w-px bg-current opacity-20" />

              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center cursor-pointer gap-1 sm:gap-2"
              >
                <span className="hidden sm:block text-sm font-serif font-bold uppercase tracking-wider">
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