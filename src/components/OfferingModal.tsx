
import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerClose } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

type OfferingType = "diy" | "dfy" | "expert";

interface OfferingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: OfferingType;
}

const offeringData = {
  diy: {
    title: "DIY — Build GTM with Structure",
    emoji: "📋",
    description:
      "For founders who want to learn, test, and grow GTM with real structure — not a random stack of PDFs.",
    listItems: [
      { emoji: "📘", text: "Actionable Playbooks & Strategy Frameworks" },
      { emoji: "🧾", text: "Templates from real startup GTM stacks" },
      { emoji: "🛠️", text: "Access to GTM Tools" },
      { emoji: "🎙️", text: "Founder AMAs + Expert Feedback" },
      { emoji: "🫱🏻‍🫲🏽", text: "Curated Community + Private Events" }
    ],
    image: "/lovable-uploads/a88a9ff7-2677-4e8f-bef7-0ffbfb950c96.png",
    buttonText: "Browse DIY Library",
  },
  dfy: {
    title: "DFY — Sprint-Based Execution That Works",
    emoji: "📦",
    description:
      "Plug into structured GTM programs delivered by execution specialists — without the chaos of hiring.",
    listItems: [
      { emoji: "🏁", text: "Sprint-style programs: Outbound, Growth, RevOps" },
      { emoji: "🤖", text: "Pre-vetted contributors with startup experience" },
      { emoji: "📦", text: "Pre-scoped deliverables with clear goals" },
      { emoji: "⚡", text: "Fast ramp-up, no retainer noise" }
    ],
    image: "/lovable-uploads/79d42dcd-d8ed-4c23-bf5c-c881aa334315.png",
    buttonText: "See DFY Plans",
  },
  expert: {
    title: "Expert-Led — Strategy That Grows With You",
    emoji: "🎯",
    description:
      "Work with GTM experts who go deep, co-own strategy, and grow with you every step of the way.",
    listItems: [
      { emoji: "🔗", text: "Matched based on stage, market, goals" },
      { emoji: "📆", text: "Recurring biweekly GTM sessions" },
      { emoji: "🧪", text: "Live roadmap with experiments + positioning updates" },
      { emoji: "🪜", text: "Strategic depth over time" }
    ],
    image: "/lovable-uploads/4bebd1cb-761b-4cd8-95b8-19347428afc1.png",
    buttonText: "Meet Our Experts",
  },
};

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function OfferingModal({
  isOpen,
  onClose,
  type,
}: OfferingModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const offering = offeringData[type];

  // Choose between Dialog (desktop) and Drawer (mobile)
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden bg-white/95 backdrop-blur-lg border border-pink-100 shadow-lg">
          <ModalContent offering={offering} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[85vh] px-0 pt-0 pb-6 rounded-t-[20px] bg-white/95 backdrop-blur-md border-t border-pink-100">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-pink-100/80" />
        <ModalContent offering={offering} isMobile />
        <DrawerClose className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center bg-gradient-to-r from-gtm-pink to-gtm-coral text-white opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gtm-pink focus:ring-offset-2 transition-all">
          <X className="w-4 h-4" />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}

function ModalContent({
  offering,
  isMobile = false,
}: {
  offering: typeof offeringData[OfferingType];
  isMobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-full overflow-auto",
        isMobile ? "px-4 pt-6 pb-2" : "p-8"
      )}
    >
      {/* Header section with new emoji styling */}
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div 
          className="text-3xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,93,143,0.3)]"
        >
          {offering.emoji}
        </div>
        <h2 className="text-2xl font-bold text-gtm-dark">{offering.title}</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-gray-600 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {offering.description}
      </motion.p>

      {/* List items with staggered animation and emojis */}
      <div className="mb-6">
        {offering.listItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 mb-3"
            custom={index + 2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="text-xl flex-shrink-0">{item.emoji}</span>
            <span className="text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Image section */}
      <motion.div
        className="relative rounded-lg overflow-hidden mb-6 bg-gray-50 border border-pink-50"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src={offering.image}
          alt={offering.title}
          className="w-full object-cover"
          style={{ maxHeight: "200px" }}
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <GradientButton fullWidth>{offering.buttonText}</GradientButton>
      </motion.div>
    </div>
  );
}
