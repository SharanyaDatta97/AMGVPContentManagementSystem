import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { NOT_SURE_CTA } from '../mock';

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden card-amg">
          <div className="absolute inset-0 grid-paper pointer-events-none opacity-50"/>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 lg:p-16 items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-5">{NOT_SURE_CTA.eyebrow}</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-cream">
                {NOT_SURE_CTA.title}
              </h2>
              <p className="mt-6  max-w-xl text-[15.5px] leading-relaxed font-semibold">
                {NOT_SURE_CTA.description}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to={NOT_SURE_CTA.cta.to} className="inline-flex items-center gap-2 bg-amg-yellow hover:bg-amg-yellow-2 text-amg-teal font-semibold px-5 py-3 rounded-md text-[14px] transition-colors">
                {NOT_SURE_CTA.cta.label} <ArrowRight className="w-4 h-4"/>
              </Link>
              <div className="mt-4 text-[12px] font-semibold">{NOT_SURE_CTA.note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
