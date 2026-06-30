import Link from "next/link";
import Image from "next/image";
import React from "react";

interface IntroductionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageTopRight?: string;
  imageBottomLeft?: string;
}

const Introduction: React.FC<IntroductionProps> = ({
  subtitle = "Welcome To",
  title = "The Imperial Institute Of Hospitality & Hotel Management",
  description = "The Imperial Institute Of Hospitality & Hotel Management is a premier hospitality education and training institute in Bangladesh, dedicated to developing world-class professionals for the hotel and tourism industry. It offers modern, industry-focused training programs with state-of-the-art facilities, experienced faculty, and practical learning environments. The institute prepares students for successful careers in five-star hotels, resorts, airlines, and global hospitality sectors, ensuring excellence in service, management, and professionalism.",
  buttonText = "Discover More",
  buttonLink = "/roomsandsuites",
  imageTopRight = "/images/cooridoor.webp",
  imageBottomLeft = "/images/hallroom.webp",
}) => {
  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-28 xl:py-30 bg-background dark:bg-[#0b2411] transition-colors duration-300 text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="w-full lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <p className="text-primary-dark dark:text-amber-500 text-sm font-semibold tracking-widest uppercase transition-colors duration-300">
                {subtitle}
              </p>
              <span className="w-12 h-[1px] bg-primary-dark/60 dark:bg-amber-500/60 transition-colors duration-300"></span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground dark:text-white leading-tight transition-colors duration-300">
              {title}
            </h2>

            <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed font-light whitespace-pre-line transition-colors duration-300">
              {description}
            </p>

            <div className="pt-2">
              <Link
                href={buttonLink}
                className="text-primary dark:text-amber-500 hover:text-primary-dark dark:hover:text-amber-400 transition-all duration-300 inline-flex items-center gap-2 font-semibold group"
              >
                <span>{buttonText}</span>
                <span className="transform group-hover:translate-x-1 transition-transform font-serif text-sm">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: DUAL ASYMMETRIC OVERLAPPING IMAGES */}
          <div className="w-full lg:col-span-6 relative min-h-[460px] sm:min-h-[520px]">
            {/* 1. Top Right Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[300px] sm:h-[340px] rounded-xl overflow-hidden shadow-xl z-0">
              <Image
                src={imageTopRight}
                alt={`${title} main view`}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* 2. Bottom Left Image with custom frame */}
            <div className="absolute bottom-0 left-0 w-[70%] border-8 dark:border-[#0b2411] rounded-tr-[100px] rounded-bl-[40px]  h-[240px] sm:h-[280px] z-10">
              <div className="w-full h-full overflow-hidden shadow-2xl transition-colors duration-300">
                <Image
                  src={imageBottomLeft}
                  alt={`${title} detailed view`}
                  fill
                  sizes="(max-width: 1024px) 70vw, 35vw"
                  className="object-cover transition-transform duration-700 hover:scale-105 rounded-tr-[100px] rounded-bl-[40px] "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;