
import React from 'react';
import { motion } from 'framer-motion';
import ClientLogo from './ClientLogo';

const ScrollingLogos = () => {
  return (
    <div className="overflow-hidden relative w-full py-6">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <div className="flex space-x-8">
          <ClientLogo 
            src="/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png" 
            alt="Omnify" 
            name="Omnify" 
            description="SaaS Platform" 
            bgColor="bg-gray-50"
          />
          
          <ClientLogo 
            src="/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png" 
            alt="ECL" 
            name="ECL" 
            description="Capital Solutions" 
            bgColor="bg-gray-50"
          />
          
          <ClientLogo 
            src="/lovable-uploads/cfd8dbf8-6129-468b-a981-bce5f586869f.png" 
            alt="Paddle" 
            name="Paddle" 
            description="Payment Infrastructure" 
            inverted={true}
            bgColor="bg-gray-900"
          />
          
          {/* Duplicate logos for seamless scrolling */}
          <ClientLogo 
            src="/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png" 
            alt="Omnify" 
            name="Omnify" 
            description="SaaS Platform" 
            bgColor="bg-gray-50"
          />
          
          <ClientLogo 
            src="/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png" 
            alt="ECL" 
            name="ECL" 
            description="Capital Solutions" 
            bgColor="bg-gray-50"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollingLogos;
