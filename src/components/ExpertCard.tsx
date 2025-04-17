
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
  company: string;
  bio?: string;
  linkedIn?: string;
  className?: string;
}

const ExpertCard = ({ 
  name, 
  role, 
  expertise, 
  imageSrc, 
  company, 
  bio, 
  linkedIn,
  className 
}: ExpertCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            y: -5, 
            filter: 'brightness(1.05)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
          }}
          className={cn(
            "p-6 rounded-2xl bg-[#F9FAFB] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm backdrop-filter",
            className
          )}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-28 w-28 ring-2 ring-[#E0E0E0] shadow-md">
              <AvatarImage src={imageSrc} alt={name} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white text-3xl">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gtm-dark">{name}</h3>
              <p className="text-gray-600 text-sm mb-1">{role}</p>
              <p className="text-gray-500 text-xs">Ex-{company}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {expertise.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 rounded-full bg-white text-gray-700 shadow-sm border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {linkedIn && (
              <a 
                href={linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedinIcon size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </HoverCardTrigger>
      {bio && (
        <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={imageSrc} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-xs text-muted-foreground">Ex-{company}</p>
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
