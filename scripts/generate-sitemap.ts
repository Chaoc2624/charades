import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { VALID_LANG_CODES } from '../src/data/languages.ts'
import { getBlogPosts } from '../src/data/blog.ts'
import { SITE_URL } from '../src/data/site.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CATEGORIES = [
  'nouns',
  'verbs',
  'adjectives',
  'animals',
  'food',
  'occupations',
  'movies',
  'tv-shows',
  'celebrities',
  'sports',
  'places',
]

async function generateSitemap() {
  const urls: { loc: string; lastmod: string; changefreq: string; priority: number }[] = []
  const today = new Date().toISOString().split('T')[0]

  const baseUrl = SITE_URL.replace(/\/$/, '')

  // 1. Root index
  urls.push({
    loc: `${baseUrl}/`,
    lastmod: today,
    changefreq: 'daily',
    priority: 1.0,
  })

  // 2. Languages
  for (const lang of VALID_LANG_CODES) {
    // Language home
    urls.push({
      loc: `${baseUrl}/${lang}`,
      lastmod: today,
      changefreq: 'daily',
      priority: 0.9,
    })

    // FAQ
    urls.push({
      loc: `${baseUrl}/${lang}/faq`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    })

    // Blog Index
    urls.push({
      loc: `${baseUrl}/${lang}/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    })

    // Categories
    for (const category of CATEGORIES) {
      urls.push({
        loc: `${baseUrl}/${lang}/category/${category}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: 0.8,
      })
    }

    // Blog Posts
    const posts = getBlogPosts(lang)
    if (posts) {
      for (const post of posts) {
        urls.push({
          loc: `${baseUrl}/${lang}/blog/${post.slug}`,
          lastmod: post.date || today,
          changefreq: 'monthly',
          priority: 0.7,
        })
      }
    }
  }

  // Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  // Write to public/sitemap.xml
  const publicDir = path.resolve(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml)
  console.log('✅ sitemap.xml generated successfully in public/sitemap.xml')
}

generateSitemap().catch(console.error)
