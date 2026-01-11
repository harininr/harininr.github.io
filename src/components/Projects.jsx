import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AuraGlow – Interactive Skincare Website",
      description: "Fully responsive multi-page skincare website with dark/light mode, animated transitions, and packaged as cross-platform desktop app using Electron.js.",
      tags: ["HTML5", "CSS3", "JavaScript", "Electron.js", "UI/UX"],
      features: ["40% engagement boost", "Multi-device performance", "Reusable components"]
    },
    {
      title: "TNPSC Study Hub",
      description: "Comprehensive study platform for TNPSC exam preparation with interactive modules and progress tracking.",
      tags: ["React", "Node.js", "MongoDB", "Full-Stack"],
      features: ["Interactive learning", "Progress tracking", "Mobile responsive"]
    },
    {
      title: "ASL Gesture Recognition using DIP",
      description: "Real-time American Sign Language detection system using classical image processing and deep learning techniques.",
      tags: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
      features: ["Real-time detection", "Adaptive thresholding", "Low-latency processing"]
    },
    {
      title: "Real-Time Content Filtering Engine",
      description: "High-performance C++ text-filtering engine using Rabin-Karp algorithm for O(n) banned-word detection.",
      tags: ["C++", "Apache", "PHP", "Algorithms"],
      features: ["Sub-100ms moderation", "Hot-reload configuration", "Dynamic alerts"]
    },
    {
      title: "Mathematical Symbol Classifier",
      description: "CNN-based classifier for 369 mathematical symbols using Scikit-learn with 90%+ validation accuracy.",
      tags: ["Python", "Scikit-learn", "CNN", "Data Augmentation"],
      features: ["90%+ accuracy", "Data augmentation", "Model visualization"]
    },
    {
      title: "Morse Code Encoder/Decoder",
      description: "Embedded system project for encoding and decoding Morse code using Tinkercad simulations.",
      tags: ["Embedded C", "STM32", "Tinkercad", "Embedded Systems"],
      features: ["Hardware simulation", "Real-time encoding", "Educational tool"]
    }
  ];

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>✨ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;