
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion, AnimatePresence } from 'framer-motion';
import ExpertMatchCard from './ExpertMatchCard';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useState, useCallback, useEffect } from 'react';
import type { CarouselApi } from "@/components/ui/carousel";

const GTMJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  const journeyCards = [
    {
      title: "Expert Match",
      description: "Find your perfect GTM guide",
      isExpertMatch: true
    },
    {
      title: "GTM Sprints",
      description: "8-week launch plan",
      gradient: "from-gtm-coral to-gtm-pink"
    },
    {
      title: "GTM Rituals",
      description: "Weekly team alignment",
      gradient: "from-pink-400 to-gtm-pink"
    },
    {
      title: "Conversion Boost",
      description: "Double your rate in 2 months",
      gradient: "from-purple-400 to-gtm-pink"
    }
  ];

  // Update active index when carousel changes
  useEffect(() => {
    if (!carouselApi) return;
    
    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", handleSelect);
    
    // Initial index
    handleSelect();
    
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {journeyCards.map((card, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-500 perspective-1000"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, rotateY: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: activeIndex === index ? 0 : -20,
                  scale: activeIndex === index ? 1 : 0.9,
                  z: activeIndex === index ? 0 : -100
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.2 }
                }}
                className="h-full transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {card.isExpertMatch ? (
                  <ExpertMatchCard className="w-full h-[220px]" />
                ) : (
                  <div 
                    className={cn(
                      "w-full h-[220px] bg-gradient-to-r rounded-xl shadow-lg p-6 flex flex-col justify-between group transition-all duration-300",
                      "hover:shadow-2xl",
                      "transform-gpu backface-hidden",
                      card.gradient
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-white/90">{card.description}</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="self-end"
                    >
                      <ArrowRight className="text-white transform transition-transform group-hover:translate-x-2" />
                    </motion.div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform translate-y-1/2 -translate-x-1/2" />
                  </div>
                )}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:flex justify-end gap-2 mt-4">
          <CarouselPrevious className="transition-transform hover:-translate-x-1" />
          <CarouselNext className="transition-transform hover:translate-x-1" />
        </div>
      </Carousel>
      
      <motion.div 
        className="flex justify-center gap-3 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {journeyCards.map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-gtm-pink scale-125" : "bg-gtm-pink/30"
            )}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
              backgroundColor: activeIndex === index ? "rgb(255, 107, 157)" : "rgba(255, 107, 157, 0.3)"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GTMJourney;
