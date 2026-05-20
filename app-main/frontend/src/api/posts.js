import axios from 'axios';
import { format, parseISO } from 'date-fns';

const API_BASE = 'http://localhost:3000/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
});

function mapTag(doc, options = {}) {
  if (!doc || typeof doc !== 'object') return null;
  const id = doc.id != null ? String(doc.id) : '';
  const tag = {
    id,
    name: doc.name || '',
    slug: doc.slug || '',
  };
  if (options.includeIndustryMeta) {
    if (doc.icon) tag.icon = String(doc.icon);
    if (doc.color) tag.color = String(doc.color);
  }
  return tag;
}

function mapTags(value, options = {}) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : [value];
  return list.map((doc) => mapTag(doc, options)).filter(Boolean);
}

function formatPublishedDate(value) {
  if (!value) return '';
  try {
    const d = typeof value === 'string' ? parseISO(value) : new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return format(d, 'MMMM d, yyyy');
  } catch {
    return String(value);
  }
}

function mapPost(doc) {
  if (!doc) return null;
  const topics = mapTags(doc.topics);
  const stages = mapTags(doc.stages);
  const industries = mapTags(doc.industries, { includeIndustryMeta: true });
  const contentTypes = mapTags(doc.contentTypes);
  const funnelArr = mapTags(doc.funnelStage);
  const funnelStage = funnelArr[0] || null;

  const excerpt = doc.excerpt != null ? String(doc.excerpt) : '';
  const featuredImage =
    doc.featuredImage && String(doc.featuredImage).trim()
      ? String(doc.featuredImage).trim()
      : 'https://via.placeholder.com/1200x525?text=AMG+Insights';

  return {
    id: String(doc.id),
    title: doc.title || '',
    slug: doc.slug || '',
    excerpt,
    featuredImage,
    publishedDate: formatPublishedDate(doc.publishedDate),
    readTime: doc.readTime || '8 min read',
    author: doc.author || 'AMG Venture Partners Editorial Team',
    coverLabel: doc.coverLabel || undefined,
    topics,
    stages,
    industries,
    contentTypes,
    funnelStage,
    content: doc.content != null ? String(doc.content) : '',
  };
}

export async function fetchPosts() {
  const { data } = await client.get('/posts', {
    params: {
      limit: 100,
      depth: 2,
      sort: '-publishedDate',
    },
  });
  const docs = data?.docs || [];
  return docs.map(mapPost).filter(Boolean);
}

export async function fetchPostBySlug(slug) {
  const { data } = await client.get('/posts', {
    params: {
      'where[slug][equals]': slug,
      limit: 1,
      depth: 2,
    },
  });
  const doc = data?.docs?.[0];
  return mapPost(doc);
}

async function fetchTagCollection(endpoint, options = {}) {
  const { data } = await client.get(`/${endpoint}`, {
    params: {
      limit: 500,
      depth: 0,
      sort: 'name',
    },
  });
  const docs = data?.docs || [];
  return docs.map((doc) => mapTag(doc, options)).filter(Boolean);
}

export async function fetchTopics() {
  return fetchTagCollection('topics');
}

export async function fetchStages() {
  return fetchTagCollection('stages');
}

export async function fetchIndustries() {
  return fetchTagCollection('industries', { includeIndustryMeta: true });
}

export async function fetchContentTypes() {
  return fetchTagCollection('content-types');
}

export async function fetchFunnelStages() {
  return fetchTagCollection('funnel-stages');
}
