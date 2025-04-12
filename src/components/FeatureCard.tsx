
import { cn } from '@/lib/utils';
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      <div className="text-gtm-pink mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-gtm-light">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gtm-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
