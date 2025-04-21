
import React from 'react';
import { motion } from 'framer-motion';
import GTMStructuredMessage from './GTMStructuredMessage';
import GradientButton from './GradientButton';

const GTMSplitView = () => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      {/* Content container */}
      <motion.div 
        className="flex flex-col items-center justify-center p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main heading */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gtm-dark text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Go-To-Market, Without Guesswork
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl text-center font-normal"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The complete GTM layer for startups — strategy, execution, and expertise in one place.
        </motion.p>
        
        {/* Structured Message Component */}
        <GTMStructuredMessage />
        
        {/* CTA buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-4 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <GradientButton className="rounded-xl shadow-pink-100 shadow-md hover:shadow-gtm-pink/40 transition-shadow">
            See How It Works
          </GradientButton>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-gtm-pink to-pink-400 text-white font-semibold shadow-pink-100 shadow-md hover:shadow-gtm-pink/40 transition-shadow border-0">
            Join Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GTMSplitView;
