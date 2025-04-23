
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const cardIcons = [
  <span className="text-pink-500 text-3xl" key="pin">📍</span>,
  <span className="text-gtm-dark text-3xl" key="link">🔗</span>,
  <span className="text-gtm-pink text-3xl" key="rocket">🚀</span>,
  <span className="text-blue-500 text-3xl" key="chart">📊</span>
];

// Journey step info
const journeySteps = [
  {
    title: "GTM Diagnostic",
    description: "We begin with a signal-based diagnostic to assess your funnel, channels, ICP, and current growth stack — all within 7 days.",
  },
  {
    title: "Matched Expert Onboarding",
    description: "Based on your company's stage, market, and GTM challenges, we match you with a vetted expert who's actually built GTM systems before.",
  },
  {
    title: "Sprint Launch & Tracking",
    description: "We kick off fast, focused GTM sprints aligned with your OKRs – tactical builds, not abstract recommendations.",
  },
  {
    title: "Roadmap Co-Ownership",
    description: "Your expert doesn't disappear after one call. We work together to co-own your GTM roadmap and drive traction over time.",
  },
];

const connectorAnim = {
  initial: { width: "0%" },
  animate: { width: "100%" },
};

const dotAnim = {
  initial: { left: "0%" },
  animate: { left: "100%" },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } }
};

type AnimatedJourneyStepsProps = {
  onStepSelect?: (index: number) => void;
  selectedStep?: number | null;
  openModal?: boolean;
  setSelectedJourneyStep?: (index: number | null) => void;
};

const AnimatedJourneySteps: React.FC<AnimatedJourneyStepsProps> = ({ onStepSelect, selectedStep, openModal, setSelectedJourneyStep }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <div ref={sectionRef} className="w-full flex flex-col relative">
      {/* Cards with staggered fade-in/slide-up */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-4xl mx-auto mb-10"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {journeySteps.map((step, idx) => (
          <motion.button
            key={idx}
            type="button"
            variants={cardAnim}
            whileHover={{
              y: -7,
              boxShadow: "0 0 0 4px rgba(252, 110, 151, 0.13)",
              scale: 1.055,
              transition: { duration: 0.22 },
            }}
            whileTap={{ scale: 0.97 }}
            onClick={onStepSelect ? () => onStepSelect(idx) : undefined}
            className={cn(
              "flex flex-col items-center text-center p-6 md:p-7 rounded-2xl bg-white border border-gray-100 shadow-sm transition cursor-pointer outline-none focus:ring-2 focus:ring-pink-200 relative",
              "group",
              selectedStep === idx && "ring-2 ring-gtm-pink"
            )}
            aria-label={`Step ${idx+1}: ${step.title}`}
          >
            <motion.div
              className="mb-3"
              whileHover={{ rotate: idx === 2 ? 14 : 0, scale: 1.14 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              {cardIcons[idx]}
            </motion.div>
            <div className="font-semibold text-gtm-dark mb-1 leading-tight text-base md:text-lg">{step.title}</div>
            <div className="text-sm text-gray-500">{step.description}</div>
            {/* Subtle soft glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1, 
                boxShadow: "0 4px 44px 0px #fbc2eb4c, 0 1.5px 12px 1px #fd647964" 
              }}
              transition={{ duration: 0.23, type: "tween" }}
              style={{ zIndex: 0 }}
            />
          </motion.button>
        ))}
      </motion.div>
      {/* Animated connector line with dot */}
      <div className="relative h-7 flex items-center justify-center select-none mb-4">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[82%] h-1 rounded-full bg-gradient-to-r from-pink-300 via-gtm-pink to-gtm-coral"
          variants={connectorAnim}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg,#fbc2eb 0%,#fd6479 42%,#fdba86 100%)",
            filter: "blur(0.5px)",
          }}
        />
        {/* Tracking dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 rounded-full shadow-lg"
          style={{
            background:
              "radial-gradient(circle, #fd6479 65%, #fbc2eb 100%)",
            boxShadow:
              "0 0 2px 1px #fd6479cc, 0 0 22px 5px #fbc2eb79",
          }}
          variants={dotAnim}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 1.2, ease: [0.55, 0, 0.55, 1] }}
        />
      </div>
      {/* CTA Button */}
      <div className="flex justify-center animate-fade-in-slow">
        <motion.button
          className="px-8 py-3 rounded-full bg-gradient-to-r from-gtm-pink to-gtm-coral text-white font-semibold shadow-pink-100 shadow-md border-0 focus:outline-none transition-all duration-300 ease-in-out relative overflow-hidden text-base md:text-lg"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 2px 28px #fd64795e",
          }}
          whileTap={{ scale: 0.99 }}
        >
          <motion.span
            className="mr-2"
            initial={false}
            animate={{ x: [0, 6, 0], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } }}
            style={{ display: "inline-block" }}
          ></motion.span>
          Start With Your GTM Match
          <motion.span
            className="ml-2 inline-block"
            initial={false}
            animate={{ x: [0, 8, 0], transition: { repeat: Infinity, duration: 1.7, ease: "easeInOut" } }}
            aria-hidden="true"
          >
            &rarr;
          </motion.span>
          {/* Subtle animated ripple */}
          <span
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: "radial-gradient(circle at 70% 30%, #fbc2eb44 0%, transparent 80%)",
              opacity: 0.55
            }}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default AnimatedJourneySteps;
