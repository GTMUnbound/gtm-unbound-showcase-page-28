
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  glowColor?: string;
  type?: 'button' | 'submit';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 20,
  glowColor = 'rgba(255, 93, 143, 0.3)',
  type = 'button'
}) => {
  const { prefersReducedMotion, isMobile } = useAnimation();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  
  // Reset position when not hovering
  useEffect(() => {
    if (!hovered) {
      setPosition({ x: 0, y: 0 });
    }
  }, [hovered]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || isMobile) return;
    
    const element = buttonRef.current;
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);
    
    setPosition({ 
      x: distanceX * strength, 
      y: distanceY * strength 
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      animate={{
        x: position.x,
        y: position.y,
        boxShadow: hovered 
          ? `0 10px 25px -5px ${glowColor}, 0 8px 10px -6px ${glowColor}`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      {hovered && !prefersReducedMotion && !isMobile && (
        <motion.div
          className="absolute inset-0 bg-white rounded-full blur-lg opacity-70"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Content */}
      <motion.div 
        className="relative z-10"
        animate={{ 
          scale: hovered ? 1.03 : 1 
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default MagneticButton;
