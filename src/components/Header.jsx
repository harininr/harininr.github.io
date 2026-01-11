import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <div className="logo">HN</div>
      <nav className="nav-links">
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#certifications" className="nav-link">Certifications</a>
      </nav>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
    </header>
  );
};

export default Header;