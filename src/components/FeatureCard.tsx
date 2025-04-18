
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <motion.div 
      className={cn(
        "bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100/40 transition-all",
        "hover:shadow-xl hover:border-gtm-pink/20",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 70,
        damping: 15
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.03,
        boxShadow: '0 15px 25px rgba(0,0,0,0.07)',
      }}
    >
      <motion.div 
        className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-gtm-coral to-gtm-pink text-white mb-4"
        initial={{ scale: 0.8, rotate: -5 }}
        whileInView={{ scale: 1, rotate: 0 }}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 15 
        }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-lg font-semibold mb-2 text-gtm-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {description}
      </motion.p>
      
      {/* Add a subtle animated accent line */}
      <motion.div 
        className="w-0 h-0.5 bg-gradient-to-r from-gtm-coral to-gtm-pink mt-4 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        whileHover={{ width: "80%" }}
        transition={{ 
          duration: 0.4, 
          delay: 0.3,
          ease: "easeOut" 
        }}
      />
    </motion.div>
  );
};

export default FeatureCard;
