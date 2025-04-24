
import { MessageSquare, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-[#FFDEE2] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" 
                alt="GTM Unbound Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-semibold">GTM Unbound</span>
            </div>
            <p className="text-sm text-gray-600">Systems. Strategy. Execution.</p>
            <div className="space-y-2 text-gray-700">
              <p>Email: hello@gtmunbound.com</p>
              <p>Support: support@gtmunbound.com</p>
            </div>
          </div>

          {/* Offerings Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Offerings</h3>
            <div className="space-y-2">
              <a href="#diy-tools" className="block text-gray-700 hover:text-gray-900 transition-colors">DIY GTM Support</a>
              <a href="#dfy-support" className="block text-gray-700 hover:text-gray-900 transition-colors">Done-for-You Execution</a>
              <a href="#expert-guidance" className="block text-gray-700 hover:text-gray-900 transition-colors">Expert-Led Strategy</a>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#events" className="block text-gray-700 hover:text-gray-900 transition-colors">Events</a>
              <span className="block text-gray-700">Blog</span>
              <a href="https://www.linkedin.com/company/gtm-unbound/jobs/" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-gray-900 transition-colors">Careers</a>
              <a href="#terms" className="block text-gray-700 hover:text-gray-900 transition-colors">Terms & Privacy</a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2">
              <a href="#templates-library" className="block text-gray-700 hover:text-gray-900 transition-colors">Templates Library</a>
              <a href="#newsletter" className="block text-gray-700 hover:text-gray-900 transition-colors">Newsletter</a>
              <a href="#playbooks" className="block text-gray-700 hover:text-gray-900 transition-colors">GTM Playbooks</a>
              <a href="#partner-program" className="block text-gray-700 hover:text-gray-900 transition-colors">Partner Program</a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700">© 2025 GTM Unbound. Built by Operators, for Founders.</p>
        </div>

        {/* Social Media icons */}
        <div className="mt-4 flex justify-center gap-5">
          <a
            href="https://www.linkedin.com/company/gtm-unbound/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <Linkedin size={22} strokeWidth={2.2} className="text-[#FF6B9D]" />
          </a>
          <a
            href="https://x.com/gtmunbound?t=fmTUUK_ObzUPTOy6V4_BFA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform hover:scale-110"
          >
            <Twitter size={22} strokeWidth={2.2} className="text-[#FF6B9D]" />
          </a>
          <a
            href="https://www.youtube.com/channel/GTMUnbound"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-transform hover:scale-110"
          >
            <Youtube size={22} strokeWidth={2.2} className="text-[#FF6B9D]" />
          </a>
          <a
            href="https://www.instagram.com/gtmunbound/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110"
          >
            <Instagram size={22} strokeWidth={2.2} className="text-[#FF6B9D]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
