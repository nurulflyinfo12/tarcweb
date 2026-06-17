"use client";

import Link from "next/link";
import { FaGift } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SpecialOfferButton() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
fixed z-50

```
    bottom-4 left-4
    top-auto translate-y-0

    sm:left-0
    sm:top-1/2
    sm:bottom-auto
    sm:-translate-y-1/2
  "
    >
      <Link href="/specialoffers" className="group block">
        <motion.div
          whileHover={{
            x: 6,
            rotate: 1,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-r-2xl sm:rounded-l-none"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-amber-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Shadow */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl sm:rounded-r-2xl sm:rounded-l-none bg-black/20" />

          <div
            className="
          relative
          bg-gradient-to-b
          from-[#355d35]
          via-[#2d4a2d]
          to-[#1f341f]
          text-white
          border-amber-400
          shadow-2xl
          backdrop-blur-sm

          flex items-center gap-3
          px-4 py-3
          rounded-2xl
          border

          sm:flex-col
          sm:px-4
          sm:py-7
          sm:rounded-r-2xl
          sm:rounded-l-none
          sm:border-r-4
          sm:border-t-0
          sm:border-b-0
          sm:border-l-0
        "
          >
            {/* Shine */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-40" />
            </div>

            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-amber-400 blur-md opacity-60" />
              <FaGift className="relative text-amber-300 text-lg sm:text-xl" />
            </motion.div>

            {/* Mobile Text */}
            <span className="block sm:hidden text-xs font-bold uppercase tracking-wider">
              Special Offers
            </span>

            {/* Desktop Text */}
            <span
              className="hidden sm:block text-[11px] font-bold tracking-[0.35em] uppercase"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Special Offers
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
