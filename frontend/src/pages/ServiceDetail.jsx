import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Plus, Minus, AlertTriangle, CheckSquare, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import GauravImage from '../images/GauravImage.jpg'
import { SERVICE_BY_SLUG, SERVICES, HOW_WE_WORK_INTRO } from '../mock';
import IndustriesGrid from '../components/IndustryGrid';
function Faq({ q, a, defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card-pro">
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between gap-6 p-6 lg:p-7 text-left">
        <span className="font-serif text-[18px] lg:text-[20px] font-medium text-amg-teal">{q}</span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${open?'bg-amg-teal text-amg-yellow':'bg-amg-cream-2 text-amg-teal'}`}>
          {open ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
        </span>
      </button>
      {open && (
        <div className="px-6 lg:px-7 pb-6 lg:pb-7 text-[14.5px] text-amg-teal/75 leading-relaxed border-t border-amg-line pt-5">{a}</div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const [pageLoaded, setPageLoaded] =
  useState(false);
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];
    useEffect(() => {
  setTimeout(() => {
    setPageLoaded(true);
  }, 100);
}, []);
  if (!service) return <Navigate to="/founder-services" replace />;

  const heroBg = service.accent === 'yellow' ? 'bg-soft-yellow' : service.accent === 'turquoise' ? 'bg-soft-turquoise' : 'bg-soft-teal';
  const accentDot = service.accent === 'yellow' ? 'bg-amg-yellow' : service.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3);


  return (
<div
  className={`transition-all duration-1000 ease-out ${
    pageLoaded
      ? 'opacity-100 translate-y-0 blur-0'
      : 'opacity-0 translate-y-8 blur-sm'
  }`}
>
      <Navbar />

      {/* HERO */}
      <section className={`relative overflow-hidden ${heroBg} border-b border-amg-line`}>
        <div className="absolute inset-0 grid-paper pointer-events-none opacity-40"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
          <Link to="/founder-services" className="inline-flex items-center gap-2 mb-8 text-[12.5px] font-semibold text-amg-teal/75 hover:text-amg-teal">
            <ArrowLeft className="w-4 h-4"/> Back to Founder Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-5 tag-pill">
                <span className={`dot ${accentDot}`}/> Founder Service
              </div>
              <h1 className="heading-display text-[44px] md:text-[72px] leading-[0.98] text-amg-teal">{service.title}</h1>
              <p className="mt-6 text-[18px] lg:text-[20px] text-amg-teal/85 max-w-2xl leading-relaxed">{service.tagline}</p>
              <p className="mt-5 text-[15px] text-amg-teal/75 max-w-2xl leading-relaxed">{service.why}</p>
            </div>
            <div className="lg:col-span-4">
              {/* <div className="flex flex-wrap gap-3">
                {/* <Link to="/contact" className="btn-yellow">Learn More<ArrowRight className="w-4 h-4"/></Link> */}
                {/* <a href="#pricing" className="btn-outline">View Pricing</a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      {service.whyPoints && service.whyPoints.length > 0 && (
        <section className="py-24 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-4">
                <span className="text-[15px]  tracking-[0.18em] text-black font-bold">
          -Why it Matters
        </span>

              </div>
              <div className="lg:col-span-8">
                <h2 className="font-serif text-[28px] md:text-[40px] font-medium leading-[1.18] text-amg-teal">
                  {service.whyHeading}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.whyPoints.map((p, i) => (
              <div
  key={i}
  className={`p-7 hover-lift rounded-[20px] bg-white border-[5px] ${
    i % 3 === 0
      ? 'border-amg-yellow'
      : i % 3 === 2
      ? 'border-amg-teal'
      : 'border-amg-turquoise'
  }`}
>
                  <div className="w-10 h-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center mb-5">
                    <AlertTriangle className="w-4 h-4 text-amg-teal"/>
                  </div>
                  <div className="font-serif text-[20px] font-medium text-amg-teal leading-tight">{p.title}</div>
                  <p className="mt-3 text-[14.5px] text-amg-teal/70 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
{slug === "pitch-deck-review" && (
  <section className="max-w-[1200px] mx-auto px-6 py-20">

    {/* ---------------- HAPPY FOUNDERS ---------------- */}
    <div className="border-[3px] border-amg-yellow/40 rounded-xl p-8 mb-16 text-center bg-white">
      <h2 className="font-serif text-[28px] font-semibold text-amg-teal">
        Happy Founders <span className="text-amg-turquoise">supported so far</span>
      </h2>

      <p className="text-sm text-amg-ink/70 mt-3 max-w-[700px] mx-auto">
        Worked with startups globally across sectors / business models including AI, SaaS,
        Medical devices, Life Sciences, Fintech, Proptech, Hardware / Robotics, Supply Chain,
        ClimateTech, Marketplaces, E-Commerce, and many more.
      </p>

      {/* Logos row */}
      {/* <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-70">
        {["GLMP.IT", "TRAVELO", "gaze.it", "mtvs.news", "energat0r"].map((item, i) => (
          <span key={i} className="text-sm font-medium text-amg-ink">
            {item}
          </span>
        ))}
      </div> */}
    </div>


    {/* ---------------- WHY WORK WITH ME ---------------- */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Image */}
      <div>
        <img
          src={GauravImage}
          alt="Founder"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="font-serif text-[30px] font-semibold text-amg-teal">
          Why <span className="text-orange-500">Work With Me?</span>
        </h2>

        <p className="text-sm text-amg-ink/70 mt-2 mb-6">
          Supported 250+ founders so far and counting...
        </p>

        <div className="space-y-5">

          {[
            {
              title: 'Ex-VC, Ex-Angel, Ex-Investment Banker',
              text: 'Engaged 35+ VC investments (mostly AI), made 50+ angel investments, closed US $2Bn+ funding deals, and worked as a technology consultant (AI).'
            },
            {
              title: 'Trusted Partner',
              text: 'Supported 250+ founders raising $300Mn+ so far. Also mentor / Screening Committee member in top startup programs globally.'
            },
            {
              title: 'VC-quality Feedback',
              text: 'Reviewed 11,000+ decks providing insights rooted in concrete slide-by-slide feedback and corrective action plan.'
            },
            {
              title: 'Sector, Stage, Business Model',
              text: 'No one-size-fits-all approach. You receive tailored guidance based on your sector, fundraising stage, and revenue model.'
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">

              {/* Icon */}
              <div className="w-5 h-5 mt-1 flex items-center justify-center rounded-full bg-amg-turquoise/10">
                <span className="text-amg-teal text-xs">✓</span>
              </div>

              <div>
                <p className="font-medium text-amg-teal">{item.title}</p>
                <p className="text-sm text-amg-ink/70">{item.text}</p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>

  </section>
)}
      {/* WHAT WE DELIVER */}
      {service.deliver && service.deliver.length > 0 && (
        <section className="py-24 px-6 lg:px-10 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-3xl mb-12">
               <span className="text-[15px]  tracking-[0.18em] text-black font-bold">
          -What Founder's Gain
        </span>
              <h2 className="heading-display text-[36px] md:text-[48px] text-amg-teal leading-tight">{service.deliverHeading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliver.map((d, i) => {
                const bar = i%3===0?'bg-amg-yellow':i%3===1?'bg-amg-turquoise':'bg-amg-teal';
                return (
                  <div key={i} className="card-pro shadow-soft hover-lift overflow-hidden">
                    <div className={`h-1 ${bar}`}/>
                    <div className="p-7">
                      <div className="font-serif text-[20px] font-medium text-amg-teal leading-tight">{d.title}</div>
                      <p className="mt-2.5 text-[14px] text-amg-teal/75 leading-relaxed">{d.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* HOW WE WORK TOGETHER */}
      {service.process && service.process.length > 0 && (
        <section className="py-24 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Left: heading */}
              <div className="lg:col-span-4">
                 <span className="text-[15px]  tracking-[0.18em] text-black font-bold">
         -{HOW_WE_WORK_INTRO.eyebrow}
        </span>
                <h2 className="font-serif text-[36px] md:text-[44px] font-medium text-amg-teal leading-tight tracking-tight">
                  How We Work Together
                </h2>
                <p className="mt-5 text-[15px] text-amg-teal/65 leading-relaxed">
                  {HOW_WE_WORK_INTRO.description}
                </p>
              </div>

              {/* Right: vertical timeline */}
              <div className="lg:col-span-8">
                <div className="relative pl-2">
                  {/* Connecting line */}
                  <div
                    className="absolute left-[19px] top-5 w-px bg-amg-line"
                    style={{ height: 'calc(100% - 40px)' }}
                    aria-hidden="true"
                  />
                  <div className="space-y-10">
                    {service.process.map((p, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        {/* Circle */}
                        <div className="shrink-0 w-10 h-10 rounded-full bg-amg-turquoise-bg border-2 border-amg-line text-amg-teal font-semibold text-[14px] flex items-center justify-center z-10 relative">
                          {i + 1}
                        </div>
                        {/* Content */}
                        <div className="flex-1 pt-1.5">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-semibold text-[16px] text-amg-teal">{p.step}</span>
                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                              {p.day}
                            </span>
                          </div>
                          <p className="text-[14px] text-amg-teal/65 leading-relaxed mb-2">
                            {p.text}
                          </p>
                          {p.output && (
                            <p className="text-[13px] font-medium text-amg-turquoise-2">
                              → Output: {p.output}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* WHAT'S INCLUDED */}
    {/* WHAT'S INCLUDED */}
{service.whatsIncluded && service.whatsIncluded.length > 0 && (
  <section className="py-20 px-6 lg:px-10 border-t border-amg-line">
    <div className="max-w-[1280px] mx-auto">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
        <div>
           <span className="text-[15px]  tracking-[0.18em] text-black font-bold">
          -What you Recieve
        </span>
          <h2 className="font-serif text-[32px] md:text-[42px] font-medium text-amg-teal leading-tight">
            Everything You Receive
          </h2>
        </div>

        <Link to="/contact" className="btn-yellow shrink-0">
          Get Started <ArrowRight className="w-4 h-4"/>
        </Link>
      </div>

      {/* Content Box */}
      <div className="bg-[#F7F8F8] rounded-2xl p-6 md:p-8">

        <div className="grid md:grid-cols-2 gap-x-10">

          {[0, 1].map((col) => (
            <div key={col}>
              {service.whatsIncluded
                .filter((_, i) => i % 2 === col)
                .map((item, i) => (
                  <div key={i} className="py-4 border-b last:border-b-0 border-amg-line">

                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="w-5 h-5 rounded-full bg-amg-turquoise-2 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-[10px]">✓</span>
                      </div>

                      {/* Text */}
                      <span className="text-[14px] text-amg-teal/80 leading-snug">
                        {item}
                      </span>
                    </div>

                  </div>
                ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  </section>
)}
   {slug === "financial-model" && (
  <section className="max-w-[1200px] mx-auto px-6 py-20">

    {/* ---------------- CLIENTS ---------------- */}
    <div className="text-center mb-14">
      <h2 className="font-serif text-[34px] font-semibold text-amg-teal">
        Who Are <span className="text-amg-turquoise">Our Clients?</span>
      </h2>
      <p className="text-amg-ink/70 mt-2 text-sm">
        We work with Pre-seed to Series A startups
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-20">
      
      {[
        {
          title: "Bootstrapped Startups",
          desc: "We work with bootstrapped founders who have never raised capital by mapping a solid business plan and capital structure..."
        },
        {
          title: "VC-Backed Startups",
          desc: "We work with startups who have raised their F&F or angel/pre-seed round and want to raise their next round..."
        },
        {
          title: "Boards / Key Stakeholders",
          desc: "We work with founders at seed to Series A who want to map out their business plan in numbers..."
        }
      ].map((item, i) => (
        <div key={i} className="card-pro p-6">
          <h3 className="font-serif text-[18px] font-medium text-amg-teal mb-3">
            {item.title}
          </h3>
          <p className="text-[14px] text-amg-teal/75 mb-4 leading-relaxed">
            {item.desc}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-amg-teal"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ))}

    </div>

    {/* ---------------- INDUSTRIES ---------------- */}
  {slug === "financial-model" && (
  <section className="max-w-[1200px] mx-auto px-6 py-20">

    {/* ---------------- CLIENTS ---------------- */}
    <div className="text-center mb-14">
      <h2 className="font-serif text-[34px] font-semibold text-amg-teal">
        Who Are <span className="text-amg-turquoise">Our Clients?</span>
      </h2>
      <p className="text-amg-ink/70 mt-2 text-sm">
        We work with Pre-seed to Series A startups
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-20">
      {[
        {
          title: "Bootstrapped Startups",
          desc: "We work with bootstrapped founders who have never raised capital by mapping a solid business plan and capital structure..."
        },
        {
          title: "VC-Backed Startups",
          desc: "We work with startups who have raised their F&F or angel/pre-seed round and want to raise their next round..."
        },
        {
          title: "Boards / Key Stakeholders",
          desc: "We work with founders at seed to Series A who want to map out their business plan in numbers..."
        }
      ].map((item, i) => (
        <div key={i} className="card-pro p-6">
          <h3 className="font-serif text-[18px] font-medium text-amg-teal mb-3">
            {item.title}
          </h3>
          <p className="text-[14px] text-amg-teal/75 mb-4 leading-relaxed">
            {item.desc}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-amg-teal"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>

    {/* ---------------- INDUSTRIES ---------------- */}
     <IndustriesGrid 
      title="Industries"
      highlight="We Serve"
      highlightColor="text-amg-turquoise"
    />
  </section>
)}

  </section>
)}
      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 lg:px-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3 mx-auto">{service.pricingNote?.eyebrow || 'Pricing'}</div>
            <h2 className="font-serif text-[32px] md:text-[44px] font-medium text-amg-teal leading-tight">
              {service.pricingNote?.title || 'Engagement Structure'}
            </h2>
            <p className="mt-4 text-[15px] text-amg-teal/65 max-w-xl mx-auto leading-relaxed">
              {service.pricingNote?.description}
            </p>
          </div>

          {/* 3-tier pricing cards */}
        {  slug === "financial-model" || slug === "investor-outreach" ? (
  <div className="max-w-[520px] mx-auto">
    <div className="card-dark rounded-2xl p-10 text-center">
      <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-amg-yellow mb-4">
        Custom Pricing
      </div>

      <h3 className="font-serif text-[42px] leading-none text-white mb-4">
        Contact for Quote
      </h3>

      {slug=== "financial-model" ? (
        <p className="text-[15px] text-white/70 leading-relaxed mb-8">
          Financial model engagements are tailored based on business complexity,
          forecasting depth, operating model, and turnaround requirements.
        </p>
      ) : <p className="text-[15px] text-white/70 leading-relaxed mb-8">
  Investor outreach engagements are tailored based on fundraising stage,
  target investor profile, outreach scope, campaign complexity, and level
  of ongoing support required.
</p>}
      
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 bg-amg-yellow hover:bg-amg-yellow-2 text-amg-teal font-semibold px-6 py-3 rounded-lg text-[14px] transition-colors"
      >
        Contact Our Team

        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
) :
          service.pricing && service.pricing.length > 0 && service.pricing[0].features ? (
        <div
  className={`grid gap-6 ${
    service.pricing.length === 1
      ? 'grid-cols-1 place-items-center'
      : service.pricing.length === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3'
  }`}
>
              {service.pricing.map((plan, i) => (
                <div
                  key={i}
             className={`relative w-full max-w-[520px] rounded-xl overflow-hidden flex flex-col ${
                    plan.popular
                      ? 'bg-amg-teal text-white shadow-soft-lg ring-2 ring-amg-teal'
                      : 'bg-white border border-amg-line shadow-soft'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-amg-yellow text-amg-teal">
                      Most Popular
                    </div>
                  )}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className={`text-[11px] tracking-[0.2em] uppercase font-semibold mb-3 ${plan.popular ? 'text-amg-yellow' : 'text-amg-turquoise-2'}`}>
                      {plan.tier}
                    </div>
                    <div className={`font-serif text-[44px] font-medium leading-none mb-3 ${plan.popular ? 'text-white' : 'text-amg-teal'}`}>
                      {plan.price}
                    </div>
                    <p className={`text-[13.5px] leading-relaxed mb-6 ${plan.popular ? 'text-white/75' : 'text-amg-teal/60'}`}>
                      {plan.sub}
                    </p>
                    <div className={`h-px mb-6 ${plan.popular ? 'bg-white/20' : 'bg-amg-line'}`}/>
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-amg-yellow' : 'text-amg-turquoise-2'}`}/>
                          <span className={`text-[13.5px] leading-snug ${plan.popular ? 'text-white/85' : 'text-amg-teal/75'}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`mt-8 flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg text-[14px] transition-colors ${
                        plan.popular
                          ? 'bg-amg-yellow text-amg-teal hover:bg-amg-yellow-2'
                          : 'bg-amg-teal text-white hover:bg-amg-teal/90'
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback: simple 2-col cards for services without 3-tier pricing */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {service.pricing?.map((plan, i) => (
                <div key={i} className={`rounded-xl p-7 border ${i === 1 ? 'bg-amg-teal border-amg-teal text-white' : 'bg-white border-amg-line'}`}>
                  <div className={`text-[11px] tracking-[0.2em] uppercase font-semibold mb-2 ${i === 1 ? 'text-amg-yellow' : 'text-amg-turquoise-2'}`}>{plan.tier}</div>
                  <div className={`font-serif text-[40px] font-medium leading-none mb-2 ${i === 1 ? 'text-white' : 'text-amg-teal'}`}>{plan.price}</div>
                  <div className={`text-[13px] ${i === 1 ? 'text-white/70' : 'text-amg-teal/60'}`}>{plan.sub}</div>
                  <Link to="/contact" className={`mt-6 inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-lg text-[13.5px] transition-colors ${i === 1 ? 'bg-amg-yellow text-amg-teal' : 'bg-amg-teal text-white'}`}>
                    Get Started <ArrowRight className="w-4 h-4"/>
                  </Link>
                </div>
              ))}
            </div>
          )}
        
        
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 px-6 lg:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="eyebrow mb-4">FAQs</div>
            <h2 className="heading-display text-[36px] md:text-[48px] text-amg-teal mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((f, i) => (<Faq key={i} q={f.q} a={f.a} defaultOpen={i===0} />))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      {service.finalCta && (
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden card-dark">
              <div className="absolute inset-0 grid-paper pointer-events-none opacity-50"/>
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 lg:p-16 items-center">
                <div className="lg:col-span-8">
                  <h2 className="heading-display text-[36px] md:text-[52px] text-amg-cream leading-tight">{service.finalCta.title}</h2>
                  <p className="mt-5 text-amg-cream/70 max-w-xl text-[15.5px] leading-relaxed">{service.finalCta.description}</p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link to={service.finalCta.cta.to} className="inline-flex items-center gap-2 bg-amg-yellow hover:bg-amg-yellow-2 text-amg-teal font-semibold px-5 py-3 rounded-md text-[14px] transition-colors">
                    {service.finalCta.cta.label} <ArrowRight className="w-4 h-4"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="py-24 px-6 lg:px-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <div className="eyebrow mb-4">Continue Exploring</div>
              <h2 className="heading-display text-[32px] md:text-[40px] text-amg-teal">Explore Other Founder Capabilities</h2>
            </div>
            <Link to="/founder-services" className="btn-outline">All Services <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map(s => {
              const bar = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card-pro shadow-soft hover-lift block overflow-hidden">
                  <div className={`h-1 ${bar}`}/>
                  <div className="p-7">
                    <div className="font-serif text-[22px] font-medium leading-tight text-amg-teal">{s.title}</div>
                    <p className="mt-2 text-[14px] text-amg-teal/70 leading-relaxed">{s.tagline}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-amg-turquoise-2">Learn more <ArrowRight className="w-4 h-4"/></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
</div>
  );
}