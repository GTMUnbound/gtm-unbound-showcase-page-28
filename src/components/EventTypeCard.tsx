
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface EventTypeCardProps {
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  highlightColor: string;
}

const EventTypeCard = ({ title, description, bullets, images, highlightColor }: EventTypeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.3 }
    })
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div 
        className={`border-t-4 ${highlightColor} cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-6 w-6 text-gray-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full mb-6"
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${title} event ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static transform-none mx-2" />
                  <CarouselNext className="static transform-none mx-2" />
                </div>
              </Carousel>

              <div className="space-y-3">
                {bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={bulletVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2"
                  >
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EventTypeCard;
