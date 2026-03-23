import { useState, useCallback, useEffect } from 'react'
import { getRandomWord, getRandomWords, type Word, type Category, type Audience } from '../data/words'
import { t } from '../data/i18n'

interface WordCardProps {
  lang: string
  category?: Category
  audience?: Audience
}

const PRESET_COUNTS = [1, 3, 5, 10, 20] as const

export default function WordCard({ lang, category, audience }: WordCardProps) {
  const strings = t(lang)
  const [word, setWord] = useState<Word | null>(null)
  const [wordList, setWordList] = useState<Word[]>([])
  const [score, setScore] = useState(0)
  const [textKey, setTextKey] = useState(0)
  const [wordCount, setWordCount] = useState<number>(1)
  const [customInput, setCustomInput] = useState('')
  const [showCustomInput, setShowCustomInput] = useState(false)

  const generateWords = useCallback((count: number) => {
    if (count === 1) {
      setWord(getRandomWord(lang, category, audience, word?.text))
    } else {
      setWordList(getRandomWords(lang, count, category, audience))
    }
    setTextKey((k) => k + 1)
  }, [lang, category, audience, word?.text])

  const handleCorrect = useCallback(() => {
    setScore((s) => s + 1)
    generateWords(wordCount)
  }, [generateWords, wordCount])

  const handleSkip = useCallback(() => {
    generateWords(wordCount)
  }, [generateWords, wordCount])

  const handleSetCount = useCallback((n: number) => {
    if (n === wordCount) return
    setShowCustomInput(false)
    setWordCount(n)
    if (n === 1) {
      setWord(getRandomWord(lang, category, audience))
    } else {
      setWordList(getRandomWords(lang, n, category, audience))
    }
    setTextKey((k) => k + 1)
    setScore(0)
  }, [lang, category, audience, wordCount])

  const handleCustomSubmit = useCallback(() => {
    const n = parseInt(customInput, 10)
    if (n > 0 && n <= 100) {
      handleSetCount(n)
    }
  }, [customInput, handleSetCount])

  // Initialize + reset when lang/category/audience change
  useEffect(() => {
    generateWords(wordCount)
    setScore(0)
  }, [lang, category, audience]) // eslint-disable-line react-hooks/exhaustive-deps

  const getCatLabel = (cat: string) =>
    strings[(cat === 'tv-shows' ? 'tvShows' : cat) as keyof typeof strings] || cat

  // Use grid when count >= 6
  const useGrid = wordCount >= 6

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto relative z-10">
      {/* Score */}
      <div className="score-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        {strings.score}: {score}
      </div>

      {/* Word count selector */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-arcade-muted)' }}>
          {strings.wordCount}
        </span>
        <div className="flex gap-1 items-center flex-wrap justify-center">
          {PRESET_COUNTS.map((n) => (
            <button
              key={n}
              onClick={() => handleSetCount(n)}
              className={`nav-pill ${wordCount === n && !showCustomInput ? 'active' : ''}`}
              style={{ padding: '4px 12px', fontSize: '0.8rem' }}
            >
              {n}
            </button>
          ))}
          {/* Custom input toggle */}
          {showCustomInput ? (
            <form
              onSubmit={(e) => { e.preventDefault(); handleCustomSubmit() }}
              className="flex items-center gap-1"
            >
              <input
                type="number"
                min="1"
                max="100"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                autoFocus
                placeholder="1-100"
                className="nav-pill"
                style={{
                  padding: '4px 8px',
                  fontSize: '0.8rem',
                  width: '64px',
                  textAlign: 'center',
                  border: '2px solid var(--color-primary)',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="nav-pill active"
                style={{ padding: '4px 10px', fontSize: '0.8rem' }}
              >
                OK
              </button>
            </form>
          ) : (
            <button
              onClick={() => { setShowCustomInput(true); setCustomInput(String(wordCount)) }}
              className={`nav-pill ${!PRESET_COUNTS.includes(wordCount as any) ? 'active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '0.8rem' }}
              title="Custom"
            >
              {!PRESET_COUNTS.includes(wordCount as any) ? wordCount : '✏️'}
            </button>
          )}
        </div>
      </div>

      {/* Word Card */}
      <div className="word-card w-full" style={wordCount > 1 ? { maxWidth: '100%' } : {}}>
        <div key={textKey} className="flex flex-col items-center gap-4 p-8">
          {wordCount === 1 ? (
            // Single word mode
            word ? (
              <>
                <span className="category-tag animate-tag-pop">
                  {getCatLabel(word.category)}
                </span>
                <h2
                  className="font-display text-4xl md:text-5xl font-bold text-center animate-text-enter"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {word.text}
                </h2>
              </>
            ) : (
              <>
                <span className="category-tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <h2
                  className="font-display text-4xl md:text-5xl font-bold text-center"
                  style={{ color: 'var(--color-primary)', opacity: 0.3 }}
                >
                  &bull;&bull;&bull;
                </h2>
              </>
            )
          ) : (
            // Multi-word mode
            <div
              className="w-full animate-text-enter"
              style={useGrid ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
              } : {
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {wordList.length > 0 ? (
                wordList.map((w, i) => (
                  <div
                    key={`${w.text}-${i}`}
                    className="flex items-center gap-2 rounded-xl"
                    style={{
                      background: 'var(--color-surface-alt)',
                      padding: useGrid ? '8px 10px' : '10px 12px',
                    }}
                  >
                    <span
                      className="flex items-center justify-center font-display font-bold rounded-lg"
                      style={{
                        width: useGrid ? '24px' : '28px',
                        height: useGrid ? '24px' : '28px',
                        fontSize: useGrid ? '0.7rem' : '0.8rem',
                        background: 'var(--color-primary)',
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="font-display font-bold flex-1"
                      style={{
                        color: 'var(--color-primary)',
                        fontSize: useGrid ? '0.9rem' : '1.1rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {w.text}
                    </span>
                    <span
                      className="font-medium rounded-md"
                      style={{
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-muted)',
                        fontSize: useGrid ? '0.65rem' : '0.75rem',
                        padding: useGrid ? '2px 6px' : '3px 8px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {getCatLabel(w.category)}
                    </span>
                  </div>
                ))
              ) : (
                <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  &bull;&bull;&bull;
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 w-full" style={{ maxWidth: '28rem' }}>
        <button
          onClick={handleSkip}
          className="btn-action btn-skip flex-1"
        >
          {wordCount === 1 ? strings.skip : `🔄 ${strings.generate}`}
        </button>
        <button
          onClick={handleCorrect}
          className="btn-action btn-correct flex-1"
        >
          {strings.gotIt}
        </button>
      </div>
    </div>
  )
}
