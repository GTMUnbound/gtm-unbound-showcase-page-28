
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedNavItemProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

const AnimatedNavItem: React.FC<AnimatedNavItemProps> = ({ 
  label, 
  onClick, 
  isActive = false 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative px-2 py-1 text-gtm-dark hover:text-gtm-pink transition-colors",
        isActive && "text-gtm-pink"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gtm-pink rounded-full"
        initial={{ width: isActive ? "100%" : "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default AnimatedNavItem;
