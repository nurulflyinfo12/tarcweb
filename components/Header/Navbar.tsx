"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hook/useApplicationDetails";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { application } = useAppSelector((state) => state.application);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
  typeof application?.Logo === "string" &&
  application.Logo.trim().length > 0
    ? application.Logo
    : null;


  return (
    <>
      {/* === Top Contact Bar (Visible on ALL screens) === */}
      <div className="fixed top-0 left-0 z-50 w-full bg-[#0A2F1F] text-white lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex h-11 items-center justify-between">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8801704199798"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-green-400"
            >
              <FaWhatsapp className="text-[18px] relative -top-[2px]" />
              <span className="text-[12px]">Chat with us</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801704199798"
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-green-400"
            >
              <FiPhone className="text-sm flex-shrink-0" />
              <span className="whitespace-nowrap text-[12px]">
                +880 1704-199798
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-11 lg:top-0 left-0 w-full z-40 transition-all duration-300 backdrop-blur-sm ${scrolled
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
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt={application?.ApplicationName || "Resort"}
                  width={160}
                  height={70}
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                  priority
                  unoptimized={logoSrc.startsWith("data:")}
                />
              )}
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Desktop Phone */}
              <div className="hidden xl:flex items-center gap-6 text-sm font-medium">
                <a
                  href="tel:01704199798"
                  className="inline-flex items-center gap-2 leading-none"
                >
                  <FiPhone size={14} className="flex-shrink-0 mb-0.6" />
                  <span className="inline-block pt-[1px]">
                    +880 1704-199798
                  </span>
                </a>
              </div>

              {/* <ThemeToggle scrolled={scrolled} /> */}

              {/* Book Now Button */}
              <Link
                href="/booknow"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest border border-current rounded-none transform hover:scale-105 hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary shadow-sm"
              >
                Book Now
              </Link>

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