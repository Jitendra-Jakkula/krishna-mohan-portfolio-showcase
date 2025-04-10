
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { BookOpen, Film, Cricket } from 'lucide-react';

const hobbiesData = [
  {
    id: 1,
    name: "Reading Books",
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-purple-500 to-indigo-600",
    description: "I enjoy exploring different genres, from technical books to fiction."
  },
  {
    id: 2,
    name: "Watching Movies",
    icon: <Film className="h-8 w-8" />,
    color: "from-teal-500 to-emerald-600",
    description: "Cinema helps me relax and gain new perspectives and inspiration."
  },
  {
    id: 3,
    name: "Playing Cricket",
    icon: <Cricket className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-600",
    description: "Cricket keeps me physically active and teaches teamwork."
  }
];

const Hobbies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="hobbies" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="section-title">Hobbies</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
            <div
              key={hobby.id}
              className={`bg-card rounded-xl shadow-md overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={`h-24 flex items-center justify-center bg-gradient-to-r ${hobby.color}`}>
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                  {hobby.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center">{hobby.name}</h3>
                <p className="text-foreground/70 text-center">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
