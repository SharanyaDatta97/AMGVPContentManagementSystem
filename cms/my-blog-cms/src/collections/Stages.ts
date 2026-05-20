import type { CollectionConfig } from 'payload'

import { tagCollection } from './sharedTagCollection'

export const Stages: CollectionConfig = tagCollection({
  slug: 'stages',
  labels: { singular: 'Stage', plural: 'Stages' },
})
