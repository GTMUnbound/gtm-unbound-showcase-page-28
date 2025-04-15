
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

const generateStepImage = (prompt: string) => {
  // Generate gradients that match the brand theme better
  const gradients = {
    'fog': 'linear-gradient(135deg, #FF8A8A 0%, #FFF0F5 100%)',
    'match': 'linear-gradient(135deg, #FF6B9D 0%, #FFE4E1 100%)',
    'playbook': 'linear-gradient(135deg, #FF1493 0%, #FFF0F5 100%)',
    'execution': 'linear-gradient(135deg, #DB7093 0%, #FFE4E1 100%)',
    'launch': 'linear-gradient(135deg, #FF69B4 0%, #FFE4E1 100%)'
  };
  
  if (prompt.includes('fog')) return gradients.fog;
  if (prompt.includes('match')) return gradients.match;
  if (prompt.includes('playbook')) return gradients.playbook;
  if (prompt.includes('execution')) return gradients.execution;
  return gradients.launch;
};

const ProcessVisualization: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      title: "Facing the GTM Fog",
      description: "Founders feel stuck on their go-to-market strategy",
      imagePrompt: "fog",
      imageDescription: "A solo founder sitting at desk with messy notes and foggy whiteboard"
    },
    {
      title: "Expert Match",
      description: "Matched with proven GTM experts",
      imagePrompt: "match",
      imageDescription: "Two people connected by dotted line with lightbulb"
    },
    {
      title: "Playbook",
      description: "Create a customized GTM strategy",
      imagePrompt: "playbook",
      imageDescription: "Digital GTM dashboard with charts and timelines"
    },
    {
      title: "Execution",
      description: "Assemble the right team to execute",
      imagePrompt: "execution",
      imageDescription: "Team collaborating on screens and whiteboards"
    },
    {
      title: "Launch",
      description: "Scale across borders with confidence",
      imagePrompt: "launch",
      imageDescription: "Rocket launch with celebrating team"
    }
  ];

  const { data: stepImages } = useQuery({
    queryKey: ['stepImages'],
    queryFn: () => {
      return steps.map(step => generateStepImage(step.imagePrompt));
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto relative h-[520px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          {/* Image Section */}
          <motion.div 
            className="w-full h-80 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              background: stepImages?.[currentIndex],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </motion.div>
          
          {/* Content Section */}
          <div className="p-6 bg-pink-50">
            <h3 className="text-2xl font-bold text-gtm-dark mb-2">
              {steps[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              {steps[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-pink-500 w-4' 
                : 'bg-pink-200 hover:bg-pink-300'
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessVisualization;
