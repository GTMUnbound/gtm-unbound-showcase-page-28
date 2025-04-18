
import { motion } from 'framer-motion';
import { Users, Sparkles, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpertMatchCardProps {
  className?: string;
}

const ExpertMatchCard = ({ className }: ExpertMatchCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl p-8 transition-all duration-500",
        "bg-gradient-to-br from-pink-50 via-white to-pink-100",
        "hover:shadow-[0_8px_30px_rgb(255,107,157,0.12)]",
        "border border-pink-100/40 backdrop-blur-sm",
        "group cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gtm-coral/20 to-gtm-pink/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gtm-pink/10 to-gtm-coral/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <motion.div 
            className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm"
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Trophy className="w-6 h-6 text-gtm-coral" />
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-5 h-5 text-gtm-pink" />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-semibold text-gtm-dark mb-3 tracking-tight group-hover:text-gtm-pink transition-colors">
          Expert Match
        </h3>
        
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Matched with proven GTM experts
        </p>

        <div className="flex items-center gap-2 text-gtm-pink/70 mt-auto">
          <Users className="w-4 h-4" />
          <span className="text-sm">Connect with experts</span>
          <motion.div
            className="ml-auto"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Success indicators */}
        <div className="absolute top-4 right-4 flex gap-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <CheckCircle className="w-4 h-4 text-green-500/40" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertMatchCard;
