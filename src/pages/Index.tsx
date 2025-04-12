
import { useState } from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import ExpertCard from '@/components/ExpertCard';
import EventFormat from '@/components/EventFormat';
import StatCard from '@/components/StatCard';
import GradientButton from '@/components/GradientButton';
import { Brain, CheckCircle, Code, FileText, Mountain, LinkedinIcon, MessageCircle, Puzzle, Target, Tent, Trophy, TwitterIcon, Users, RefreshCw, Rocket, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    // Clear the form
    setEmail('');
    // Show success notification
    alert('Thanks for signing up! We\'ll keep you updated on upcoming events.');
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'startups', label: 'Startups' },
    { id: 'experts', label: 'Experts' },
    { id: 'events', label: 'Events' },
    { id: 'about', label: 'About' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar sections={sections} />
      
      {/* Hero Section */}
      <Section id="home" className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark mb-6 leading-tight">
                  Helping Startups Scale Smarter, Not Louder
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  GTM Unbound is a curated platform for startup founders and GTM leaders.
                  We help you scale go-to-market execution through real operators, deep community, and structured systems.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-4 md:gap-8 mt-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <StatCard value="20+" label="Startups Supported" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <StatCard value="50+" label="Curated Events" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <StatCard value="10+" label="Expert Collaborators" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-gtm opacity-10 rounded-full blur-3xl"></div>
                <img 
                  src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" 
                  alt="GTM Unbound" 
                  className="w-64 h-64 relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Startups Section */}
      <Section id="startups" className="bg-gray-50 py-24">
        <SectionHeader 
          title="Startups Scaling with GTM Unbound"
          subtitle="We've worked with breakout teams across SaaS, Fintech, DevTools, and AI — building from India, the US, and beyond."
          centered
        />
        
        <div className="mb-16 py-12 bg-white rounded-xl shadow-sm">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center text-gtm-dark mb-10">Our Success Stories</h3>
            
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src="/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png" alt="Omnify" className="h-16 mx-auto mb-3" />
                <div className="text-lg font-medium text-gray-700">Omnify</div>
                <div className="text-sm text-gray-500">SaaS Platform</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src="/lovable-uploads/4f65b418-cdf9-4c7f-b16e-0d3fac29bef2.png" alt="ECL" className="h-16 mx-auto mb-3" />
                <div className="text-lg font-medium text-gray-700">ECL</div>
                <div className="text-sm text-gray-500">Capital Solutions</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src="/lovable-uploads/e5ca321f-aac8-45f5-be2b-2df7f7605d36.png" alt="Paddle" className="h-16 mx-auto mb-3 brightness-0 invert" />
                <div className="text-lg font-medium text-gray-700">Paddle</div>
                <div className="text-sm text-gray-500">Payment Infrastructure</div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="mb-16"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2">
                  <TestimonialCard 
                    quote="We built a US launch plan in 6 weeks with GTM Sprints — what would've taken us 6 months."
                    author="Vikram"
                    company="CEO @ Omnify"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <TestimonialCard 
                    quote="GTM Unbound gave us rituals we still use across GTM teams."
                    author="Alex"
                    company="GTM Lead @ Paddle"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <TestimonialCard 
                    quote="Their guidance helped us double our conversion rate in just two months."
                    author="Priya"
                    company="Founder @ ECL"
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gtm-dark mb-6 text-center">What We Offer Founders</h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                We support teams at all stages of GTM maturity — whether you're building the system, scaling it, or fine-tuning it.
              </p>
              
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants}>
                  <FeatureCard 
                    icon={<Brain size={24} />}
                    title="Expert Collaboration"
                    description="Strategy, playbooks, and feedback from domain specialists who've done it before — in PLG, pricing, positioning, and more."
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FeatureCard 
                    icon={<CheckCircle size={24} />}
                    title="Done-for-You Execution"
                    description="Access vetted executors to build GTM assets — landing pages, email workflows, experiments, and more."
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FeatureCard 
                    icon={<FileText size={24} />}
                    title="DIY Tools & Templates"
                    description="Explore curated playbooks, blueprints, and GTM guides. Built for doers. Not blog readers."
                  />
                </motion.div>
              </motion.div>
            </div>
            
            <div className="text-center">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <GradientButton className="px-8 py-3">
                  <Rocket size={18} />
                  <span>Start Your GTM Journey</span>
                </GradientButton>
              </motion.div>
              <p className="text-center text-gray-600 italic mt-6">Whatever your stage or style, we give you GTM structure — your way.</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Experts Section */}
      <Section id="experts" className="bg-white">
        <SectionHeader 
          title="Built by Operators. Backed by Execution."
          subtitle="Our expert network spans across PLG, brand, sales, and growth — helping you unblock bottlenecks and build momentum."
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ExpertCard 
            name="Jane D."
            role="Ex-VP Marketing @ Notion"
            expertise="PLG, Positioning"
          />
          <ExpertCard 
            name="Arjun M."
            role="Growth @ Razorpay"
            expertise="Sales Ops, India–US GTM"
          />
        </div>
        
        <p className="text-center text-gray-600 italic">
          You don't need 10 advisors. You need the right one, at the right time — and we find them for you.
        </p>
      </Section>
      
      {/* Events Section */}
      <Section id="events" className="bg-gtm-light">
        <SectionHeader 
          title="Where Founders and Operators Actually Connect"
          subtitle="We design events where real conversations happen — not panel noise. From IRL hikes to focused roundtables, we connect people solving the same GTM problems."
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <EventFormat 
            icon={<Mountain size={24} />}
            title="Hikes"
          />
          <EventFormat 
            icon={<RefreshCw size={24} />}
            title="Roundtables"
          />
          <EventFormat 
            icon={<Target size={24} />}
            title="Workshops"
          />
          <EventFormat 
            icon={<Puzzle size={24} />}
            title="Partner Collaborations"
          />
        </div>
        
        <p className="text-center text-gray-600 mb-12">
          We've hosted 50+ GTM experiences — and we're just getting started.
        </p>
        
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gtm-dark mb-4 text-center">
            Want to hear about upcoming events?
          </h3>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gtm-pink"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <GradientButton type="submit" className="w-full">
              Get Event Updates
            </GradientButton>
            <p className="text-xs text-gray-500 text-center">
              No spam, just high-signal invites.
            </p>
          </form>
        </div>
      </Section>
      
      {/* About Section */}
      <Section id="about" className="bg-white">
        <SectionHeader 
          title="Why We Exist"
          subtitle="Too many early-stage teams are left guessing at GTM. GTM Unbound exists to change that — by embedding execution support where it matters most."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start space-x-3">
              <div className="text-gtm-pink mt-1">
                <CheckCircle size={20} />
              </div>
              <p className="text-gray-700">Clear strategy</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-gtm-pink mt-1">
                <CheckCircle size={20} />
              </div>
              <p className="text-gray-700">Repeatable systems</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-gtm-pink mt-1">
                <CheckCircle size={20} />
              </div>
              <p className="text-gray-700">Trusted expert support</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-gtm-pink mt-1">
                <CheckCircle size={20} />
              </div>
              <p className="text-gray-700">Global expansion readiness (India ⇆ US)</p>
            </div>
          </div>
          
          <p className="text-center text-gray-600 italic">
            Whether you're pre-revenue or post-Product Market Fit, we're building infrastructure to support your next stage of growth.
          </p>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="h-10 w-10 mr-3">
                <img 
                  src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" 
                  alt="GTM Unbound Logo" 
                  className="h-full w-auto brightness-200"
                />
              </div>
              <span className="text-xl font-semibold">GTM Unbound</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              GTM Unbound © 2025 — Built by Operators, for Founders
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
