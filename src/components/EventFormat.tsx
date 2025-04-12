
import { cn } from '@/lib/utils';
import React from 'react';

interface EventFormatProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const EventFormat = ({ icon, title, className }: EventFormatProps) => {
  return (
    <div className={cn(
      "flex items-center space-x-3",
      className
    )}>
      <div className="text-gtm-pink bg-gtm-light p-2 rounded-full">
        {icon}
      </div>
      <span className="text-gtm-dark font-medium">{title}</span>
    </div>
  );
};

export default EventFormat;
