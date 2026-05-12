import React from 'react';
import Navbar from '../components/Navbar';
import ToolCard from '../components/ToolCard';
import { TOOLS } from '../mock';
import { ArrowRight } from 'lucide-react';

const ToolsHome = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-indigo-500/[0.12] via-violet-500/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_60%)] pointer-events-none" />

      <div className="relative">
        <Navbar />

        <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Free &middot; No signup required
          </div>

          <h1 className="font-serif-display text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] text-white">
            Precision tools for
            <br />
            <span className="italic bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300 text-transparent bg-clip-text">
              serious founders.
            </span>
          </h1>

          <p className="mt-8 text-[17px] leading-relaxed text-white/60 max-w-xl mx-auto">
            Three hand-built calculators for runway, revenue, and SAFE dilution. Replace your fragile spreadsheets &mdash; and the blind spots that quietly kill deals.
          </p>

          <div className="mt-10">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#0a0b14] text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Explore the tools
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="tools" className="max-w-5xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToolsHome;
