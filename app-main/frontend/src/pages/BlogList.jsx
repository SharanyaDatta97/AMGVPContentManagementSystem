// frontend/src/pages/BlogList.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchPosts,
  fetchTopics,
  fetchStages,
  fetchIndustries,
  fetchContentTypes,
  fetchFunnelStages,
} from '../api/posts';

const NAVY = '#0B1F3B';
const GOLD = '#F4B400';
const MUTED = '#6B7280';

const filterBtnBase = {
  border: '1px solid #E5E7EB',
  borderRadius: '20px',
  padding: '6px 14px',
  margin: '0 6px 8px 0',
  cursor: 'pointer',
  fontSize: '13px',
  lineHeight: 1.3,
  transition: 'background 0.15s, color 0.15s, border-color 0.15s',
};

function activeFilterStyle(active) {
  return {
    ...filterBtnBase,
    background: active ? GOLD : 'white',
    color: active ? '#fff' : NAVY,
    fontWeight: active ? 'bold' : 'normal',
    borderColor: active ? GOLD : '#E5E7EB',
  };
}

function toggleFilter(id, setter, selected) {
  setter((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
  );
}

function postMatchesCategory(post, selectedIds, tagsKey) {
  if (!selectedIds.length) return true;
  const tags = post[tagsKey] || [];
  return tags.some((t) => selectedIds.includes(t.id));
}

function getAllPostTags(post) {
  return [
    ...(post.topics || []),
    ...(post.stages || []),
    ...(post.industries || []),
    ...(post.contentTypes || []),
    ...(post.funnelStage ? [post.funnelStage] : []),
  ];
}

function FilterSection({
  title,
  tags,
  selectedIds,
  onClear,
  onToggle,
  renderTagLabel,
  getButtonStyle,
}) {
  return (
    <div className="filter-section" style={{ marginBottom: '22px' }}>
      <h4
        style={{
          margin: '0 0 10px',
          fontSize: '14px',
          fontWeight: 600,
          color: NAVY,
        }}
      >
        {title}
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <button type="button" onClick={onClear} style={activeFilterStyle(selectedIds.length === 0)}>
          All
        </button>
        {tags.map((tag) => {
          const active = selectedIds.includes(tag.id);
          const style = getButtonStyle ? getButtonStyle(tag, active) : activeFilterStyle(active);
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => onToggle(tag.id)}
              style={style}
            >
              {renderTagLabel ? renderTagLabel(tag, active) : tag.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [stages, setStages] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);
  const [funnelStages, setFunnelStages] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedStages, setSelectedStages] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedContentTypes, setSelectedContentTypes] = useState([]);
  const [selectedFunnelStage, setSelectedFunnelStage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [
          postsData,
          topicsData,
          stagesData,
          industriesData,
          contentTypesData,
          funnelStagesData,
        ] = await Promise.all([
          fetchPosts(),
          fetchTopics(),
          fetchStages(),
          fetchIndustries(),
          fetchContentTypes(),
          fetchFunnelStages(),
        ]);
        setPosts(postsData);
        setTopics(topicsData);
        setStages(stagesData);
        setIndustries(industriesData);
        setContentTypes(contentTypesData);
        setFunnelStages(funnelStagesData);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const clearAllFilters = () => {
    setSelectedTopics([]);
    setSelectedStages([]);
    setSelectedIndustries([]);
    setSelectedContentTypes([]);
    setSelectedFunnelStage(null);
    setSearchTerm('');
  };

  const hasActiveFilters =
    selectedTopics.length > 0 ||
    selectedStages.length > 0 ||
    selectedIndustries.length > 0 ||
    selectedContentTypes.length > 0 ||
    selectedFunnelStage != null ||
    searchTerm.trim().length > 0;

  const filteredPosts = useMemo(() => {
    let result = posts.filter((post) => {
      if (!postMatchesCategory(post, selectedTopics, 'topics')) return false;
      if (!postMatchesCategory(post, selectedStages, 'stages')) return false;
      if (!postMatchesCategory(post, selectedIndustries, 'industries')) return false;
      if (!postMatchesCategory(post, selectedContentTypes, 'contentTypes')) return false;
      if (selectedFunnelStage && post.funnelStage?.id !== selectedFunnelStage) return false;
      return true;
    });

    const term = searchTerm.trim().toLowerCase();
    if (term) {
      result = result.filter((post) =>
        getAllPostTags(post).some((t) => t.name.toLowerCase().includes(term)),
      );
    }

    return result;
  }, [
    posts,
    selectedTopics,
    selectedStages,
    selectedIndustries,
    selectedContentTypes,
    selectedFunnelStage,
    searchTerm,
  ]);

  const industryButtonStyle = (tag, active) => {
    const color = tag.color;
    if (color && active) {
      return {
        ...filterBtnBase,
        background: color,
        color: '#fff',
        fontWeight: 'bold',
        borderColor: color,
      };
    }
    if (color) {
      return {
        ...filterBtnBase,
        background: 'white',
        color: NAVY,
        fontWeight: 'normal',
        borderColor: color,
        borderWidth: '2px',
      };
    }
    return activeFilterStyle(active);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading blog posts...</div>;
  }

  return (
    <div
      style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'flex', gap: '40px' }}
    >
      <aside style={{ width: '280px', flexShrink: 0 }}>
        <button
          type="button"
          onClick={clearAllFilters}
          style={{
            ...activeFilterStyle(!hasActiveFilters),
            width: '100%',
            marginBottom: '20px',
            padding: '10px 16px',
            borderRadius: '8px',
          }}
        >
          All Posts
        </button>

        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="blog-tag-search"
            style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: NAVY, marginBottom: '8px' }}
          >
            Search tags
          </label>
          <input
            id="blog-tag-search"
            type="text"
            placeholder="Search tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px',
              color: NAVY,
              boxSizing: 'border-box',
            }}
          />
        </div>

        <FilterSection
          title="Topics"
          tags={topics}
          selectedIds={selectedTopics}
          onClear={() => setSelectedTopics([])}
          onToggle={(id) => toggleFilter(id, setSelectedTopics, selectedTopics)}
        />

        <FilterSection
          title="Stages"
          tags={stages}
          selectedIds={selectedStages}
          onClear={() => setSelectedStages([])}
          onToggle={(id) => toggleFilter(id, setSelectedStages, selectedStages)}
        />

        <FilterSection
          title="Industries"
          tags={industries}
          selectedIds={selectedIndustries}
          onClear={() => setSelectedIndustries([])}
          onToggle={(id) => toggleFilter(id, setSelectedIndustries, selectedIndustries)}
          getButtonStyle={industryButtonStyle}
          renderTagLabel={(tag) => (
            <>
              {tag.icon ? <span style={{ marginRight: 6 }}>{tag.icon}</span> : null}
              {tag.name}
            </>
          )}
        />

        <FilterSection
          title="Content Types"
          tags={contentTypes}
          selectedIds={selectedContentTypes}
          onClear={() => setSelectedContentTypes([])}
          onToggle={(id) => toggleFilter(id, setSelectedContentTypes, selectedContentTypes)}
        />

        <div className="filter-section" style={{ marginBottom: '22px' }}>
          <h4 style={{ margin: '0 0 10px', fontSize: '14px', fontWeight: 600, color: NAVY }}>
            Funnel Stages
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setSelectedFunnelStage(null)}
              style={activeFilterStyle(selectedFunnelStage == null)}
            >
              All
            </button>
            {funnelStages.map((tag) => {
              const active = selectedFunnelStage === tag.id;
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => setSelectedFunnelStage(active ? null : tag.id)}
                  style={activeFilterStyle(active)}
                >
                  {tag.name}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {filteredPosts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: MUTED, padding: '40px' }}>
            No posts match your filters.
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                background: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    {(post.topics || []).map((topic) => (
                      <span
                        key={topic.id}
                        style={{
                          background: '#F3F4F6',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          color: '#4B5563',
                        }}
                      >
                        {topic.name}
                      </span>
                    ))}
                  </div>
                  <h2 style={{ fontSize: '18px', marginBottom: '10px', color: NAVY, lineHeight: '1.4' }}>
                    {post.title}
                  </h2>
                  <p style={{ color: MUTED, fontSize: '14px', marginBottom: '12px', lineHeight: '1.6' }}>
                    {(post.excerpt || '').substring(0, 120)}
                    {(post.excerpt || '').length > 120 ? '…' : ''}
                  </p>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    {(post.stages || []).map((t) => (
                      <span
                        key={`s-${t.id}`}
                        style={{
                          background: '#EEF2FF',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          color: '#4338CA',
                        }}
                      >
                        {t.name}
                      </span>
                    ))}
                    {(post.industries || []).map((t) => (
                      <span
                        key={`i-${t.id}`}
                        style={{
                          background: t.color || '#ECFDF5',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          color: t.color ? '#fff' : '#047857',
                        }}
                      >
                        {t.icon ? `${t.icon} ` : ''}
                        {t.name}
                      </span>
                    ))}
                    {(post.contentTypes || []).map((t) => (
                      <span
                        key={`c-${t.id}`}
                        style={{
                          background: '#FEF3C7',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          color: '#B45309',
                        }}
                      >
                        {t.name}
                      </span>
                    ))}
                    {post.funnelStage && (
                      <span
                        style={{
                          background: '#FCE7F3',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          color: '#9D174D',
                        }}
                      >
                        {post.funnelStage.name}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF' }}>{post.publishedDate}</div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;
