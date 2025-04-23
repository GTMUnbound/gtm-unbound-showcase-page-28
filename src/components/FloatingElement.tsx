
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/contexts/AnimationContext';

type FloatingElementProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  hoverScale?: number;
  colorShift?: boolean;
};

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 4,
  distance = 10,
  className = '',
  hoverScale = 1.05,
  colorShift = false
}) => {
  const { prefersReducedMotion } = useAnimation();
  
  const floatTransition = {
    duration: duration,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
    delay: delay,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      animate={!prefersReducedMotion ? { 
        y: [-distance/2, distance/2],
      } : {}}
      transition={floatTransition}
      whileHover={!prefersReducedMotion ? {
        scale: hoverScale,
        transition: { duration: 0.3 }
      } : {}}
    >
      {colorShift ? (
        <motion.div
          className="relative"
          whileHover={{
            filter: "hue-rotate(15deg) brightness(1.05)",
            transition: { duration: 0.3 }
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default FloatingElement;
