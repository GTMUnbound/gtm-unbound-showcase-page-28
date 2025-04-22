
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import SectionHeader from './SectionHeader';
import GradientButton from './GradientButton';

interface FeatureItemProps {
  emoji: string;
  title: string;
  contrastText: string;
  index: number;
}

const FeatureItem = ({ emoji, title, contrastText, index }: FeatureItemProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const emojiVariants = {
    initial: {},
    animate: index === 0 
      ? { rotate: [0, 360], transition: { duration: 10, repeat: Infinity, ease: "linear" } }
      : index === 1
      ? { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
      : { y: [0, -3, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition-all"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.span 
        className="text-2xl mb-4"
        variants={emojiVariants}
        initial="initial" 
        animate="animate"
      >
        {emoji}
      </motion.span>
      <div className="font-semibold">
        <span>{title}</span>{" "}
        <span className="text-gray-400">&rarr;</span>{" "}
        <span className="opacity-70">{contrastText}</span>
      </div>
    </motion.div>
  );
};

const RealGTMSection = () => {
  const features = [
    {
      emoji: "🔄",
      title: "Systems",
      contrastText: "not noise"
    },
    {
      emoji: "👥",
      title: "Operators",
      contrastText: "not theory"
    },
    {
      emoji: "🚀",
      title: "Execution",
      contrastText: "not guesswork"
    }
  ];

  return (
    <Section id="why-gtm" className="bg-gray-50 pt-14 pb-14 md:pt-16 md:pb-16">
      <SectionHeader 
        title="Not Advice. Not Fluff. Real GTM Infrastructure."
        centered
      />
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-center text-lg text-gray-600 mb-8">
          You've seen the threads. The PDFs. The panels.<br />
          Now get the GTM system that founders stick with:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              emoji={feature.emoji}
              title={feature.title}
              contrastText={feature.contrastText}
              index={index}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <GradientButton>Start Building &rarr;</GradientButton>
        </div>
      </div>
    </Section>
  );
};

export default RealGTMSection;
