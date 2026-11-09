import React from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionLayout, { FadeIn } from '../components/layout/SectionLayout';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';

const Projects = ({ projects, currentLang, t, selectedIdx, setSelectedIdx }) => {

  return (
    <SectionLayout id="projects" title={t('ui.projects_title')} subtitle={t('ui.projects_sub')}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects?.map((p, idx) => (
          <FadeIn key={idx} delay={(idx % 3) * 0.1}>
            <ProjectCard project={p} lang={currentLang} onOpen={() => setSelectedIdx(idx)} />
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <ProjectModal
            project={projects[selectedIdx]}
            onClose={() => setSelectedIdx(null)}
            lang={currentLang}
          />
        )}
      </AnimatePresence>
    </SectionLayout>
  );
};

export default Projects;
