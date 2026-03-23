import { useState, useRef, useEffect } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { SUPPORTED_LANGUAGES } from '../data/languages'
import { t } from '../data/i18n'

export default function LanguageSwitcher() {
  const { lang } = useParams({ strict: false }) as { lang: string }
  const strings = t(lang)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = SUPPORTED_LANGUAGES.find((l) => l.code === lang)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="lang-menu" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="nav-pill"
        aria-label={strings.changeLanguage}
      >
        <span className="text-lg">{current?.flag}</span>
        <span>{current?.nativeName}</span>
        <span className="text-xs" style={{ color: 'var(--color-arcade-muted)' }}>▾</span>
      </button>

      {open && (
        <div className="lang-dropdown animate-float-in">
          {SUPPORTED_LANGUAGES.map((language) => (
            <Link
              key={language.code}
              to="/$lang"
              params={{ lang: language.code }}
              onClick={() => setOpen(false)}
              className={`lang-option ${language.code === lang ? 'active' : ''}`}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="flex flex-col">
                <span className="font-semibold text-sm">{language.nativeName}</span>
                <span className="text-xs" style={{ color: 'var(--color-arcade-muted)' }}>
                  {language.name}
                </span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
