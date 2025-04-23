
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';
import { getPos, center, moduleRadius, centerTileSize } from '@/utils/geometryUtils';

const GTMConnectorLines = () => {
  return (
    <svg 
      className="absolute top-0 left-0 w-full h-full pointer-events-none" 
      style={{ zIndex: 1 }}
    >
      {moduleDefs.map((moduleDef, idx) => {
        const { x, y } = getPos(moduleDef.angle, moduleRadius);
        const centerX = center;
        const centerY = center;
        const cardX = centerX + x;
        const cardY = centerY + y;
        
        // Calculate buffer points for curved lines
        const centerRadius = centerTileSize / 2;
        const bufferX = centerX + (x / moduleRadius) * centerRadius;
        const bufferY = centerY + (y / moduleRadius) * centerRadius;
        
        // Add slight curve variation based on position
        const midX = (bufferX + cardX) / 2 + Math.cos(moduleDef.angle * Math.PI / 180) * 12;
        const midY = (bufferY + cardY) / 2 + Math.sin(moduleDef.angle * Math.PI / 180) * 12;
        
        return (
          <g key={moduleDef.label}>
            {/* Glowing connector path */}
            <motion.path
              d={`M ${bufferX} ${bufferY} Q ${midX} ${midY} ${cardX} ${cardY}`}
              stroke="url(#pinkGradient)"
              strokeWidth="2"
              strokeDasharray="4,4"
              strokeLinecap="round"
              fill="none"
              style={{ filter: 'drop-shadow(0 0 2px rgba(255,105,180,0.3))' }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.2, delay: idx * 0.15 }}
            />
            {/* Subtle glow dots at connection points */}
            <motion.circle
              cx={bufferX}
              cy={bufferY}
              r="2"
              fill="#FF69B4"
              style={{ filter: 'drop-shadow(0 0 3px rgba(255,105,180,0.5))' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.15 }}
            />
          </g>
        );
      })}
      {/* Gradient definition for connectors */}
      <defs>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,105,180,0.4)" />
          <stop offset="100%" stopColor="rgba(255,105,180,0.1)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GTMConnectorLines;
