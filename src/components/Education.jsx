import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – Present",
      details: ["CGPA: 8.49/10"],
      achievements: ["Focus on ML, Full-Stack Development, Cloud Computing"]
    },
    {
      institution: "Velammal Vidyalaya, Karur",
      degree: "All India Senior School Certificate Examination (AISSCE)",
      period: "March 2023",
      details: ["Percentage: 90.4%"],
      achievements: ["Computer Science Stream"]
    }
  ];

  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      {education.map((edu, index) => (
        <div className="education-card" key={index}>
          <h3>{edu.institution}</h3>
          <p className="degree">{edu.degree}</p>
          <span className="date-badge">{edu.period}</span>
          <div className="details">
            {edu.details.map((detail, i) => (
              <p key={i}>📊 {detail}</p>
            ))}
          </div>
          <div className="achievements">
            {edu.achievements.map((achievement, i) => (
              <p key={i}>🏆 {achievement}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;