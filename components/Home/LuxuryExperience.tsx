"use client";

import Link from "next/link";
import React from "react";
import {
  FaUtensils,
  FaSpa,
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaFilm,
} from "react-icons/fa";

interface AmenityItem {
  iconKey: "cuisine" | "spa" | "pool" | "gym" | "children" | "movie" | string;
  title: string;
  desc: string;
}

interface LuxuryExperienceProps {
  sectionSubtitle?: string;
  sectionTitleMain?: string;
  sectionTitleItalic?: string;
  paragraphs?: string[];
  ctaLink?: string;
  ctaText?: string;
  heroImageMain?: string;
  heroImageOverlay?: string;
  amenitiesTitle?: string;
  amenitiesSubtitle?: string;
  amenitiesData?: AmenityItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  cuisine: <FaUtensils />,
  spa: <FaSpa />,
  pool: <FaSwimmingPool />,
  gym: <FaDumbbell />,
  children: <FaChild />,
  movie: <FaFilm />,
};

const LuxuryExperience: React.FC<LuxuryExperienceProps> = ({
  sectionSubtitle = "Enjoy The Unique Experience",
  sectionTitleMain = "We Invite You to",
  sectionTitleItalic = "Indulge in a Luxurious Escape",
  paragraphs = [
    "Whether you're seeking a romantic escape, a family vacation, or a corporate retreat, Grand Sultan Tea Resort & Golf is the ideal destination. Browse through our website to explore the diverse range of packages and offers tailored to make your stay unforgettable.",
    "Embark on a virtual tour of our resort through this website and get a glimpse of the luxury retreat we want to ensure for our prestigious guests. Sitting at the heart of the lush tea gardens, Grand Sultan brings the beauty of the Tea Capital of Bangladesh closer to you in an opulent sanctuary.",
    "Come, experience the grandeur of Grand Sultan Tea Resort & Golf—where luxury meets nature, and every moment is a celebration of the finer things in life. Your extraordinary journey begins here!",
  ],
  ctaLink = "/roomsandsuites",
  ctaText = "Discover More",
  heroImageMain = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  heroImageOverlay = "https://images.unsplash.com/photo-1497366216548-37526070297c",
  amenitiesSubtitle = "Amenities",
  amenitiesTitle = "Facilities & Services",
  amenitiesData = [
    {
      iconKey: "cuisine",
      title: "Cuisine",
      desc: "Enjoy a delightful dining experience, at our multicuisine restaurants and cafes.",
    },
    {
      iconKey: "spa",
      title: "Spa",
      desc: "Relaxation and well-being go hand in hand with the image of a pleasurable holiday.",
    },
    {
      iconKey: "pool",
      title: "Swimming Pool",
      desc: "The amoeba shaped, temperature controlled swimming pool promises a rejuvenating retreat.",
    },
    {
      iconKey: "gym",
      title: "Gym",
      desc: "Pursue your fitness regimen at our well equipped gym center.",
    },
    {
      iconKey: "children",
      title: "Children Play Zone",
      desc: "Equipped with various types of children activity games which will keep your children busy & joyful.",
    },
    {
      iconKey: "movie",
      title: "Movie Theatre",
      desc: "The 44 seated HD Movie Theater allows you to enjoy a private movie experience.",
    },
  ],
}) => {
  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative group">
          <div className="absolute inset-x-10 -top-3 -bottom-3 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

          <div className="relative z-10 bg-white dark:bg-white p-8 lg:p-16 rounded-[30px] shadow-2xl border border-border/40 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative z-0">
                  <img
                    src={heroImageMain}
                    alt="Resort Exterior View"
                    className="w-full h-[450px] object-cover rounded-xl shadow-lg"
                  />
                </div>

                <div className="absolute -bottom-10 -right-4 lg:-right-10 z-10 w-[65%] h-[280px]">
                  <div className="w-full h-full border-[10px] border-card dark:border-zinc-900 rounded-tl-[120px] rounded-br-[40px] overflow-hidden shadow-2xl">
                    <img
                      src={heroImageOverlay}
                      alt="Luxury Lobby Interior View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 space-y-6">
                <div className="flex items-center gap-3">
                  <p className="text-sm text-primary font-bold tracking-widest uppercase">
                    {sectionSubtitle}
                  </p>
                  <div className="h-[1px] w-12 bg-primary/60"></div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary leading-tight">
                  {sectionTitleMain} <br />
                  <span className="text-secondary italic">
                    {sectionTitleItalic}
                  </span>
                </h2>

                <div className="space-y-4 text-black text-sm leading-relaxed font-light">
                  {paragraphs.map((textStr, idx) => (
                    <p key={idx}>{textStr}</p>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <Link
                    href={ctaLink}
                    className="text-primary font-bold flex items-center gap-2 group transition-all"
                  >
                    {ctaText}
                    <span className="group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-24 border-t border-border/40 pt-16">
              <div className="grid lg:grid-cols-4 gap-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                      {amenitiesSubtitle}
                    </p>
                    <div className="h-[1px] w-8 bg-primary/40"></div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-secondary leading-tight">
                    {amenitiesTitle}
                  </h3>
                </div>

                <div className="lg:col-span-3 grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {amenitiesData.map((item, index) => (
                    <div key={index} className="flex gap-5 group">
                      <div className="text-primary text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {iconMap[item.iconKey] || <FaUtensils />}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-secondary text-lg transition-colors group-hover:text-primary">
                          {item.title}
                        </h4>
                        <p className="text-xs text-black leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperience;
