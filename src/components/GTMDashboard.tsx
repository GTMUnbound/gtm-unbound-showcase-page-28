
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  BookOpen, Users, Target, Globe, Ticket
} from 'lucide-react';

const moduleDefs = [
  {
    icon: <BookOpen className="h-7 w-7 text-gtm-pink" />,
    label: "Playbooks",
    description: "Startup-proven GTM strategies",
    angle: 270,
  },
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    label: "Experts",
    description: "Access vetted GTM minds",
    angle: 198,
  },
  {
    icon: <Target className="h-7 w-7 text-green-500" />,
    label: "Execution",
    description: "Move from plan to traction",
    angle: 126,
  },
  {
    icon: <Globe className="h-7 w-7 text-cyan-500" />,
    label: "Channels",
    description: "Figure out what actually converts",
    angle: 54,
  },
  {
    icon: <Ticket className="h-7 w-7 text-purple-500" />,
    label: "Events",
    description: "Founder circles, mixers & more",
    angle: 342,
  },
];

function getPos(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

const visualSize = 420;
const center = visualSize / 2;
const moduleRadius = 140;
const centerTileSize = 120;
const moduleCardW = 110;
const moduleCardH = 68;

const GTMDashboard = () => {
  const controls = useAnimation();
  useEffect(() => { controls.start('visible'); }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.085,
        delayChildren: 0.12,
      }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, scale: 0.93, y: 10 },
    visible: (i: number) => ({
      opacity: 1, scale: 1, y: 0,
      transition: {
        type: "spring",
        stiffness: 61,
        damping: 21,
        delay: 0.12 + i * 0.07,
      }
    }),
    hover: {
      scale: 1.06,
      boxShadow: "0 4px 27px #fbc2eb29, 0 0 18px #e64ba122",
      zIndex: 30,
      transition: { type: "spring", stiffness: 180, damping: 17 }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.7,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

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
      <div className="hidden md:block mb-2 text-center w-full">
        <span className="text-xs font-semibold tracking-wider text-gtm-pink/80 uppercase letter-spacing-wide">
          The GTM System
        </span>
      </div>
      <motion.div
        className="relative hidden md:block mx-auto bg-white/90 backdrop-blur-sm"
        style={{
          width: `${visualSize}px`,
          height: `${visualSize}px`,
          minWidth: `${visualSize}px`,
          minHeight: `${visualSize}px`,
          borderRadius: "36px",
          boxShadow: "0 2px 24px 0px #fbc2eb22, 0 0 40px #fde1d309 inset"
        }}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Connector lines with gradient and animation */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" width={visualSize} height={visualSize}>
          <defs>
            <linearGradient id="moduleLinePink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbc2eb" />
              <stop offset="100%" stopColor="#e64ba1" />
            </linearGradient>
          </defs>
          {modulesWithPos.map((mod, i) => (
            <motion.line
              key={mod.label}
              x1={center}
              y1={center}
              x2={mod.x}
              y2={mod.y}
              stroke="url(#moduleLinePink)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={lineVariants}
              style={{ filter: "drop-shadow(0 0 6px #fbc2eb60)" }}
            />
          ))}
        </svg>

        {/* Center: GTM Unbound logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 z-20"
          style={{
            width: centerTileSize,
            height: centerTileSize,
            transform: `translate(-50%,-50%)`,
            borderRadius: "36px",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            duration: 0.8,
            delay: 0.3
          }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-[36px] shadow-lg">
            <motion.div
              className="h-20 w-20 rounded-full bg-white shadow-inner flex items-center justify-center"
              animate={{ 
                boxShadow: ["0 0 18px #e64ba199, 0 0 6px #fbe0e6", "0 0 28px #e64ba199, 0 0 12px #fbe0e6"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <img
                src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
                alt="GTM Unbound Logo"
                className="h-16 w-16 object-contain rounded-full mx-auto"
                style={{
                  filter: "drop-shadow(0 0 12px #e64ba1C0)"
                }}
                draggable={false}
              />
            </motion.div>
            <p className="mt-2 text-lg font-bold leading-6 text-gtm-pink text-center select-none">
              GTM Unbound
            </p>
          </div>
        </motion.div>

        {/* Radial modules */}
        {modulesWithPos.map((mod) => (
          <motion.div
            key={mod.label}
            className="absolute z-20"
            style={{
              top: mod.y - moduleCardH/2,
              left: mod.x - moduleCardW/2,
              width: moduleCardW,
              height: moduleCardH,
            }}
            variants={moduleVariants}
            custom={mod.idx}
            whileHover="hover"
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg px-4 py-2.5 flex flex-col items-center gap-2 border border-gray-100/80 backdrop-blur-sm"
              style={{
                minWidth: 90,
                boxShadow: "0 2px 14px #e64ba12A"
              }}
            >
              {mod.icon}
              <span className="text-sm font-semibold text-gray-700 text-center">
                {mod.label}
              </span>
            </motion.div>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 translate-y-2 pointer-events-none whitespace-nowrap"
              initial={false}
              animate={{ 
                opacity: 0,
                y: 10,
                scale: 0.95
              }}
              whileHover={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              transition={{
                duration: 0.2
              }}
            >
              {mod.description}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile layout */}
      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center">
          <div
            className="mx-auto mt-2 mb-5 w-20 h-20 rounded-2xl bg-white shadow-lg border border-pink-100 flex flex-col items-center justify-center"
            style={{
              boxShadow: "0 0 14px 3px #ffb0e777, 0 2px 10px #fbc2eb33"
            }}
          >
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-inner border-4 border-white">
              <img
                src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
                alt="GTM Unbound Logo"
                className="w-10 h-10 object-contain mx-auto"
                style={{
                  filter: "drop-shadow(0 0 7px #e64ba199)"
                }}
                draggable={false}
              />
            </div>
            <div className="mt-1 text-base font-bold text-gtm-pink text-center">
              GTM Unbound
            </div>
          </div>
          <div className="mb-1"></div>
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-xs mx-auto">
            {moduleDefs.map((mod, idx) => (
              <div
                key={mod.label}
                className="bg-white rounded-xl shadow px-3 py-2 flex items-center gap-2 border border-gray-100 hover:shadow-lg transition-all duration-200 min-w-[84px] mb-1"
                style={{
                  boxShadow: "0 2px 14px #e64ba12A"
                }}
              >
                {mod.icon}
                <span className="text-sm font-bold text-gray-700">{mod.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTMDashboard;
