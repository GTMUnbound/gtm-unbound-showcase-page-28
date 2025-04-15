
import React from 'react';
import { motion } from 'framer-motion';
import ClientLogo from './ClientLogo';

const ScrollingLogos = () => {
  return (
    <div className="bg-white py-16">
      <h2 className="text-4xl font-bold text-center mb-12">You'll Be in Good Company</h2>
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex space-x-8 px-4"
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
          <div className="grid grid-cols-5 gap-8">
            <ClientLogo 
              src="/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png" 
              alt="Omnify" 
              name="Omnify" 
              description="SaaS Platform" 
              className="min-w-[200px]"
              bgColor="bg-white"
            />
            
            <ClientLogo 
              src="/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png" 
              alt="ECL" 
              name="ECL" 
              description="Capital Solutions" 
              className="min-w-[200px]"
              bgColor="bg-white"
            />
            
            <ClientLogo 
              src="/lovable-uploads/cfd8dbf8-6129-468b-a981-bce5f586869f.png" 
              alt="Paddle" 
              name="Paddle" 
              description="Payment Infrastructure" 
              className="min-w-[200px]"
              inverted={true}
              bgColor="bg-white"
            />
            
            {/* Duplicate for seamless scrolling */}
            <ClientLogo 
              src="/lovable-uploads/0e281ef4-b0d5-4345-bbc2-148c9944f302.png" 
              alt="Omnify" 
              name="Omnify" 
              description="SaaS Platform" 
              className="min-w-[200px]"
              bgColor="bg-white"
            />
            
            <ClientLogo 
              src="/lovable-uploads/64124847-58f5-4601-9a54-3544fa2436b1.png" 
              alt="ECL" 
              name="ECL" 
              description="Capital Solutions" 
              className="min-w-[200px]"
              bgColor="bg-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
