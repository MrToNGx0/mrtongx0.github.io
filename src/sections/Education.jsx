import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward, faUniversity } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../components/layout/SectionLayout';

const EducationCard = ({ ed, lang, index, t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative flex-1 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-6 md:p-10 shadow-2xl shadow-slate-200/50 group overflow-hidden"
    >
      {/* Decorative Watermark Icon */}
      <div className="absolute -bottom-10 -right-10 text-slate-900/5 text-[10rem] pointer-events-none group-hover:text-[oklch(75%_0.183_55.934)]/5 transition-colors duration-700">
        <FontAwesomeIcon icon={faUniversity} />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* GPA Badge */}
        <div className="absolute top-0 right-0">
           <div className="relative">
              <div className="absolute inset-0 bg-[oklch(75%_0.183_55.934)] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative px-3 py-1.5 bg-slate-900 rounded-bl-2xl rounded-tr-xl flex flex-col items-center justify-center">
                 <span className="text-[7px] font-black text-[oklch(75%_0.183_55.934)] uppercase tracking-widest leading-none mb-1">GPA</span>
                 <span className="text-base font-black text-white leading-none">{ed.gpa}</span>
              </div>
           </div>
        </div>

        <div className="mb-6">
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-inner mb-4 text-slate-400 group-hover:text-[oklch(75%_0.183_55.934)] transition-colors duration-500">
              <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
           </div>
           <div className="text-[9px] font-black text-[oklch(75%_0.183_55.934)] uppercase tracking-[0.4em] mb-2">
             {ed.startDate} — {ed.endDate}
           </div>
           <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-3">
             {ed.degree[lang]}
           </h3>
        </div>

        <div className="mt-auto">
           <div className="flex flex-col gap-4">
              <div className="space-y-1">
                 <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Institution</span>
                 <h4 className="text-xs md:text-sm font-bold text-slate-700 uppercase leading-snug">
                   {ed.institute[lang]}
                 </h4>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-100">
                 <div className="space-y-1">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{t('education.major')}</span>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                       {ed.faculty[lang]}<br />
                       <span className="text-slate-400">{ed.major[lang]}</span>
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Hover Light Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[oklch(75%_0.183_55.934)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Education = ({ education, currentLang, t }) => {
  return (
    <SectionLayout id="education" title={t('sections.education')} subtitle="Academic" hideHeader={true}>
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">
        {/* Standardized Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[oklch(75%_0.183_55.934)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">{t('ui.education_sub')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase">{t('ui.education_title')}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {education?.map((ed, idx) => (
            <EducationCard 
              key={idx} 
              ed={ed} 
              lang={currentLang} 
              index={idx} 
              t={t}
            />
          ))}
        </div>

      </div>
    </SectionLayout>
  );
};

export default Education;
