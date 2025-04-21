
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MessageBlockProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}

const MessageBlock = ({ icon, title, subtitle, delay }: MessageBlockProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: delay, 
            ease: "easeOut" 
          }
        }
      }}
      className="mb-9 md:mb-10"
    >
      <motion.div 
        className="flex items-center gap-2 mb-1.5"
        variants={{
          hidden: { opacity: 0, color: "#333" },
          visible: { 
            opacity: 1, 
            color: "#E64BA1",
            transition: { 
              duration: 0.5, 
              delay: delay + 0.2,
              ease: "easeOut" 
            } 
          }
        }}
      >
        <span className="mr-1">{icon}</span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          {title}
        </h3>
      </motion.div>
      <motion.p 
        className="text-base md:text-lg text-gray-600 ml-7 leading-relaxed"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.5, 
              delay: delay + 0.3, 
              ease: "easeOut"
            } 
          }
        }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

const GTMStructuredMessage = () => {
  return (
    <div className="pt-2 pb-8">
      <MessageBlock 
        icon="✔️"
        title="You've built something real"
        subtitle="A product people want."
        delay={0.1}
      />
      <MessageBlock 
        icon="✔️"
        title="You've validated demand"
        subtitle="Early users. Strong signals."
        delay={0.3}
      />
      <MessageBlock 
        icon="✔️"
        title="You're ready to scale"
        subtitle="But you don't need to do it alone."
        delay={0.5}
      />
      <MessageBlock 
        icon="🚀"
        title="GTM Unbound plugs in where it matters"
        subtitle="Structure. People. Execution — all under one roof."
        delay={0.7}
      />
    </div>
  );
};

export default GTMStructuredMessage;
