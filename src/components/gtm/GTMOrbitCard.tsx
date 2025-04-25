
import React from 'react';
import { motion } from 'framer-motion';
import { center, moduleCardW, moduleCardH } from '@/utils/geometryUtils';

interface GTMOrbitCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  x: number;
  y: number;
  index: number;
  anchor: string;
}

const GTMOrbitCard = ({ icon, label, description, x, y, index, anchor }: GTMOrbitCardProps) => {
  return (
    <motion.a
      href={`#${anchor}`}
      className="absolute z-10 group focus:outline-none"
      style={{
        left: center + x,
        top: center + y,
        width: moduleCardW,
        height: moduleCardH,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 20,
        delay: index * 0.10 + 0.12
      }}
      whileHover={{
        scale: 1.055,
        boxShadow: '0 0 28px 2px #ffe1ee99',
        filter: 'brightness(1.06)'
      }}
      tabIndex={0}
      aria-label={label}
    >
      <div className="w-full h-full rounded-xl bg-white/98 border border-pink-50 glass-morphism flex flex-col items-center justify-center transition-shadow relative shadow-[0_4px_28px_-8px_#ffdcec22] group-hover:ring-2 group-hover:ring-gtm-pink/40 group-active:scale-[1.03]">
        <div className="mb-1">{icon}</div>
        <div className="text-xs font-semibold text-center text-gray-800">{label}</div>
        <div className="text-[10px] text-gray-500 text-center leading-tight">{description}</div>
      </div>
    </motion.a>
  );
};

export default GTMOrbitCard;

