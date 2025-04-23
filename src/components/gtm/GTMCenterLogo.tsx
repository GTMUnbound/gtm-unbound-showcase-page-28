
import React from 'react';
import { motion } from 'framer-motion';
import { center, centerTileSize } from '@/utils/geometryUtils';

const GTMCenterLogo = () => {
  return (
    <motion.div
      className="absolute bg-white/95 backdrop-blur-md rounded-full shadow-lg flex flex-col items-center justify-center z-20"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
      style={{
        width: centerTileSize,
        height: centerTileSize,
        left: center,
        top: center,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 8px 32px rgba(255, 220, 236, 0.35), 0 0 0 1px rgba(255, 220, 236, 0.2), 0 0 40px rgba(255, 192, 203, 0.15) inset',
        border: '2px solid rgba(255, 220, 236, 0.3)',
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.img
        src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
        alt="GTM Unbound Logo"
        className="h-14 w-14 rounded-full bg-white/80 shadow-sm"
        animate={{ rotate: [0, 18, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-base font-extrabold text-gray-800 mt-2">GTM Unbound</span>
      <span className="text-xs text-gray-500 mt-0.5">Systems. Strategy. Execution.</span>
    </motion.div>
  );
};

export default GTMCenterLogo;
