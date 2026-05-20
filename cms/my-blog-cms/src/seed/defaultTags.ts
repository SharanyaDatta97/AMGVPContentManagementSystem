import type { Payload } from 'payload'

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const SEED: Record<string, string[]> = {
  topics: [
    'Fundraising',
    'Valuation',
    'Pitch Deck',
    'Investor Matching',
    'Startup Strategy',
    'Due Diligence',
  ],
  stages: ['Pre-seed', 'Seed', 'Series A', 'Growth'],
  industries: ['AI', 'SaaS', 'Fintech', 'Deeptech', 'Healthtech'],
  'content-types': [
    'Guide',
    'Case Study',
    'Framework',
    'Opinion',
    'Breakdown',
    'Template',
    'Newsletter',
  ],
  'funnel-stages': ['Awareness', 'Consideration', 'Decision'],
}

export async function seedDefaultTags(payload: Payload) {
  for (const [collection, names] of Object.entries(SEED)) {
    const { totalDocs } = await payload.count({ collection: collection as never })
    if (totalDocs > 0) continue

    for (const name of names) {
      const slug = slugify(name)
      await payload.create({
        collection: collection as 'topics' | 'stages' | 'industries' | 'content-types' | 'funnel-stages',
        data: { name, slug },
      })
    }
  }
}
