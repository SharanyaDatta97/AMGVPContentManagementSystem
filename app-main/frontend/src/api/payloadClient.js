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
  if (options.includeSectorMeta) {
    if (doc.icon) tag.icon = String(doc.icon);
    if (doc.color) tag.color = String(doc.color);
  }
  if (doc.order != null) tag.order = doc.order;
  return tag;
}

function mapTags(value, options = {}) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : [value];
  return list.map((doc) => mapTag(doc, options)).filter(Boolean);
}

function mapSingleRelation(value, options = {}) {
  if (!value || typeof value !== 'object') return null;
  return mapTag(value, options);
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

export function transformPost(doc) {
  if (!doc) return null;

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
    content: doc.content != null ? String(doc.content) : '',
    relatedServiceCta: doc.relatedServiceCta || null,
    assetType: mapSingleRelation(doc.assetType),
    problemCategories: mapTags(doc.problemCategories),
    stageTypes: mapTags(doc.stageTypes),
    sectors: mapTags(doc.sectors, { includeSectorMeta: true }),
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
  return docs.map(transformPost).filter(Boolean);
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
  return transformPost(doc);
}

async function fetchTagCollection(endpoint, options = {}) {
  const sort = options.sort || 'name';
  const { data } = await client.get(`/${endpoint}`, {
    params: {
      limit: 500,
      depth: 0,
      sort,
    },
  });
  const docs = data?.docs || [];
  return docs.map((doc) => mapTag(doc, options)).filter(Boolean);
}

export async function fetchAssetTypes() {
  return fetchTagCollection('asset-types');
}

export async function fetchProblemCategories() {
  return fetchTagCollection('problem-categories');
}

export async function fetchStageTypes() {
  return fetchTagCollection('stage-types', { sort: 'order' });
}

export async function fetchSectors() {
  return fetchTagCollection('sectors', { includeSectorMeta: true });
}
