
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
        "bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-hidden",
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 20px 30px rgba(0,0,0,0.08)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      }}
    >
      <motion.div
        initial={{ opacity: 0.5, y: 10, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 0.2, 
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }}
      >
        <Quote className="text-gtm-coral h-6 w-6 mb-4 opacity-50" />
      </motion.div>
      
      <motion.p 
        className="text-gray-700 italic mb-4 leading-relaxed"
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
        className="font-medium"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5, 
          duration: 0.3,
          type: "spring"
        }}
      >
        <span className="text-gtm-dark">{author}</span>
        <span className="text-gray-500">, {company}</span>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
