
import React from 'react';
import { motion } from 'framer-motion';
import { center, centerTileSize } from '@/utils/geometryUtils';

const GTMCenterLogo = () => {
  return (
    <motion.div
      className="absolute bg-white/90 backdrop-blur-md rounded-full shadow-lg flex flex-col items-center justify-center"
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
      }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
        alt="GTM Unbound Logo"
        className="h-10 w-10 rounded-full bg-white/70 shadow-sm"
        animate={{ rotate: [0, 18, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-sm font-semibold text-gray-800 mt-2">GTM Unbound</span>
    </motion.div>
  );
};

export default GTMCenterLogo;
