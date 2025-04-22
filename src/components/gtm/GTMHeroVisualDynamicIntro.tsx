
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Focus } from "lucide-react";

const ORBIT_PANELS = [
  {
    label: "Playbooks",
    desc: "Startup-proven GTM strategies",
  },
  {
    label: "Experts",
    desc: "Access vetted GTM minds",
  },
  {
    label: "Execution",
    desc: "Move from plan to traction",
  },
  {
    label: "Channels",
    desc: "Figure out what actually converts",
  },
  {
    label: "Events",
    desc: "Founder circles, mixers & more",
  },
];

// Used for circular positioning
function getOrbitPosition(radius: number, angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

const GTMHeroVisualDynamicIntro = () => {
  // For hover state
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Responsive orbit radii
  // Use window.matchMedia for ssr safety
  const [sm, setSm] = useState(false);
  React.useEffect(() => {
    const handler = () => setSm(window.innerWidth < 640);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  const ORBIT_RADIUS = sm ? 90 : 120;
  const CENTER_SIZE = sm ? 90 : 136;
  const PANEL_W = sm ? 118 : 146;
  const PANEL_H = sm ? 62 : 72;

  const PANEL_ANGLES = [0, 72, 144, 216, 288]; // Even spacing around 360 degrees

  return (
    <div
      className={`
        relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]
        flex items-center 
        ${sm ? "justify-center" : "justify-end md:justify-center"} 
        select-none mx-auto md:mx-0
      `}
    >
      {/* Label for GTM System */}
      <div className="absolute top-0 left-0 w-full text-center mb-2">
        <span className="text-xs font-semibold tracking-wider text-gtm-pink/80 uppercase letter-spacing-wide">
          The GTM System
        </span>
      </div>

      {/* Soft background orbital glow */}
      <motion.div
        className="absolute rounded-full glass-morphism bg-white/10 border-[2.5px] border-pink-100 shadow-[0_0_64px_2px_rgba(255,180,194,0.22)]"
        initial={{ scale: 0.8, opacity: 0.7, filter: "blur(1.5px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0.7px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: sm ? 200 : 285,
          height: sm ? 200 : 285,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated glass "orbit" ring */}
      <motion.div
        className="absolute rounded-full border border-pink-200/20 pointer-events-none"
        style={{
          width: sm ? 240 : 314,
          height: sm ? 240 : 314,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 0 32px 4px #ffdcec45, 0 0 0 32px #fde1d309",
          zIndex: 1,
        }}
        animate={{
          opacity: [0.15, 0.3, 0.2],
          filter: ["blur(1.5px)", "blur(2px)", "blur(1.5px)"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center GTM OS */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring", delay: 0.22, stiffness: 100, damping: 18,
        }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center shadow-[0_2px_24px_2px_#ffe1ee7e] backdrop-blur-md"
          animate={{
            scale: [1, 1.07, 1],
            boxShadow: [
              "0 0 12px 3px #ffd5e7, 0 0 0 #fde1d3",
              "0 0 22px 8px #ffb4c270,0 0 3px #fde1d3",
              "0 0 12px 3px #ffe8ed, 0 0 0 #fde1d3",
            ],
          }}
          transition={{
            repeat: Infinity, duration: 3.5, ease: "easeInOut",
          }}
          style={{
            width: CENTER_SIZE,
            height: CENTER_SIZE,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff7f9 68%, #fde5e1 100%)",
            boxShadow: "0 2px 32px 7px #ffd4e52c, 0 0 40px #fde1d39a inset",
            border: "2.5px solid #ffd9e7bb",
            filter: "blur(0.12px)",
          }}
        >
          {/* GTM Unbound Icon in center */}
          <motion.div
            className="flex items-center justify-center mb-1"
            animate={{ rotate: [0, 18, -18, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <Focus className="w-8 h-8 md:w-10 md:h-10 text-gtm-pink border-2 border-pink-200 rounded-full bg-white/40 shadow-[0_0_18px_3px_#ffdcec]" />
          </motion.div>
          <span className="block font-bold text-base md:text-lg text-gtm-dark opacity-90">
            GTM Unbound
          </span>
        </motion.div>
      </motion.div>

      {/* Connection lines between center and cards */}
      {ORBIT_PANELS.map((panel, idx) => {
        const angle = PANEL_ANGLES[idx];
        const { x, y } = getOrbitPosition(ORBIT_RADIUS, angle);

        return (
          <motion.div
            key={`line-${idx}`}
            className="absolute z-1 pointer-events-none"
            style={{
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 420 420"
              className="absolute inset-0"
            >
              <motion.line
                x1="210"
                y1="210"
                x2={210 + x}
                y2={210 + y}
                stroke="url(#moduleLinePink)"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  delay: 0.5 + idx * 0.1, 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
              />
              <defs>
                <linearGradient id="moduleLinePink" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbc2eb" />
                  <stop offset="100%" stopColor="#e64ba1" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        );
      })}

      {/* Orbiting panels with staggered animation */}
      {ORBIT_PANELS.map((panel, idx) => {
        const angle = PANEL_ANGLES[idx];
        const { x, y } = getOrbitPosition(ORBIT_RADIUS, angle);

        return (
          <motion.div
            key={panel.label}
            className={`
              absolute flex flex-col items-center justify-center
              cursor-pointer drop-shadow-lg
              will-change-transform
              transition-all
              ${hoveredIdx === idx ? "z-20 scale-110 shadow-xl" : "z-10"}
            `}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: PANEL_W,
              height: PANEL_H,
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              opacity: 0,
              scale: 0.4,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: hoveredIdx === idx ? 1.12 : 1,
              filter: hoveredIdx === idx
                ? "blur(0.5px) brightness(1.13)"
                : "blur(0.5px)",
              boxShadow: hoveredIdx === idx
                ? "0 7px 24px 1px #ffc5e5, 0 0 11px #fde1d3"
                : "0 3px 13px 2px #fed7e2b2",
            }}
            transition={{
              delay: 0.33 + idx * 0.14,
              type: "spring",
              stiffness: 170,
              damping: 19,
              duration: 0.77,
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div
              className={`
                w-full h-full flex flex-col justify-center items-center glass-morphism
                border border-pink-100 bg-white/80 backdrop-blur-lg
                shadow-lg rounded-2xl transition-shadow
                ${hoveredIdx === idx ? "ring-2 ring-gtm-pink/70" : ""}
              `}
            >
              <span
                className="block text-[15px] md:text-base font-semibold text-gtm-dark drop-shadow-pink text-center whitespace-pre-line"
                style={{
                  textShadow:
                    hoveredIdx === idx
                      ? "0 0 13px #ffdde1"
                      : "0 0 2px #fde1d3",
                }}
              >
                {panel.label}
              </span>
              <motion.span
                className="block text-xs text-pink-400 pt-1 px-1 font-medium"
                initial={false}
                animate={{
                  opacity: hoveredIdx === idx ? 1 : 0,
                  height: hoveredIdx === idx ? "1.3em" : 0,
                  filter: hoveredIdx === idx ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{ duration: 0.28 }}
                aria-hidden={hoveredIdx !== idx}
              >
                {panel.desc}
              </motion.span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default GTMHeroVisualDynamicIntro;
