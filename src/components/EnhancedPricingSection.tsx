
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';
import Section from './Section';
import SectionHeader from './SectionHeader';

interface PricingFeature {
  label: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  highlightColor: string;
  isHighlighted?: boolean;
  requiresMembership?: boolean;
  index: number;
  onSelect: () => void;
}

const PricingPlan = ({
  title,
  subtitle,
  price,
  features,
  ctaText,
  highlightColor,
  isHighlighted = false,
  requiresMembership = false,
  index,
  onSelect
}: PricingPlanProps) => {
  const borderColorClass = isHighlighted ? `border-2 ${highlightColor}` : 'border border-gray-200';
  
  return (
    <motion.div
      className={`rounded-2xl bg-white shadow-lg overflow-hidden ${borderColorClass} ${isHighlighted ? 'z-10 scale-105' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
    >
      <div className={`p-6 ${isHighlighted ? `bg-${highlightColor.replace('border-', '')}/5` : ''}`}>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 text-sm">/mo</span>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <span className={`mr-2 ${feature.included ? highlightColor.replace('border-', 'text-') : 'text-gray-300'}`}>
                <Check size={18} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.label}
              </span>
            </div>
          ))}
        </div>
        
        {requiresMembership && (
          <div className="flex items-center text-xs text-gray-500 italic mb-4">
            <AlertTriangle size={12} className="mr-1" />
            <span>Requires active Membership plan ($99/mo)</span>
          </div>
        )}
        
        <button
          className={`w-full py-3 px-4 rounded-xl font-medium ${
            isHighlighted 
              ? `bg-gradient-to-r from-${highlightColor.replace('border-', '')} to-${highlightColor.replace('border-', '')}-600 text-white`
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={onSelect}
        >
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
};

const EnhancedPricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    // Additional logic for plan selection (e.g., open a modal)
    console.log(`Selected plan: ${planName}`);
  };
  
  const pricingPlans = [
    {
      title: "Membership",
      subtitle: "Tools, templates, playbooks, events, community",
      price: "$99",
      features: [
        { label: "Templates & Tools", included: true },
        { label: "Event Access", included: true },
        { label: "Execution Support", included: false },
        { label: "Strategy Guidance", included: false },
        { label: "Curated Community", included: true }
      ],
      ctaText: "Choose Plan →",
      highlightColor: "border-gtm-pink",
      isHighlighted: false,
      requiresMembership: false
    },
    {
      title: "Plus (DFY)",
      subtitle: "DFY GTM execution (sprints for SEO, growth, content, RevOps)",
      price: "$1,000",
      features: [
        { label: "Templates & Tools", included: true },
        { label: "Event Access", included: true },
        { label: "Execution Support", included: true },
        { label: "Strategy Guidance", included: false },
        { label: "Curated Community", included: true }
      ],
      ctaText: "Choose Plan →",
      highlightColor: "border-gtm-pink",
      isHighlighted: true,
      requiresMembership: true
    },
    {
      title: "Pro (Expert)",
      subtitle: "Expert-led GTM strategy, biweekly sessions, roadmap co-creation",
      price: "$3,000",
      features: [
        { label: "Templates & Tools", included: true },
        { label: "Event Access", included: true },
        { label: "Execution Support", included: true },
        { label: "Strategy Guidance", included: true },
        { label: "Curated Community", included: true }
      ],
      ctaText: "Talk to Our Team →",
      highlightColor: "border-gtm-pink",
      isHighlighted: false,
      requiresMembership: true
    }
  ];

  return (
    <Section id="pricing" className="bg-white pt-14 pb-14 md:pt-20 md:pb-20">
      <SectionHeader 
        title="Outcome-Based Pricing That Scales With You"
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
        {pricingPlans.map((plan, index) => (
          <PricingPlan
            key={index}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            features={plan.features}
            ctaText={plan.ctaText}
            highlightColor={plan.highlightColor}
            isHighlighted={plan.isHighlighted}
            requiresMembership={plan.requiresMembership}
            index={index}
            onSelect={() => handlePlanSelect(plan.title)}
          />
        ))}
      </div>
    </Section>
  );
};

export default EnhancedPricingSection;
