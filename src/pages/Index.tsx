
import { useState } from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import ExpertCard from '@/components/ExpertCard';
import EventFormat from '@/components/EventFormat';
import StatCard from '@/components/StatCard';
import ClientLogo from '@/components/ClientLogo';
import GradientButton from '@/components/GradientButton';
import PricingCard from '@/components/PricingCard';
import HeroBackground from '@/components/HeroBackground';
import ProcessVisualization from '@/components/ProcessVisualization';
import { 
  Brain, CheckCircle, Code, FileText, Mountain, LinkedinIcon, 
  MessageCircle, Puzzle, Target, Tent, Trophy, TwitterIcon, 
  Users, RefreshCw, Rocket, TrendingUp, Award, Calendar,
  ArrowRight, MessageSquare, Globe, Check 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollingLogos from '@/components/ScrollingLogos';

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

  // Updated experts profiles with real information and images
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
  
  // Event images for the various formats
  const eventImages = {
    hikes: [
      "/lovable-uploads/992ae0f5-e7f2-4a13-b6e2-6abf64235f8e.png",
      "/lovable-uploads/5357b31d-8b3a-4fa0-ba9c-ff5f8e684772.png",
      "/lovable-uploads/06e4979f-ff8b-40dd-89c4-da209de6d784.png"
    ],
    roundtables: [
      "/lovable-uploads/0f2dbce9-403f-49a1-aa6a-fb8013763183.png",
      "/lovable-uploads/56cc17c5-72fc-4f91-bb41-ae48f9ee9e0e.png",
      "/lovable-uploads/82620397-3052-44d0-ad65-2ce482674dc3.png"
    ],
    workshops: [
      "/lovable-uploads/bb153975-6bf6-4c36-b3b4-c3b1dc7ba7e1.png"
    ]
  };
  
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navbar sections={sections} />
      
      {/* Hero Section */}
      <Section id="home" className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Using regular image background */}
          <HeroBackground type="image" />
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="w-full md:w-3/5 mb-10 md:mb-0">
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
                
                {/* Stats in one row */}
                <motion.div 
                  className="flex flex-row gap-6 mt-8 overflow-x-auto pb-4 md:overflow-visible md:flex-nowrap"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {stats.map((stat, index) => (
                    <motion.div variants={itemVariants} className="min-w-[160px] max-w-[200px] flex-1" key={index}>
                      <StatCard 
                        value={stat.value} 
                        label={stat.label} 
                        description={stat.description}
                        compact
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            
            {/* Process Visualization in right column */}
            <div className="w-full md:w-2/5 flex justify-center items-center">
              <ProcessVisualization />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Startups Section - with adjusted spacing */}
      <Section id="startups" className="bg-gray-50 py-16">
        <SectionHeader 
          title="Startups Scaling with GTM Unbound"
          subtitle="We've worked with breakout teams across SaaS, Fintech, DevTools, and AI — building from India, the US, and beyond."
          centered
        />
        
        {/* 1. What We Offer Founders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gtm-dark mb-6 text-center">What We Offer Founders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <FeatureCard 
                icon={<Brain size={24} />}
                title="Expert Collaboration"
                description="Get paired with GTM operators for strategy, feedback, playbooks, and ongoing reviews."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard 
                icon={<CheckCircle size={24} />}
                title="Done-for-You Execution"
                description="We match you with vetted executors — PMs, growth freelancers, RevOps specialists — who implement GTM strategy end-to-end."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard 
                icon={<FileText size={24} />}
                title="DIY GTM Support"
                description="Access curated templates, GTM blueprints, and expert-built content. No fluff. No filler. Just execution frameworks that work."
              />
            </motion.div>
          </div>
        </div>

        {/* 2. Plans & Pricing */}
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

        {/* 3. Startups We Work With - with reduced spacing */}
        <div className="mb-12 py-8 bg-white rounded-xl shadow-md">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center text-gtm-dark mb-8">Our Success Stories</h3>
            <ScrollingLogos />
          </div>
        </div>

        {/* 4. What Our Clients Say */}
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

      {/* Experts Section */}
      <Section id="experts" className="py-24 sm:py-32">
        <SectionHeader 
          title="Meet Our Growth Architects"
          subtitle="Connect with operators who've scaled startups from zero to category leaders. Real playbooks, proven results."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto px-4">
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
        
        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
          >
            See How We Work Together
          </motion.button>
        </div>
      </Section>

      {/* Events Section */}
      <Section id="events" className="bg-gtm-light pb-32">
        <SectionHeader 
          title="Where Founders and Operators Actually Connect"
          subtitle="We design events that drive depth — not noise."
          centered
        />
        
        {/* Newsletter CTA as a horizontal banner */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gtm-light text-gtm-pink p-2 rounded-full">
              <MessageCircle size={20} />
            </div>
            <p className="font-medium text-gtm-dark">Get weekly GTM playbooks from real operators.</p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gtm-pink w-full md:w-auto"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <GradientButton type="submit" className="whitespace-nowrap">
              Subscribe
            </GradientButton>
          </form>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <EventFormat 
              icon={<Mountain size={28} />}
              title="Hikes"
              description="IRL founder retreats"
              highlightColor="bg-green-500"
            />
            <EventFormat 
              icon={<RefreshCw size={28} />}
              title="Roundtables"
              description="Functional deep dives"
              highlightColor="bg-blue-500"
            />
            <EventFormat 
              icon={<Target size={28} />}
              title="Workshops"
              description="Experiments, pricing, OKRs"
              highlightColor="bg-orange-500"
            />
            <EventFormat 
              icon={<Puzzle size={28} />}
              title="Partner Collabs"
              description="Ecosystem-driven events"
              highlightColor="bg-purple-500"
            />
          </div>
          
          <div className="mt-20 mb-16">
            <h3 className="text-2xl font-bold text-gtm-dark mb-8 text-center">Upcoming Events</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {upcomingEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className={`bg-gradient-to-r ${
                    index === 0 ? "from-green-400 to-green-600" : 
                    index === 1 ? "from-blue-400 to-blue-600" : 
                    "from-purple-400 to-purple-600"
                  } h-2`}></div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Globe size={16} className="mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gtm-dark mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    <button className="text-gtm-pink flex items-center text-sm font-medium hover:underline">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Event CTA as a horizontal banner */}
          <div className="bg-blue-50 rounded-lg shadow-sm p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <Calendar size={20} />
              </div>
              <p className="font-medium text-gtm-dark">Join our founder-only GTM events — from hikes to roundtables.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap">
              View Upcoming Events
            </button>
          </div>
        </div>
      </Section>
      
      {/* About Section */}
      <Section id="about" className="bg-white">
        <SectionHeader 
          title="Why GTM Unbound Exists"
          subtitle="Most early-stage teams figure out GTM alone — through blog posts, Slack groups, and scattered advice. We built GTM Unbound to change that."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Our goal: To make high-leverage go-to-market systems accessible to early- and growth-stage founders — through real operators, curated playbooks, and high-trust events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-gtm-pink bg-gtm-light p-3 rounded-full mb-4">
                <Rocket size={24} />
              </div>
              <p className="text-gray-700 font-medium text-center">Launch faster</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-gtm-pink bg-gtm-light p-3 rounded-full mb-4">
                <Brain size={24} />
              </div>
              <p className="text-gray-700 font-medium text-center">Scale smarter</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-gtm-pink bg-gtm-light p-3 rounded-full mb-4">
                <Trophy size={24} />
              </div>
              <p className="text-gray-700 font-medium text-center">Build GTM muscle for the long run</p>
            </div>
          </div>
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
