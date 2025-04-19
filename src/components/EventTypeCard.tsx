
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface EventTypeCardProps {
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  highlightColor: string;
}

const EventTypeCard = ({ title, description, bullets, images, highlightColor }: EventTypeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white p-6 rounded-2xl border-l-4",
        highlightColor
      )}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="text-gtm-pink h-5 w-5" />
            <span className="text-gray-700">{bullet}</span>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} event ${index + 1}`}
            className="rounded-lg object-cover w-full h-32"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EventTypeCard;
