
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ExpertCardProps {
  name: string;
  role: string;
  expertise: string[];
  imageSrc?: string;
  className?: string;
}

const ExpertCard = ({ name, role, expertise, imageSrc, className }: ExpertCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all",
      className
    )}>
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar className="h-24 w-24">
          {imageSrc ? (
            <AvatarImage src={imageSrc} alt={name} />
          ) : (
            <AvatarFallback className="bg-gradient-to-r from-gtm-pink to-pink-600 text-white text-2xl">
              {name.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div>
          <h3 className="text-xl font-semibold text-gtm-dark mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{role}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {expertise.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
