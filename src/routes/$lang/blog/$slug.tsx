import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { t } from '../../../data/i18n'
import { getBlogPost, getBlogPosts } from '../../../data/blog'
import { SITE_URL } from '../../../data/site'
import { SUPPORTED_LANGUAGES } from '../../../data/languages'
import Breadcrumb from '../../../components/Breadcrumb'

export const Route = createFileRoute('/$lang/blog/$slug')({
  beforeLoad: ({ params }) => {
    const post = getBlogPost(params.lang, params.slug)
    if (!post) {
      throw redirect({ to: '/$lang/blog', params: { lang: params.lang } })
    }
  },
  head: ({ params }) => {
    const strings = t(params.lang)
    const post = getBlogPost(params.lang, params.slug)
    if (!post) return {}

    const pageUrl = `${SITE_URL}/${params.lang}/blog/${params.slug}/`

    return {
      meta: [
        { title: `${post.title} — ${strings.siteTitle}` },
        { name: 'description', content: post.excerpt },
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.excerpt },
        { property: 'og:url', content: pageUrl },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: post.excerpt },
        { property: 'article:published_time', content: post.date },
        { property: 'article:author', content: post.author },
      ],
      links: [
        { rel: 'canonical', href: pageUrl },
        ...SUPPORTED_LANGUAGES.map((lang) => {
          const langPost = getBlogPost(lang.code, params.slug)
          return langPost
            ? { rel: 'alternate', hrefLang: lang.hreflang, href: `${SITE_URL}/${lang.code}/blog/${params.slug}/` }
            : null
        }).filter(Boolean) as { rel: string; hrefLang: string; href: string }[],
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: strings.siteTitle,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': pageUrl,
            },
          }),
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_URL}/${params.lang}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: `${SITE_URL}/${params.lang}/blog/`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: pageUrl,
              },
            ],
          }),
        },
      ],
    }
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const { lang, slug } = Route.useParams()
  const strings = t(lang)
  const post = getBlogPost(lang, slug)!
  const allPosts = getBlogPosts(lang)
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="font-display text-xl font-bold mt-6 mb-3" style={{ color: 'var(--color-primary)' }}>{block.slice(3)}</h2>
      }
      if (block.startsWith('### ')) {
        return <h3 key={i} className="font-display text-lg font-bold mt-4 mb-2" style={{ color: 'var(--color-primary-soft)' }}>{block.slice(4)}</h3>
      }
      // Check if block is a list
      const lines = block.split('\n')
      if (lines.every((line) => line.startsWith('- ') || line.startsWith('  '))) {
        return (
          <ul key={i} className="list-disc pl-6 flex flex-col gap-1.5">
            {lines.filter((l) => l.startsWith('- ')).map((line, j) => (
              <li key={j} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                {renderInline(line.slice(2))}
              </li>
            ))}
          </ul>
        )
      }
      if (lines.every((line) => /^\d+\./.test(line) || line.startsWith('  '))) {
        return (
          <ol key={i} className="list-decimal pl-6 flex flex-col gap-1.5">
            {lines.filter((l) => /^\d+\./.test(l)).map((line, j) => (
              <li key={j} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                {renderInline(line.replace(/^\d+\.\s*/, ''))}
              </li>
            ))}
          </ol>
        )
      }
      return <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>{renderInline(block)}</p>
    })
  }

  const renderInline = (text: string) => {
    // Bold: **text**
    const parts = text.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'var(--color-text)' }}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto animate-float-in">
      <Breadcrumb
        items={[
          { label: strings.blog, href: `/${lang}/blog` },
          { label: post.title },
        ]}
      />

      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            {strings.publishedOn} {post.date} · {post.author}
          </span>
          <h1 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {post.title}
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
            {post.excerpt}
          </p>
        </div>

        <hr className="border-none h-px" style={{ background: 'var(--color-border)' }} />

        <div className="flex flex-col gap-4">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          <h2 className="font-display text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
            {strings.recentPosts}
          </h2>
          <div className="flex flex-col gap-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                to="/$lang/blog/$slug"
                params={{ lang, slug: rp.slug }}
                className="blog-card"
              >
                <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-primary)' }}>
                  {rp.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>{rp.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
