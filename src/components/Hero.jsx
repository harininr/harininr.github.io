import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="profile-image">
          {/* Placeholder for profile image - Add your image URL here */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #81c784, #4caf50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold'
          }}>
            HN
          </div>
        </div>
        <h1>Harini Nagarajan</h1>
        <p className="hero-title">Full Stack Developer & Cloud Practitioner</p>
        <p className="hero-description">
          Passionate developer specializing in full-stack web applications, 
          machine learning, and cloud solutions. Currently pursuing B.Tech in 
          Computer Science with a focus on innovative problem-solving.
        </p>
        <div className="contact-info">
          <p>📧 harinin006@gmail.com | 📞 +91-8946051393</p>
          <p>📍 Coimbatore, India</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;