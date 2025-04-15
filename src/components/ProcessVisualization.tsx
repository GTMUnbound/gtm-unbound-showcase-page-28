
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessVisualization: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      image: "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png",
      title: "Facing the GTM Fog",
      description: "Founders feel stuck on their go-to-market strategy",
      className: "bg-white"
    },
    {
      image: "/lovable-uploads/e5ca321f-aac8-45f5-be2b-2df7f7605d36.png",
      title: "Expert Match",
      description: "Matched with proven GTM experts",
      className: "bg-white"
    },
    {
      image: "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png",
      title: "Playbook",
      description: "Create a customized GTM strategy",
      className: "bg-white"
    },
    {
      image: "/lovable-uploads/e5ca321f-aac8-45f5-be2b-2df7f7605d36.png",
      title: "Execution",
      description: "Assemble the right team to execute",
      className: "bg-white"
    },
    {
      image: "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png",
      title: "Launch",
      description: "Scale across borders with confidence",
      className: "bg-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full md:max-w-md mx-auto relative h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`w-full rounded-xl shadow-sm ${steps[currentIndex].className} border border-gray-100`}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-64 overflow-hidden rounded-t-xl">
              <img 
                src={steps[currentIndex].image} 
                alt={steps[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gtm-dark mb-2">
                {steps[currentIndex].title}
              </h3>
              <p className="text-gray-600">
                {steps[currentIndex].description}
              </p>
            </div>
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
