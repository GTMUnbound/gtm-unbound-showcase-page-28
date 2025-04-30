
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import AnimatedNavItem from './AnimatedNavItem';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

const AnimatedNavbar = ({ sections }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sectionIds = sections.map(section => section.id);
      const sectionElements = sectionIds.map(id => document.getElementById(id));
      
      // Get viewport height for better calculations
      const viewportHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + (viewportHeight / 3); // Adjust offset for better detection
      
      // Find the current active section (last visible section that starts before current position)
      let newActiveSection = 'home';
      
      // Iterate through elements and find the last one that starts before our current position
      sectionElements.forEach((element, index) => {
        if (element && element.offsetTop <= currentScrollPosition) {
          newActiveSection = sectionIds[index];
        }
      });
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="h-10 w-10">
            <img 
              src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" 
              alt="GTM Unbound Logo" 
              className="h-full w-auto"
            />
          </div>
          <span className="ml-2 text-xl font-semibold text-gtm-dark">GTM Unbound</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <AnimatedNavItem
              key={section.id}
              label={section.label}
              onClick={() => scrollToSection(section.id)}
              isActive={activeSection === section.id}
            />
          ))}
          
          {/* Talk to Our Team Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-gradient-to-r from-gtm-coral to-gtm-pink text-white hover:opacity-90 transition-opacity relative overflow-hidden"
              onClick={() => scrollToSection('contact')}
            >
              <span className="relative z-10">Talk to Our Team</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.4 }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: 'inherit' }}
              />
            </Button>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-gradient-to-r from-gtm-coral to-gtm-pink text-white hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('contact')}
              size="sm"
            >
              Talk to Us
            </Button>
          </motion.div>
          <motion.button 
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="text-gtm-dark" />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute w-full bg-white shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "text-gtm-dark hover:text-gtm-pink transition-colors text-left py-2",
                    activeSection === section.id && "text-gtm-pink"
                  )}
                  variants={itemVariants}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default AnimatedNavbar;
