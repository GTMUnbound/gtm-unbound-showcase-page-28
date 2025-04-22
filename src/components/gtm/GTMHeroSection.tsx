
import React from 'react';
import { motion } from 'framer-motion';
import GTMDashboard from './GTMDashboard';
import GTMHeroVisualDynamicIntro from './GTMHeroVisualDynamicIntro';

const GTMHeroSection = () => {
  return (
    <section className="pt-24 pb-14 bg-white">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12">
          {/* LEFT COLUMN */}
          <div className="w-full md:w-3/5">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Go-To-Market, Without Guesswork
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-7 max-w-2xl font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The complete GTM layer for startups — strategy, execution, and expertise in one place.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-gtm-pink to-pink-400 text-white font-semibold shadow-pink-100 shadow-md hover:shadow-gtm-pink/40 transition-shadow">
                See How It Works
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white text-gtm-pink font-semibold border-2 border-gtm-pink/20 hover:border-gtm-pink/40 transition-colors">
                Join Now
              </button>
            </motion.div>
          </div>
          
          {/* RIGHT COLUMN — Enhanced GTM System Visual */}
          <div className="w-full md:w-2/5 flex justify-center items-start">
            <GTMHeroVisualDynamicIntro />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GTMHeroSection;
