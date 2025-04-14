
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProcessVisualization: React.FC = () => {
  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Process Flow Visualization */}
      <motion.div 
        className="flex flex-col items-center justify-between w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Step 1: Requirements */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gtm-light border-2 border-gtm-pink flex items-center justify-center mb-2">
            <span className="text-2xl md:text-3xl font-bold text-gtm-pink">1</span>
          </div>
          <span className="text-sm md:text-base text-gtm-dark font-semibold">Requirements</span>
        </motion.div>
        
        {/* Arrow 1 */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="h-8 my-2 flex justify-center"
        >
          <ArrowRight size={24} className="text-gtm-pink transform rotate-90" />
        </motion.div>
        
        {/* Step 2: Experts */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gtm-light border-2 border-gtm-pink flex items-center justify-center mb-2">
            <span className="text-2xl md:text-3xl font-bold text-gtm-pink">2</span>
          </div>
          <span className="text-sm md:text-base text-gtm-dark font-semibold">GTM Experts</span>
        </motion.div>
        
        {/* Arrow 2 */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="h-8 my-2 flex justify-center"
        >
          <ArrowRight size={24} className="text-gtm-pink transform rotate-90" />
        </motion.div>
        
        {/* Step 3: Execution */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gtm-light border-2 border-gtm-pink flex items-center justify-center mb-2">
            <span className="text-2xl md:text-3xl font-bold text-gtm-pink">3</span>
          </div>
          <span className="text-sm md:text-base text-gtm-dark font-semibold">Execution</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessVisualization;
