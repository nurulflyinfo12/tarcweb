import React from "react";
import Link from "next/link";
import { FaHome, FaCompass } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative px-4 overflow-hidden selection:bg-primary/30">
      
      {/* Decorative Branding Background Blur Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none hidden md:block" />

      {/* Floating Elegant Leaf Silhouette / Graphic Line */}
      <div className="absolute opacity-[0.03] text-primary pointer-events-none max-w-lg right-0 top-0 translate-x-1/4 -translate-y-1/4 transform scale-150 select-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 21s4-4 4-10V3h-8c-6 0-10 4-10 10 0 5.2 3.5 9.6 8.5 10.7l1.5-3.8-2.3-1.2.9-1.8 2.3 1.2 1.9-4.7-2.3-1.2.9-1.8 2.3 1.2 2.2-5.5h2v2l-2.2 5.5 2.3 1.2-.9 1.8-2.3-1.2-1.9 4.7 2.3 1.2-.9 1.8-1.5-.8L17 21z" />
        </svg>
      </div>

      <div className="text-center z-10 max-w-xl mx-auto space-y-6">
        {/* Animated Accent Frame Tag */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="w-12 h-[1px] bg-primary"></span>
          <span className="text-primary text-xs font-semibold tracking-widest uppercase font-mono">
            Lost In Paradise
          </span>
          <span className="w-12 h-[1px] bg-primary"></span>
        </div>

        {/* Big Premium 404 Headline */}
        <h1 className="text-8xl md:text-9xl font-serif font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary-dark to-secondary/40 drop-shadow-sm select-none">
          404
        </h1>

        {/* Core Message */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
            This Path Leads Somewhere Else
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto font-light">
            The retreat view or luxury suite page you are looking for has been moved, renamed, or is temporarily taking a vacation.
          </p>
        </div>

        {/* Premium Call to Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-[#0b2400] font-semibold rounded-lg transition-all duration-300 transform active:scale-98 shadow-md"
          >
            <FaHome className="text-sm" />
            <span>Return To Resort</span>
          </Link>

          <Link
            href="/rooms" // Adjust destination route based on your api/pages config
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-card/60 hover:bg-card border border-border/40 hover:border-primary/40 text-foreground font-medium rounded-lg transition-all duration-300"
          >
            <FaCompass className="text-sm text-primary" />
            <span>Explore Suites</span>
          </Link>
        </div>
      </div>
    </div>
  );
}