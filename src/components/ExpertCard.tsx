
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { LinkedinIcon } from 'lucide-react';

interface ExpertCardProps {
  name: string;
  role: string;
  expertise: string[];
  imageSrc?: string;
  presentTag: string;
  bio?: string;
  linkedIn?: string;
  className?: string;
}

const ExpertCard = ({
  name,
  role,
  expertise,
  imageSrc,
  presentTag,
  bio,
  linkedIn,
  className
}: ExpertCardProps) => {
  // Function to map specific names to their new tags
  const getCustomTag = (name: string) => {
    switch(name) {
      case 'Aditi Agarwal':
        return 'Founder of GTM Unbound';
      case 'Manik Mehta':
        return 'Founder of Omnify';
      case 'Saurabh':
        return 'Founder and Managing Partner, Urban Piper';
      default:
        return presentTag;
    }
  };

  const customTag = getCustomTag(name);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: -10,
            filter: 'brightness(1.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}
          className={cn(
            "p-6 rounded-2xl bg-[#F9FAFB] shadow-sm transition-all duration-300 cursor-pointer backdrop-blur-sm backdrop-filter",
            className
          )}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="flex items-center justify-center" // Added for better centering
            >
              <Avatar className="h-28 w-28 ring-2 ring-[#E0E0E0] shadow-md flex items-center justify-center">
                <AvatarImage src={imageSrc} alt={name} className="object-cover" />
                <AvatarFallback className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white text-3xl flex items-center justify-center">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <div className="space-y-2">
              <motion.h3
                className="text-xl font-bold text-gtm-dark"
                whileHover={{ scale: 1.05 }}
              >
                {name}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm mb-1"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {role}
              </motion.p>
              <div className="flex justify-center">
                <span
                  className="inline-block bg-yellow-200 text-gray-800 rounded-md px-3 py-1 text-xs font-medium mt-1 mb-1 transition-all duration-200"
                  style={{
                    minWidth: 0,
                    fontSize: '0.85rem',
                    whiteSpace: 'pre-line',
                    wordBreak: 'break-word'
                  }}
                >
                  {customTag}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {expertise.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.8 }}
                  whileHover={{
                    scale: 1.1,
                    opacity: 1,
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-white text-gray-700 shadow-sm border border-gray-100 transition-all"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            {linkedIn && (
              <motion.a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-full flex items-center justify-center" // Added flex for centering
                onClick={(e) => e.stopPropagation()}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedinIcon size={18} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </HoverCardTrigger>
      {bio && (
        <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-gray-100">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 flex items-center justify-center">
                <AvatarImage src={imageSrc} alt={name} className="object-cover" />
                <AvatarFallback className="flex items-center justify-center">{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-xs text-muted-foreground">{presentTag}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default ExpertCard;
