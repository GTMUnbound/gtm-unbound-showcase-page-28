import { useState } from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import ExpertCard from '@/components/ExpertCard';
import StatCard from '@/components/StatCard';
import ClientLogo from '@/components/ClientLogo';
import GradientButton from '@/components/GradientButton';
import PricingCard from '@/components/PricingCard';
import HeroBackground from '@/components/HeroBackground';
import ProcessVisualization from '@/components/ProcessVisualization';
import GTMJourney from '@/components/GTMJourney';
import FounderDesk from '@/components/FounderDesk';
import { 
  Brain, CheckCircle, Code, FileText, Mountain, LinkedinIcon, 
  MessageCircle, Puzzle, Target, Tent, Trophy, TwitterIcon, 
  Users, RefreshCw, Rocket, TrendingUp, Award, Calendar,
  ArrowRight, MessageSquare, Globe, Check 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollingLogos from '@/components/ScrollingLogos';
import EventTypeCard from '@/components/EventTypeCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import NotificationFeed from '@/components/NotificationFeed';
import GTMSplitView from '@/components/GTMSplitView';

const Index = () => {
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    // Clear the form
    setEmail('');
    // Show success notification
    alert('Thanks for signing up! We\'ll keep you updated on upcoming events.');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', newsletterEmail);
    // Clear the form
    setNewsletterEmail('');
    // Show success notification
    alert('Thanks for subscribing to our newsletter!');
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'how-we-help', label: 'How We Help' },
    { id: 'experts', label: 'Experts' },
    { id: 'community', label: 'Community' },
    { id: 'pricing', label: 'Pricing' },
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

  const upcomingEvents = [
    {
      title: "GTM Strategy Hike",
      date: "May 15, 2025",
      location: "Marin Headlands, SF",
      description: "Connect with founders while hiking the beautiful trails of Marin Headlands."
    },
    {
      title: "PLG Roundtable",
      date: "June 2, 2025",
      location: "Virtual",
      description: "Deep dive into product-led growth strategies with experts from leading SaaS companies."
    },
    {
      title: "Mixers",
      date: "June 20, 2025",
      location: "Bangalore",
      description: "Curated founder + expert gatherings for signal-rich conversations"
    }
  ];

  // Update the stats content
  const stats = [
    {
      value: "20+",
      label: "Startups Supported",
      description: "High-growth SaaS and AI startups across India and the US are building with GTM Unbound — from early GTM to international expansion."
    },
    {
      value: "50+",
      label: "Curated Events",
      description: "Curated gatherings where founders exchange real playbooks, battle-tested insights, and build together — not just network."
    },
    {
      value: "10+",
      label: "GTM Experts",
      description: "GTM Unbound connects you with industry leaders who've cracked markets, built categories, and deliver real execution support — not just advice."
    }
  ];
  
  const pricingPlans = [
    {
      name: "Membership",
      price: {
        monthly: "$99",
        yearly: "$1,000"
      },
      description: "Access to playbooks, templates, tools, events, and community",
      features: [
        "Playbooks & Strategy Frameworks",
        "Templates from real startup GTM stacks",
        "GTM Tools Access",
        "Founder AMAs + Expert Feedback",
        "Private Events & Curated Community"
      ],
      cta: "Get Started",
      highlight: false,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Plus (DFY)",
      price: {
        monthly: "+$1,000",
        yearly: "+$10,000"
      },
      description: "Add sprint-based execution via pre-scoped contributor programs",
      features: [
        "Everything in Membership",
        "Program-based GTM engagements",
        "Access to pre-vetted contributors",
        "Pre-scoped deliverables",
        "Faster ramp-up, no agency noise"
      ],
      cta: "Choose Plus",
      highlight: true,
      icon: <Rocket className="h-6 w-6" />
    },
    {
      name: "Pro (Expert)",
      price: {
        monthly: "+$3,000",
        yearly: "+$28,000"
      },
      description: "Add expert-led GTM strategy, biweekly sessions, roadmap co-creation, and more",
      features: [
        "Everything in Plus plan",
        "Matched GTM Expert",
        "Biweekly GTM strategy sessions",
        "Evolving roadmap with OKRs, experiments",
        "Strategic depth that compounds"
      ],
      cta: "Choose Pro",
      highlight: false,
      icon: <Award className="h-6 w-6" />
    }
  ];

  const experts = [
    {
      name: "Aditi Agarwal",
      role: "Founder & GTM Strategist",
      company: "GTM Unbound",
      expertise: ["SaaS GTM", "Market Expansion", "AI Go-to-Market"],
      imageSrc: "/lovable-uploads/1b9d407a-6505-49b0-aaca-8206b2237132.png",
      bio: "Founded GTM Unbound to help SaaS startups scale internationally. Previously led market expansion, helping B2B SaaS companies enter new markets and achieve 3x growth. Specializes in US-India corridor strategies.",
      linkedIn: "https://www.linkedin.com/in/aditi-aggarwal-mehta/"
    },
    {
      name: "Manik Mehta",
      role: "AI Strategy & Growth",
      company: "Omnify",
      expertise: ["AI/ML GTM", "Product Strategy", "Enterprise Sales"],
      imageSrc: "/lovable-uploads/f75e2f45-2e9c-4734-9e50-8c05598290ec.png",
      bio: "Founder at Omnify. Scaled multiple products from $0 to $50M ARR through innovative GTM strategies. Deep expertise in enterprise positioning and technical product marketing.",
      linkedIn: "https://www.linkedin.com/in/manikm/"
    },
    {
      name: "Anil Advani",
      role: "Growth & Investment",
      company: "Inventus Law",
      expertise: ["Legal GTM", "Startup Law", "International Markets"],
      imageSrc: "/lovable-uploads/87cd4fed-f07f-4d2c-b119-894c0bbb1ab5.png",
      bio: "Managing Partner at Inventus Law. Helps startups navigate legal aspects of GTM strategy across global markets. Deep expertise in US-India cross-border business strategy.",
      linkedIn: "https://www.linkedin.com/in/aniladvani/"
    }
  ];

  // Update the experts section description
  const ExpertsSection = () => (
    <Section id="experts" className="py-20 sm:py-24">
      <SectionHeader 
        title="You Don't Know Who Can Guide You?"
        subtitle="No advisors. No guesswork. Just proven GTM builders who know what moves the needle."
        centered
      />
      
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        No vague advisors. No marketplaces. No one-size-fits-all templates.
        We've curated a network of proven GTM specialists — each with deep experience launching categories, 
        scaling acquisition, driving market entry, and building systems that last.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-7xl mx-auto px-4">
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
    </Section>
  );

  // Add the new events section
  const upcomingEvents = [
    {
      title: "Founder Hike – Bangalore",
      date: "May 5, 2025",
      location: "Bangalore",
      description: "A 10km walk + chat with founders and operators. Real talk, no slides.",
      type: "hike",
      icon: Mountain
    },
    {
      title: "GTM Roundtable: PLG Growth",
      date: "May 12, 2025",
      location: "Virtual",
      description: "Deep-dive on Product-Led GTM motion. 8 founders, 1 expert, no fluff.",
      type: "roundtable",
      icon: MessageCircle
    },
    {
      title: "Experiment Sprint Workshop",
      date: "May 22, 2025",
      location: "Virtual",
      description: "Build a 30-day GTM experiment plan with expert guidance.",
      type: "workshop",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navbar sections={sections} />
      
      {/* Hero Section with updated content */}
      <Section id="home" className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 relative">
          <HeroBackground type="image" />
          
          <div className="flex flex-col md:flex-row items-start relative z-10 gap-16"> 
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark mb-6 leading-tight">
                  Go-To-Market, Without Guesswork
                </h1>
                <p className="text-xl text-gray-600 mb-6 max-w-2xl">
                  The complete GTM layer for startups — strategy, execution, and expertise in one place.
                </p>
                
                <div className="space-y-3 mb-8 max-w-2xl">
                  <p className="text-gray-700">You've built the product.</p>
                  <p className="text-gray-700">You've validated the market.</p>
                  <p className="text-gray-700">You're ready to scale.</p>
                  <p className="text-gray-700">But GTM still feels messy.</p>
                  <p className="text-gray-700">Which channel? What messaging? Who can you actually trust?</p>
                  <p className="text-gray-700">You don't have to figure it out alone.</p>
                  <p className="text-gray-700">GTM Unbound brings structure, people, and execution — all under one roof.</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <GradientButton>See How It Works</GradientButton>
                  <button className="px-6 py-3 bg-white border-2 border-gtm-pink text-gtm-pink rounded-xl hover:bg-gtm-pink/5 transition-colors">
                    Join Now
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Right Side - GTM Split View */}
            <div className="w-full md:w-1/2 flex justify-center items-start">
              <GTMSplitView />
            </div>
          </div>
        </div>
      </Section>
      
      {/* How We Help Section */}
      <Section id="how-we-help" className="bg-gray-50 py-16">
        <SectionHeader 
          title="Wanna Know How It's Done?"
          subtitle="Here's How We Actually Help You Crack GTM."
          centered
        />
        
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          You don't need more noise. You need systems, support, and people who've done it before.
        </p>
        
        {/* 1. DIY Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="text-gtm-pink text-6xl font-bold mb-2">🧰</div>
                <h3 className="text-2xl font-bold text-gtm-dark mb-3">DIY — Build It Yourself, Without Doing It Blind</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-6">
                  For founders who want to learn, test, and grow GTM with real structure — not a random stack of PDFs.
                  This is a living system of curated playbooks, frameworks, and founder-tested tools — supported by people who've seen it all before.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Actionable Playbooks & Strategy Frameworks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Templates from real startup GTM stacks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Access to GTM Tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Founder AMAs + Expert Feedback</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Curated Community + Private Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 2. DFY Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="text-gtm-pink text-6xl font-bold mb-2">🛠️</div>
                <h3 className="text-2xl font-bold text-gtm-dark mb-3">DFY — Get It Done, Without Hiring or Guessing</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-6">
                  You already know what needs to get done.
                  Instead of hiring full-time or struggling through agencies, plug into structured GTM programs designed and delivered by execution specialists.
                  These aren't open-ended retainers — they're sprint-style engagements designed around clarity, cadence, and contribution.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Program-based engagements across GTM functions (Outbound, Content, Growth, RevOps, etc.)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Access to pre-vetted contributors with deep domain context</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Pre-scoped deliverables, aligned with startup-stage priorities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Faster ramp-up, less trial-and-error, no agency noise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3. Expert-Led Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="text-gtm-pink text-6xl font-bold mb-2">🧠</div>
                <h3 className="text-2xl font-bold text-gtm-dark mb-3">Expert-Led — Go Further, With GTM That Compounds</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-6">
                  You don't need another opinion.
                  You need someone who will go deep, stay close, and bring clarity over time.
                  We pair you with GTM experts who guide biweekly strategy sessions, co-own experiments, and evolve your roadmap with you — month after month.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Matched GTM Expert based on your company, market, and goals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Recurring GTM sessions (strategy breakdowns, experiment design, narrative testing)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Live roadmap with OKRs, hypotheses, positioning updates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Shared context over time — no starting over every call</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-gtm-pink mt-1 flex-shrink-0" />
                    <p>Strategic depth that compounds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section - Horizontal Steps */}
        <div className="mt-20 mb-16">
          <SectionHeader 
            title="How It Works"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl font-bold text-gtm-pink/20 mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-gtm-pink/30 w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* GTM Journey Section */}
        <div className="mt-16">
          <SectionHeader 
            title="GTM Journey"
            subtitle="From fog to clarity, see how your GTM evolves with us"
            centered
          />
          
          <GTMJourney />
        </div>
      </Section>

      {/* Experts Section */}
      <ExpertsSection />

      {/* Community Section */}
      <Section id="community" className="bg-gtm-light py-16">
        <SectionHeader 
          title="Events That Move Conversations — and Founders — Forward"
          subtitle="High-signal, zero-fluff environments for operators to connect, sharpen, and grow."
          centered
        />
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {eventTypes.map((eventType, index) => (
              <EventTypeCard
                key={index}
                title={eventType.title}
                description={eventType.description}
                bullets={eventType.bullets}
                images={eventType.images}
                highlightColor={eventType.highlightColor}
              />
            ))}
          </div>
          
          <div className="flex justify-center">
            <GradientButton>See Upcoming Events</GradientButton>
          </div>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section id="pricing" className="bg-white py-20">
        <SectionHeader 
          title="One Membership. Add What You Need."
          subtitle="Start with core access — then level up when you're ready for sprints or strategic leadership."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
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
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10 gap-4">
          <GradientButton>Choose Your Plan</GradientButton>
          <button className="px-6 py-3 bg-white border-2 border-gtm-pink text-gtm-pink rounded-xl hover:bg-gtm-pink/5 transition-colors">
            Talk to Our Team
          </button>
        </div>
      </Section>
      
      {/* Why GTM Unbound Section */}
      <Section id="why-gtm" className="bg-gray-50 py-16">
        <SectionHeader 
          title="Not Just Advice. Not Just People. The Whole GTM Engine."
          centered
        />
        
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-center text-lg text-gray-600 mb-10">
            You've seen the PDFs, the panels, the Slack groups.<br />
            You've tried the playbooks, the marketplaces, and the advice threads.<br />
            Now it's time for something that actually works.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm transition-all"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
            >
              <div className="text-3xl mb-4">🔍</div>
              <p className="font-semibold text-gtm-dark">Real systems, not noise</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm transition-all"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
            >
              <div className="text-3xl mb-4">👩‍💼</div>
              <p className="font-semibold text-gtm-dark">Real operators, not vague advisors</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm transition-all"
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
            >
              <div className="text-3xl mb-4">📈</div>
              <p className="font-semibold text-gtm-dark">Real traction, not wasted time</p>
            </motion.div>
          </div>
          
          <p className="text-center text-lg font-medium text-gtm-dark mt-10">
            You don't have to guess anymore.<br />
            Let's build your GTM — for real.
          </p>
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section id="newsletter" className="bg-white py-16">
        <NewsletterSubscription />
      </Section>
      
      {/* Final CTA Section */}
      <Section id="cta" className="bg-gradient-to-r from-gtm-coral to-gtm-pink text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Unblock Your GTM.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="px-6 py-3 bg-white text-gtm-pink font-medium rounded-xl hover:bg-gray-100 transition-colors">
              Join GTM Unbound
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors">
              Book a Call
            </button>
          </div>
          
          <p className="text-xl">
            Clarity. Support. Execution.<br />
            All in one place — when you're ready to scale for real.
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
            
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-300 hover:text-white">Startups</a>
              <a href="#" className="text-gray-300 hover:text-white">Experts</a>
              <a href="#" className="text-gray-300 hover:text-white">Events</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-400 text-center text-sm">
              © {new Date().getFullYear()} GTM Unbound. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
