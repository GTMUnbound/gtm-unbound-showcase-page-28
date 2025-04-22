
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';

interface StartupCardProps {
  logoSrc: string;
  name: string;
  caption: string;
  index: number;
}

const StartupCard = ({ logoSrc, name, caption, index }: StartupCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" }}
    >
      <div className="w-full h-12 flex items-center justify-center mb-3">
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
        />
      </div>
      {caption && (
        <div className="text-sm text-gray-500 text-center mt-3 pt-3 border-t border-gray-100 w-full">
          {caption}
        </div>
      )}
    </motion.div>
  );
};

const StartupsTrustSection = () => {
  const startups = [
    {
      logoSrc: "/lovable-uploads/125c2005-34c0-40c4-bb26-e6bb24548b88.png", // Replace with actual logo
      name: "Omnify",
      caption: "Vertical SaaS for service businesses"
    },
    {
      logoSrc: "/lovable-uploads/d698be72-374a-4b64-bc65-8ac84270c1de.png", // Replace with actual logo
      name: "Efficient Capital Labs",
      caption: "Non-dilutive capital for global SaaS"
    },
    {
      logoSrc: "/lovable-uploads/e3a794e3-a086-4777-a3d6-bc8d1b6913a4.png", // Replace with actual logo
      name: "Paddle",
      caption: "Payments and billing infrastructure for SaaS"
    },
    {
      logoSrc: "/lovable-uploads/0b435467-da50-4dda-9838-cac1a112e946.png", // Replace with actual logo
      name: "Company Four",
      caption: "AI-driven data analytics platform"
    },
    {
      logoSrc: "/lovable-uploads/ae1541ff-718c-4751-9dc5-32551b395ddd.png", // Replace with actual logo
      name: "Company Five",
      caption: "Enterprise workflow automation"
    },
    {
      logoSrc: "/lovable-uploads/c965cdcf-326c-4277-99eb-f630e7e81749.png", // Replace with actual logo
      name: "Company Six",
      caption: "Fintech payment solutions"
    }
  ];

  return (
    <Section id="trusted-by" className="bg-white py-16">
      <SectionHeader 
        title="Startups We've Worked With"
        subtitle="From early traction to scalable GTM — we've helped high-growth teams unblock growth at key inflection points."
        centered
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {startups.map((startup, index) => (
          <StartupCard
            key={index}
            logoSrc={startup.logoSrc}
            name={startup.name}
            caption={startup.caption}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default StartupsTrustSection;
