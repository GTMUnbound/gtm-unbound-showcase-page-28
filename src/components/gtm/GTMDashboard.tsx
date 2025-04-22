import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { getPos, visualSize, moduleRadius } from '../../utils/geometryUtils';
import { moduleDefs } from './GTMModuleDefinitions';
import GTMCenterLogo from './GTMCenterLogo';
import GTMConnectorLines from './GTMConnectorLines';
import GTMModuleCard from './GTMModuleCard';

const GTMDashboard = () => {
  const controls = useAnimation();
  useEffect(() => { controls.start('visible'); }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.085,
        delayChildren: 0.12,
      }
    }
  };

  const modulesWithPos = moduleDefs.map((mod, idx) => {
    const { x, y } = getPos(mod.angle, moduleRadius);
    return {
      ...mod,
      x: visualSize/2 + x,
      y: visualSize/2 + y,
      idx
    };
  });

  return (
    <div className="flex flex-col items-center md:items-end w-full">
      <div className="hidden md:block mb-2 text-center w-full">
        <span className="text-xs font-semibold tracking-wider text-gtm-pink/80 uppercase letter-spacing-wide">
          The GTM System
        </span>
      </div>
      <motion.div
        className="relative hidden md:block mx-auto bg-white/90 backdrop-blur-sm"
        style={{
          width: `${visualSize}px`,
          height: `${visualSize}px`,
          minWidth: `${visualSize}px`,
          minHeight: `${visualSize}px`,
          borderRadius: "36px",
          boxShadow: "0 2px 24px 0px #fbc2eb22, 0 0 40px #fde1d309 inset"
        }}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <GTMConnectorLines />
        <GTMCenterLogo />
        {modulesWithPos.map((mod) => (
          <GTMModuleCard
            key={mod.label}
            x={mod.x}
            y={mod.y}
            label={mod.label}
            description={mod.description}
            Icon={mod.icon}
            color={mod.color}
            index={mod.idx}
          />
        ))}
      </motion.div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center">
          <div
            className="mx-auto mt-2 mb-5 w-20 h-20 rounded-2xl bg-white shadow-lg border border-pink-100 flex flex-col items-center justify-center"
            style={{
              boxShadow: "0 0 14px 3px #ffb0e777, 0 2px 10px #fbc2eb33"
            }}
          >
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-inner border-4 border-white">
              <img
                src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
                alt="GTM Unbound Logo"
                className="w-10 h-10 object-contain mx-auto"
                style={{
                  filter: "drop-shadow(0 0 7px #e64ba199)"
                }}
                draggable={false}
              />
            </div>
            <div className="mt-1 text-base font-bold text-gtm-pink text-center">
              GTM Unbound
            </div>
          </div>
          <div className="mb-1"></div>
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-xs mx-auto">
            {moduleDefs.map((mod, idx) => (
              <div
                key={mod.label}
                className="bg-white rounded-xl shadow px-3 py-2 flex items-center gap-2 border border-gray-100 hover:shadow-lg transition-all duration-200 min-w-[84px] mb-1"
                style={{
                  boxShadow: "0 2px 14px #e64ba12A"
                }}
              >
                <mod.icon className={`h-7 w-7 ${mod.color}`} />
                <span className="text-sm font-bold text-gray-700">{mod.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTMDashboard;
