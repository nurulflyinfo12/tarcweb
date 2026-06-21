import type { Metadata } from "next";
import { Biryani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import SpecialOfferButton from "@/components/SpecialOfferButton";

const biryani = Biryani({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-biryani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Imperial Institute of Hospitality & Hotel Management",
  description:
    "Book your stay today.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="trac-resort-theme"
        >
          <Navbar />
          <SpecialOfferButton />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}