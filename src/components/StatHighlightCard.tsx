
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface StatHighlightCardProps {
  stat: string;
  description: string;
}

const StatHighlightCard = ({ stat, description }: StatHighlightCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-1 md:min-w-44 w-full p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
    >
      <motion.div 
        className="text-2xl md:text-3xl font-bold text-gtm-dark mb-2"
        layout
      >
        {stat}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          height: isHovered ? "auto" : 0
        }}
        transition={{ duration: 0.2 }}
        className="text-gray-600 overflow-hidden"
      >
        {description}
      </motion.div>
      <div className="md:hidden text-gray-600 mt-2">
        {description}
      </div>
    </motion.div>
  );
};

export default StatHighlightCard;
