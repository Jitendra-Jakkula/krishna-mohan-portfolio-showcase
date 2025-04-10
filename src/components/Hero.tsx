
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-sm"></div>
      <div 
        className={`section-container relative z-10 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          Katuri <span className="text-accent">Krishna</span> Mohan
        </h1>
        
        <div className="my-6 h-0.5 w-24 bg-accent/50 rounded-full"></div>
        
        <div className="typing-container mb-8">
          <p className="typing-text text-xl md:text-2xl text-foreground/80">
            Aspiring Software Engineer | Tech Enthusiast | Problem Solver
          </p>
        </div>
        
        <Button 
          onClick={scrollToAbout}
          className="btn-primary mt-8 group"
        >
          Explore Portfolio
          <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;
