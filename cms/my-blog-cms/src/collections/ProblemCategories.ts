import type { CollectionConfig } from 'payload'

export const ProblemCategories: CollectionConfig = {
  slug: 'problem-categories',
  labels: { singular: 'Problem Category', plural: 'Problem Categories' },
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
