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

  const audienceEmojis: Record<string, string> = {
    'all-ages': '🌟',
    kids: '🧒',
    adults: '👤',
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
              {audienceEmojis[aud]} {audienceLabels[aud]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
