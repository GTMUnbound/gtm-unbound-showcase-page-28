
import React from 'react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import EventTypeCard from '@/components/EventTypeCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';

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
    <Section id="events" className="bg-gtm-light pb-32">
      <SectionHeader 
        title="Where Founders and Operators Actually Connect"
        subtitle="We design events that drive depth — not noise."
        centered
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {eventTypes.map((eventType, index) => (
            <EventTypeCard
              key={index}
              title={eventType.title}
              description={eventType.description}
              bullets={eventType.bullets}
              images={eventType.images}
              highlightColor={eventType.highlightColor}
            />
          ))}
        </div>
        
        <NewsletterSubscription />
      </div>
    </Section>
  );
};

export default EventsSection;
