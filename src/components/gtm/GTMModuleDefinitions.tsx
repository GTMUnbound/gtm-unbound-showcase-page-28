
import React from 'react';

// Define orbit modules with precise angular positioning
export const moduleDefs = [
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Playbooks" role="img">📘</span>
    ),
    label: "Playbooks",
    description: "Startup-proven GTM strategies",
    angle: 270, // Top
    color: "text-gtm-pink",
    anchor: "playbooks"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Channels" role="img">🌐</span>
    ),
    label: "Channels",
    description: "Figure out what actually converts",
    angle: 342, // Top Right
    color: "text-cyan-500",
    anchor: "channels"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Events" role="img">📆</span>
    ),
    label: "Events",
    description: "Founder circles, mixers & more",
    angle: 54, // Right
    color: "text-purple-500",
    anchor: "events"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Execution" role="img">🛠️</span>
    ),
    label: "Execution",
    description: "Move from plan to traction",
    angle: 126, // Bottom Right
    color: "text-green-500",
    anchor: "execution"
  },
  {
    icon: (
      <span className="text-[1.45rem] md:text-2xl" aria-label="Experts" role="img">🧑‍💼</span>
    ),
    label: "Experts",
    description: "Access vetted GTM minds",
    angle: 198, // Bottom Left
    color: "text-blue-500",
    anchor: "experts"
  }
];
