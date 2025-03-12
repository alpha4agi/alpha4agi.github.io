import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import SchoolExperience from './components/SchoolExperience';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Header />
        </section>
        
        <section id="about" className="py-16 bg-white">
          <ScrollAnimation animation="fade-in-up">
            <About />
          </ScrollAnimation>
        </section>
        
        <section id="education" className="py-16 bg-gray-50">
          <ScrollAnimation animation="fade-in-right">
            <SchoolExperience />
          </ScrollAnimation>
        </section>
        
        <section id="experience" className="py-16 bg-white">
          <ScrollAnimation animation="fade-in-left">
            <Experience />
          </ScrollAnimation>
        </section>
        
        <section id="projects" className="py-16 bg-gray-50">
          <ScrollAnimation animation="fade-in-up">
            <Projects />
          </ScrollAnimation>
        </section>
        
        <section id="interests" className="py-16 bg-white">
          <ScrollAnimation animation="zoom-in">
            <Interests />
          </ScrollAnimation>
        </section>
        
        <section id="contact" className="py-16 bg-gray-50">
          <ScrollAnimation animation="fade-in-up">
            <Contact />
          </ScrollAnimation>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;