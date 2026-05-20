// frontend/src/mock-api/posts.js

// This is our temporary mock data. Later we'll replace it with real API calls.

const climatetechArticleHtml = `
<p>The ClimateTech market is no longer rewarding ambition alone. It is rewarding <strong>execution</strong>. That is the defining shift of 2026.</p>
<p>For years, ClimateTech startups benefited from abundant capital, ESG momentum, aggressive climate narratives, and investor optimism around future impact. But the market has fundamentally evolved.</p>
<p>Investors are now concentrating capital into companies with real commercial traction, infrastructure-scale execution capability, proven deployment pathways, strong unit economics, and credible financing strategies.</p>
<p><strong>The era of climate execution has arrived.</strong></p>

<div class="key-takeaways">
  <div class="kt-label">Key Takeaways</div>
  <ul>
    <li>ClimateTech capital is concentrating into fewer, more execution-ready companies.</li>
    <li>Economic value creation now matters more than mission-first storytelling.</li>
    <li>AI-energy convergence is creating massive commercial opportunity.</li>
    <li>Blended finance fluency is becoming a critical founder skill.</li>
  </ul>
</div>

<h2 id="s1">The ClimateTech Market Has Changed</h2>
<div class="section-img"><div class="section-img-placeholder"><span>The ClimateTech Market — 2026 Overview</span></div></div>
<p>ClimateTech remains one of the most important global investment categories. Global ClimateTech investment exceeded approximately <strong>$40B in 2025</strong>. At the same time, Series B deal counts declined and investors demanded stronger commercial proof.</p>
<h3>The Most Important Market Shift</h3>
<p>Capital is increasingly flowing toward commercially validated companies and proven deployment pathways — not speculative pre-revenue narratives.</p>
<ul>
  <li>Commercially validated companies with real customer revenue</li>
  <li>Infrastructure-ready businesses with deployment track records</li>
  <li>Scalable industrial platforms with defensible unit economics</li>
</ul>

<h2 id="s2">Step 1: Reframe Your Positioning From Mission to Mechanism</h2>
<div class="section-img"><div class="section-img-placeholder"><span>Step 1 — Positioning Framework</span></div></div>
<p>In 2026, mission statements are table stakes. What separates funded founders is translating mission into <strong>mechanism</strong> — a clear, repeatable commercial pathway.</p>

<h2 id="s3">Step 2: Build a Bottom-Up Commercial Narrative</h2>
<div class="section-img"><div class="section-img-placeholder"><span>Step 2 — Commercial Narrative Framework</span></div></div>
<p>The commercial narrative that works is <strong>bottom-up and time-bounded</strong> — not top-down and aspirational.</p>

<h2 id="s4">Step 3: Convert Your Commercial Proof Into a Fundable Narrative</h2>
<p>Your funding narrative should follow:</p>
<div class="formula-block"><p><strong>Fundable Narrative = Commercial Proof + Deployment Pathway + Capital Efficiency + Risk Mitigation</strong></p></div>

<h2 id="s5">Step 4: Stress-Test Your Positioning</h2>
<p>Most ClimateTech raises fail on deployment speed, not technology quality. Stress-test permitting, supply chain, and enterprise sales cycles.</p>

<h2 id="s6">Step 5: Turn Your Positioning Into an Investor-Ready Story</h2>
<p>A strong investor narrative is a logical chain: <strong>Problem → Proof → Pathway → Capital → Milestones</strong>.</p>

<h2 id="s7">Founder Worksheet: Questions to Answer Before You Pitch</h2>
<ol class="worksheet-list">
  <li><div class="wl-num">1</div><span>What is the single commercial milestone that makes your next raise materially easier?</span></li>
  <li><div class="wl-num">2</div><span>Which measurable targets confirm that milestone — and by when?</span></li>
  <li><div class="wl-num">3</div><span>What is your full capital stack — and which parts are confirmed vs. speculative?</span></li>
</ol>

<h2 id="s8">Conclusion</h2>
<p>The right ClimateTech positioning in 2026 is a clear, commercial answer to what proof you will deliver and how you will deploy capital to reach it.</p>

<div class="faq-section">
  <h2>FAQ</h2>
  <div class="faq-item">
    <div class="faq-q">How should a pre-revenue founder position for seed funding in 2026?</div>
    <div class="faq-a">Pre-revenue does not disqualify you — it changes what proof you need: LOIs, pilots, regulatory progress, or Tier 1 partnership signals.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q">How do I use blended finance in my narrative?</div>
    <div class="faq-a">Present your capital stack with clear status labels: awarded, term sheet, applied for, or exploratory.</div>
  </div>
</div>
`.trim();

