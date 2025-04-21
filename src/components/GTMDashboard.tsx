
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  Layers, Users, BookOpen, Play, FileCheck, LineChart, Globe
} from 'lucide-react';

const GTMDashboard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Dashboard modules with positions in a circular layout
  const modules = [
    { 
      icon: <Layers className="h-5 w-5 text-gtm-pink" />, 
      label: "Playbooks",
      position: { top: '10%', left: '50%' }
    },
    { 
      icon: <Users className="h-5 w-5 text-blue-500" />, 
      label: "Experts",
      position: { top: '25%', left: '85%' }
    },
    { 
      icon: <BookOpen className="h-5 w-5 text-amber-500" />, 
      label: "Tools",
      position: { top: '75%', left: '85%' }
    },
    { 
      icon: <Play className="h-5 w-5 text-green-500" />, 
      label: "Execution",
      position: { top: '90%', left: '50%' }
    },
    { 
      icon: <FileCheck className="h-5 w-5 text-purple-500" />, 
      label: "Events",
      position: { top: '75%', left: '15%' }
    },
    { 
      icon: <Globe className="h-5 w-5 text-cyan-500" />, 
      label: "Channels",
      position: { top: '25%', left: '15%' }
    },
    { 
      icon: <LineChart className="h-5 w-5 text-orange-500" />, 
      label: "Metrics",
      position: { top: '50%', left: '92%' }
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 4px 12px rgba(236, 72, 153, 0.1)",
      "0 6px 16px rgba(236, 72, 153, 0.25)",
      "0 4px 12px rgba(236, 72, 153, 0.1)"
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h4 className="text-xs md:text-sm text-gray-500 mb-6 text-center font-medium">
        From Product to Traction — Powered by GTM Unbound
      </h4>
      
      <motion.div
        className="relative h-[320px] w-full"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Central Dashboard */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                     w-32 h-32 rounded-xl bg-white shadow-lg border border-pink-100
                     flex flex-col items-center justify-center"
          variants={moduleVariants}
          animate={pulseAnimation}
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gtm-pink to-pink-400 
                        flex items-center justify-center shadow-inner">
            <span className="text-white font-semibold text-sm">GTM</span>
          </div>
          <p className="mt-2 text-xs font-medium text-gtm-dark">GTM System</p>
        </motion.div>

        {/* Connector lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none">
          <motion.circle 
            cx="150" 
            cy="150" 
            r="120" 
            stroke="url(#gradientStroke)" 
            strokeWidth="1.5" 
            strokeDasharray="5,5" 
            strokeOpacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbc2eb" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Modules */}
        {modules.map((module, index) => (
          <motion.div
            key={index}
            className="absolute z-10"
            style={{ 
              top: module.position.top, 
              left: module.position.left,
              transform: 'translate(-50%, -50%)'
            }}
            variants={moduleVariants}
            animate={floatAnimation}
          >
            <motion.div className="bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 border border-gray-100">
              {module.icon}
              <span className="text-xs font-medium text-gray-700">{module.label}</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Path from chaos to traction */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#feebc8" />
              <stop offset="30%" stopColor="#f87171" />
              <stop offset="70%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M30,200 Q80,250 150,150 Q220,50 270,100"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          
          {/* Start label - Chaos */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <circle cx="30" cy="200" r="6" fill="#f87171" />
            <text x="20" y="220" fontSize="10" fill="#666">Chaos</text>
          </motion.g>
          
          {/* End label - Traction */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <circle cx="270" cy="100" r="6" fill="#8b5cf6" />
            <text x="250" y="85" fontSize="10" fill="#666">Traction</text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

export default GTMDashboard;
