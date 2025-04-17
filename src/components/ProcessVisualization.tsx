
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, BarChart4, Users, Laptop } from 'lucide-react';

const generateStepVisual = (type: string) => {
  const visuals = {
    'fog': (
      <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <Laptop className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-pink-500" />
        </motion.div>
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      </div>
    ),
    'match': (
      <div className="relative w-full h-full bg-gradient-to-br from-pink-200 to-purple-100">
        <motion.div
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-pink-500" />
        </motion.div>
      </div>
    ),
    'playbook': (
      <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-blue-50">
        <motion.div
          initial={{ y: -5 }}
          animate={{ y: 5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <BarChart4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-pink-500" />
        </motion.div>
      </div>
    ),
    'execution': (
      <div className="relative w-full h-full bg-gradient-to-br from-pink-50 to-indigo-50">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Users className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-pink-500" />
        </motion.div>
      </div>
    ),
    'launch': (
      <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-orange-50">
        <motion.div
          initial={{ y: 5 }}
          animate={{ y: -10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Rocket className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-pink-500" />
        </motion.div>
      </div>
    )
  };
  
  return visuals[type as keyof typeof visuals];
};

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

const ProcessVisualization: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Particles for background animation
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 15 + 5,
    duration: Math.random() * 15 + 15
  }));

  return (
    <motion.div 
      className="w-full max-w-md mx-auto relative h-[520px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-pink-100/20 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 10, -10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ 
            duration: 0.5,
            type: "spring", 
            stiffness: 100, 
            damping: 20
          }}
          className="w-full rounded-2xl overflow-hidden shadow-lg bg-white relative z-10"
        >
          {/* Visual Section */}
          <motion.div 
            className="w-full h-80 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {generateStepVisual(steps[currentIndex].imagePrompt)}
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="p-6 bg-pink-50"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gtm-dark mb-2"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {steps[currentIndex].title}
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {steps[currentIndex].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
        {steps.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-pink-500 w-4' 
                : 'bg-pink-200 hover:bg-pink-300'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Preview of coming steps */}
      <div className="absolute right-0 top-1/2 transform translate-x-[80%] -translate-y-1/2 flex flex-col space-y-4 pointer-events-none">
        {steps.map((step, idx) => {
          // Only show the next steps (not current or previous)
          if (idx > currentIndex && idx <= currentIndex + 2) {
            const distance = idx - currentIndex;
            return (
              <motion.div
                key={idx}
                className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                style={{ 
                  opacity: 0.7 - (distance * 0.2),
                  scale: 1 - (distance * 0.2),
                  translateY: distance * 20
                }}
              >
                {step.imagePrompt === 'fog' && <Laptop size={20} className="text-pink-400" />}
                {step.imagePrompt === 'match' && <Brain size={20} className="text-pink-400" />}
                {step.imagePrompt === 'playbook' && <BarChart4 size={20} className="text-pink-400" />}
                {step.imagePrompt === 'execution' && <Users size={20} className="text-pink-400" />}
                {step.imagePrompt === 'launch' && <Rocket size={20} className="text-pink-400" />}
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </motion.div>
  );
};

export default ProcessVisualization;
