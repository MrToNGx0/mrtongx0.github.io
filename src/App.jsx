import React from 'react';
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'framer-motion';

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
import CommandPalette, { shortcutLabel } from './components/ui/CommandPalette';

const SECTIONS = ['home', 'projects', 'skills', 'experience', 'education', 'contact'];

const Navbar = React.memo(({ activeSection, currentLang, changeLanguage, onOpenPalette }) => {
  const { t } = useTranslation();
  const navItems = [
    { id: 'projects', label: t('nav.work') },
    { id: 'skills', label: t('nav.tech') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];
  const onHero = activeSection === 'home';

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        onHero ? 'bg-transparent' : 'bg-white/90 backdrop-blur border-b border-slate-100'
      }`}
    >
      <div className="px-6 md:px-16 h-16 flex items-center justify-between">
        <a href="#home" className="overflow-hidden font-heading font-semibold text-slate-900">
          {/* logo stays clipped off-left on the hero so it doesn't compete with the photo */}
          <span
            className={`flex items-center gap-2.5 transition-transform duration-500 ease-out ${
              onHero ? '-translate-x-[38px]' : 'translate-x-0'
            }`}
          >
            <img src="/assets/image/logo.png" alt="" className="h-7 w-7 rounded-full" />
            MrToNGx0
          </span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? 'text-slate-900' : onHero ? 'text-slate-800 hover:text-slate-950' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={onOpenPalette}
            className={`hidden md:inline text-xs transition-colors ${onHero ? 'text-slate-700 hover:text-slate-950' : 'text-slate-400 hover:text-slate-900'}`}
            aria-label="Open command palette"
          >
            <kbd className="font-sans">{shortcutLabel}</kbd>
          </button>
          <button
            onClick={() => changeLanguage(currentLang === 'en' ? 'th' : 'en')}
            className={`text-xs font-medium hover:text-slate-900 transition-colors border rounded-full px-3 py-1 ${onHero ? 'text-slate-800 border-slate-800/30' : 'text-slate-500 border-slate-200'}`}
            aria-label="Switch language"
          >
            {currentLang === 'en' ? 'TH' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = React.useState('home');
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const containerRef = React.useRef(null);
  // resolvedLanguage maps detector values like 'en-US' to 'en' so data[lang] lookups work
  const currentLang = i18n.resolvedLanguage || 'en';

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: containerRef.current, rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const changeLanguage = React.useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  const openPalette = React.useCallback(() => setPaletteOpen(true), []);
  const th = currentLang === 'th';
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const commands = [
    ...SECTIONS.map((id) => ({
      id: `go-${id}`,
      label: id === 'home' ? (th ? 'หน้าแรก' : 'Home') : t(`nav.${{ projects: 'work', skills: 'tech' }[id] || id}`),
      group: th ? 'ไปที่' : 'Go to',
      keywords: id,
      action: () => goTo(id),
    })),
    ...projects.map((p, idx) => ({
      id: `project-${idx}`,
      label: p.title[currentLang] || p.title.en,
      group: th ? 'ผลงาน' : 'Project',
      keywords: (p.skills || []).join(' '),
      action: () => setSelectedProject(idx),
    })),
    {
      id: 'copy-email',
      label: th ? 'คัดลอกอีเมล' : 'Copy email address',
      group: th ? 'การกระทำ' : 'Action',
      keywords: personal.email,
      action: () => navigator.clipboard?.writeText(personal.email),
    },
    {
      id: 'resume',
      label: th ? 'ดาวน์โหลด Resume' : 'Download resume',
      group: th ? 'การกระทำ' : 'Action',
      keywords: 'resume cv pdf',
      action: () => window.open(personal.resumeLink, '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'switch-lang',
      label: th ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย',
      group: th ? 'การกระทำ' : 'Action',
      keywords: 'language thai english ภาษา',
      action: () => changeLanguage(th ? 'en' : 'th'),
    },
    ...(personal.social || []).map((s) => ({
      id: `social-${s.label}`,
      label: s.label,
      group: th ? 'ลิงก์' : 'Link',
      action: () => window.open(s.link, '_blank', 'noopener,noreferrer'),
    })),
  ];

  const socialIcons = React.useMemo(() => ({
    Facebook: faFacebook,
    Instagram: faInstagram,
    Github: faGithub,
    Youtube: faYoutube
  }), []);

  return (
    <MotionConfig reducedMotion="user">
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-auto scroll-smooth bg-white text-slate-700 selection:bg-brand selection:text-white"
    >
      <Navbar
        activeSection={activeSection}
        currentLang={currentLang}
        changeLanguage={changeLanguage}
        onOpenPalette={openPalette}
      />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} commands={commands} />
      <ScrollToTop containerRef={containerRef} />

      <main>
        <Hero personal={personal} currentLang={currentLang} socialIcons={socialIcons} t={t} containerRef={containerRef} />
        <Projects projects={projects} currentLang={currentLang} t={t} selectedIdx={selectedProject} setSelectedIdx={setSelectedProject} />
        <Skills skills={skills} currentLang={currentLang} t={t} />
        <Experience experience={experience} currentLang={currentLang} t={t} />
        <Education education={education} currentLang={currentLang} t={t} />
        <Contact personal={personal} socialIcons={socialIcons} currentLang={currentLang} t={t} />
      </main>
    </div>
    </MotionConfig>
  );
}

export default App;
