
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';
import { getOrbitPosition, center, moduleRadius, centerTileSize } from '@/utils/geometryUtils';

const GTMConnectorLines = () => {
  // Calculate the actual radius of the center circle (half of centerTileSize)
  const centerCircleRadius = centerTileSize / 2;
  
  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
      {moduleDefs.map((def, idx) => {
        const { x, y } = getOrbitPosition(def.angle, moduleRadius);
        
        // Calculate the exact point at the edge of the center circle
        const angle = (def.angle - 90) * (Math.PI / 180); // Convert to radians and adjust for SVG coordinate system
        const startX = center + Math.cos(angle) * centerCircleRadius;
        const startY = center + Math.sin(angle) * centerCircleRadius;
        
        // Calculate midpoint for the bezier curve with slight offset for visual interest
        const midX = (startX + (center + x)) / 2 + (idx % 2 === 0 ? 10 : -10);
        const midY = (startY + (center + y)) / 2 + (idx % 2 === 0 ? -8 : 6);
        
        return (
          <motion.path
            key={def.label}
            d={`M ${startX} ${startY} Q ${midX} ${midY} ${center + x} ${center + y}`}
            stroke="#FE58A8"
            strokeWidth="1.3"
            strokeDasharray="2.9,4"
            strokeOpacity="0.23"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.72 }}
            transition={{ duration: 1.7, delay: idx * 0.11 }}
          />
        );
      })}
    </svg>
  );
};

export default GTMConnectorLines;
