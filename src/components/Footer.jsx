import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative border-t border-sage/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair font-bold text-beige mb-2">Harini Nagarajan<span className="text-sage">.</span></h3>
            <p className="text-sage/40 text-sm tracking-widest uppercase">Where logic meets design to engineer impact.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
