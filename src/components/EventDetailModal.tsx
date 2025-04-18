
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  highlightColor: string;
}

const EventDetailModal = ({
  isOpen,
  onClose,
  title,
  description,
  bullets,
  images,
  highlightColor
}: EventDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Prevent background scroll when modal is active
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Update image index when carousel changes
  React.useEffect(() => {
    if (!carouselApi) return;
    
    const handleSelect = () => {
      setCurrentImageIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", handleSelect);
    
    // Initial index
    handleSelect();
    
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);
  
  // Handle slider changes
  const handleSliderChange = (value: number[]) => {
    if (carouselApi && !isDragging) {
      carouselApi.scrollTo(value[0]);
    }
  };

  // Get color class based on highlight color
  const getColorClass = () => {
    if (highlightColor.includes('green')) return 'from-green-400 to-green-600';
    if (highlightColor.includes('blue')) return 'from-blue-400 to-blue-600';
    if (highlightColor.includes('orange')) return 'from-orange-400 to-orange-600';
    if (highlightColor.includes('purple')) return 'from-purple-400 to-purple-600';
    return 'from-gtm-pink to-pink-600';
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 overflow-hidden max-w-4xl w-full mx-auto rounded-xl border-0 shadow-2xl">
        <div className="relative flex flex-col w-full h-full">
          {/* Header with title and close button */}
          <div className={cn(
            "px-6 py-4 bg-gradient-to-r text-white",
            getColorClass()
          )}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-white/90">{description}</p>
              </div>
              <button 
                onClick={onClose}
                className="rounded-full p-2 bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="p-6 flex flex-col md:flex-row gap-6">
            {/* Image gallery section with vertical swipe */}
            <div className="md:w-2/3 h-[350px] md:h-[400px] relative rounded-xl overflow-hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  direction: "y",
                }}
                setApi={setCarouselApi}
                orientation="vertical"
                className="w-full h-full"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                <CarouselContent className="h-full">
                  {images.map((image, index) => (
                    <CarouselItem key={index} className="h-full pt-0 pl-0">
                      <motion.div 
                        className="relative h-full w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentImageIndex === index ? 1 : 0.4, 
                          y: currentImageIndex === index ? 0 : 20,
                          scale: currentImageIndex === index ? 1 : 0.95
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20 
                        }}
                      >
                        <img
                          src={image}
                          alt={`${title} event ${index + 1}`}
                          className="object-cover h-full w-full rounded-xl"
                        />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {/* Vertical slider for image navigation */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 h-1/2">
                <Slider
                  defaultValue={[0]}
                  max={images.length - 1}
                  step={1}
                  value={[currentImageIndex]}
                  onValueChange={handleSliderChange}
                  orientation="vertical"
                  className="h-full"
                />
              </div>
            </div>
            
            {/* Content section with bullets */}
            <div className="md:w-1/3 flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                {bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className={cn(
                      "flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2",
                      highlightColor.replace('border-', 'bg-')
                    )} />
                    <p className="text-gray-700">{bullet}</p>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                className="mt-auto pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-gray-500">
                  Swipe up/down or use the slider to browse images
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailModal;
