
import React from 'react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Brain, Rocket, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientButton from '@/components/GradientButton';

const AboutSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <Section id="about" className="bg-gradient-to-t from-white via-gray-50 to-white py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader 
          title="Why GTM Unbound Exists"
          subtitle="Most early-stage teams figure out GTM alone — through blog posts, Slack groups, and scattered advice. We built GTM Unbound to change that."
          centered
        />
      </motion.div>
      
      <div className="max-w-3xl mx-auto px-4">
        <motion.p 
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our goal: To make high-leverage go-to-market systems accessible to early- and growth-stage founders — through real operators, curated playbooks, and high-trust events.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Rocket size={24} />, text: "Launch faster" },
            { icon: <Brain size={24} />, text: "Scale smarter" },
            { icon: <Trophy size={24} />, text: "Build GTM muscle for the long run" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 400 }
              }}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="text-gtm-pink bg-gtm-light p-4 rounded-full mb-6">
                {item.icon}
              </div>
              <p className="text-gray-700 font-medium text-center text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <GradientButton className="px-8 py-4 text-lg shadow-lg shadow-pink-500/20">
            Join GTM Community
          </GradientButton>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;
