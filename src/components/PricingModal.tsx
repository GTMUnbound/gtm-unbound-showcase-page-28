
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import GradientButton from "./GradientButton";
import { cn } from "@/lib/utils";

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: "membership" | "plus" | "pro" | null;
}

const PLAN_CONTENT = {
  membership: {
    title: "Membership — DIY GTM Access",
    subtitle: "For founders who want community & expert-crafted resources",
    price: "$99/mo or $1,000/year",
    bullets: [
      "Access to GTM playbooks, templates, and tools",
      "Curated community of founders and GTM leaders",
      "Access to private GTM events and AMAs",
      "Quarterly 1:1 expert consult included",
    ],
    cta: "Get Started",
  },
  plus: {
    title: "Plus — Sprint-Based Execution",
    subtitle: "For teams needing execution pods (SEO, Growth, Content, RevOps)",
    price: "$1,000/mo or $10K/year",
    bullets: [
      "Execution pods: SEO, Paid Growth, Content, RevOps",
      "Work with pre-vetted contributors (not freelancers)",
      "Pre-scoped deliverables aligned to startup-stage needs",
      "Shared dashboard for sprint progress & outcomes",
      "No retainers. No agency bloat.",
    ],
    cta: "Schedule Onboarding",
  },
  pro: {
    title: "Pro — Expert-Guided GTM",
    subtitle: "For startups wanting dedicated strategic depth, biweekly coaching",
    price: "$3,000/mo or $28K/year",
    bullets: [
      "Dedicated GTM Expert (CMO/VP level)",
      "Biweekly sessions: strategy, OKRs, positioning",
      "Live roadmap — updated with feedback loops",
      "Experiment design, narrative testing, and scaling",
      "Strategic depth that compounds month-over-month",
    ],
    cta: "Book Your Expert",
  },
};

const PricingModal: React.FC<PricingModalProps> = ({ open, onOpenChange, plan }) => {
  if (!plan) return null;

  const content = PLAN_CONTENT[plan];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-md rounded-2xl px-8 pt-8 pb-6 border-2 shadow-xl bg-white backdrop-blur-lg relative",
          "border-gtm-pink/70 animate-in fade-in-0",
          "focus:outline-none",
          "sm:px-10",
        )}
        style={{
          boxShadow: "0 0 0 4px #ffdee2, 0 6px 36px 0 rgba(255, 107, 157, 0.10)"
        }}
      >
        <button
          aria-label="Close"
          className="absolute top-5 right-5 rounded-full p-1 bg-white/70 hover:bg-white transition border border-gray-100 text-gtm-pink"
          onClick={() => onOpenChange(false)}
        >
          <X size={20} />
        </button>
        <DialogHeader>
          <DialogTitle asChild>
            <div>
              <h2 className="text-2xl font-bold text-gtm-dark mb-1">{content.title}</h2>
              <div className="text-md text-gtm-pink font-semibold mb-0.5">{content.price}</div>
              <p className="text-gray-500 text-sm mb-2">{content.subtitle}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <ul className="mb-6 mt-3 px-0 space-y-3 text-gray-800">
          {content.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2 items-start">
              <span className="mt-1 block w-2 h-2 rounded-full bg-gtm-pink/60" aria-hidden="true"></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <GradientButton
          className="w-full shadow-sm focus-visible:ring-2 focus-visible:ring-gtm-pink focus-visible:ring-offset-2"
        >
          {content.cta}
        </GradientButton>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
