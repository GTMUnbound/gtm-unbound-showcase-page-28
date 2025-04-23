
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-5 shadow-md cursor-pointer border border-pink-100 flex flex-col items-center text-center"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(252, 110, 151, 0.2)" }}
      onClick={onClick}
    >
      <motion.span 
        className="text-4xl mb-3"
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 1 }}
      >
        {icon}
      </motion.span>
      <h3 className="font-semibold text-lg text-gtm-dark">{title}</h3>
    </motion.div>
  );
};

const ClickToRevealSteps = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      icon: "📍",
      title: "GTM Diagnostic",
      description: "A signal-based audit of your funnel, channels, ICP, and current growth stack — delivered in 7 days."
    },
    {
      icon: "🔗",
      title: "Matched Expert Onboarding",
      description: "We pair you with a vetted GTM expert based on your startup's stage, vertical, and traction gaps."
    },
    {
      icon: "🚀",
      title: "Sprint Launch & Tracking",
      description: "GTM sprints begin immediately — SEO, outbound, RevOps — all aligned with your OKRs."
    },
    {
      icon: "📊",
      title: "Roadmap Co-Ownership",
      description: "GTM is a journey — your expert stays involved, co-owning the roadmap and adapting strategy as you grow."
    }
  ];

  const handleOpenStep = (index: number) => {
    setSelectedStep(index);
  };

  const handleCloseStep = () => {
    setSelectedStep(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Connection lines in background */}
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-200/40 to-transparent transform -translate-y-1/2" />
      </div>

      {/* Step cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {steps.map((step, idx) => (
          <StepCard
            key={idx}
            icon={step.icon}
            title={step.title}
            description={step.description}
            onClick={() => handleOpenStep(idx)}
          />
        ))}
      </div>

      {/* Modal for selected step */}
      <Dialog open={selectedStep !== null} onOpenChange={handleCloseStep}>
        <DialogContent className="bg-white/95 backdrop-blur-sm border border-pink-100 shadow-[0_0_35px_rgba(252,110,151,0.15)] p-6 max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl font-bold text-gtm-dark">
              <span className="text-3xl">
                {selectedStep !== null && steps[selectedStep].icon}
              </span>
              {selectedStep !== null && steps[selectedStep].title}
            </DialogTitle>
            <DialogDescription className="text-base text-gray-700 mt-3">
              {selectedStep !== null && steps[selectedStep].description}
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={handleCloseStep}
            className="absolute right-4 top-4 p-1 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors"
          >
            <X className="w-4 h-4 text-gtm-pink" />
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClickToRevealSteps;
