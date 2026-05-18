import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const EducationItem = ({ year, title, institution, result, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="min-w-[300px] md:min-w-[400px] relative group snap-start"
  >
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-sage rounded-full z-10 shadow-[0_0_15px_rgba(128,0,0,0.8)] group-hover:scale-150 transition-transform duration-300" />
    <div className="ml-10 glass-card p-8 rounded-2xl border-l-4 border-sage/40 hover:border-sage transition-all duration-300">
      <span className="text-sage font-bold text-lg mb-2 block">{year}</span>
      <h3 className="text-xl font-bold text-beige mb-2">{title}</h3>
      <p className="text-beige/70 mb-4">{institution}</p>
      <div className="inline-block px-4 py-1 bg-sage/20 backdrop-blur-sm rounded-full border border-sage/20">
        <span className="text-sage font-bold tracking-wider">{result}</span>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const timelineData = [
    {
      year: "2023 – 2027 (Ongoing)",
      title: "B.Tech Computer Science Engineering",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      result: "CGPA: 8.59/10",
      icon: GraduationCap
    },
    {
      year: "2023",
      title: "AISSCE",
      institution: "Velammal Vidyalaya, Karur",
      result: "90.4%",
      icon: School
    },
    {
      year: "2021",
      title: "SSLC",
      institution: "Velammal Vidyalaya, Karur",
      result: "90%",
      icon: School
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair font-bold tracking-normal text-center"
        >
          Academic <span className="text-sage">Foundation</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Continuous Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sage/20 to-transparent -translate-y-1/2" />
        
        <div className="flex overflow-x-auto no-scrollbar py-12 px-12 gap-12 snap-x">
          {timelineData.map((item, index) => (
            <EducationItem key={index} {...item} delay={index * 0.2} />
          ))}
        </div>
      </div>
      
      {/* Decorative text background */}
      <div className="absolute -bottom-10 left-10 text-[15rem] font-black text-sage/5 pointer-events-none select-none">
        LEARN
      </div>
    </section>
  );
};

export default Education;