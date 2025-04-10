
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Mail, Phone, Linkedin, Github, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const { toast } = useToast();

  const contactDetails = [
    {
      id: 1,
      type: "Email",
      value: "katurikrishnamohan07@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:katurikrishnamohan07@gmail.com"
    },
    {
      id: 2,
      type: "Phone",
      value: "+91 9948021970",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919948021970"
    },
    {
      id: 3,
      type: "LinkedIn",
      value: "Connect on LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "#"
    },
    {
      id: 4,
      type: "GitHub",
      value: "View on GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "#"
    }
  ];

  const handleResumeDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = '/temp-resume.pdf';
    link.download = 'Katuri_Krishna_Mohan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded",
      description: "Thank you for downloading my resume!",
      duration: 3000,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-blue-950/30">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((contact, index) => (
              <a
                key={contact.id}
                href={contact.href}
                className={`group bg-card p-6 rounded-xl shadow-md flex items-center space-x-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  isInView ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg">{contact.type}</h3>
                  <p className="text-foreground/70 text-sm">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Download My Resume</h3>
            <Button 
              onClick={handleResumeDownload}
              className="btn-primary inline-flex items-center group transition-all duration-300 hover:bg-accent"
            >
              <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
