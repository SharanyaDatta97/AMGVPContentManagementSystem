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
        description: 'Optional label shown on the cover (e.g. Problem Category · AMG Venture Partners)',
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
      name: 'assetType',
      type: 'relationship',
      relationTo: 'asset-types',
      hasMany: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'problemCategories',
      type: 'relationship',
      relationTo: 'problem-categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'stageTypes',
      type: 'relationship',
      relationTo: 'stage-types',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'sectors',
      type: 'relationship',
      relationTo: 'sectors',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'relatedServiceCta',
      type: 'select',
      options: [
        { label: 'Pitch Deck Review', value: 'pitch-deck-review' },
        { label: 'Pitch Deck Creation', value: 'pitch-deck-creation' },
        { label: 'Financial Model', value: 'financial-model' },
        { label: 'Valuation', value: 'valuation' },
        { label: 'Investor Outreach', value: 'investor-outreach' },
        { label: 'Investment Readiness Review', value: 'investment-readiness-review' },
        { label: 'AMA Sessions', value: 'ama-sessions' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
