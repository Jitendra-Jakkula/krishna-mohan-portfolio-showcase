
import React, { useEffect, useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-950/50 to-transparent"></div>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="section-title">About Me</h2>
            <div className="mt-8 space-y-4 text-foreground/90">
              <p>
                Hi! I'm Katuri Krishna Mohan, a passionate Computer Science student currently pursuing B.Tech from Malla Reddy University. I come from Damaracherla, Nalgonda District, where I completed my early education with discipline and dedication.
              </p>
              <p>
                My interest in technology began early on, which led me to pursue Intermediate at NRI Junior College, Guntur. Over time, I've developed a strong interest in Java programming, UI/UX principles, and software design.
              </p>
              <p>
                Outside of academics, I enjoy reading books, watching movies, and playing cricket, which helps me stay balanced and creative.
              </p>
              <p>
                I'm constantly exploring new tools and technologies, aiming to build software that solves real-world problems.
              </p>
            </div>
          </div>
          
          <div className={`flex flex-col items-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <img 
                  src="/lovable-uploads/d22e3728-9e44-4aa4-807e-41ae6ae22906.png" 
                  alt="Katuri Krishna Mohan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full">
                <h3 className="text-xl font-cursive text-accent italic text-center font-semibold">Katuri Krishna Mohan</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
