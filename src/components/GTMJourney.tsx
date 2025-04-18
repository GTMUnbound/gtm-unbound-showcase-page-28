
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import ExpertMatchCard from './ExpertMatchCard';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const GTMJourney = () => {
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

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {journeyCards.map((card, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                {card.isExpertMatch ? (
                  <ExpertMatchCard className="w-full h-[220px]" />
                ) : (
                  <div className={cn(
                    "w-full h-[220px] bg-gradient-to-r rounded-xl shadow-md p-6 flex flex-col justify-between group transition-all duration-300",
                    card.gradient
                  )}>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-white/90">{card.description}</p>
                    </div>
                    <ArrowRight className="text-white self-end transform transition-transform group-hover:translate-x-2" />
                  </div>
                )}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex justify-end gap-2 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      
      <motion.div 
        className="flex justify-center gap-2 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {journeyCards.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-gtm-pink/30"
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GTMJourney;
