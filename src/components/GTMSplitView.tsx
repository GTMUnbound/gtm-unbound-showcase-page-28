
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ClipboardCheck, Users, CheckSquare, Target } from 'lucide-react';  // Using appropriate icons

const GTMSplitView = () => {
  // Define puzzle pieces data
  const puzzlePieces = [
    { id: 1, label: "Execution", icon: <Rocket className="w-6 h-6 text-white/80" />, delay: 0.3, x: -40, y: -30 },
    { id: 2, label: "Experts", icon: <Users className="w-6 h-6 text-white/80" />, delay: 0.6, x: 40, y: -30 },
    { id: 3, label: "Playbooks", icon: <ClipboardCheck className="w-6 h-6 text-white/80" />, delay: 0.9, x: -40, y: 30 },
    { id: 4, label: "Strategy", icon: <Target className="w-6 h-6 text-white/80" />, delay: 1.2, x: 40, y: 30 },
    { id: 5, label: "Feedback", icon: <CheckSquare className="w-6 h-6 text-white/80" />, delay: 1.5, x: 0, y: 0 },
  ];

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gtm-pink/5 to-transparent" />
      </div>
      
      {/* Animated postcard hero container */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main heading */}
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gtm-dark text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          What if everything finally fit together?
        </motion.h2>
        
        {/* Puzzle pieces container */}
        <div className="relative w-full max-w-xl aspect-square">
          {/* Center glowing spot where pieces will connect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gtm-pink/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Puzzle pieces */}
          {puzzlePieces.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute top-1/2 left-1/2 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg w-28 h-28 flex flex-col items-center justify-center"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ 
                x: piece.x * 3, 
                y: piece.y * 3, 
                opacity: 0,
                rotate: piece.id % 2 === 0 ? 5 : -5,
                scale: 0.8
              }}
              animate={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                rotate: 0,
                scale: 1
              }}
              transition={{ 
                delay: piece.delay, 
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                zIndex: 20
              }}
            >
              {/* Piece contents */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-purple-200/30 rounded-xl" />
              
              <motion.div 
                className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-gtm-pink/20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: piece.delay / 2
                }}
              >
                {piece.icon}
              </motion.div>
              
              <span className="text-sm font-medium text-gtm-dark relative z-10">
                {piece.label}
              </span>
              
              {/* Connection line to center */}
              <motion.div 
                className="absolute top-1/2 left-1/2 h-[1px] bg-gtm-pink/30 transform -translate-y-1/2"
                style={{ 
                  width: Math.sqrt(Math.pow(piece.x, 2) + Math.pow(piece.y, 2)), 
                  transformOrigin: "left center",
                  rotate: `${Math.atan2(piece.y, piece.x) * (180 / Math.PI)}deg`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: piece.delay + 0.5, duration: 0.6 }}
              />
              
              {/* Glow effect when piece snaps */}
              <motion.div 
                className="absolute inset-0 rounded-xl bg-gtm-pink/20 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{ 
                  delay: piece.delay + 0.8, 
                  duration: 0.8,
                  times: [0, 0.2, 1]
                }}
              />
            </motion.div>
          ))}
          
          {/* Center piece - GTM System */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-gtm-pink to-pink-500 flex items-center justify-center text-white shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ 
              delay: 2.2, 
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <span className="text-xs font-bold">GTM<br/>SYSTEM</span>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.8, 0.4, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </motion.div>
        </div>
        
        {/* Subheading */}
        <motion.p
          className="text-base md:text-lg text-center text-gray-600 max-w-lg mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          A complete GTM layer — Strategy, Execution, and Experts — built for startup traction.
        </motion.p>
      </motion.div>
      
      {/* Hand cursor cue */}
      <motion.div
        className="absolute w-10 h-10 bottom-12 right-1/4"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11C21 7.13401 17.866 4 14 4C10.134 4 7 7.13401 7 11" stroke="#FF5D8F" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 15L14 7" stroke="#FF5D8F" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 19L18 19" stroke="#FF5D8F" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 15L14 23" stroke="#FF5D8F" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default GTMSplitView;
