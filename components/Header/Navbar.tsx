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
            ? "bg-white/60 dark:bg-zinc-950/95 backdrop-blur-md text-slate-900 dark:text-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]"
            : "bg-transparent text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-4 md:py-5 transition-all duration-300">
            <Link
              href="/"
              className="flex-shrink-0 transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/logo.png"
                alt="TRAC Resort"
                width={160}
                height={70}
                className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 ${
                  !scrolled
                    ? "brightness-0 invert"
                    : "dark:brightness-0 dark:invert-0"
                }`}
                priority
              />
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
                <a
                  href="tel:+8809678785959"
                  className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  <FiPhone size={14} className="text-amber-500" />
                  <span>+880 9678 785959</span>
                </a>
                <a
                  href="tel:+8801730793555"
                  className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  <FiPhone size={14} className="text-amber-500" />
                  <span>+880 1730 793555</span>
                </a>
              </div>

              <ThemeToggle />

              <div className="h-5 w-px bg-current opacity-20" />

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 md:gap-3 group cursor-pointer focus:outline-none"
                aria-label="Open Menu"
              >
                <span className="text-sm md:text-base font-serif font-bold tracking-wider uppercase">
                  Menu
                </span>
                <div className="p-1 rounded-lg transition-colors duration-200 group-hover:bg-black/5 dark:group-hover:bg-white/10">
                  <FiMenu
                    size={26}
                    className="group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
