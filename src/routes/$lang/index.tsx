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
            description: 'Free online charades word generator with 500+ words across 11 categories.',
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

const categoryEmojis: Record<string, string> = {
  nouns: '📦',
  verbs: '🏃',
  adjectives: '✨',
  animals: '🐾',
  food: '🍕',
  occupations: '👩‍⚕️',
  movies: '🎬',
  'tv-shows': '📺',
  celebrities: '⭐',
  sports: '⚽',
  places: '🏔️',
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
                <span className="text-2xl">{categoryEmojis[cat]}</span>
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

