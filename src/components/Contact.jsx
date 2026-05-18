import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const ContactInfo = ({ icon: Icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-sage/40 transition-all duration-300"
  >
    <div className="w-11 h-11 bg-sage/10 rounded-xl flex items-center justify-center text-sage group-hover:scale-110 group-hover:bg-sage/20 transition-all duration-300 shrink-0">
      <Icon size={20} />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sage/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5 truncate">{label}</p>
      <p className="text-beige font-medium text-sm group-hover:text-sage transition-colors truncate">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Submit data to Web3Forms
      // ⚠️ Pro-Tip: Go to https://web3forms.com to get your own Access Key for harinin006@gmail.com and paste it in the access_key field below!
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "092ab850-6297-4e44-b0f9-8891a81c3aef", // Go to https://web3forms.com to get your free key and replace this string!
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact: ${formData.name}`,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          to_email: "harinin006@gmail.com"
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Something went wrong. Please check your Access Key.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to connect. Please check your network connection.' });
    }
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-3 tracking-normal"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sage/60 text-base"
            >
              Have a project in mind or just want to say hi? My inbox is always open.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4"
            >
              <ContactInfo
                icon={Mail}
                label="Email"
                value="harinin006@gmail.com"
                link="mailto:harinin006@gmail.com"
              />
              <ContactInfo
                icon={Linkedin}
                label="LinkedIn"
                value="harininagarajan05"
                link="https://www.linkedin.com/in/harininagarajan05/"
              />
              <ContactInfo
                icon={Github}
                label="GitHub"
                value="harininr"
                link="https://github.com/harininr"
              />
              <ContactInfo
                icon={MapPin}
                label="Location"
                value="Coimbatore, India"
                link="#"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-6 rounded-2xl border border-sage/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <MessageSquare size={100} className="text-sage" />
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-sage/60 ml-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=""
                        className="w-full px-4 py-2.5 bg-white/50 border border-sage/20 rounded-xl focus:border-sage focus:bg-white outline-none transition-all duration-300 text-beige placeholder:text-sage/40 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-sage/60 ml-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=""
                        className="w-full px-4 py-2.5 bg-white/50 border border-sage/20 rounded-xl focus:border-sage focus:bg-white outline-none transition-all duration-300 text-beige placeholder:text-sage/40 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-sage/60 ml-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-4 py-2.5 bg-white/50 border border-sage/20 rounded-xl focus:border-sage focus:bg-white outline-none transition-all duration-300 text-beige placeholder:text-sage/40 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-sage/60 ml-2">Message</label>
                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      className="w-full px-4 py-2.5 bg-white/50 border border-sage/20 rounded-xl focus:border-sage focus:bg-white outline-none transition-all duration-300 text-beige placeholder:text-sage/40 text-sm resize-none"
                    />
                  </div>

                  {status.success && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-sage/10 border border-sage/20 text-beige rounded-xl text-xs text-center font-medium"
                    >
                      Thank you! Your message has been sent to me. I'll get back to you soon!
                    </motion.div>
                  )}

                  {status.error && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-500/10 border border-red-500/30 text-red-700 rounded-xl text-xs text-center font-medium"
                    >
                      ⚠ {status.error}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status.submitting}
                    whileHover={{ scale: status.submitting ? 1 : 1.01 }}
                    whileTap={{ scale: status.submitting ? 1 : 0.99 }}
                    className={`w-full py-3 bg-sage text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-beige transition-colors duration-300 ${
                      status.submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} className={status.submitting ? 'animate-pulse' : ''} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
