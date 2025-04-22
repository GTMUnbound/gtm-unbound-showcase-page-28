
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Section from './Section';
import SectionHeader from './SectionHeader';

interface StrategyStepProps {
  icon: string;
  title: string;
  description: string;
  popupText: string;
  index: number;
}

const StrategyStep = ({ icon, title, description, popupText, index }: StrategyStepProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center cursor-pointer relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
      onClick={() => setIsOpen(true)}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-semibold text-gtm-dark mb-1 text-center">{title}</div>
      <div className="text-sm text-gray-500 text-center">{description}</div>
      
      {/* Modal/Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-5 z-50 w-11/12 max-w-md shadow-xl"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={18} className="text-gray-500" />
              </button>
              
              <div className="mb-3 flex items-center">
                <div className="text-3xl mr-3">{icon}</div>
                <h3 className="text-xl font-bold text-gtm-dark">{title}</h3>
              </div>
              
              <p className="text-gray-700">{popupText}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SignalToStrategySection = () => {
  const steps = [
    {
      icon: "📍",
      title: "GTM Diagnostic",
      description: "We find the right starting point",
      popupText: "We run a fast audit to understand your stage, signals, and GTM bottlenecks — so we know where to start."
    },
    {
      icon: "🔗",
      title: "Matched Expert Onboarding",
      description: "We pair you with the right guide",
      popupText: "We pair you with the right GTM expert — based on stage, challenges, and goals. Think curated matchmaking, not random intros."
    },
    {
      icon: "🚀",
      title: "Sprint Launch & Tracking",
      description: "We help you execute faster",
      popupText: "We help kick off your GTM sprint — with clear deliverables, goals, and a feedback loop. You're not doing this alone."
    },
    {
      icon: "📊",
      title: "Roadmap Co-Ownership",
      description: "We evolve the strategy together",
      popupText: "It's not just advice. Your expert works with you to shape and evolve your GTM roadmap across weeks — collaboratively."
    }
  ];

  return (
    <Section id="how-we-help" className="bg-gray-50 pt-14 pb-14 md:pt-16 md:pb-16">
      <SectionHeader 
        title="From Signal to Strategy"
        centered
      />
      <div className="text-center text-lg text-gray-600 mb-7 max-w-3xl mx-auto">
        Startups begin with a diagnostic. We match them to GTM experts, launch sprints, and drive clarity.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
        {steps.map((step, index) => (
          <StrategyStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            popupText={step.popupText}
            index={index}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-gtm-pink to-pink-400 text-white font-semibold shadow-sm hover:shadow-lg transition-shadow">
          Start With Your GTM Match &rarr;
        </button>
      </div>
    </Section>
  );
};

export default SignalToStrategySection;
