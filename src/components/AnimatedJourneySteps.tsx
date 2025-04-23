
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const AnimatedJourneySteps = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
            }}
            className="bg-white rounded-xl p-6 shadow-md cursor-pointer hover:shadow-xl transition-all"
            onClick={() => setSelectedStep(index)}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <span className="text-4xl transform transition-transform duration-200 hover:scale-110">{step.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-3 text-xl">
                {selectedStep !== null && (
                  <>
                    <span>{journeySteps[selectedStep].icon}</span>
                    {journeySteps[selectedStep].title}
                  </>
                )}
              </DialogTitle>
              <button
                onClick={() => setSelectedStep(null)}
                className="rounded-full p-1.5 hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <DialogDescription className="text-gray-600 mt-4 text-base leading-relaxed">
              {selectedStep !== null && journeySteps[selectedStep].description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnimatedJourneySteps;
