import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'
import { isValidLang } from '../../data/languages'
import { t } from '../../data/i18n'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params }) => {
    if (!isValidLang(params.lang)) {
      throw redirect({ to: '/$lang', params: { lang: 'en' } })
    }
  },
  head: ({ params }) => {
    const strings = t(params.lang)
    return {
      meta: [
        { title: `${strings.siteTitle} — ${strings.siteDescription.split('.')[0]}` },
        { name: 'description', content: strings.siteDescription },
        // Open Graph (og:url set by leaf routes)
        { property: 'og:title', content: `${strings.siteTitle} — ${strings.siteDescription.split('.')[0]}` },
        { property: 'og:description', content: strings.siteDescription },
        // Twitter Card
        { name: 'twitter:title', content: strings.siteTitle },
        { name: 'twitter:description', content: strings.siteDescription },
      ],
      // canonical and hreflang are set by leaf routes (index.tsx, $category.tsx) to avoid duplication
    }
  },
  component: LangLayout,
})

function LangLayout() {
  const { lang } = Route.useParams()
  const strings = t(lang)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 md:px-8 relative z-20">
        <div className="flex items-center gap-6">
          <a href={`/${lang}`} className="flex items-center gap-2.5 no-underline">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
              <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
            </svg>
            <span className="font-display text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
              {strings.siteTitle}
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/$lang" params={{ lang }} className="nav-link">{strings.home}</Link>
            <Link to="/$lang/faq" params={{ lang }} className="nav-link">{strings.faq}</Link>
            <Link to="/$lang/blog" params={{ lang }} className="nav-link">{strings.blog}</Link>
          </nav>
        </div>
        <LanguageSwitcher />
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center px-4 py-6 md:py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t px-4 py-8 md:px-8" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-display text-base font-bold" style={{ color: 'var(--color-primary)' }}>
              {strings.siteTitle}
            </span>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {strings.siteDescription}
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
              Links
            </span>
            <Link to="/$lang" params={{ lang }} className="footer-link">{strings.home}</Link>
            <Link to="/$lang/faq" params={{ lang }} className="footer-link">{strings.faq}</Link>
            <Link to="/$lang/blog" params={{ lang }} className="footer-link">{strings.blog}</Link>
          </div>
          {/* Categories */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
              {strings.categories}
            </span>
            <Link to="/$lang/category/$category" params={{ lang, category: 'animals' }} className="footer-link">{strings.animals}</Link>
            <Link to="/$lang/category/$category" params={{ lang, category: 'food' }} className="footer-link">{strings.food}</Link>
            <Link to="/$lang/category/$category" params={{ lang, category: 'occupations' }} className="footer-link">{strings.occupations}</Link>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-6 pt-4 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} {strings.siteTitle}
          </p>
        </div>
      </footer>
    </div>
  )
}

