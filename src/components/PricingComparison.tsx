import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import GradientButton from "./GradientButton";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

type PlanKey = "membership" | "plus" | "pro";

interface PricingComparisonProps {
  onPlanSelect: (plan: PlanKey) => void;
  onTalkToTeam: () => void;
}

const plans = [
  {
    key: "membership" as PlanKey,
    title: "Membership",
    price: "$99/mo",
    yearlyPrice: "$1,000/year",
    description: "Tools, templates, playbooks, events, community",
    color: "bg-white",
    borderColor: "border-gray-200",
    headerBg: "bg-white", 
    features: [
      { label: "Templates & Tools", included: true },
      { label: "Event Access", included: true },
      { label: "Execution Support", included: false },
      { label: "Strategy Guidance", included: false },
      { label: "Curated Community", included: true }
    ],
    cta: "Choose Plan",
  },
  {
    key: "plus" as PlanKey,
    title: "Plus (DFY)",
    price: "$1,000/mo",
    yearlyPrice: "$10,000/year",
    description: "DFY GTM execution (sprints for SEO, growth, content, RevOps)",
    color: "bg-gtm-light",
    borderColor: "border-pink-200",
    headerBg: "bg-gtm-light",
    features: [
      { label: "Templates & Tools", included: true },
      { label: "Event Access", included: true },
      { label: "Execution Support", included: true },
      { label: "Strategy Guidance", included: false },
      { label: "Curated Community", included: true }
    ],
    cta: "Choose Plan",
    highlight: true,
  },
  {
    key: "pro" as PlanKey,
    title: "Pro (Expert)",
    price: "$3,000/mo",
    yearlyPrice: "$28,000/year",
    description: "Expert-led GTM strategy, biweekly sessions, roadmap co-creation",
    color: "bg-[#FFE4EE]",
    borderColor: "border-gtm-pink",
    headerBg: "bg-[#FFF0F8]",
    features: [
      { label: "Templates & Tools", included: true },
      { label: "Event Access", included: true },
      { label: "Execution Support", included: true },
      { label: "Strategy Guidance", included: true },
      { label: "Curated Community", included: true }
    ],
    cta: "Choose Plan",
  },
];

// Detailed features for comparison table
const featureComparison = [
  { 
    name: "Templates & Tools", 
    tooltip: "Access to GTM playbooks, templates, and frameworks",
    membership: true, 
    plus: true, 
    pro: true 
  },
  { 
    name: "Event Access", 
    tooltip: "Access to private GTM events and AMAs",
    membership: true, 
    plus: true, 
    pro: true 
  },
  { 
    name: "Execution Support", 
    tooltip: "Hands-on implementation help for your GTM strategy",
    membership: false, 
    plus: true, 
    pro: true 
  },
  { 
    name: "Strategy Guidance", 
    tooltip: "Expert-led GTM strategy development and coaching",
    membership: false, 
    plus: false, 
    pro: true 
  },
  { 
    name: "Curated Community", 
    tooltip: "Access to our vetted community of founders and GTM leaders",
    membership: true, 
    plus: true, 
    pro: true 
  },
  { 
    name: "Access to Sprints", 
    tooltip: "Sprint-based execution programs for specific GTM goals",
    membership: false, 
    plus: true, 
    pro: true 
  },
  { 
    name: "Expert 1:1 Sessions", 
    tooltip: "Regular one-on-one sessions with a dedicated GTM expert",
    membership: false, 
    plus: false, 
    pro: true 
  },
  { 
    name: "Roadmap Co-Creation", 
    tooltip: "Collaborative development of your GTM roadmap",
    membership: false, 
    plus: false, 
    pro: true 
  },
  { 
    name: "Async Feedback Access", 
    tooltip: "Get feedback on your GTM materials outside of scheduled sessions",
    membership: false, 
    plus: true, 
    pro: true 
  }
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, type: "spring", stiffness: 90, damping: 22 }
  }),
  hover: { 
    y: -6, 
    boxShadow: "0 10px 25px rgba(255,107,157,0.10)" 
  }
};

