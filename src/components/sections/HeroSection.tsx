
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import HeroBackground from '@/components/HeroBackground';
import ProcessVisualization from '@/components/ProcessVisualization';
import StatsSection from './StatsSection';
import GTMJourney from '@/components/GTMJourney';
import { ArrowRight } from 'lucide-react';
import GradientButton from '@/components/GradientButton';

interface HeroSectionProps {
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ stats }) => {
  return (
    <Section id="home" className="pt-24 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <HeroBackground type="video" />
        
        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Go-To-Market, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Without Guesswork</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                GTM Unbound is a curated platform for startup founders and GTM leaders.
                We help you scale go-to-market execution through real operators, deep community, and structured systems.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <GradientButton 
                  className="group flex items-center gap-2 text-base md:text-lg px-6 py-3 rounded-lg shadow-lg shadow-pink-500/20"
                >
                  Get Started 
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 1.5,
                      repeatDelay: 2
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </GradientButton>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-800 bg-opacity-80 backdrop-blur-sm text-white border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 text-base md:text-lg"
                >
                  Explore Services
                </motion.button>
              </motion.div>
              
              <StatsSection stats={stats} />
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7, type: "spring" }}
              className="w-full"
            >
              <GTMJourney />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
