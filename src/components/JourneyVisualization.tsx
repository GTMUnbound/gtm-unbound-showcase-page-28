import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Package, AlertTriangle, Zap, Lightbulb, 
  TrendingUp, BookOpen, Users, Tool, Play, Calendar
} from 'lucide-react';

const JourneyVisualization = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5
      }
    }
  };

  // Journey stages
  const stages = [
    { 
      title: "Product", 
      icon: <Package className="h-8 w-8 text-gtm-dark" />,
      color: "bg-white"
    },
    { 
      title: "Chaos", 
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-50"
    },
    { 
      title: "GTM Unbound", 
      icon: <Zap className="h-8 w-8 text-gtm-pink" />,
      color: "bg-pink-50"
    },
    { 
      title: "Strategy + Support", 
      icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-50"
    },
    { 
      title: "Traction", 
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      color: "bg-green-50"
    }
  ];

  // GTM elements that float around the journey line
  const floatingElements = [
    { icon: <BookOpen className="h-6 w-6 text-gtm-pink" />, label: "Playbooks", top: "20%", left: "40%" },
    { icon: <Users className="h-6 w-6 text-gtm-pink" />, label: "Experts", top: "60%", left: "45%" },
    { icon: <Tool className="h-6 w-6 text-gtm-pink" />, label: "Tools", top: "30%", left: "70%" },
    { icon: <Play className="h-6 w-6 text-gtm-pink" />, label: "Execution", top: "70%", left: "65%" },
    { icon: <Calendar className="h-6 w-6 text-gtm-pink" />, label: "Events", top: "45%", left: "55%" }
  ];

  return (
    <div className="w-full">
      <h4 className="text-sm text-gray-500 mb-4 text-center">From Product to Traction — Powered by GTM Unbound</h4>
      
      <motion.div
        ref={ref}
        className="relative h-[300px] w-full"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Background path/line */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 300"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="40%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 50,150 C 150,50 250,250 400,150 S 650,50 750,150"
            stroke="url(#journeyGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="0"
            fill="transparent"
            variants={lineVariants}
          />
        </svg>

        {/* Journey stages */}
        <div className="absolute inset-0 flex justify-between items-center px-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div 
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md ${stage.color}`}
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)" }}
              >
                {stage.icon}
              </motion.div>
              <span className="mt-2 text-sm font-medium text-gray-700">{stage.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center"
            style={{ top: element.top, left: element.left }}
            variants={floatingIconVariants}
          >
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
              {element.icon}
            </div>
            <span className="mt-1 text-xs font-medium text-gray-600">{element.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default JourneyVisualization;
