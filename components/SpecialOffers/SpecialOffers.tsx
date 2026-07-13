"use client";

import Image from "next/image";
import CallToAction from "../common/calltoaction";
import Link from "next/link";
import PageHero from "../common/pagehero";

interface Offer {
  id: number;
  title: string;
  validity: string;
  description: string;
  longDescription?: string;
  image: string;
  includes: string[];
}

interface SpecialOffersProps {
  offers?: Offer[];
}

const defaultOffers: Offer[] = [
  {
    id: 1,
    title: "Special rooms offer",
    validity: "Validity till 31st July 2026",
    description:
      "This season indulge in something special. Exclusive Special Rate awaits at The Imperial Institute Of Hospitality & Hotel Management. Enjoy a vacation to remember with a delicious complimentary breakfast and so much more!",
    longDescription:
      "Don't miss out on this special offer to relax and unwind in luxury.",
    image: "/images/specialoffers/specialoffers.webp",
    includes: [
      "BUFFET BREAKFAST",
      "SWIMMING POOL",
      "OUTDOOR JACUZZI",
      "INDOOR/OUTDOOR KIDS PLAY",
      "GYM & LIBRARY",
    ],
  },
];

const SpecialOffers = ({ offers = defaultOffers }: SpecialOffersProps) => {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Special Offers"
        subtitle="Make your stay all the more delightful by selecting our incredible packages and offers"
        backgroundImage="/images/cooridoor.webp"
      />

      {/* Offers Card Section */}
      <section className="bg-[#0A2F1F] py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* Background Layer Under the Card */}
          <div className="absolute inset-x-8 md:inset-x-10 lg:inset-x-28 -top-4 -bottom-4 bg-white/10 rounded-3xl backdrop-blur-[4px] pointer-events-none z-0" />
          <div className="relative overflow-hidden group shadow-md">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-[1200px] mx-auto border border-[#2E7D32]/20 relative z-10"
              >
                <div className="flex flex-col lg:flex-row px-3 lg:px-10 py-3 lg:py-6">
                  {/* Left Side - Text Content */}
                  <div className="lg:w-1/2 p-8 lg:p-16 bg-secondary/15 lg:rounded-l-2xl!">
                    <h2 className="text-3xl font-semibold text-[#0A2F1F] mb-1">
                      {offer.title}
                    </h2>
                    <p className="text-[#D4AF37] font-medium mb-8">
                      {offer.validity}
                    </p>

                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {offer.description}
                    </p>

                    {offer.longDescription && (
                      <p className="text-neutral-600 mb-8">
                        {offer.longDescription}
                      </p>
                    )}

                    <a
                      href="/specialoffers/special"
                      className="inline-flex items-center text-[#D4AF37] hover:text-amber-600 font-medium group"
                    >
                      → Discover More
                    </a>
                  </div>

                  {/* Right Side - Image */}
                  <Link
                    href="/specialoffers/special"
                    className="lg:w-1/2 relative min-h-[420px] bg-neutral-100 rounded-r-3xl overflow-hidden"
                  >
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-fill"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <CallToAction
        title="Ready To Book Your Stay"
        description="Call us now to check availability and secure your desired rooms before they're all gone! Your dream stay awaits - don't miss out."
        phone="01704199798"
      />
    </>
  );
};

export default SpecialOffers;