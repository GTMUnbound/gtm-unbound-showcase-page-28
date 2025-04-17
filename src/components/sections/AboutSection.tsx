
import React from 'react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Brain, Rocket, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Section id="about" className="bg-white">
      <SectionHeader 
        title="Why GTM Unbound Exists"
        subtitle="Most early-stage teams figure out GTM alone — through blog posts, Slack groups, and scattered advice. We built GTM Unbound to change that."
        centered
      />
      
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Our goal: To make high-leverage go-to-market systems accessible to early- and growth-stage founders — through real operators, curated playbooks, and high-trust events.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="text-gtm-pink bg-gtm-light p-3 rounded-full mb-4">
              <Rocket size={24} />
            </div>
            <p className="text-gray-700 font-medium text-center">Launch faster</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="text-gtm-pink bg-gtm-light p-3 rounded-full mb-4">
              <Brain size={24} />
            </div>
            <p className="text-gray-700 font-medium text-center">Scale smarter</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="text-gtm-pink bg-gtm-light p-3 rounded-full mb-4">
              <Trophy size={24} />
            </div>
            <p className="text-gray-700 font-medium text-center">Build GTM muscle for the long run</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
