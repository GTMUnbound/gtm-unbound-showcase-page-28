
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn(
      "text-center p-4",
      className
    )}>
      <div className="text-3xl md:text-4xl font-bold text-gtm-pink mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
};

export default StatCard;
