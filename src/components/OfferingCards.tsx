import React, { useState } from "react";
import { motion } from "framer-motion";
import OfferingModal from "./OfferingModal";

// Types remain unchanged
type OfferingType = "diy" | "dfy" | "expert";

interface OfferingCardProps {
  emoji: string;
  title: string;
  description: string;
  type: OfferingType;
  onClick: (type: OfferingType) => void;
}

// New: Gradient background for emoji, pulse effect on hover
const OfferingCard = ({
  emoji,
  title,
  description,
  type,
  onClick,
}: OfferingCardProps) => {
  return (
    <motion.div
      className="hover-card bg-white rounded-xl p-8 text-center shadow-md border border-pink-100 hover:border-gtm-pink transition-all group cursor-pointer flex flex-col items-center"
      whileHover={{ scale: 1.04, y: -6 }}
      onClick={() => onClick(type)}
    >
      <motion.div
        className="flex items-center justify-center mb-3 relative"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
      >
        {/* Pink gradient glow behind emoji */}
        <span className="absolute inset-0 h-16 w-16 rounded-full bg-gradient-to-br from-pink-100 via-gtm-pink/50 to-gtm-coral/80 blur-lg z-0 opacity-80 pointer-events-none" />
        <span className="relative z-10 text-5xl md:text-5xl select-none" style={{ fontFamily: "apple color emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,sans-serif" }}>
          {emoji}
        </span>
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-gtm-pink transition-colors">{title}</h3>
      <p className="text-gray-500 mb-2">{description}</p>
    </motion.div>
  );
};

const OfferingCards = () => {
  const [openModal, setOpenModal] = useState<OfferingType | null>(null);

  const handleOpenModal = (type: OfferingType) => {
    setOpenModal(type);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <OfferingCard
          emoji="🧰"
          title="DIY Tools"
          description="Playbooks, templates, async feedback."
          type="diy"
          onClick={handleOpenModal}
        />
        <OfferingCard
          emoji="🛠️"
          title="DFY Support"
          description="Sprint-based execution — SEO, content, ads."
          type="dfy"
          onClick={handleOpenModal}
        />
        <OfferingCard
          emoji="🧠"
          title="Expert Guidance"
          description="GTM leaders steering biweekly sprints."
          type="expert"
          onClick={handleOpenModal}
        />
      </div>

      {openModal && (
        <OfferingModal
          isOpen={!!openModal}
          onClose={handleCloseModal}
          type={openModal}
        />
      )}
    </>
  );
};

export default OfferingCards;
