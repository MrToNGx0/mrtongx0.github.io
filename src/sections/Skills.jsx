import React from 'react';
import SectionLayout, { FadeIn } from '../components/layout/SectionLayout';

const categories = [
  { id: 'frontend', label: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
  { id: 'backend', label: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'C#', 'Socket.IO', 'Strapi'] },
  { id: 'database', label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'InfluxDB'] },
  { id: 'tools', label: 'Tools', items: ['Docker', 'GitHub', 'Vite'] },
];

const Skills = ({ skills, t }) => {
  const byLabel = Object.fromEntries((skills || []).map((s) => [s.label, s]));

  return (
    <SectionLayout id="skills" title={t('ui.skills_title')} subtitle={t('ui.skills_sub')}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((cat, idx) => (
          <FadeIn key={cat.id} delay={idx * 0.1}>
            <h3 className="eyebrow mb-5">{cat.label}</h3>
            <ul className="space-y-3">
              {cat.items.filter((label) => byLabel[label]).map((label) => (
                <li key={label} className="flex items-center gap-3 text-slate-800">
                  <img src={byLabel[label].icon} alt="" className="w-5 h-5 object-contain" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;
