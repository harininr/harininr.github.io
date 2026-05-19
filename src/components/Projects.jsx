import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ title, description, tags, github, demo, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    whileHover={{ y: -10 }}
    className="group relative h-full"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-sage/50 to-emerald/50 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative h-full glass-card p-8 rounded-3xl overflow-hidden flex flex-col border border-sage/10 group-hover:border-sage/30">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center text-sage">
          <Layers size={24} />
        </div>
      </div>

      <h3 className="text-2xl font-playfair font-bold text-beige mb-4 group-hover:text-sage transition-colors duration-300">{title}</h3>
      <p className="text-beige/80 font-light text-sm leading-relaxed mb-6 flex-grow bg-sage/5 p-4 rounded-xl border border-sage/10 backdrop-blur-sm">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-sage/50 bg-sage/5 px-3 py-1 rounded-full border border-sage/10">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-sage/10 hover:bg-sage text-sage hover:text-white font-bold rounded-2xl transition-all duration-300 border border-sage/20 text-center text-sm"
            >
              Explore
            </motion.button>
          </a>
        )}
        <a href={demo || github} target="_blank" rel="noreferrer" className="flex-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-sage text-white hover:bg-sage/90 font-bold rounded-2xl transition-all duration-300 shadow-md text-center text-sm"
          >
            View Live
          </motion.button>
        </a>
      </div>
      
      {/* 3D Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Amrita Placement Tracker",
      description: "A comprehensive platform to track and manage student placement data, featuring real-time analytics and reporting for administrators and students.",
      tags: ["React", "Node.js", "MySQL", "Chart.js"],
      github: "https://github.com/harininr",
      demo: "https://amrita-placement-tracker.vercel.app/"
    },
    {
      title: "CyberLearn",
      description: "An interactive e-learning platform focused on cybersecurity, providing hands-on labs and progress tracking for budding security enthusiasts.",
      tags: ["Full Stack", "MongoDB", "Express", "Auth"],
      github: "https://github.com/harininr",
      demo: "https://cyberlearn-simulator.onrender.com/"
    },
    {
      title: "RightPath",
      description: "An intelligent coding companion that fosters critical thinking. Instead of providing direct answers, it analyzes code to guide learners on the right track using simple, non-technical language.",
      tags: ["AI/ML", "Python", "Flask", "React"],
      github: "https://github.com/harininr"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 tracking-normal"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-full max-w-md bg-gradient-to-r from-sage to-transparent origin-left"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] flex flex-col">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;