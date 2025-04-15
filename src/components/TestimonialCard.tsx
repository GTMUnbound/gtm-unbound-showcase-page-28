
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, company, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md border border-gray-100",
      className
    )}>
      <Quote className="text-gtm-coral h-6 w-6 mb-4 opacity-50" />
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div className="font-medium">
        <span className="text-gtm-dark">{author}</span>
        <span className="text-gray-500">, {company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
