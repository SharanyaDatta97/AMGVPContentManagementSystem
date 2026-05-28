  import { Link } from 'react-router-dom';
  import { ArrowRight, Linkedin, Mail } from 'lucide-react';
  import { SERVICES } from '../mock';
  import Logo from '../images/download.png';
  const COMPANY_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Founder Services', to: '/founder-services' },
    // { label: 'Pricing', to: '/pricing' },
    // { label: 'Resources', to: '/resources' },
    { label: 'Contact', to: '/contact' },
  ];

  export default function Footer() {
    return (
      <footer className="bg-amg-teal-3 text-amg-cream/90 mt-20 border-t border-amg-teal-2">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-5">
             <Link
  to="/"
  className="inline-flex items-center gap-4 group"
>

  {/* Logo */}
  <img
    src={Logo}
    alt="AMG Venture Partners"
    className="w-[68px] h-[68px] object-contain shrink-0"
  />

  {/* Text */}
  <div className="flex flex-col justify-center">

    <div
      className="font-serif font-medium text-[34px] leading-none tracking-[-0.02em]"
      style={{ color: '#FBF7E9' }}
    >
      AMG 
    </div>

    <div className="mt-2 text-[11px] tracking-[0.28em] uppercase text-amg-yellow font-semibold">
     Venture Partners
    </div>

  </div>

</Link>

              <p className="text-[14.5px] text-amg-cream/65 leading-relaxed max-w-sm mt-7">
                Empowering founders across North America &amp; Europe to raise capital with clarity and conviction.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-7">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-amg-yellow hover:bg-amg-yellow-2 text-amg-teal font-semibold px-5 py-3 rounded-md text-[14px] transition-colors">
                  Book a call <ArrowRight className="w-4 h-4"/>
                </Link>
                <a href="https://www.linkedin.com/in/gauravbansalventurecapital/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-amg-cream/20 flex items-center justify-center hover:bg-amg-yellow hover:text-amg-teal hover:border-amg-yellow transition-colors">
                  <Linkedin className="w-4 h-4"/>
                </a>
                <a href="mailto:info@amgventurepartners.com" aria-label="Email" className="w-11 h-11 rounded-full border border-amg-cream/20 flex items-center justify-center hover:bg-amg-yellow hover:text-amg-teal hover:border-amg-yellow transition-colors">
                  <Mail className="w-4 h-4"/>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-4">
              <div className="text-[10.5px] tracking-[0.22em] uppercase text-amg-yellow font-semibold mb-5">Services</div>
              <ul className="space-y-3">
                {SERVICES.map(s => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="group inline-flex items-center gap-2 text-[15px] text-amg-cream/85 hover:text-amg-yellow transition-colors">
                      <span className="link-under">{s.introTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-3">
              <div className="text-[10.5px] tracking-[0.22em] uppercase text-amg-yellow font-semibold mb-5">Company</div>
              <ul className="space-y-3">
                {COMPANY_LINKS.map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="group inline-flex items-center gap-2 text-[15px] text-amg-cream/85 hover:text-amg-yellow transition-colors">
                      <span className="link-under">{l.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-7 border-t border-amg-cream/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="text-[12.5px] text-amg-cream/55">
              &copy; 2026 AMG Venture Partners. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-[12.5px]">
              <a href="#" className="text-amg-cream/55 hover:text-amg-yellow link-under">Privacy</a>
              <a href="#" className="text-amg-cream/55 hover:text-amg-yellow link-under">Terms</a>
              <a href="mailto:info@amgventurepartners.com" className="text-amg-cream/85 hover:text-amg-yellow link-under font-medium">
                info@amgventurepartners.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
