
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  compact?: boolean;
}

const StatCard = ({ value, label, description, className, compact = false }: StatCardProps) => {
  return (
    <motion.div 
      className={cn(
        "text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-lg transition-all",
        compact && "flex-1 md:min-w-44",
        className
      )}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {description ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="cursor-help">
              <div className="text-3xl md:text-4xl font-bold text-gtm-pink mb-2">{value}</div>
              <div className="text-gray-700 font-medium">{label}</div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
            <p className="text-sm text-gray-700">{description}</p>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <>
          <div className="text-3xl md:text-4xl font-bold text-gtm-pink mb-2">{value}</div>
          <div className="text-gray-700 font-medium">{label}</div>
        </>
      )}
    </motion.div>
  );
};

export default StatCard;
