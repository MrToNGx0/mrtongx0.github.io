import React from 'react';
import SectionLayout, { FadeIn } from '../components/layout/SectionLayout';

const Education = ({ education, currentLang, t }) => {
  return (
    <SectionLayout id="education" title={t('ui.education_title')} subtitle={t('ui.education_sub')}>
      <ol className="divide-y divide-slate-100">
        {education?.map((ed, idx) => (
          <FadeIn as="li" key={idx} className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-10 first:pt-0">
            <div className="text-sm text-slate-500">
              {ed.startDate} — {ed.endDate}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{ed.degree[currentLang]}</h3>
              <p className="mt-1 text-slate-500">{ed.institute[currentLang]}</p>
              <p className="mt-4 text-sm text-slate-600">
                {ed.faculty[currentLang]} · {ed.major[currentLang]}
              </p>
              {ed.gpa && <p className="mt-2 text-sm text-slate-600">GPA {ed.gpa}</p>}
            </div>
          </FadeIn>
        ))}
      </ol>
    </SectionLayout>
  );
};

export default Education;
