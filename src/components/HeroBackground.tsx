
import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  type: 'image' | 'video';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ type }) => {
  // Create animated particles for background effect
  const particles = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
  }));

  if (type === 'video') {
    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        <video 
          className="w-full h-full object-cover opacity-10"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/lovable-uploads/cb5466fa-6f5a-4619-8796-4bb3b2ba745b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
        
        {/* Animated particles in background */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-pink-200/20 to-blue-200/10 blur-md"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -30, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }
  
  // Enhanced image background with animated gradients
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/e4f2ce9b-77cb-407e-990c-95e090726004.png")',
          filter: 'blur(1px)'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
      
      {/* Animated particles in background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-pink-100/30 to-blue-100/20 blur-lg"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, 40, 0, -40, 0],
            y: [0, -30, 20, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional design elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50/50 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default HeroBackground;
