import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ personal, currentLang, socialIcons, t }) => {
  return (
    <section id="home" className="min-h-screen w-full snap-start snap-always relative overflow-hidden flex items-center justify-center bg-transparent">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-12 left-8 md:top-20 md:left-20 z-10"
      >
        <h1 className="text-5xl md:text-8xl lg:text-[14rem] font-bold text-slate-900 tracking-tighter uppercase leading-none opacity-80 transition-colors duration-500">
          {personal.firstName[currentLang]}
        </h1>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex items-center gap-4 py-2"
        >
          <span className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">
            {personal.jobPosition[currentLang]}
          </span>
        </motion.div>
      </motion.div>

      {/* Last Name (Background Layer) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-12 right-8 md:top-20 md:right-20 z-10 text-right"
      >
        <h1 className="text-5xl md:text-8xl lg:text-[14rem] font-bold text-slate-900 tracking-tighter uppercase leading-none outline-text opacity-50 transition-colors duration-500 pointer-events-none">
          {personal.lastName[currentLang]}
        </h1>
      </motion.div>

      {/* Social Icons (Foreground Layer) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute top-28 md:top-48 lg:top-64 right-8 md:right-20 z-40 text-right"
      >
        <div className="flex gap-4 justify-end pointer-events-auto">
          {personal.social.map((s, idx) => (
            <a 
              key={idx} 
              href={s.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-slate-900 transition-colors text-lg md:text-xl p-2"
              title={s.label}
            >
              <FontAwesomeIcon icon={socialIcons[s.label]} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <img src={personal.avatarLink} alt={personal.firstName[currentLang]} className="w-full h-full object-cover md:object-contain lg:object-cover scale-110 md:scale-100" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 z-30 text-center"
      >
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
          [ {t('hero.scroll')} ]
        </p>
        <a href="#projects" className="inline-flex items-center gap-4 text-slate-900 hover:text-[oklch(75%_0.183_55.934)] transition-all group font-bold uppercase tracking-widest text-[10px]">
          <span className="w-12 h-px bg-slate-200 group-hover:bg-[oklch(75%_0.183_55.934)] transition-all"></span>
          {t('hero.view')}
          <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
