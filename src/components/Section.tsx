
import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section = ({ id, children, className, fullWidth = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-8", // Reduced from py-12
        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
