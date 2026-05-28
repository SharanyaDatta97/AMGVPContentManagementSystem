import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const TABS = [
  { id: 'about',    label: 'About Us' },
  { id: 'founder',  label: 'Founder Background' },
  { id: 'clients',  label: 'Clients' },
];

export default function AboutUs() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amg-teal">About Us</span>
          </nav>
          <div className="eyebrow mb-4">About Us</div>
          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-teal max-w-3xl">
            About AMG Venture Partners
          </h1>
        </div>
      </section>

      {/* ── STICKY TAB NAV ───────────────────────────────────────────── */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-sm border-b border-amg-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="shrink-0 px-5 py-4 text-[13px] font-medium text-amg-teal/65 hover:text-amg-teal border-b-2 border-transparent hover:border-amg-turquoise transition-all whitespace-nowrap"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">

        {/* ── ABOUT US ─────────────────────────────────────────────── */}
        <section id="about" className="scroll-mt-36 max-w-3xl">
          <div className="eyebrow mb-6">About us:</div>

          <div className="space-y-5 text-[15px] text-amg-teal/80 leading-relaxed">
            <p>
              AMG Venture Partners is a global business consulting and technology product firm operating
              across the North American and European markets. We partner with incubators, accelerators,
              and founders (pre-seed to Series A) globally to deliver high-quality investment-readiness
              content and fundraising services to tech startup CEOs. We also partner directly with startup
              CEOs on everything fundraising.
            </p>
            <p>
              AMG stands for Gaurav's family, where A, M, and G are the initials for the names of his
              father, mother, and himself.
            </p>
            <p>
              His parents' support and motivation have played a key role in his journey from being born
              in a small tier 3 town in India, pursuing education, working for 10+ years in corporates
              and Family office VC funds, and then taking the uncertain, risky entrepreneurial route to
              founding AMG Venture Partners.
            </p>
          </div>

          {/* Numbered list */}
          <div className="mt-8 space-y-6">
            {/* 1 */}
            <div>
              <p className="text-[15px] font-semibold text-amg-teal mb-3">
                1. Partner with government / corporate-funded tech startup incubators/accelerators for:
              </p>
              <div className="ml-6 space-y-2">
                {[
                  'New Program design, delivery, progress tracker templates, KPI reporting & documentation',
                  'Lead Mentor/EIR for startup CEOs',
                  'Review Panelist to screen startup applications',
                  'Prepare startups for fundraising rounds and pitching on Demo Days to angels & VCs',
                  'Workshops on all topics on "Investment Readiness" - cohort-based',
                  'Review technical grant applications for startups',
                  'Stakeholder Partnerships - CEOs, Investors, etc.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[14.5px] text-amg-teal/75">
                    <span className="shrink-0 font-medium text-amg-turquoise-2 w-5">
                      {String.fromCharCode(97 + i)}.
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 & 3 */}
           {/* 2 */}
<div>
  <p className="text-[15px] font-semibold text-amg-teal mb-3">
    2. Founder Services:
  </p>

  <div className="ml-6 space-y-2">
    {[
      'Pitch Deck Review',
      'Pitch Deck Creation',
      'Financial Model',
      'Valuation',
      'Investor Outreach',
      'Investment Readiness Review',
      'AMA Sessions',
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-3 text-[14.5px] text-amg-teal/75"
      >
        <span className="shrink-0 font-medium text-amg-turquoise-2 w-5">
          {String.fromCharCode(97 + i)}.
        </span>

        <span>{item}</span>
      </div>
    ))}
  </div>

  <p className="mt-5 text-[14.5px] text-amg-teal/75 leading-relaxed">
    We help startup founders prepare for fundraising with
    investor-ready materials, financial strategy, valuation
    guidance, and structured investor outreach support. Our
    goal is to help founders communicate their business with
    clarity, confidence, and institutional-level preparation.
  </p>
</div>

{/* 3 */}
{/* 3 */}
<div>
  <p className="text-[15px] font-semibold text-amg-teal mb-3">
    3. Investment Readiness Program (IRP):
  </p>

  <p className="text-[14.5px] text-amg-teal/75 leading-relaxed">
    Our Investment Readiness Program (IRP) is a structured
    founder-focused fundraising program designed to help
    startups become investor-ready through strategic
    guidance, financial clarity, fundraising preparation,
    and institutional-quality investor materials.
  </p>

  <div className="mt-5 ml-6 space-y-2">
    {[
      'Track 1 — DIY Investment Readiness',
      'Track 2 — Guided Fundraising Support',
      'Track 3 — End-to-End Fundraising Partnership',
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-3 text-[14.5px] text-amg-teal/75"
      >
        <span className="shrink-0 font-medium text-amg-turquoise-2 w-5">
          {String.fromCharCode(97 + i)}.
        </span>

        <span>{item}</span>
      </div>
    ))}
  </div>

  <a
    href="https://investorreadinessprogram.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-5 text-[14px] font-medium text-amg-turquoise-2 hover:text-amg-teal transition-colors"
  >
    Explore the Investment Readiness Program
    <ArrowRight className="w-4 h-4" />
  </a>
</div>
          </div>
        </section>

        {/* Divider */}
        <div className="hr-thin my-14" />

        {/* ── FOUNDER BACKGROUND ───────────────────────────────────── */}
        <section id="founder" className="scroll-mt-36 max-w-3xl">
          <div className="eyebrow mb-6">
            Founder background —{' '}
            <a
              href="https://www.linkedin.com/in/gauravbansalventurecapital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amg-turquoise-2 hover:text-amg-turquoise transition-colors normal-case tracking-normal font-semibold text-[12px]"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>

          <div className="space-y-5 text-[15px] text-amg-teal/80 leading-relaxed">
            <p>
              Gaurav is a tech investor and advisor with a portfolio of over 35+ VC investments across
              10 countries and experience in US$2Bn+ worth of IPOs, M&A, and private equity deals. He is
              the founder & CEO at AMG Venture Partners, where he manages his Family investment portfolio
              (50+ startups and member of 520+ global angel syndicates) and supports founders on
              investment readiness & fundraising. Additionally, Gaurav serves as an Expert in Residence
              and Mentor across startup programs in North America, Europe, and LATAM, and specializes in
              investment readiness, AI/ML strategy, and global expansion. Gaurav is also an anonymous
              Evaluator for various Government grant programs in North America and Europe.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="hr-thin my-14" />

        {/* ── CLIENTS ──────────────────────────────────────────────── */}
        <section id="clients" className="scroll-mt-36 max-w-3xl">
          <div className="eyebrow mb-6">Clients in the last 2 years:</div>

          <div className="space-y-4">
            {[
              'We have worked with 15+ accelerators in the US, Canada, LATAM, and EU markets, and delivered over 120 programs/workshops on topics in the fields of Artificial Intelligence, Venture Capital, and Angel Investing.',
              'We have worked with 125+ CEOs (building AI/ML tech products across fintech, supply chain, robotics, medical devices, digitalhealth, insurtech, semiconductors, etc.), on their investment readiness & fundraising aspects.',
              "All the above successes have been through the founders' own network and word-of-mouth expansion (through the founder's LinkedIn (17k followers)). Our new website is under construction, and we are working on a proper social media strategy.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-[14.5px] text-amg-teal/80 leading-relaxed">
                <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <CTASection />
      <Footer />
    </>
  );
}
