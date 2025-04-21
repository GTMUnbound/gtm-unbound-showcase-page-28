
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Package, AlertTriangle, Wrench, Handshake, TrendingUp,
  BookOpen, Users, Play, Calendar
} from 'lucide-react';

const JourneyVisualization = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  // Stages: icon, positioning %, and stagger delay for animation
  const stages = [
    { icon: <Package className="h-8 w-8 text-gtm-dark" />, key: 'product', percent: '0%', delay: 0 },
    { icon: <AlertTriangle className="h-8 w-8 text-amber-500" />, key: 'chaos', percent: '22%', delay: 0.1 },
    { icon: <Wrench className="h-8 w-8 text-gtm-pink" />, key: 'system', percent: '44%', delay: 0.2 },
    { icon: <Handshake className="h-8 w-8 text-blue-500" />, key: 'support', percent: '68%', delay: 0.3 },
    { icon: <TrendingUp className="h-8 w-8 text-green-500" />, key: 'traction', percent: '100%', delay: 0.4 }
  ];

  // Minimal floating icons above/below (can fade in)
  const floating = [
    { icon: <BookOpen className="h-6 w-6 text-gtm-pink" />, top: '14%', left: '23%' },
    { icon: <Users className="h-6 w-6 text-gtm-pink" />, top: '53%', left: '56%' },
    { icon: <Wrench className="h-6 w-6 text-gtm-pink" />, top: '20%', left: '75%' },
    { icon: <Play className="h-6 w-6 text-gtm-pink" />, top: '75%', left: '42%' },
    { icon: <Calendar className="h-6 w-6 text-gtm-pink" />, top: '41%', left: '89%' }
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <h4 className="text-xs md:text-sm text-gray-500 mb-2 text-center font-medium">
        From Product to Traction — Powered by GTM Unbound
      </h4>
      {/* Journey line and icons */}
      <motion.div
        ref={ref}
        className="relative h-[132px] w-full"
        initial="hidden"
        animate={controls}
      >
        {/* Gradient line */}
        <svg className="absolute inset-0 w-full h-28" viewBox="0 0 400 70" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gtmJourneyGradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset="0.18" stopColor="#fbc2eb" />
              <stop offset="0.4" stopColor="#ff6b9d" />
              <stop offset="0.67" stopColor="#ec4899" />
              <stop offset="0.95" stopColor="#fee2f8" />
              <stop offset="1" stopColor="#FFF" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M20,60 Q80,10 150,40 Q220,70 320,32 Q380,18 380,45"
            stroke="url(#gtmJourneyGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, ease: [0.42, 0, 0.58, 1] }}
          />
        </svg>
        {/* Stage Icons */}
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.key}
            className="absolute flex justify-center items-center"
            style={{
              left: stage.percent,
              top: `48%`,
              transform: 'translate(-50%,-50%)'
            }}
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + stage.delay, type: "spring", duration: 0.7, stiffness: 70 }}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-pink-100">
              {stage.icon}
            </div>
          </motion.div>
        ))}
        {/* Floating Elements */}
        {floating.map((el, i) => (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{ top: el.top, left: el.left }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.07, duration: 0.55, type: "tween" }}
          >
            <div className="bg-white rounded-full shadow px-2 py-2 flex items-center">
              {el.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default JourneyVisualization;
