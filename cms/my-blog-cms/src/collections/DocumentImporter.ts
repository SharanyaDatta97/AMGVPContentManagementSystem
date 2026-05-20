import type { CollectionConfig } from 'payload'

import { processDocxImport } from '../lib/processDocxImport'

function resolveRelationId(value: unknown): string | null {
  if (!value) return null
  if (typeof value === 'string') return value
  if (typeof value === 'object' && value !== null && 'id' in value) {
    return String((value as { id: string }).id)
  }
  return null
}

export const DocumentImporter: CollectionConfig = {
  slug: 'document-importers',
  labels: {
    singular: 'Document Import',
    plural: 'Document Imports',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'createdPost', 'createdAt'],
    description:
      'Upload a .docx file via Media, link it here, and save to generate a blog post with images.',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Filled automatically from the document heading or filename.',
      },
    },
    {
      name: 'document',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      admin: {
        description:
          'Select a Media item that is a .docx file (upload the Word document in Media first).',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'processing',
      options: [
        { label: 'Processing', value: 'processing' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
      ],
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'createdPost',
      type: 'relationship',
      relationTo: 'posts',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'errorMessage',
      type: 'textarea',
      admin: {
        readOnly: true,
        condition: (_, siblingData) => siblingData?.status === 'failed',
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation !== 'create' || !data) return data

        const documentId = resolveRelationId(data.document)
        if (!documentId) {
          data.status = 'failed'
          data.errorMessage = 'No document media selected.'
          return data
        }

        data.status = 'processing'
        data.errorMessage = undefined

        try {
          const result = await processDocxImport(req, documentId)
          data.title = result.title
          data.createdPost = result.postId
          data.status = 'completed'
          data.errorMessage = undefined
        } catch (err) {
          data.status = 'failed'
          data.errorMessage =
            err instanceof Error ? err.message : 'Unknown error while importing document.'
        }

        return data
      },
    ],
  },
}
