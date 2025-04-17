
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextCardProps {
  index: number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const AnimatedTextCard = ({ 
  index, 
  title, 
  description, 
  icon, 
  className 
}: AnimatedTextCardProps) => {
  return (
    <motion.div
      className={cn(
        "p-4 rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.2
      }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <div className="flex items-start space-x-3">
        {icon && (
          <motion.div 
            className="text-gtm-pink"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {icon}
          </motion.div>
        )}
        <div>
          <motion.h3 
            className="font-medium text-gray-900 mb-1"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            {title}
          </motion.h3>
          {description && (
            <motion.p 
              className="text-sm text-gray-500"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedTextCard;
