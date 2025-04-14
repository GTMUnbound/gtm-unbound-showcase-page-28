
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
        "flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={cn(
        "mb-4 px-4 py-6 flex items-center justify-center h-32 w-full rounded-lg",
        bgColor
      )}>
        <img 
          src={src} 
          alt={alt} 
          className={cn(
            "h-24 md:h-28 object-contain mx-auto max-w-[80%]",
            inverted && "brightness-0 invert"
          )} 
        />
      </div>
      <div className="text-lg font-semibold text-gtm-dark">{name}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </motion.div>
  );
};

export default ClientLogo;
