
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';

// Geometry utilities for orbit - adjusted for perfect centering
const visualSize = 528; // container size
const center = visualSize / 2;
const moduleRadius = 192; // orbit radius
const centerTileSize = 146; // central card size
const moduleCardW = 128;
const moduleCardH = 78;

// Utility to get x/y for a given angle/radius - kept the same
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
      className="relative mx-auto transition-all duration-300"
      style={{ 
        width: visualSize,
        height: visualSize,
        minHeight: 320
      }}
    >
      {/* Radial glowing background */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at 50% 50%,rgba(255,78,153,0.12) 0%,rgba(254,185,232,0.08) 50%,rgba(255,255,255,0.03) 95%)',
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

      {/* Orbit ring with soft pulse - centered */}
      <motion.div
        className="absolute rounded-full border border-pink-200/25 pointer-events-none"
        style={{
          width: moduleRadius * 2 + 40,
          height: moduleRadius * 2 + 40,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
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
          const bufferX = center + (x / moduleRadius) * centerRadius;
          const bufferY = center + (y / moduleRadius) * centerRadius;
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
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 20,
              delay: idx * 0.10 + 0.12
            }}
            whileHover={{
              scale: 1.055,
              boxShadow: '0 0 28px 2px #ffe1ee99',
              filter: 'brightness(1.06)'
            }}
            tabIndex={0}
            aria-label={def.label}
          >
            <div className="w-full h-full rounded-xl bg-white/98 border border-pink-50 glass-morphism flex flex-col items-center justify-center transition-shadow relative shadow-[0_4px_28px_-8px_#ffdcec22] group-hover:ring-2 group-hover:ring-gtm-pink/40 group-active:scale-[1.03]">
              <div className="mb-1">{def.icon}</div>
              <div className="text-xs font-semibold text-center text-gray-800">{def.label}</div>
              <div className="text-[10px] text-gray-500 text-center leading-tight">{def.description}</div>
            </div>
          </motion.a>
        );
      })}

      {/* Center GTM logo - perfectly centered */}
      <motion.div
        className="absolute z-20"
        style={{
          width: centerTileSize,
          height: centerTileSize,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 210,
          damping: 23,
          delay: 0.19,
        }}
      >
        <motion.div
          className="w-full h-full bg-white/95 rounded-full shadow-lg flex flex-col items-center justify-center"
          style={{
            boxShadow: '0 8px 32px rgba(255, 220, 236, 0.3), 0 0 0 1px rgba(255, 220, 236, 0.5)'
          }}
          whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
        >
          <motion.img
            src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
            alt="GTM Unbound Logo"
            className="h-12 w-12 rounded-full bg-white/80 shadow-sm rotate-[-6deg]"
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
      </motion.div>
    </div>
  );
};

export default GTMDashboard;
