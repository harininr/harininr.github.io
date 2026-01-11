import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      date: "July 2025",
      details: [
        "Demonstrated knowledge of cloud architecture and IAM security",
        "Expertise in serverless computing and core AWS services",
        "Understanding of billing models and security best practices"
      ],
      badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy – Amrita Vishwa Vidyapeetham",
      date: "March 2025",
      details: [
        "Hands-on curriculum covering networking and security",
        "Practical experience with AWS console operations",
        "Understanding of cloud compute models and storage services"
      ]
    }
  ];

  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      {certifications.map((cert, index) => (
        <div className="certification-card" key={index}>
          <h3>{cert.title}</h3>
          <p className="issuer">🎓 {cert.issuer}</p>
          <span className="date-badge">{cert.date}</span>
          <ul className="cert-details">
            {cert.details.map((detail, i) => (
              <li key={i}>✓ {detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Certifications;