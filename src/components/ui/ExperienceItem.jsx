import React from 'react';

const ExperienceItem = ({ item, lang }) => (
  <div className="relative pl-8 pb-8 last:pb-0 group">
    <div className="absolute left-0 top-0 w-[1px] h-full bg-slate-100 group-last:h-0" />
    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-slate-200 border-2 border-white group-hover:bg-[oklch(75%_0.183_55.934)] transition-colors duration-300" />

    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
      <h3 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-tight">
        {item.jobPosition[lang] || item.jobPosition.en || item.jobPosition}
      </h3>
      <div className="text-[9px] font-bold text-[oklch(75%_0.183_55.934)] uppercase tracking-[0.2em]">
        {item.startDate} — {item.endDate}
      </div>
    </div>

    <div className="text-[10px] text-slate-400 mb-3 font-bold uppercase tracking-widest">
      {item.organizationName[lang] || item.organizationName.en || item.organizationName}
    </div>

    <div className="space-y-1.5">
      {(item.responsibilities[lang] || item.responsibilities.en || item.responsibilities || []).slice(0, 2).map((resp, idx) => (
        <div key={idx} className="text-[10px] text-slate-500 leading-relaxed flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-[oklch(75%_0.183_55.934)]/30 mt-1.5 flex-shrink-0" />
          {resp}
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceItem;
