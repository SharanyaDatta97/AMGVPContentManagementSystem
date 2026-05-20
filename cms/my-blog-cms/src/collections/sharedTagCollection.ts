import type { CollectionConfig } from 'payload'

export function tagCollection(args: {
  slug: string
  labels: { singular: string; plural: string }
}): CollectionConfig {
  const { slug, labels } = args
  return {
    slug,
    labels,
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'slug'],
    },
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
      },
      {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
        index: true,
      },
    ],
  }
}
