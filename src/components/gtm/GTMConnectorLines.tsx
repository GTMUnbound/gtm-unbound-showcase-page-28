
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
        
        return (
          <motion.line
            key={moduleDef.label}
            x1={bufferX}
            y1={bufferY}
            x2={cardX}
            y2={cardY}
            stroke={moduleDef.color.replace('text-', 'var(--')}
            strokeWidth="1"
            strokeDasharray="3,3"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: moduleDef.angle / 1000 }}
          />
        );
      })}
    </svg>
  );
};

export default GTMConnectorLines;
