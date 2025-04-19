
import React from 'react';
import { motion } from 'framer-motion';
import { Focus } from 'lucide-react';

const LaserFocusEffect = () => {
  const chaosItems = [
    'Social Media', 'Content', 'SEO', 'Ads', 'Email',
    'Analytics', 'CRM', 'Sales', 'Outreach', 'PR'
  ];

  return (
    <div className="relative w-[300px] h-[300px]">
      {/* Blurred chaos background */}
      <motion.div 
        className="absolute inset-0 flex flex-wrap gap-4 justify-center items-center overflow-hidden blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        {chaosItems.map((item, index) => (
          <motion.span
            key={index}
            className="text-sm text-gray-600 opacity-50"
            initial={{ opacity: 0, x: Math.random() * 100 - 50 }}
            animate={{ 
              opacity: 0.5,
              x: 0,
              y: [0, Math.random() * 10 - 5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      {/* Focused center content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Focus circle effect */}
        <motion.div
          className="relative w-48 h-48 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.8
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)'
            }}
          />
          
          {/* Center content */}
          <div className="text-center p-6">
            <Focus className="w-8 h-8 text-gtm-pink mx-auto mb-3" />
            <motion.p
              className="text-lg font-semibold text-gtm-dark"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Your GTM Strategy Starts Here
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LaserFocusEffect;
