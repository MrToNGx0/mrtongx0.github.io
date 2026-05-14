import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLayout from '../components/layout/SectionLayout';

const SkillCard = ({ skill, lang, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.02 }}
      className="relative group p-3 bg-white border border-slate-100 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:border-[oklch(75%_0.183_55.934)]/30"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center p-1.5 bg-slate-50 rounded-lg group-hover:bg-white transition-colors">
          <img 
            src={skill.icon} 
            alt={skill.label} 
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none mb-0.5 truncate">
            {skill.label}
          </span>
          <span className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter truncate">
            {skill.description?.[lang]?.split('.')[0] || ''}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = ({ skills, currentLang, t }) => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Platforms' }
  ];

  const categoryItems = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Tailwind', 'Bootstrap'],
    backend: ['NestJS', 'ExpressJS', 'Python', 'C#', 'Socket.IO'],
    database: ['MySQL', 'PostgreSQL', 'MariaDB', 'MongoDB'],
    tools: ['Docker', 'GitHub', 'Strapi', 'Vite']
  };

  const getSkillData = (label) => skills.find(s => s.label === label);

  return (
    <SectionLayout id="skills" title={t('sections.tech')} subtitle="Expertise" hideHeader={true}>
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col justify-center h-full">
        {/* Standardized Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[oklch(75%_0.183_55.934)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">{t('ui.skills_sub')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase">{t('ui.skills_title')}</h2>
        </div>

        {/* Compact Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeTab === cat.id 
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Display - Optimized Grid */}
        <div className="max-h-[300px] overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {categoryItems[activeTab].map((itemLabel, index) => {
                const skill = getSkillData(itemLabel);
                return skill ? (
                  <SkillCard 
                    key={itemLabel} 
                    skill={skill} 
                    lang={currentLang} 
                    index={index} 
                  />
                ) : null;
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </SectionLayout>
  );
};

export default Skills;
