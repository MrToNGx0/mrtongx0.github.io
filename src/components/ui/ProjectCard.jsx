import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project, lang, onOpen }) => {
  const [imgError, setImgError] = React.useState(false);
  const title = project.title[lang] || project.title.en || project.title;
  // external banners are logos (some white), local ones are screenshots
  const isLogo = project.banner_url?.startsWith('http');
  const description = project.description[lang] || project.description.en || project.description;

  return (
    <button type="button" onClick={onOpen} className="group text-left flex flex-col">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center">
        {!imgError && project.banner_url ? (
          <img
            src={project.banner_url}
            alt={title}
            loading="lazy"
            className={`w-full h-full transition-transform ${isLogo ? 'object-contain p-10' : 'object-cover'} duration-500 group-hover:scale-[1.03]`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <FontAwesomeIcon icon={faCode} />
            <span className="text-xs">{lang === 'th' ? 'ข้อมูลภายในบริษัท' : 'Confidential'}</span>
          </div>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold group-hover:text-brand transition-colors">
        {title}
      </h3>
      <p className="mt-1 text-sm text-slate-500 leading-relaxed line-clamp-2">{description}</p>
      {project.skills?.length > 0 && (
        <p className="mt-3 text-xs text-slate-400">
          {project.skills.slice(0, 3).map((s) => (typeof s === 'string' ? s : s.label)).join(' · ')}
        </p>
      )}
    </button>
  );
};

export default ProjectCard;
