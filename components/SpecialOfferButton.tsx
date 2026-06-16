import React from "react";
import Link from "next/link";
import { FaGift } from "react-icons/fa";

const SpecialOfferButton = () => {
  return (
    <Link
      href="/offers"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group focus:outline-none"
    >
      <div className="bg-card text-foreground px-3 py-7 rounded-r-2xl border-y border-r border-border/30 shadow-2xl flex flex-col items-center gap-4 transition-all duration-300 group-hover:bg-primary-dark group-hover:text-[#0b2400] group-hover:translate-x-1 group-active:scale-95 select-none">
        <FaGift className="text-xl text-primary group-hover:text-[#0b2400] transition-colors duration-300" />

        <span
          className="text-xs font-serif font-bold tracking-widest uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Special Offers
        </span>
      </div>
    </Link>
  );
};

export default SpecialOfferButton;
