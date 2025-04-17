
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Users, FileText, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Founder Confusion',
    description: 'Navigating GTM challenges without a clear path',
    icon: <Users size={24} />,
    color: 'from-amber-300 to-amber-500'
  },
  {
    id: 2,
    title: 'Expert Match',
    description: 'Connecting with proven GTM operators',
    icon: <Brain size={24} />,
    color: 'from-blue-300 to-blue-500'
  },
  {
    id: 3,
    title: 'Customized Playbook',
    description: 'Building your tailored GTM strategy',
    icon: <FileText size={24} />,
    color: 'from-violet-300 to-violet-500'
  },
  {
    id: 4,
    title: 'Execution',
    description: 'Implementing with confidence and support',
    icon: <Rocket size={24} />,
    color: 'from-pink-300 to-pink-500'
  },
  {
    id: 5,
    title: 'Launch',
    description: 'Go to market with measurable outcomes',
    icon: <CheckCircle size={24} />,
    color: 'from-green-300 to-green-500'
  }
];

const GTMJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4">
      <div className="relative w-full max-w-md">
        {/* Progress bar */}
        <div className="absolute top-0 w-full h-1 bg-gray-100 rounded">
          <motion.div
            className="h-full bg-gtm-pink rounded"
            initial={{ width: 0 }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Step number indicator */}
        <div className="text-center mb-4 mt-6">
          <motion.span 
            className="text-sm font-medium text-gray-500"
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Step {activeStep + 1} of {steps.length}
          </motion.span>
        </div>
        
        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${steps[activeStep].color}`}>
                {steps[activeStep].icon}
              </div>
              <h3 className="ml-4 text-xl font-bold">{steps[activeStep].title}</h3>
            </div>
            <p className="text-gray-600">{steps[activeStep].description}</p>
            
            <div className="flex justify-between mt-8">
              {steps.map((step, idx) => (
                <motion.button
                  key={step.id}
                  className={`w-8 h-2 rounded-full ${idx === activeStep ? 'bg-gtm-pink' : 'bg-gray-200'}`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveStep(idx)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Small preview of next cards */}
        <div className="flex justify-center mt-6 space-x-2">
          {steps.map((step, idx) => {
            // Calculate the next few steps
            const distance = (idx - activeStep + steps.length) % steps.length;
            // Only show the next 2 steps as small previews
            if (distance > 0 && distance <= 2) {
              return (
                <motion.div
                  key={step.id}
                  className="absolute bg-white rounded-lg shadow-md border border-gray-100 p-3"
                  style={{
                    right: `-${distance * 20}px`,
                    top: '100px',
                    zIndex: -distance,
                    opacity: 0.6 - (distance * 0.2)
                  }}
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 0.7 - (distance * 0.05) }}
                  whileHover={{ scale: 0.8 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default GTMJourney;
