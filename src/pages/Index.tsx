import React, { useState, useRef, useEffect } from 'react';
import Section from '@/components/Section';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedNavbar from '@/components/AnimatedNavbar';
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
import CollapsibleBlock from '@/components/CollapsibleBlock';
import JourneyVisualization from '@/components/JourneyVisualization';
import GTMDashboard from '@/components/GTMDashboard';
import { 
  Brain, CheckCircle, Code, FileText, Mountain, LinkedinIcon, 
  MessageCircle, Puzzle, Target, Tent, Trophy, TwitterIcon, 
  Users, RefreshCw, Rocket, TrendingUp, Award, Calendar,
  ArrowRight, MessageSquare, Globe, Check as CheckIcon, AlertTriangle, HelpCircle,
  FlaskConical, HandshakeIcon // Use flask-conical icon which exists in lucide-react
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollingLogos from '@/components/ScrollingLogos';
import EventTypeCard from '@/components/EventTypeCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import NotificationFeed from '@/components/NotificationFeed';
import GTMSplitView from '@/components/GTMSplitView';
import Footer from '@/components/Footer';

import GTMOSVisual from "@/components/GTMOSVisual";
import OfferingCards from "@/components/OfferingCards";
import PricingModal from "@/components/PricingModal";
import TalkToTeamModal from "@/components/TalkToTeamModal";
import PricingComparison from "@/components/PricingComparison";
import GTMStructuredMessage from '@/components/GTMStructuredMessage';

import StartupsSection from "@/components/StartupsSection";
import FounderTestimonialsSection from "@/components/FounderTestimonialsSection";
import GTMJourneyModal from '@/components/GTMJourneyModal';
import AnimatedJourneySteps from '@/components/AnimatedJourneySteps';
import { fadeUpVariants, staggerContainer, softScaleVariants } from '@/utils/AnimationUtils';

const Index = () => {
  const offeringsRef = useRef<HTMLDivElement>(null);
  
  const scrollToOfferings = () => {
    offeringsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Create a ref for scroll tracking
  const [activeSection, setActiveSection] = useState('home');
  
  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Add offset for better UX
      
      // Get all section elements
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        // Use HTMLElement type casting to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Updated Navbar sections to match requirements
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'offerings', label: 'Offerings' },
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

  // Define text blocks for animated reveal with icons
  const textBlocks = [
    [
      { text: "You've built the product.", icon: <CheckIcon className="h-4 w-4 text-green-500" /> },
      { text: "You've validated the market.", icon: <CheckIcon className="h-4 w-4 text-green-500" /> },
      { text: "You're ready to scale.", icon: <CheckIcon className="h-4 w-4 text-green-500" /> }
    ],
    [
      { text: "But GTM still feels messy.", icon: <AlertTriangle className="h-4 w-4 text-amber-500" /> },
    ],
    // REMOVED Question block as requested (was: [Which channel? ...])
    [
      { text: "You don't have to figure it out alone.", icon: <Brain className="h-4 w-4 text-gtm-pink" /> },
      { text: "GTM Unbound brings structure, people, and execution — all under one roof.", icon: <Rocket className="h-4 w-4 text-gtm-pink" /> }
    ]
  ];

  // Updated the events data structure to have a unified upcomingEvents variable
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

  // Define experts array with updated presentTag (yellow label text)
  // DO NOT use "Ex-" anywhere. Just present association.
  const experts = [
    {
      name: "Aditi Agarwal",
      role: "Founder",
      presentTag: "Founder of GTM Unbound",
      expertise: ["SaaS GTM", "Market Expansion", "AI Go-to-Market"],
      imageSrc: "/lovable-uploads/e3a794e3-a086-4777-a3d6-bc8d1b6913a4.png",
      bio: "Founded GTM Unbound to help SaaS startups scale internationally. Previously led market expansion at leading tech companies, helping B2B SaaS companies enter new markets and achieve 3x growth. Specializes in US-India corridor strategies and GTM for AI products.",
      linkedIn: "https://www.linkedin.com/in/aditi-aggarwal-mehta/"
    },
    {
      name: "Manik Mehta",
      role: "Founder",
      presentTag: "Founder of Omnify",
      expertise: ["AI/ML GTM", "Product Strategy", "Enterprise Sales"],
      imageSrc: "/lovable-uploads/125c2005-34c0-40c4-bb26-e6bb24548b88.png",
      bio: "Founder at Omnify with extensive experience in product-led growth. Scaled multiple products from $0 to $50M ARR through innovative GTM strategies and market positioning. Deep expertise in enterprise positioning, technical product marketing, and AI/ML implementation.",
      linkedIn: "https://www.linkedin.com/in/manikm/"
    },
    {
      name: "Anil Advani",
      role: "Founder and Managing Partner",
      presentTag: "Founder and Managing Partner, Inventus Law & Avatar Advisors",
      expertise: ["Legal GTM", "Startup Law", "International Markets"],
      imageSrc: "/lovable-uploads/d698be72-374a-4b64-bc65-8ac84270c1de.png",
      bio: "Managing Partner at Inventus Law and Avatar Advisor. Helps startups navigate complex legal aspects of GTM strategy across global markets. Over 20 years of experience in US-India cross-border business strategy, startup formation, and international expansion.",
      linkedIn: "https://www.linkedin.com/in/aniladvani/"
    }
  ];

  // Define the missing howItWorksSteps variable
  const howItWorksSteps = [
    {
      number: "01",
      title: "Discover Your Needs",
      description: "Complete a diagnostic that helps us understand your GTM challenges and goals."
    },
    {
      number: "02",
      title: "Match Your Expert",
      description: "Get paired with the right GTM expert based on your industry and goals."
    },
    {
      number: "03",
      title: "Build Your Roadmap",
      description: "Co-create a customized GTM strategy with clear milestones and priorities."
    },
    {
      number: "04",
      title: "Execute & Grow",
      description: "Implement with structured support, measure results, and iterate fast."
    }
  ];

  // Updated eventTypes with the new structure as per the prompt
  const eventTypes = [
    {
      title: "Founder Hikes",
      description: "IRL founder retreats",
      bullets: [
        "Network Naturally",
        "Inspire Innovation",
        "Lead Together"
      ],
      images: [
        "/lovable-uploads/1825e809-6b62-44b4-a444-fcb34e77ea91.png",
        "/lovable-uploads/a6eb7faf-ca4f-4212-87b1-8d13f7137b60.png",
        "/lovable-uploads/f3dcc9f9-660d-4b80-bd06-2f8d3870d43b.png",
        "/lovable-uploads/692b12d8-3e73-482a-8071-1c4b04f9bc9e.png"
      ],
      highlightColor: "border-gtm-pink",
      icon: <Mountain className="h-6 w-6" />,
      label: "IRL founder retreats"
    },
    {
      title: "GTM Roundtables",
      description: "Functional deep dives",
      bullets: [
        "Focused Expertise",
        "Collaborative Solutions",
        "Accelerate Growth"
      ],
      images: [
        "/lovable-uploads/25e2003d-8bf4-4128-9488-56de3a22c5fc.png",
        "/lovable-uploads/c965cdcf-326c-4277-99eb-f630e7e81749.png",
        "/lovable-uploads/4adca7d0-fbde-4c7d-af2c-b8760b45b790.png"
      ],
      highlightColor: "border-blue-400",
      icon: <Target className="h-6 w-6" />,
      label: "Functional deep dives"
    },
    {
      title: "Workshops",
      description: "Experiments, pricing, OKRs",
      bullets: [
        "Hands-On Learning",
        "Tactical Growth Plays",
        "Measurable Results"
      ],
      images: [
        "/lovable-uploads/95469914-ba6c-4624-b5db-c584fff536d8.png",
        "/lovable-uploads/ae1541ff-718c-4751-9dc5-32551b395ddd.png",
        "/lovable-uploads/7e1f87b4-d400-48c1-8271-fde217863871.png",
        "/lovable-uploads/47d41dfa-b548-46e1-9254-b500a8667252.png"
      ],
      highlightColor: "border-orange-400",
      icon: <FlaskConical className="h-6 w-6" />,
      label: "Experiments, pricing, OKRs"
    },
    {
      title: "Partner Collabs",
      description: "Ecosystem-driven events",
      bullets: [
        "Amplify Your Reach",
        "Curated by Experts",
        "Build Together"
      ],
      images: [
        "/lovable-uploads/0b435467-da50-4dda-9838-cac1a112e946.png",
        "/lovable-uploads/ae1541ff-718c-4751-9dc5-32551b395ddd.png",
        "/lovable-uploads/c965cdcf-326c-4277-99eb-f630e7e81749.png",
        "/lovable-uploads/cfd8dbf8-6129-468b-a981-bce5f586869f.png"
      ],
      highlightColor: "border-purple-400",
      icon: <HandshakeIcon className="h-6 w-6" />,
      label: "Ecosystem-driven events"
    }
  ];

  // Modal state for pricing
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<"membership" | "plus" | "pro" | null>(null);
  const [talkToTeamOpen, setTalkToTeamOpen] = useState(false);
  
  // Simplified journeySteps without full descriptions
  const journeySteps = [
    {
      icon: "📍",
      title: "GTM Diagnostic",
      description: "We begin with a signal-based diagnostic to assess your funnel, channels, ICP, and current growth stack — all within 7 days. This gives us a real-time map of your GTM health and focus areas before diving into execution."
    },
    {
      icon: "🔗",
      title: "Matched Expert Onboarding",
      description: "Based on your company's stage, market, and GTM challenges, we match you with a vetted expert who's actually built GTM systems before — not just advised. This expert plugs in from day one."
    },
    {
      icon: "🚀",
      title: "Sprint Launch & Tracking",
      description: "We kick off fast, focused GTM sprints aligned with your OKRs — whether that's SEO, outbound, growth loops, or narrative testing. These are tactical builds, not abstract recommendations."
    },
    {
      icon: "📊",
      title: "Roadmap Co-Ownership",
      description: "Your expert doesn't disappear after one call. We work together to co-own your GTM roadmap — updating it with insights from tests, evolving positioning, and driving traction over time."
    }
  ];

  const [selectedJourneyStep, setSelectedJourneyStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      {/* Use our new animated navbar */}
      <AnimatedNavbar sections={sections} />

      {/* Hero Section */}
      <AnimatedSection id="home" className="pt-24 pb-14 bg-white" animation="fadeIn">
        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Refined HERO: Two columns, right column perfectly centered, with matching GTMDashboard */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12">
            <motion.div 
              className="w-full md:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark mb-4 leading-tight"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                Go-To-Market, Without Guesswork
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-7 max-w-2xl font-normal"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.3}
              >
                The complete GTM layer for startups — strategy, execution, and expertise in one place.
              </motion.p>
              <motion.div
                className="mb-8"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.5}
              >
                <GTMStructuredMessage />
              </motion.div>
              <motion.div 
                className="flex flex-wrap gap-4 mb-6"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.7}
              >
                <motion.button 
                  onClick={scrollToOfferings}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-gtm-pink to-pink-400 text-white font-semibold shadow-pink-100 shadow-md hover:shadow-gtm-pink/40 transition-shadow border-0 relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">See How It Works</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Polished, centered GTMDashboard with animation */}
            <motion.div 
              className="w-full md:w-2/5 flex justify-center items-center md:items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <GTMDashboard />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Anchor sections for GTMDashboard navigation */}
      <span id="playbooks" />
      <span id="channels" />
      <span id="events" />
      <span id="execution" />
      <span id="experts" />

      {/* Fix the ref by using id instead of direct ref */}
      <AnimatedSection id="offerings" className="bg-white pt-0 pb-14" animation="fadeUp" delay={0.1}>
        <SectionHeader 
          title="Systems. Strategy. Execution."
          centered
        />
        <OfferingCards />
      </AnimatedSection>

      <AnimatedSection id="how-we-help" className="bg-gray-50 pt-14 pb-14 md:pt-16 md:pb-16" animation="fadeUp" delay={0.2}>
        <SectionHeader
          title="From Signal to Strategy"
          centered
        />
        <div className="text-center text-lg text-gray-600 mb-7 max-w-3xl mx-auto">
          Startups begin with a diagnostic. We match them to GTM experts, launch sprints, and drive clarity.
        </div>
        <AnimatedJourneySteps />
      </AnimatedSection>

      <AnimatedSection id="experts" className="py-14 md:py-20" animation="fadeUp" delay={0.2}>
        <SectionHeader 
          title="Work With Operators Who've Done It"
          subtitle="Not advisors. Not theory. Just proven specialists with execution credibility."
          centered
        />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-9 max-w-7xl mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              variants={softScaleVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <ExpertCard 
                name={expert.name}
                role={expert.role}
                expertise={expert.expertise}
                imageSrc={expert.imageSrc}
                presentTag={expert.presentTag}
                bio={expert.bio}
                linkedIn={expert.linkedIn}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="community" className="bg-pink-50 pt-14 pb-14 md:pt-16 md:pb-16" animation="fadeUp" delay={0.3}>
        <SectionHeader 
          title="Events That Move Conversations — and Founders — Forward"
          subtitle="High-signal, zero-fluff environments for operators to connect, sharpen, and grow."
          centered
        />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={index}
                variants={softScaleVariants}
                whileHover="hover"
              >
                <EventTypeCard
                  title={eventType.title}
                  description={eventType.description}
                  bullets={eventType.bullets}
                  images={eventType.images}
                  highlightColor={eventType.highlightColor}
                  icon={eventType.icon}
                  label={eventType.label}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GradientButton>See Upcoming Events</GradientButton>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="pricing" className="bg-white pt-14 pb-14 md:pt-20 md:pb-20" animation="fadeUp" delay={0.2}>
        <SectionHeader 
          title="Outcome-Based Pricing That Scales With You"
          centered
        />
        <PricingComparison
          onPlanSelect={(plan) => { setActivePlan(plan); setPricingModalOpen(true); }}
          onTalkToTeam={() => setTalkToTeamOpen(true)}
        />
        {/* Modals */}
        <PricingModal
          open={pricingModalOpen}
          onOpenChange={(open) => {
            setPricingModalOpen(open);
            if (!open) setActivePlan(null);
          }}
          plan={activePlan}
        />
        <TalkToTeamModal
          open={talkToTeamOpen}
          onOpenChange={setTalkToTeamOpen}
        />
      </AnimatedSection>

      {/* 🚀 Startups We've Worked With */}
      <AnimatedSection className="bg-gray-50 py-16" animation="fadeUp" delay={0.3}>
        <StartupsSection />
      </AnimatedSection>

      {/* 🗣️ Founder Testimonials */}
      <AnimatedSection className="bg-white" animation="fadeUp" delay={0.2}>
        <FounderTestimonialsSection />
      </AnimatedSection>

      <AnimatedSection id="cta" className="bg-gradient-to-r from-gtm-coral to-gtm-pink text-white pt-14 pb-14 md:pt-16 md:pb-16" animation="fadeIn" delay={0.1}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Unblock Your GTM
          </motion.h2>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Real traction starts with real GTM help.
          </motion.p>
        </div>
      </AnimatedSection>

      <Footer />

      {/* Add Journey Step Modal */}
      {selectedJourneyStep !== null && (
        <GTMJourneyModal
          open={selectedJourneyStep !== null}
          onOpenChange={() => setSelectedJourneyStep(null)}
          icon={journeySteps[selectedJourneyStep].icon}
          title={journeySteps[selectedJourneyStep].title}
          description={journeySteps[selectedJourneyStep].description}
        />
      )}
    </div>
  );
};

export default Index;
