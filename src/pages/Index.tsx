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
  ArrowRight, MessageSquare, Globe, Check, FlaskConical, Handshake, Youtube, Instagram
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

  // Modal state for pricing
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<"membership" | "plus" | "pro" | null>(null);
  const [talkToTeamOpen, setTalkToTeamOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navbar sections={sections} />

      {/* Hero Section */}
      <Section id="home" className="pt-24 pb-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 relative">
          <HeroBackground type="image" />
          <div className="flex flex-col md:flex-row items-start md:items-center relative z-10 gap-10 md:gap-16">
            <div className="w-full md:w-1/2 mb-7 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gtm-dark mb-4 leading-tight">
                Go-To-Market, Without Guesswork
              </h1>
              <p className="text-xl text-gray-600 mb-7 max-w-2xl">
                The GTM engine for startups — structure, support, and execution, all in one place.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <GradientButton>See How It Works</GradientButton>
                <button className="px-6 py-3 bg-white border-2 border-gtm-pink text-gtm-pink rounded-xl hover:bg-gtm-pink/5 transition-colors font-semibold shadow-sm">
                  Join Now
                </button>
              </div>
            </div>
            {/* GTM OS Circular Animated Visual (refined and imported) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
              <GTMOSVisual />
            </div>
          </div>
        </div>
      </Section>

      {/* Consistent Section Gap: pt-0 pb-14 */}
      <Section id="offerings" className="bg-white pt-0 pb-14">
        <SectionHeader 
          title="Systems. Strategy. Execution."
          centered
        />
        <OfferingCards />
      </Section>

      <Section id="how-we-help" className="bg-gray-50 pt-14 pb-14 md:pt-16 md:pb-16">
        <SectionHeader 
          title="From Signal to Strategy"
          centered
        />
        <div className="text-center text-lg text-gray-600 mb-7 max-w-3xl mx-auto">
          Startups begin with a diagnostic. We match them to GTM experts, launch sprints, and drive clarity.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">📍</div>
            <div className="font-semibold text-gtm-dark mb-1">GTM Diagnostic</div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🔗</div>
            <div className="font-semibold text-gtm-dark mb-1">Matched Expert Onboarding</div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🚀</div>
            <div className="font-semibold text-gtm-dark mb-1">Sprint Launch & Tracking</div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">📊</div>
            <div className="font-semibold text-gtm-dark mb-1">Roadmap Co-Ownership</div>
          </div>
        </div>
        <div className="flex justify-center">
          <GradientButton>Start With Your GTM Match &rarr;</GradientButton>
        </div>
      </Section>

      <Section id="experts" className="py-14 md:py-20">
        <SectionHeader 
          title="Work With Operators Who’ve Done It"
          subtitle="Not advisors. Not theory. Just proven specialists with execution credibility."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-9 max-w-7xl mx-auto px-4">
          {experts.map((expert, index) => (
            <ExpertCard 
              key={index}
              name={expert.name}
              role={expert.role}
              expertise={expert.expertise}
              imageSrc={expert.imageSrc}
              // Just display `company` as written (should be "GTM Unbound", "Omnify", etc)
              company={expert.company}
              bio={expert.bio}
              linkedIn={expert.linkedIn}
            />
          ))}
        </div>
      </Section>

      <Section id="community" className="bg-pink-50 pt-14 pb-14 md:pt-16 md:pb-16">
        <SectionHeader 
          title="Events That Move Conversations — and Founders — Forward"
          subtitle="High-signal, zero-fluff environments for operators to connect, sharpen, and grow."
          centered
        />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
      
      <Section id="pricing" className="bg-white pt-14 pb-14 md:pt-20 md:pb-20">
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
      </Section>

      <Section id="why-gtm" className="bg-gray-50 pt-14 pb-14 md:pt-16 md:pb-16">
        <SectionHeader 
          title="Not Advice. Not Fluff. Real GTM Infrastructure."
          centered
        />
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-center text-lg text-gray-600 mb-8">
            You’ve seen the threads. The PDFs. The panels.<br />
            Now get the GTM system that founders stick with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover-card">
              <span className="text-2xl mb-4">🔄</span>
              <div className="font-semibold">Systems <span className="text-gray-400">&rarr;</span> not noise</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover-card">
              <span className="text-2xl mb-4">👥</span>
              <div className="font-semibold">Operators <span className="text-gray-400">&rarr;</span> not theory</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover-card">
              <span className="text-2xl mb-4">🚀</span>
              <div className="font-semibold">Execution <span className="text-gray-400">&rarr;</span> not guesswork</div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <GradientButton>Start Building &rarr;</GradientButton>
          </div>
        </div>
      </Section>

      <Section id="cta" className="bg-gradient-to-r from-gtm-coral to-gtm-pink text-white pt-14 pb-14 md:pt-16 md:pb-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let’s Unblock Your GTM
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
            Real traction starts with real GTM help.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
