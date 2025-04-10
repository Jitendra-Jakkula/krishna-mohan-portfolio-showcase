
import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Code, FileCode, Globe, Database, Palette } from 'lucide-react';

const skillsList = [
  { 
    name: 'Java', 
    percentage: 85, 
    icon: <FileCode className="h-5 w-5" />,
    description: 'Object-oriented programming & application development'
  },
  { 
    name: 'HTML/CSS', 
    percentage: 80, 
    icon: <Globe className="h-5 w-5" />,
    description: 'Responsive web design & styling'
  },
  { 
    name: 'JavaScript', 
    percentage: 70, 
    icon: <Code className="h-5 w-5" />,
    description: 'Interactive web development'
  },
  { 
    name: 'UI/UX Basics', 
    percentage: 75, 
    icon: <Palette className="h-5 w-5" />,
    description: 'User interface & experience design principles'
  },
  { 
    name: 'MySQL', 
    percentage: 80, 
    icon: <Database className="h-5 w-5" />,
    description: 'Database design and SQL queries'
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1, once: true });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-blue-950/30">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 gap-8">
          {skillsList.map((skill, index) => (
            <div key={skill.name} className="bg-card p-6 rounded-xl shadow-md transition-all duration-500">
              <div className="flex items-center mb-3">
                <div className="mr-3 bg-accent/10 p-2 rounded-full text-accent">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <p className="text-sm text-foreground/70 mb-4">{skill.description}</p>
              
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: animated ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-foreground/70">
                {skill.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
