
import React, { ReactNode, forwardRef } from "react";
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

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({
  children, 
  className,
  delay = 0,
  id,
  animation = "fadeUp"
}, ref) => {
  const [internalRef, isInView] = useIntersectionObserver();
  
  // Combine the external ref with our internal ref
  const setRefs = React.useCallback(
    (element: HTMLDivElement | null) => {
      // For the internal ref
      if (typeof internalRef === 'function') {
        (internalRef as Function)(element);
      } else if (internalRef) {
        (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = element;
      }
      
      // For the forwarded ref
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    },
    [internalRef, ref]
  );
  
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
      ref={setRefs}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      custom={delay}
    >
      {children}
    </motion.section>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
