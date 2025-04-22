
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";

interface OfferingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "diy" | "dfy" | "expert";
}

const OfferingModal = ({ isOpen, onClose, type }: OfferingModalProps) => {
  const modalContent = {
    diy: {
      title: "DIY Tools",
      description: "Startup-proven GTM strategies and resources to help you build and execute.",
      image: "/lovable-uploads/d20fa10b-8e84-4b85-a4b5-845d6552676e.png"
    },
    dfy: {
      title: "DFY Support",
      description: "Sprint-based execution for SEO, content, and ads to accelerate your growth.",
      image: "/lovable-uploads/d20fa10b-8e84-4b85-a4b5-845d6552676e.png"
    },
    expert: {
      title: "Expert Guidance",
      description: "Biweekly strategy sessions with GTM leaders to refine your go-to-market approach.",
      image: "/lovable-uploads/d20fa10b-8e84-4b85-a4b5-845d6552676e.png"
    }
  };

  const content = modalContent[type];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{content.title}</DialogTitle>
          <Image 
            src={content.image} 
            alt={`${content.title} illustration`} 
            width={500} 
            height={300} 
            className="w-full h-auto mb-6 rounded-lg"
          />
          <DialogDescription className="text-gray-600 text-base">
            {content.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OfferingModal;
