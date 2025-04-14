
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
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {highlight && (
        <div className="absolute top-0 right-0 bg-gtm-pink text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
          Popular
        </div>
      )}

      <div className={cn(
        "p-6 bg-white",
        highlight ? "bg-gradient-to-b from-white to-gtm-light/30" : ""
      )}>
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center mr-4",
            highlight ? "bg-gtm-pink text-white" : "bg-gtm-light text-gtm-pink"
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gtm-dark">{name}</h3>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gtm-dark">{price.monthly}</span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>
          <div className="text-sm text-gray-500">or {price.yearly}/year</div>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-gtm-pink mr-2 mt-0.5">
                <Check size={18} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {footnote && (
          <p className="text-sm text-gray-500 italic mb-6">{footnote}</p>
        )}

        <button className={cn(
          "w-full py-3 rounded-lg font-medium transition-colors",
          highlight 
            ? "bg-gtm-pink text-white hover:bg-gtm-pink/90" 
            : "bg-gray-100 text-gtm-dark hover:bg-gray-200"
        )}>
          {cta}
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
