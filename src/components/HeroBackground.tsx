
import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  type: 'image' | 'video';
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
