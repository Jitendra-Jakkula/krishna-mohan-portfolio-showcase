
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { GraduationCap, School, CalendarDays } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "B.Tech in CSE",
    institution: "Malla Reddy University",
    period: "Currently Pursuing",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "NRI Junior College, Guntur",
    period: "Completed",
    icon: <School className="h-5 w-5" />,
  },
  {
    id: 3,
    degree: "10th Class",
    institution: "Noble High School, Damaracherla, Nalgonda District",
    period: "Completed",
    icon: <School className="h-5 w-5" />,
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="education" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 relative pl-6 max-w-2xl mx-auto">
          {educationData.map((item, index) => (
            <div 
              key={item.id}
              className={`timeline-item transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot">
                <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-accent animate-pulse"></div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md mb-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center mb-3">
                  <div className="mr-3 bg-primary/10 p-2 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                </div>
                
                <div className="flex items-center text-sm text-foreground/70 mb-2">
                  <School className="h-4 w-4 mr-2" />
                  <span>{item.institution}</span>
                </div>
                
                <div className="flex items-center text-sm text-foreground/70">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
