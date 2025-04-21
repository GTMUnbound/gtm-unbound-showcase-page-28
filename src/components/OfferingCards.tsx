
import React, { useState } from "react";
import { motion } from "framer-motion";
import OfferingModal from "./OfferingModal";

type OfferingType = "diy" | "dfy" | "expert";

interface OfferingCardProps {
  emoji: string;
  title: string;
  description: string;
  type: OfferingType;
  onClick: (type: OfferingType) => void;
}

const OfferingCard = ({ emoji, title, description, type, onClick }: OfferingCardProps) => {
  return (
    <motion.div
      className="hover-card bg-white rounded-xl p-8 text-center shadow-md border border-pink-100 
                hover:border-gtm-pink transition-all group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      onClick={() => onClick(type)}
    >
      <div className="text-4xl mb-2 transition-transform group-hover:scale-110">{emoji}</div>
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
