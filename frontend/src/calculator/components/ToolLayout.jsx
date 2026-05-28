import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';

const ToolLayout = ({ children, number, title, category, categoryColor, description }) => {
  return (
    <div className="App bg-white min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-indigo-500/[0.08] via-violet-500/[0.04] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />

      <div className="relative">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 pt-10">
          {/* /<Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </Link> */}

          <div className="mt-10 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-white/40 font-mono">{number}</span>
              {category && (
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${categoryColor}`}>
                  {category}
                </span>
              )}
            </div>
            <h1 className="font-serif-display text-4xl md:text-5xl font-medium tracking-tight text-teal mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-teal/60 max-w-2xl leading-relaxed">{description}</p>
            )}
          </div>

          {children}

          <p className="text-xs text-teal/40 max-w-3xl mt-16 mb-16 leading-relaxed">
            This tool is for informational purposes only and does not constitute legal, financial, or investment advice. Results are estimates based on the inputs provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
