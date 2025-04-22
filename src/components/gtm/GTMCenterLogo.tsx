
import { motion } from 'framer-motion';
import { centerTileSize } from '../../utils/geometryUtils';

const GTMCenterLogo = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-20"
      style={{
        width: centerTileSize,
        height: centerTileSize,
        transform: `translate(-50%,-50%)`,
        borderRadius: "36px",
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        duration: 0.8,
        delay: 0.3
      }}
    >
      <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-[36px] shadow-lg">
        <motion.div
          className="h-20 w-20 rounded-full bg-white shadow-inner flex items-center justify-center"
          animate={{ 
            boxShadow: ["0 0 18px #e64ba199, 0 0 6px #fbe0e6", "0 0 28px #e64ba199, 0 0 12px #fbe0e6"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img
            src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
            alt="GTM Unbound Logo"
            className="h-16 w-16 object-contain rounded-full mx-auto"
            style={{
              filter: "drop-shadow(0 0 12px #e64ba1C0)"
            }}
            draggable={false}
          />
        </motion.div>
        <p className="mt-2 text-lg font-bold leading-6 text-gtm-pink text-center select-none">
          GTM Unbound
        </p>
      </div>
    </motion.div>
  );
};

export default GTMCenterLogo;
