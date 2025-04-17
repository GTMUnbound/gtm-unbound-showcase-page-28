
import React from 'react';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="h-10 w-10 mr-3">
              <img 
                src="/lovable-uploads/2c2392be-5ec4-4204-9c57-678ce83d78a5.png" 
                alt="GTM Unbound Logo" 
                className="h-full w-auto brightness-200"
              />
            </div>
            <span className="text-xl font-semibold">GTM Unbound</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            GTM Unbound © 2025 — Built by Operators, for Founders
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
