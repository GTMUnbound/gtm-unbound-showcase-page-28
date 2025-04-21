
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleBlockProps {
  title: string;
  children: React.ReactNode;
  initiallyOpen?: boolean;
  className?: string;
}

const CollapsibleBlock: React.FC<CollapsibleBlockProps> = ({ 
  title, 
  children, 
  initiallyOpen = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  
  return (
    <div className={`border border-pink-100 rounded-lg overflow-hidden bg-white ${className}`}>
      <button
        className="w-full px-4 py-3 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gtm-dark">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gtm-pink" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gtm-pink" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleBlock;
