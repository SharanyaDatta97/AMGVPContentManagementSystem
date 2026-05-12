import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICES, FOUNDER_SERVICES_INTRO } from '../mock';

const ICONS = {
  'pitch-deck-review': FileText,
  'pitch-deck-creation': Sparkles,
  'financial-model': Calculator,
  'valuation': TrendingUp,
  'investor-outreach': Users,
  'investment-readiness': ShieldCheck,
  'ama-sessions': MessageCircle,
};

export default function FounderServices() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-teal">Home</Link>
            <span>/</span>
            <span className="text-amg-teal">Founder Services</span>
          </nav>
          <div className="eyebrow mb-4">{FOUNDER_SERVICES_INTRO.eyebrow}</div>
          <h1 className="heading-display text-[48px] md:text-[80px] text-amg-teal max-w-4xl">{FOUNDER_SERVICES_INTRO.introTitle}</h1>
          <p className="mt-7 text-[17px] text-amg-teal/75 max-w-3xl leading-relaxed">
            {FOUNDER_SERVICES_INTRO.description}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug] || Briefcase;
            const accent = s.accent === 'yellow' ? { bar:'bg-amg-yellow', iconBg:'bg-amg-yellow-bg', dot:'bg-amg-yellow' } : s.accent === 'turquoise' ? { bar:'bg-amg-turquoise', iconBg:'bg-amg-turquoise-bg', dot:'bg-amg-turquoise' } : { bar:'bg-amg-dodgerblue', iconBg:'bg-amg-teal-bg', dot:'bg-amg-teal' };
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group card-pro shadow-soft hover-lift block overflow-hidden">
                <div className={`h-1 ${accent.bar}`}/>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-md ${accent.iconBg} border border-amg-line flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-amg-teal"/>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`}/>
                      <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-teal/70">0{i+1}</span>
                    </div>
                  </div>
                  <div className="font-serif text-[24px] font-medium text-amg-teal leading-tight">{s.introTitle}</div>
                  <p className="mt-2.5 text-[14px] text-amg-teal/70 leading-relaxed">{s.tagline}</p>
                  <div className="hr-thin my-6"/>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-amg-turquoise-2">Get Started</span>
                    <ArrowUpRight className="w-4 h-4 text-amg-turquoise-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
