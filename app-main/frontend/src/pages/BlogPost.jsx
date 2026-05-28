import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { fetchPostBySlug, fetchPosts } from '../api/payloadClient';
import './BlogPost.css';

const CTA_LABELS = {
  'pitch-deck-review': 'Pitch Deck Review',
  'pitch-deck-creation': 'Pitch Deck Creation',
  'financial-model': 'Financial Model',
  valuation: 'Valuation',
  'investor-outreach': 'Investor Outreach',
  'investment-readiness-review': 'Investment Readiness Review',
  'ama-sessions': 'AMA Sessions',
};

const ctaLinks = {
  'pitch-deck-review': '/services/pitch-deck-review',
  'pitch-deck-creation': '/services/pitch-deck-creation',
  'financial-model': '/services/financial-model',
  valuation: '/services/valuation',
  'investor-outreach': '/services/investor-outreach',
  'investment-readiness-review': '/services/investment-readiness-review',
  'ama-sessions': '/services/ama-sessions',
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Ensure every h2 has an id for TOC anchors */
function ensureH2Ids(html) {
  if (!html) return '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  let auto = 0;
  doc.body.querySelectorAll('h2').forEach((h2) => {
    if (!h2.id) {
      auto += 1;
      const base = slugify(h2.textContent || `section-${auto}`);
      h2.id = base ? `s-${base}`.slice(0, 80) : `s-${auto}`;
    }
  });
  return doc.body.innerHTML;
}

function extractTocFromHtml(html) {
  if (!html) return [];
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return Array.from(doc.querySelectorAll('h2')).map((h2, idx) => ({
    id: h2.id || `missing-${idx}`,
    title: (h2.textContent || '').trim(),
  }));
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articleRef = useRef(null);

  const processedContent = useMemo(() => ensureH2Ids(post?.content || ''), [post]);

  const tocItems = useMemo(() => extractTocFromHtml(processedContent), [processedContent]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [p, all] = await Promise.all([fetchPostBySlug(slug), fetchPosts()]);
        if (cancelled) return;
        if (!p) {
          setPost(null);
          setError('notfound');
        } else {
          setPost(p);
          setRelatedPosts((all || []).filter((x) => x.slug !== p.slug).slice(0, 4));
        }
      } catch {
        if (!cancelled) setError('network');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (!post || loading || !articleRef.current) return;
    const article = articleRef.current;
    const sections = article.querySelectorAll('h2[id]');
    const tocLinks = article.closest('.blog-post-page')?.querySelectorAll('.toc-link');
    if (!sections.length || !tocLinks?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tocLinks.forEach((l) => {
              l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [post, loading, processedContent]);

  const authorName = post?.author || 'AMG Venture Partners Editorial Team';
  const readTime = post?.readTime || '8 min read';
  const primaryCategory = post?.problemCategories?.[0];
  const coverLabel =
    post?.coverLabel ||
    (primaryCategory
      ? `${primaryCategory.name} · AMG Venture Partners`
      : post?.assetType
        ? `${post.assetType.name} · AMG Venture Partners`
        : 'AMG Venture Partners');

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-loading">Loading article…</div>
        <Footer />
      </div>
    );
  }

  if (error === 'notfound' || !post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-error">
          <h1>Post not found</h1>
          <p>We couldn&apos;t find a blog post for this URL.</p>
          <p>
            <Link to="/blog">Back to Blog</Link>
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error === 'network') {
    return (
      <div className="blog-post-page">
        <div className="blog-post-error">
          <h1>Something went wrong</h1>
          <p>Please try again in a moment.</p>
          <p>
            <Link to="/blog">Back to Blog</Link>
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-back">
        <Link to="/blog">← Back to Blog</Link>
      </div>

      <div className="breadcrumb">
        <Link to="/blog">Blog</Link>
        <span className="sep">›</span>
        {primaryCategory && (
          <>
            <Link to="/blog" className="cat-badge">
              {primaryCategory.name}
            </Link>
            <span className="sep">›</span>
          </>
        )}
        <span style={{ color: 'var(--text-muted)' }}>{post.publishedDate}</span>
      </div>

      <div className="blog-header">
        <div className="post-date">{post.publishedDate}</div>
        <div className="topic-badges" aria-label="Tags">
          {post.assetType && (
            <span className="topic-badge" style={{ background: '#FEF3C7', color: '#92400E' }}>
              {post.assetType.name}
            </span>
          )}
          {(post.problemCategories || []).map((t) => (
            <span key={`pc-${t.id}`} className="topic-badge">
              {t.name}
            </span>
          ))}
        </div>
        {(post.stageTypes?.length > 0 || post.sectors?.length > 0) && (
          <div className="topic-badges" aria-label="Additional tags" style={{ marginTop: 8 }}>
            {(post.stageTypes || []).map((t) => (
              <span key={`st-${t.id}`} className="topic-badge" style={{ background: '#EEF2FF', color: '#3730A3' }}>
                {t.name}
              </span>
            ))}
            {(post.sectors || []).map((t) => (
              <span
                key={`sec-${t.id}`}
                className="topic-badge"
                style={{
                  background: t.color || '#ECFDF5',
                  color: t.color ? '#fff' : '#065F46',
                }}
              >
                {t.icon ? `${t.icon} ` : ''}
                {t.name}
              </span>
            ))}
          </div>
        )}
        <h1>{post.title}</h1>
        <p className="blog-subtitle">{post.excerpt}</p>
        <div className="author-row">
          <div className="author-avatar" aria-hidden>
            AMG
          </div>
          <div>
            <div className="author-name">{authorName}</div>
            <div className="author-meta">
              {post.publishedDate}
              <span>·</span>
              {readTime}
              {primaryCategory && (
                <>
                  <span>·</span>
                  {primaryCategory.name}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="cover-wrap">
        <div className={`cover-img-box${post.featuredImage ? ' has-image' : ''}`}>
          {post.featuredImage && (
            <div
              className="cover-bg"
              style={{ backgroundImage: `url(${post.featuredImage})` }}
              role="img"
              aria-label=""
            />
          )}
          <div className="cover-caption">
            <div className="label">{coverLabel}</div>
            <h2>{post.title}</h2>
          </div>
        </div>
      </div>

      <div className="blog-body">
        <div className="article-column">
          <article
            ref={articleRef}
            className="article-content"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {post.relatedServiceCta && ctaLinks[post.relatedServiceCta] && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '48px 0 32px',
              }}
            >
              <Link
                to={ctaLinks[post.relatedServiceCta]}
                style={{
                  display: 'inline-block',
                  background: '#F4B400',
                  color: '#0B1F3B',
                  fontWeight: 700,
                  fontSize: '16px',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
              >
                {CTA_LABELS[post.relatedServiceCta] || post.relatedServiceCta}
              </Link>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="more-articles">
              <h2>More Articles</h2>
              <div className="article-grid">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="article-card">
                    <div className="ac-cat">
                      {rp.problemCategories?.[0]?.name || rp.assetType?.name || 'Insights'}
                    </div>
                    <div className="ac-title">{rp.title}</div>
                    <div className="ac-desc">{rp.excerpt}</div>
                    <div className="ac-date">{rp.publishedDate}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="sidebar" aria-label="Article sidebar">
          {tocItems.length > 0 && (
            <div className="sidebar-toc">
              <div className="s-label">In This Article</div>
              {tocItems.map((item, i) => (
                <a key={item.id} href={`#${item.id}`} className="toc-link">
                  <span className="toc-num">{String(i + 1).padStart(2, '0')}</span>
                  {item.title}
                </a>
              ))}
            </div>
          )}

          <div className="sidebar-cta">
            <h4>Ready to Raise?</h4>
            <p>
              AMG works directly with early-stage founders to pressure-test their investor narrative,
              build fundraising strategy, and connect with the right capital globally.
            </p>
            <a href="https://www.amgvp.com/" target="_blank" rel="noopener noreferrer">
              Work With AMG →
            </a>
          </div>

          <div className="sidebar-share">
            <div className="s-label">Share This Article</div>
            <div className="share-btns">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
              >
                Twitter / X
              </a>
              <button
                type="button"
                className="share-btn"
                onClick={() => {
                  if (navigator.clipboard?.writeText && typeof window !== 'undefined') {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                Copy Link
              </button>
            </div>
          </div>
        </aside>
      </div>

      <div className="blog-post-back" style={{ paddingBottom: 48 }}>
        <Link to="/blog">← Back to Blog</Link>
      </div>

      <Footer />
    </div>
  );
}
