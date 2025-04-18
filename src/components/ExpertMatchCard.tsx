
import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpertMatchCardProps {
  className?: string;
}

const ExpertMatchCard = ({ className }: ExpertMatchCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
        "bg-gradient-to-br from-pink-100 via-pink-50 to-white",
        "hover:shadow-xl hover:scale-[1.02]",
        "border border-pink-200/50",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        scale: 1.02,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gtm-coral/20 to-gtm-pink/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gtm-pink/10 to-gtm-coral/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
            <Users className="w-5 h-5 text-gtm-pink" />
          </div>
          <Sparkles className="w-4 h-4 text-gtm-coral animate-pulse" />
        </div>
        
        <h3 className="text-xl font-semibold text-gtm-dark mb-2 tracking-tight">
          Expert Match
        </h3>
        
        <p className="text-sm text-gray-600">
          Matched with proven GTM experts
        </p>
      </div>

      {/* Interactive elements */}
      <motion.div 
        className="absolute bottom-3 right-3 text-gtm-pink/30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Users className="w-12 h-12" />
      </motion.div>
    </motion.div>
  );
};

export default ExpertMatchCard;
