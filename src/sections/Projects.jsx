import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../components/layout/SectionLayout';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';

const Projects = ({ projects, currentLang, t, dragScroll }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionLayout id="projects" title={t('sections.work')} subtitle="Work" hideHeader={true}>
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">
        {/* Standardized Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[oklch(75%_0.183_55.934)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">{t('ui.projects_sub')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase">{t('ui.projects_title')}</h2>
        </div>

        <div className="relative group/scroll">
          <div 
            ref={dragScroll.ref}
            onMouseDown={dragScroll.onMouseDown}
            onMouseLeave={dragScroll.onMouseLeave}
            onMouseUp={dragScroll.onMouseUp}
            onMouseMove={dragScroll.onMouseMove}
            className={`flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-10 pt-4 px-2 -mx-2 pointer-events-auto ${dragScroll.className}`}
          >
            {projects.map((p, idx) => (
              <ProjectCard 
                key={idx} 
                project={p} 
                lang={currentLang} 
                onOpen={() => setSelectedProject(p)}
              />
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em] opacity-60">
              [ {t('swipe')} ]
            </p>
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={currentLang}
      />
    </SectionLayout>
  );
};

export default Projects;
