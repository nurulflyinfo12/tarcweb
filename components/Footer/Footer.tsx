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

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Contact */}
          <div>
            <img 
              src="/logo.png" 
              alt="Trace Resort" 
              className="w-40 mb-6 brightness-110" 
            />

            <div className="space-y-4 text-sm text-foreground/90">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <p>Srimongal, Moulvibazar - 3210, Bangladesh</p>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-primary" />
                <div>
                  <p>+880 2997 738501-3 (Resort Office)</p>
                  <p>+880 9678 782929 (Corporate Office)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCalendarAlt className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">For Reservation:</p>
                  <p>+880 9678 785959 / +880 1730 793501-4</p>

                  <p className="font-medium mt-2">
                    For Corporate or Group Event:
                  </p>
                  <p>+880 1730 793555</p>

                  <p className="mt-2">
                    Email: reservations@grandsultanresort.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">
              Useful links
            </h3>

            <ul className="space-y-4 text-lg">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Rooms and Suites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Meetings & Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Recreations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Relaxation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">
              Quick links
            </h3>

            <ul className="space-y-4 text-lg">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Surrounding Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Getting There
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Guest Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">
              Follow us
            </h3>

            <div className="grid grid-cols-3 gap-4 w-fit">
              <a
                href="#"
                className="w-14 h-14 bg-white rounded flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF className="text-blue-600 text-2xl" />
              </a>

              <a
                href="#"
                className="w-14 h-14 bg-white rounded flex items-center justify-center hover:scale-110 transition"
              >
                <FaXTwitter className="text-black text-2xl" />
              </a>

              <a
                href="#"
                className="w-14 h-14 bg-white rounded flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram className="text-pink-500 text-2xl" />
              </a>

              <a
                href="#"
                className="w-14 h-14 bg-white rounded flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn className="text-blue-700 text-2xl" />
              </a>

              <a
                href="#"
                className="w-14 h-14 bg-white rounded flex items-center justify-center hover:scale-110 transition"
              >
                <FaYoutube className="text-red-600 text-2xl" />
              </a>

              <a
                href="#"
                className="w-14 h-14 bg-white rounded flex items-center justify-center hover:scale-110 transition"
              >
                <FaTripadvisor className="text-green-600 text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-foreground/60 text-sm mt-16 pt-8 border-t border-border/50">
          © 2026 Trace Resort. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;