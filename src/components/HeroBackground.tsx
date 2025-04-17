
import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  type: 'image' | 'video';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ type }) => {
  // Create animated particles for background effect with enhanced variety
  const particles = Array.from({ length: 30 }).map((_, index) => ({
    id: index,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 15,
    blur: Math.random() > 0.6 ? 'lg' : 'md',
    opacity: Math.random() * 0.2 + 0.1
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
        
        {/* Enhanced animated particles in background */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-br from-pink-200/20 to-blue-200/10 blur-${particle.blur}`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              x: [0, 30, 0, -30, 0],
              y: [0, -40, 15, -15, 0],
              opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0, -10, 0],
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
      
      {/* Enhanced gradient overlay with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"
        animate={{
          background: [
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.92) 100%)',
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.9) 100%)',
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.92) 100%)'
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Enhanced animated particles in background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-br from-pink-100/30 to-blue-100/20 blur-${particle.blur}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -40, 25, -25, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            rotate: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional floating design elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/70 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          height: ['24px', '36px', '24px']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle radial gradient */}
      <motion.div
        className="absolute inset-0 bg-radial-gradient from-transparent to-white/30 mix-blend-overlay"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default HeroBackground;
