import type { Payload } from 'payload'

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

type SeedItem = { name: string; slug?: string; order?: number; icon?: string; color?: string }

const SEED: Record<string, SeedItem[]> = {
  'asset-types': [
    { name: 'Guide' },
    { name: 'Case Study' },
    { name: 'Framework' },
    { name: 'Opinion' },
    { name: 'Breakdown' },
    { name: 'Template' },
    { name: 'Newsletter' },
    { name: 'Checklist' },
  ],
  'problem-categories': [
    { name: 'Fundraising' },
    { name: 'Valuation' },
    { name: 'Pitch Deck' },
    { name: 'Investor Matching' },
    { name: 'Startup Strategy' },
    { name: 'Due Diligence' },
  ],
  'stage-types': [
    { name: 'Pre-seed', order: 1 },
    { name: 'Seed', order: 2 },
    { name: 'Series A', order: 3 },
    { name: 'Growth', order: 4 },
  ],
  sectors: [
    { name: 'AI', icon: '🤖', color: '#3B82F6' },
    { name: 'SaaS', icon: '☁️', color: '#10B981' },
    { name: 'Fintech', icon: '💰', color: '#F59E0B' },
    { name: 'Deeptech', icon: '🔬', color: '#8B5CF6' },
    { name: 'Healthtech', icon: '🏥', color: '#EF4444' },
  ],
}

export async function seedTags(payload: Payload) {
  for (const [collection, items] of Object.entries(SEED)) {
    const { totalDocs } = await payload.count({
      collection: collection as 'asset-types' | 'problem-categories' | 'stage-types' | 'sectors',
    })
    if (totalDocs > 0) continue

    for (const item of items) {
      const slug = item.slug || slugify(item.name)
      const data: Record<string, unknown> = { name: item.name, slug }
      if (item.order != null) data.order = item.order
      if (item.icon) data.icon = item.icon
      if (item.color) data.color = item.color

      await payload.create({
        collection: collection as 'asset-types' | 'problem-categories' | 'stage-types' | 'sectors',
        data: data as never,
      })
    }
  }
}
