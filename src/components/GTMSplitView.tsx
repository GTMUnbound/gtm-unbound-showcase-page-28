
import React from 'react';
import { motion } from 'framer-motion';
import FounderDesk from './FounderDesk';

const GTMSplitView = () => {
  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
      {/* Split background with diagonal line */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gtm-pink/5 to-transparent" />
      </div>
      
      {/* Diagonal divider */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-gtm-pink/20 to-transparent transform -translate-x-1/2 rotate-6" />
      </motion.div>
      
      {/* Left side - Messy desk */}
      <div className="absolute left-0 top-0 w-1/2 h-full p-6">
        <FounderDesk />
        <div className="absolute bottom-4 left-4 text-sm text-gray-500 font-medium">
          Yesterday
        </div>
      </div>
      
      {/* Right side - GTM Dashboard */}
      <div className="absolute right-0 top-0 w-1/2 h-full p-6">
        <motion.div 
          className="h-full bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-4">
              <div className="bg-gtm-pink/5 p-4 rounded-lg">
                <h3 className="font-semibold text-gtm-pink">Strategy</h3>
                <div className="mt-2 h-2 w-3/4 bg-gtm-pink/20 rounded" />
                <div className="mt-2 h-2 w-1/2 bg-gtm-pink/20 rounded" />
              </div>
              
              <div className="bg-gtm-pink/5 p-4 rounded-lg">
                <h3 className="font-semibold text-gtm-pink">Execution</h3>
                <div className="mt-2 h-2 w-2/3 bg-gtm-pink/20 rounded" />
                <div className="mt-2 h-2 w-4/5 bg-gtm-pink/20 rounded" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gtm-pink/5 p-4 rounded-lg">
                <h3 className="font-semibold text-gtm-pink">Experts</h3>
                <div className="mt-2 h-2 w-5/6 bg-gtm-pink/20 rounded" />
                <div className="mt-2 h-2 w-3/4 bg-gtm-pink/20 rounded" />
              </div>
              
              <div className="bg-gtm-pink/5 p-4 rounded-lg">
                <h3 className="font-semibold text-gtm-pink">Channels</h3>
                <div className="mt-2 h-2 w-2/3 bg-gtm-pink/20 rounded" />
                <div className="mt-2 h-2 w-1/2 bg-gtm-pink/20 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-4 right-4 text-sm text-gtm-pink font-medium">
          GTM Unbound Today
        </div>
      </div>
      
      {/* Overlay title */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          <h2 className="text-xl font-semibold text-gtm-pink">
            This was yesterday. GTM Unbound is today.
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default GTMSplitView;
