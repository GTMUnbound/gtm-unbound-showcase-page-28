
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OfferingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "diy" | "dfy" | "expert";
}

const OfferingModal: React.FC<OfferingModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const getContent = () => {
    switch (type) {
      case "diy":
        return {
          title: "DIY Tools",
          description: "Access our curated playbooks, templates, and frameworks to accelerate your GTM strategy.",
          emoji: "🧰",
          details: [
            "Playbooks built from real startup GTM stacks",
            "Proven templates for each GTM stage",
            "Framework library for market sizing, positioning & more",
            "Weekly async feedback from GTM experts"
          ],
          cta: "Start My Membership"
        };
      case "dfy":
        return {
          title: "DFY Support",
          description: "Get hands-on execution help with sprint-based GTM implementation.",
          emoji: "🛠️",
          details: [
            "Sprint-based content production",
            "Technical SEO implementation",
            "Ad creative & campaign management",
            "Growth automation setup"
          ],
          cta: "Launch a GTM Sprint"
        };
      case "expert":
        return {
          title: "Expert Guidance",
          description: "Work with seasoned GTM operators who've led growth at scale.",
          emoji: "🧠",
          details: [
            "1:1 matched GTM expert by industry",
            "Biweekly strategic sessions",
            "Growth roadmap co-creation",
            "Direct advisory access between sessions"
          ],
          cta: "Meet My Expert"
        };
      default:
        return {
          title: "",
          description: "",
          emoji: "",
          details: [],
          cta: "Learn More"
        };
    }
  };

  const content = getContent();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{content.emoji}</span>
            <DialogTitle className="text-xl">{content.title}</DialogTitle>
          </div>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Includes:</h3>
          <ul className="space-y-2">
            {content.details.map((detail, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-green-500 text-lg">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-gradient-to-r from-gtm-pink to-pink-500 hover:opacity-90"
            onClick={onClose}
          >
            {content.cta}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferingModal;