export const mockPosts = [
  {
    id: '1',
    title: 'How ClimateTech Founders Should Position Themselves in 2026',
    slug: 'how-climatetech-founders-should-position-themselves-in-2026',
    excerpt:
      'The definitive founder playbook for raising capital, attracting enterprise customers, and building credibility in a maturing ClimateTech market.',
    featuredImage: 'https://via.placeholder.com/1200x525?text=ClimateTech+2026',
    publishedDate: 'May 6, 2026',
    readTime: '15 min read',
    author: 'AMG Venture Partners Editorial Team',
    coverLabel: 'ClimateTech 2026 · AMG Venture Partners',
    topics: [
      { id: 't1', name: 'ClimateTech Strategy', slug: 'climatetech-strategy' },
      { id: 't2', name: 'Fundraising', slug: 'fundraising' },
    ],
    content: climatetechArticleHtml,
  },
  {
    id: '2',
    title: 'Pre-Seed Fundraising Checklist: Investor-Ready Signals',
    slug: 'pre-seed-fundraising-checklist',
    excerpt:
      'A practical pre-seed checklist, readiness scorecard, traction milestones, cheque sizes, and investor types.',
    featuredImage: 'https://via.placeholder.com/800x400?text=Fundraising',
    publishedDate: 'January 7, 2026',
    readTime: '12 min read',
    topics: [
      { id: 't2', name: 'Fundraising', slug: 'fundraising' },
      { id: 't3', name: 'Startup Strategy', slug: 'startup-strategy' },
    ],
    content: `
      <p>Fundraising is hard. This checklist covers investor-ready signals before you enter conversations.</p>
      <h2 id="ps1">Readiness snapshot</h2>
      <p>Start with narrative clarity, traction proof, and a credible plan for the next 12–18 months.</p>
      <h2 id="ps2">What investors scan first</h2>
      <p>Team, market, traction, and capital efficiency — in that order for many early-stage funds.</p>
    `,
  },
  {
    id: '3',
    title: 'How Biotech Investors Actually Value Your Company',
    slug: 'how-biotech-investors-value-companies',
    excerpt:
      'Valuation frameworks, investor logic, and what founders consistently get wrong in biotech raises.',
    featuredImage: 'https://via.placeholder.com/800x400?text=Biotech',
    publishedDate: 'April 2026',
    readTime: '10 min read',
    topics: [
      { id: 't4', name: 'Biotech', slug: 'biotech' },
      { id: 't2', name: 'Fundraising', slug: 'fundraising' },
    ],
    content: `
      <p>Biotech valuation blends science risk, regulatory path, and financing structure.</p>
      <h2 id="bt1">Clinical and regulatory milestones</h2>
      <p>Investors anchor on de-risking events that change probability of success.</p>
      <h2 id="bt2">Capital intensity and partnerships</h2>
      <p>Partnerships and non-dilutive funding can materially change your equity story.</p>
    `,
  },
];

export const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 500);
  });
};

export const fetchPostBySlug = (slug) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find((p) => p.slug === slug);
      resolve(post);
    }, 500);
  });
};

export const fetchTopics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const topicsMap = new Map();
      mockPosts.forEach((post) => {
        post.topics.forEach((topic) => {
          if (!topicsMap.has(topic.id)) {
            topicsMap.set(topic.id, topic);
          }
        });
      });
      resolve(Array.from(topicsMap.values()));
    }, 500);
  });
};
