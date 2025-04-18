
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
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gtm-pink z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: hovered ? 1.5 : 1,
          opacity: visible ? 1 : 0
        }}
        transition={{
          x: { type: "spring", stiffness: 500, damping: 28 },
          y: { type: "spring", stiffness: 500, damping: 28 },
          scale: { type: "spring", stiffness: 500, damping: 15 },
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Follower/trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-gtm-pink z-[9998] pointer-events-none"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hovered ? 1.8 : 1,
          opacity: visible ? 0.5 : 0
        }}
        transition={{
          x: { type: "spring", stiffness: 250, damping: 30 },
          y: { type: "spring", stiffness: 250, damping: 30 },
          scale: { type: "spring", stiffness: 500, damping: 15 },
          opacity: { duration: 0.2 }
        }}
        style={{ mixBlendMode: "lighten" }}
      />
    </>
  );
};

export default CustomCursor;
