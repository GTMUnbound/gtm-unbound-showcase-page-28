
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GTM Unbound helped us go from noise to clarity in 4 weeks.",
    name: "SaaS Founder, Series A"
  },
  {
    quote: "The strategy sessions were 🔥. We actually hit our MQL goal for the first time.",
    name: "B2B Fintech Founder"
  },
  {
    quote: "This isn’t advice. It’s actual hands-on GTM help.",
    name: "Healthtech GTM Lead"
  }
];

const anim = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

const FounderTestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active]);

  // Manual nav handlers
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-pink-100 via-rose-50 to-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gtm-dark mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          🗣️ What Founders Are Saying
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="bg-white/80 shadow-md rounded-xl px-6 py-9 flex flex-col items-center relative min-h-[180px]"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={anim}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Quote className="absolute -top-7 left-2 text-gtm-pink/20" size={72} />
              <p className="text-lg md:text-xl font-medium text-gtm-dark mb-5 relative z-10 leading-relaxed border-b-2 border-gtm-pink/20 pb-2">
                <span className="inline-block">{testimonials[active].quote}</span>
              </p>
              <span className="text-gtm-pink font-semibold">{testimonials[active].name}</span>
            </motion.div>
          </AnimatePresence>
          {/* Navigation dots/arrows */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gtm-pink/10 transition"
              aria-label="Previous"
              type="button"
            >
              <span className="sr-only">Previous Testimonial</span>
              <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="12 5 6 9.5 12 14" />
              </svg>
            </button>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full ${active === idx ? "bg-gtm-pink" : "bg-gray-300"} transition`}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial #${idx + 1}`}
                type="button"
              />
            ))}
            <button
              onClick={next}
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gtm-pink/10 transition"
              aria-label="Next"
              type="button"
            >
              <span className="sr-only">Next Testimonial</span>
              <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="7 5 13 9.5 7 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderTestimonialsSection;
