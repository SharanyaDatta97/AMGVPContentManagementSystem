import type { CollectionConfig } from 'payload'

import { tagCollection } from './sharedTagCollection'

export const Industries: CollectionConfig = tagCollection({
  slug: 'industries',
  labels: { singular: 'Industry', plural: 'Industries' },
})
