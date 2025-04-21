
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const bullets = [
  "Matched GTM Expert based on your company, market, and goals",
  "Recurring GTM sessions (strategy breakdowns, experiment design, narrative testing)",
  "Live roadmap with OKRs, hypotheses, positioning updates",
  "Shared context over time — no starting over every call",
  "Strategic depth that compounds"
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ExpertLedSection = () => (
  <section className="py-16 sm:py-24 bg-[#FFDEE2]/70">
    <motion.div
      className="max-w-3xl mx-auto rounded-xl shadow-md bg-white bg-opacity-80 p-10 md:p-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gtm-dark mb-4">
        🧠 Expert-Led — Go Further, With GTM That Compounds
      </h2>
      <div className="text-lg text-gray-600 mb-2 italic">
        You don’t need another opinion.<br />
        You need someone who will go deep, stay close, and bring clarity over time.
      </div>
      <p className="text-base md:text-lg text-gray-700 mb-7">
        We pair you with GTM experts who guide biweekly strategy sessions, co-own experiments, and evolve your roadmap with you — month after month.
      </p>
      <motion.ul
        className="space-y-4 mt-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        {bullets.map((b, i) => (
          <motion.li
            key={i}
            variants={item}
            className="flex items-start gap-3"
          >
            <span>
              <CheckCircle className="h-5 w-5 text-gtm-pink mt-[2px]" />
            </span>
            <span className="text-gray-800 text-base">{b}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </section>
);

export default ExpertLedSection;
