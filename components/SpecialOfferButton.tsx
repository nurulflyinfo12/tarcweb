import Link from "next/link";
import { FaGift } from "react-icons/fa";

const SpecialOfferButton = () => {
  return (
    <Link
      href="/offers"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group"
    >
      <div className="bg-background text-white px-3 py-6 rounded-r-xl shadow-xl flex flex-col items-center gap-3 hover:bg-primary-dark transition-all duration-300 hover:translate-x-1">
        <FaGift className="text-xl" />

        <span
          className="text-xs font-semibold tracking-wider uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Special Offers
        </span>
      </div>
    </Link>
  );
};

export default SpecialOfferButton;