import React from 'react';
import SectionLayout, { FadeIn } from '../components/layout/SectionLayout';

const Experience = ({ experience, currentLang, t }) => {
  return (
    <SectionLayout id="experience" title={t('ui.experience_title')} subtitle={t('ui.experience_sub')}>
      <ol className="divide-y divide-slate-100">
        {experience?.map((item, idx) => {
          const isPresent = item.endDate?.toLowerCase() === 'present';
          return (
            <FadeIn as="li" key={idx} className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-10 first:pt-0">
              <div className="text-sm text-slate-500">
                {item.startDate} — {item.endDate}
                {isPresent && (
                  <span className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {t('ui.experience_active')}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.jobPosition[currentLang]}</h3>
                <p className="mt-1 text-slate-500">{item.organizationName[currentLang]}</p>
                {item.responsibilities?.[currentLang]?.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed list-disc pl-4 marker:text-slate-300">
                    {item.responsibilities[currentLang].map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
                {item.skills?.length > 0 && (
                  <p className="mt-4 text-xs text-slate-400">{item.skills.join(' · ')}</p>
                )}
              </div>
            </FadeIn>
          );
        })}
      </ol>
    </SectionLayout>
  );
};

export default Experience;
