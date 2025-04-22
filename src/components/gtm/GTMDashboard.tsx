
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';
import GTMModuleCard from './GTMModuleCard';
import GTMCenterLogo from './GTMCenterLogo';
import GTMConnectorLines from './GTMConnectorLines';
import { center, moduleRadius, visualSize } from '@/utils/geometryUtils';

const GTMDashboard = () => {
  return (
    <div className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center">
      {/* Background Circle */}
      <motion.div 
        className="absolute rounded-full bg-white/10 border border-pink-100/50 shadow-lg"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: visualSize * 0.8,
          height: visualSize * 0.8,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 48px rgba(255, 180, 194, 0.15), inset 0 0 20px rgba(255, 220, 236, 0.1)',
        }}
      />
      
      {/* Subtle background glow */}
      <motion.div 
        className="absolute rounded-full bg-white/5"
        initial={{ scale: 0.9, opacity: 0.3 }}
        animate={{ 
          scale: [0.95, 1.05, 0.95], 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        style={{
          width: visualSize * 0.9,
          height: visualSize * 0.9,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(15px)',
          background: 'radial-gradient(circle, rgba(255,78,153,0.08) 0%, rgba(255,169,140,0) 70%)',
        }}
      />
      
      {/* Outer orbit ring */}
      <motion.div
        className="absolute rounded-full border border-pink-200/30"
        style={{
          width: moduleRadius * 2 + 24,
          height: moduleRadius * 2 + 24,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(255, 220, 236, 0.25)',
        }}
      />
      
      {/* Connector Lines */}
      <GTMConnectorLines />
      
      {/* Module Cards */}
      {moduleDefs.map((moduleDef, index) => (
        <GTMModuleCard 
          key={moduleDef.label}
          icon={moduleDef.icon}
          label={moduleDef.label}
          description={moduleDef.description}
          angle={moduleDef.angle}
          color={moduleDef.color}
          radius={moduleRadius}
        />
      ))}
      
      {/* Center Logo */}
      <GTMCenterLogo />
    </div>
  );
};

export default GTMDashboard;
