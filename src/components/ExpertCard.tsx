
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface ExpertCardProps {
  name: string;
  role: string;
  expertise: string[];
  imageSrc?: string;
  company: string;
  bio?: string;
  className?: string;
}

const ExpertCard = ({ name, role, expertise, imageSrc, company, bio, className }: ExpertCardProps) => {
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
            filter: 'brightness(1.03)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
          className={cn(
            "p-8 rounded-2xl bg-[#F9FAFB] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm backdrop-filter",
            className
          )}
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <Avatar className="h-28 w-28 ring-2 ring-[#E0E0E0] shadow-md">
              <AvatarImage src={imageSrc} alt={name} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white text-3xl">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gtm-dark mb-2">{name}</h3>
                <p className="text-gray-600 text-base mb-1">{role}</p>
                <p className="text-gray-500 text-sm">Ex-{company}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {expertise.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium bg-white text-gray-700 px-4 py-1.5 rounded-full shadow-sm border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </HoverCardTrigger>
      {bio && (
        <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
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
