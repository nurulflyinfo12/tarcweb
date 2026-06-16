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
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
    >
      <Link href="/specialoffers" className="group block">
        <motion.div
          whileHover={{
            x: 6,
            rotate: 1,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden rounded-r-2xl"
        >
          <div className="absolute inset-0 bg-amber-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-r-2xl bg-black/20" />

          <div className="relative bg-gradient-to-b from-[#355d35] via-[#2d4a2d] to-[#1f341f] text-white px-4 py-7 border-r-4 border-amber-400 shadow-2xl rounded-r-2xl backdrop-blur-sm">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-32" />
            </div>

            <div className="relative flex flex-col items-center gap-4">
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
                <FaGift className="relative text-amber-300 text-xl" />
              </motion.div>

              <span
                className="text-[11px] font-bold tracking-[0.35em] uppercase"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                Special Offers
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
