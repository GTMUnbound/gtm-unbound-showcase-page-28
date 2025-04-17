
import React from 'react';
import Section from '@/components/Section';
import StatCard from '@/components/StatCard';
import { motion } from 'framer-motion';

interface StatsProps {
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

const StatsSection: React.FC<StatsProps> = ({ stats }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-row gap-6 mt-8 overflow-x-auto pb-4 md:overflow-visible md:flex-nowrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => (
        <motion.div variants={itemVariants} className="min-w-[160px] max-w-[200px] flex-1" key={index}>
          <StatCard 
            value={stat.value} 
            label={stat.label} 
            description={stat.description}
            compact
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
