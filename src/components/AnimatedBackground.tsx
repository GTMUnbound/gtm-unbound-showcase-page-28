
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface AnimatedBackgroundProps {
  type?: 'wave' | 'blob' | 'gradient';
  intensity?: 'subtle' | 'medium' | 'high';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  type = 'blob',
  intensity = 'subtle',
  className
}) => {
  const { prefersReducedMotion } = useAnimation();
  
  // No animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-r from-gtm-light to-white opacity-30 ${className}`} />
    );
  }

  // Animation variants based on type
  if (type === 'wave') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
          <defs>
            <linearGradient id="gtmGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255, 93, 143, 0.15)" />
              <stop offset="100%" stopColor="rgba(255, 210, 161, 0.15)" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#gtmGradient)"
            initial={{ d: "M0,160 C480,200 960,120 1440,160 L1440,400 L0,400 Z" }}
            animate={{
              d: [
                "M0,160 C480,200 960,120 1440,160 L1440,400 L0,400 Z",
                "M0,180 C480,140 960,200 1440,180 L1440,400 L0,400 Z",
                "M0,160 C480,200 960,120 1440,160 L1440,400 L0,400 Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: intensity === 'subtle' ? 20 : intensity === 'medium' ? 15 : 10,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    );
  }
  
  if (type === 'blob') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 bg-gradient-to-r from-gtm-pink to-pink-300"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${30 + i * 15}%`,
              top: `${20 + i * 20}%`,
              filter: 'blur(100px)'
            }}
            animate={{
              x: [0, 30, 0, -30, 0],
              y: [0, -40, 20, -20, 0],
              scale: [1, 1.1, 1, 0.9, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>
    );
  }
  
  // Default gradient
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br from-gtm-light via-white to-pink-50 ${className}`}
      animate={{
        background: [
          'linear-gradient(135deg, rgba(255,240,245,0.3) 0%, rgba(255,255,255,0.7) 50%, rgba(255,210,161,0.2) 100%)',
          'linear-gradient(135deg, rgba(255,210,161,0.2) 0%, rgba(255,255,255,0.7) 50%, rgba(255,240,245,0.3) 100%)',
          'linear-gradient(135deg, rgba(255,240,245,0.3) 0%, rgba(255,255,255,0.7) 50%, rgba(255,210,161,0.2) 100%)'
        ]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default AnimatedBackground;
