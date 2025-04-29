
import React from 'react';
import { motion } from 'framer-motion';
import { getOrbitPosition, center, moduleCardW, moduleCardH } from '@/utils/geometryUtils';

interface GTMModuleCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  angle: number;
  color: string;
  radius: number;
}

const GTMModuleCard = ({ icon, label, description, angle, color, radius }: GTMModuleCardProps) => {
  const { x, y } = getOrbitPosition(angle, radius);
  
  return (
    <motion.div
      className="absolute flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: angle / 1000 // Stagger based on angle
      }}
      style={{
        left: center + x,
        top: center + y,
        width: moduleCardW,
        height: moduleCardH,
        transform: 'translate(-50%, -50%)',
      }}
      whileHover={{ 
        scale: 1.12, 
        zIndex: 10,
        y: angle > 180 ? 3 : -3, // Move slightly up or down based on position
        x: angle > 90 && angle < 270 ? -3 : 3, // Move slightly left or right based on position
      }}
    >
      <div 
        className="bg-white/95 backdrop-blur-sm w-full h-full rounded-xl shadow-md px-3 py-2 flex flex-col items-center justify-center border border-gray-100"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 220, 236, 0.2)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        {icon}
        <h3 className="text-xs font-semibold text-center text-gray-800">{label}</h3>
        <p className="text-[9px] text-center text-gray-500 mt-0.5 leading-tight">{description}</p>
      </div>
    </motion.div>
  );
};

export default GTMModuleCard;
