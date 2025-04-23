import React, { useState } from "react";
import { motion } from "framer-motion";
import { Focus } from "lucide-react";

// Define module items with precise angular positions based on the screenshot
const moduleItems = [
  {
    label: "Playbooks",
    description: "Startup-proven GTM strategies",
    position: { angle: 270 }, // Top
    icon: "📘"
  },
  {
    label: "Channels",
    description: "Figure out what actually converts",
    position: { angle: 342 }, // Top right
    icon: "🌐"
  },
  {
    label: "Events",
    description: "Founder circles, mixers & more",
    position: { angle: 54 }, // Right
    icon: "📅"
  },
  {
    label: "Execution",
    description: "Move from plan to traction",
    position: { angle: 126 }, // Bottom right
    icon: "🔧"
  },
  {
    label: "Experts",
    description: "Access vetted GTM minds",
    position: { angle: 198 }, // Bottom left
    icon: "👨‍💼"
  }
];

// Keep existing getOrbitPosition function

function getOrbitPosition(radius: number, angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

const GTMHeroVisualDynamicIntro = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  // Keep existing responsive setup
  const [sm, setSm] = useState(false);
  React.useEffect(() => {
    const handler = () => setSm(window.innerWidth < 640);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Adjusted sizes to match the screenshot
  const ORBIT_RADIUS = sm ? 140 : 220;
  const CENTER_SIZE = sm ? 130 : 180;
  const PANEL_W = sm ? 120 : 140;
  const PANEL_H = sm ? 70 : 85;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center select-none mx-auto">
      {/* Orbital ring with subtle glow */}
      <motion.div
        className="absolute rounded-full glass-morphism bg-white/5 border border-pink-100/30"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.8, 0.9, 0.8],
          boxShadow: [
            "0 0 40px 0px rgba(255,180,194,0.15)",
            "0 0 50px 2px rgba(255,180,194,0.2)",
            "0 0 40px 0px rgba(255,180,194,0.15)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: sm ? 360 : 500,
          height: sm ? 360 : 500,
        }}
      />

      {/* GTM Unbound center logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          stiffness: 100,
          damping: 20,
        }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm"
          style={{
            width: CENTER_SIZE,
            height: CENTER_SIZE,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,220,236,0.4)",
            boxShadow: "0 4px 24px rgba(255,220,236,0.25), 0 0 12px rgba(255,192,203,0.1) inset"
          }}
        >
          <motion.div
            className="flex items-center justify-center mb-2"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <Focus className="w-12 h-12 md:w-14 md:h-14 text-gtm-pink" />
          </motion.div>
          <span className="block font-bold text-xl text-gtm-dark opacity-90">
            GTM Unbound
          </span>
          <span className="block text-sm text-gray-500 mt-0.5">
            Systems. Strategy. Execution.
          </span>
        </motion.div>
      </motion.div>

      {/* Orbiting modules */}
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
              transform: "translate(-50%, -50%) rotate(" + item.position.angle + "deg)",
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: 1,
              scale: hoveredIdx === idx ? 1.15 : 1,
              filter: hoveredIdx === idx ? "blur(0px) brightness(1.15)" : "blur(0px)",
              boxShadow: hoveredIdx === idx
                ? "0 8px 28px 3px #ffc5e5, 0 0 14px #fde1d3"
                : "0 3px 15px 2px #fed7e2b2",
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
                ${hoveredIdx === idx ? "ring-2 ring-gtm-pink/80" : ""}
              `}
              style={{
                transform: "rotate(-" + item.position.angle + "deg)", // Counter-rotate the content
              }}
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

      {/* Connector lines */}
      <svg className="absolute inset-0 w-full h-full z-1 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,107,157,0.5)" />
            <stop offset="100%" stopColor="rgba(255,107,157,0.15)" />
          </linearGradient>
          
          {/* Add glow filter for lines */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
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
              strokeWidth="1.8"
              strokeDasharray="3,3"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.7, 0.9, 0.7],
                strokeWidth: ["1.8px", "2.2px", "1.8px"]
              }}
              transition={{ 
                delay: 0.5 + idx * 0.1, 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default GTMHeroVisualDynamicIntro;
