import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Award, Briefcase, Code2, Cpu, MapPin } from 'lucide-react';

const StatItem = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center group h-full"
  >
    <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-sage" size={20} />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-beige mb-0.5 tracking-tight">{value}</h3>
    <p className="text-sage/60 text-[10px] md:text-xs font-semibold uppercase tracking-wider">{label}</p>
  </motion.div>
);

const Hero = () => {
  const roles = ["Software Developer", "AI-ML Engineer", "Cloud Enthusiast"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="container mx-auto px-6 z-10 flex flex-col justify-between h-full max-w-7xl">

        {/* Main Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 my-auto lg:items-stretch items-center">

          {/* Left Column - Hero Branding & CTA */}
          <div className="flex flex-col items-center text-center justify-center lg:justify-between lg:col-span-6 h-full">
            {/* Elegant Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-48 md:w-56 mb-6 group"
            >
              {/* Glowing background ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sage to-sage/40 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              {/* Inner Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-sage/20 shadow-xl bg-sage/5">
                <img
                  src="/Harini.jpg"
                  alt="Harini Nagarajan"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Majestic Typography Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-extrabold mb-3 tracking-normal leading-none select-none text-center">
                <span className="text-beige drop-shadow-[0_4px_12px_rgba(90,18,18,0.08)]">Harini </span>
                <span className="text-gradient pb-1">Nagarajan</span>
              </h1>
            </motion.div>

            {/* Typographic Role Slider with dividers */}
            <div className="h-10 mb-6 flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-sage/20 hidden sm:block" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-xl text-sage/80 font-light font-grotesk tracking-wide"
                >
                  {roles[index]}
                </motion.p>
              </AnimatePresence>
              <span className="w-8 h-[1px] bg-sage/20 hidden sm:block" />
            </div>

            {/* Interactive Luxury CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-sage text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(128,0,0,0.15)] hover:shadow-[0_6px_30px_rgba(128,0,0,0.25)] flex items-center justify-center gap-2 group hover:bg-beige"
              >
                <span>Explore Projects</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 border border-sage/20 hover:border-sage text-sage font-semibold rounded-2xl transition-all duration-300 bg-white/30 backdrop-blur-sm hover:bg-sage hover:text-white flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
              </motion.a>
            </motion.div>

            {/* Current Location */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-2 text-sage/75 text-sm md:text-base font-medium tracking-wide bg-sage/5 px-4 py-2 rounded-full border border-sage/10"
            >
              <MapPin size={16} className="text-sage animate-pulse" />
              <span>Coimbatore, Tamil Nadu</span>
            </motion.div>
          </div>

          {/* Right Column - Crafting Intelligent Solutions */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:justify-between h-full items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 tracking-normal text-beige"
            >
              Where <span className="text-sage">Code</span> meets <span className="text-sage">Creativity</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-sage/80 leading-relaxed mb-6 font-light bg-sage/5 p-6 rounded-2xl border border-sage/10 backdrop-blur-sm shadow-xl w-full"
            >
              <p>
                At the intersection of logic and creativity, I build elegant digital experiences that merge intelligent engineering with purposeful design. As a pre-final year B.Tech Computer Science student at Amrita Vishwa Vidyapeetham, I am passionate about full-stack development, AI/ML innovation, and scalable cloud technologies. I enjoy transforming ideas into impactful products that are technically sophisticated, intuitive to use, and designed to solve real-world challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              <StatItem icon={Code2} label="Projects" value="8+" delay={0.3} />
              <StatItem icon={Briefcase} label="Internships" value="2" delay={0.4} />
              <StatItem icon={Award} label="AWS Certified" value="2" delay={0.5} />
              <StatItem icon={Cpu} label="AI/ML" value="Expert" delay={0.6} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 flex items-center justify-center gap-2.5 text-white text-sm md:text-base font-semibold tracking-wide bg-gradient-to-r from-maroon to-maroon-light px-6 py-3 rounded-full border border-white/10 w-fit mx-auto shadow-[0_4px_20px_rgba(128,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(128,0,0,0.35)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Open for internships & collaborations</span>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Floating Decorative Glow Orbs in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-sage/5 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-sage/5 blur-[100px]"
        />
      </div>

      {/* Animated Arrow Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sage/40 pointer-events-none z-10"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;