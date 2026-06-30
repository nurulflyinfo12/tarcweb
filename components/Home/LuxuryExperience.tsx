import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaUtensils,
  FaDumbbell,
  FaChild,
  FaWalking,
  FaTree,
} from "react-icons/fa";

interface AmenityItem {
  iconKey: "cuisine" | "gym" | "walking" | "children" | "nature" | string;
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
  children: <FaChild />,
  walking: <FaWalking />,
  nature: <FaTree />,
};

const LuxuryExperience: React.FC<LuxuryExperienceProps> = ({
  sectionSubtitle = "Enjoy The Unique Experience",
  sectionTitleMain = "We Invite You to",
  sectionTitleItalic = "Indulge in a Luxurious Escape",
  paragraphs = [
    "Whether you're aspiring to build a career in the global hospitality industry or seeking world-class professional training, The Imperial Institute Of Hospitality & Hotel Management offers the perfect foundation. Explore our programs designed to develop practical skills, industry knowledge, and professional excellence.",
    "Embark on a virtual journey through our institute and discover a modern learning environment equipped with advanced facilities, hands-on training labs, and experienced instructors. We are dedicated to shaping future leaders in hotels, resorts, airlines, and tourism sectors.",
    "Join The Imperial Institute Of Hospitality & Hotel Management and step into a world where education meets opportunity. Build your future with confidence, professionalism, and excellence in the ever-growing hospitality industry.",
  ],
  ctaLink = "/roomsandsuites",
  ctaText = "Discover More",
  heroImageMain = "/images/room1.webp",
  heroImageOverlay = "/images/room5.webp",
  amenitiesSubtitle = "Amenities",
  amenitiesTitle = "Facilities & Services",
  amenitiesData = [
    {
      iconKey: "cuisine",
      title: "Cuisine",
      desc: "Enjoy a delightful dining experience, at our multicuisine restaurants and cafes.",
    },
    {
      iconKey: "gym",
      title: "Gym",
      desc: "Pursue your fitness regimen at our well equipped gym center.",
    },
    {
      iconKey: "walking",
      title: "Walking Space",
      desc: "Unwind or enjoy your morning jogs across our beautifully designed, spacious walking tracks.",
    },
    {
      iconKey: "nature",
      title: "Outside Beauty",
      desc: "Immerse yourself in our beautifully landscaped gardens, lush green open views, and serene natural surroundings.",
    },
  ],
}) => {
  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-28 xl:py-30 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative group">
          {/* backdrop-blur preserved (but heavy) – kept for identical design */}
          <div className="absolute inset-x-10 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />

          <div className="relative z-10 bg-white dark:bg-white p-8 lg:p-16 rounded-[30px] shadow-2xl border border-border/40 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* ---------- LEFT COLUMN: IMAGES ---------- */}
              <div className="relative">
                {/* Main hero image – loaded eagerly if above the fold */}
                <div className="relative z-0 w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={heroImageMain}
                    alt="Resort Exterior View"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority 
                  />
                </div>

                {/* Overlay image – lazy loaded */}
                <div className="absolute -bottom-10 -right-4 lg:-right-10 z-10 border-8 border-white rounded-tl-[120px] rounded-br-[40px] w-[65%] h-[280px]">
                  <div className="w-full h-full border-8 border-white rounded-tl-[120px] rounded-br-[40px] overflow-hidden shadow-2xl">
                    <Image
                      src={heroImageOverlay}
                      alt="Luxury Lobby Interior View"
                      fill
                      sizes="(max-width: 1024px) 65vw, 33vw"
                      className="object-cover rounded-tl-[110px] rounded-br-[40px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/*RIGHT COLUMN: TEXT CONTENT  */}
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

            {/* AMENITIES SECTION */}
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