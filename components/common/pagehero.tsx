"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  height = "h-[50vh] lg:h-[60vh]",
}: PageHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden bg-neutral-950`}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: 1.12,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 80,
          mass: 0.5,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-600/30 via-transparent to-neutral-600/80" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center select-none">
        <div className="relative mb-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.03, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl lg:text-9xl font-serif font-black text-white uppercase tracking-widest pointer-events-none select-none whitespace-nowrap"
          >
            {title.split(" ")[0]}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative text-3xl sm:text-5xl lg:text-6xl font-serif font-extralight tracking-[0.22em] uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] leading-tight"
          >
            {title}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative max-w-2xl"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-5"
            />
            <p className="text-lg md:text-xl font-light tracking-wide text-white/80 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              {subtitle}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
