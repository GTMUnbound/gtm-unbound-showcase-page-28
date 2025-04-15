
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, BookOpen, Users, Globe } from 'lucide-react';

const ProcessVisualization: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: <Brain className="w-12 h-12 text-gtm-pink" />,
      title: "Facing the GTM Fog",
      description: "Founders feel stuck on their go-to-market strategy",
      className: "bg-soft-blue"
    },
    {
      icon: <Users className="w-12 h-12 text-gtm-pink" />,
      title: "Expert Match",
      description: "Matched with proven GTM experts",
      className: "bg-soft-green"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-gtm-pink" />,
      title: "Playbook",
      description: "Create a customized GTM strategy",
      className: "bg-soft-yellow"
    },
    {
      icon: <Users className="w-12 h-12 text-gtm-pink" />,
      title: "Execution",
      description: "Assemble the right team to execute",
      className: "bg-soft-orange"
    },
    {
      icon: <Globe className="w-12 h-12 text-gtm-pink" />,
      title: "Launch",
      description: "Scale across borders with confidence",
      className: "bg-soft-purple"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full md:max-w-md mx-auto relative h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`w-full p-6 rounded-xl shadow-lg ${steps[currentIndex].className} border border-gray-100`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
              {steps[currentIndex].icon}
            </div>
            <h3 className="text-xl font-bold text-gtm-dark">
              {steps[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              {steps[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-gtm-pink' : 'bg-gray-300'
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessVisualization;
