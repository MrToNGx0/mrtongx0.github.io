import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../components/layout/SectionLayout';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = ({ projects, currentLang, t, dragScroll }) => {
  return (
    <SectionLayout id="projects" title={t('sections.work')} subtitle="Work">
      <div className="relative group/scroll">
        <div 
          ref={dragScroll.ref}
          onMouseDown={dragScroll.onMouseDown}
          onMouseLeave={dragScroll.onMouseLeave}
          onMouseUp={dragScroll.onMouseUp}
          onMouseMove={dragScroll.onMouseMove}
          className={`flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar pb-10 pointer-events-auto ${dragScroll.className}`}
        >
          {projects.map((p, idx) => (<ProjectCard key={idx} project={p} lang={currentLang} />))}
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[oklch(75%_0.183_55.934)]/20" />
          <div className="px-4 py-2 bg-[oklch(75%_0.183_55.934)] text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-[oklch(75%_0.183_55.934)]/20 animate-bounce">
            <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
            {t('swipe')}
          </div>
          <div className="h-px w-12 bg-[oklch(75%_0.183_55.934)]/20" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Projects;
