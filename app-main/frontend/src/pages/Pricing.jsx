import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICES } from '../mock';

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-ink">Home</Link>
            <span>/</span>
            <span className="text-amg-ink">Pricing</span>
          </nav>
          <div className="eyebrow mb-4">Pricing</div>
          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-ink max-w-4xl">Transparent, <em>flat-fee</em> pricing.</h1>
          <p className="mt-7 text-[17px] text-amg-ink/70 max-w-2xl leading-relaxed">No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto space-y-14">
          {SERVICES.map(s => {
            const dot = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
            return (
              <div key={s.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
                <div className="lg:col-span-4 card-pro p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${dot}`}/>
                    <span className="text-[10.5px] tracking-[0.2em] uppercase font-semibold text-amg-mute">Service</span>
                  </div>
                  <div className="font-serif text-[28px] font-medium leading-tight text-amg-ink">{s.title}</div>
                  <p className="mt-3 text-[14px] text-amg-ink/65">{s.tagline}</p>
                  <Link to={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-amg-teal link-under">View service details <ArrowRight className="w-4 h-4"/></Link>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {s.pricing.map((p, i) => {
                    const featured = i === 1;
                    return (
                      <div key={i} className={`relative rounded-xl p-7 ${featured ? 'card-dark shadow-soft-md' : 'card-pro shadow-soft'}`}>
                        {featured && <div className="absolute -top-3 right-5 bg-amg-yellow text-amg-ink text-[10.5px] tracking-[0.18em] uppercase font-semibold px-3 py-1 rounded-full">Most popular</div>}
                        <div className={`text-[10.5px] tracking-[0.18em] uppercase font-semibold ${featured?'text-amg-yellow':'text-amg-teal'}`}>{p.tier}</div>
                        <div className={`font-serif text-[42px] font-medium leading-none mt-3 ${featured?'text-amg-cream':'text-amg-ink'}`}>{p.price}</div>
                        <div className={`text-[12.5px] mt-2 ${featured?'text-amg-cream/65':'text-amg-mute'}`}>{p.sub}</div>
                        <div className={`my-5 h-px ${featured?'bg-amg-cream/15':'bg-amg-line'}`}/>
                        <ul className="space-y-2 text-[13px]">
                          {s?.included?.slice(0,4).map((it, k) => (
                            <li key={k} className={`flex items-start gap-2 ${featured?'text-amg-cream/80':'text-amg-ink/75'}`}>
                              <Check className={`w-3.5 h-3.5 mt-0.5 ${featured?'text-amg-yellow':'text-amg-teal'} shrink-0`}/>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact" className={`mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[13px] font-semibold ${featured?'bg-amg-yellow text-amg-ink hover:bg-amg-yellow-soft':'bg-amg-ink text-amg-cream hover:bg-amg-ink-2'} transition-colors`}>Get started <ArrowRight className="w-4 h-4"/></Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
