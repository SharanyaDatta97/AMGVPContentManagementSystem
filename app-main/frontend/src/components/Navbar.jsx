import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../mock';
import Logo from '../images/logo.png';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const location = useLocation();

  // ✅ Dropdown routes
  const founderServices = [
    { label: "Pitch Deck Review", to: "/services/pitch-deck-review" },
    { label: "Pitch Deck Creation", to: "/services/pitch-deck-creation" },
    { label: "Financial Model", to: "/services/financial-model" },
    { label: "Valuation", to: "/services/valuation" },
    { label: "Investor Outreach", to: "/services/investor-outreach" },
    { label: "Investment Readiness Review", to: "/services/investment-readiness" },
    { label: "AMA Sessions", to: "/services/ama-sessions" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileDropdown(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-100'
        : 'bg-white border-b border-transparent'
    }`}>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
  src={Logo}
  alt="AMG Venture Partners"
  className="w-9 h-9 object-contain"
/>
          <div className="leading-tight">
            <div className="font-serif font-bold text-[20px] tracking-tight text-amg-teal">AMG</div>
            <div className="text-[12px] tracking-[0.2em] uppercase font-bold text-amg-turquoise-2">
              Venture Partners
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9 overflow-visible">
          {NAV_LINKS.map((l) => {

            // ✅ Founder Services dropdown
            if (l.label === "Founder Services") {
              return (
                <div key={l.to} className="relative">

                  <div className="group inline-block">

                    {/* Main clickable link */}
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `text-[15px] font-medium flex items-center gap-1 ${
                          isActive
                            ? "text-amg-teal"
                            : "text-amg-ink/80 hover:text-amg-ink"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>

                    {/* Invisible hover bridge */}
                    <div className="absolute left-0 top-full h-3 w-full"></div>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg py-3 z-50 
                      opacity-0 translate-y-2 
                      group-hover:opacity-100 group-hover:translate-y-0 
                      transition-all duration-200 
                      pointer-events-none group-hover:pointer-events-auto"
                    >
                      {founderServices.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.to}
                          className={({ isActive }) =>
                            `block px-5 py-2 text-sm ${
                              isActive
                                ? "text-amg-teal bg-gray-100"
                                : "text-gray-600 hover:bg-gray-100"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>

                  </div>
                </div>
              );
            }

            // ✅ Normal nav links
            return (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[15px] font-medium link-under ${
                    isActive
                      ? "text-amg-teal"
                      : "text-amg-ink/80 hover:text-amg-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-[13px] py-2.5 px-4">
            Book a consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 border border-amg-line rounded-md text-amg-ink"
        >
          {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">

            {NAV_LINKS.map((l) => {

              if (l.label === "Founder Services") {
                return (
                  <div key={l.to}>

                    {/* Main route */}
                    <NavLink
                      to={l.to}
                      className="py-2 font-medium text-amg-ink"
                    >
                      {l.label}
                    </NavLink>

                    {/* Expand toggle */}
                    <div
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                      className="text-sm text-gray-500 cursor-pointer"
                    >
                      View Services
                    </div>

                    {mobileDropdown && (
                      <div className="pl-4 flex flex-col gap-2 mt-2">
                        {founderServices.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.to}
                            className="text-sm text-gray-600"
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `py-2 font-medium ${
                      isActive ? "text-amg-teal" : "text-amg-ink"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              );
            })}

            <Link to="/contact" className="btn-primary mt-2 justify-center">
              Book a consultation <ArrowRight className="w-4 h-4"/>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}