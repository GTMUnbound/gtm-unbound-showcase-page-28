
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StartupsSection from '@/components/sections/StartupsSection';
import ExpertsSection from '@/components/sections/ExpertsSection';
import EventsSection from '@/components/sections/EventsSection';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/Footer';
import { TrendingUp, Rocket, Award } from 'lucide-react';

const Index = () => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'startups', label: 'Startups' },
    { id: 'experts', label: 'Experts' },
    { id: 'events', label: 'Events' },
    { id: 'about', label: 'About' },
  ];

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
      name: "Basic Plan",
      price: {
        monthly: "$99",
        yearly: "$1,000"
      },
      description: "For early-stage teams looking to establish GTM motion.",
      features: [
        "1 expert session annually",
        "Access to curated events",
        "Full GTM playbook",
        "On-demand content & resources"
      ],
      cta: "Get Started",
      highlight: false,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Plus Plan",
      price: {
        monthly: "$600",
        yearly: "$5,999"
      },
      description: "For founders and GTM leads scaling actively, with structured support and self-led execution.",
      features: [
        "2 expert sessions per month (tailored to your team)",
        "Full GTM playbook + advanced templates",
        "Access to all GTM Unbound content and tools",
        "Invitations to every GTM Unbound event"
      ],
      cta: "Choose Plus",
      highlight: true,
      icon: <Rocket className="h-6 w-6" />
    },
    {
      name: "Pro Plan",
      price: {
        monthly: "$999",
        yearly: "$10,000"
      },
      description: "For GTM teams that want execution help alongside strategy.",
      features: [
        "Everything in Plus plan",
        "Access to curated executors (freelancers, specialists, PMMs)",
        "Hands-on help to run campaigns, build assets, and launch experiments",
        "Weekly reviews with strategist + executor alignment"
      ],
      footnote: "Ideal for teams ready to grow faster without waiting to hire.",
      cta: "Choose Pro",
      highlight: false,
      icon: <Award className="h-6 w-6" />
    }
  ];

  const experts = [
    {
      name: "Aditi Agarwal",
      role: "Founder & GTM Strategist",
      company: "Commenda",
      expertise: ["SaaS GTM", "Market Expansion", "AI Go-to-Market"],
      imageSrc: "/lovable-uploads/1b9d407a-6505-49b0-aaca-8206b2237132.png",
      bio: "Founded GTM Unbound to help SaaS startups scale internationally. Previously led market expansion at Commenda, helping B2B SaaS companies enter new markets and achieve 3x growth. Specializes in US-India corridor strategies.",
      linkedIn: "https://linkedin.com/in/aditi-agarwal"
    },
    {
      name: "Manoj Agrawal",
      role: "AI Strategy & Growth",
      company: "DevRev",
      expertise: ["AI/ML GTM", "Product Strategy", "Enterprise Sales"],
      imageSrc: "/lovable-uploads/f75e2f45-2e9c-4734-9e50-8c05598290ec.png",
      bio: "AI trailblazer and co-founder at DevRev. Scaled multiple AI products from $0 to $50M ARR through innovative GTM strategies. Deep expertise in enterprise AI positioning and technical product marketing.",
      linkedIn: "https://linkedin.com/in/manoj-agrawal"
    },
    {
      name: "Gaganpreet Luthra",
      role: "Growth & Investment",
      company: "Leo Capital",
      expertise: ["Fintech GTM", "Venture Capital", "APAC Markets"],
      imageSrc: "/lovable-uploads/87cd4fed-f07f-4d2c-b119-894c0bbb1ab5.png",
      bio: "Partner at Leo Capital with deep expertise in scaling fintech operations across India and Southeast Asia. Helps founders build innovative GTM strategies that drive sustainable growth and attract investment.",
      linkedIn: "https://linkedin.com/in/gaganpreet-luthra"
    }
  ];

  const eventTypes = [
    {
      title: "Hikes",
      description: "IRL founder retreats",
      bullets: [
        "Network Naturally",
        "Inspire Innovation",
        "Lead Together"
      ],
      images: [
        "/lovable-uploads/42e25656-2f31-43d6-818b-a3e560d61acf.png",
        "/lovable-uploads/dfb3ee41-c6ba-41de-b97c-53e2d684717f.png",
        "/lovable-uploads/d47f9a8a-12d2-4062-9bce-b8b525a109ae.png",
        "/lovable-uploads/a6239e49-b350-49dd-8fc1-e124f0a2cadd.png"
      ],
      highlightColor: "border-green-500"
    },
    {
      title: "Roundtables",
      description: "Functional deep dives",
      bullets: [
        "Focused Expertise",
        "Collaborative Solutions",
        "Accelerate Growth"
      ],
      images: [
        "/lovable-uploads/f8d73ba1-e6a4-41ef-84f6-ea8d59ae20d4.png",
        "/lovable-uploads/40fe0852-dba5-4ead-91ce-aa788e369c88.png",
        "/lovable-uploads/50e271b6-1838-4900-86f0-f861667c271a.png"
      ],
      highlightColor: "border-blue-500"
    },
    {
      title: "Workshops",
      description: "Experiments, pricing, OKRs",
      bullets: [
        "Hands-On Learning",
        "Test & Iterate",
        "Measure What Matters"
      ],
      images: [
        "/lovable-uploads/abc900fc-4b17-4abe-b2b1-21e5611b1ea7.png",
        "/lovable-uploads/15f99e9a-66af-40b6-8677-cb9f40a31f1a.png"
      ],
      highlightColor: "border-orange-500"
    },
    {
      title: "Partner Collabs",
      description: "Ecosystem-driven events",
      bullets: [
        "Amplify Your Reach",
        "Curated Connections",
        "Build Together"
      ],
      images: [
        "/lovable-uploads/052e4048-e391-41c9-ae8b-4e32c89c285c.png",
        "/lovable-uploads/077b3880-fbe9-4e45-a34e-81b28052f42b.png"
      ],
      highlightColor: "border-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navbar sections={sections} />
      <HeroSection stats={stats} />
      <StartupsSection pricingPlans={pricingPlans} />
      <ExpertsSection experts={experts} />
      <EventsSection eventTypes={eventTypes} />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
