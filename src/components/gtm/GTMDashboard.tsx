
import React from 'react';
import { motion } from 'framer-motion';

// Define orbit modules with emoji icons and anchors
const moduleDefs = [
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Playbooks" role="img">📘</span>
    ),
    label: "Playbooks",
    description: "Startup-proven GTM strategies",
    angle: 270,
    color: "text-gtm-pink",
    anchor: "playbooks"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Channels" role="img">🌐</span>
    ),
    label: "Channels",
    description: "Figure out what actually converts",
    angle: 342,
    color: "text-cyan-500",
    anchor: "channels"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Events" role="img">📆</span>
    ),
    label: "Events",
    description: "Founder circles, mixers & more",
    angle: 54,
    color: "text-purple-500",
    anchor: "events"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Execution" role="img">🛠️</span>
    ),
    label: "Execution",
    description: "Move from plan to traction",
    angle: 126,
    color: "text-green-500",
    anchor: "execution"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Experts" role="img">🧑‍💼</span>
    ),
    label: "Experts",
    description: "Access vetted GTM minds",
    angle: 198,
    color: "text-blue-500",
    anchor: "experts"
  }
];

// Geometry utilities for orbit
const visualSize = 528; // slightly larger for balance
const center = visualSize / 2;
const moduleRadius = 192; // radius for orbiting blocks, slightly increased
const centerTileSize = 146;
const moduleCardW = 128;
const moduleCardH = 78;

// Utility to get x/y for a given angle/radius
function getOrbitPosition(angle: number, radius: number) {
  const rad = (angle - 90) * Math.PI / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

const GTMDashboard = () => {
  return (
    <div
      className="relative w-[340px] h-[340px] md:w-[528px] md:h-[528px] flex items-center justify-center mx-auto transition-all duration-300"
      style={{ minHeight: 320 }}
    >
      {/* Radial glowing pink/peach background */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          background: 'radial-gradient(circle at 54% 48%,rgba(255,78,153,0.12) 0%,rgba(254,185,232,0.08) 50%,rgba(255,255,255,0.03) 95%)',
          filter: 'blur(2px)',
          zIndex: 0,
        }}
        initial={{ opacity: 0.85, scale: 0.97 }}
        animate={{
          opacity: [0.85, 1, 0.85],
          scale: [0.97, 1.06, 0.97]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Orbit ring with soft pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full border border-pink-200/25 pointer-events-none"
        style={{
          width: moduleRadius * 2 + 40,
          height: moduleRadius * 2 + 40,
          transform: 'translate(-50%,-50%)',
          boxShadow: '0 0 36px 7px #ffdcec20',
          zIndex: 1,
        }}
        animate={{
          opacity: [0.17, 0.28, 0.17],
          filter: ["blur(1.6px)", "blur(2.2px)", "blur(1.3px)"],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Connector lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
        {moduleDefs.map((def, idx) => {
          const { x, y } = getOrbitPosition(def.angle, moduleRadius);
          const centerRadius = centerTileSize / 2.2;
          // curve: center -> buffer midpt -> card
          const bufferX = center + (x / moduleRadius) * centerRadius;
          const bufferY = center + (y / moduleRadius) * centerRadius;
          // mid curve
          const midX = (bufferX + (center + x)) / 2 + (idx % 2 === 0 ? 10 : -10);
          const midY = (bufferY + (center + y)) / 2 + (idx % 2 === 0 ? -8 : 6);
          return (
            <motion.path
              key={def.label}
              d={`M ${bufferX} ${bufferY} Q ${midX} ${midY} ${center + x} ${center + y}`}
              stroke="#FE58A8"
              strokeWidth="1.3"
              strokeDasharray="2.9,4"
              strokeOpacity="0.23"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.72 }}
              transition={{ duration: 1.7, delay: idx * 0.11 }}
            />
          );
        })}
      </svg>

      {/* Orbit Cards */}
      {moduleDefs.map((def, idx) => {
        const { x, y } = getOrbitPosition(def.angle, moduleRadius);
        return (
          <motion.a
            key={def.label}
            href={`#${def.anchor}`}
            className="absolute z-10 group focus:outline-none"
            style={{
              left: center + x,
              top: center + y,
              width: moduleCardW,
              height: moduleCardH,
              transform: 'translate(-50%,-50%)'
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring", stiffness: 230, damping: 20, delay: idx * 0.10 + 0.12
            }}
            whileHover={{
              scale: 1.055,
              boxShadow: '0 0 28px 2px #ffe1ee99',
              filter: 'brightness(1.06)'
            }}
            tabIndex={0}
            aria-label={def.label}
          >
            <div
              className={`
                w-full h-full rounded-xl bg-white/98 border border-pink-50 glass-morphism flex flex-col items-center justify-center transition-shadow relative
                shadow-[0_4px_28px_-8px_#ffdcec22]
                group-hover:ring-2 group-hover:ring-gtm-pink/40
                group-active:scale-[1.03]
              `}
            >
              <div className="mb-1">{def.icon}</div>
              <div className="text-xs font-semibold text-center text-gray-800">{def.label}</div>
              <div className="text-[10px] text-gray-500 text-center leading-tight">{def.description}</div>
            </div>
          </motion.a>
        );
      })}

      {/* Center logo */}
      <motion.div
        className="absolute z-20 bg-white/95 rounded-full shadow-lg flex flex-col items-center justify-center"
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 210,
          damping: 23,
          delay: 0.19,
        }}
        style={{
          width: centerTileSize,
          height: centerTileSize,
          left: center,
          top: center,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 8px 32px rgba(255, 220, 236, 0.30), 0 0 0 1px rgba(255, 220, 236, 0.16)'
        }}
        whileHover={{ scale: 1.04 }}
      >
        <motion.img
          src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
          alt="GTM Unbound Logo"
          className="h-12 w-12 rounded-full bg-white/80 shadow-sm"
          animate={{ rotate: [0, 12, -12, 0] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="text-sm font-extrabold text-gray-800 mt-2">GTM Unbound</span>
        <span className="text-xs text-gray-400 -mt-0.5">Systems. Strategy. Execution.</span>
      </motion.div>
    </div>
  );
};

export default GTMDashboard;
