
import { Variants } from "framer-motion";

// Fade up animation - useful for sections and content blocks
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  })
};

// Staggered children animation - for lists and grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

// Soft scale animation - for cards and interactive elements
export const softScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.03, 
    boxShadow: "0 10px 30px -10px rgba(252, 110, 151, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.97
  }
};

// Slide in animation - for list items and cards
export const slideInVariants: Variants = {
  hidden: (direction = 1) => ({
    opacity: 0,
    x: direction * 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Draw line animation - for connectors and decorative elements
export const drawLineVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeInOut" 
    }
  }
};

// Float animation - for subtle movement
export const floatVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};
