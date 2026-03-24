import React from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { t } from '../data/i18n'
import { ALL_CATEGORIES, ALL_AUDIENCES, type Category, type Audience } from '../data/words'

interface CategoryNavProps {
  activeCategory?: Category
  activeAudience?: Audience
}

export default function CategoryNav({ activeCategory, activeAudience }: CategoryNavProps) {
  const { lang } = useParams({ strict: false }) as { lang: string }
  const strings = t(lang)

  const categoryLabels: Record<string, string> = {
    nouns: strings.nouns,
    verbs: strings.verbs,
    adjectives: strings.adjectives,
    animals: strings.animals,
    food: strings.food,
    occupations: strings.occupations,
    movies: strings.movies,
    'tv-shows': strings.tvShows,
    celebrities: strings.celebrities,
    sports: strings.sports,
    places: strings.places,
  }

  const audienceLabels: Record<string, string> = {
    'all-ages': strings.allAges,
    kids: strings.kids,
    adults: strings.adults,
  }

  const audienceIcons: Record<string, React.ReactNode> = {
    'all-ages': (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    kids: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    adults: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto relative z-10">
      {/* Category row */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-arcade-muted)' }}>
          {strings.category}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/$lang"
            params={{ lang }}
            className={`nav-pill ${!activeCategory ? 'active' : ''}`}
            activeOptions={{ exact: true }}
            activeProps={{ className: `nav-pill ${!activeCategory ? 'active' : ''}` }}
            inactiveProps={{ className: `nav-pill ${!activeCategory ? 'active' : ''}` }}
          >
            {strings.allCategories}
          </Link>
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to="/$lang/category/$category"
              params={{ lang, category: cat }}
              className={`nav-pill ${activeCategory === cat ? 'active' : ''}`}
              activeOptions={{ exact: true, includeSearch: false }}
              activeProps={{ className: `nav-pill ${activeCategory === cat ? 'active' : ''}` }}
              inactiveProps={{ className: `nav-pill ${activeCategory === cat ? 'active' : ''}` }}
            >
              {categoryLabels[cat]}
            </Link>
          ))}
        </div>
      </div>

      {/* Audience row */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-arcade-muted)' }}>
          {strings.audience}
        </p>
        <div className="flex flex-wrap gap-2">
          {ALL_AUDIENCES.map((aud) => (
            <Link
              key={aud}
              to={activeCategory ? '/$lang/category/$category' : '/$lang'}
              params={activeCategory ? { lang, category: activeCategory } : { lang }}
              search={{ audience: aud === 'all-ages' ? undefined : aud }}
              className={`nav-pill ${activeAudience === aud || (!activeAudience && aud === 'all-ages') ? 'active' : ''}`}
              activeOptions={{ exact: true, includeSearch: true }}
              activeProps={{ className: `nav-pill ${activeAudience === aud || (!activeAudience && aud === 'all-ages') ? 'active' : ''}` }}
              inactiveProps={{ className: `nav-pill ${activeAudience === aud || (!activeAudience && aud === 'all-ages') ? 'active' : ''}` }}
            >
              {audienceIcons[aud]} {audienceLabels[aud]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
