import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2, Target, Globe, Linkedin, BadgeCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import GauravImage from '../images/GauravImage.jpg';
import { HERO, SERVICE_PILLARS, SERVICES, FOUNDER_SERVICES_INTRO, WHO_WE_ARE } from '../mock';

const ICONS = {
  'pitch-deck-review': FileText,
  'pitch-deck-creation': Sparkles,
  'financial-model': Calculator,
  'valuation': TrendingUp,
  'investor-outreach': Users,
  'investment-readiness': ShieldCheck,
  'ama-sessions': MessageCircle,
};

const ECOSYSTEM_FEATURES = [
  {
    icon: Target,
    iconBg: 'bg-amg-turquoise-bg',
    iconColor: 'text-amg-turquoise-2',
    title: 'Portfolio Assessment',
    desc: 'Evaluate investment readiness across your entire portfolio cohort with structured diagnostics.',
  },
  {
    icon: Users,
    iconBg: 'bg-amg-turquoise-bg',
    iconColor: 'text-amg-turquoise-2',
    title: 'Workshop Programs',
    desc: 'Interactive fundraising and investor readiness workshops tailored for your cohort.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-amg-yellow-bg',
    iconColor: 'text-amg-teal',
    title: 'Demo Day Preparation',
    desc: 'End-to-end preparation support to ensure your founders shine in front of investors.',
  },
  {
    icon: Globe,
    iconBg: 'bg-amg-teal-bg',
    iconColor: 'text-amg-teal',
    title: 'Investor Network Access',
    desc: 'Leverage our curated investor network to facilitate warm introductions for your portfolio.',
  },
];

const STATS = [
  { value: '200+',          label: 'Founders Supported',     color: 'text-amg-turquoise-2' },
  { value: '$500M+',        label: 'Capital Facilitated',    color: 'text-amg-turquoise-2' },
  { value: 'Pre-Seed → A', label: 'Stage Coverage',         color: 'text-green-600' },
  { value: '2 Continents',  label: 'North America & Europe', color: 'text-amg-teal' },
];

