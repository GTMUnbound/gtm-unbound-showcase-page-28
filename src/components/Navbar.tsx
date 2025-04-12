
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

const Navbar = ({ sections }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10">
            <img 
              src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" 
              alt="GTM Unbound Logo" 
              className="h-full w-auto"
            />
          </div>
          <span className="ml-2 text-xl font-semibold text-gtm-dark">GTM Unbound</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-gtm-dark hover:text-gtm-pink transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="text-gtm-dark" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gtm-dark hover:text-gtm-pink transition-colors text-left py-2"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
