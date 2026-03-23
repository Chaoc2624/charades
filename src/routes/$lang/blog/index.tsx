import { createFileRoute, Link } from '@tanstack/react-router'
import { t } from '../../../data/i18n'
import { getBlogPosts } from '../../../data/blog'
import { SITE_URL } from '../../../data/site'
import { SUPPORTED_LANGUAGES } from '../../../data/languages'
import Breadcrumb from '../../../components/Breadcrumb'

export const Route = createFileRoute('/$lang/blog/')(  {
  head: ({ params }) => {
    const strings = t(params.lang)
    const pageUrl = `${SITE_URL}/${params.lang}/blog/`

    return {
      meta: [
        { title: `${strings.blog} — ${strings.siteTitle}` },
        { name: 'description', content: strings.blogDescription },
        { property: 'og:title', content: `${strings.blog} — ${strings.siteTitle}` },
        { property: 'og:description', content: strings.blogDescription },
        { property: 'og:url', content: pageUrl },
        { name: 'twitter:title', content: `${strings.blog} — ${strings.siteTitle}` },
        { name: 'twitter:description', content: strings.blogDescription },
      ],
      links: [
        { rel: 'canonical', href: pageUrl },
        ...SUPPORTED_LANGUAGES.map((lang) => ({
          rel: 'alternate',
          hrefLang: lang.hreflang,
          href: `${SITE_URL}/${lang.code}/blog/`,
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/en/blog/` },
      ],
      scripts: [
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
                item: pageUrl,
              },
            ],
          }),
        },
      ],
    }
  },
  component: BlogListPage,
})

function BlogListPage() {
  const { lang } = Route.useParams()
  const strings = t(lang)
  const posts = getBlogPosts(lang)

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto animate-float-in">
      <Breadcrumb items={[{ label: strings.blog }]} />

      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {strings.blog}
        </h1>
        <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>
          {strings.blogDescription}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to="/$lang/blog/$slug"
            params={{ lang, slug: post.slug }}
            className="blog-card"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                {strings.publishedOn} {post.date}
              </span>
              <h2 className="font-display text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                {post.excerpt}
              </p>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                {strings.readMore} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
