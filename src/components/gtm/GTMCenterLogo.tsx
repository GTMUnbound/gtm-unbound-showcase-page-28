
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
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
      <Target className="h-8 w-8 text-gtm-pink" />
      <span className="text-sm font-semibold text-gray-800 mt-1">GTM OS</span>
    </motion.div>
  );
};

export default GTMCenterLogo;
