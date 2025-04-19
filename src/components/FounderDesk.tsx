
import React from 'react';
import { motion } from 'framer-motion';

const FounderDesk = () => {
  return (
    <motion.div 
      className="w-full h-full max-w-[550px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-4 overflow-hidden relative">
        {/* Tablet screen in the center */}
        <motion.div 
          className="relative bg-gray-100 rounded-lg aspect-video mb-4 overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* GTM Unbound dashboard screen */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white p-4">
            <div className="h-2 w-16 bg-gtm-pink/30 rounded-full mb-4"></div>
            <div className="h-2 w-32 bg-gtm-pink/20 rounded-full mb-3"></div>
            <div className="h-2 w-24 bg-gtm-pink/10 rounded-full mb-6"></div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="h-2 w-12 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-6 w-16 bg-gtm-pink/20 rounded-md"></div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="h-2 w-12 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-6 w-16 bg-blue-400/20 rounded-md"></div>
              </div>
            </div>
            
            <motion.div 
              className="absolute bottom-4 right-4 h-8 w-8 bg-gtm-pink/30 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          {/* Subtle glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gtm-pink/5 mix-blend-overlay"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Sticky notes */}
        <div className="flex flex-wrap gap-3 mb-4">
          <motion.div 
            className="bg-yellow-100 p-3 rounded shadow-sm transform rotate-2 text-sm"
            initial={{ rotate: 2, y: 20, opacity: 0 }}
            animate={{ rotate: 2, y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
          >
            "Talk to Arjun (GTM Expert) ✅"
          </motion.div>
          
          <motion.div 
            className="bg-blue-100 p-3 rounded shadow-sm transform -rotate-1 text-sm"
            initial={{ rotate: -1, y: 20, opacity: 0 }}
            animate={{ rotate: -1, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
          >
            "RevOps? Who owns this??"
          </motion.div>
          
          <motion.div 
            className="bg-green-100 p-3 rounded shadow-sm transform rotate-1 text-sm"
            initial={{ rotate: 1, y: 20, opacity: 0 }}
            animate={{ rotate: 1, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
          >
            "Launch checklist →"
          </motion.div>
        </div>
        
        {/* Desk items */}
        <div className="flex justify-between items-end">
          <motion.div 
            className="bg-gtm-pink/10 h-12 w-12 rounded-md relative overflow-hidden"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            {/* Coffee mug */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-[10px] text-gtm-pink font-medium">
                Scale Smarter
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="h-6 w-20 bg-gray-200 rounded flex items-center justify-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="h-4 w-4 rounded-full bg-gtm-pink mr-1"></div>
            <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
          </motion.div>
        </div>
        
        {/* Open tabs */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded px-3 py-1 text-xs text-gray-500 whitespace-nowrap">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="inline-block mr-2">
              📑 LinkedIn Growth Plan
            </span>
            <span className="inline-block mr-2">
              📊 Narrative Testing Matrix
            </span>
            <span className="inline-block">
              🚀 Growth Sprint Tracker
            </span>
          </motion.div>
        </div>
        
        {/* Slack notification */}
        <motion.div 
          className="absolute -right-2 top-1/2 transform translate-x-0 -translate-y-1/2 bg-white shadow-lg rounded-lg p-3 text-xs max-w-[180px]"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
        >
          <div className="flex items-center mb-1">
            <div className="h-4 w-4 bg-purple-400 rounded mr-2"></div>
            <div className="font-semibold text-gray-800">GTM Unbound</div>
          </div>
          <div className="text-gray-600">Next call: GTM Roundtable in 15 mins</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FounderDesk;
