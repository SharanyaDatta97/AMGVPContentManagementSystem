// frontend/src/pages/BlogList.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchPosts,
  fetchAssetTypes,
  fetchProblemCategories,
  fetchStageTypes,
  fetchSectors,
} from '../api/payloadClient';

// Color palette
const NAVY = '#0B1F3B';
const GOLD = '#F4B400';
const MUTED = '#6B7280';
const LIGHT_BG = '#F9FAFB';
const BORDER = '#E5E7EB';

// Helper: toggle ID in array
const toggleFilter = (id, setter) => {
  setter((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
};

// Helper: check if post matches multi‑select filter
const postMatchesMulti = (post, selectedIds, key) => {
  if (!selectedIds.length) return true;
  const tags = post[key] || [];
  return tags.some((t) => selectedIds.includes(t.id));
};

// Helper: collect all tags from a post for searching (if needed)
const getAllPostTags = (post) => {
  const tags = [
    ...(post.problemCategories || []),
    ...(post.stageTypes || []),
    ...(post.sectors || []),
  ];
  if (post.assetType) tags.push(post.assetType);
  return tags;
};

// ---------- MultiSelectDropdown Component ----------
const MultiSelectDropdown = ({ options, selectedIds, onChange, placeholder, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  // Filter options based on search
  const filteredOptions = options.filter(opt =>
    opt.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Selected option objects
  const selectedOptions = options.filter(opt => selectedIds.includes(opt.id));

  const handleToggle = (id) => {
    onChange(id);
  };

  const removeSelected = (id) => {
    onChange(id);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }} ref={dropdownRef}>
      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: '12px',
          padding: '8px 12px',
          cursor: 'pointer',
          background: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '6px',
          minHeight: '44px',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length === 0 ? (
          <span style={{ color: '#9CA3AF', fontSize: '14px' }}>{placeholder}</span>
        ) : (
          selectedOptions.map(opt => (
            <span
              key={opt.id}
              style={{
                background: '#F3F4F6',
                borderRadius: '20px',
                padding: '4px 10px',
                fontSize: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {opt.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelected(opt.id);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#6B7280',
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </span>
          ))
        )}
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#9CA3AF' }}>▼</span>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            background: 'white',
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 100,
            maxHeight: '280px',
            overflow: 'auto',
          }}
        >
          <div style={{ padding: '8px' }}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                border: `1px solid ${BORDER}`,
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '8px',
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {filteredOptions.map(opt => (
                <div
                  key={opt.id}
                  onClick={() => {
                    handleToggle(opt.id);
                    setSearch('');
                  }}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '8px',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#F9FAFB'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                >
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(opt.id)}
                    readOnly
                    style={{ pointerEvents: 'none' }}
                  />
                  <span style={{ fontSize: '14px' }}>{opt.name}</span>
                </div>
              ))}
              {filteredOptions.length === 0 && (
                <div style={{ padding: '20px', textAlign: 'center', color: '#9CA3AF' }}>
                  No options found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ---------- Sector Button (unchanged) ----------
const SectorButton = ({ tag, active, onClick }) => {
  const hasColor = tag.color && !active;
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? (tag.color || NAVY) : 'white',
        color: active ? 'white' : NAVY,
        border: `1px solid ${active ? (tag.color || NAVY) : (tag.color || BORDER)}`,
        borderRadius: '40px',
        padding: '6px 16px',
        fontSize: '13px',
        fontWeight: active ? '600' : '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      {tag.icon && <span>{tag.icon}</span>}
      {tag.name}
    </button>
  );
};

// ---------- Asset Type Button ----------
const AssetTypeButton = ({ type, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: active ? NAVY : 'white',
      color: active ? 'white' : NAVY,
      border: `1px solid ${active ? NAVY : BORDER}`,
      borderRadius: '40px',
      padding: '10px 24px',
      fontSize: '15px',
      fontWeight: active ? '600' : '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}
  >
    {type.name}
  </button>
);

// ---------- Main BlogList Component ----------
const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [assetTypes, setAssetTypes] = useState([]);
  const [problemCategories, setProblemCategories] = useState([]);
  const [stageTypes, setStageTypes] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [selectedAssetType, setSelectedAssetType] = useState(null);
  const [selectedProblemCategories, setSelectedProblemCategories] = useState([]);
  const [selectedStageTypes, setSelectedStageTypes] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTagFilters, setShowTagFilters] = useState(false);

  // Fetch data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [postsData, assetData, problemData, stageData, sectorData] = await Promise.all([
          fetchPosts(),
          fetchAssetTypes(),
          fetchProblemCategories(),
          fetchStageTypes(),
          fetchSectors(),
        ]);
        setPosts(postsData);
        setAssetTypes(assetData);
        setProblemCategories(problemData);
        setStageTypes(stageData);
        setSectors(sectorData);
      } catch (error) {
        console.error('Error loading blog data:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedAssetType(null);
    setSelectedProblemCategories([]);
    setSelectedStageTypes([]);
    setSelectedSectors([]);
    setShowTagFilters(false);
  };

  // Handle asset type click
  const handleAssetTypeClick = (assetTypeId) => {
    if (selectedAssetType === assetTypeId) {
      setSelectedAssetType(null);
      setShowTagFilters(false);
    } else {
      setSelectedAssetType(assetTypeId);
      setShowTagFilters(true);
    }
  };

  // Filter posts
  const filteredPosts = useMemo(() => {
    let result = posts.filter((post) => {
      if (selectedAssetType && post.assetType?.id !== selectedAssetType) return false;
      if (!postMatchesMulti(post, selectedProblemCategories, 'problemCategories')) return false;
      if (!postMatchesMulti(post, selectedStageTypes, 'stageTypes')) return false;
      if (!postMatchesMulti(post, selectedSectors, 'sectors')) return false;
      return true;
    });
    return result;
  }, [posts, selectedAssetType, selectedProblemCategories, selectedStageTypes, selectedSectors]);

  const hasActiveFilters = selectedAssetType !== null ||
    selectedProblemCategories.length > 0 ||
    selectedStageTypes.length > 0 ||
    selectedSectors.length > 0;

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 20px' }}>Loading insights...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0F2D4A 100%)`,
        color: 'white',
        padding: '80px 20px 64px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
            color: GOLD,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '13px',
            fontWeight: 600,
            display: 'block',
            marginBottom: '16px',
          }}>
            Insights & Perspectives
          </span>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            margin: '0 0 20px',
            lineHeight: 1.2,
          }}>
            Fundraising Intelligence
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Practical frameworks, investor‑perspective analysis, and founder‑tested strategies — 
            from the team behind $100M+ in supported capital raises.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Asset Type Buttons */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: showTagFilters ? '32px' : '0',
          }}>
            <button
              onClick={resetAllFilters}
              style={{
                background: !hasActiveFilters ? NAVY : 'white',
                color: !hasActiveFilters ? 'white' : NAVY,
                border: `1px solid ${!hasActiveFilters ? NAVY : BORDER}`,
                borderRadius: '40px',
                padding: '10px 24px',
                fontSize: '15px',
                fontWeight: !hasActiveFilters ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All
            </button>
            {assetTypes.map((type) => (
              <AssetTypeButton
                key={type.id}
                type={type}
                active={selectedAssetType === type.id}
                onClick={() => handleAssetTypeClick(type.id)}
              />
            ))}
          </div>
        </div>

        {/* Tag Filters (visible only when an asset type is selected) */}
        {showTagFilters && (
          <div style={{
            background: LIGHT_BG,
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '48px',
            border: `1px solid ${BORDER}`,
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {/* Problem Categories Dropdown */}
              <div style={{ flex: '1 1 280px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: NAVY, marginBottom: '6px', display: 'block' }}>
                  Problem Categories
                </label>
                <MultiSelectDropdown
                  options={problemCategories}
                  selectedIds={selectedProblemCategories}
                  onChange={(id) => toggleFilter(id, setSelectedProblemCategories)}
                  placeholder="Select problem categories..."
                />
              </div>

              {/* Stage Types Dropdown */}
              <div style={{ flex: '1 1 280px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: NAVY, marginBottom: '6px', display: 'block' }}>
                  Stage Types
                </label>
                <MultiSelectDropdown
                  options={stageTypes}
                  selectedIds={selectedStageTypes}
                  onChange={(id) => toggleFilter(id, setSelectedStageTypes)}
                  placeholder="Select stage types..."
                />
              </div>
            </div>

            {/* Sectors as Buttons */}
            <div style={{ marginTop: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: NAVY, marginBottom: '12px', display: 'block' }}>
                Sectors
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <button
                  onClick={() => setSelectedSectors([])}
                  style={{
                    background: selectedSectors.length === 0 ? NAVY : 'white',
                    color: selectedSectors.length === 0 ? 'white' : NAVY,
                    border: `1px solid ${selectedSectors.length === 0 ? NAVY : BORDER}`,
                    borderRadius: '40px',
                    padding: '6px 16px',
                    fontSize: '13px',
                    fontWeight: selectedSectors.length === 0 ? '600' : '500',
                    cursor: 'pointer',
                  }}
                >
                  All
                </button>
                {sectors.map((tag) => {
                  const active = selectedSectors.includes(tag.id);
                  return (
                    <SectorButton
                      key={tag.id}
                      tag={tag}
                      active={active}
                      onClick={() => toggleFilter(tag.id, setSelectedSectors)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Post Count */}
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <span style={{ color: MUTED, fontSize: '14px' }}>
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: MUTED }}>
            <p>No articles match your current filters.</p>
            <button
              onClick={resetAllFilters}
              style={{
                marginTop: '16px',
                background: 'none',
                border: 'none',
                color: GOLD,
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'underline',
              }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  border: `1px solid ${BORDER}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                    />
                  )}
                  <div style={{ padding: '24px' }}>
                    {post.assetType && (
                      <span style={{
                        display: 'inline-block',
                        background: GOLD,
                        color: NAVY,
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        marginBottom: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        {post.assetType.name}
                      </span>
                    )}
                    <h2 style={{
                      fontSize: '20px',
                      margin: '0 0 12px',
                      color: NAVY,
                      lineHeight: '1.4',
                      fontWeight: 700,
                    }}>
                      {post.title}
                    </h2>
                    <p style={{ color: MUTED, fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px' }}>
                      {(post.excerpt || '').substring(0, 140)}
                      {(post.excerpt || '').length > 140 ? '…' : ''}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                      {(post.problemCategories || []).slice(0, 2).map((tag) => (
                        <span
                          key={tag.id}
                          style={{
                            background: '#F3F4F6',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '11px',
                            color: '#4B5563',
                          }}
                        >
                          {tag.name}
                        </span>
                      ))}
                      {post.problemCategories?.length > 2 && (
                        <span style={{ fontSize: '11px', color: MUTED }}>
                          +{post.problemCategories.length - 2}
                        </span>
                      )}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '8px',
                      paddingTop: '12px',
                      borderTop: `1px solid ${BORDER}`,
                    }}>
                      <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                        {post.publishedDate}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 500, color: GOLD }}>
                        Read article →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;