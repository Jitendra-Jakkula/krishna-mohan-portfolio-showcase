
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-blue-950 text-foreground/80 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="bg-accent text-white p-3 rounded-full mb-6 hover:bg-accent/80 transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2">Katuri Krishna Mohan</h3>
            <p className="text-foreground/60 mb-4">Aspiring Software Engineer</p>
          </div>
          
          <div className="h-px w-24 bg-foreground/20 my-4"></div>
          
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Katuri Krishna Mohan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
