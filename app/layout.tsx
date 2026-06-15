import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import SpecialOfferButton from "@/components/SpecialOfferButton"; // New Import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarc Resort - Luxury Getaway & Natural Escape",
  description:
    "Discover tarc Resort - a serene retreat offering premium accommodations, breathtaking views, and unforgettable experiences. Book your stay today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"     
          enableSystem={false}      
          storageKey="trac-resort-theme"
        >
          <Navbar />
          <SpecialOfferButton /> {/* NEW BUTTON ADDED HERE */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}