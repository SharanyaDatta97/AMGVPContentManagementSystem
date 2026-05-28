import type { CollectionConfig } from 'payload'

export const StageTypes: CollectionConfig = {
  slug: 'stage-types',
  labels: { singular: 'Stage Type', plural: 'Stage Types' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true, unique: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'order', type: 'number' },
  ],
}
