
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Focus } from "lucide-react";

// Define module items - removed duplicates and adjusted positions
const moduleItems = [
  {
    label: "Channels",
    description: "Figure out what actually converts",
    position: { angle: 0 },
    icon: "📢"
  },
  {
    label: "Events",
    description: "Founder circles, mixers & more",
    position: { angle: 72 },
    icon: "📅"
  },
  {
    label: "Playbooks",
    description: "Startup-proven GTM strategies",
    position: { angle: 144 },
    icon: "📘"
  },
  {
    label: "Execution",
    description: "Move from plan to traction",
    position: { angle: 216 },
    icon: "🔧"
  },
  {
    label: "Experts",
    description: "Benefit from GTM wisdom",
    position: { angle: 288 },
    icon: "👨‍💼"
  }
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Responsive orbit radii
  const [sm, setSm] = useState(false);
  React.useEffect(() => {
    const handler = () => setSm(window.innerWidth < 640);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  
  // Adjusted sizes for better visual hierarchy
  const ORBIT_RADIUS = sm ? 130 : 200;
  const CENTER_SIZE = sm ? 120 : 160;
  const PANEL_W = sm ? 110 : 130;
  const PANEL_H = sm ? 65 : 75;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center select-none mx-auto">
      {/* Soft background orbital glow */}
      <motion.div
        className="absolute rounded-full glass-morphism bg-white/10 border-[2.5px] border-pink-100 shadow-[0_0_64px_2px_rgba(255,180,194,0.22)]"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: sm ? 340 : 460,
          height: sm ? 340 : 460,
        }}
      />

      {/* Center GTM OS - made more prominent */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.22,
          stiffness: 100,
          damping: 18,
        }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center shadow-[0_2px_24px_2px_#ffe1ee7e] backdrop-blur-md"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 12px 3px #ffd5e7, 0 0 0 #fde1d3",
              "0 0 22px 8px #ffb4c270,0 0 3px #fde1d3",
              "0 0 12px 3px #ffe8ed, 0 0 0 #fde1d3",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          }}
          style={{
            width: CENTER_SIZE,
            height: CENTER_SIZE,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff7f9 68%, #fde5e1 100%)",
            boxShadow: "0 2px 32px 7px #ffd4e52c, 0 0 40px #fde1d39a inset",
            border: "2.5px solid #ffd9e7bb",
          }}
        >
          <motion.div
            className="flex items-center justify-center mb-2"
            animate={{ rotate: [0, 18, -18, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <Focus className="w-10 h-10 md:w-12 md:h-12 text-gtm-pink border-2 border-pink-200 rounded-full bg-white/40 shadow-[0_0_18px_3px_#ffdcec]" />
          </motion.div>
          <span className="block font-bold text-lg md:text-xl text-gtm-dark opacity-90">
            GTM Unbound
          </span>
          <span className="block text-sm text-gray-500">
            Systems. Strategy. Execution
          </span>
        </motion.div>
      </motion.div>

      {/* Orbiting modules with evenly distributed spacing */}
      {moduleItems.map((item, idx) => {
        const { x, y } = getOrbitPosition(ORBIT_RADIUS, item.position.angle);

        return (
          <motion.div
            key={item.label}
            className={`
              absolute flex flex-col items-center justify-center
              cursor-pointer drop-shadow-lg
              transition-all duration-300
              ${hoveredIdx === idx ? "z-20" : "z-10"}
            `}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: PANEL_W,
              height: PANEL_H,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: 1,
              scale: hoveredIdx === idx ? 1.12 : 1,
              filter: hoveredIdx === idx
                ? "blur(0px) brightness(1.13)"
                : "blur(0px)",
              boxShadow: hoveredIdx === idx
                ? "0 7px 24px 1px #ffc5e5, 0 0 11px #fde1d3"
                : "0 3px 13px 2px #fed7e2b2",
            }}
            transition={{
              delay: 0.33 + idx * 0.14,
              type: "spring",
              stiffness: 170,
              damping: 19,
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div
              className={`
                w-full h-full flex flex-col justify-center items-center 
                border border-pink-100 bg-white/95 backdrop-blur-lg
                shadow-lg rounded-xl transition-shadow
                ${hoveredIdx === idx ? "ring-2 ring-gtm-pink/70" : ""}
              `}
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <span className="block text-sm font-semibold text-gtm-dark text-center">
                {item.label}
              </span>
              <motion.span
                className="block text-xs text-gray-600 pt-1 px-2 font-medium text-center"
                initial={false}
                animate={{
                  opacity: hoveredIdx === idx ? 1 : 0,
                  height: hoveredIdx === idx ? "auto" : "0",
                }}
                transition={{ duration: 0.28 }}
              >
                {item.description}
              </motion.span>
            </div>
          </motion.div>
        );
      })}

      {/* Connector lines with improved visibility */}
      <svg className="absolute inset-0 w-full h-full z-1 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,107,157,0.3)" />
            <stop offset="100%" stopColor="rgba(255,107,157,0.1)" />
          </linearGradient>
        </defs>
        
        {moduleItems.map((item, idx) => {
          const { x: moduleX, y: moduleY } = getOrbitPosition(ORBIT_RADIUS, item.position.angle);
          const centerX = "50%";
          const centerY = "50%";
          const targetX = `calc(50% + ${moduleX}px)`;
          const targetY = `calc(50% + ${moduleY}px)`;
          
          return (
            <motion.line
              key={`line-${idx}`}
              x1={centerX}
              y1={centerY}
              x2={targetX}
              y2={targetY}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default GTMHeroVisualDynamicIntro;
