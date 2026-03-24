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
      <header className="flex items-center justify-between px-4 py-4 md:px-8 sticky top-0 z-20" style={{ background: 'rgba(246, 244, 240, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="flex items-center gap-6">
          <a href={`/${lang}`} className="flex items-center gap-2.5 no-underline">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5.5 3C3.5 3 2 5 2 8c0 3.5 2 6 5.5 6S12 11.5 12 8c0-3-1.5-5-3.5-5h-3z" />
              <circle cx="6.5" cy="8.5" r="0.5" fill="var(--color-primary)" />
              <circle cx="9" cy="8.5" r="0.5" fill="var(--color-primary)" />
              <path d="M5.5 10.5s.5 1 2 1 2-1 2-1" />
              <path d="M18.5 3c2 0 3.5 2 3.5 5 0 3.5-2 6-5.5 6S12 11.5 12 8c0-3 1.5-5 3.5-5h3z" />
              <circle cx="15.5" cy="8.5" r="0.5" fill="var(--color-primary)" />
              <circle cx="18" cy="8.5" r="0.5" fill="var(--color-primary)" />
              <path d="M15 11s.5-1 2-1 2 1 2 1" />
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
            <span className="flex items-center gap-2 font-display text-base font-bold" style={{ color: 'var(--color-primary)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5.5 3C3.5 3 2 5 2 8c0 3.5 2 6 5.5 6S12 11.5 12 8c0-3-1.5-5-3.5-5h-3z" />
                <circle cx="6.5" cy="8.5" r="0.5" fill="currentColor" />
                <circle cx="9" cy="8.5" r="0.5" fill="currentColor" />
                <path d="M5.5 10.5s.5 1 2 1 2-1 2-1" />
                <path d="M18.5 3c2 0 3.5 2 3.5 5 0 3.5-2 6-5.5 6S12 11.5 12 8c0-3 1.5-5 3.5-5h3z" />
                <circle cx="15.5" cy="8.5" r="0.5" fill="currentColor" />
                <circle cx="18" cy="8.5" r="0.5" fill="currentColor" />
                <path d="M15 11s.5-1 2-1 2 1 2 1" />
              </svg>
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

