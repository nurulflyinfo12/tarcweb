"use client";

import { motion } from "framer-motion";

interface CallToActionProps {
  title: string;
  description: string;
  phone: string;
}

export default function CallToAction({
  title,
  description,
  phone,
}: CallToActionProps) {
  return (
    <section className="bg-secondary py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-light text-white mb-4">
          {title}
        </h2>

        <p className="text-white/80 mb-8 text-lg">
          {description}
        </p>

        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="inline-block bg-primary text-black font-semibold px-10 py-4 rounded transition-all duration-300 hover:scale-105"
        >
          {phone}
        </a>
      </motion.div>
    </section>
  );
}