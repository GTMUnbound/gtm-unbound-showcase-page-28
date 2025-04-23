
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeUpVariants } from "@/utils/AnimationUtils";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  animation?: "fadeUp" | "fadeIn" | "scaleIn" | "none";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  delay = 0,
  id,
  animation = "fadeUp"
}) => {
  const [ref, isInView] = useIntersectionObserver();
  
  // Define animation variants based on the animation prop
  const getVariants = () => {
    switch (animation) {
      case "fadeUp":
        return fadeUpVariants;
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration: 0.7, delay }
          }
        };
      case "scaleIn":
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.6, 
              delay,
              type: "spring",
              damping: 20,
              stiffness: 100
            }
          }
        };
      case "none":
        return {
          hidden: {},
          visible: {}
        };
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      custom={delay}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
