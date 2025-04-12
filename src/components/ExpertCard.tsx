
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
      "p-6 rounded-lg border border-gray-100 bg-white shadow-sm",
      className
    )}>
      <div className="h-12 w-12 bg-gradient-gtm rounded-full mb-4 text-white flex items-center justify-center font-semibold text-xl">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold text-gtm-dark">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="text-sm bg-gtm-light text-gtm-pink px-3 py-1 rounded-full inline-block">
        {expertise}
      </div>
    </div>
  );
};

export default ExpertCard;
