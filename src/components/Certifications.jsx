import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const CertificationCard = ({ title, issuer, date, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative group h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-emerald/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative glass-card p-8 rounded-2xl border border-sage/10 group-hover:border-sage/40 transition-all duration-300 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage group-hover:scale-110 transition-transform duration-300">
          <Award size={32} />
        </div>
      </div>
      
      <h3 className="text-xl font-playfair font-bold text-beige mb-2 group-hover:text-sage transition-colors duration-300">{title}</h3>
      <p className="text-sage/60 font-medium mb-4">{issuer}</p>
      
      <div className="mt-auto pt-6 border-t border-sage/10 flex justify-between items-center">
        <span className="text-sm text-sage/40">{date}</span>
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="text-sage hover:text-beige transition-colors"
          >
            <ExternalLink size={18} />
          </motion.a>
        )}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <motion.div
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
        />
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      date: "July 2025",
      link: "https://www.credly.com/badges/b36e3ee5-b31c-430c-84e8-58d9eae5b500/public_url"
    },
    {
      title: "AWS Certified AI Practitioner (AIF-C01)",
      issuer: "Amazon Web Services",
      date: "January 2026",
      link: "https://www.credly.com/badges/6645d3ad-00fd-4ffb-95be-e06d1f4d0643"
    },
    {
      title: "Amrita AWS Academy – Cloud Practitioner",
      issuer: "Amrita Vishwa Vidyapeetham",
      date: "2023",
      link: "https://drive.google.com/file/d/1U3JNiYbrj10sgpxHyUxETRvt0C-0Q5oJ/view"
    },
    {
      title: "Applied AI-ML Essentials",
      issuer: "IIT Patna x Masai School",
      date: "Ongoing"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-4 tracking-normal"
          >
            Professional <span className="text-sage">Credentials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sage/60 text-lg max-w-2xl mx-auto"
          >
            A collection of professional certifications and academic achievements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;