import React from 'react';
import SectionLayout from '../components/layout/SectionLayout';
import SkillsMarquee from '../components/ui/SkillsMarquee';

const Skills = ({ skills, currentLang, t }) => {
  return (
    <SectionLayout id="skills" title={t('sections.tech')} subtitle="Skills" className="bg-slate-50/10">
      <div className="flex flex-col gap-10">
         <SkillsMarquee items={skills} />
         <div className="max-w-xl mx-auto text-center px-4">
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium uppercase tracking-wider">
              {t('skills.description')}
            </p>
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(75%_0.183_55.934)] animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
         </div>
      </div>
    </SectionLayout>
  );
};

export default Skills;
