
import React from 'react';
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';
import { getOrbitPosition, center, moduleRadius, centerTileSize } from '@/utils/geometryUtils';

const GTMConnectorLines = () => {
  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
      {moduleDefs.map((def, idx) => {
        const { x, y } = getOrbitPosition(def.angle, moduleRadius);
        const centerRadius = centerTileSize / 2.2;
        const bufferX = center + (x / moduleRadius) * centerRadius;
        const bufferY = center + (y / moduleRadius) * centerRadius;
        const midX = (bufferX + (center + x)) / 2 + (idx % 2 === 0 ? 10 : -10);
        const midY = (bufferY + (center + y)) / 2 + (idx % 2 === 0 ? -8 : 6);
        
        return (
          <motion.path
            key={def.label}
            d={`M ${bufferX} ${bufferY} Q ${midX} ${midY} ${center + x} ${center + y}`}
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
