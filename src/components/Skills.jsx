import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "C++", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "Haskell", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Embedded C", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Electron.js", level: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "PyTorch", level: "Intermediate" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "OpenCV", level: "Intermediate" },
        { name: "Git/GitHub", level: "Advanced" },
        { name: "AWS", level: "Intermediate" },
        { name: "Keil uVision", level: "Intermediate" },
        { name: "MATLAB", level: "Intermediate" }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Computer Networks", level: "Intermediate" },
        { name: "Operating Systems", level: "Advanced" },
        { name: "DBMS", level: "Advanced" },
        { name: "DSA & Algorithms", level: "Advanced" },
        { name: "Design Patterns", level: "Intermediate" },
        { name: "Digital Image Processing", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li className="skill-item" key={i}>
                  <div className="skill-icon">
                    {skill.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{skill.name}</strong>
                    <div className="skill-level">{skill.level}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;