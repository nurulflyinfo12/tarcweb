import Link from "next/link";
import { FaGift } from "react-icons/fa";

const SpecialOfferButton = () => {
  return (
    <Link
      href="/offers"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] group"
      aria-label="Special Offers"
    >
      <div className="bg-[#0F172A] text-white px-3 py-6 rounded-r-2xl shadow-2xl 
                      flex flex-col items-center gap-3 
                      hover:bg-[#1E2937] hover:scale-[1.08] active:scale-95 
                      transition-all duration-300 border-r-4 border-[#FACC15]">
        
        <FaGift className="text-2xl transition-transform group-hover:rotate-12" />

        <span
          className="text-xs font-bold tracking-widest uppercase text-center"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          SPECIAL OFFERS
        </span>
      </div>
    </Link>
  );
};

export default SpecialOfferButton;