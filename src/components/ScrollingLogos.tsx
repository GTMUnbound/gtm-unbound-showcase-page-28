
import React from 'react';
import { motion } from 'framer-motion';
import ClientLogo from './ClientLogo';

const ScrollingLogos = () => {
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
    <div className="overflow-hidden relative w-full py-6">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1800],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
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
              initial={{ filter: "grayscale(0.7) opacity(0.8)" }}
              whileInView={{ filter: "grayscale(0)", opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <ClientLogo 
                src={logo.src} 
                alt={logo.alt} 
                name={logo.name} 
                description={logo.description} 
                className="w-[280px]"
                bgColor="bg-white"
                inverted={logo.inverted}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollingLogos;
