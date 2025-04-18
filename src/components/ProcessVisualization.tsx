import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, BarChart4, Users, Laptop, Sparkles, Star, Heart, Trophy, BookOpen, Target, CloudFog, Handshake } from 'lucide-react';

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

  // Enhanced particles system
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 5,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));

  // Removed emoji icons from stepIcons configuration
  const stepIcons = [
    { icon: Laptop, color: "text-gtm-pink/70", label: "GTM Fog" },
    { icon: Brain, color: "text-gtm-pink/80", label: "Expert Match" },
    { icon: BarChart4, color: "text-gtm-pink/90", label: "Playbook" },
    { icon: Users, color: "text-gtm-pink/80", label: "Execution" },
    { icon: Rocket, color: "text-gtm-pink/70", label: "Launch" }
  ];

  return (
    <motion.div 
      className="w-full max-w-md mx-auto relative h-[520px] flex items-center justify-center ml-12" // Added ml-12 for spacing
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated background particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-pink-100/30 to-purple-100/30 pointer-events-none backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.9, rotateY: 15 }}
          transition={{ 
            duration: 0.6,
            type: "spring", 
            stiffness: 100, 
            damping: 20
          }}
          className="w-full rounded-2xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm relative z-10"
        >
          {/* Visual Section with centered icon - removed emoji */}
          <motion.div className="w-full h-80 relative">
            {generateStepVisual(steps[currentIndex].imagePrompt)}
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div 
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <motion.div
                  className={`w-24 h-24 rounded-full bg-white/90 shadow-xl flex items-center justify-center relative z-20 ${stepIcons[currentIndex].color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.createElement(stepIcons[currentIndex].icon, { 
                    size: 48,
                    className: "transition-all duration-300"
                  })}
                </motion.div>
                
                {/* Animated Rings */}
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-full border-2 border-gtm-pink/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Floating particles */}
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={`particle-${index}`}
                    className={`absolute w-2 h-2 rounded-full ${stepIcons[currentIndex].color}`}
                    animate={{
                      x: [0, Math.cos(index * 60) * 40],
                      y: [0, Math.sin(index * 60) * 40],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="p-6 bg-gradient-to-br from-pink-50/80 to-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gtm-dark mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {steps[currentIndex].title}
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {steps[currentIndex].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Enhanced navigation dots */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-3">
        {steps.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-pink-500 w-6' 
                : 'bg-pink-200 w-2 hover:bg-pink-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Preview cards with enhanced animations */}
      <div className="absolute right-0 top-1/2 transform translate-x-[80%] -translate-y-1/2 flex flex-col space-y-4 pointer-events-none">
        {steps.map((step, idx) => {
          if (idx > currentIndex && idx <= currentIndex + 2) {
            const distance = idx - currentIndex;
            return (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 0.8 - (distance * 0.2),
                  scale: 1 - (distance * 0.2),
                  x: 0,
                  y: distance * 20
                }}
                transition={{
                  duration: 0.4,
                  delay: distance * 0.1
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
