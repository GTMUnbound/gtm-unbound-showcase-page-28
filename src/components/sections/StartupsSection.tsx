
import React from 'react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import ScrollingLogos from '@/components/ScrollingLogos';
import TestimonialCard from '@/components/TestimonialCard';
import { Brain, CheckCircle, FileText, Rocket, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface StartupsSectionProps {
  pricingPlans: Array<{
    name: string;
    price: {
      monthly: string;
      yearly: string;
    };
    description: string;
    features: string[];
    cta: string;
    highlight: boolean;
    icon: React.ReactNode;
    footnote?: string;
  }>;
}

const StartupsSection: React.FC<StartupsSectionProps> = ({ pricingPlans }) => {
  return (
    <Section id="startups" className="bg-gray-50 py-16">
      <SectionHeader 
        title="Startups Scaling with GTM Unbound"
        subtitle="We've worked with breakout teams across SaaS, Fintech, DevTools, and AI — building from India, the US, and beyond."
        centered
      />
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gtm-dark mb-6 text-center">What We Offer Founders</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div>
            <FeatureCard 
              icon={<Brain size={24} />}
              title="Expert Collaboration"
              description="Get paired with GTM operators for strategy, feedback, playbooks, and ongoing reviews."
            />
          </motion.div>
          <motion.div>
            <FeatureCard 
              icon={<CheckCircle size={24} />}
              title="Done-for-You Execution"
              description="We match you with vetted executors — PMs, growth freelancers, RevOps specialists — who implement GTM strategy end-to-end."
            />
          </motion.div>
          <motion.div>
            <FeatureCard 
              icon={<FileText size={24} />}
              title="DIY GTM Support"
              description="Access curated templates, GTM blueprints, and expert-built content. No fluff. No filler. Just execution frameworks that work."
            />
          </motion.div>
        </div>
      </div>

      <div className="mb-16">
        <SectionHeader 
          title="Plans & Pricing"
          subtitle="We offer three flexible tiers based on your team's capacity and growth stage."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              highlight={plan.highlight}
              icon={plan.icon}
              footnote={plan.footnote}
            />
          ))}
        </div>
      </div>

      <div className="mb-12 py-8 bg-white rounded-xl shadow-md">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center text-gtm-dark mb-8">Our Success Stories</h3>
          <ScrollingLogos />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-gtm-dark mb-8 text-center">What Our Clients Say</h3>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="mb-16"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-3/4 lg:basis-1/2">
              <TestimonialCard 
                quote="We built a US launch plan in 8 weeks with GTM Sprints — what would've taken us 6 months."
                author="Vikram"
                company="CEO @ Omnify"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-3/4 lg:basis-1/2">
              <TestimonialCard 
                quote="GTM Unbound gave us rituals we still use across GTM teams."
                author="Alex"
                company="GTM Lead @ Paddle"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-3/4 lg:basis-1/2">
              <TestimonialCard 
                quote="Their guidance helped us double our conversion rate in just two months."
                author="Priya"
                company="Founder @ ECL"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default StartupsSection;
