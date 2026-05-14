import React from 'react';
import { motion } from 'framer-motion';

const SectionLayout = ({ id, title, subtitle, children, hasReadabilityBg = true, className = "", hideHeader = false }) => {
  return (
    <section 
      id={id} 
      className={`h-screen w-full snap-start snap-always flex flex-col justify-center relative overflow-hidden m-0 p-0 ${className}`}
    >
      {/* Full-bleed Glassmorphism Background */}
      {hasReadabilityBg && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl z-0 w-full h-full" />
      )}
      
      <div className={`container mx-auto px-8 md:px-12 lg:px-20 relative z-10 w-full flex flex-col h-full ${hideHeader ? 'pt-12 pb-28' : 'pt-24 pb-36'}`}>
        
        {/* Standardized Header - Fixed at Top */}
        {!hideHeader && (
          <div className="flex-shrink-0 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-[oklch(75%_0.183_55.934)]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[oklch(75%_0.183_55.934)]">
                {subtitle}
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight uppercase"
            >
              {title?.split('_').join(' ')}
            </motion.h2>
          </div>
        )}

        {/* Content Area - Scrollable if content is too large */}
        <div className="flex-grow flex flex-col justify-center overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
