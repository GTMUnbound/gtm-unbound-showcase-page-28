
import React from 'react';
import { motion } from 'framer-motion';

const journeySteps = [
  {
    icon: "📍",
    title: "GTM Diagnostic"
  },
  {
    icon: "🔗",
    title: "Matched Expert Onboarding"
  },
  {
    icon: "🚀",
    title: "Sprint Launch & Tracking"
  },
  {
    icon: "📊",
    title: "Roadmap Co-Ownership"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const AnimatedJourneySteps = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {journeySteps.map((step, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => window.dispatchEvent(new CustomEvent('openJourneyStep', { detail: index }))}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="text-4xl">{step.icon}</span>
            <h3 className="text-lg font-semibold text-gtm-dark">{step.title}</h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedJourneySteps;
