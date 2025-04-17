
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadlineProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const AnimatedHeadline = ({ title, subtitle, className }: AnimatedHeadlineProps) => {
  const titleWords = title.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className={className}>
      <motion.div 
        className="mb-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark leading-tight">
          {titleWords.map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-3"
              variants={item}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>
      
      {subtitle && (
        <motion.p
          className="text-xl text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default AnimatedHeadline;
