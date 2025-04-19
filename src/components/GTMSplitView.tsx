
import React from 'react';
import { motion } from 'framer-motion';
import { Focus } from 'lucide-react';
import LaserFocusEffect from './LaserFocusEffect';

const GTMSplitView = () => {
  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gtm-pink/5 to-transparent" />
      </div>
      
      {/* Content container */}
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
          GTM Focused. Finally.
        </motion.h2>
        
        {/* Laser Focus Effect Component */}
        <LaserFocusEffect />
      </motion.div>
    </div>
  );
};

export default GTMSplitView;
