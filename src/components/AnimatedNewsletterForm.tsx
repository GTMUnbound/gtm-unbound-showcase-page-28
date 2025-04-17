
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import GradientButton from './GradientButton';

interface AnimatedNewsletterFormProps {
  onSubmit: (email: string) => void;
  className?: string;
}

const AnimatedNewsletterForm = ({ onSubmit, className }: AnimatedNewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
      setEmail('');
    }
  };
  
  return (
    <motion.div
      className={`${className} bg-white rounded-lg shadow-md p-6 overflow-hidden relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-pink-50/70 to-blue-50/70 z-0"
        animate={{ 
          opacity: isHovered || isFocused ? 0.8 : 0.3,
          background: isHovered || isFocused ? 
            'linear-gradient(to right, rgba(254,226,226,0.5), rgba(219,234,254,0.5))' : 
            'linear-gradient(to right, rgba(254,226,226,0.2), rgba(219,234,254,0.2))'
        }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="flex items-center gap-3 relative z-10">
        <motion.div 
          className="bg-gtm-light text-gtm-pink p-2 rounded-full"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <MessageCircle size={20} />
        </motion.div>
        <p className="font-medium text-gtm-dark">Get weekly GTM playbooks from real operators.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2 mt-4 relative z-10">
        <motion.input
          type="email"
          placeholder="Your email address"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gtm-pink w-full md:w-auto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          whileFocus={{ scale: 1.02 }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
          animate={{ 
            boxShadow: isFocused ? "0 0 0 3px rgba(236, 72, 153, 0.2)" : "0 0 0 rgba(0,0,0,0)"
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GradientButton type="submit" className="whitespace-nowrap">
            Subscribe
          </GradientButton>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AnimatedNewsletterForm;
