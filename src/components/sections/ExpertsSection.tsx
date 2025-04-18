
import React from 'react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import ExpertCard from '@/components/ExpertCard';
import { motion } from 'framer-motion';

interface ExpertsSectionProps {
  experts: Array<{
    name: string;
    role: string;
    company: string;
    expertise: string[];
    imageSrc: string;
    bio: string;
    linkedIn: string;
  }>;
}

const ExpertsSection: React.FC<ExpertsSectionProps> = ({ experts }) => {
  return (
    <Section id="experts" className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <SectionHeader 
        title="Built by Operators. Backed by Execution."
        subtitle="Connect with operators who've scaled startups from zero to category leaders. Real playbooks, proven results."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto px-4">
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <ExpertCard 
              name={expert.name}
              role={expert.role}
              company={expert.company}
              expertise={expert.expertise}
              imageSrc={expert.imageSrc}
              bio={expert.bio}
              linkedIn={expert.linkedIn}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.03, boxShadow: "0 20px 30px rgba(255, 107, 157, 0.2)" }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
        >
          See How We Work Together
        </motion.button>
      </div>
    </Section>
  );
};

export default ExpertsSection;
