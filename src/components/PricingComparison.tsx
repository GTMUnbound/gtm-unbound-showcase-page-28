import { motion } from "framer-motion";
import { Check } from "lucide-react";
import GradientButton from "./GradientButton";
import { cn } from "@/lib/utils";

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
    description: "Tools, templates, playbooks, events, community",
    color: "bg-white",
    borderColor: "border-gray-200",
    headerBg: "bg-white", // very subtle --c for brand
    features: [
      { label: "Templates & Tools", included: true },
      { label: "Event Access", included: true },
      { label: "Execution Support", included: false },
      { label: "Strategy Guidance", included: false },
      { label: "Curated Community", included: true }
    ],
    cta: "Choose Plan →",
  },
  {
    key: "plus" as PlanKey,
    title: "Plus (DFY)",
    price: "$1,000/mo",
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
    cta: "Choose Plan →",
    highlight: true,
  },
  {
    key: "pro" as PlanKey,
    title: "Pro (Expert)",
    price: "$3,000/mo",
    description: "Expert-led GTM strategy, biweekly sessions, roadmap co-creation",
    color: "bg-[#FFE4EE]",
    borderColor: "border-gtm-pink",
    headerBg: "bg-[#FFF0F8]", // Softest pink
    features: [
      { label: "Templates & Tools", included: true },
      { label: "Event Access", included: true },
      { label: "Execution Support", included: true },
      { label: "Strategy Guidance", included: true },
      { label: "Curated Community", included: true }
    ],
    cta: "Choose Plan →",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, type: "spring", stiffness: 90, damping: 22 }
  }),
  hover: { 
    y: -10, 
    boxShadow: "0 0 0 2px #FF6B9D, 0 8px 36px rgba(255,107,157,0.10)" 
  }
};

const PricingComparison: React.FC<PricingComparisonProps> = ({
  onPlanSelect,
  onTalkToTeam
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 3-column Cards */}
      <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-3 mb-7 justify-center">
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
              "relative rounded-2xl border shadow-md flex flex-col min-h-[420px] transition-all overflow-hidden group",
              plan.borderColor,
              plan.color,
              plan.highlight
                ? "z-10 scale-[1.03] border-2 border-gtm-pink"
                : ""
            )}
          >
            {/* Card Header Decorative */}
            <div
              className={cn(
                "px-7 py-5 rounded-t-2xl border-b text-left",
                plan.headerBg,
                plan.highlight
                  ? "border-gtm-pink bg-gtm-light/80"
                  : "border-gray-100"
              )}
            >
              <span className="text-lg font-bold text-gtm-dark">{plan.title}</span>
              <div className="text-2xl font-bold text-gtm-pink mt-1">{plan.price}</div>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col px-7 pt-5">
              <div className="text-gtm-dark text-base mb-2 font-semibold">
                {plan.description}
              </div>
              {/* [Optional] Comparison rows -- looks clean, keep always for now  */}
              <div className="my-4 mb-5 space-y-3">
                {plan.features.map((feature, fidx) => (
                  <div 
                    key={feature.label} 
                    className={cn(
                      "flex items-center text-base",
                      !feature.included && "opacity-60"
                    )}
                  >
                    <Check
                      size={18}
                      className={cn(
                        "mr-2",
                        feature.included
                          ? "text-gtm-pink"
                          : "text-gray-300"
                      )}
                    />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1" />
            </div>

            {/* CTA */}
            <div className="p-7 pt-3 border-t bg-white border-gray-100">
              <GradientButton
                fullWidth
                onClick={() => onPlanSelect(plan.key)}
                className="w-full shadow hover:shadow-gtm-pink/20"
              >
                {plan.cta}
              </GradientButton>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Team button  */}
      <button
        className="px-7 py-3 mt-2 bg-transparent border-2 border-gtm-pink text-gtm-pink rounded-xl hover:bg-gtm-pink/10 hover:shadow-pink-100 transition-colors font-semibold shadow-sm"
        onClick={onTalkToTeam}
      >
        Talk to Our Team &rarr;
      </button>
    </div>
  );
};

export default PricingComparison;
