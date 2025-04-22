
import React, { forwardRef } from 'react';

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className = '' }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-12 ${className}`}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
