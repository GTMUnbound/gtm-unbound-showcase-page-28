
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EventTypeCardProps {
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  highlightColor: string;
  icon: React.ReactNode;
  label: string;
}

const EventTypeCard = ({ 
  title, 
  description, 
  bullets, 
  images, 
  highlightColor,
  icon,
  label
}: EventTypeCardProps) => {
  const [expanded, setExpanded] = useState(false);

  // Create a separate click handler for the carousel navigation buttons
  const handleCarouselButtonClick = (e: React.MouseEvent) => {
    // Prevent the click from bubbling up to the card container
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white p-6 rounded-2xl border-l-4 shadow-md hover:shadow-lg transition-all duration-300",
        highlightColor
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-gtm-pink h-8 w-8 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        </div>
        <motion.div 
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.div>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="text-gtm-pink h-5 w-5 flex-shrink-0" />
            <span className="text-gray-700">{bullet}</span>
          </div>
        ))}
      </div>
      
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: expanded ? 'auto' : 0,
          opacity: expanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
        style={{ display: expanded ? 'block' : 'none' }} 
      >
        <Carousel className="w-full" onClick={(e) => e.stopPropagation()}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <img
                    src={image}
                    alt={`${title} event ${index + 1}`}
                    className="rounded-lg object-cover w-full h-40 md:h-52"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end mt-2 gap-2" onClick={handleCarouselButtonClick}>
            <CarouselPrevious className="static translate-y-0 h-8 w-8" />
            <CarouselNext className="static translate-y-0 h-8 w-8" />
          </div>
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default EventTypeCard;
