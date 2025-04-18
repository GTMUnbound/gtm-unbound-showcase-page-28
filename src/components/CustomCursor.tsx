
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
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-gtm-pink/70 z-[9999] pointer-events-none"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: hovered ? 1.5 : 1,
        opacity: visible ? 1 : 0
      }}
      transition={{
        x: { type: "spring", stiffness: 900, damping: 40 },
        y: { type: "spring", stiffness: 900, damping: 40 },
        scale: { type: "spring", stiffness: 800, damping: 25 },
        opacity: { duration: 0.2 }
      }}
    />
  );
};

export default CustomCursor;
