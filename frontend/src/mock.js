// Content sourced from the AMG Venture Partners PDF brief.

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Founder Services', to: '/founder-services' },
 // { label: 'Pricing', to: '/pricing' },
  // { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
  {label:'Why AMG', to: '/about'},
  // {label:'Investment Readiness Program', to: '/investment-readiness-program'},
];

export const HERO = {
  eyebrowTags: ['Pre-Seed', 'Seed', 'Series A'],
  title: 'Raise Capital With Strategic Clarity.',
  description:
    'We help North American tech founders prepare their narrative, financials, and fundraising strategy before investor conversations begin.',
  primaryCta: { label: 'Explore Services', to: '/founder-services' },
  secondaryCta: { label: 'Book a Consultation', to: '/contact' },
};

export const WHO_WE_ARE = {
  eyebrow: 'Who We Are',
  title: 'Practical Insight. Real Results.',
  paragraphs: [
    'AMG Venture Partners was founded by operators and investors who have lived on both sides of the table. We provide the exact frameworks, documents, and introductions that move fundraising processes forward.',
    'Whether you are a first-time founder or an accelerator looking to elevate your entire cohort, we meet you where you are and build toward where you need to be.',
  ],
  bullets: [
    'Hands-on, founder-first methodology',
    'Deep North American & European investor networks',
    'Stage-appropriate advice from pre-seed to Series A',
  ],
  stat: { label: 'Avg. Time to First Term Sheet', value: '8–12 Weeks' },
  image:
    'https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxzdGFydHVwJTIwZm91bmRlcnMlMjBjb2xsYWJvcmF0aXZlfGVufDB8fHx8MTc3NzI4NTI0OXww&ixlib=rb-4.1.0&q=85',
};

export const SERVICE_PILLARS = [
  { title: 'Financial Models', desc: 'Investor-grade.', accent: 'yellow' },
  { title: 'Pitch Decks', desc: 'Compelling narratives.', accent: 'turquoise' },
  { title: 'Investor Network', desc: 'Across North America & Europe.', accent: 'teal' },
  { title: 'Valuation', desc: 'Defensible analysis.', accent: 'yellow' },
];

export const FOUNDER_SERVICES_INTRO = {
  eyebrow: 'Strategic Fundraising Support',

  title: 'Founder services built for investor readiness.',

  description:
    'Strategic fundraising support designed around how investors actually evaluate startups — from investor narrative and financial clarity to valuation strategy, investor outreach, and fundraising preparation.',
};

export const NOT_SURE_CTA = {
  eyebrow: 'Not Sure Where to Start?',
  title: 'Schedule a Free Consultation',
  description:
    "Book a free strategy call and we'll map the right service path for your current stage and fundraising journey.",
  cta: { label: 'Book a Free Strategy Call', to: '/contact' },
  note: 'No obligation. 30 minutes. All new engagements start here.',
};

export const PRICING_INTRO = {
  eyebrow: 'Pricing',
  title: 'Engagement Structure',
  description:
    'No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.',
};

export const HOW_WE_WORK_INTRO = {
  eyebrow: 'Our Process',
  description:
    'A structured engagement designed to be efficient, collaborative, and output-driven — no bureaucracy, no back-and-forth chaos.',
};

const STANDARD_PRICING_NOTE = {
  eyebrow: 'Pricing',
  title: 'Engagement Structure',
  description: 'No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.',
};

const PITCH_DECK_REVIEW_PRICING = [
  {
    tier: 'Written Review',
    price: '$300',
    sub: 'Async written feedback you can action and self-direct revisions from.',
    popular: false,
    features: [
     'Investor-readiness score & evaluation framework',
  'Slide-by-slide written feedback with rewrite suggestions',
  'Clear investor concerns, gaps & missing slides identification',
  'Recommended pitch deck structure (13–16 slides)',
 
    ],
    cta: 'Get Started',
  },
  {
    tier: 'Full Review + Expert',
    price: '$500',
    sub: 'The complete review experience — written analysis plus a live 60-minute session to align on your revision roadmap.',
    popular: true,
    features: [
      'Everything present in Written Review',
      'Investor Q&A anticipation notes',
      'Traction and team section deep dive',
      '60-min live debrief call',
       'Complete PDF report with actionable recommendations'
    ],
    cta: 'Get Started',
  },
  // {
  //   tier: 'Concierge Review',
  //   price: 'Custom',
  //   sub: 'For founders who want an active, senior day-to-day co-pilot on investment readiness and fundraising readiness.',
  //   popular: false,
  //   features: [
  //     'Structured evaluation calls',
  //     'Iterative pricing (per deck)',
  //     'Current-raise competitive insights',
  //     'Dedicated founder debrief sessions',
  //     'Demo day presentation recommendation',
  //     'Dedicated account coordinator',
  //   ],
  //   cta: 'Get Started',
  // },
];

const PITCH_DECK_REVIEW_INCLUDES = [
   'Investor-readiness score (out of 10)',
  '13-dimension evaluation framework',
  'Slide-by-slide written feedback',
  'Clear investor concerns and gaps',
  'Rewrite suggestions for key slides',
  'Missing slides identification',
  'Recommended slide structure (13–16 slides)',
  'Complete PDF report with all the details',
];

