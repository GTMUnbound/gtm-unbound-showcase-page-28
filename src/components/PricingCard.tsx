
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

interface PricingCardProps {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  icon?: React.ReactNode;
  footnote?: string;
  className?: string;
}

const PricingCard = ({ 
  name, 
  price, 
  description, 
  features, 
  cta, 
  highlight = false, 
  icon, 
  footnote, 
  className 
}: PricingCardProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl overflow-hidden shadow-lg transition-all relative",
        highlight ? "border-2 border-gtm-pink" : "border border-gray-200",
        className
      )}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 30px 60px rgba(0,0,0,0.12)', 
        transition: { type: "spring", stiffness: 300, damping: 15 } 
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        delay: highlight ? 0 : 0.2
      }}
    >
      {highlight && (
        <motion.div 
          className="absolute top-0 right-0 bg-gtm-pink text-white text-xs font-bold py-1 px-3 rounded-bl-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          Popular
        </motion.div>
      )}

      <div className={cn(
        "p-6 bg-white",
        highlight ? "bg-gradient-to-b from-white to-gtm-light/30" : ""
      )}>
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <motion.div 
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mr-4",
              highlight ? "bg-gtm-pink text-white" : "bg-gtm-light text-gtm-pink"
            )}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gtm-dark">{name}</h3>
        </motion.div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gtm-dark">{price.monthly}</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <div className="text-sm text-gray-500">or {price.yearly}/year</div>
        </motion.div>

        <motion.p 
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="space-y-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.3 }}
            >
              <motion.div 
                className="text-gtm-pink mr-2 mt-0.5"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Check size={18} />
              </motion.div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {footnote && (
          <motion.p 
            className="text-sm text-gray-500 italic mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            {footnote}
          </motion.p>
        )}

        <motion.button 
          className={cn(
            "w-full py-3 rounded-lg font-medium transition-colors",
            highlight 
              ? "bg-gtm-pink text-white hover:bg-gtm-pink/90" 
              : "bg-gray-100 text-gtm-dark hover:bg-gray-200"
          )}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: highlight ? '0 10px 25px rgba(255, 107, 157, 0.3)' : '0 10px 15px rgba(0, 0, 0, 0.08)' 
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {cta}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
