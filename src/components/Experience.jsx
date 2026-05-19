import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const ExperienceCard = ({ company, link, role, duration, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="glass-card p-8 rounded-3xl group relative overflow-hidden h-full flex flex-col"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
    
    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
      <div>
        <div className="flex items-center gap-3 text-sage mb-2">
          <Briefcase size={20} />
          <span className="font-bold tracking-widest uppercase text-sm">{company}</span>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center p-1 rounded-full bg-sage/5 border border-sage/10 text-sage/75 hover:bg-sage hover:text-white transition-all duration-300 hover:scale-105"
              title={`Visit ${company}`}
            >
              <ExternalLink size={12} />
            </a>
          )}
        </div>
        <h3 className="text-2xl font-playfair font-bold text-beige group-hover:text-sage transition-colors duration-300">{role}</h3>
      </div>
      <div className="flex flex-col items-start md:items-end gap-2 text-sage/60 text-sm">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{duration}</span>
        </div>
      </div>
    </div>

    <ul className="space-y-3 bg-sage/5 p-4 rounded-xl border border-sage/10 backdrop-blur-sm flex-grow">
      {description.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-beige/80 font-light leading-relaxed">
          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    
    <motion.div 
      className="absolute bottom-0 left-0 h-1 bg-sage"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.5 }}
    />
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Ubayog",
      link: "https://ubayog.com/",
      role: "Software Developer Intern",
      duration: "March 2026 - Present",
      description: [
        "Contributed to rebuilding an existing platform into a production-grade AI-native marketplace focused on scalability and modern user experience.",
        "Collaborated on a multi-agent AI architecture involving 7 interconnected agents for intelligent workflow automation and orchestration.",
        "Worked across frontend and backend systems, improving UI/UX, integrating modern technologies, and enhancing application performance."
      ]
    },
    {
      company: "Wekan Enterprise Solutions",
      link: "https://www.wekanenterprisesolutions.com/",
      role: "AI-ML Intern",
      duration: "February 2026 - Present",
      description: [
        "Replicated and analyzed methodologies from MIDL research papers to understand advanced AI/ML architectures and workflows.",
        "Implemented novel improvements through experimentation with model optimization and data processing techniques.",
        "Contributed to AI/ML research and publication efforts involving experimentation, evaluation, and technical documentation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-4 tracking-normal"
            >
              Professional <span className="text-sage">Experience</span>
            </motion.h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-sage/20 to-transparent mx-8 mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
