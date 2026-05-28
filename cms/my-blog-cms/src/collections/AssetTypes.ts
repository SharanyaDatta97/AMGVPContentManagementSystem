import type { CollectionConfig } from 'payload'

export const AssetTypes: CollectionConfig = {
  slug: 'asset-types',
  labels: { singular: 'Asset Type', plural: 'Asset Types' },
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
  ],
}
