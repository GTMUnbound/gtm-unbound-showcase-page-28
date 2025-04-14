
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroBackgroundProps {
  type: 'image' | 'video' | 'process';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ type }) => {
  if (type === 'video') {
    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        <video 
          className="w-full h-full object-cover opacity-10"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/lovable-uploads/cb5466fa-6f5a-4619-8796-4bb3b2ba745b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
      </div>
    );
  }
  
  if (type === 'process') {
    return (
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center opacity-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Process Flow Visualization */}
          <motion.div 
            className="flex flex-row items-center justify-between w-full px-8"
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
              <div className="w-20 h-20 rounded-full bg-gtm-light border-2 border-gtm-pink flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-gtm-pink">1</span>
              </div>
              <span className="text-gtm-dark font-semibold">Requirements</span>
            </motion.div>
            
            {/* Arrow 1 */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <ArrowRight size={36} className="text-gtm-pink mx-4" />
            </motion.div>
            
            {/* Step 2: Experts */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-gtm-light border-2 border-gtm-pink flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-gtm-pink">2</span>
              </div>
              <span className="text-gtm-dark font-semibold">GTM Experts</span>
            </motion.div>
            
            {/* Arrow 2 */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <ArrowRight size={36} className="text-gtm-pink mx-4" />
            </motion.div>
            
            {/* Step 3: Execution */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-gtm-light border-2 border-gtm-pink flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-gtm-pink">3</span>
              </div>
              <span className="text-gtm-dark font-semibold">Execution</span>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80"></div>
      </motion.div>
    );
  }
  
  // Default image background
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/e4f2ce9b-77cb-407e-990c-95e090726004.png")',
          filter: 'blur(1px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80"></div>
    </motion.div>
  );
};

export default HeroBackground;
