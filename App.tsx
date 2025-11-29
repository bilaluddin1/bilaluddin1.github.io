import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'services', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white font-sans selection:bg-cyber-neon selection:text-black">
      <Navbar activeSection={activeSection} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
           <About />
        </section>

        <section id="skills" className="scroll-mt-24">
           <Skills />
        </section>

        <section id="services" className="scroll-mt-24">
           <Services />
        </section>

        <section id="experience" className="scroll-mt-24">
           <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
           <Projects />
        </section>

        <section id="contact" className="scroll-mt-24">
           <Contact />
        </section>
      </main>
      
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-500 font-mono text-sm">
        <p>© {new Date().getFullYear()} Bilal Uddin.</p>
      </footer>
    </div>
  );
};

export default App;