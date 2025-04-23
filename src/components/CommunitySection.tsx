
import React from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import GradientButton from "./GradientButton";

// Community images - using the existing uploaded images
const communityImages = [
  "/lovable-uploads/1825e809-6b62-44b4-a444-fcb34e77ea91.png",
  "/lovable-uploads/a6eb7faf-ca4f-4212-87b1-8d13f7137b60.png",
  "/lovable-uploads/f3dcc9f9-660d-4b80-bd06-2f8d3870d43b.png",
  "/lovable-uploads/692b12d8-3e73-482a-8071-1c4b04f9bc9e.png",
  "/lovable-uploads/25e2003d-8bf4-4128-9488-56de3a22c5fc.png",
  "/lovable-uploads/c965cdcf-326c-4277-99eb-f630e7e81749.png"
];

const CommunitySection = () => {
  return (
    <AnimatedSection className="bg-pink-50 py-16" animation="fadeUp" delay={0.3}>
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          title="The GTM Community: Where Execution Meets Conversation"
          subtitle="Join a curated space where founders and operators share feedback, test messaging, and unblock GTM together."
          centered
        />
        
        <div className="flex flex-col md:flex-row gap-8 mt-10 items-center">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-gtm-pink" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Curated Founder Circles</h3>
                <p className="text-gray-600">Small groups of founders at similar stages, solving real GTM challenges together.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <MessageCircle className="h-6 w-6 text-gtm-pink" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">High-Signal Slack</h3>
                <p className="text-gray-600">Think Slack meets founder circles — async, high-signal conversations that drive real outcomes.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton>
                  Join the Community <ArrowRight className="h-4 w-4 ml-2" />
                </GradientButton>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {communityImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <motion.div 
                        className="overflow-hidden rounded-xl shadow-md aspect-[16/9]"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img 
                          src={img} 
                          alt={`GTM Community Event ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative inset-auto transform-none" />
                <CarouselNext className="relative inset-auto transform-none" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CommunitySection;
