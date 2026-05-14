import React from 'react';
import SectionLayout from '../components/layout/SectionLayout';

const Education = ({ education, currentLang, t }) => {
  return (
    <SectionLayout id="education" title={t('sections.education')} subtitle="Academic" className="bg-slate-50/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {education.map((ed, idx) => (
          <div key={idx} className="relative pl-8 border-l-[3px] border-[oklch(75%_0.183_55.934)]/20 hover:border-[oklch(75%_0.183_55.934)] transition-colors duration-500 group py-2">
            <div className="text-[10px] font-bold text-[oklch(75%_0.183_55.934)] mb-3 uppercase tracking-[0.3em]">
              {ed.startDate} — {ed.endDate}
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight leading-tight">
              {ed.degree[currentLang]}
            </h3>
            <div className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest mb-4">
              {ed.institute[currentLang]}
            </div>
            <div className="text-[10px] md:text-xs text-slate-400 leading-relaxed uppercase tracking-widest font-medium">
              {ed.faculty[currentLang]} // {t('education.major')}: {ed.major[currentLang]}<br />
              <span className="text-slate-900 font-black text-xs mt-2 block">{t('education.gpa')}: {ed.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Education;
