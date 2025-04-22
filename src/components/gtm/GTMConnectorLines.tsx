
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
      {moduleDefs.map((moduleDef) => {
        const { x, y } = getPos(moduleDef.angle, moduleRadius);
        const centerX = center;
        const centerY = center;
        const cardX = centerX + x;
        const cardY = centerY + y;
        
        // Calculate buffer point so lines don't go all the way to center
        const centerRadius = centerTileSize / 2;
        const bufferX = centerX + (x / moduleRadius) * centerRadius;
        const bufferY = centerY + (y / moduleRadius) * centerRadius;
        
        // Add a subtle curve to the lines for more organic feel
        const midX = (bufferX + cardX) / 2 + (Math.random() * 2 - 1) * 5;
        const midY = (bufferY + cardY) / 2 + (Math.random() * 2 - 1) * 5;
        
        return (
          <motion.path
            key={moduleDef.label}
            d={`M ${bufferX} ${bufferY} Q ${midX} ${midY} ${cardX} ${cardY}`}
            stroke={moduleDef.color.replace('text-', 'var(--')}
            strokeWidth="1.2"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: moduleDef.angle / 1000 }}
          />
        );
      })}
    </svg>
  );
};

export default GTMConnectorLines;
