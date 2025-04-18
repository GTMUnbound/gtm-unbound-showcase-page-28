
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

interface ClientLogoProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  className?: string;
  inverted?: boolean;
  bgColor?: string;
  animate?: boolean;
}

const ClientLogo = ({ 
  src, 
  alt, 
  name, 
  description, 
  className, 
  inverted = false,
  bgColor,
  animate = false
}: ClientLogoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Reset animation if needed
  useEffect(() => {
    if (isInView && animate) {
      // Add a delay before showing the full logo
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, animate]);
  
  return (
    <motion.div 
      ref={ref}
      className={cn(
        "flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md",
        "hover:shadow-xl transition-all border border-gray-100/40",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <div className={cn(
        "mb-4 px-4 py-6 flex items-center justify-center h-32 w-full rounded-lg overflow-hidden relative",
        bgColor || "bg-white"
      )}>
        {/* Logo with drawing animation effect when in view */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Base logo (shows immediately) */}
          <motion.img 
            src={src} 
            alt={alt} 
            className={cn(
              "h-24 md:h-28 object-contain mx-auto max-w-[80%] transition-opacity",
              inverted ? "brightness-0 invert" : "",
              animate && !animationComplete ? "opacity-0" : "opacity-100"
            )}
            initial={{ opacity: animate ? 0 : 1 }}
            animate={{ opacity: animate && !animationComplete ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Drawing animation overlay */}
          {animate && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: animationComplete ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-full h-full absolute" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Logo outline paths that animate drawing in sequence */}
                <motion.path
                  d="M20,20 L20,80 L80,80 L80,20 Z" 
                  stroke="#FF6B9D"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ 
                    pathLength: isInView ? 1 : 0,
                    opacity: animationComplete ? 0 : 1
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: "easeInOut"
                  }}
                />
                
                <motion.path
                  d="M30,30 L70,30 L70,70 L30,70 Z" 
                  stroke="#FF8A8A"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ 
                    pathLength: isInView ? 1 : 0,
                    opacity: animationComplete ? 0 : 1
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.3,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.path
                  d="M40,40 L60,40 L60,60 L40,60 Z" 
                  stroke="#FF6B9D"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ 
                    pathLength: isInView ? 1 : 0,
                    opacity: animationComplete ? 0 : 1
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6,
                    ease: "easeInOut"
                  }}
                />
              </svg>
              
              {/* This creates a subtle pulse animation while drawing */}
              <motion.div
                className="w-12 h-12 rounded-full bg-gtm-pink/10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8], 
                  opacity: animationComplete ? 0 : [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}
          
          {/* Shimmer effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-shimmer opacity-20"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "linear",
              repeatDelay: 3
            }}
          />
        </div>
      </div>
      
      <motion.div 
        className="text-lg font-semibold text-gtm-dark"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {name}
      </motion.div>
      
      <motion.div 
        className="text-sm text-gray-500"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default ClientLogo;
