
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // For active section highlight
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <a href="#home" className="flex items-center">
              <span className="text-accent">K</span>
              <span>rishna.</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === link.href.substring(1) ? 'active' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-4 bg-accent/10 border-accent text-accent hover:bg-accent hover:text-white inline-flex items-center"
                onClick={handleResumeClick}
              >
                <FileDown className="h-4 w-4 mr-1" />
                Resume
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme} 
                className="ml-2"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="mr-2"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.href.substring(1) ? 'active' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2 w-full bg-accent/10 border-accent text-accent hover:bg-accent hover:text-white inline-flex items-center justify-center"
            onClick={handleResumeClick}
          >
            <FileDown className="h-4 w-4 mr-1" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
