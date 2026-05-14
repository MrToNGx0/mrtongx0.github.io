import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCopy } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../components/layout/SectionLayout';

const SocialLink = ({ social, icon, index }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.1 }}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-start gap-3 group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-300 group-hover:text-slate-900 group-hover:bg-white transition-all duration-500 shadow-inner group-hover:shadow-none">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">
        {social.label}
      </span>
    </motion.a>
  );
};

const Contact = ({ personal, socialIcons, currentLang, t }) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    // Add toast or notification logic here if needed
  };

  return (
    <SectionLayout id="contact" title={t('sections.contact')} subtitle="Establish Link" className="overflow-hidden" hideHeader={true}>
      <div className="max-w-6xl mx-auto px-4 w-full h-full flex flex-col justify-center items-start relative z-10">
        
        {/* Standardized Header */}
        <div className="mb-8 w-full">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[oklch(75%_0.183_55.934)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">{t('ui.contact_sub')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-6">{t('ui.contact_title')}</h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[oklch(75%_0.183_55.934)]/10 text-[oklch(75%_0.183_55.934)] rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-[oklch(75%_0.183_55.934)]/20"
          >
            {t('ui.contact_available')}
          </motion.div>
        </div>

        {/* Main CTA Section */}
        <div className="mb-12 w-full">
          <div className="flex flex-col md:flex-row gap-4 justify-start items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.email}`}
              className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-2xl shadow-slate-400/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                {t('contact.button')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(75%_0.183_55.934)] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
            
            <button 
              onClick={copyEmail}
              className="flex items-center gap-3 px-6 py-4 rounded-full text-slate-400 hover:text-slate-900 transition-all font-bold uppercase tracking-widest text-[10px] md:text-xs group"
            >
              {personal.email}
              <FontAwesomeIcon icon={faCopy} className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
            </button>
          </div>
        </div>

        {/* Social Network Grid */}
        <div className="w-full max-w-3xl pt-10 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {personal.social?.map((s, idx) => (
              <SocialLink 
                key={idx} 
                social={s} 
                icon={socialIcons[s.label]} 
                index={idx} 
              />
            ))}
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-[oklch(75%_0.183_55.934)]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      </div>
      
      {/* Refined Footer */}
      <footer className="absolute bottom-8 md:bottom-10 left-0 w-full px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6 opacity-30 pointer-events-none">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-slate-400" />
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
            &copy; 2026 // {personal.nickname[currentLang]} // Design System v2.0
          </div>
        </div>
        <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em]">
          {t('ui.contact_footer_curated')}
        </div>
      </footer>
    </SectionLayout>
  );
};

export default Contact;
