import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: "rgba(128, 0, 0, 0.15)",
      borderColor: "rgba(128, 0, 0, 0.4)",
      y: -5
    }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className="px-6 py-3 glass rounded-2xl border border-sage/20 text-beige font-medium cursor-default transition-all duration-300"
  >
    {name}
  </motion.div>
);

const SkillCategory = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="mb-12"
  >
    <h3 className="text-xl font-bold text-sage mb-6 flex items-center gap-4">
      <span className="w-10 h-[2px] bg-sage/30" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, i) => (
        <SkillBadge key={i} name={skill} delay={index * 0.1 + i * 0.05} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C", "C++", "Java", "Haskell", "JavaScript"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS Cloud", "Git", "GitHub", "Docker", "Vite"]
    },
    {
      title: "AI/ML",
      skills: ["Machine Learning", "AI Concepts", "Natural Language Processing"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6 tracking-normal text-center"
          >
            Technical <span className="text-sage">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-sage rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>

      {/* Orbit Animation Overlay (Creative element) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none hidden xl:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] border border-sage/30 rounded-full relative"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 bg-sage/20 border border-sage/40 rounded-xl blur-[1px]"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 60}deg) translate(300px) rotate(-${i * 60}deg)`,
              }}
            />
          ))}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-sage/20 rounded-full"
          >
             {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 bg-emerald/20 border border-emerald/40 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 90}deg) translate(200px) rotate(-${i * 90}deg)`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;