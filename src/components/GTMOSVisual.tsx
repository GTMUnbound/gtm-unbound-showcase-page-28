
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Cards for orbit, with details for the tooltip/expand
const ORBIT_CARDS = [
  {
    label: "Launch Checklist Ready",
    desc: "Checklist built from your sprint.",
    key: "top",
  },
  {
    label: "Matched Expert Assigned",
    desc: "Expert matched to your GTM stage.",
    key: "right",
  },
  {
    label: "Strategy Sprint in Progress",
    desc: "Live execution with clear goals.",
    key: "bottom",
  },
  {
    label: "Channel Breakdown: SEO + Paid",
    desc: "Growth channels mapped and tracked.",
    key: "left",
  },
];

const ORBIT_ANGLES = [0, 90, 180, 270]; // Top (0), right (90), bottom (180), left (270)

// Utility to calculate x/y on circle
function getOrbitXY(radius: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180); // -90 offset for top alignment
  return {
    x: radius * Math.cos(rad),
    y: radius * Math.sin(rad),
  };
}

const GTMOSVisual = () => {
  // Responsive: center on mobile, orbit on tablet/desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation controller: main orbit, slow spin
  const [orbit, setOrbit] = useState(0);
  useEffect(() => {
    if (isMobile) return; // No spin on mobile
    const interval = setInterval(() => {
      setOrbit((o) => (o + 0.4) % 360); // Gentle clockwise spin
    }, 15);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Hover/focus state for cards
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Sizes
  const ORBIT_RADIUS = isMobile ? 0 : 120;
  const CARD_SIZE = isMobile ? 110 : 132;
  const CENTER_SIZE = isMobile ? 90 : 128;

  // Pulse animation for GTM OS core
  const pulseAnim = {
    scale: [1, 1.07, 1],
    boxShadow: [
      "0 0 36px 6px #ffd0e5b0",
      "0 0 48px 20px #ffe2e7cc",
      "0 0 36px 6px #ffd0e522",
    ],
  };

  // Mobile: 2x2 grid with fade-in
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-2 gap-4">
          {ORBIT_CARDS.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className={`
                relative bg-white/70 rounded-2xl shadow-lg border border-pink-100
                p-4 mx-auto glass-morphism cursor-pointer group
                flex flex-col items-center justify-center
                hover:shadow-xl hover:scale-105 transition
                min-w-[110px] min-h-[90px]
              `}
              style={{ width: CARD_SIZE, height: CARD_SIZE }}
              tabIndex={0}
              onClick={() =>
                setActiveIdx(activeIdx === idx ? null : idx)
              }
              onBlur={() => setActiveIdx(null)}
            >
              <span
                className="block text-center font-semibold text-gtm-dark text-[1rem] mb-1"
              >
                {card.label}
              </span>
              <motion.span
                className={`block text-xs text-pink-500 pt-1 font-medium text-center`}
                initial={false}
                animate={{
                  opacity: activeIdx === idx ? 1 : 0,
                  height: activeIdx === idx ? "1.2em" : 0,
                  filter: activeIdx === idx ? "blur(0px)" : "blur(3.5px)",
                }}
                transition={{ duration: 0.28 }}
                aria-hidden={activeIdx !== idx}
              >
                {card.desc}
              </motion.span>
            </motion.div>
          ))}
        </div>
        {/* Center GTM OS below */}
        <motion.div
          className="flex flex-col items-center mt-6"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            boxShadow: [
              "0 0 15px 2px #ffd9e780",
              "0 0 32px 8px #ffc6ef70",
              "0 0 13px 3px #ffe8ed",
            ],
          }}
          transition={{ duration: 1 }}
          style={{
            width: CENTER_SIZE,
            height: CENTER_SIZE,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#fff6fb 68%, #fde5e1 100%)",
            border: "2px solid #ffd9e7bb",
            boxShadow:
              "0 2px 32px 7px #ffd4e52c, 0 0 35px #fde1d399 inset",
            filter: "blur(0.12px)",
            position: "relative",
          }}
        >
          {/* New GTM Unbound Logo Image */}
          <motion.img
            src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
            alt="GTM Unbound Logo"
            className="w-14 h-14 mb-1 rounded-full bg-white/70 shadow"
            animate={{ rotate: [0, 18, -18, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="block font-bold text-base md:text-lg text-gtm-dark opacity-90">
            GTM OS
          </span>
        </motion.div>
      </div>
    );
  }

  // Desktop/tablet: Circular orbit, animated
  return (
    <div
      className="relative flex items-center justify-center w-[330px] h-[330px] md:w-[380px] md:h-[380px]"
      style={{ minHeight: 280 }}
    >
      {/* Orbit ring */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: ORBIT_RADIUS * 2 + CARD_SIZE,
          height: ORBIT_RADIUS * 2 + CARD_SIZE,
          transform: `translate(-50%,-50%)`,
          borderRadius: "50%",
          zIndex: 1,
          background:
            "radial-gradient(circle,#ffd0e421 70%,transparent 90%)",
          border: "1.5px solid #ffd9e7bb",
        }}
        animate={{
          opacity: [0.18, 0.3, 0.2],
          filter: ["blur(1.2px)", "blur(2px)", "blur(1.4px)"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting info cards */}
      {ORBIT_CARDS.map((card, idx) => {
        // For gentle orbit spin
        const angle = ORBIT_ANGLES[idx] + orbit;
        const { x, y } = getOrbitXY(ORBIT_RADIUS, angle);

        return (
          <motion.div
            key={card.label}
            className={`
              absolute flex flex-col items-center justify-center transition-all
              ${activeIdx === idx ? "z-20 scale-110 shadow-xl" : "z-10"}
            `}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: CARD_SIZE,
              height: CARD_SIZE * 0.78,
              transform: "translate(-50%,-50%)",
            }}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 0,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: activeIdx === idx ? 1.11 : 1,
              filter: activeIdx === idx
                ? "blur(0.2px) brightness(1.12)"
                : "blur(0.6px)",
              boxShadow:
                activeIdx === idx
                  ? "0 9px 32px 1px #ffc5e7, 0 0 7px #fde1d3"
                  : "0 3px 11px 1px #fed7e2c1",
            }}
            transition={{
              delay: 0.21 + idx * 0.14,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            onMouseEnter={() => setActiveIdx(idx)}
            onMouseLeave={() => setActiveIdx(null)}
            tabIndex={0}
          >
            <div
              className={`
                w-full h-full glass-morphism
                bg-white/85 rounded-2xl border border-pink-100
                shadow-lg flex flex-col justify-center items-center
                cursor-pointer transition
                hover:ring hover:ring-gtm-pink/60
                px-4 py-3
              `}
            >
              <span
                className="block text-center font-semibold text-gtm-dark text-[15px] whitespace-pre-line"
                style={{
                  textShadow:
                    activeIdx === idx
                      ? "0 0 13px #ffdde1"
                      : "0 0 2px #fde1d3",
                }}
              >
                {card.label}
              </span>
              <motion.div
                className="absolute left-1/2 -bottom-6 w-max pointer-events-none"
                style={{
                  transform: "translateX(-50%)",
                }}
                initial={false}
                animate={{
                  opacity: activeIdx === idx ? 1 : 0,
                  top: activeIdx === idx ? "88%" : "74%",
                  scale: activeIdx === idx ? 1 : 0.88,
                }}
                transition={{ duration: 0.23 }}
                aria-hidden={activeIdx !== idx}
              >
                <div
                  className={`
                    rounded-lg glass-morphism px-3 py-1 mt-2
                    shadow-sm border border-pink-100 text-xs
                    text-pink-600 bg-white/90 backdrop-blur-sm
                    font-medium
                  `}
                >
                  {card.desc}
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      {/* Center "GTM OS" */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex items-center justify-center z-10"
        style={{
          width: CENTER_SIZE,
          height: CENTER_SIZE,
          transform: "translate(-50%,-50%)",
        }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: 1,
          boxShadow: [
            "0 0 12px 3px #ffd5e7, 0 0 0 #fde1d3",
            "0 0 22px 8px #ffb4c270,0 0 3px #fde1d3",
            "0 0 12px 3px #ffe8ed, 0 0 0 #fde1d3",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center shadow-[0_2px_24px_2px_#ffe1ee7e] backdrop-blur-md"
          animate={pulseAnim}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: "easeInOut",
          }}
          style={{
            width: CENTER_SIZE,
            height: CENTER_SIZE,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff7f9 68%, #fde5e1 100%)",
            boxShadow: "0 2px 32px 7px #ffd4e52c, 0 0 40px #fde1d39a inset",
            border: "2.5px solid #ffd9e7bb",
            filter: "blur(0.12px)",
          }}
        >
          {/* New GTM Unbound Logo Image */}
          <motion.img
            src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png"
            alt="GTM Unbound Logo"
            className="w-14 h-14 mb-1 rounded-full bg-white/70 shadow"
            animate={{ rotate: [0, 18, -18, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="block font-bold text-base md:text-lg text-gtm-dark opacity-90">
            GTM OS
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GTMOSVisual;

