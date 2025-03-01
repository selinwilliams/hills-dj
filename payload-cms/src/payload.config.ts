import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Import collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Shows } from './collections/Shows'
import { Music } from './collections/Music'
import { AboutContent } from './collections/AboutContent'
import { Announcements } from './collections/Announcements'
import { Subscribers } from './collections/Subscribers'
import { SiteSettings } from './collections/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- Hills House Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [Users, Media, Shows, Music, AboutContent, Announcements, Subscribers, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
    // Use local filesystem for development
    staticDir: path.resolve(dirname, 'media'),
    staticURL: '/media',
  },
  plugins: [payloadCloudPlugin()],
})

