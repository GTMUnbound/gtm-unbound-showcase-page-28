
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, BookOpen, Users, Globe } from 'lucide-react';

const ProcessVisualization: React.FC = () => {
  const steps = [
    {
      icon: <Brain className="w-6 h-6 text-gtm-pink" />,
      title: "GTM Problem",
      description: "Founders feel stuck on their go-to-market strategy"
    },
    {
      icon: <Users className="w-6 h-6 text-gtm-pink" />,
      title: "Expert Match",
      description: "Matched with proven GTM experts"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gtm-pink" />,
      title: "Playbook",
      description: "Create a customized GTM strategy"
    },
    {
      icon: <Rocket className="w-6 h-6 text-gtm-pink" />,
      title: "Execution",
      description: "Assemble the right team to execute"
    },
    {
      icon: <Globe className="w-6 h-6 text-gtm-pink" />,
      title: "Launch",
      description: "Scale across borders with confidence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="relative w-full md:max-w-md mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col gap-5 md:gap-6">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gtm-light rounded-full flex items-center justify-center mr-4">
              {step.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gtm-dark">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <motion.div 
                className="absolute left-6 -bottom-5 h-5 w-0.5 bg-gtm-pink"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.3) }}
                style={{ top: `calc(100% - ${(index + 1) * 100}%)` }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProcessVisualization;
