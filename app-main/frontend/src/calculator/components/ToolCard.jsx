import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ToolCard = ({ tool }) => {
  return (
    <Link
      to={`/${tool.slug}`}
      className="group relative h-full bg-[#12131f] border border-white/[0.06] rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-300 hover:border-indigo-400/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.35)]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, rgba(99,102,241,0.08), transparent 40%)',
        }}
      />

      <div className="relative flex items-start justify-between mb-6">
        <span className="text-xs text-white/40 tracking-widest font-mono">{tool.number}</span>
        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${tool.categoryColor}`}>
          {tool.category}
        </span>
      </div>

      <div className={`relative w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center mb-6`}>
        <span className={`text-xl ${tool.iconColor} font-light`}>{tool.glyph}</span>
      </div>

      <h3 className="relative text-[17px] font-medium tracking-tight mb-2 text-white">
        {tool.title}
      </h3>
      <p className="relative text-sm text-white/55 leading-relaxed mb-6 flex-1">
        {tool.description}
      </p>

      <div className="relative pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[11px] text-white/40">Free &middot; No signup</span>
        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </Link>
  );
};

export default ToolCard;
