
import React from "react";
import { motion } from "framer-motion";

// Display ONLY real logos—no placeholder/photo stock/people/table images!
const logos = [
  { src: "/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png", alt: "Omnify", name: "Omnify" },
  { src: "/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png", alt: "ECL", name: "ECL" },
  { src: "/lovable-uploads/c7235eb5-75b3-4b4a-af50-a08d5ef3e81f.png", alt: "Paddle", name: "Paddle" },
  { src: "/lovable-uploads/40fe0852-dba5-4ead-91ce-aa788e369c88.png", alt: "Xoxoday", name: "Xoxoday" },
  { src: "/lovable-uploads/f3dcc9f9-660d-4b80-bd06-2f8d3870d43b.png", alt: "Alpha", name: "Alpha" },
  { src: "/lovable-uploads/e4f2ce9b-77cb-407e-990c-95e090726004.png", alt: "Stealth B2B", name: "Stealth B2B" },
];

const logoContainerAnim = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const logoAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const StartupsSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gtm-dark mb-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        🚀 Startups We've Worked With
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.18, duration: 0.65 }}
      >
        From early traction to repeatable GTM — we’ve supported high-growth startups at key inflection points.<br />
        <span className="text-gray-500">Trusted by teams backed by Sequoia, Accel, Lightspeed, and more.</span>
      </motion.p>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 md:gap-10 items-center justify-items-center"
        variants={logoContainerAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.alt}
            variants={logoAnim}
            className="relative group cursor-pointer flex flex-col items-center justify-center"
          >
            <motion.img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-32 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
              draggable={false}
              style={{ maxHeight: "64px" }}
            />
            <motion.div
              className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 bg-gtm-pink/90 text-white text-xs px-3 py-1.5 rounded-lg shadow opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap"
            >
              View Case Study &rarr;
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default StartupsSection;

