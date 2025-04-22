
import { useState } from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import GTMHeroSection from '@/components/gtm/GTMHeroSection';
import SignalToStrategySection from '@/components/SignalToStrategySection';
import StartupsTrustSection from '@/components/StartupsTrustSection';
import RealGTMSection from '@/components/RealGTMSection';
import EnhancedPricingSection from '@/components/EnhancedPricingSection';
import ExpertLedSection from "@/components/ExpertLedSection";
import OfferingCards from "@/components/OfferingCards";
import PricingModal from "@/components/PricingModal";
import TalkToTeamModal from "@/components/TalkToTeamModal";
import Footer from '@/components/Footer';

const Index = () => {
  // Updated Navbar sections to match requirements
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'offerings', label: 'Offerings' },
    { id: 'experts', label: 'Experts' },
    { id: 'community', label: 'Community' },
    { id: 'pricing', label: 'Pricing' },
  ];

  // Modal state for pricing
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<"membership" | "plus" | "pro" | null>(null);
  const [talkToTeamOpen, setTalkToTeamOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Navbar sections={sections} />
      
      {/* Hero Section */}
      <GTMHeroSection />
      
      {/* Offerings Section */}
      <Section id="offerings" className="bg-white pt-0 pb-14">
        <SectionHeader 
          title="Systems. Strategy. Execution."
          centered
        />
        <OfferingCards />
      </Section>

      {/* Expert-Led Section */}
      <ExpertLedSection />
      
      {/* Signal to Strategy Interactive Section */}
      <SignalToStrategySection />
      
      {/* Startups Trust Section */}
      <StartupsTrustSection />
      
      {/* Real GTM Infrastructure Section */}
      <RealGTMSection />
      
      {/* Enhanced Pricing Section */}
      <EnhancedPricingSection />
      
      {/* CTA Section */}
      <Section id="cta" className="bg-gradient-to-r from-gtm-coral to-gtm-pink text-white pt-14 pb-14 md:pt-16 md:pb-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Unblock Your GTM
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
      
      <Footer />
    </div>
  );
};

export default Index;
