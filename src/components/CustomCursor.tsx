
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

const CustomCursor = () => {
  const { prefersReducedMotion, isMobile } = useAnimation();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // If user prefers reduced motion or is on mobile, don't show custom cursor
    if (prefersReducedMotion || isMobile) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    
    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    
    // Find all interactive elements and add hover listeners
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, select, textarea, .interactive'
    );
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => setHovered(true));
      element.addEventListener('mouseleave', () => setHovered(false));
    });
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => setHovered(true));
        element.removeEventListener('mouseleave', () => setHovered(false));
      });
    };
  }, [prefersReducedMotion, isMobile]);
  
  // If user prefers reduced motion or is on mobile, don't render cursor
  if (prefersReducedMotion || isMobile) return null;
  
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: position.x,
        y: position.y,
      }}
    >
      <motion.div 
        className="relative rounded-full bg-gtm-pink/50"
        animate={{
          width: hovered ? 20 : 12,
          height: hovered ? 20 : 12,
          opacity: visible ? 1 : 0,
          x: hovered ? -10 : -6,
          y: hovered ? -10 : -6,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          opacity: { duration: 0.2 }
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