export const SERVICES = [
  {
    slug: 'pitch-deck-review',
    introTitle: 'Investor Narrative Review',
    title: 'Investor Narrative Review',
    tagline: 'Pressure-test your pitch deck and identify the gaps weakening investor conviction.',
    accent: 'yellow',
    why: 'A meticulous, investor-perspective critique of your existing pitch deck — designed to identify narrative gaps, structural weaknesses, and missed opportunities before they cost you a term sheet.',
    whyHeading: 'Most rejections 1en because of how a story is told — not the business behind it.',
    whyPoints: [
      {
        title: 'Vague Feedback Is Useless',
        text: 'Most peer review gives polite, surface-level validation. What you actually need is a hard, investor-perspective critique — exactly what is unclear, what is unconvincing, and what is missing.',
      },
      {
        title: "You Can't See Your Own Blind Spots",
        text: 'You know your business too well. The assumptions, jumps, and shortcuts that feel obvious to you are exactly what confuses an investor reading your deck for the first time.',
      },
      {
        title: 'One Weak Slide Can Kill the Whole Deck',
        text: 'You get one shot with investors.If your deck doesn’t click in the first 20 seconds, the meeting evaporates.Your pitch deck needs to be clear, compelling, and investor-ready',
      },
    ],
     pricing: PITCH_DECK_REVIEW_PRICING,
    whatsIncluded: PITCH_DECK_REVIEW_INCLUDES,
    deliverHeading: 'Investor-grade feedback that tells you exactly what to fix and why.',
   deliver: [
  {
    title: 'Investor-Readiness Score',
    text: 'A single score out of 10 reflecting how a Seed–Series B partner would actually rate your deck. Indicates whether you are ready for outreach today, in weeks, or in months.'
  },
  {
    title: 'Scoring Summary (13 Dimensions)',
    text: 'Independent scoring across narrative, market, solution, business model, go-to-market, traction, competition, team, financials, and design. Color-coded to highlight strengths and risk areas instantly.'
  },
  {
    title: 'Slide-by-Slide Feedback',
    text: 'Every slide reviewed with score, strengths, investor concerns, and concrete rewrite suggestions. No generic advice — only actionable edits you can implement immediately.'
  },
  {
    title: 'What’s Missing',
    text: 'Identification of missing but critical slides such as competition, unit economics, use of funds, and risk mitigation — tailored to your stage and sector.'
  },
  {
    title: 'Recommended Slide Order',
    text: 'A restructured 13–16 slide flow aligned with investor expectations and your business model, ensuring narrative clarity and logical progression.'
  },
  {
    title: 'Prioritized Action Plan',
    text: 'A sequenced 10–14 day rebuild roadmap ranked by impact, helping you improve investor readiness efficiently with the highest ROI changes first.'
  }
],
    process: [
      { step: 'Intake & Context Setting', day: 'Day 1', text: 'You share your deck, target investor profile, and round context. We align on focus areas.' },
      { step: 'Deep Deck Analysis', day: 'Day 1–4', text: 'We review your deck slide-by-slide against an institutional evaluation framework.' },
      { step: 'Written Feedback Report', day: 'Day 5', text: 'You receive a written report with key strengths, critical gaps, and prioritised recommendations.' },
      { step: 'Live Debrief Session', day: 'Day 6', text: 'A 60-minute working session — discussing each finding, answering your questions, and creating a revision outline.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready to Strengthen Your Deck?',
      description: 'Submit your deck and get a full investor-perspective review back within 5 business days.',
      cta: { label: 'Get Started', to: '/contact' },
    },
   faqs: [
  { q: 'How quickly can you turn around the review?', a: 'Standard turnaround is 5 business days from receipt of materials. Rush 48-hour turnaround is available for an additional fee.' },
  { q: 'Is this feedback from someone who has actually sat on the investor side?', a: 'Yes. Reviews are conducted by partners who have evaluated hundreds of decks from the investor seat — not generalist consultants.' },
  { q: 'Do you sign NDAs?', a: 'Mutual NDAs are standard for every engagement. Your deck and information are never shared.' },
  { q: 'Will you also help me rewrite the deck?', a: 'The review focuses on critique and recommendations. If you want hands-on rebuilding, our Pitch Deck Creation service is the right next step.' },

  { q: 'How quickly can you turn around the review?', a: 'Standard turnaround is 5–6 business days from when you submit your deck. If you have an urgent investor meeting, we offer expedited 48-hour reviews at a premium — just let us know when you book.' },
  { q: 'What format should I send my deck in?', a: 'PDF or PowerPoint both work. We review the deck as investors will see it — the presentation-ready version. If you also want us to look at editable slides for structure, you can share the PPT.' },
  { q: 'Is this feedback from someone who has actually sat on the investor side?', a: 'Yes. Our review team includes operators and advisors with direct experience evaluating and making investment decisions at early-stage funds. This is not generic pitch coaching — it\'s investor-perspective analysis.' },
  { q: 'What if my deck needs a complete overhaul — not just tweaks?', a: 'We\'ll tell you directly in the review if that\'s the case. Some decks benefit more from a full rebuild than iterative improvements. If that\'s our assessment, we\'ll explain why and can scope a Pitch Deck Creation engagement at a credit toward the review fee.' },
  { q: 'Do you review decks at all stages?', a: 'Yes — from pre-seed through Series A. The evaluation criteria we apply are calibrated to your stage. What we look for in a pre-seed deck is different from what we expect to see in a Series A deck.' },
  { q: 'Can I share the review with my team or co-founders?', a: 'Absolutely. The written report is yours to share internally as you see fit. We only ask that you don\'t share it publicly, as it contains our proprietary evaluation frameworks.' }
],
  },
  {
    slug: 'pitch-deck-creation',
    introTitle: 'Investor Narrative & Deck Creation',
    title: 'Investor Narrative & Deck Creation',
    tagline: 'Craft a sharper investor story with clarity, structure, and fundraising alignment.',
    accent: 'turquoise',
    why: 'We build investor-grade pitch decks from the ground up — crafting the narrative architecture, structuring each slide for maximum impact, and delivering a polished presentation that opens doors and moves investors to act.',
    whyHeading: 'Most pitch decks fail before a founder ever steps into the room.',
    pricing: [
      // {
      //   tier: 'Startup & Copy',
      //   price: '$1,800',
      //   sub: 'For founders who need the story structured and the slides written — design not included.',
      //   popular: false,
      //   features: [
      //     'Founder discovery session',
      //     'Narrative architecture doc',
      //     'Slide-by-slide copy writing',
      //     'Investor-tailored messaging',
      //     '2 revision rounds',
      //     'File delivery (editable)',
      //   ],
      //   cta: 'Get Started',
      // },
      // {
      //   tier: 'Full Deck',
      //   price: '$3,500',
      //   sub: 'The complete pitch deck experience — story, copy, design, and presentation coaching.',
      //   popular: true,
      //   features: [
      //     'Everything in Startup & Copy',
      //     'Custom slide visualisations and brand',
      //     'Market sizing and competitive landscape',
      //     'You full rounds of revision based on your feedback',
      //     'Editable PowerPoint file (fully yours to update)',
      //     'Live walkthrough session (60 min)',
      //   ],
      //   cta: 'Get Started',
      // },
      {
        tier: 'Concierge / Custom',
        price: 'Custom',
        sub: 'For founders building to raise across multiple rounds, access to our senior advisory network.',
        popular: true,
        features: [
           'Custom investor-ready narrative',
    'Institutional-quality slide design',
    'Messaging & storytelling support',
    'Investor positioning strategy',
    'Multiple review iterations'
        ],
        cta: 'Get Started',
      },
    ],
    whatsIncluded: [
       '90-min founder discovery session',
  'Narrative architecture & story flow',
  'Slide-by-slide copywriting',
  'Custom visual design & layouts',
  'Market sizing & competitive positioning',
  'Investor-tailored messaging',
  '2 structured revision rounds',
  'Editable PowerPoint + PDF delivery',
  '60-min presentation walkthrough'
    ],
    whyPoints: [
      {
        title: 'You Have 3 Minutes to Make an Impression',
        text: 'Investors form a first impression within the first three slides. Without a tight narrative arc, the rest of the deck rarely gets a fair read.',
      },
      {
        title: 'Insider Jargon Loses the Room',
        text: "What is obvious to a founder is often opaque to an investor outside your sector. Clarity beats sophistication in every fundraise.",
      },
      {
        title: 'Design Without Narrative Is Decoration',
        text: 'Beautiful slides without a sharp story do not raise rounds. Story-first design is the only design that converts.',
      },
    ],
    deliverHeading: 'A purpose-built pitch deck that tells your story with precision.',
    deliver: [
      { title: 'Narrative Architecture', text: 'A logical, progressive story arc designed to answer investor questions before they arise.' },
      { title: 'Slide-by-Slide Development', text: 'Each slide written, edited, and designed with copy, data visualisation, and visual hierarchy optimised for investor consumption.' },
      { title: 'Market & Competitive Framing', text: 'Clear market sizing, competitive differentiation, and category framing that positions your company in a context investors understand.' },
      { title: 'Investor-Tailored Messaging', text: "Messaging tailored to your target investor profile — fund focus, thesis, portfolio fit — so the pitch resonates with the right audience." },
      { title: 'Traction Storytelling', text: 'We translate your traction data into compelling proof points that signal momentum and de-risk the investment.' },
      { title: 'Editable Deliverables', text: 'Final deck delivered as PDF and editable PowerPoint — fully yours to update and adapt.' },
    ],
  process: [
  {
    step: 'Founder Discovery Session',
    day: 'Day 1',
    text: 'A 90-minute deep-dive interview to extract your story — the problem, the solution, the market insight, the traction, the team, and your vision for the company.',
    output: 'Discovery brief and initial story hypotheses'
  },
  {
    step: 'Narrative Architecture',
    day: 'Day 2–3',
    text: 'We design the logical flow of your deck — slide sequence, key messages per slide, and the overall investment argument. You review and align before we build.',
    output: 'Slide-by-slide outline and narrative map'
  },
  {
    step: 'First Draft Development',
    day: 'Day 4–8',
    text: 'We develop the full deck: copy, charts, data visualizations, and visual design. Every slide is built for investor comprehension, not internal reporting.',
    output: 'First full draft (12–15 slides)'
  },
  {
    step: 'Revision Rounds',
    day: 'Day 9–13',
    text: 'Two complete revision rounds based on your feedback, ensuring the deck reflects your voice, your vision, and is investor-ready at every slide.',
    output: 'Revised and refined deck'
  },
  {
    step: 'Final Delivery & Walkthrough',
    day: 'Day 14',
    text: 'Final deck delivered in editable PowerPoint and presentation-ready PDF. Live 60-minute walkthrough session covering how to present and defend each section.',
    output: 'Final deck + presentation coaching session'
  },
],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready to Build a Deck That Converts?',
      description: 'Start with a free 30-minute consultation. We will map the right scope and timeline for your raise.',
      cta: { label: 'Get Started', to: '/contact' },
    },
    faqs: [
  { q: 'How long does the engagement take?', a: 'Typical timeline is 3–4 weeks from discovery session to final deck delivery, with two structured revision rounds built in.' },
  { q: 'Who actually writes the slides?', a: 'A senior partner leads the narrative and copy work. You co-create the story — no junior consultants doing the thinking.' },
  { q: 'Do you handle visual design too?', a: 'Yes. Every engagement includes polished, investor-ready visual design as a core deliverable.' },
  { q: 'Can I update the deck later?', a: 'Yes. You receive the editable PowerPoint file — fully yours to update for follow-on conversations and future rounds.' },

  { q: 'How involved do I need to be in the process?', a: 'Significantly in the first few days, minimally after that. The discovery session is the most important step — the better the context you give us, the better the deck. After we have the narrative architecture approved, your time investment drops considerably.' },
  { q: 'What if I already have a deck but want it rebuilt?', a: 'That\'s actually the most common engagement type. We review your existing deck, extract what\'s working, and rebuild the rest. We don\'t charge extra for this — the process is the same.' },
  { q: 'Do you do the design work or just the content?', a: 'The Full Deck Creation package includes both — copy, narrative, and professional visual design. The Narrative & Copy package covers story and content only, which you can take to a designer. Both are full services; the right choice depends on your existing resources.' },
  { q: 'How long does it take?', a: 'Most decks are delivered within 12–15 business days from the discovery session. Expedited delivery (7–8 days) is available at a premium.' },
  { q: 'Will the deck be tailored to specific investors?', a: 'Yes. Before we start, we discuss your target investor profile — stage focus, thesis, sector expertise, and geography. All messaging is calibrated to that audience. If you\'re targeting multiple investor types, we can discuss a secondary version.' },
  { q: 'Can you help me practice the verbal pitch as well?', a: 'Yes — the 60-minute walkthrough session included in the Full Deck Creation package covers exactly this. We go through how to open, how to tell each story beat, how to handle common objections, and how to pace the conversation.' }
],
  },
  {
    slug: 'financial-model',
    introTitle:  'Financial Clarity & Modeling',
    title:  'Financial Clarity & Modeling',
    tagline: 'Build investor-grade financial models grounded in strategic assumptions.',
    accent: 'teal',
    why: 'We build rigorous, investor-grade financial models from scratch — structured around how your business actually operates, with explicit assumptions investors can interrogate and scenarios that hold up under diligence.',
    whyHeading: 'Investors trust the model that survives scrutiny — not the spreadsheet that hides it.',
    pricing: [
      {
        tier: 'Starter',
        price: '$1,500',
        sub: 'For pre-revenue founders who need a clean model to anchor their raise.',
        popular: false,
        features: [
          '3-statement integrated model',
          'Driver-based revenue model',
          'Basic unit economics',
          'KPI summary dashboard',
          '2 revision rounds',
          'Live walkthrough session',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Full Model',
        price: '$2,800',
        sub: 'The complete financial model experience — bottom-up build, investor-grade unit economics, and a live debrief for due diligence.',
        popular: true,
        features: [
          'Everything in Starter',
          'Driver-based cohort and unit analysis',
          'Scenario analysis dashboard',
          'Sensitivity analysis dashboard',
          'Investor-profile scenario modelling',
          'Flat model review',
          'Live model walkthrough session',
          '30-day post-debrief email support',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Enterprise',
        price: 'Custom',
        sub: 'For complex businesses, multi-product scenarios, or those raising to institutional investors.',
        popular: false,
        features: [
          'Anything in Starter',
          'Multi-product / segment modelling',
          'Investor debt add-ins',
          'Ongoing model maintenance',
          'Board reporting support',
          'Priority turnaround',
        ],
        cta: 'Get Started',
      },
    ],
    whatsIncluded: [
     'Fully integrated 3-statement model',
  'Driver-based revenue model',
  'Unit economics (LTV, CAC, payback)',
  'Scenario analysis (base, bull, bear)',
  'Sensitivity analysis dashboard',
  'Headcount & hiring plan',
  'Capex & fundraising schedule',
  'KPI dashboard (ARR, burn, runway)',
  '60-min walkthrough session',
  '30-day post-delivery support'
    ],
    whyPoints: [
      {
        title: 'Investors Will Challenge Every Assumption',
        text: 'VCs and angels dont just glance at your revenue projections — they dissect them. A model built on weak logic or missing drivers will collapse under even basic questions.',
      },
      {
        title: 'A Bad Model Destroys Credibility',
        text: 'If you can\'t explain where your numbers come from, investors lose confidence in you as a business leader. The model reflects your strategic clarity.',
      },
      {
        title: 'You Need It Before You Walk In the Room',
        text: 'Most founders start building the model too late. By the time you\'re in investor meetings, your financials need to be airtight, not a work in progress.',
      },
    ],
    deliverHeading: 'An investor-ready financial model built on the logic of your actual business.',
    deliver: [
  { 
    title: '3-Statement Model', 
    text: 'Fully integrated P&L, balance sheet, and cash flow statement with all supporting schedules tied together dynamically.' 
  },
  { 
    title: 'Revenue Build', 
    text: 'Granular, driver-based revenue model built around your actual growth levers — pricing, volume, cohorts, channels, or contracts.' 
  },
  { 
    title: 'Unit Economics', 
    text: 'CAC, LTV, payback period, gross margin by cohort — the metrics investors will ask about, modeled with precision.' 
  },
  { 
    title: 'Headcount Planning', 
    text: 'Bottom-up hiring plan tied to revenue milestones, with salary bands, timing, and the resulting cost structure.' 
  },
  { 
    title: 'Scenario Analysis', 
    text: 'Base, bull, and bear cases that reflect genuine business risk and opportunity — not just ±10% on a single revenue line.' 
  },
  { 
    title: 'KPI Dashboard', 
    text: 'A clean investor-facing summary: MRR/ARR, burn, runway, CAC, LTV, gross margin — all in one view.' 
  }
],
    process: [
      { step: 'Business Model Deep Dive', day: 'Day 1–2', text: 'We map your business drivers, pricing mechanics, acquisition channels, and cost structure to ensure the model reflects how your business actually works.', output: 'Driver mapping and model architecture doc' },
      { step: 'Model Architecture & Build', day: 'Day 3–7', text: 'We construct the full bottom-up model with all supporting schedules, revenue build, unit costs, capex, headcount, and financing assumptions.', output: 'Working and functional model' },
      { step: 'Scenario Analysis', day: 'Day 8–12', text: 'We build best, base, and worst-case scenarios tied to specific operating levers — pricing, volume, growth assumptions.', output: 'Scenario toggle dashboard' },
      { step: 'Review & Refinement', day: 'Day 13–14', text: 'We review the model with you, discussion assumptions and any needed refinements. Test edge-cases, validate logic.', output: 'Final refined model review' },
      { step: 'Walkthrough & Handoff', day: 'Day 15–16', text: 'Final live walkthrough of all model assumptions so you can speak to every number in investor meetings. Full handoff with documentation.', output: 'Model handover documentation and commentary' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready for an Investor-Grade Model?',
      description: 'Book a 30-minute scoping call. We will define the right model depth for your stage and round size.',
      cta: { label: 'Get Started', to: '/contact' },
    },
  
   faqs: [
  { q: 'Excel or Google Sheets?', a: 'Either — your preference. The model is fully editable and auditable in either format.' },
  { q: 'Can investors actually audit the assumptions?', a: 'Yes. Every assumption is explicit, sourced where relevant, and traceable through the model.' },
  { q: 'How long does it take?', a: '3–4 weeks for a full build, depending on business complexity. Faster turnarounds available for straightforward businesses.' },
  { q: 'Do you update the model after a raise?', a: 'Many founders engage us for a quarterly refresh after the round closes. The handoff model is yours to maintain in-house if you prefer.' },

  { q: 'How long does it take to build the model?', a: 'Most models are delivered within 10–14 business days from kickoff. More complex businesses (multi-product, marketplace, hardware) may take up to 18 days. We align on timeline before starting.' },
  { q: 'What do you need from me to get started?', a: 'A clear description of your business model, any existing financial data or assumptions, and a 60-minute kickoff call. The more context you provide upfront, the faster and more accurate the model.' },
  { q: 'Can you work with my existing model instead of starting from scratch?', a: 'Yes. We can audit and rebuild your existing model. In most cases we recommend a full rebuild for consistency and structural integrity, but we\'ll assess your model first and give you an honest recommendation.' },
  { q: 'What format is the model delivered in?', a: 'We deliver in Excel by default. If you prefer Google Sheets, we can accommodate that. All models are fully unlocked — no black boxes or hidden formulas.' },
  { q: 'I don\'t have a finance background. Can I still use and update the model?', a: 'Absolutely. We design our models for founders, not CFOs. The walkthrough session is specifically designed to make you confident owning and updating the model yourself. We also offer a 30-day Q&A window afterward.' },
  { q: 'Do investors actually care about the financial model at the early stage?', a: 'Yes — though what they\'re evaluating changes by stage. At pre-seed, they\'re assessing your strategic thinking and assumptions. At seed and Series A, they\'re scrutinizing unit economics, runway, and the path to profitability. A weak model at any stage raises red flags.' }

    ],
  },
 {
  slug: 'valuation',
  introTitle: 'Valuation Strategy',
  title: 'Valuation Strategy',
  tagline: 'Arrive at a defensible valuation backed by logic, comparables, and market reality.',
  accent: 'yellow',

  why: 'A defensible, investor-ready pre-money valuation built on five industry-standard methods, real precedent transactions, and the same data sources VCs use. Delivered in 5 business days.',
  
  whyHeading: 'Most founders lose leverage before the negotiation even begins.',

  pricing: [
    {
      tier: 'Essential',
      price: '$1,950',
      sub: 'For Idea or Development-stage startups, pre-revenue or under $250K ARR.',
      popular: false,
      features: [
        'All 5 methods + BVM triangulation',
        'Excel calculator + PDF report',
        '30-min walkthrough call',
        '14-day delivery',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Standard',
      price: '$3,450',
      sub: 'For Startup or Expansion-stage companies, $250K–$3M ARR.',
      popular: true,
      features: [
        'Everything in Essential',
        '60-min walkthrough + scenario session',
        'Investor Defense Pack',
        '30-day email support',
        '7-day delivery',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Premium',
      price: '$6,950',
      sub: 'For Growth-stage companies, $3M+ ARR or complex cap tables.',
      popular: false,
      features: [
        'Everything in Standard',
        'Cap-table modeling + dilution waterfall',
        '90-min walkthrough + investor Q&A prep',
        'Two free re-runs (12 months)',
        '5-day delivery',
      ],
      cta: 'Get Started',
    },
  ],

  whatsIncluded: [
     'Five-method valuation (VC, DCF, Scorecard, etc.)',
  'Pre-money valuation range (low / mid / high)',
  'Comparable company & transaction analysis',
  'Industry, stage & geography benchmarks',
  'Excel valuation calculator (fully editable)',
  'Investor-ready valuation report (~25 pages)',
  'Sensitivity analysis & risk assessment',
  'Investor Q&A defense pack',
  '30-day post-delivery support'
  ],

  whyPoints: [
    {
      title: 'Anchors the Negotiation',
      text: 'With five methods and comparable transactions, you are no longer defending a number — you are explaining methodology.',
    },
    {
      title: 'Prevents Mispricing',
      text: 'Overpricing stalls rounds. Underpricing costs equity forever. A defensible valuation avoids both.',
    },
    {
      title: 'Survives Investor Diligence',
      text: 'Every number is sourced — Damodaran, Crunchbase, BLS — making your valuation audit-ready.',
    },
  ],

  deliverHeading: 'A defensible valuation built on real data — not guesswork.',

  deliver: [
    {
      title: 'Valuation Report (~25 pages)',
      text: 'Executive summary, valuation range, method-by-method breakdown, precedent transactions, sensitivity analysis, and full data appendix.',
    },
    {
      title: 'Excel Valuation Calculator',
      text: 'Fully formula-driven workbook with 15 tabs. Change inputs → valuation updates instantly. No hardcoded outputs.',
    },
    {
      title: 'Investor Defense Pack',
      text: '2-page summary + investor Q&A prep designed to shorten diligence and strengthen negotiation.',
    },
    {
      title: 'Fundraising Dynamics',
      text: 'Strategically determine your funding ask, runway requirements, and milestone targets aligned with your stage, sector, and investor expectations.',
    },
    {
      title: 'Valuation Range',
      text: 'Avoid key valuation mistakes that can drive investors away, and arrive at a logical valuation range (low / mid / high) based on method convergence and market benchmarks.',
    },
    {
      title: 'Founder equity dilution and term sheet negotiation',
      text: 'Understand how dilution impacts your equity from pre seed to series B.Negotiating terms with investors is more than just valuation — we prepare you to defend your number and negotiate from a position of strength.',
    },
    {
      title: 'Five-Method Valuation',
      text: 'Scorecard, Checklist, VC, and two DCF approaches blended using stage-based weights.',
    },
    {
      title: 'Precedent Transactions',
      text: 'Real comparable funding rounds filtered by industry, geography, and stage.',
    },
    {
      title: 'Data-Backed Inputs',
      text: 'Parameters sourced from Damodaran, Crunchbase, Trading Economics, and global statistical datasets.',
    },
  ],

  process: [
    {
      step: 'Founder Intake',
      day: 'Day 1',
      text: 'Structured intake covering company profile, projections, and capital strategy.',
      output: 'Complete dataset and assumptions baseline',
    },
    {
      step: 'Market Research',
      day: 'Day 1–2',
      text: 'Load country, industry, and stage-specific parameters from global datasets.',
      output: 'Validated input parameters',
    },
    {
      step: 'Valuation Modelling',
      day: 'Day 2–4',
      text: 'Run all five valuation methods and triangulate against precedent transactions.',
      output: 'Low / mid / high valuation range',
    },
    {
      step: 'Delivery & Walkthrough',
      day: 'Day 5',
      text: 'Deliver report, Excel model, and conduct a full walkthrough.',
      output: 'Investor-ready valuation + founder clarity',
    },
  ],

  pricingNote: STANDARD_PRICING_NOTE,

  finalCta: {
    title: 'Ready to know what you’re worth?',
    description:
      'The next conversation you have with an investor will go better with a defensible number behind you.',
    cta: { label: 'Get Your Valuation', to: '/contact' },
  },

  faqs: [
  { q: 'Will investors accept this valuation?', a: 'Investors negotiate — but this shifts the conversation from numbers to assumptions.' },
  { q: 'Can pre-revenue startups be valued?', a: 'Yes. Qualitative methods dominate early-stage valuation and carry the most weight.' },
  { q: 'How long does it take?', a: '5–7 business days depending on the engagement tier.' },
  { q: 'Do you support multiple geographies?', a: 'Yes — US, UK, Canada, EU, India, and more with localized parameters.' },

  { q: 'What valuation methods do you use?', a: 'We use comparable company analysis, precedent transaction analysis, and discounted cash flow (DCF) modeling — weighted and calibrated based on your stage, sector, and the availability of market data. Early-stage companies typically rely more heavily on comps and market benchmarks, while later-stage companies with material revenue may benefit from DCF.' },
  { q: 'How do you find comparable companies at the early stage?', a: 'We use a combination of proprietary databases, public company benchmarks, startup funding databases, and sector-specific research. For early-stage companies, the comp universe is often smaller — we\'re transparent about sample sizes and adjust our methodology accordingly.' },
  { q: 'Can you help me after I receive a term sheet?', a: 'Yes — this is one of the most valuable moments for the valuation service. We can review the proposed valuation against market benchmarks, model the cap table implications, and prepare you for negotiation with specific talking points.' },
  { q: 'How long does the valuation take?', a: 'Most engagements are completed within 8–12 business days. Urgency pricing is available if you have an active term sheet or investor deadline.' },
  { q: 'Is a startup valuation really defensible? Aren\'t they just made up?', a: 'Early-stage valuations have wide ranges, but that doesn\'t mean they\'re arbitrary. The difference between a founder who says "we\'re worth $8M because I said so" and one who presents a comparable analysis, explains their growth-adjusted multiple, and ties it to real sector benchmarks is the difference between a credible and an amateur fundraiser.' },
  { q: 'What if my sector has very few public comparables?', a: 'We work with this regularly. In sectors with thin public comps, we expand the analysis to include cross-sector benchmarks, private transaction data, and qualitative adjustments. We\'re always transparent about the analytical basis.' }
],
},
  {
    slug: 'investor-outreach',
    introTitle: 'Investor Outreach',
    title: 'Investor Outreach',
    tagline: 'Target the right investors with structured outreach and fundraising preparation.',
    accent: 'turquoise',
    why: 'Strategic, targeted investor outreach built on thesis alignment, stage fit, and sector expertise — paired with warm introductions from our established network across North America and Europe.',
    whyHeading: 'A sharp pipeline beats a broad blast every time.',
    pricing: [
      {
        tier: 'Targeting & Strategy',
        price: '$1,400',
        sub: 'For founders who need a curated target list and outreach strategy — execution not included.',
        popular: false,
        features: [
          'Curated long list (50–75 firms), prioritised by fit',
          'Fund summary doc (for each 5)',
          'Tier segmentation (priority / secondary / long-list)',
          'Personalised email sequences (3 emails per investor)',
          'Warm introduction (3 per week)',
          '60-min strategy session',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Full Outreach Program',
        price: '$3,000',
        sub: 'The complete investor outreach — from targeting to introductions to pipeline management.',
        popular: true,
        features: [
          'Everything in Targeting & Strategy',
          'Full investor long-list (75–150 investors)',
          'Warm introductions via our network',
          'Personalised email sequences for each investor',
          'Personalised social outreach (LinkedIn + email)',
          'Campaign launch and co-ordination',
          'Pipeline launch and 180 responses',
          'In-week pipeline management and investor co-ordination',
          'Weekly status report and action alignment',
          'Post-closing follow-up and close-out report',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Dedicated Program',
        price: 'Custom',
        sub: 'For founders who want an active, senior day-to-day co-pilot on investor relations for the full raise.',
        popular: false,
        features: [
          'Content investor mapping',
          'Daily/weekly investor tracking and management',
          'Warm intro, multiple rounds',
          'Investor deck review',
          'Contact investor, multiple sectors',
          'Investor relationship management',
          'Post-close follow-up and close-out',
          'Priority response within 24 hours',
        ],
        cta: 'Get Started',
      },
    ],
    whatsIncluded: [
       'Curated investor list (75–150 funds)',
  'Thesis-fit targeting & tier segmentation',
  // 'Warm introductions via network',
  'Personalised email & outreach sequences',
  'Investor teaser / one-pager creation',
  'Outreach campaign launch support',
  'Pipeline tracking & management',
  'Weekly status reports & alignment',
  'Follow-up & investor coordination',
  'Post-close feedback & insights'
    ],
    whyPoints: [
      {
        title: 'Spray-and-Pray Burns Your Reputation',
        text: 'Cold outreach to dozens of mismatched funds signals desperation and damages your standing in tight investor communities.',
      },
      {
        title: 'Thesis-Fit Beats Volume',
        text: '20 investors with active thesis alignment will close your round faster than 200 random intros. Targeting is leverage.',
      },
      {
        title: 'Warm Beats Cold — Always',
        text: 'A warm introduction from a credible source is worth ten cold emails. Network access is what separates founders who close from those who chase.',
      },
    ],
    deliverHeading: 'Targeted outreach designed to convert — not just to generate noise.',
    deliver: [
      { title: 'Thesis-Aligned Targeting', text: 'A curated investor universe of 50–100 funds, scored on thesis fit, stage fit, sector focus, and warmth of relationship.' },
      { title: 'Investor Outreach Support', text: 'Investor outreach support focused on helping founders secure qualified investor meetings.' },
      // { title: 'North America & Europe Coverage', text: 'Active investor relationships in both geographies — and the context to navigate the differences in investor expectations.' },
      { title: 'Tailored Outreach Materials', text: 'Outreach copy, follow-up sequencing, and supporting one-pagers tailored to each investor archetype.' },
      { title: 'Pipeline Management', text: 'A structured process for tracking responses, managing diligence requests, and maintaining momentum across the full pipeline.' },
      { title: 'Investor Relationship Preparation', text: 'Briefing notes on each investor — fund focus, partner background, recent investments — so you walk into every meeting informed.' },
      { title: 'Investor QnA and due diligence support', text: 'Investor briefings and support on addressing questions and answer' },
],
    process: [
      { step: 'Investors Targeting & Research', day: 'Day 1–5', text: 'We build a curated, scored investor long-list (50–150 firms). We segment by tier: thesis fit, stage, geography, and likely relationship to introduction.', output: 'Target investor long-list and tier segmentation document' },
      { step: 'Outreach Strategy Design', day: 'Day 6–7', text: 'We design full outreach methodology, timing, and approach. We write and customise outreach copy, personalise for each firm type, and align on campaign launch date.', output: 'Themed outreach strategy document' },
      { step: 'Materials Development', day: 'Day 8–10', text: 'We develop all investor-facing materials for the campaign: one-pager, teaser email, subject lines for each firm type. All materials are reviewed by our team before launch. This doesnot involve pitch deck creation and financial modelling subscription for these services are available.', output: 'Customised investor outreach materials for each investor.' },
      { step: 'Introductions & Campaign Launch', day: 'Day 11–15', text: 'We assist on getting investor meetings for founders.', output: 'Active pipeline with weekly reporting and actions aligned' },
      { step: 'Pipeline Management & Follow-Up', day: 'Ongoing (4–8 weeks)', text: 'We track your investor pipeline, manage follow-ups, and provide co-ordination support throughout the process. Weekly status reports and investor feedback aligned.', output: 'Weekly pipeline status report with each action co-ordinated' },
    { step: 'Investor meetings and QnA', day: 'Ongoing (4–8 weeks)', text: 'We help founders prepare for investor meetings by refining their narrative, anticipating investor questions, and supporting Q&A preparation. Our team works closely with founders to improve confidence, clarity, and meeting effectiveness throughout the fundraising process.', output: 'Founder investor-meeting readiness with tailored Q&A preparation and discussion support' },
],
    pricingNote: STANDARD_PRICING_NOTE,
    pipelineCta: true,
    finalCta: {
      title: 'Start Building Your Investor Pipeline.',
      description: "Let's map your investor universe and build an outreach strategy designed to convert.",
      cta: { label: 'Book a Free Strategy Call', to: '/contact' },
    },
  faqs: [
  { q: 'Do you guarantee meetings or term sheets?', a: 'No firm guarantees process quality. We commit to the right targeting, warm intros where relevant, and disciplined pipeline management.' },
  { q: 'Can you raise the round for me?', a: 'No. Only the founder can lead a round. Our role is to put you in front of the right investors, fully prepared.' },
  { q: 'What geographies do you cover?', a: 'North America and Europe primarily. Selective engagements in other regions where we have direct relationships.' },
  { q: 'How long is the engagement?', a: 'Typical engagements run 8 weeks of active outreach, with shorter targeted sprints available.' },

  { q: 'How do you define a "warm introduction"?', a: 'A warm introduction is one where the connecting person has a genuine relationship with the investor — not just a LinkedIn connection. We\'ll be transparent about the strength of each introduction pathway before we commit to it.' },
  { q: 'Can you guarantee I\'ll get investor meetings?', a: 'We can\'t guarantee outcomes — that\'s determined by your business, your stage, and current market conditions. What we can guarantee is a rigorous process, thesis-aligned targeting, and the highest quality outreach we can build. Our track record speaks to the effectiveness of the approach.' },
  { q: 'What if I already have some investor connections I\'m working?', a: 'That\'s ideal — we can work with your existing pipeline and complement it with our additional targeting and introductions. We\'ll assess your current list as part of the strategy phase and fill in the gaps.' },
  { q: 'How do you know which investors are actually active and relevant?', a: 'We maintain actively updated intelligence on investor thesis, portfolio, and check size across our network. We supplement this with real-time research and cross-reference recent deals to ensure we target genuinely active, relevant investors.' },
  { q: 'What if I get rejections? Do you help me handle that?', a: 'Yes — rejection management and feedback synthesis is part of the Full Outreach Program. We capture reasons for investor passes and identify recurring patterns to improve your pitch and materials between meetings.' },
  { q: 'Do you cover investors in both North America and Europe?', a: 'Yes. We have active relationships across both geographies. If you\'re targeting one market, we focus there; if both, we build a cross-geography list and advise on sequencing based on current activity.' }
],
  },
  {
  slug: 'investment-readiness',
  introTitle: 'Fundraising Readiness Review',
  title: 'Fundraising Readiness Review & Fundraising Roadmap',
  tagline: 'Identify weaknesses before investors do and prepare for scrutiny confidently.',
  accent: 'teal',

  why: 'A comprehensive diagnostic of your entire fundraising package — deck, financials, data room, legal structure, and founder narrative — ensuring you present a watertight investment case before approaching investors.',

  whyHeading: 'The majority of failed raises are preventable with the right preparation.',

  pricing: [
    {
      tier: 'Essentials Audit',
      price: '$1,500',
      sub: 'For founders who need a fast diagnostic of their core materials before approaching investors.',
      popular: false,
      features: [
        'Pitch deck gap analysis',
        'Financial package review',
        'Written findings report',
        'Top priority action items',
        'Key risk identification',
        '60-min debrief call',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Full Readiness',
      price: '$2,500',
      sub: 'Complete investment readiness diagnostic for founders preparing to launch their raise with confidence.',
      popular: true,
      features: [
        'Everything in Essentials Audit',
        'Data room completeness audit',
        'Cap table and legal structure review',
        '6-dimension Investment Readiness framework',
        'Prioritised action plan (investor-impact scoring)',
        'Mock investor Q&A session (60 min)',
        '30-day support window',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Cohort Program',
      price: 'Custom',
      sub: 'For accelerators running readiness diagnostics across a full cohort before demo day.',
      popular: false,
      features: [
        'Cohort-wide readiness diagnostics',
        'Benchmarking across startups',
        'Risk flagging across cohort',
        'Structured reporting for program teams',
        'Data aggregation and insights',
        'Priority response within 24 hours',
      ],
      cta: 'Get Started',
    },
  ],

  whatsIncluded: [
   'Full fundraising stack audit (deck, model, data room)',
  'Pitch deck narrative & structure review',
  'Financial model integrity check',
  'Data room completeness assessment',
  '6-dimension readiness scorecard',
  'Investment Readiness report (PDF)',
  'Prioritized 30-day action roadmap',
  'Mock investor Q&A session',
  '60-min debrief session',
  'Post-improvement check-in'
  ],

  whyPoints: [
    {
      title: 'Inconsistencies Are Investor Deal-Breakers',
      text: 'When your deck, model, and data room tell different stories, investor trust breaks instantly. Consistency is non-negotiable.',
    },
    {
      title: 'Missing Materials Stall Momentum',
      text: 'Incomplete data rooms delay diligence and slow down fundraising. Prepared founders move faster.',
    },
    {
      title: 'Hard Questions Will Come — Are You Ready?',
      text: 'The strongest founders are those who can answer investor questions clearly and confidently. Preparation determines outcomes.',
    },
  ],

  deliverHeading: 'A complete audit of your fundraising readiness across six dimensions.',

  deliver: [
    {
      title: 'Pitch Deck Audit',
      text: 'Narrative clarity, structure, investor messaging, and slide-by-slide gap analysis aligned with your target investor profile.',
    },
    {
      title: 'Financial Package Review',
      text: 'Model integrity, unit economics, projection credibility, and consistency with your narrative.',
    },
    {
      title: 'Data Room Assessment',
      text: 'Completeness and organisation of your data room against institutional due diligence standards.',
    },
    {
      title: 'Legal & Corporate Structure',
      text: 'Cap table, share structure, and documentation reviewed for risks that could delay or derail a round.',
    },
    {
      title: 'Gap Analysis Report',
      text: 'Clear identification of what is ready, what needs improvement, and what is high-risk before investor meetings.',
    },
    {
      title: 'Mock Investor Session',
      text: 'Simulated investor Q&A designed to stress-test your narrative, numbers, and positioning.',
    },
  ],

  process: [
    {
      step: 'Materials Collection',
      day: 'Day 1–2',
      text: 'You share your deck, financial model, data room, and key documents. NDAs in place from day one.',
      output: 'Structured document set and review checklist',
    },
    {
      step: 'Structured Review (6 Dimensions)',
      day: 'Day 3–8',
      text: 'Systematic evaluation across narrative, financials, data room, legal, team, and investor positioning.',
      output: 'Dimension-by-dimension readiness analysis',
    },
    {
      step: 'Gap Analysis & Action Plan',
      day: 'Day 9–10',
      text: 'We identify gaps and prioritise improvements based on investor impact.',
      output: 'Prioritised action plan (PDF)',
    },
    {
      step: 'Debrief & Roadmap Session',
      day: 'Day 11',
      text: '60-minute walkthrough of findings, implications, and execution roadmap.',
      output: 'Aligned roadmap and next steps',
    },
    {
      step: 'Mock Investor Q&A',
      day: 'Day 14',
      text: 'Simulated investor session using the toughest likely questions.',
      output: 'Q&A preparation document',
    },
    {
      step: 'Post-Improvement Check-In',
      day: 'Day 30 (Post)',
      text: 'Final review after improvements to confirm investor readiness.',
      output: 'Final readiness confirmation',
    },
  ],

  pricingNote: STANDARD_PRICING_NOTE,

  finalCta: {
    title: 'Ready Before You Walk in the Room?',
    description: 'Run the diagnostic before approaching investors. Two weeks of preparation can save months of lost momentum.',
    cta: { label: 'Get Started', to: '/contact' },
  },

  faqs: [
  { q: 'How is this different from a pitch deck review?', a: 'Pitch Deck Review focuses on the deck. Investment Readiness evaluates your entire fundraising stack — deck, financials, data room, and narrative.' },
  { q: "What if I don't have all materials ready?", a: 'That is exactly when this is most useful. We help you identify what is missing and what needs to be built.' },
  { q: 'Do you help fix the gaps?', a: 'Yes — we identify gaps and can support remediation through advisory or related services.' },
  { q: 'Is this suitable for first-time founders?', a: 'Yes — especially valuable for first-time founders navigating fundraising for the first time.' },
  { q: 'Can accelerators use this?', a: 'Yes — we run cohort-based readiness diagnostics for accelerator programs globally.' },

  { q: 'How is this different from just reviewing my pitch deck?', a: 'A pitch deck review covers one document. The Investment Readiness Review covers your entire fundraising package — deck, financials, data room, legal structure, and founder narrative — and evaluates whether they\'re consistent with each other. It\'s an audit of your fundraising readiness, not just one asset.' },
  { q: 'What if I don\'t have all my materials ready yet?', a: 'That\'s actually the best time to do this. We\'ll flag exactly what\'s missing, prioritize what needs to be built first, and help you structure your preparation timeline. You don\'t need a complete package to start — you just need to be ready to build one.' },
  { q: 'Do you help fix the gaps you identify, or just flag them?', a: 'The Investment Readiness Review identifies and prioritizes gaps. Execution of fixes — rebuilding the deck, rebuilding the financial model — can be scoped as separate engagements at a credit toward the review fee.' },
  { q: 'How long does the engagement take?', a: 'The full review takes approximately 10 days from kickoff to debrief. Including the mock Q&A session and post-improvement check-in, the full engagement window is 30–45 days. Most founders use this time to work through their action plan before the check-in.' },
  { q: 'Is this appropriate for first-time founders?', a: 'Especially so. First-time founders are most likely to have blind spots they don\'t know they have. The structured diagnostic approach is particularly valuable for founders who haven\'t been through a full institutional fundraise before.' },
  { q: 'Can accelerators use this as a pre-demo day program?', a: 'Yes — this is one of our core use cases for ecosystem partnerships. We have a cohort version designed to run across all companies in an accelerator cohort in a structured, time-bound format ahead of demo day.' }
],
},
 {
  slug: 'ama-sessions',
  introTitle: 'AMA Sessions',
  title: 'AMA Sessions',
  tagline: "Ask the questions you can't afford to get wrong.",
  accent: 'yellow',

  why: 'Structured one-on-one advisory sessions with experienced venture investors and startup operators. Bring any challenge, any question — and get direct, unfiltered answers from people who have lived the fundraising journey from both sides of the table.',

  whyHeading: "Sometimes you don't need a full engagement. You need one hour with the right person.",

  whyPoints: [
    {
      title: 'Generic Advice Is Everywhere — Specific Advice Is Rare',
      text: 'Frameworks are abundant. Real, situation-specific advice is not. AMA sessions are tailored to your stage, team, and fundraising context.'
    },
    {
      title: "The Questions You Don't Know to Ask Are the Most Dangerous",
      text: 'Experienced investors surface blind spots, risks, and second-order effects you would not identify yourself.'
    },
    {
      title: 'Fast Access to Expertise Changes Outcomes',
      text: 'Getting the right answer at the right time improves decisions, accelerates fundraising, and prevents costly mistakes.'
    }
  ],

  deliverHeading: 'Direct, actionable answers from experienced operators and investors.',

  deliver: [
    {
      title: 'Investor-Perspective Feedback',
      text: 'Get direct insight into how investors actually evaluate your situation, your deck, and your strategy.'
    },
    {
      title: 'Fundraise Strategy Guidance',
      text: 'Round sizing, valuation anchoring, sequencing, timing, and term sheet navigation — tailored to your raise.'
    },
    {
      title: 'Pitch and Narrative Coaching',
      text: 'Real-time feedback on your story — what is landing, what is confusing, and where investor attention drops.'
    },
    {
      title: 'Materials Spot Review',
      text: 'Share specific slides, financial assumptions, or sections of your deck and get targeted feedback.'
    },
    {
      title: 'Investor Relationship Advice',
      text: 'Handling investor conversations, follow-ups, competing offers, and managing multiple processes simultaneously.'
    },
    {
      title: 'Investor Term Sheet Negotiation',
      text: 'Strategic guidance on negotiating term sheets with investors, ensuring you understand the implications and protect your interests.'
    }
  ],

  process: [
    {
      step: 'Pre-Session Brief',
      day: '24 hours before',
      text: 'You share context, key questions, and materials. We prepare specifically for your situation.',
      output: 'Prepared context and focused discussion plan'
    },
    {
      step: 'Structured 60-Minute Session',
      day: 'Session day',
      text: 'A focused working session addressing your highest priority questions and decisions.',
      output: 'Clear answers and immediate next steps'
    },
    {
      step: 'Session Notes & Action Items',
      day: 'Next business day',
      text: 'Written summary with key insights, recommendations, and follow-up actions.',
      output: 'Session summary (PDF)'
    },
    {
      step: '48-Hour Follow-Up Window',
      day: 'Post-session',
      text: 'Follow-up support for clarifications and immediate questions as you implement.',
      output: 'Clarifications and follow-up answers'
    }
  ],

  // whatsIncluded: [
  //   'Pre-session material review',
  // '60-minute advisory session',
  // 'Fundraise strategy guidance',
  // 'Investor-perspective feedback',
  // 'Pitch & narrative coaching',
  // 'Live problem-solving discussion',
  // 'Written session notes',
  // '48-hour follow-up support',
  // 'Optional session recording'
  // ],

  pricing: [
    {
      tier: 'Single Session',
      price: '$300',
      sub: 'One focused advisory session on any pressing question or decision.',
      popular: false,
      features: [
        'Pre-session review',
        '60-minute advisory session',
        'Session notes',
        '48-hour follow-up',
        'Optional recording'
      ],
      cta: 'Get Started'
    },
    {
      tier: 'Session Bundle',
      price: '$810',
      sub: 'Three sessions across your fundraising journey.',
      popular: true,
      features: [
        'Everything in Single Session × 3',
        'Priority scheduling',
        'Session summaries',
        'Async email support between sessions',
        'Flexible usage across fundraise'
      ],
      cta: 'Get Started'
    },
    {
      tier: 'Monthly Advisory',
      price: '$1000 / month',
      sub: 'Ongoing advisory support throughout your fundraise.',
      popular: false,
      features: [
        '4 sessions per month',
        'Unlimited async email access',
        'Material reviews',
        'Deal and term sheet support',
        'Priority response within 24 hours'
      ],
      cta: 'Get Started'
    }
  ],

  pricingNote: STANDARD_PRICING_NOTE,

  finalCta: {
    title: 'Ready to Get the Answer You Need?',
    description: 'Book a single AMA session or a bundle. Start with a free 15-minute fit call.',
    cta: {
      label: 'Book a Session',
      to: '/contact'
    }
  },

 faqs: [
  { q: 'What kinds of questions are best suited for an AMA session?', a: 'Tactical, time-sensitive questions — fundraising strategy, valuation, investor dynamics, pitch review, or decision-making.' },
  { q: 'Do I need a specific problem?', a: 'Not necessarily. Some founders come with one question, others use sessions as ongoing advisory support.' },
  { q: 'How quickly can I book?', a: 'Typically within 5 business days. Faster slots available for urgent needs.' },
  { q: 'Who will I speak with?', a: 'A senior partner with direct VC and operator experience.' },
  { q: 'Can I share materials in advance?', a: 'Yes — sharing materials 24 hours prior improves session quality significantly.' },
  { q: 'Is it confidential?', a: 'Yes. All sessions are strictly confidential, and NDAs can be signed if needed.' },

  { q: 'What kinds of questions are best suited for an AMA session?', a: 'Anything specific to your fundraise: Why am I getting passes after second meetings? How should I respond to this term sheet? How should I size my round? How do I handle a lead investor who wants to move slowly? Is my valuation defensible? How do I structure a convertible note? These are the highest-value questions for our sessions.' },
  { q: 'Do I need to have a specific problem, or can I use it more generally?', a: 'Having specific questions makes the session significantly more valuable. We do ask you to submit your top questions in advance so we can prepare specific, substantive answers rather than generic frameworks. The more specific the question, the more specific and actionable the answer.' },
  { q: 'How quickly can I book a session?', a: 'Standard sessions are available within 3–5 business days. If you have an urgent situation (active term sheet, imminent investor meeting), we offer priority booking within 24–48 hours — just let us know when you inquire.' },
  { q: 'Who specifically will I be talking to?', a: 'Our advisory team consists of former VC investors, operators who have raised multiple rounds, and advisors with fundraising experience across North American and European markets. We\'ll match you with the advisor best suited to your specific question set and sector.' },
  { q: 'Can I share materials in advance for the advisor to review?', a: 'Yes — and we strongly encourage it. Sending your deck, a specific slide, a term sheet, or a financial model in advance allows the advisor to come prepared with specific, substantive feedback rather than general observations.' },
  { q: 'Is this confidential?', a: 'Completely. Everything shared in your session and submitted in advance is treated as strictly confidential. We do not share any materials or details from your engagement with any third parties.' }
]
}
];

export const ARTICLES = [
  {
    slug: 'ten-things-investors-look-for',
    category: 'Pitch Deck',
    readTime: '8 min read',
    date: 'April 12, 2026',
    title:
      'The 10 Things Every Investor Looks for in a Pitch Deck (and Where Most Founders Fall Short)',
    excerpt:
      'After evaluating thousands of early-stage decks, patterns emerge quickly. Here are the exact criteria institutional investors apply and the most common places founders lose the room.',
    accent: 'yellow',
  },
  {
    slug: 'why-financial-model-rejected',
    category: 'Financial Model',
    readTime: '7 min read',
    date: 'March 28, 2026',
    title: 'Why Your Financial Model Gets Rejected (Even When the Business is Strong)',
    excerpt:
      "A weak financial model doesn't just lose you credibility on the numbers — it signals a fundamental gap in how a founder understands their own business. Here's how to fix it before you walk into a meeting.",
    accent: 'turquoise',
  },
  {
    slug: 'anchor-pre-money-valuation',
    category: 'Valuation',
    readTime: '6 min read',
    date: 'March 14, 2026',
    title: 'How to Anchor Your Pre-Money Valuation Without Guessing',
    excerpt:
      'Early-stage valuation is part analysis, part negotiation, and part conviction. Here is the framework we use to triangulate a defensible number.',
    accent: 'teal',
  },
];

export const FEATURED_DOWNLOADS = [
  {
    label: 'Spreadsheet template',
    title: 'Investor-Grade Financial Model',
    cta: 'Download (Google Sheets)',
    accent: 'yellow',
  },
  {
    label: 'Slide template',
    title: 'Pitch Deck Skeleton',
    cta: 'Download (Google Slides)',
    accent: 'turquoise',
  },
   {
    label: 'Finance',
    title: 'Burn Runaway Modeler',
    cta: 'Plug in your expense and MRR, see your runway instantly.Know when to fundraise before its too late.',
    accent: 'turquoise',
    route:'/burnrunway',
  }, {
    label: 'Growth',
    title: 'Revenue Projector',
    cta: 'Model month-on-month growth scenerio.Bull,bear and base cases.',
    accent: 'yellow',
    route: '/revenueprojector',
  }, {
    label: 'Fundraising',
    title: 'SAFE dilution Modeler',
    cta: 'Stack multiple SAFE rounds, see dilution impact before your priced round. Know what you are giving away before you sign the term sheet. ',
    accent: 'yellow',
    route: '/safedilution',
  },
];

export const INVESTOR_PIPELINE_CTA = {
  title: 'Start Building Your Investor Pipeline.',
  description:
    "Let's map your investor universe and build an outreach strategy designed to convert.",
  cta: { label: 'Book a Free Strategy Call', to: '/contact' },
  note: 'No obligation. 30 minutes. All new engagements start here.',
};

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));