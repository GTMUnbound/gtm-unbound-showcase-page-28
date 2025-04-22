
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { getPos, center, moduleCardW, moduleCardH } from '@/utils/geometryUtils';

interface GTMModuleCardProps {
  icon: LucideIcon;
  label: string;
  description: string;
  angle: number;
  color: string;
  radius: number;
}

const GTMModuleCard = ({ icon: Icon, label, description, angle, color, radius }: GTMModuleCardProps) => {
  const { x, y } = getPos(angle, radius);
  
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
      whileHover={{ scale: 1.08, zIndex: 10 }}
    >
      <div className="bg-white/90 backdrop-blur-sm w-full h-full rounded-xl shadow-md px-2 py-2 flex flex-col items-center justify-center border border-gray-100">
        <Icon className={`w-5 h-5 ${color} mb-1`} />
        <h3 className="text-xs font-semibold text-center text-gray-800">{label}</h3>
        <p className="text-[9px] text-center text-gray-500 mt-0.5 leading-tight">{description}</p>
      </div>
    </motion.div>
  );
};

export default GTMModuleCard;
