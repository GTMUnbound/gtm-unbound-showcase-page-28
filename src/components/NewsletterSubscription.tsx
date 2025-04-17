
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import GradientButton from './GradientButton';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thanks for subscribing to our newsletter!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gtm-light text-gtm-pink p-2 rounded-full">
          <Mail size={20} />
        </div>
        <h3 className="font-medium text-gtm-dark">Get weekly GTM playbooks from real operators.</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gtm-pink"
          required
        />
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <GradientButton type="submit" className="w-full sm:w-auto">
            Subscribe
          </GradientButton>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default NewsletterSubscription;
