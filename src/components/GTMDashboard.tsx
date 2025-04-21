
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  BookOpen, Users, Wrench, Target, BarChart2, Globe, Calendar
} from 'lucide-react';

const GTMDashboard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Configuration for circular layout
  const modules = [
    // Top
    {
      icon: <BookOpen className="h-6 w-6 text-gtm-pink" />,
      label: "Playbooks",
      position: { top: '5%', left: '50%' }
    },
    // Top right
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      label: "Experts",
      position: { top: '20%', left: '85%' }
    },
    // Bottom right
    {
      icon: <Wrench className="h-6 w-6 text-amber-500" />,
      label: "Tools",
      position: { top: '80%', left: '85%' }
    },
    // Bottom
    {
      icon: <Target className="h-6 w-6 text-green-500" />,
      label: "Execution",
      position: { top: '95%', left: '50%' }
    },
    // Bottom left
    {
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
      label: "Events",
      position: { top: '80%', left: '15%' }
    },
    // Top left
    {
      icon: <Globe className="h-6 w-6 text-cyan-500" />,
      label: "Channels",
      position: { top: '20%', left: '15%' }
    },
    // Middle right
    {
      icon: <BarChart2 className="h-6 w-6 text-orange-500" />,
      label: "Metrics",
      position: { top: '50%', left: '95%' }
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.2
      }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1, scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 16
      }
    }
  };

  // Gently floating pulse
  const floatPulse = {
    y: [0, -10, 0],
    transition: {
      duration: 3.4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Responsive scaling
  const visualScaleClass = "h-[450px] md:h-[480px] w-full max-w-[480px]";

  return (
    <div className="flex flex-col items-center md:items-end">
      <h4 className="text-xs md:text-sm text-gray-500 mb-5 md:mb-7 text-center font-medium whitespace-nowrap">
        From Product to Traction — Powered by GTM Unbound
      </h4>
      <motion.div
        className={`relative ${visualScaleClass} mx-auto`}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{
          marginTop: '-10px',
        }}
      >
        {/* Curved journey path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 480 480"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="10%" stopColor="#fbc2eb" />
              <stop offset="70%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Chaos to GTM Unbound to Traction journey curve */}
          <motion.path
            d="M60,350 Q140,400 240,240 Q335,80 420,130"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.8 }}
            style={{
              filter: "drop-shadow(0 0 4px #fbc2eb88)"
            }}
          />
          {/* Chaos - Start */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <circle cx="60" cy="350" r="12" fill="#f87171" />
            <text x="36" y="380" fontSize="16" fontWeight="bold" fill="#e11d48">Chaos</text>
          </motion.g>
          {/* Traction - End */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.7 }}
          >
            <circle cx="420" cy="130" r="12" fill="#8b5cf6" />
            <text x="397" y="110" fontSize="16" fontWeight="bold" fill="#7c3aed">Traction</text>
          </motion.g>
        </svg>

        {/* Glowing connector circle */}
        <motion.circle
          className="z-[1]"
          cx="240"
          cy="240"
          r="180"
          stroke="url(#gradientStroke)"
          strokeWidth="2"
          strokeDasharray="6,7"
          strokeOpacity="0.6"
          style={{ filter: "drop-shadow(0px 4px 32px #fbc2eb33)" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.7, delay: 0.44 }}
        />
        <defs>
          <linearGradient id="gradientStroke" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbc2eb" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Central GTM Unbound tile with bold/glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 z-30 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl border border-pink-100 flex flex-col items-center justify-center"
          variants={moduleVariants}
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 20px 4px #ffb0e7, 0 6px 40px #fbc2eb44",
              "0 0 25px 8px #ffb0e790, 0 6px 40px #fbc2eb55",
              "0 0 20px 4px #ffb0e7, 0 6px 40px #fbc2eb44"
            ],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut"
            }
          }}
        >
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-gtm-pink to-pink-400 flex items-center justify-center shadow-inner border-4 border-white">
            <span className="text-white font-extrabold text-xl tracking-tight">
              GTM
            </span>
          </div>
          <p className="mt-3 text-base font-bold text-gtm-pink tracking-tight">
            GTM Unbound
          </p>
        </motion.div>

        {/* Modules */}
        {modules.map((module, index) => (
          <motion.div
            key={index}
            className="absolute z-20"
            style={{
              ...module.position,
              transform: 'translate(-50%, -50%)',
            }}
            variants={moduleVariants}
            animate={floatPulse}
            whileHover={{
              scale: 1.12,
              boxShadow: "0 8px 28px #ec4899bb, 0 0px 18px #fbc2eb88",
              zIndex: 30,
            }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-3 border border-gray-100 transition-all duration-300 group"
              whileHover={{ scale: 1.08, boxShadow: "0 8px 28px #fbc2eb66" }}
              style={{
                minWidth: 100,
                boxShadow: "0 3px 20px #fbc2eb28"
              }}
            >
              {module.icon}
              <span className="text-sm font-bold text-gray-700">{module.label}</span>
            </motion.div>
          </motion.div>
        ))}

      </motion.div>
      {/* MOBILE vertical stacking */}
      <div className="flex md:hidden flex-col items-center mt-7 w-full gap-4">
        <div className="w-full flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl px-7 py-6 flex flex-col items-center border border-pink-100"
            style={{
              boxShadow: "0 0 12px 2px #ffb0e733, 0 6px 30px #fbc2eb22"
            }}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gtm-pink to-pink-400 flex items-center justify-center shadow-inner border-4 border-white mb-2">
              <span className="text-white font-extrabold text-lg tracking-tight">GTM</span>
            </div>
            <p className="font-bold text-gtm-pink text-base tracking-tight mb-0">
              GTM Unbound
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 w-full mt-3">
          {modules.map((module, idx) => (
            <div
              key={module.label}
              className="bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 border border-gray-100 hover:shadow-xl transition-all duration-300 min-w-[100px]"
              style={{ boxShadow: "0 3px 12px #fbc2eb19" }}
            >
              {module.icon}
              <span className="text-sm font-bold text-gray-700">{module.label}</span>
            </div>
          ))}
        </div>
        {/* Mobile journey line */}
        <div className="relative w-full flex flex-col items-center mt-6 pb-2">
          <svg className="w-11/12 h-[86px]" viewBox="0 0 380 70" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gtmJourneyGradientMob" x1="0" y1="0" x2="380" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f87171" />
                <stop offset="30%" stopColor="#fbc2eb" />
                <stop offset="80%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <motion.path
              d="M30,62 Q90,10 180,42 Q270,75 350,30"
              stroke="url(#gtmJourneyGradientMob)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: [0.42, 0, 0.58, 1] }}
            />
            {/* Start and end */}
            <motion.circle
              cx="30" cy="62" r="7" fill="#f87171"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            />
            <text x="13" y="78" fontSize="10" fill="#e11d48" fontWeight="bold">Chaos</text>
            <motion.circle
              cx="350" cy="30" r="7" fill="#8b5cf6"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
            />
            <text x="323" y="23" fontSize="10" fill="#7c3aed" fontWeight="bold">Traction</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GTMDashboard;
