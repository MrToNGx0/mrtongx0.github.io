import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project, lang }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="minimal-card p-0 flex flex-col h-[320px] md:h-[350px] group bg-white border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-1 transition-all duration-300 w-[260px] md:w-[320px] lg:w-[380px] flex-shrink-0 snap-center relative overflow-hidden">
      {/* Ultra-Compact Project Header */}
      <div className="relative h-28 md:h-32 overflow-hidden bg-slate-50">
        {!imgError && project.banner_url ? (
          <img 
            src={project.banner_url} 
            alt={project.title[lang]} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '8px 8px' }} />
             <FontAwesomeIcon icon={faCode} className="text-2xl text-slate-200" />
          </div>
        )}
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black text-slate-900 uppercase tracking-widest shadow-sm border border-slate-100">
          {project.status}
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2 leading-tight uppercase tracking-tight truncate">
          {project.title[lang] || project.title.en || project.title}
        </h3>
        
        <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
          {project.description[lang] || project.description.en || project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-50">
            {project.skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="text-[7px] md:text-[8px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded uppercase tracking-widest border border-slate-100">
                {typeof skill === 'string' ? skill : skill.label}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 items-center justify-between">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[9px] font-black text-slate-900 hover:text-[oklch(75%_0.183_55.934)] transition-colors flex items-center gap-2 uppercase tracking-[0.2em]">
                View <FontAwesomeIcon icon={faArrowRight} className="text-[7px]" />
              </a>
            ) : <div />}
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors">
                <FontAwesomeIcon icon={faGithub} className="text-base" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
