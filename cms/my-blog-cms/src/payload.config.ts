import path from 'path'
import { fileURLToPath } from 'url'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import dotenv from 'dotenv'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { AssetTypes } from './collections/AssetTypes'
import { DocumentImporter } from './collections/DocumentImporter'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { ProblemCategories } from './collections/ProblemCategories'
import { Sectors } from './collections/Sectors'
import { StageTypes } from './collections/StageTypes'
import { Users } from './collections/Users'
import { seedTags } from './seed/seedTags'

import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

// ... rest of your imports and config remains the same

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({ path: path.resolve(dirname, '../../../.env') })
dotenv.config({ path: path.resolve(dirname, '../.env') })

function resolveDbUrl(): string {
  const preferLocal =
    process.env.MONGO_USE_LOCAL === 'true' || process.env.MONGO_USE_LOCAL === '1'
  if (preferLocal) {
    return (
      (process.env.DATABASE_URL && process.env.DATABASE_URL.trim()) ||
      'mongodb://127.0.0.1:27017/amg-blog-cms'
    )
  }
  // Atlas / remote: MONGODB_URI first. If mongodb+srv fails with querySrv ECONNREFUSED, set MONGO_USE_LOCAL=true and run local Mongo (see cms/docker-compose.yml).
  return (
    (process.env.MONGODB_URI && process.env.MONGODB_URI.trim()) ||
    (process.env.DATABASE_URL && process.env.DATABASE_URL.trim()) ||
    ''
  )
}

const dbUrl = resolveDbUrl()

const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:3001'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  cors: [frontendOrigin, 'http://localhost:3000'],
  csrf: [frontendOrigin, 'http://localhost:3000'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    AssetTypes,
    ProblemCategories,
    StageTypes,
    Sectors,
    Media,
    Posts,
    DocumentImporter,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: dbUrl,
  }),
  sharp,
  plugins: [],
  onInit: async (payload) => {
    await seedTags(payload)
  },
})
