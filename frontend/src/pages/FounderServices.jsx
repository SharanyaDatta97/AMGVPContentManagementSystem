import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

import {
  SERVICES,
  FOUNDER_SERVICES_INTRO,
} from '../mock';

export default function FounderServices() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amg-line bg-[#fafbfd]">
        <div className="absolute inset-0 grid-paper pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-16 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-amg-teal/55 mb-10">
            <Link to="/" className="hover:text-amg-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amg-teal font-medium">Founder Services</span>
          </nav>

          {/* Main Grid */}
          <div className="grid grid-c ols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">
                {FOUNDER_SERVICES_INTRO.eyebrow}
              </div>

              <h1 className="heading-display text-[48px] md:text-[76px] text-amg-teal leading-[0.98] max-w-5xl">
                {FOUNDER_SERVICES_INTRO.title}
              </h1>

              {/* Trust Strip */}
              <div className="flex flex-wrap gap-3 mt-10">
                {['Pre-Seed', 'Seed', 'Series A'].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full border border-amg-line bg-white text-[13px] text-amg-teal/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <p className="text-[17px] text-amg-teal/72 leading-relaxed">
                {FOUNDER_SERVICES_INTRO.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — List Layout */}
      <section className="py-20 px-6 lg:px-10 bg-[#faf9f6]">
        <div className="max-w-[1280px] mx-auto">
          {SERVICES.map((s, i) => {
              const topItems = (s.whatsIncluded || []).slice(0, 4);
            const hasMore = (s.whatsIncluded || []).length > 4;
            return (
            <div
              key={s.slug}
              className="group border-b border-amg-line first:border-t"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 lg:py-16 items-start">
                
                {/* Number + Title + Description */}
                <div className="lg:col-span-5 relative">
                  {/* Large background number */}
                  <span className="absolute -top-4 -left-2 text-[120px] font-serif leading-none text-amg-teal/[0.06] select-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <h3 className="font-serif text-[32px] md:text-[36px] text-amg-teal leading-[1.15]">
                      {s.title}
                    </h3>
                    
                    {s.tagline && (
                      <p className="mt-3 text-[16px] italic text-amg-teal/60 leading-relaxed">
                        {s.tagline}
                      </p>
                    )}
                    
                    {s.description && (
                      <p className="mt-4 text-[15px] text-amg-teal/68 leading-relaxed max-w-[420px]">
                        {s.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* What's Included */}
                <div className="lg:col-span-4">
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-amg-teal/40 mb-5">
                    What's Included
                  </h4>
                  
                  <ul className="space-y-3">
                    {(topItems || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-amg-turquoise mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-[15px] text-amg-teal/75 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                   {hasMore && (
                      <Link
                        // to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1.5 mt-4 text-[14px] font-medium text-amg-turquoise hover:text-amg-teal transition-colors"
                      >
                        and more
                        {/* <ArrowRight className="w-3.5 h-3.5" /> */}
                      </Link>
                    )}
                </div>

                {/* Learn More Button */}
                <div className="lg:col-span-3 flex lg:justify-end">
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amg-line bg-white text-[14px] font-medium text-amg-teal hover:border-amg-teal hover:bg-amg-teal hover:text-white transition-all duration-300 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>)
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}