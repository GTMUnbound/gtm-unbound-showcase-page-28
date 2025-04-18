
import React from 'react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import EventTypeCard from '@/components/EventTypeCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { motion } from 'framer-motion';

interface EventsSectionProps {
  eventTypes: Array<{
    title: string;
    description: string;
    bullets: string[];
    images: string[];
    highlightColor: string;
  }>;
}

const EventsSection: React.FC<EventsSectionProps> = ({ eventTypes }) => {
  return (
    <Section id="events" className="bg-gradient-to-b from-gray-50 to-gtm-light py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          title="Where Founders and Operators Actually Connect"
          subtitle="We design events that drive depth — not noise."
          centered
        />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {eventTypes.map((eventType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50 
              }}
            >
              <EventTypeCard
                title={eventType.title}
                description={eventType.description}
                bullets={eventType.bullets}
                images={eventType.images}
                highlightColor={eventType.highlightColor}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <NewsletterSubscription />
        </motion.div>
      </div>
    </Section>
  );
};

export default EventsSection;
