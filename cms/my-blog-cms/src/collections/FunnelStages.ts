import type { CollectionConfig } from 'payload'

import { tagCollection } from './sharedTagCollection'

export const FunnelStages: CollectionConfig = tagCollection({
  slug: 'funnel-stages',
  labels: { singular: 'Funnel Stage', plural: 'Funnel Stages' },
})
