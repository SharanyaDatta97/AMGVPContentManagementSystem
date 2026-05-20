import type { CollectionConfig } from 'payload'

import { tagCollection } from './sharedTagCollection'

export const ContentTypes: CollectionConfig = tagCollection({
  slug: 'content-types',
  labels: { singular: 'Content Type', plural: 'Content Types' },
})
