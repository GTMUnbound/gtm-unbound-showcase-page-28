import React from "react";
import { motion } from "framer-motion";

// KEEP ONLY the key logos: Omnify, ECL, Paddle
const logos = [
  { src: "/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png", alt: "Omnify", name: "Omnify" },
  { src: "/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png", alt: "ECL", name: "ECL" },
  { src: "/lovable-uploads/c7235eb5-75b3-4b4a-af50-a08d5ef3e81f.png", alt: "Paddle", name: "Paddle" }
];

const logoAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const StartupsSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gtm-dark mb-4 flex items-center gap-2"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <span role="img" aria-label="rocket">🚀</span> Startups We've Worked With
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.18, duration: 0.65 }}
      >
        From early traction to repeatable GTM — we've supported high-growth startups at key inflection points.<br />
        <span className="text-gray-500">Trusted by teams backed by Sequoia, Accel, Lightspeed, and more.</span>
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center mb-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.alt}
            variants={logoAnim}
            className="relative group flex flex-col items-center justify-center"
          >
            <motion.img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-36 object-contain transition-all duration-300" 
              // Removed: filter grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:shadow-pink-100
              draggable={false}
              style={{ maxHeight: "64px" }}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Optional: Show More case studies in future */}
      {/* <div className="text-center text-pink-500 mt-6 cursor-pointer text-sm font-medium hover:underline">Show More...</div> */}
    </div>
  </section>
);

export default StartupsSection;
