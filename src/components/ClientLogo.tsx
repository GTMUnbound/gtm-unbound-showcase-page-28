
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  className?: string;
  inverted?: boolean;
  bgColor?: string;
}

const ClientLogo = ({ 
  src, 
  alt, 
  name, 
  description, 
  className, 
  inverted = false,
  bgColor
}: ClientLogoProps) => {
  return (
    <motion.div 
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all",
        bgColor,
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img 
        src={src} 
        alt={alt} 
        className={cn(
          "h-12 object-contain max-w-[160px]",
          inverted ? "brightness-0 invert" : "contrast-125"
        )} 
      />
    </motion.div>
  );
};

export default ClientLogo;
