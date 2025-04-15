
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, BookOpen, Users, Globe } from 'lucide-react';

const ProcessVisualization: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      image: "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png",
      title: "Facing the GTM Fog",
      description: "Founders feel stuck on their go-to-market strategy",
      className: "bg-soft-blue"
    },
    {
      image: "/lovable-uploads/e5ca321f-aac8-45f5-be2b-2df7f7605d36.png",
      title: "Expert Match",
      description: "Matched with proven GTM experts",
      className: "bg-soft-green"
    },
    {
      image: "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png",
      title: "Playbook",
      description: "Create a customized GTM strategy",
      className: "bg-soft-yellow"
    },
    {
      image: "/lovable-uploads/e5ca321f-aac8-45f5-be2b-2df7f7605d36.png",
      title: "Execution",
      description: "Assemble the right team to execute",
      className: "bg-soft-orange"
    },
    {
      image: "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png",
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
    <div className="w-full md:max-w-md mx-auto relative h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`w-full p-6 rounded-xl shadow-md ${steps[currentIndex].className} border border-gray-100`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src={steps[currentIndex].image} 
                alt={steps[currentIndex].title}
                className="w-full h-full object-cover"
              />
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
