import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../components/layout/SectionLayout';

const TimelineItem = ({ item, lang, index, total, t }) => {
  const isPresent = item.endDate.toLowerCase() === 'present';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative pl-10 md:pl-14 group transition-all duration-500 ${
        isPresent ? 'bg-white/40 backdrop-blur-md rounded-[2rem] p-5 -ml-5 md:-ml-7 mb-4 shadow-lg shadow-slate-200/40 border border-white/50' : 'mb-6'
      }`}
    >
      {/* Vertical Line Segment */}
      {!isPresent && index !== total - 1 && (
        <div className="absolute left-[7px] md:left-[9px] top-4 bottom-0 w-[1.5px] bg-slate-100 group-hover:bg-[oklch(75%_0.183_55.934)]/20 transition-colors duration-500" />
      )}

      {/* Timeline Node */}
      <div className={`absolute ${isPresent ? 'left-5 md:left-7 top-6' : 'left-0 top-1'} w-3.5 h-3.4 md:w-4 md:h-4 rounded-full border-2 bg-white z-10 transition-all duration-500 flex items-center justify-center ${
        isPresent 
        ? 'border-[oklch(75%_0.183_55.934)] shadow-[0_0_10px_oklch(75%_0.183_55.934)]' 
        : 'border-slate-200 group-hover:border-slate-400'
      }`}>
        {isPresent && (
          <div className="w-1.5 h-1.5 bg-[oklch(75%_0.183_55.934)] rounded-full animate-pulse" />
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
             <span className={`text-[8px] font-black uppercase tracking-[0.3em] px-1.5 py-0.5 rounded ${
               isPresent ? 'bg-[oklch(75%_0.183_55.934)] text-white' : 'text-slate-400'
             }`}>
               {item.startDate} — {item.endDate}
             </span>
             {isPresent && (
               <div className="flex items-center gap-1.5">
                 <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{t('ui.experience_active')}</span>
               </div>
             )}
          </div>
          
          <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[oklch(75%_0.183_55.934)] transition-colors duration-300 leading-tight">
            {item.jobPosition[lang]}
          </h3>
          
          <div className="flex items-center gap-2">
            <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {item.organizationName[lang]}
            </span>
          </div>
        </div>

        {/* Technical Stack Tags - Even smaller */}
        <div className="flex flex-wrap gap-1">
          {item.skills?.map((skill, i) => (
            <span key={i} className="px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded-md text-[7px] font-bold text-slate-400 uppercase tracking-widest">
              {skill}
            </span>
          ))}
        </div>

        {/* Responsibilities - Tighter grid */}
        <div className="max-w-3xl">
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
             {item.responsibilities[lang].map((resp, i) => (
               <motion.li 
                 key={i}
                 className="flex items-start gap-2 text-[9px] md:text-[10px] text-slate-500 font-medium leading-tight group/item"
               >
                 <span className="mt-1.5 w-1 h-px bg-slate-300 group-hover/item:bg-[oklch(75%_0.183_55.934)] transition-colors flex-shrink-0" />
                 {resp}
               </motion.li>
             ))}
           </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = ({ experience, currentLang, t }) => {
  return (
    <SectionLayout id="experience" title={t('sections.experience')} subtitle="Journey" hideHeader={true}>
      <div className="max-w-5xl mx-auto px-4 w-full h-full flex flex-col justify-center">
        {/* Standardized Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[oklch(75%_0.183_55.934)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">{t('ui.experience_sub')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase">{t('ui.experience_title')}</h2>
        </div>

        <div className="relative">
          {experience.map((ex, idx) => (
            <TimelineItem 
              key={idx} 
              item={ex} 
              lang={currentLang} 
              index={idx} 
              total={experience.length}
              t={t}
            />
          ))}
        </div>

      </div>
    </SectionLayout>
  );
};

export default Experience;
