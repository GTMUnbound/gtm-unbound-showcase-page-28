
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Focus } from "lucide-react";

// Panel content config
const ORBIT_PANELS = [
  {
    label: "Matched Expert Assigned",
    desc: "Expert matched to your GTM stage.",
  },
  {
    label: "Strategy Sprint in Progress",
    desc: "Live execution with clear goals.",
  },
  {
    label: "Channel Breakdown: SEO + Paid",
    desc: "Growth channels mapped, tracked.",
  },
  {
    label: "Launch Checklist Ready",
    desc: "Your GTM roadmap, step by step.",
  },
];

// Used for circular positioning
const getOrbitPosition = (radius: number, angleDeg: number) => {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};

const GTMHeroVisualDynamicIntro = () => {
  // For hover state
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Responsive orbit radii
  const sm = window.innerWidth < 640;
  const ORBIT_RADIUS = sm ? 90 : 120;

  return (
    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex items-center justify-center select-none mx-auto md:mx-0">
      {/* Background glassmorphic orb */}
      <motion.div
        className="absolute rounded-full glass-morphism bg-white/10 border-[2.5px] border-pink-100 shadow-[0_0_50px_2px_rgba(255,180,194,0.18)]"
        initial={{ scale: 0.8, opacity: 0.7, filter: "blur(1px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0.5px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: sm ? 180 : 260,
          height: sm ? 180 : 260,
        }}
      />
      {/* Center GTM OS */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 0.3, stiffness: 100, damping: 18 }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 8px 0 #ffb4c2, 0 0 0px #fde1d3",
              "0 0 18px 2px #ffb4c2cc,0 0 0px #fde1d3",
              "0 0 8px 0 #ffb4c2, 0 0 0px #fde1d3",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
          style={{
            width: sm ? 85 : 130,
            height: sm ? 85 : 130,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #fff7f9 60%, #fde1d3 100%)",
            boxShadow:
              "0 2px 28px 4px #ffd4e5a0, 0 0 30px #fde1d3aa inset",
            border: "2px solid #ffd9e7cc",
            filter: "blur(0.25px)",
          }}
        >
          {/* GTM Unbound Icon in center */}
          <div className="flex items-center justify-center mb-1">
            <Focus className="w-8 h-8 md:w-10 md:h-10 text-gtm-pink border-2 border-pink-200 rounded-full bg-white/40 shadow-[0_0_15px_1px_#ffdcec]" />
          </div>
          <span className="block font-bold text-base md:text-lg text-gtm-dark opacity-90">GTM OS</span>
        </motion.div>
      </motion.div>
      {/* Orbiting panels */}
      {ORBIT_PANELS.map((panel, idx) => {
        // Circulate evenly around the circle (0°, 90°, 180°, 270°)
        const angle = 360 / ORBIT_PANELS.length * idx - 90;
        const { x, y } = getOrbitPosition(ORBIT_RADIUS, angle);

        return (
          <motion.div
            key={panel.label}
            className={`
              absolute flex flex-col items-center justify-center cursor-pointer
              transition-all
              ${hoveredIdx === idx ? "z-20 scale-110 shadow-2xl" : "z-5"}
            `}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              width: sm ? 120 : 154,
              height: sm ? 66 : 76,
            }}
            initial={{
              opacity: 0,
              scale: 0.6,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              scale: hoveredIdx === idx ? 1.12 : 1,
              boxShadow: hoveredIdx === idx
                ? "0 4px 22px 2px #ffc1e5, 0 0 18px #fde1d3"
                : "0 1.5px 14px 1.5px #fed7e2b6",
            }}
            transition={{
              delay: 0.5 + idx * 0.2,
              type: "spring",
              stiffness: 170,
              damping: 19,
              duration: 0.7,
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className={`
              w-full h-full flex flex-col justify-center items-center glass-morphism
              border border-pink-200/70 bg-white/35 backdrop-blur-xl
              shadow-lg rounded-xl transition-shadow
              ${hoveredIdx === idx ? "ring-2 ring-gtm-pink/60" : ""}
              `}
            >
              <span
                className="block text-[15px] md:text-base font-semibold text-gtm-dark drop-shadow-pink text-center"
                style={{
                  textShadow:
                    hoveredIdx === idx
                      ? "0 0 8px #ffdde1"
                      : "0 0 2px #fde1d3",
                }}
              >
                {panel.label}
              </span>
              <motion.span
                className={`block text-xs text-pink-400 pt-2 font-medium`}
                initial={false}
                animate={{
                  opacity: hoveredIdx === idx ? 1 : 0,
                  height: hoveredIdx === idx ? "1.5em" : 0,
                }}
                transition={{ duration: 0.2 }}
                aria-hidden={hoveredIdx !== idx}
              >
                {panel.desc}
              </motion.span>
            </div>
          </motion.div>
        );
      })}
      {/* Subtle orbiting animation (whole group) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          rotate: [0, 8, -6, 0], // Adds a slow tilting effect
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        style={{
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default GTMHeroVisualDynamicIntro;
