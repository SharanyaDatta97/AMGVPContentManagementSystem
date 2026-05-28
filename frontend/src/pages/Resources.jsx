import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { ARTICLES, FEATURED_DOWNLOADS } from '../mock';

export default function Resources() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-teal">Home</Link>
            <span>/</span>
            <span className="text-amg-teal">Resources</span>
          </nav>
          <div className="eyebrow mb-4">Resources</div>
          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-teal max-w-4xl">Featured Resources</h1>
        </div>
      </section>

      {/* Featured downloads */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_DOWNLOADS.map((d, i) => {
              const tone = d.accent === 'yellow' ? 'bg-amg-yellow-bg' : 'bg-amg-turquoise-bg';
              return (
                <div key={i} className="card-pro shadow-soft hover-lift overflow-hidden">
                  <div className={`h-1 ${d.accent==='yellow'?'bg-amg-yellow':'bg-amg-turquoise'}`}/>
                  <div className="p-7 flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-md ${tone} border border-amg-line flex items-center justify-center shrink-0`}>
                      <Download className="w-5 h-5 text-amg-teal"/>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-amg-turquoise-2 mb-1">{d.label}</div>
                      <div className="font-serif text-[22px] font-medium text-amg-teal">{d.title}</div>
                      {d.route ? (
                        <Link to={"/resources"+d.route} className="hover:text-amg-teal">
                          <button className="mt-5 inline-flex items-center gap-2 font-semibold text-[13px] text-amg-turquoise-2 link-under">
                            {d.cta} <ArrowRight className="w-4 h-4"/>
                          </button>
                        </Link>
                      ):(<button className="mt-5 inline-flex items-center gap-2 font-semibold text-[13px] text-amg-turquoise-2 link-under">
                            {d.cta} <ArrowRight className="w-4 h-4"/>
                          </button>)
                          }

                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-16 px-6 lg:px-10 border-t border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <div className="eyebrow mb-3">Featured Articles</div>
              <h2 className="heading-display text-[32px] md:text-[44px] text-amg-teal">All Resources</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map(a => {
              const accentBar = a.accent==='yellow'?'bg-amg-yellow':a.accent==='turquoise'?'bg-amg-turquoise':'bg-amg-teal';
              return (
                <article key={a.slug} className="card-pro hover-lift overflow-hidden">
                  <div className={`h-1 ${accentBar}`}/>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="tag-pill"><span className={`dot ${accentBar}`}/>{a.category}</span>
                      <span className="text-[11px] text-amg-mute font-medium">{a.readTime}</span>
                    </div>
                    <h3 className="font-serif text-[21px] font-medium text-amg-teal leading-snug">{a.title}</h3>
                    <p className="mt-3 text-[14px] text-amg-teal/70 leading-relaxed">{a.excerpt}</p>
                    <div className="hr-thin my-6"/>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-amg-mute">{a.date}</span>
                      <span className="text-[13px] font-semibold text-amg-turquoise-2 inline-flex items-center gap-1">Read article <ArrowRight className="w-4 h-4"/></span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
