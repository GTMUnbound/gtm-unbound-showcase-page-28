
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import HeroBackground from '@/components/HeroBackground';
import ProcessVisualization from '@/components/ProcessVisualization';
import StatsSection from './StatsSection';

interface HeroSectionProps {
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ stats }) => {
  return (
    <Section id="home" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 relative">
        <HeroBackground type="image" />
        
        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark mb-6 leading-tight">
                Helping Startups Scale Smarter, Not Louder
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                GTM Unbound is a curated platform for startup founders and GTM leaders.
                We help you scale go-to-market execution through real operators, deep community, and structured systems.
              </p>
              
              <StatsSection stats={stats} />
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <ProcessVisualization />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
