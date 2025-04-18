
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface EventTypeCardProps {
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  highlightColor?: string;
}

const EventTypeCard = ({ title, description, bullets, images, highlightColor = "border-gtm-pink" }: EventTypeCardProps) => {
  return (
    <motion.div 
      className={cn(
        "relative p-6 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md shadow-lg border-l-4",
        highlightColor
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 50,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
      }}
    >
      {/* Animated background gradient orb */}
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-pink-100/30 to-purple-100/10 blur-xl z-0" />
      
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold text-gtm-dark mb-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.1, 
            duration: 0.3 
          }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.2, 
            duration: 0.3 
          }}
        >
          {description}
        </motion.p>
        
        <div className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <motion.div 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.3 + (index * 0.1), 
                duration: 0.3 
              }}
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  delay: 0.4 + (index * 0.1)
                }}
                className="text-gtm-pink mr-2 flex-shrink-0"
              >
                <Check size={16} />
              </motion.span>
              <span className="text-sm text-gray-700">{bullet}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Images grid with hover effects */}
        <div className="grid grid-cols-2 gap-2">
          {images.slice(0, 4).map((image, index) => (
            <motion.div 
              key={index}
              className="relative h-20 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ 
                delay: 0.6 + (index * 0.1), 
                duration: 0.3 
              }}
            >
              <img 
                src={image} 
                alt={`${title} event ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Shimmer effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-gradient-shimmer opacity-10"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ 
          repeat: Infinity, 
          duration: 2.5, 
          ease: "linear",
          repeatDelay: 1.5 
        }}
      />
    </motion.div>
  );
};

export default EventTypeCard;
