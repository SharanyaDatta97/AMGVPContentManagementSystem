import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import mammoth from 'mammoth'
import type { PayloadRequest } from 'payload'

const libFilename = fileURLToPath(import.meta.url)
const libDirname = path.dirname(libFilename)
export const MEDIA_DIR = path.resolve(libDirname, '../../media')

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 120)
}

function extractTitleFromHtml(html: string, fallback: string): string {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (h1?.[1]) return stripHtml(h1[1]) || fallback
  const h2 = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)
  if (h2?.[1]) return stripHtml(h2[1]) || fallback
  return fallback
}

function extensionFromContentType(contentType: string): string {
  const map: Record<string, string> = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/bmp': 'bmp',
    'image/tiff': 'tiff',
    'image/x-emf': 'emf',
    'image/x-wmf': 'wmf',
  }
  return map[contentType] || contentType.split('/')[1] || 'png'
}

async function uniqueSlug(req: PayloadRequest, baseSlug: string): Promise<string> {
  let slug = baseSlug || 'imported-post'
  let suffix = 0
  while (true) {
    const { totalDocs } = await req.payload.count({
      collection: 'posts',
      where: { slug: { equals: slug } },
    })
    if (totalDocs === 0) return slug
    suffix += 1
    slug = `${baseSlug}-${suffix}`
  }
}

export type DocxImportResult = {
  title: string
  postId: string
}

export async function processDocxImport(
  req: PayloadRequest,
  documentMediaId: string,
): Promise<DocxImportResult> {
  if (!fs.existsSync(MEDIA_DIR)) {
    fs.mkdirSync(MEDIA_DIR, { recursive: true })
  }

  const mediaDoc = await req.payload.findByID({
    collection: 'media',
    id: documentMediaId,
  })

  if (!mediaDoc?.filename) {
    throw new Error('Document media entry has no file. Upload a .docx file to Media first.')
  }

  const docxPath = path.join(MEDIA_DIR, mediaDoc.filename)
  if (!fs.existsSync(docxPath)) {
    throw new Error(`DOCX file not found on disk: ${docxPath}`)
  }

  const fallbackTitle = path.basename(mediaDoc.filename, path.extname(mediaDoc.filename))
  const serverURL = (process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000').replace(
    /\/$/,
    '',
  )

  let imageIndex = 0

  const htmlResult = await mammoth.convertToHtml(
    { path: docxPath },
    {
      convertImage: mammoth.images.imgElement(async (image) => {
        const buffer = await image.read()
        const contentType = image.contentType || 'image/png'
        const ext = extensionFromContentType(contentType)
        imageIndex += 1
        const filename = `import-${Date.now()}-${imageIndex}.${ext}`

        const created = await req.payload.create({
          collection: 'media',
          data: {
            alt: `Imported image ${imageIndex} from ${fallbackTitle}`,
          },
          file: {
            data: buffer,
            mimetype: contentType,
            name: filename,
            size: buffer.length,
          },
        })

        const fileName = created.filename || filename
        const src = `${serverURL}/api/media/file/${encodeURIComponent(fileName)}`

        return { src }
      }),
    },
  )

  const htmlContent = htmlResult.value
  const plainResult = await mammoth.extractRawText({ path: docxPath })
  const plainText = plainResult.value.trim()

  const title = extractTitleFromHtml(htmlContent, fallbackTitle)
  const baseSlug = slugifyTitle(title) || slugifyTitle(fallbackTitle) || 'imported-post'
  const slug = await uniqueSlug(req, baseSlug)

  const excerpt =
    plainText.length > 300 ? `${plainText.substring(0, 300)}...` : plainText || title

  const post = await req.payload.create({
    collection: 'posts',
    data: {
      title,
      slug,
      content: htmlContent,
      excerpt,
      publishedDate: new Date().toISOString(),
      assetType: null,
      problemCategories: [],
      stageTypes: [],
      sectors: [],
    },
  })

  return {
    title,
    postId: String(post.id),
  }
}
