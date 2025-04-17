
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
        "mb-4 px-4 py-6 flex items-center justify-center h-32 w-full rounded-lg overflow-hidden",
        bgColor || "bg-white"
      )}>
        <motion.img 
          src={src} 
          alt={alt} 
          className={cn(
            "h-24 md:h-28 object-contain mx-auto max-w-[80%]",
            inverted ? "brightness-0 invert" : ""
          )}
          initial={{ filter: "contrast(100%)" }}
          whileHover={{ 
            filter: "contrast(125%)",
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div 
        className="text-lg font-semibold text-gtm-dark"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {name}
      </motion.div>
      <motion.div 
        className="text-sm text-gray-500"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default ClientLogo;
