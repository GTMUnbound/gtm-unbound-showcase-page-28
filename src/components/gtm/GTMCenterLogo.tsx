import React from 'react';
import { motion } from 'framer-motion';
import { center, centerTileSize } from '@/utils/geometryUtils';
const GTMCenterLogo = () => {
  return <motion.div className="absolute z-20" style={{
    width: centerTileSize,
    height: centerTileSize,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }} initial={{
    scale: 0.72,
    opacity: 0
  }} animate={{
    scale: 1,
    opacity: 1
  }} transition={{
    type: "spring",
    stiffness: 210,
    damping: 23,
    delay: 0.19
  }}>
      <motion.div className="w-full h-full bg-white/95 rounded-full shadow-lg flex items-center justify-center" style={{
      boxShadow: '0 8px 32px rgba(255, 220, 236, 0.3), 0 0 0 1px rgba(255, 220, 236, 0.5)'
    }} whileHover={{
      scale: 1.04,
      transition: {
        duration: 0.2
      }
    }}>
        {/* Removed the absolute positioning from this container and made it a flex container */}
        <div className="flex flex-col items-center justify-center">
          <motion.img src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" alt="GTM Unbound Logo" className="h-12 w-12 rounded-full bg-white/80 shadow-sm mb-2" animate={{
          rotate: [0, 12, -12, 0]
        }} transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <span className="text-sm font-extrabold text-gray-800">GTM Unbound</span>
          <span className="text-gray-400 -mt-0.5 text-center text-xs">Systems. Strategy. Execution.</span>
        </div>
      </motion.div>
    </motion.div>;
};
export default GTMCenterLogo;