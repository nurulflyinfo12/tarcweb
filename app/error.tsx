"use client";

import React, { useEffect } from "react";
import { FaRotateRight, FaCircleExclamation } from "react-icons/fa6";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled Global Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-background px-6 transition-colors duration-300">
      <div className="max-w-md w-full text-center space-y-8 p-8 md:p-12 rounded-[32px] bg-card/40 border border-border/40 backdrop-blur-sm shadow-xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-2xl animate-pulse">
            <FaCircleExclamation className="text-3xl" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-6 h-[1px] bg-primary/40"></span>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              System Notice
            </p>
            <span className="w-6 h-[1px] bg-primary/40"></span>
          </div>

          <h1 className="text-3xl font-serif font-bold text-foreground tracking-wide">
            An Error Occurred
          </h1>

          <p className="text-text-muted text-sm leading-relaxed font-light max-w-sm mx-auto">
            We encountered an unexpected disruption while pulling up this luxury
            environment. Our team has been notified.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold text-sm tracking-widest uppercase rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Try Again</span>
            <FaRotateRight className="text-xs group-hover:rotate-180 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>
    </div>
  );
}
