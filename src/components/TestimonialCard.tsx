
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, company, className }: TestimonialCardProps) => {
  return (
    <motion.div 
      className={cn(
        "relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100/40 overflow-hidden",
        className
      )}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.03,
        boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}
    >
      {/* Large quote mark in background */}
      <motion.div
        className="absolute top-4 left-4 text-gtm-pink/10 z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Quote size={80} />
      </motion.div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0.5, y: 10, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 0.2, 
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }}
      >
        <Quote className="text-gtm-coral h-6 w-6 mb-4" />
      </motion.div>
      
      <motion.div className="relative z-10">
        <motion.p 
          className="text-lg text-gray-700 italic mb-6 leading-relaxed"
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          {quote}
        </motion.p>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.3,
            type: "spring"
          }}
        >
          <div className="w-8 h-8 bg-gtm-pink/20 rounded-full mr-3 flex items-center justify-center">
            <span className="text-sm font-medium text-gtm-pink">{author.charAt(0)}</span>
          </div>
          <div>
            <span className="text-gtm-pink font-semibold">{author}</span>
            <span className="text-gray-500">, {company}</span>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Shimmering effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0 bg-gradient-shimmer opacity-20"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "linear",
          repeatDelay: 2 
        }}
      />
    </motion.div>
  );
};

export default TestimonialCard;
