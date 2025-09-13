import React, { useRef } from 'react';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Home from './component/Home';

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#704747] text-white">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, skillsRef, aboutRef, projectsRef, contactRef }}
      />

      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
