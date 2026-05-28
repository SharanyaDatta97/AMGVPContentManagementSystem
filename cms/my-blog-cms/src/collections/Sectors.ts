import type { CollectionConfig } from 'payload'

export const Sectors: CollectionConfig = {
  slug: 'sectors',
  labels: { singular: 'Sector', plural: 'Sectors' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true, unique: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'icon', type: 'text' },
    { name: 'color', type: 'text' },
  ],
}
