import type { Metadata } from "next";
import { Biryani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import SpecialOfferButton from "@/components/SpecialOfferButton";
import { FaWhatsapp } from "react-icons/fa";

import Providers from "./providers";

const biryani = Biryani({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-biryani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Imperial Institute of Hospitality & Hotel Management",
  description: "Book your stay today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${biryani.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-biryani">
        <Providers>
          <Navbar />
          <SpecialOfferButton />

          {/* Desktop Floating WhatsApp Button */}
          <a
            href="https://wa.me/8801704199798"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex group fixed bottom-24 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba56] cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            <span className="absolute right-16 bg-neutral-900 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-md whitespace-nowrap opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-md">
              Chat with us
            </span>
            <FaWhatsapp size={32} />
          </a>

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}