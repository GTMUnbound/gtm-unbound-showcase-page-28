
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/contexts/AnimationContext";

interface FloatingCTAProps {
  text: string;
  onClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ text, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { hasScrolled, isMobile } = useAnimation();
  
  // Show the CTA only after scrolling down and only on desktop
  useEffect(() => {
    if (hasScrolled && !isMobile) {
      // Add a small delay before showing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [hasScrolled, isMobile]);
  
  if (isMobile) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full bg-gradient-to-r from-gtm-pink to-pink-400 text-white font-semibold shadow-lg hover:shadow-pink-300/40 transition-shadow"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
          onClick={onClick}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(255, 78, 153, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Inner glow effect */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <span className="relative z-10">{text}</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
