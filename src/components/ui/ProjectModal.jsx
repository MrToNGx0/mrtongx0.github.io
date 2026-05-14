import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectModal = ({ project, isOpen, onClose, lang }) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:scale-110 active:scale-95 transition-all shadow-sm"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Media/Banner Side with Dynamic Backdrop */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-950 relative overflow-hidden flex items-center justify-center p-8 md:p-16">
              {project.banner_url ? (
                <>
                  {/* Blurred Background Layer */}
                  <div 
                    className="absolute inset-0 scale-125 blur-3xl opacity-50"
                    style={{ 
                      backgroundImage: `url(${project.banner_url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                  
                  {/* Main Image Layer */}
                  <img
                    src={project.banner_url}
                    alt={project.title[lang]}
                    className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-12">
                   <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                   
                   <div className="relative">
                      <div className="absolute inset-0 bg-[oklch(75%_0.183_55.934)]/10 blur-3xl rounded-full" />
                      <FontAwesomeIcon icon={faCode} className="text-7xl text-slate-700 relative z-10 mb-6" />
                   </div>
                   
                   <h4 className="text-xs font-black text-slate-200 uppercase tracking-[0.3em] mb-2 relative z-10">
                     {lang === 'th' ? 'โครงการภายใน' : 'Internal Project'}
                   </h4>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed max-w-[200px] relative z-10">
                     {lang === 'th' 
                        ? 'ข้อมูลและภาพประกอบถูกจำกัดเนื่องจากข้อตกลงการไม่เปิดเผยข้อมูล' 
                        : 'Information and visuals restricted due to Non-Disclosure Agreement'}
                   </p>
                </div>
              )}
            </div>

            {/* Information Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight uppercase">
                  {project.title[lang] || project.title.en}
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                  {project.description[lang] || project.description.en}
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills?.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-100 uppercase tracking-widest">
                      {typeof skill === 'string' ? skill : skill.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-50">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[oklch(75%_0.183_55.934)] transition-all duration-300 text-center shadow-xl shadow-slate-200"
                  >
                    Launch Live Site <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
