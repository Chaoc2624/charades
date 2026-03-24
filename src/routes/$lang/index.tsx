import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { t } from '../../data/i18n'
import { SITE_URL } from '../../data/site'
import { SUPPORTED_LANGUAGES } from '../../data/languages'
import { ALL_CATEGORIES, getWords, type Audience } from '../../data/words'
import { getFAQs } from '../../data/faq'
import { getBlogPosts } from '../../data/blog'
import WordCard from '../../components/WordCard'
import CategoryNav from '../../components/CategoryNav'

export const Route = createFileRoute('/$lang/')({
  head: ({ params }) => {
    const pageUrl = `${SITE_URL}/${params.lang}/`
    return {
      meta: [
        { property: 'og:url', content: pageUrl },
      ],
      links: [
        { rel: 'canonical', href: pageUrl },
        ...SUPPORTED_LANGUAGES.map((lang) => ({
          rel: 'alternate',
          hrefLang: lang.hreflang,
          href: `${SITE_URL}/${lang.code}/`,
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/en/` },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Charades',
            url: SITE_URL,
            description: 'Free online random charades word generator with 500+ words across 11 categories for English and 7 other languages.',
            inLanguage: params.lang === 'zh-tw' ? 'zh-TW' : params.lang,
          }),
        },
      ],
    }
  },
  validateSearch: (search: Record<string, unknown>) => ({
    audience: (search.audience as Audience) || undefined,
  }),
  component: GamePage,
})

const CategoryIcon = ({ d, size = 20 }: { d: React.ReactNode; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)

const categoryIcons: Record<string, React.ReactNode> = {
  nouns: <CategoryIcon d={<><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="M3.3 7 12 12l8.7-5" /><line x1="12" y1="22" x2="12" y2="12" /></>} />,
  verbs: <CategoryIcon d={<><path d="M13 4v16" /><path d="M17 4v16" /><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" /></>} />,
  adjectives: <CategoryIcon d={<><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" /></>} />,
  animals: <CategoryIcon d={<><circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" /><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.05L6.53 18A2 2 0 0 1 7.5 15H9Z" /><path d="M14.35 15.65a2.5 2.5 0 0 1 3.14-1.42l1.2.4" /></>} />,
  food: <CategoryIcon d={<><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></>} />,
  occupations: <CategoryIcon d={<><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></>} />,
  movies: <CategoryIcon d={<><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m7 3 0 18" /><path d="m17 3 0 18" /><path d="M3 7.5h4" /><path d="M17 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M17 16.5h4" /></>} />,
  'tv-shows': <CategoryIcon d={<><rect width="20" height="15" x="2" y="3" rx="2" /><polyline points="8 21 12 17 16 21" /></>} />,
  celebrities: <CategoryIcon d={<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>} />,
  sports: <CategoryIcon d={<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></>} />,
  places: <CategoryIcon d={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>} />,
}

function GamePage() {
  const { lang } = Route.useParams()
  const { audience } = Route.useSearch()
  const strings = t(lang)
  const faqs = getFAQs(lang).slice(0, 3)
  const posts = getBlogPosts(lang).slice(0, 2)

  return (
    <div className="flex flex-col gap-12 w-full max-w-2xl mx-auto animate-float-in">
      {/* Intro */}
      <div className="text-center flex flex-col gap-2 mb-2">
        <h1 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {strings.siteTitle}
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
          {strings.siteDescription}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {strings.aboutDesc}
        </p>
      </div>

      {/* Game Section */}
      <div className="flex flex-col gap-8 max-w-lg mx-auto w-full">
        <WordCard lang={lang} audience={audience} />
        <CategoryNav activeAudience={audience} />
      </div>

      {/* Explore Categories */}
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {strings.exploreCategories}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ALL_CATEGORIES.map((cat) => {
            const count = getWords(lang, cat).length
            const catKey = cat === 'tv-shows' ? 'tvShows' : cat
            const label = strings[catKey as keyof typeof strings] || cat
            return (
              <Link
                key={cat}
                to="/$lang/category/$category"
                params={{ lang, category: cat }}
                className="category-card"
              >
                <span className="flex items-center justify-center" style={{ width: '28px', height: '28px' }}>{categoryIcons[cat]}</span>
                <span className="font-display font-bold text-sm" style={{ color: 'var(--color-primary)' }}>
                  {label}
                </span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {count} {strings.wordsAvailable}
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {strings.frequentlyAsked}
          </h2>
          <Link
            to="/$lang/faq"
            params={{ lang }}
            className="text-sm font-semibold no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            {strings.viewAll} →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-preview-card">
              <h3 className="font-display text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                {faq.question}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                {faq.answer.slice(0, 150)}...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {strings.recentPosts}
          </h2>
          <Link
            to="/$lang/blog"
            params={{ lang }}
            className="text-sm font-semibold no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            {strings.viewAll} →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/$lang/blog/$slug"
              params={{ lang, slug: post.slug }}
              className="blog-card"
            >
              <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                {post.date}
              </span>
              <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-primary)' }}>
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

