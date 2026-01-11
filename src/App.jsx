import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme or prefer dark mode if system prefers it
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Handle mouse movement with debounce
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, [isMobile]);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Mouse move event
  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isMobile]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      {/* Animated background elements */}
      <div className="floating-elements">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className={`floating-element el${i + 1}`}
            style={{ '--i': i }}
          />
        ))}
      </div>

      {/* Mouse follower (only on desktop) */}
      {!isMobile && (
        <div 
          className="mouse-follower"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Let's Connect!</h3>
            <p>Always open to exciting opportunities and collaborations.</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><i className="fas fa-envelope"></i> harinin006@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91-8946051393</p>
            <p><i className="fas fa-map-marker-alt"></i> Coimbatore, India</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#certifications">Certifications</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Social</h4>
            <div className="social-links">
              <a href="https://linkedin.com/in/harininr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/harininr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:harinin006@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Harini Nagarajan. Crafted with ❤️ using React + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;