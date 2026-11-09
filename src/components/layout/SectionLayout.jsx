import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// fades content up as it scrolls into view; same motion as the section header
export const FadeIn = ({ as = 'div', delay = 0, className, children }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
};

const SectionLayout = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`relative bg-white border-t border-slate-100 py-24 md:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-brand" />
            <span className="eyebrow">{subtitle}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        </motion.header>

        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
