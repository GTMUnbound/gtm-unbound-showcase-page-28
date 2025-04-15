
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  bgColor?: string;
  className?: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, company, bgColor = 'bg-yellow-100', className, image }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "relative p-6 rounded-2xl transition-all",
      bgColor,
      className
    )}>
      {image && (
        <div className="absolute -top-8 left-6">
          <img 
            src={image} 
            alt={author} 
            className="w-16 h-16 rounded-full border-4 border-white shadow-md"
          />
        </div>
      )}
      <div className="pt-8">
        <p className="text-gray-700 text-lg mb-4">{quote}</p>
        <div className="font-medium">
          <div className="text-gray-900 font-semibold">{author}</div>
          <div className="text-gray-600 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
