
import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import GradientButton from "./GradientButton";
import AnimatedSection from "./AnimatedSection";
import { softScaleVariants, staggerContainer } from "@/utils/AnimationUtils";

// Testimonial data
const testimonials = [
  {
    quote: "GTM Unbound helped us go from noise to clarity in 4 weeks. We actually hit our MQL goal for the first time.",
    author: "Sara Menon",
    company: "B2B Fintech Founder"
  },
  {
    quote: "This isn't advice. It's actual hands-on GTM help. The strategy sessions were invaluable for us to finally break through.",
    author: "Raj Kumar",
    company: "SaaS Founder, Series A"
  },
  {
    quote: "The GTM system they built for us actually works. We've doubled inbound leads and our positioning finally clicks.",
    author: "Maya Chen",
    company: "Healthtech GTM Lead"
  }
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection className="bg-white py-16" animation="fadeUp" delay={0.2}>
      <SectionHeader 
        title="Why Founders Trust GTM Unbound"
        subtitle="Real testimonials from founders and operators who've worked with our team."
        centered
      />
      
      <motion.div 
        className="container mx-auto px-4 max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={softScaleVariants}
              whileHover="hover"
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Want to be our next case study?</h3>
          <GradientButton>Talk to Our Team</GradientButton>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
