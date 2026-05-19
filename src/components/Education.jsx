import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const EducationItem = ({ year, title, institution, result, icon: Icon, delay, isFirst }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, type: "spring", stiffness: 80 }}
    className={`${
      isFirst ? "min-w-[340px] md:min-w-[470px]" : "min-w-[320px] md:min-w-[420px]"
    } relative group snap-start`}
  >
    {/* Animated Timeline Node */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 z-20">
      <div className="absolute w-5 h-5 bg-sage rounded-full shadow-[0_0_20px_rgba(128,0,0,0.8)] group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-sage group-hover:to-maroon-light transition-all duration-500" />
      <div className="absolute w-full h-full bg-sage/40 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute w-2 h-2 bg-beige rounded-full group-hover:scale-0 transition-transform duration-300" />
    </div>

    {/* Creative Card Container */}
    <div className="ml-10 relative overflow-hidden glass-card p-8 rounded-[2rem] border border-sage/10 border-l-[6px] border-l-sage/40 hover:border-l-sage hover:bg-white/60 hover:shadow-[0_20px_40px_-5px_rgba(128,0,0,0.2)] hover:-translate-y-3 transition-all duration-500 group-hover:border-sage/30 backdrop-blur-xl">
      
      {/* Animated Glass Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

      {/* Decorative Background Icon */}
      {Icon && (
        <Icon className="absolute -right-6 -bottom-6 w-40 h-40 text-sage/[0.04] -rotate-12 group-hover:text-sage/[0.1] group-hover:-rotate-6 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0 drop-shadow-xl" strokeWidth={1} />
      )}

      {/* Decorative Gradient Blob */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-sage/20 via-sage/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sage/10 to-sage/5 text-sage group-hover:bg-gradient-to-br group-hover:from-sage group-hover:to-maroon group-hover:text-white transition-all duration-500 shadow-md border border-sage/20 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(128,0,0,0.3)]">
              {Icon && <Icon size={20} strokeWidth={2.5} />}
            </span>
            <span className="text-sage font-extrabold tracking-widest text-sm uppercase bg-sage/5 px-4 py-1.5 rounded-full border border-sage/10 group-hover:bg-sage/10 transition-colors duration-300">{year}</span>
          </div>
          
          <h3 className="text-2xl font-playfair font-black text-beige mb-3 leading-tight tracking-tight group-hover:text-maroon transition-colors duration-500">{title}</h3>
          <p className="text-beige/80 mb-8 tracking-wide font-medium">{institution}</p>
        </div>
        
        {/* Creative Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-sage/5 to-transparent rounded-full border border-sage/20 group-hover:border-sage/40 group-hover:from-sage/10 group-hover:to-sage/5 transition-all duration-300 shadow-sm w-fit backdrop-blur-md">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-maroon"></span>
          </div>
          <span className="text-sage font-bold tracking-wide text-sm">{result}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const timelineData = [
    {
      year: "2023 – 2027 (Ongoing)",
      title: "B.Tech Computer Science",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      result: "CGPA: 8.59/10",
      icon: GraduationCap
    },
    {
      year: "2023",
      title: "AISSCE",
      institution: "Velammal Vidyalaya, Karur",
      result: "Percentage: 90.4%",
      icon: School
    },
    {
      year: "2021",
      title: "AISSE",
      institution: "Velammal Vidyalaya, Karur",
      result: "Percentage: 90%",
      icon: School
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-normal text-center">
            Academic <span className="text-sage">Foundation</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-8">
        {/* Animated Continuous Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sage/20 to-transparent -translate-y-1/2 overflow-hidden">
           <motion.div 
             animate={{ x: ["-100%", "300%"] }} 
             transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
             className="w-1/3 h-full bg-gradient-to-r from-transparent via-sage to-transparent opacity-80"
           />
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar pt-6 pb-16 px-12 gap-12 snap-x relative z-10">
          {timelineData.map((item, index) => (
            <EducationItem key={index} {...item} delay={index * 0.2} isFirst={index === 0} />
          ))}
        </div>
      </div>
      
      {/* Decorative text background marquee */}
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute -bottom-12 left-0 flex whitespace-nowrap text-[13rem] font-black text-sage/[0.03] pointer-events-none select-none"
      >
        <span>LEARN &nbsp; EXPLORE &nbsp; GROW &nbsp; LEARN &nbsp; EXPLORE &nbsp; GROW &nbsp; </span>
      </motion.div>
    </section>
  );
};

export default Education;