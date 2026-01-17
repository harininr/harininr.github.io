import React, { useState, useEffect, useCallback } from 'react';

const Portfolio = () => {
  const [theme, setTheme] = useState('light');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'skills', 'education', 'certifications'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth > 768) {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`portfolio ${theme}`}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          --purple-50: #faf5ff;
          --purple-100: #f3e8ff;
          --purple-200: #e9d5ff;
          --purple-300: #d8b4fe;
          --purple-400: #c084fc;
          --purple-500: #a855f7;
          --purple-600: #9333ea;
          --purple-700: #7e22ce;
          --purple-800: #6b21a8;
          --purple-900: #581c87;
          
          --bg-primary: #ffffff;
          --bg-secondary: #faf5ff;
          --bg-card: #ffffff;
          --text-primary: #1a1a2e;
          --text-secondary: #4a5568;
          --accent: var(--purple-600);
          --accent-light: var(--purple-400);
          --accent-dark: var(--purple-700);
          --shadow: rgba(147, 51, 234, 0.1);
          --glow: rgba(147, 51, 234, 0.3);
          
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: all 0.3s ease;
          overflow-x: hidden;
        }

        .portfolio.dark {
          --bg-primary: #0f0a1e;
          --bg-secondary: #1a1333;
          --bg-card: #241b3e;
          --text-primary: #f0f0f5;
          --text-secondary: #b8b8d1;
          --shadow: rgba(168, 85, 247, 0.2);
          --glow: rgba(168, 85, 247, 0.4);
        }

        /* Animated Background */
        .bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple-400), var(--purple-600));
          opacity: 0.1;
          animation: float 20s infinite ease-in-out;
        }

        .particle:nth-child(1) { width: 300px; height: 300px; top: 10%; left: 5%; animation-delay: 0s; }
        .particle:nth-child(2) { width: 200px; height: 200px; top: 60%; right: 10%; animation-delay: 3s; }
        .particle:nth-child(3) { width: 250px; height: 250px; bottom: 20%; left: 20%; animation-delay: 6s; }
        .particle:nth-child(4) { width: 350px; height: 350px; top: 30%; right: 15%; animation-delay: 9s; }
        .particle:nth-child(5) { width: 180px; height: 180px; bottom: 10%; right: 25%; animation-delay: 12s; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; }
          25% { transform: translate(30px, -30px) rotate(90deg); opacity: 0.15; }
          50% { transform: translate(-20px, 20px) rotate(180deg); opacity: 0.08; }
          75% { transform: translate(25px, 15px) rotate(270deg); opacity: 0.12; }
        }

        /* Mouse Follower */
        .mouse-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s;
          mix-blend-mode: screen;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: ${scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
          backdrop-filter: blur(20px);
          z-index: 1000;
          padding: 1.5rem 5%;
          transition: all 0.3s ease;
          border-bottom: 1px solid ${scrolled ? 'var(--shadow)' : 'transparent'};
        }

        .dark .header {
          background: ${scrolled ? 'rgba(15, 10, 30, 0.9)' : 'transparent'};
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--purple-600), var(--purple-400));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          cursor: pointer;
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--purple-400));
          transition: width 0.3s;
        }

        .logo:hover::after {
          width: 100%;
        }

        .nav {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s;
          cursor: pointer;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--accent);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }

        .theme-toggle {
          background: var(--bg-card);
          border: 2px solid var(--shadow);
          border-radius: 50px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px var(--shadow);
        }

        .theme-toggle:hover {
          transform: rotate(180deg) scale(1.1);
          box-shadow: 0 6px 25px var(--glow);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5% 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 1200px;
          text-align: center;
        }

        .profile-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 3rem;
        }

        .profile-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple-600), var(--purple-400));
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple-600), var(--purple-400));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 10px 40px var(--glow);
          z-index: 2;
        }

        .hero h1 {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--purple-700), var(--purple-400));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        .contact-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--purple-600), var(--purple-400));
          color: white;
          box-shadow: 0 5px 20px var(--glow);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px var(--glow);
        }

        .btn-secondary {
          background: var(--bg-card);
          color: var(--accent);
          border: 2px solid var(--accent);
        }

        .btn-secondary:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-3px);
        }

        /* Section */
        .section {
          padding: 6rem 5%;
          position: relative;
          z-index: 1;
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(135deg, var(--purple-700), var(--purple-400));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, var(--purple-600), var(--purple-400));
          border-radius: 2px;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 5px 30px var(--shadow);
          border: 1px solid var(--shadow);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--purple-600), var(--purple-400));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 50px var(--glow);
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          font-size: 2.5rem;
          color: var(--accent);
        }

        .project-status {
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--purple-100), var(--purple-200));
          color: var(--purple-700);
        }

        .dark .project-status {
          background: var(--purple-900);
          color: var(--purple-300);
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tag {
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          background: var(--purple-100);
          color: var(--purple-700);
          border: 1px solid var(--purple-200);
        }

        .dark .tag {
          background: var(--purple-900);
          color: var(--purple-300);
          border-color: var(--purple-800);
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 5px 30px var(--shadow);
          border: 1px solid var(--shadow);
          transition: all 0.3s;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px var(--glow);
        }

        .skill-category h3 {
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          background: var(--purple-50);
          color: var(--purple-700);
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid var(--purple-200);
          transition: all 0.3s;
        }

        .dark .skill-tag {
          background: var(--purple-900);
          color: var(--purple-300);
          border-color: var(--purple-800);
        }

        .skill-tag:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-2px);
        }

        /* Education & Certifications */
        .timeline-item {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 2.5rem;
          margin: 2rem 0;
          box-shadow: 0 5px 30px var(--shadow);
          border-left: 5px solid var(--accent);
          transition: all 0.4s;
          position: relative;
        }

        .timeline-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 40px var(--glow);
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -30px;
          top: 2.5rem;
          width: 20px;
          height: 20px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 0 5px var(--bg-primary);
        }

        .timeline-date {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--purple-600), var(--purple-400));
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .timeline-item h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .timeline-item h4 {
          color: var(--accent);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .timeline-item p,
        .timeline-item li {
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0.5rem 0;
        }

        .timeline-item ul {
          list-style: none;
          margin-top: 1rem;
        }

        .timeline-item li::before {
          content: '▹';
          color: var(--accent);
          font-weight: bold;
          margin-right: 0.75rem;
        }

        /* Footer */
        .footer {
          background: var(--bg-secondary);
          padding: 4rem 5% 2rem;
          border-top: 1px solid var(--shadow);
          position: relative;
          z-index: 1;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 3px 15px var(--shadow);
        }

        .social-link:hover {
          background: linear-gradient(135deg, var(--purple-600), var(--purple-400));
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 6px 25px var(--glow);
        }

        .footer-text {
          color: var(--text-secondary);
          margin-top: 2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav { display: none; }
          .hero h1 { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.3rem; }
          .section-title { font-size: 2rem; }
          .projects-grid,
          .skills-grid { grid-template-columns: 1fr; }
          .contact-buttons { flex-direction: column; }
        }
      `}</style>

      {/* Animated Background */}
      <div className="bg-animation">
        {[...Array(5)].map((_, i) => <div key={i} className="particle" />)}
      </div>

      {/* Mouse Glow */}
      {window.innerWidth > 768 && (
        <div 
          className="mouse-glow"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('home')}>HN</div>
          <nav className="nav">
            <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</a>
            <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</a>
            <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</a>
            <a className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={() => scrollToSection('education')}>Education</a>
            <a className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`} onClick={() => scrollToSection('certifications')}>Certifications</a>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="profile-wrapper">
            <div className="profile-ring" />
            <div className="profile-image">HN</div>
          </div>
          <h1>Harini Nagarajan</h1>
          <div className="hero-subtitle">Computer Science Engineer</div>
          <p className="hero-description">
            B.Tech CSE student at Amrita Vishwa Vidyapeetham with expertise in Full-Stack Development, 
            Machine Learning, and Cloud Computing. AWS Certified Cloud & AI Practitioner passionate about 
            building innovative solutions.
          </p>
          <div className="contact-buttons">
            <a href="mailto:harinin006@gmail.com" className="btn btn-primary">
              📧 Get In Touch
            </a>
            <a href="https://linkedin.com/in/harininr" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              💼 LinkedIn
            </a>
            <a href="https://github.com/harininr" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🎓</div>
                <div className="project-status">Ongoing</div>
              </div>
              <h3>Amrita Placement Tracker</h3>
              <p>Centralized placement management platform with real-time tracking of recruitment drives, student eligibility, and application status.</p>
              <div className="project-tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">RBAC</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🔐</div>
                <div className="project-status">2025</div>
              </div>
              <h3>Digital Smart Lock</h3>
              <p>OTP-based smart locking system with Bluetooth authentication optimized for low-memory embedded environments.</p>
              <div className="project-tags">
                <span className="tag">Embedded C</span>
                <span className="tag">Bluetooth</span>
                <span className="tag">HC-05</span>
                <span className="tag">Real-time</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🤟</div>
                <div className="project-status">2025</div>
              </div>
              <h3>ASL Gesture Recognition</h3>
              <p>Real-time American Sign Language recognition using classical image processing and lightweight ML models.</p>
              <div className="project-tags">
                <span className="tag">OpenCV</span>
                <span className="tag">Python</span>
                <span className="tag">ML</span>
                <span className="tag">DIP</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🤖</div>
                <div className="project-status">2025</div>
              </div>
              <h3>RightPath - AI Coding Companion</h3>
              <p>AI-powered learning-first coding companion emphasizing conceptual understanding with contextual hints and feedback.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">OpenRouter</span>
                <span className="tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-content">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>💻 Programming Languages</h3>
              <div className="skill-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Embedded C</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>🌐 Web & ML Frameworks</h3>
              <div className="skill-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">OpenCV</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>💾 Databases</h3>
              <div className="skill-list">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>🛠️ Developer Tools</h3>
              <div className="skill-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Keil uVision</span>
                <span className="skill-tag">Electron.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>☁️ Cloud Platforms</h3>
              <div className="skill-list">
                <span className="skill-tag">AWS EC2</span>
                <span className="skill-tag">AWS S3</span>
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">AWS IAM</span>
                <span className="skill-tag">SageMaker</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>📚 Core CS Concepts</h3>
              <div className="skill-list">
                <span className="skill-tag">DSA</span>
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">OS</span>
                <span className="skill-tag">Networks</span>
                <span className="skill-tag">DBMS</span>
                <span className="skill-tag">ML</span>
                <span className="skill-tag">Embedded Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="section-content">
          <h2 className="section-title">Education</h2>
          
          <div className="timeline-item">
            <div className="timeline-date">2023 – Present</div>
            <h3>B.Tech in Computer Science and Engineering</h3>
            <h4>Amrita Vishwa Vidyapeetham, Coimbatore</h4>
            <p><strong>CGPA: 8.59/10</strong></p>
            <ul>
              <li>Specialized in Full-Stack Development, Machine Learning, and Cloud Computing</li>
              <li>Active participant in hackathons and coding competitions</li>
              <li>Building innovative projects in AI/ML and embedded systems</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">March 2023</div>
            <h3>All India Senior School Certificate Examination (AISSCE)</h3>
            <h4>Velammal Vidyalaya, Karur</h4>
            <p><strong>Percentage: 90.4%</strong></p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section" id="certifications">
        <div className="section-content">
          <h2 className="section-title">Certifications</h2>
          
          <div className="timeline-item">
            <div className="timeline-date">December 2025</div>
            <h3>AWS Certified AI Practitioner (AIF-C01)</h3>
            <h4>Amazon Web Services</h4>
            <ul>
              <li>Validated understanding of AI and ML fundamentals, including learning paradigms and model evaluation</li>
              <li>Demonstrated familiarity with AWS AI/ML services: SageMaker, Bedrock, Rekognition, Comprehend</li>
              <li>Expertise in responsible AI concepts and ethical AI implementation</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">July 2025</div>
            <h3>AWS Certified Cloud Practitioner (CLF-C02)</h3>
            <h4>Amazon Web Services</h4>
            <ul>
              <li>Validated knowledge of cloud architecture and IAM security best practices</li>
              <li>Proficiency in serverless computing, elasticity, and scalability</li>
              <li>Understanding of cost-optimized cloud design and fully managed AWS services</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">March 2025</div>
            <h3>AWS Academy Cloud Foundations</h3>
            <h4>AWS Academy - Amrita Vishwa Vidyapeetham</h4>
            <ul>
              <li>Completed hands-on labs covering EC2, VPC, S3, IAM, and load balancing</li>
              <li>Practical exposure to real-world cloud scenarios</li>
              <li>Foundation in designing secure, fault-tolerant, and scalable cloud solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, var(--purple-700), var(--purple-400))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Let's Connect!
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Open to exciting opportunities and collaborations
          </p>
          
          <div className="footer-socials">
            <a href="https://linkedin.com/in/harininr" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              💼
            </a>
            <a href="https://github.com/harininr" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              💻
            </a>
            <a href="mailto:harinin006@gmail.com" className="social-link" title="Email">
              📧
            </a>
            <a href="tel:+918946051393" className="social-link" title="Phone">
              📱
            </a>
          </div>

          <div className="footer-text">
            <p>📍 Coimbatore, Tamil Nadu, India</p>
            <p style={{ marginTop: '1rem' }}>
              © {new Date().getFullYear()} Harini Nagarajan • Crafted with 💜 using React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;