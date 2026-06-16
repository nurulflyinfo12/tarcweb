import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTripadvisor,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-foreground py-16  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <Image
                src="/images/logo.png"
                alt="TRAC Resort"
                width={180}
                height={80}
                className="h-16 w-auto object-contain brightness-100 dark:brightness-110 select-none"
                priority
              />
            </div>

            <div className="space-y-4 text-sm text-text-muted font-light transition-colors duration-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary shrink-0 transition-colors duration-300" />
                <p className="leading-relaxed">
                  Srimongal, Moulvibazar - 3210, Bangladesh
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-primary shrink-0 transition-colors duration-300" />
                <div className="space-y-1">
                  <p>
                    +880 2997 738501-3{" "}
                    <span className="text-xs opacity-70">(Resort Office)</span>
                  </p>
                  <p>
                    +880 9678 782929{" "}
                    <span className="text-xs opacity-70">
                      (Corporate Office)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCalendarAlt className="mt-1 text-primary shrink-0 transition-colors duration-300" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground transition-colors duration-300">
                    For Reservation:
                  </p>
                  <p>+880 9678 785959 / +880 1730 793501-4</p>

                  <p className="font-semibold text-foreground pt-2 transition-colors duration-300">
                    For Corporate or Group Event:
                  </p>
                  <p>+880 1730 793555</p>

                  <p className="pt-2 text-xs font-mono select-all">
                    Email: reservations@grandsultanresort.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-primary tracking-wide mb-6 pb-2 border-b border-border/20 transition-colors duration-300">
              Useful links
            </h3>
            <ul className="space-y-3.5 text-sm md:text-base">
              {[
                { label: "Rooms and Suites", path: "/rooms" },
                { label: "Restaurants", path: "/dining" },
                { label: "Meetings & Events", path: "/events" },
                { label: "Recreations", path: "/recreations" },
                { label: "Relaxation", path: "/spa" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-text-muted hover:text-primary transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-primary tracking-wide mb-6 pb-2 border-b border-border/20 transition-colors duration-300">
              Quick links
            </h3>
            <ul className="space-y-3.5 text-sm md:text-base">
              {[
                { label: "Surrounding Us", path: "/surroundings" },
                { label: "Getting There", path: "/location" },
                { label: "Photo Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
                { label: "Guest Policy", path: "/policy" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-text-muted hover:text-primary transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-primary tracking-wide mb-6 pb-2 border-b border-border/20 transition-colors duration-300">
              Follow us
            </h3>
            <div className="grid grid-cols-3 gap-3 w-fit">
              {[
                {
                  icon: <FaFacebookF />,
                  color: "hover:text-blue-600",
                  href: "#",
                },
                {
                  icon: <FaXTwitter />,
                  color: "hover:text-black dark:hover:text-white",
                  href: "#",
                },
                {
                  icon: <FaInstagram />,
                  color: "hover:text-pink-500",
                  href: "#",
                },
                {
                  icon: <FaLinkedinIn />,
                  color: "hover:text-blue-700",
                  href: "#",
                },
                { icon: <FaYoutube />, color: "hover:text-red-600", href: "#" },
                {
                  icon: <FaTripadvisor />,
                  color: "hover:text-green-600",
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-background border border-border/40 text-text-muted rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-card hover:border-primary/50 ${social.color}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-text-muted/60 text-xs mt-16 pt-8 border-t border-border/40 font-light transition-colors duration-300">
          © {new Date().getFullYear()} TRAC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
