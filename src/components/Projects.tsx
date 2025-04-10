
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Code, Database, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    id: 1,
    title: "Online Recipe Sharing",
    description: "Platform to share and explore user-submitted recipes with a search filter.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Java", "HTML", "MySQL"],
    techStack: "Java, HTML, MySQL",
    linkDemo: "#",
    linkGithub: "#",
  },
  {
    id: 2,
    title: "CostMate",
    description: "A budgeting and expense tracker built with Java UI components.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Java", "JDBC", "MySQL"],
    techStack: "Java, JDBC, MySQL",
    linkDemo: "#",
    linkGithub: "#",
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 bg-blue-950/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-blue-800/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-card/80 backdrop-blur-sm text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex items-center text-sm text-foreground/60 mb-4">
                  <Code className="h-4 w-4 mr-2 text-accent" />
                  <span>Tech Stack: {project.techStack}</span>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
