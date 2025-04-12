
import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

interface EventFormatProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const EventFormat = ({ icon, title, description, className }: EventFormatProps) => {
  return (
    <motion.div 
      className={cn(
        "flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all",
        className
      )}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="text-gtm-pink bg-gtm-light p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-gtm-dark font-bold text-lg mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 text-center text-sm">{description}</p>
      )}
    </motion.div>
  );
};

export default EventFormat;
