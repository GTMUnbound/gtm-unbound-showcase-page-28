
import { cn } from '@/lib/utils';

interface ExpertCardProps {
  name: string;
  role: string;
  expertise: string;
  className?: string;
}

const ExpertCard = ({ name, role, expertise, className }: ExpertCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all",
      className
    )}>
      <div className="flex items-start space-x-4">
        <div className="h-12 w-12 bg-gradient-to-r from-gtm-pink to-pink-600 rounded-full flex items-center justify-center font-semibold text-xl text-white">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gtm-dark">{name}</h3>
          <p className="text-gray-600 mb-3">{role}</p>
          <div className="text-sm bg-gtm-light text-gtm-pink px-3 py-1 rounded-full inline-block">
            {expertise}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
