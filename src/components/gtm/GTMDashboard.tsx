
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';
import { getOrbitPosition, visualSize, moduleRadius } from '@/utils/geometryUtils';
import GTMOrbitCard from './GTMOrbitCard';
import GTMConnectorLines from './GTMConnectorLines';
import GTMCenterLogo from './GTMCenterLogo';

const GTMDashboard = () => {
  return (
    <div
      className="relative mx-auto transition-all duration-300"
      style={{ 
        width: visualSize,
        height: visualSize,
        minHeight: 320
      }}
    >
      {/* Radial glowing background */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at 50% 50%,rgba(255,78,153,0.12) 0%,rgba(254,185,232,0.08) 50%,rgba(255,255,255,0.03) 95%)',
          filter: 'blur(2px)',
          zIndex: 0,
        }}
        initial={{ opacity: 0.85, scale: 0.97 }}
        animate={{
          opacity: [0.85, 1, 0.85],
          scale: [0.97, 1.06, 0.97]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Orbit ring with soft pulse */}
      <motion.div
        className="absolute rounded-full border border-pink-200/25 pointer-events-none"
        style={{
          width: moduleRadius * 2 + 40,
          height: moduleRadius * 2 + 40,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 36px 7px #ffdcec20',
          zIndex: 1,
        }}
        animate={{
          opacity: [0.17, 0.28, 0.17],
          filter: ["blur(1.6px)", "blur(2.2px)", "blur(1.3px)"],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GTMConnectorLines />

      {/* Orbit Cards */}
      {moduleDefs.map((def, idx) => {
        const { x, y } = getOrbitPosition(def.angle, moduleRadius);
        return (
          <GTMOrbitCard
            key={def.label}
            icon={def.icon}
            label={def.label}
            description={def.description}
            x={x}
            y={y}
            index={idx}
            anchor={def.anchor}
          />
        );
      })}

      <GTMCenterLogo />
    </div>
  );
};

export default GTMDashboard;

