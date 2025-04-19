
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
  ArrowRight, MessageSquare, Globe, Check, FlaskConical, Handshake
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollingLogos from '@/components/ScrollingLogos';
import EventTypeCard from '@/components/EventTypeCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import NotificationFeed from '@/components/NotificationFeed';
import GTMSplitView from '@/components/GTMSplitView';
import Footer from '@/components/Footer';

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

  // Updated experts array with fixed image paths and company format
  const experts = [
    {
      name: "Aditi Agarwal",
      role: "Founder",
      company: "GTM Unbound",
      expertise: ["SaaS GTM", "Market Expansion", "AI Go-to-Market"],
      imageSrc: "/lovable-uploads/e3a794e3-a086-4777-a3d6-bc8d1b6913a4.png",
      bio: "Founded GTM Unbound to help SaaS startups scale internationally. Previously led market expansion at leading tech companies, helping B2B SaaS companies enter new markets and achieve 3x growth. Specializes in US-India corridor strategies and GTM for AI products.",
      linkedIn: "https://www.linkedin.com/in/aditi-aggarwal-mehta/"
    },
    {
      name: "Manik Mehta",
      role: "Founder",
      company: "Omnify",
      expertise: ["AI/ML GTM", "Product Strategy", "Enterprise Sales"],
      imageSrc: "/lovable-uploads/125c2005-34c0-40c4-bb26-e6bb24548b88.png", // Updated to first photo
      bio: "Founder at Omnify with extensive experience in product-led growth. Scaled multiple products from $0 to $50M ARR through innovative GTM strategies and market positioning. Deep expertise in enterprise positioning, technical product marketing, and AI/ML implementation.",
      linkedIn: "https://www.linkedin.com/in/manikm/"
    },
    {
      name: "Anil Advani",
      role: "Founder and Managing Partner",
      company: "Inventus Law and Avatar Advisor",
      expertise: ["Legal GTM", "Startup Law", "International Markets"],
      imageSrc: "/lovable-uploads/d698be72-374a-4b64-bc65-8ac84270c1de.png", // Updated to second photo
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
      icon: <Handshake className="h-6 w-6" />,
      label: "Ecosystem-driven events"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-7xl mx-auto px-4">
        {experts.map((expert, index) => (
          <ExpertCard 
            key={index}
            name={expert.name}
            role={expert.role}
            expertise={expert.expertise}
            imageSrc={expert.imageSrc}
            company={expert.company}
            bio={expert.bio}
            linkedIn={expert.linkedIn}
          />
        ))}
      </div>
    </Section>
  );

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

      {/* Community Section - Updated with 2x2 grid layout */}
      <Section id="community" className="bg-pink-50 py-16">
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
                icon={eventType.icon}
                label={eventType.label}
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
            All in one place — when you're ready to scale
          </p>
        </div>
      </Section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
