
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatItem {
  value: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
  className?: string;
}

const AnimatedStats = ({ stats, className }: AnimatedStatsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  return (
    <motion.div 
      className={cn("flex flex-wrap gap-4 md:gap-8", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className="flex items-center space-x-1"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
          }}
        >
          <motion.span 
            className="text-xl md:text-2xl font-bold text-gtm-pink"
            animate={{ 
              opacity: [0.8, 1, 0.8],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: index * 1
            }}
          >
            {stat.value}
          </motion.span>
          <span className="text-gray-600">
            {stat.label}
          </span>
          {index < stats.length - 1 && (
            <span className="text-gray-300 ml-3 hidden md:inline-block">•</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedStats;
