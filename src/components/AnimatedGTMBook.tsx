
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, Rocket } from 'lucide-react';

const AnimatedGTMBook = () => {
  const pages = [
    { title: "Where You Are", icon: <BookOpen className="w-6 h-6 text-white/80" />, color: "from-pink-400/20" },
    { title: "Matched Expert", icon: <Users className="w-6 h-6 text-white/80" />, color: "from-purple-400/20" },
    { title: "Roadmap", icon: <FileText className="w-6 h-6 text-white/80" />, color: "from-blue-400/20" },
    { title: "Launch in 6 Weeks", icon: <Rocket className="w-6 h-6 text-white/80" />, color: "from-green-400/20" }
  ];

  return (
    <div className="relative w-[300px] h-[400px]">
      {/* Book cover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gtm-pink to-purple-400 rounded-lg shadow-2xl"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: -15 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-2">The GTM Unbound Manual</h3>
            <div className="w-16 h-1 bg-white/30 mx-auto rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated pages */}
      {pages.map((page, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${page.color} to-white rounded-lg shadow-lg`}
          initial={{ rotateY: 0, x: 0 }}
          animate={{ 
            rotateY: -((index + 1) * 15), 
            x: ((index + 1) * 10),
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5 + (index * 0.2), 
            type: "spring" 
          }}
        >
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + (index * 0.2) }}
          >
            <div className="w-12 h-12 rounded-full bg-gtm-pink/10 flex items-center justify-center mb-4">
              {page.icon}
            </div>
            <h4 className="text-lg font-semibold text-gtm-dark">{page.title}</h4>
          </motion.div>
        </motion.div>
      ))}

      {/* Call to action */}
      <motion.button
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gtm-pink text-white rounded-xl shadow-lg flex items-center gap-2 hover:bg-gtm-pink/90 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        Start Your GTM Chapter
        <motion.span 
          animate={{ x: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.button>
    </div>
  );
};

export default AnimatedGTMBook;
