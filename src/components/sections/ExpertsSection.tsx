
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
    <Section id="experts" className="py-24 sm:py-32">
      <SectionHeader 
        title="Meet Our Growth Architects"
        subtitle="Connect with operators who've scaled startups from zero to category leaders. Real playbooks, proven results."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto px-4">
        {experts.map((expert, index) => (
          <ExpertCard 
            key={index}
            name={expert.name}
            role={expert.role}
            company={expert.company}
            expertise={expert.expertise}
            imageSrc={expert.imageSrc}
            bio={expert.bio}
            linkedIn={expert.linkedIn}
          />
        ))}
      </div>
      
      <div className="flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
        >
          See How We Work Together
        </motion.button>
      </div>
    </Section>
  );
};

export default ExpertsSection;
