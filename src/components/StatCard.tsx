
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <motion.div 
      className={cn(
        "text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-100 shadow-sm",
        className
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-gtm-pink mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </motion.div>
  );
};

export default StatCard;
