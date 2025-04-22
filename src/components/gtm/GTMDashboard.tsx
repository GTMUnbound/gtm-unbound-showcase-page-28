
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from '../gtm/GTMModuleDefinitions';
import GTMModuleCard from './GTMModuleCard';
import GTMCenterLogo from './GTMCenterLogo';
import GTMConnectorLines from './GTMConnectorLines';
import { center, moduleRadius, visualSize } from '@/utils/geometryUtils';

const GTMDashboard = () => {
  return (
    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex items-center justify-center">
      {/* Background Circle */}
      <motion.div 
        className="absolute rounded-full bg-white/10 border border-pink-100 shadow-lg"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: visualSize * 0.75,
          height: visualSize * 0.75,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Outer orbit ring */}
      <motion.div
        className="absolute rounded-full border border-pink-200/30"
        style={{
          width: moduleRadius * 2,
          height: moduleRadius * 2,
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
