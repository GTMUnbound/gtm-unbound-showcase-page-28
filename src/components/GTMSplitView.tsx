
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';  // Replacing Browser with Globe

const GTMSplitView = () => {
  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gtm-pink/5 to-transparent" />
      </div>
      
      {/* Browser Window */}
      <motion.div 
        className="absolute inset-6 bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Browser Tab Bar */}
        <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
          {/* Closed Tabs - Blurred out */}
          <div className="flex space-x-1">
            <motion.div 
              className="h-7 w-36 bg-gray-200/50 rounded-t-lg flex items-center px-2 text-xs text-gray-400 line-through"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 }}
            >
              SaaS_GTM_plan.pdf
            </motion.div>
            <motion.div 
              className="h-7 w-32 bg-gray-200/50 rounded-t-lg flex items-center px-2 text-xs text-gray-400 line-through"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4 }}
            >
              10x_growth_channels
            </motion.div>
            <motion.div 
              className="h-7 w-40 bg-gray-200/50 rounded-t-lg flex items-center px-2 text-xs text-gray-400 line-through"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
            >
              agency_contract_final_v6
            </motion.div>
          </div>
          
          {/* Active Tab */}
          <motion.div 
            className="h-8 bg-white rounded-t-lg shadow-sm flex items-center px-3 space-x-2 relative z-10 border-t border-l border-r border-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Globe className="w-4 h-4 text-gtm-pink" />
            <span className="text-sm font-medium text-gtm-pink">
              GTM Unbound — The GTM Layer
            </span>
            <motion.div 
              className="absolute inset-0 bg-gtm-pink/5"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
        
        {/* Browser Content */}
        <div className="relative h-[calc(100%-2.5rem)] p-6">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="w-full h-12 bg-gray-100 rounded-full px-6 flex items-center mb-4">
              <span className="text-gray-400">google.com/search?q=</span>
              <span className="text-gray-600 ml-1">How to scale without burning out?</span>
            </div>
            
            {/* Search Results */}
            <div className="space-y-4">
              <motion.div 
                className="p-4 rounded-lg bg-gtm-pink/5 border border-gtm-pink/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-gtm-pink mb-2">
                  GTM Unbound: The Complete GTM Layer for Startups
                </h3>
                <p className="text-gray-600">
                  Strategy, execution, and expertise in one place. Stop burning out trying to figure it all out alone.
                </p>
              </motion.div>
              
              {/* Other Results - Faded */}
              <div className="opacity-40">
                <div className="p-4 rounded-lg bg-gray-50 mb-3">
                  <h3 className="text-lg font-medium text-gray-400">Generic Growth Article #1</h3>
                  <p className="text-gray-400">Another high-level overview that doesn't quite help...</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-400">10 Tips for Scaling (2023)</h3>
                  <p className="text-gray-400">Same advice you've seen before...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Overlay Message */}
      <motion.div 
        className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-lg font-semibold text-gtm-pink">
          This is the one tab you need.
        </p>
      </motion.div>
    </div>
  );
};

export default GTMSplitView;