const HOW_WE_WORK_STEPS = [
  {
    step: 'Intake & Context Setting',
    day: 'Day 1',
    text: 'You share your deck along with context: your stage, target investors, geography, fundraising goal, and any specific areas of concern.',
    output: 'Context brief reviewed by our team',
  },
  {
    step: 'Deep Deck Analysis',
    day: 'Day 2–4',
    text: 'We conduct a thorough review of your deck using a structured investor evaluation framework — narrative, market, traction, team, financials, and ask.',
    output: 'Internal scoring and annotation across all slides',
  },
  {
    step: 'Written Feedback Report',
    day: 'Day 5',
    text: 'You receive a detailed written report: slide-by-slide annotations, an executive summary of key strengths and critical gaps, and prioritized improvement recommendations.',
    output: 'Written feedback report (PDF)',
  },
  {
    step: 'Live Debrief Session',
    day: 'Day 6',
    text: 'We walk through the report together in a 60-minute call — discussing each finding, answering your questions, and mapping a revision roadmap.',
    output: 'Clear prioritized action plan for your revision',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 fade-in">
              <div className="flex items-center gap-3 flex-wrap mb-7">
                {HERO.eyebrowTags.map((t,i) => (
                  <span key={t} className="tag-pill">
                    <span className={`dot ${i===0?'bg-amg-yellow':i===1?'bg-amg-turquoise':'bg-amg-teal'}`}/>{t}
                  </span>
                ))}
              </div>
              <h1 className="heading-display text-[52px] sm:text-[68px] lg:text-[88px] text-amg-teal">
                Raise Capital With <em>Conviction</em>.
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-relaxed text-amg-teal/75 max-w-2xl">
                {HERO.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link to={HERO.primaryCta.to} className="btn-yellow">{HERO.primaryCta.label} <ArrowRight className="w-4 h-4"/></Link>
                <Link to={HERO.secondaryCta.to} className="btn-outline">{HERO.secondaryCta.label}</Link>
              </div>
            </div>

            {/* Pillars stack */}
            {/* <div className="lg:col-span-4 fade-in">
              <div className="grid grid-cols-2 gap-3">
                {SERVICE_PILLARS.map((p,i) => {
                  const tone = p.accent === 'yellow' ? 'bg-amg-yellow-bg border-amg-yellow' : p.accent === 'turquoise' ? 'bg-amg-turquoise-bg border-amg-turquoise' : 'bg-amg-teal-bg border-amg-teal';
                  return (
                    <div key={i} className={`rounded-lg p-5 border ${tone}`}>
                      <div className="font-serif text-[20px] font-medium text-amg-teal leading-tight">{p.title}</div>
                      <div className="mt-2 text-[12.5px] text-amg-teal/75">{p.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </section>
   {/* INVESTMENT READINESS PROGRAM */}
<section className="px-6 lg:px-10 pb-10 bg-white">
  <div className="max-w-[1280px] mx-auto">

    <div className="relative overflow-hidden rounded-[32px] border border-amg-line bg-gradient-to-br from-[#f8fafc] to-[#eef4ff] shadow-soft">

      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-amg-turquoise/10 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-amg-yellow/10 rounded-full blur-3xl pointer-events-none"/>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 lg:p-14">

        {/* LEFT */}
        <div className="lg:col-span-8">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amg-line bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-amg-turquoise"/>
            <span className="text-[12px] tracking-[0.16em] uppercase font-semibold text-amg-teal/70">
              Investment Readiness Program
            </span>
          </div>

          <h2 className="font-serif text-[38px] md:text-[54px] leading-[1.05] text-amg-teal max-w-3xl">
            Helping Founders Become <em>Investor-Ready.</em>
          </h2>

          <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-amg-teal/75 max-w-2xl">
            Our Investment Readiness Program (IRP) helps startup founders refine
            their pitch, strengthen financial narratives, prepare fundraising
            materials, and confidently engage with investors.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">

            {[
              'Pitch Deck Strategy',
              'Financial Modeling',
              'Fundraising Support',
              'Investor Outreach',
              'Demo Day Preparation'
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-amg-line text-[13px] font-medium text-amg-teal/75"
              >
                {item}
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4">

          <div className="bg-white border border-amg-line rounded-2xl p-7 shadow-soft">

            <div className="text-[13px] uppercase tracking-[0.18em] text-amg-teal/50 font-semibold">
              Learn More
            </div>

            <div className="mt-3 font-serif text-[28px] leading-tight text-amg-teal">
              Explore the Full IRP Experience
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-amg-teal/65">
              Discover the complete program structure, founder resources,
              workshops, and fundraising preparation framework.
            </p>

            <a
              href="https://investorreadinessprogram.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 w-full bg-amg-turquoise-2 hover:bg-amg-teal text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300"
            >
              Explore IRP
              <ArrowUpRight className="w-4 h-4"/>
            </a>

          </div>

        </div>

      </div>
    </div>

  </div>
</section>


      {/* WHO WE ARE */}
  <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-gray-50">
  <div className="max-w-[1000px] mx-auto">

    {/* Eyebrow */}
    <div className="mb-6">
      <span className="tag-pill inline-flex">
        <span className="dot bg-amg-turquoise"/>Who We Are
      </span>
    </div>

    {/* Heading */}
    <h2 className="heading-display text-[42px] md:text-[64px] text-amg-teal leading-[1.02]">
      Practical Insight.<br/><em>Real Results.</em>
    </h2>

    {/* Highlight Card */}
    <div className="mt-10 bg-white border border-amg-line rounded-2xl p-8 shadow-soft">

      <p className="text-[16px] text-amg-teal/80 leading-relaxed">
        AMG Venture Partners is a <strong className="text-amg-teal">global business consulting and technology product firm</strong> operating across the <strong className="text-amg-teal">North American and European markets</strong>.
      </p>

      <p className="mt-5 text-[16px] text-amg-teal/80 leading-relaxed">
        We partner with incubators and accelerators globally to deliver high-quality <strong className="text-amg-teal">investment-readiness content and fundraising services</strong> to tech startup CEOs.
      </p>

      <p className="mt-5 text-[16px] text-amg-teal/80 leading-relaxed">
        We also partner directly with <strong className="text-amg-teal">startup CEOs</strong> on everything fundraising — from strategy and positioning to execution and investor engagement.
      </p>

    </div>

    {/* Bullet Points */}
    <div className="mt-12 grid md:grid-cols-3 gap-6">

      {[
        'Hands-on, founder-first methodology',
        'Deep North American & European investor networks',
        'Stage-appropriate advice from pre-seed to Series A'
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-4 p-5 bg-white border border-amg-line rounded-xl shadow-soft-sm">

          <div className="w-8 h-8 rounded-full bg-amg-turquoise-bg flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-amg-turquoise-2"/>
          </div>

          <span className="text-[14.5px] text-amg-teal/80 leading-snug">
            {item}
          </span>

        </div>
      ))}

    </div>

  </div>
</section>
     <section className="py-6 px-6 lg:px-10 border-t border-amg-line bg-gray-50">
        {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border border-amg-line rounded-2xl overflow-hidden bg-white shadow-soft">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`px-8 py-10 text-center ${i < STATS.length - 1 ? 'border-r border-amg-line' : ''}`}
              >
                <div className={`font-serif text-[34px] md:text-[42px] font-medium leading-none ${s.color}`}>
                  {s.value}
                </div>
                <div className="mt-2.5 text-[13px] text-amg-teal/60 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        
     </section>
      
      {/* FOUNDER SERVICES */}
      {/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-amg-cream-2/40"> */}
      <section className="py-24 px-6 lg:px-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">{FOUNDER_SERVICES_INTRO.eyebrow}</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-teal">{FOUNDER_SERVICES_INTRO.title}</h2>
            </div>
            <div className="lg:col-span-5 flex lg:items-end">
              <p className="text-[15.5px] text-amg-teal/75 leading-relaxed">{FOUNDER_SERVICES_INTRO.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.slug] || Briefcase;
              const accent = s.accent === 'yellow' ? { bar:'bg-amg-yellow', iconBg:'bg-amg-yellow-bg', dot:'bg-amg-yellow' } : s.accent === 'turquoise' ? { bar:'bg-amg-turquoise', iconBg:'bg-amg-turquoise-bg', dot:'bg-amg-turquoise' } : { bar:'bg-amg-teal', iconBg:'bg-amg-teal-bg', dot:'bg-amg-teal' };
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
                    <div className="font-serif text-[24px] font-medium text-amg-teal leading-tight">{s.title}</div>
                    <p className="mt-2.5 text-[14px] text-amg-teal/70 leading-relaxed">{s.tagline}</p>
                    <div className="hr-thin my-6"/>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-amg-turquoise-2">View service</span>
                      <ArrowUpRight className="w-4 h-4 text-amg-turquoise-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
{/* ── ACCELERATORS & INCUBATORS ────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="tag-pill inline-flex mb-5">
              <span className="dot bg-amg-turquoise"/>For Ecosystems
            </span>
            <h2 className="font-serif text-[44px] md:text-[64px] font-medium text-amg-teal leading-tight tracking-tight">
              Accelerators &amp; Incubators
            </h2>
            <p className="mt-4 text-[16px] text-amg-teal/60 max-w-lg mx-auto leading-relaxed">
              We partner with innovation programs to elevate the fundraising capability of their entire cohort at scale.
            </p>
          </div>
</div>

          {/* 4-column feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOSYSTEM_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="card-pro shadow-soft p-7 hover-lift bg-white">
                  <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-5 h-5 ${f.iconColor}`}/>
                  </div>
                  <div className="font-semibold text-[15.5px] text-amg-teal mb-2 leading-snug">{f.title}</div>
                  <p className="text-[13.5px] text-amg-teal/60 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

        
      </section>

      {/* ── MEET THE FOUNDER ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-[#f0f2f8]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: photo with floating badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-[520px] mx-auto shadow-soft-lg">
                <img
                  src={GauravImage}
                  alt="Gaurav Bansal — Founder & CEO, AMG Venture Partners"
                  className="w-full h-full object-cover object-top"
                />

          

                {/* Bottom name card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[17px] text-amg-teal">Gaurav Bansal</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amg-teal/70 border border-amg-line rounded-full px-2.5 py-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-amg-yellow"/> Verified
                    </span>
                  </div>
                  <div className="text-[12.5px] text-amg-teal/60 mt-1 mb-2">Founder & CEO, AMG Venture Partners</div>
                  <a
                    href="https://www.linkedin.com/in/gauravbansalventurecapital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#0077b5] hover:bg-[#005f91] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white fill-white"/>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: content */}
         <div className="lg:col-span-7">
  <div className="tag-pill inline-flex mb-6">
    <span className="dot bg-amg-turquoise"/>Meet the Founder
  </div>

  <h2 className="font-serif text-[38px] md:text-[52px] font-medium text-amg-teal leading-tight tracking-tight">
    I am Gaurav Bansal, <span className="text-amg-turquoise-2">a VC turned Founder</span>
  </h2>

  <ul className="mt-8 space-y-4 text-[15.5px] text-amg-teal/80 leading-relaxed max-w-xl">
    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span><strong className="text-amg-turquoise-2">14+ years</strong> of experience in venture capital, angel investing, investment banking, and technology consulting</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span>Member of <strong className="text-amg-turquoise-2">450+</strong> global angel investor syndicates</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span><strong className="text-amg-turquoise-2">50+</strong> tech startup investments</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span><strong className="text-amg-turquoise-2">35+</strong> venture capital portfolio companies</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span>Investment banking deals worth <strong className="text-amg-turquoise-2">$2Bn+</strong></span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span>Reviewed <strong className="text-amg-turquoise-2">20k+</strong> pitch decks & financial models; conducted <strong className="text-amg-turquoise-2">100+</strong> due diligence processes</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
      <span><strong className="text-amg-turquoise-2">1000+</strong> mentor hours with founders globally</span>
    </li>
  </ul>

  <a
    href="https://www.linkedin.com/in/gauravbansalventurecapital/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 inline-flex items-center gap-2 bg-amg-turquoise-2 hover:bg-amg-teal text-white font-semibold px-6 py-3 rounded-full text-[14px] transition-colors"
  >
    <Linkedin className="w-4 h-4"/>
    View LinkedIn Profile
  </a>
</div>

          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}