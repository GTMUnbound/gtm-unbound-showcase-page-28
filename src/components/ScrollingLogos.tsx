
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ClientLogo from './ClientLogo';

const ScrollingLogos = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Define the logos array for reusability and easier management
  const logos = [
    {
      src: "/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png",
      alt: "Omnify",
      name: "Omnify",
      description: "SaaS Platform"
    },
    {
      src: "/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png",
      alt: "ECL",
      name: "ECL",
      description: "Capital Solutions"
    },
    {
      src: "/lovable-uploads/c7235eb5-75b3-4b4a-af50-a08d5ef3e81f.png",
      alt: "Paddle",
      name: "Paddle",
      description: "Payment Infrastructure",
      inverted: false
    }
  ];
  
  // Double the logos array for seamless infinite scrolling
  const allLogos = [...logos, ...logos, ...logos];
  
  return (
    <div 
      className="overflow-hidden relative w-full py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1800],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: isHovered ? 60 : 30, // Slow down on hover
            ease: "linear",
          },
        }}
      >
        <div className="flex space-x-8">
          {allLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                filter: "brightness(1.1) contrast(1.2)", 
                transition: { duration: 0.3 } 
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.05 % 0.3 // Creates a staggered effect but keeps it short
                }
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <ClientLogo 
                src={logo.src} 
                alt={logo.alt} 
                name={logo.name} 
                description={logo.description} 
                className="w-[280px]"
                bgColor="bg-white"
                inverted={logo.inverted}
                animate={true} // Enable drawing animation
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Add subtle gradient overlays to fade the edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export default ScrollingLogos;
