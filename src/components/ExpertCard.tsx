
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

interface ExpertCardProps {
  name: string;
  role: string;
  expertise: string[];
  imageSrc?: string;
  className?: string;
}

const ExpertCard = ({ name, role, expertise, imageSrc, className }: ExpertCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-2xl bg-[#F9FAFB] shadow-sm hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <Avatar className="h-28 w-28 ring-4 ring-white shadow-md">
          {imageSrc ? (
            <AvatarImage src={imageSrc} alt={name} />
          ) : (
            <AvatarFallback className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white text-3xl">
              {name.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-gtm-dark mb-2">{name}</h3>
            <p className="text-gray-600 text-base">{role}</p>
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
  );
};

export default ExpertCard;
