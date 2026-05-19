import React from 'react';
import { motion } from 'framer-motion';

const getSkillLogo = (name) => {
  const mapping = {
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "C": "https://cdn.simpleicons.org/c/044F88",
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "Java": "https://cdn.simpleicons.org/openjdk/F89820",
    "Haskell": "https://cdn.simpleicons.org/haskell/5D4F85",
    "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
    "React": "https://cdn.simpleicons.org/react/61DAFB",
    "HTML": "https://cdn.simpleicons.org/html5/E34F26",
    "CSS": "https://cdn.simpleicons.org/css3/1572B6",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    "Express.js": "https://cdn.simpleicons.org/express/000000",
    "REST APIs": "https://img.icons8.com/ios-filled/100/800000/api.png",
    "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
    "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
    "AWS Cloud": "https://cdn.simpleicons.org/amazonwebservices/232F3E",
    "Git": "https://cdn.simpleicons.org/git/F05032",
    "GitHub": "https://cdn.simpleicons.org/github/181717",
    "Docker": "https://cdn.simpleicons.org/docker/2496ED",
    "Vite": "https://cdn.simpleicons.org/vite/646CFF",
    "Visual Studio": "https://cdn.simpleicons.org/visualstudio/5C2D91",
    "DSA": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/100/40C057/external-tree-nature-flatart-icons-outline-flatarticons-4.png",
    "Machine Learning": "https://img.icons8.com/ios/100/800000/brain.png",
    "AI Concepts": "https://img.icons8.com/ios/100/800000/artificial-intelligence.png",
    "Natural Language Processing": "https://img.icons8.com/ios/100/800000/speech.png"
  };
  return mapping[name] || `https://cdn.simpleicons.org/code`;
};

const SkillBadge = ({ name, delay }) => {
  const logoUrl = getSkillLogo(name);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -6,
      }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 150 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      {/* Premium Logo Container */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-[14px] border border-sage/10 flex items-center justify-center shadow-md group-hover:shadow-[0_15px_30px_-5px_rgba(128,0,0,0.15)] group-hover:border-sage/40 transition-all duration-300 relative overflow-hidden">
        {/* Soft Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Brand Logo */}
        <img 
          src={logoUrl} 
          alt={name} 
          className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "https://img.icons8.com/ios-filled/100/800000/code.png";
          }}
        />
      </div>
      
      {/* Skill Label */}
      <span className="text-[11px] md:text-xs font-semibold tracking-wide text-beige/80 group-hover:text-sage transition-colors duration-300 text-center max-w-[70px] md:max-w-[90px] leading-tight">
        {name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="flex flex-col lg:flex-row items-start border-b border-sage/10 py-10 first:pt-0 last:border-0 last:pb-0 group"
  >
    <div className="w-full lg:w-72 shrink-0 pt-2 mb-8 lg:mb-0 lg:pr-8">
      <h3 className="text-2xl font-playfair font-bold text-beige border-l-4 border-sage pl-5 group-hover:text-sage transition-colors duration-300">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-6 md:gap-8 justify-start flex-1">
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
      skills: ["Python", "C", "C++", "Java", "Haskell", "JavaScript", "DSA"]
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
      skills: ["AWS Cloud", "Git", "GitHub", "Docker", "Vite", "Visual Studio"]
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

        <div className="flex flex-col max-w-6xl mx-auto w-full">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>

      {/* Orbit Animation Overlay */}
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