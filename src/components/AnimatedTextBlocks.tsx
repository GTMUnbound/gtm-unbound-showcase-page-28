
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface TextBlockItem {
  text: string;
  icon?: React.ReactNode;
}

type TextBlock = TextBlockItem[] | string[];

interface AnimatedTextBlocksProps {
  blocks: TextBlock[];
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
  
  // Determine if the block contains objects with icons or just strings
  const hasIcons = (block: TextBlock): block is TextBlockItem[] => {
    return typeof block[0] !== 'string';
  };

  if (prefersReducedMotion) {
    return (
      <div className="space-y-4 text-gray-600">
        {blocks.map((block, blockIndex) => (
          <div key={blockIndex} className="space-y-1">
            {hasIcons(block) ? (
              block.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2">
                  {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                  <p>{item.text}</p>
                </div>
              ))
            ) : (
              block.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))
            )}
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
          {hasIcons(block) ? (
            block.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-2">
                {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                <p>{item.text}</p>
              </div>
            ))
          ) : (
            block.map((line, lineIndex) => (
              <p key={lineIndex}>{line}</p>
            ))
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTextBlocks;
