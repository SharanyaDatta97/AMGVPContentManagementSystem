import type { CollectionConfig } from 'payload'

import { tagCollection } from './sharedTagCollection'

export const Topics: CollectionConfig = tagCollection({
  slug: 'topics',
  labels: { singular: 'Topic', plural: 'Topics' },
})
