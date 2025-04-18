
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface AnimatedTextProps {
  text: string;
  type?: 'character' | 'word' | 'line';
  className?: string;
  staggerChildren?: number;
  delayStart?: number;
  highlightWords?: string[];
  animate?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'word',
  className = '',
  staggerChildren = 0.03,
  delayStart = 0,
  highlightWords = [],
  animate = true
}) => {
  const { prefersReducedMotion } = useAnimation();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delayStart * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [animate, delayStart]);
  
  if (prefersReducedMotion) {
    return <div className={className}>{text}</div>;
  }
  
  const textArray = type === 'character' 
    ? text.split('') 
    : type === 'word' 
      ? text.split(' ')
      : [text];
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayStart,
      },
    }),
  };
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const isHighlighted = (word: string) => highlightWords.includes(word);
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      {textArray.map((el, index) => (
        <motion.span
          key={index}
          className={`inline-block ${
            type === 'word' && isHighlighted(el)
              ? 'text-gtm-pink'
              : ''
          }`}
          variants={child}
        >
          {el}
          {type === 'word' && index !== textArray.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
