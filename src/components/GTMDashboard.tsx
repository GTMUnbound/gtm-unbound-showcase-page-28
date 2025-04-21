
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  BookOpen, Users, Settings, Target, Globe, Ticket
} from 'lucide-react';

// --- MODULES DATA ---
const moduleDefs = [
  {
    icon: <BookOpen className="h-7 w-7 text-gtm-pink" />,
    label: "Playbooks",
    angle: 270, // Top
  },
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    label: "Experts",
    angle: 210, // Top Left
  },
  {
    icon: <Settings className="h-7 w-7 text-amber-500" />,
    label: "Tools",
    angle: 150, // Bottom Left
  },
  {
    icon: <Target className="h-7 w-7 text-green-500" />,
    label: "Execution",
    angle: 90, // Bottom
  },
  {
    icon: <Globe className="h-7 w-7 text-cyan-500" />,
    label: "Channels",
    angle: 30, // Bottom Right
  },
  {
    icon: <Ticket className="h-7 w-7 text-purple-500" />,
    label: "Events",
    angle: 330, // Top Right
  },
];

function getPos(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180); // 0deg is top
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

// Make diagram larger and modules farther from center for more breathing space
const visualSize = 460; // px, increased for more white space
const center = visualSize / 2;
const moduleRadius = 188; // px, increased for longer connector lines

const GTMDashboard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.16,
      }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 12 },
    visible: (i: number) => ({
      opacity: 1, scale: 1, y: 0,
      transition: {
        type: "spring",
        stiffness: 63,
        damping: 18,
        delay: 0.28 + i * 0.08,
      }
    }),
    hover: {
      scale: 1.06,
      boxShadow: "0 4px 22px #fbc2eb55, 0 0 17px #e64ba155",
      zIndex: 40,
      transition: { type: "spring", stiffness: 250, damping: 14 }
    }
  };

  // Calculate module positions in px, relative to SVG center
  const modulesWithPos = moduleDefs.map((mod, idx) => {
    const { x, y } = getPos(mod.angle, moduleRadius);
    return {
      ...mod,
      x: center + x,
      y: center + y,
      idx
    };
  });

  return (
    <div className="flex flex-col items-center md:items-end w-full">
      {/* Optional top caption */}
      <h4 className="text-xs md:text-sm text-gray-500 mb-5 md:mb-7 text-center font-medium whitespace-nowrap">
        What Powers GTM Unbound<br />
        <span className="font-normal text-gray-400">Structured execution, powered by operators — not chaos.</span>
      </h4>
      {/* Desktop/Tablet Visual */}
      <motion.div
        className="relative hidden md:block mx-auto"
        style={{
          width: `${visualSize}px`,
          height: `${visualSize}px`,
          minWidth: `${visualSize}px`,
          minHeight: `${visualSize}px`,
          maxWidth: "100vw"
        }}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* SVG connectors */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" width={visualSize} height={visualSize}>
          <defs>
            <radialGradient id="lineGlow" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#e0a0d8" stopOpacity="0.18" />
              <stop offset="85%" stopColor="#e64ba1" stopOpacity="0.29" />
              <stop offset="100%" stopColor="#e64ba100" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="moduleLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e64ba1" />
              <stop offset="100%" stopColor="#c1c0ee" />
            </linearGradient>
          </defs>
          {modulesWithPos.map((mod, i) => (
            <motion.line
              key={mod.label}
              x1={center} y1={center}
              x2={mod.x} y2={mod.y}
              stroke="url(#moduleLine)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.1, delay: 0.16 + i * 0.08 }}
              style={{
                filter: "drop-shadow(0 0 7px #fbc2eb66)"
              }}
            />
          ))}
        </svg>
        {/* Center Tile: GTM Unbound logo + label */}
        <motion.div
          className="absolute top-1/2 left-1/2 z-30 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/90 shadow-2xl border border-pink-100 flex flex-col items-center justify-center"
          style={{
            boxShadow: "0 0 50px 11px #ffb0e733, 0 12px 60px #fbc2eb33, 0 0 0 7px #f8e8f822, 0 1px 20px #e64ba144"
          }}
          whileHover={{
            boxShadow: "0 0 70px 16px #E64BA199, 0 10px 54px #fbc2eb44"
          }}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.29, duration: 0.44 } }}
        >
          <div className="h-20 w-20">
            {/* Use the GTM Unbound logo as used in navbar, retina crisp */}
            <img
              src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
              alt="GTM Unbound Logo"
              className="h-full w-full object-contain rounded-full mx-auto shadow-lg bg-white border-4 border-white"
              style={{
                filter: "drop-shadow(0 0 14px #e64ba199)"
              }}
              draggable={false}
            />
          </div>
          <p className="mt-4 text-xl font-bold text-gtm-pink tracking-tight text-center drop-shadow-sm">
            GTM Unbound
          </p>
        </motion.div>
        {/* Radially placed modules */}
        {modulesWithPos.map((mod) => (
          <motion.div
            key={mod.label}
            className="absolute z-20"
            style={{
              top: mod.y - 44,
              left: mod.x - 64,
              width: 128,
              height: 88,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            variants={moduleVariants}
            animate={controls}
            custom={mod.idx}
            whileHover="hover"
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3 border border-gray-100 transition-all duration-300 group"
              style={{
                minWidth: 100,
                boxShadow: "0 3px 22px #fbc2eb1A"
              }}
            >
              {mod.icon}
              <span className="text-base font-bold text-gray-700">{mod.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {/* Mobile Visual */}
      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center">
          {/* GTM Unbound hub */}
          <div
            className="mx-auto mt-2 mb-6 w-24 h-24 rounded-2xl bg-white/90 shadow-lg border border-pink-100 flex flex-col items-center justify-center"
            style={{
              boxShadow: "0 0 20px 2px #ffb0e777, 0 4px 20px #fbc2eb33"
            }}
          >
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-inner border-4 border-white">
              <img
                src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
                alt="GTM Unbound Logo"
                className="w-12 h-12 object-contain mx-auto"
                style={{
                  filter: "drop-shadow(0 0 7px #e64ba199)"
                }}
                draggable={false}
              />
            </div>
            <div className="mt-2 text-lg font-bold text-gtm-pink text-center">
              GTM Unbound
            </div>
          </div>
          {/* Modules grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto">
            {moduleDefs.map((mod, idx) => (
              <motion.div
                key={mod.label}
                className="bg-white rounded-lg shadow px-3 py-3 flex items-center gap-2 border border-gray-100 hover:shadow-xl transition-all duration-300 min-w-[100px] mb-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.44, delay: idx * 0.07 + 0.24 }}
              >
                {mod.icon}
                <span className="text-sm font-bold text-gray-700">{mod.label}</span>
              </motion.div>
            ))}
          </div>
          {/* Subtle connector mimic (vertical lines on mobile, aesthetic only) */}
          <div className="w-[3px] h-8 mt-2 mx-auto rounded-full bg-pink-300 opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default GTMDashboard;

