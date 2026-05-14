import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project, lang, onOpen }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div 
      onClick={onOpen}
      className="minimal-card p-0 flex flex-col h-[380px] group bg-white border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[oklch(75%_0.183_55.934)]/10 transition-all duration-500 w-[280px] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333333%-1rem)] flex-shrink-0 snap-center relative cursor-pointer rounded-2xl"
    >
      {/* Dynamic Blurred Backdrop Header */}
      <div className="relative h-32 md:h-40 overflow-hidden bg-slate-900 flex items-center justify-center group/img rounded-t-2xl">
        {!imgError && project.banner_url ? (
          <>
            {/* Blurred Background Layer */}
            <div 
              className="absolute inset-0 scale-150 blur-2xl opacity-40 transition-transform duration-700 group-hover/img:scale-[1.6]"
              style={{ 
                backgroundImage: `url(${project.banner_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            
            {/* Main Image Layer */}
            <img 
              src={project.banner_url} 
              alt={project.title[lang]} 
              className="max-w-[85%] max-h-[85%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
              onError={() => setImgError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
             {/* Abstract Minimalist Background */}
             <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[oklch(75%_0.183_55.934)]/10 rounded-full blur-3xl" />
             
             <div className="relative z-10 flex flex-col items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-xl text-slate-500" />
                <span className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em]">{lang === 'th' ? 'ข้อมูลภายในบริษัท' : 'Confidential'}</span>
             </div>
          </div>
        )}
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
