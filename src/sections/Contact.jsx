import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionLayout from '../components/layout/SectionLayout';

const Contact = ({ personal, socialIcons, currentLang, t }) => {
  return (
    <SectionLayout id="contact" title={t('sections.contact')} subtitle="Contact" className="text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
          {t('contact.title')} <span className="text-slate-200">{t('contact.exceptional')}</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center mb-16">
          <a href={`mailto:${personal.email}`} className="px-10 md:px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[oklch(75%_0.183_55.934)] transition-all duration-300 shadow-2xl shadow-slate-300">
            {t('contact.button')}
          </a>
          <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
            {personal.email}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-10 border-t border-slate-100">
           {personal.social.map((s, idx) => (
             <a key={idx} href={s.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <FontAwesomeIcon icon={socialIcons[s.label]} className="text-xl text-slate-300 group-hover:text-slate-900 transition-colors" />
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{s.label}</span>
             </a>
           ))}
        </div>
      </div>
      
      <footer className="absolute bottom-32 left-0 w-full px-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 pointer-events-none">
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">
          &copy; 2026 // {personal.nickname[currentLang]}
        </div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">
          Minimalist Architecture
        </div>
      </footer>
    </SectionLayout>
  );
};

export default Contact;
