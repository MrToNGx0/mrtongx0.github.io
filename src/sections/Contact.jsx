import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import SectionLayout, { FadeIn } from '../components/layout/SectionLayout';

const Contact = ({ personal, socialIcons, currentLang, t }) => {
  return (
    <SectionLayout id="contact" title={t('ui.contact_title')} subtitle={t('ui.contact_sub')}>
      <FadeIn>
      <p className="text-slate-600 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
        {t('ui.contact_available')}
      </p>

      <a
        href={`mailto:${personal.email}`}
        className="mt-6 inline-block text-2xl md:text-4xl font-heading font-semibold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-brand hover:border-brand transition-colors break-all"
      >
        {personal.email}
      </a>
      </FadeIn>

      {personal.resumeLink && (
        <FadeIn delay={0.1} className="mt-8">
          <a
            href={personal.resumeLink}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-900 hover:bg-brand transition-colors rounded-full px-5 py-2.5"
          >
            <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
            {currentLang === 'th' ? 'ดาวน์โหลด Resume' : 'Download resume'}
          </a>
        </FadeIn>
      )}

      <FadeIn delay={0.2} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
        {personal.social?.map((s) => (
          <a
            key={s.label}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <FontAwesomeIcon icon={socialIcons[s.label]} />
            {s.label}
          </a>
        ))}
      </FadeIn>

      <footer className="mt-24 pt-8 border-t border-slate-100 text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {personal.firstName[currentLang]} {personal.lastName[currentLang]}
      </footer>
    </SectionLayout>
  );
};

export default Contact;
