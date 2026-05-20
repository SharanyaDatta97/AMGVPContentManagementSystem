import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Post', plural: 'Posts' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
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
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'text',
      admin: {
        description: 'Full URL to the hero image',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'readTime',
      type: 'text',
      defaultValue: '8 min read',
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'AMG Venture Partners Editorial Team',
    },
    {
      name: 'coverLabel',
      type: 'text',
      admin: {
        description: 'Optional label shown on the cover (e.g. Topic · AMG Venture Partners)',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'HTML body for the article',
      },
    },
    {
      name: 'topics',
      type: 'relationship',
      relationTo: 'topics',
      hasMany: true,
      admin: {
        description: 'Assign at least one topic before publishing (optional for DOCX imports).',
      },
    },
    {
      name: 'stages',
      type: 'relationship',
      relationTo: 'stages',
      hasMany: true,
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
    },
    {
      name: 'contentTypes',
      type: 'relationship',
      relationTo: 'content-types',
      hasMany: true,
    },
    {
      name: 'funnelStage',
      type: 'relationship',
      relationTo: 'funnel-stages',
      hasMany: false,
    },
  ],
}
