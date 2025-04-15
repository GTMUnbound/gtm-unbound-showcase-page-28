
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

// Mock image generation for the steps
const generateStepImage = async (prompt: string) => {
  // In a real implementation, you would use an actual image generation service
  // For now, we'll use placeholder gradients with pink theme
  return `linear-gradient(135deg, #FF6B9D 0%, #FFE5EF 100%)`;
};

const ProcessVisualization: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: "brain",
      title: "Facing the GTM Fog",
      description: "Founders feel stuck on their go-to-market strategy",
      imagePrompt: "Confused founder at whiteboard, soft pink theme, minimalist illustration",
      className: "bg-gradient-to-br from-pink-50 to-white"
    },
    {
      icon: "users",
      title: "Expert Match",
      description: "Matched with proven GTM experts",
      imagePrompt: "Handshake between mentor and founder, professional connection, pink accent",
      className: "bg-gradient-to-br from-pink-100 to-white"
    },
    {
      icon: "book",
      title: "Playbook",
      description: "Create a customized GTM strategy",
      imagePrompt: "Open book with strategy blueprint, modern design, pink highlights",
      className: "bg-gradient-to-br from-pink-50 to-white"
    },
    {
      icon: "rocket",
      title: "Execution",
      description: "Assemble the right team to execute",
      imagePrompt: "Team collaborating on screens, modern office, pink ambient lighting",
      className: "bg-gradient-to-br from-pink-100 to-white"
    },
    {
      icon: "globe",
      title: "Launch",
      description: "Scale across borders with confidence",
      imagePrompt: "Rocket launching with global map, success visualization, pink glow",
      className: "bg-gradient-to-br from-pink-50 to-white"
    }
  ];

  // Generate images for each step
  const { data: stepImages } = useQuery({
    queryKey: ['stepImages'],
    queryFn: async () => {
      const images = await Promise.all(
        steps.map(step => generateStepImage(step.imagePrompt))
      );
      return images;
    }
  });

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
          className={`w-full p-6 rounded-xl shadow-lg ${steps[currentIndex].className} border border-pink-100`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Image Section */}
            <div 
              className="w-full h-48 rounded-lg mb-4 overflow-hidden"
              style={{
                background: stepImages?.[currentIndex] || 'linear-gradient(135deg, #FF6B9D 0%, #FFE5EF 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
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
              index === currentIndex ? 'bg-gtm-pink' : 'bg-pink-200'
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessVisualization;
