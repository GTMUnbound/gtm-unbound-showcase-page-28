
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import GradientButton from "./GradientButton";
import { cn } from "@/lib/utils";

interface TalkToTeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const dropdownOptions = [
  "GTM Diagnostic & Roadmap",
  "Expert Match",
  "Execution Sprints",
  "Pricing/Positioning",
  "Scaling to US/EU",
];

const TalkToTeamModal: React.FC<TalkToTeamModalProps> = ({ open, onOpenChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(dropdownOptions[0]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
    // In production, connect to backend or trigger email/etc.
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-sm rounded-2xl px-8 pt-8 pb-6 border-2 shadow-xl bg-white backdrop-blur-lg relative",
          "border-gtm-pink/70 animate-in fade-in-0",
          "focus:outline-none"
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
          <DialogTitle>
            <div className="text-2xl font-bold text-gtm-dark mb-2">Talk to Our Team</div>
          </DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="py-8 text-center text-gtm-pink font-semibold">We'll reach out soon. Thank you!</div>
        ) : (
          <form className="space-y-4 mt-2" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="ttt_name" className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="ttt_name"
                autoFocus
                type="text"
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-gtm-pink outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Name"
              />
            </div>
            <div>
              <label htmlFor="ttt_email" className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="ttt_email"
                type="email"
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-gtm-pink outline-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email"
              />
            </div>
            <div>
              <label htmlFor="ttt_topic" className="block mb-1 text-sm font-medium text-gray-700">
                What are you looking to solve?
              </label>
              <select
                id="ttt_topic"
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-gtm-pink outline-none"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                aria-label="What are you looking to solve?"
              >
                {dropdownOptions.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <GradientButton type="submit" className="w-full focus-visible:ring-2 focus-visible:ring-gtm-pink focus-visible:ring-offset-2">
                Book a Call &rarr;
              </GradientButton>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TalkToTeamModal;
