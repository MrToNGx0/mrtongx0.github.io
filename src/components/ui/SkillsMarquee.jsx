import React from 'react';

const SkillsMarquee = ({ items }) => {
  // Triple the items to ensure seamless looping for any list length
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-12 md:py-16">
      {/* Container with animation */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {duplicatedItems.map((s, idx) => (
          <div 
            key={idx} 
            className="inline-flex items-center gap-4 px-8 py-5 mx-4 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/40 transition-all hover:border-[oklch(75%_0.183_55.934)] hover:-translate-y-1 group bg-white/80 backdrop-blur-sm"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <img 
                src={s.icon} 
                alt={s.label} 
                className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
              {s.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Edge Fades for smoothness */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default SkillsMarquee;