const PricingComparison: React.FC<PricingComparisonProps> = ({
  onPlanSelect,
  onTalkToTeam
}) => {
  const [showComparison, setShowComparison] = useState(false);

  const toggleComparison = () => {
    setShowComparison(!showComparison);
    if (!showComparison) {
      // Scroll to comparison table when showing it
      document.getElementById('comparison-table')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-end mb-6">
        <button 
          onClick={toggleComparison}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gtm-dark hover:bg-gray-100 transition-colors"
        >
          <span>Compare Plans</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Add pricing note */}
      <p className="text-center text-gray-500 italic text-sm mb-6">
        Note: Access to Plus and Pro plans requires an active Membership subscription.
      </p>

      {/* 3-column Cards */}
      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-3 mb-12 justify-center max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.key}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-40px" }}
            className={cn(
              "relative rounded-xl border shadow-sm flex flex-col h-full overflow-hidden",
              plan.borderColor,
              plan.color,
              plan.highlight
                ? "z-10 border-2 border-gtm-pink"
                : ""
            )}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-gtm-pink text-white text-xs font-medium py-1 px-3 rounded-bl-lg z-10">
                Most Popular
              </div>
            )}

            {/* Card Header */}
            <div
              className={cn(
                "px-6 py-5 border-b",
                plan.headerBg,
                plan.highlight
                  ? "border-pink-200"
                  : "border-gray-100"
              )}
            >
              <h3 className="text-lg font-bold text-gtm-dark">{plan.title}</h3>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-gtm-pink mt-1">{plan.price}</div>
                <div className="text-xs text-gray-500">{plan.yearlyPrice}</div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                {plan.description}
              </div>
            </div>

            {/* Features List */}
            <div className="flex-1 flex flex-col p-6">
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, fidx) => (
                  <div 
                    key={feature.label} 
                    className={cn(
                      "flex items-center text-sm",
                      !feature.included && "opacity-50"
                    )}
                  >
                    <Check
                      size={16}
                      className={cn(
                        "mr-2 flex-shrink-0",
                        feature.included
                          ? "text-gtm-pink"
                          : "text-gray-300"
                      )}
                    />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1"></div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-3">
              <button
                onClick={() => onPlanSelect(plan.key)}
                className={cn(
                  "w-full px-4 py-3 rounded-lg flex items-center justify-center font-medium transition-colors",
                  plan.highlight
                    ? "bg-gtm-pink text-white hover:bg-gtm-pink/90"
                    : "bg-gray-100 text-gtm-dark hover:bg-gray-200"
                )}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div 
        id="comparison-table" 
        className={cn(
          "w-full max-w-5xl mx-auto mb-12 transition-all duration-500",
          showComparison 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10 pointer-events-none h-0 overflow-hidden"
        )}
      >
        <Card className="border border-gray-200 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gtm-dark">Plan Comparison</h3>
              <p className="text-gray-600 text-sm">See which features are included in each plan</p>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[250px]">Feature</TableHead>
                    <TableHead className="text-center">Membership</TableHead>
                    <TableHead className="text-center">Plus (DFY)</TableHead>
                    <TableHead className="text-center">Pro (Expert)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featureComparison.map((feature, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <TableCell className="font-medium flex items-center gap-1">
                        {feature.name}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle size={14} className="text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              <p className="max-w-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.membership ? (
                          <Check size={18} className="text-gtm-pink mx-auto" />
                        ) : (
                          <span className="block w-4 h-0.5 bg-gray-300 mx-auto rounded-full"></span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.plus ? (
                          <Check size={18} className="text-gtm-pink mx-auto" />
                        ) : (
                          <span className="block w-4 h-0.5 bg-gray-300 mx-auto rounded-full"></span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.pro ? (
                          <Check size={18} className="text-gtm-pink mx-auto" />
                        ) : (
                          <span className="block w-4 h-0.5 bg-gray-300 mx-auto rounded-full"></span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final CTA */}
      <div className="w-full max-w-5xl mx-auto bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-gtm-dark">Still not sure?</h3>
          <p className="text-gray-600">Book a 15-min GTM Clarity Call</p>
        </div>
        <button
          onClick={onTalkToTeam}
          className="px-6 py-3 bg-gtm-pink text-white rounded-lg hover:bg-gtm-pink/90 transition-colors font-medium"
        >
          Talk to Our Team
        </button>
      </div>
    </div>
  );
};

export default PricingComparison;
