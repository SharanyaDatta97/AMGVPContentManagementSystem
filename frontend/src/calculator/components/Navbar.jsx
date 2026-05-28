import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-6 px-4 sticky top-0 z-40">
      {/* <Link
        to="/"
        className="inline-flex items-center gap-2.5 bg-[#12131f]/80 backdrop-blur-xl border border-white/10 rounded-full pl-3 pr-5 py-2 shadow-lg"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="font-serif-display text-[15px] font-medium tracking-tight text-white">
          Founder<span className="text-indigo-400">Kit</span>
        </span>
      </Link> */}
    </div>
  );
};

export default Navbar;
