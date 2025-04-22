
import { motion } from 'framer-motion';
import { moduleDefs } from './GTMModuleDefinitions';
import { getPos, visualSize, center, moduleRadius } from '../../utils/geometryUtils';

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.7,
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const GTMConnectorLines = () => {
  const modulesWithPos = moduleDefs.map(mod => {
    const { x, y } = getPos(mod.angle, moduleRadius);
    return {
      ...mod,
      x: center + x,
      y: center + y
    };
  });

  return (
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" width={visualSize} height={visualSize}>
      <defs>
        <linearGradient id="moduleLinePink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbc2eb" />
          <stop offset="100%" stopColor="#e64ba1" />
        </linearGradient>
      </defs>
      {modulesWithPos.map((mod) => (
        <motion.line
          key={mod.label}
          x1={center}
          y1={center}
          x2={mod.x}
          y2={mod.y}
          stroke="url(#moduleLinePink)"
          strokeWidth="2"
          strokeLinecap="round"
          variants={lineVariants}
          style={{ filter: "drop-shadow(0 0 6px #fbc2eb60)" }}
        />
      ))}
    </svg>
  );
};

export default GTMConnectorLines;
