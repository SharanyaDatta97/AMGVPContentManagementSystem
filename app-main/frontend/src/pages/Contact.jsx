import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', stage: 'Pre-Seed', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.');
      return;
    }
    const stored = JSON.parse(localStorage.getItem('amg_contacts') || '[]');
    stored.push({ ...form, ts: new Date().toISOString() });
    localStorage.setItem('amg_contacts', JSON.stringify(stored));
    toast.success('Thanks! We will be in touch within one business day.');
    setForm({ name: '', email: '', company: '', stage: 'Pre-Seed', message: '' });
  };

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-ink">Home</Link>
            <span>/</span>
            <span className="text-amg-ink">Contact</span>
          </nav>
          <div className="eyebrow mb-4">Get in touch</div>
          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-ink max-w-4xl">Let&rsquo;s start the <em>conversation</em>.</h1>
          <p className="mt-7 text-[17px] text-amg-ink/70 max-w-2xl leading-relaxed">
            Whether you&rsquo;re a founder ready to raise, an accelerator looking to support your cohort, or simply exploring how we can help — we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-7 card-pro shadow-soft-lg p-8 lg:p-10">
            <div className="eyebrow mb-2">Founder inquiry</div>
            <h2 className="font-serif text-[28px] font-medium text-amg-ink mb-7">Tell us about your raise.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Name *" value={form.name} onChange={(v)=>setForm({...form, name:v})} placeholder="Your full name"/>
              <Field label="Email *" value={form.email} onChange={(v)=>setForm({...form, email:v})} placeholder="your@email.com" type="email"/>
              <Field label="Company" value={form.company} onChange={(v)=>setForm({...form, company:v})} placeholder="Company name"/>
              <div>
                <label className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-amg-mute mb-2">Funding Stage</label>
                <select value={form.stage} onChange={(e)=>setForm({...form, stage:e.target.value})} className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] text-amg-ink focus:border-amg-teal">
                  {['Pre-Seed','Seed','Series A','Series B','Accelerator','Other'].map(s=> <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-amg-mute mb-2">Message *</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows={6} placeholder="What stage are you at, and what do you need help with?" className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] focus:border-amg-teal resize-none"/>
            </div>
            <button type="submit" className="btn-primary mt-7">Send message <ArrowRight className="w-4 h-4"/></button>
            <div className="mt-5 flex items-center gap-2 text-[12px] text-amg-mute">
              <ShieldCheck className="w-3.5 h-3.5"/> All inquiries protected under mutual NDA on request.
            </div>
          </form>

          <aside className="lg:col-span-5 space-y-5">
            <div className="card-dark p-7">
              <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-4">Direct contact</div>
              <div className="space-y-4 text-[14px] text-amg-cream/85">
                <div className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-amg-yellow"/><a href="mailto:hello@amgventures.co" className="link-under">hello@amgventures.co</a></div>
                <div className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-amg-yellow"/><span>+1 (415) 555-0142</span></div>
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-amg-yellow"/><span>San Francisco · London · Toronto</span></div>
                <div className="flex items-start gap-3"><Linkedin className="w-4 h-4 mt-0.5 text-amg-yellow"/><a href="https://www.linkedin.com/in/gauravbansalventurecapital/" target="_blank" rel="noreferrer" className="link-under">Connect on LinkedIn</a></div>
              </div>
            </div>

            <div className="card-pro shadow-soft p-7">
              <div className="text-[11px] tracking-[0.18em] uppercase text-amg-teal font-semibold mb-3">Office hours</div>
              <div className="font-serif text-[22px] font-medium text-amg-ink leading-tight">Mon – Fri · 9am – 6pm PT</div>
              <p className="mt-2 text-[13.5px] text-amg-ink/65">All new founder engagements start with a complimentary 30-minute strategy call.</p>
            </div>

            <div className="card-pro shadow-soft p-7">
              <div className="text-[11px] tracking-[0.18em] uppercase text-amg-teal font-semibold mb-3">For accelerators</div>
              <p className="text-[13.5px] text-amg-ink/70 leading-relaxed">Looking to support your cohort with mentorship, EIR services, or demo day prep? We work with 15+ programs across NA &amp; Europe.</p>
              <a href="mailto:partners@amgventures.co" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-amg-teal link-under">Email partnerships <ArrowRight className="w-4 h-4"/></a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({ label, value, onChange, placeholder, type='text' }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-amg-mute mb-2">{label}</label>
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] text-amg-ink focus:border-amg-teal"/>
    </div>
  );
}
