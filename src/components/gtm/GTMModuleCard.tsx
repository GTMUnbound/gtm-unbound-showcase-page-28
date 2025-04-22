
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { moduleCardW, moduleCardH } from '../../utils/geometryUtils';

interface GTMModuleCardProps {
  x: number;
  y: number;
  label: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  index: number;
}

const moduleVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 10 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: {
      type: "spring",
      stiffness: 61,
      damping: 21,
      delay: 0.12 + i * 0.07,
    }
  }),
  hover: {
    scale: 1.06,
    boxShadow: "0 4px 27px #fbc2eb29, 0 0 18px #e64ba122",
    zIndex: 30,
    transition: { type: "spring", stiffness: 180, damping: 17 }
  }
};

const GTMModuleCard = ({ x, y, label, description, Icon, color, index }: GTMModuleCardProps) => {
  return (
    <motion.div
      className="absolute z-20"
      style={{
        top: y - moduleCardH/2,
        left: x - moduleCardW/2,
        width: moduleCardW,
        height: moduleCardH,
      }}
      variants={moduleVariants}
      custom={index}
      whileHover="hover"
    >
      <motion.div
        className="bg-white rounded-xl shadow-lg px-4 py-2.5 flex flex-col items-center gap-2 border border-gray-100/80 backdrop-blur-sm"
        style={{
          minWidth: 90,
          boxShadow: "0 2px 14px #e64ba12A"
        }}
      >
        <Icon className={`h-7 w-7 ${color}`} />
        <span className="text-sm font-semibold text-gray-700 text-center">
          {label}
        </span>
      </motion.div>
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 translate-y-2 pointer-events-none whitespace-nowrap"
        initial={false}
        animate={{ 
          opacity: 0,
          y: 10,
          scale: 0.95
        }}
        whileHover={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 0.2
        }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default GTMModuleCard;
