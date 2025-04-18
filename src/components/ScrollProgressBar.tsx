
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

const ScrollProgressBar = () => {
  const { prefersReducedMotion } = useAnimation();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gtm-pink to-pink-400 z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
