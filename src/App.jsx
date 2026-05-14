import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faBriefcase, faHouse, faRocket, faMicrochip, faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { personal } from './data/personal';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { experience } from './data/experience';
import { education } from './data/education';

import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

const Background = ({ progress }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover transition-all duration-300"
        style={{ 
          opacity: 1,
          filter: `grayscale(${progress * 100}%) brightness(${100 + (progress * 20)}%) contrast(${100 - (progress * 10)}%)`
        }}
      >
        <source src="/assets/video/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-subtle opacity-10" />
    </div>
  );
};

const Controls = ({ currentLang, changeLanguage }) => {
  return (
    <div className="fixed top-8 right-8 z-50 flex gap-4">
      <button 
        onClick={() => changeLanguage(currentLang === 'en' ? 'th' : 'en')}
        className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center text-slate-900 shadow-xl transition-all hover:scale-110 active:scale-95"
      >
        <span className="text-[10px] font-black uppercase tracking-tighter">{currentLang === 'en' ? 'TH' : 'EN'}</span>
      </button>
    </div>
  );
};

const Navbar = ({ activeSection }) => {
  const { t } = useTranslation();
  const navItems = [
    { id: 'home', icon: faHouse, label: t('nav.home') },
    { id: 'projects', icon: faRocket, label: t('nav.work') },
    { id: 'skills', icon: faMicrochip, label: t('nav.tech') },
    { id: 'experience', icon: faBriefcase, label: t('nav.experience') },
    { id: 'education', icon: faGraduationCap, label: t('nav.education') },
    { id: 'contact', icon: faEnvelope, label: t('nav.contact') },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-2 bg-white/40 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
        <motion.div
          layoutId="nav-indicator"
          className="absolute h-10 w-10 bg-[oklch(75%_0.183_55.934)] rounded-full z-0 shadow-lg shadow-[oklch(75%_0.183_55.934)]/20"
          animate={{
            x: navItems.findIndex(i => i.id === activeSection) * 44,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative h-10 w-10 flex items-center justify-center transition-colors duration-500"
              title={item.label}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className={`text-sm relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-slate-400 group-hover:text-slate-900'
                }`} 
              />
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[9px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none uppercase tracking-[0.2em] shadow-xl whitespace-nowrap z-50">
                {item.label}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

const useDraggableScroll = () => {
  const ref = React.useRef(null);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    className: isDown ? 'cursor-grabbing select-none snap-none' : 'cursor-grab'
  };
};

function App() {
  const { t, i18n } = useTranslation();
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState('home');
  const containerRef = React.useRef(null);
  const currentLang = i18n.language || 'en';
  const dragScroll = useDraggableScroll();

  React.useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ['home', 'projects', 'skills', 'experience', 'education', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const progress = scrollTop / (scrollHeight - clientHeight);
    setScrollProgress(progress);
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const socialIcons = { Facebook: faFacebook, Instagram: faInstagram, Github: faGithub, Youtube: faYoutube };

  return (
    <div 
      ref={containerRef}
      onScroll={handleScroll}
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory bg-white text-slate-800 selection:bg-[oklch(75%_0.183_55.934)] selection:text-white no-scrollbar transition-colors duration-500"
    >
      <Background progress={scrollProgress} />
      <Navbar activeSection={activeSection} />
      <Controls currentLang={currentLang} changeLanguage={changeLanguage} />
      <ScrollToTop containerRef={containerRef} />

      <main className="relative z-10">
        <Hero 
          personal={personal} 
          currentLang={currentLang} 
          socialIcons={socialIcons} 
          t={t} 
        />

        <Projects 
          projects={projects} 
          currentLang={currentLang} 
          t={t} 
          dragScroll={dragScroll} 
        />

        <Skills 
          skills={skills} 
          currentLang={currentLang} 
          t={t} 
        />

        <Experience 
          experience={experience} 
          currentLang={currentLang} 
          t={t} 
        />

        <Education 
          education={education} 
          currentLang={currentLang} 
          t={t} 
        />

        <Contact 
          personal={personal} 
          socialIcons={socialIcons} 
          currentLang={currentLang} 
          t={t} 
        />
      </main>
    </div>
  );
}

export default App;
