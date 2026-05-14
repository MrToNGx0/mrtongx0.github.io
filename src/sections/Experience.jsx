import React from 'react';
import SectionLayout from '../components/layout/SectionLayout';
import ExperienceItem from '../components/ui/ExperienceItem';

const Experience = ({ experience, currentLang, t }) => {
  return (
    <SectionLayout id="experience" title={t('sections.experience')} subtitle="Journey">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {experience.map((ex, idx) => (<ExperienceItem key={idx} item={ex} lang={currentLang} />))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Experience;
