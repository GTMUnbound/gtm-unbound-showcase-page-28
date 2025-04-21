
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface AnimatedTextBlocksProps {
  blocks: string[][];
  delayBetweenBlocks?: number;
}

const AnimatedTextBlocks: React.FC<AnimatedTextBlocksProps> = ({ 
  blocks, 
  delayBetweenBlocks = 1 
}) => {
  const { prefersReducedMotion } = useAnimation();
  const [visibleBlocks, setVisibleBlocks] = useState<number>(0);
  
  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleBlocks(blocks.length);
      return;
    }
    
    let currentBlock = 0;
    
    const timer = setInterval(() => {
      currentBlock += 1;
      setVisibleBlocks(currentBlock);
      
      if (currentBlock >= blocks.length) {
        clearInterval(timer);
      }
    }, delayBetweenBlocks * 1000);
    
    return () => clearInterval(timer);
  }, [blocks.length, delayBetweenBlocks, prefersReducedMotion]);
  
  if (prefersReducedMotion) {
    return (
      <div className="space-y-4 text-gray-600">
        {blocks.map((block, blockIndex) => (
          <div key={blockIndex} className="space-y-1">
            {block.map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-6 text-gray-600">
      {blocks.map((block, blockIndex) => (
        <motion.div 
          key={blockIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={blockIndex < visibleBlocks ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="space-y-1"
        >
          {block.map((line, lineIndex) => (
            <p key={lineIndex}>{line}</p>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTextBlocks;
