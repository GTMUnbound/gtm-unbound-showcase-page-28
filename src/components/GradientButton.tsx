
import { cn } from '@/lib/utils';
import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientButton = ({ children, className, ...props }: GradientButtonProps) => {
  return (
    <button
      className={cn(
        "bg-gradient-gtm text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
