
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
        "py-10 sm:py-16 md:py-24", // Adjusted padding for responsive design
        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
