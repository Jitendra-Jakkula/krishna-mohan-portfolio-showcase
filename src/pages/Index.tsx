
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  useEffect(() => {
    // Set page title
    document.title = "Katuri Krishna Mohan - Portfolio";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
