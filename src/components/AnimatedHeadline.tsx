
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadlineProps {
  title: string;
  subtitle?: string;
  className?: string;
  highlightWords?: string[];
}

const AnimatedHeadline = ({ 
  title, 
  subtitle, 
  className, 
  highlightWords = [] 
}: AnimatedHeadlineProps) => {
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
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const highlightVariant = {
    initial: { backgroundSize: "0% 100%" },
    animate: { 
      backgroundSize: "100% 100%",
      transition: { duration: 0.8, delay: 1.2 }
    }
  };
  
  return (
    <div className={className}>
      <motion.div 
        className="mb-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark leading-tight">
          {titleWords.map((word, i) => {
            const isHighlighted = highlightWords.includes(word);
            
            return (
              <motion.span 
                key={i} 
                className={`inline-block mr-3 ${
                  isHighlighted 
                    ? "bg-gradient-to-r from-gtm-pink to-gtm-coral bg-no-repeat bg-bottom" 
                    : ""
                }`}
                style={isHighlighted ? { backgroundSize: "0% 15%", backgroundPosition: "0 88%" } : {}}
                variants={item}
                {...(isHighlighted && {
                  initial: "initial",
                  whileInView: "animate",
                  viewport: { once: true, margin: "-50px" },
                  ...highlightVariant
                })}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
      </motion.div>
      
      {subtitle && (
        <motion.p
          className="text-xl text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            delay: 0.6, 
            duration: 0.5,
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default AnimatedHeadline;
