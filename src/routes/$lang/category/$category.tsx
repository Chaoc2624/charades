import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { useState } from 'react'
import { isValidCategory, getWords, ALL_CATEGORIES, type Audience, type Category } from '../../../data/words'
import { t } from '../../../data/i18n'
import { SITE_URL } from '../../../data/site'
import { SUPPORTED_LANGUAGES } from '../../../data/languages'
import { getCategoryFAQs } from '../../../data/faq'
import { getCategoryContent } from '../../../data/category-content'
import WordCard from '../../../components/WordCard'
import CategoryNav from '../../../components/CategoryNav'
import Breadcrumb from '../../../components/Breadcrumb'

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

const categoryDescriptions: Record<string, Record<string, string>> = {
  en: {
    nouns: 'Act out fun noun words in charades! Objects, places and things to guess.',
    verbs: 'Mime action words in charades! Running, dancing, cooking and more.',
    adjectives: 'Describe adjective words with gestures! Enormous, sparkly, freezing and more.',
    animals: 'Act out your favorite animals in charades! Elephant, penguin, dolphin and more.',
    food: 'Guess delicious food words in charades! Pizza, ice cream, spaghetti and more.',
    occupations: 'Act out different jobs and professions! Doctor, astronaut, chef and more.',
    movies: 'Act out famous movies in charades! Titanic, Star Wars, Frozen and more.',
    'tv-shows': 'Mime popular TV shows! Friends, SpongeBob, Game of Thrones and more.',
    celebrities: 'Act out famous people! Taylor Swift, Michael Jordan, Einstein and more.',
    sports: 'Mime different sports and activities! Football, tennis, gymnastics and more.',
    places: 'Act out famous places and locations! Eiffel Tower, beach, jungle and more.',
  },
  de: {
    nouns: 'Pantomime mit lustigen Substantiven! Gegenstände und Dinge zum Erraten.',
    verbs: 'Pantomime mit Verben! Tanzen, Schwimmen, Kochen und mehr.',
    adjectives: 'Adjektive mit Gesten beschreiben! Riesig, glitzernd, eiskalt und mehr.',
    animals: 'Lieblingstiere als Pantomime! Elefant, Pinguin, Delfin und mehr.',
    food: 'Leckeres Essen erraten! Pizza, Eiscreme, Spaghetti und mehr.',
    occupations: 'Berufe als Pantomime! Arzt, Astronaut, Koch und mehr.',
    movies: 'Filme als Pantomime! Titanic, Star Wars, Frozen und mehr.',
    'tv-shows': 'TV-Sendungen mimen! Simpsons, SpongeBob, Game of Thrones und mehr.',
    celebrities: 'Prominente darstellen! Taylor Swift, Michael Jordan und mehr.',
    sports: 'Sportarten mimen! Fußball, Tennis, Turnen und mehr.',
    places: 'Orte als Pantomime! Eiffelturm, Strand, Dschungel und mehr.',
  },
  fr: {
    nouns: 'Mimez des noms amusants ! Objets, lieux et choses à deviner.',
    verbs: 'Mimez des verbes d\'action ! Danser, nager, cuisiner et plus.',
    adjectives: 'Décrivez des adjectifs par gestes ! Énorme, brillant, glacial et plus.',
    animals: 'Mimez vos animaux préférés ! Éléphant, pingouin, dauphin et plus.',
    food: 'Devinez des mots de nourriture ! Pizza, glace, spaghetti et plus.',
    occupations: 'Mimez différents métiers ! Médecin, astronaute, cuisinier et plus.',
    movies: 'Mimez des films célèbres ! Titanic, Star Wars, Frozen et plus.',
    'tv-shows': 'Mimez des séries TV ! Friends, SpongeBob, Game of Thrones et plus.',
    celebrities: 'Mimez des célébrités ! Taylor Swift, Michael Jordan et plus.',
    sports: 'Mimez des sports ! Football, tennis, gymnastique et plus.',
    places: 'Mimez des lieux célèbres ! Tour Eiffel, plage, jungle et plus.',
  },
  es: {
    nouns: '¡Actúa sustantivos divertidos! Objetos, lugares y cosas para adivinar.',
    verbs: '¡Imita verbos de acción! Bailar, nadar, cocinar y más.',
    adjectives: '¡Describe adjetivos con gestos! Enorme, brillante, helado y más.',
    animals: '¡Actúa tus animales favoritos! Elefante, pingüino, delfín y más.',
    food: '¡Adivina palabras de comida! Pizza, helado, espagueti y más.',
    occupations: '¡Actúa diferentes profesiones! Doctor, astronauta, chef y más.',
    movies: '¡Actúa películas famosas! Titanic, Star Wars, Frozen y más.',
    'tv-shows': '¡Imita series de TV! Friends, SpongeBob, Game of Thrones y más.',
    celebrities: '¡Actúa celebridades! Taylor Swift, Michael Jordan y más.',
    sports: '¡Imita deportes! Fútbol, tenis, gimnasia y más.',
    places: '¡Actúa lugares famosos! Torre Eiffel, playa, selva y más.',
  },
  it: {
    nouns: 'Mima sostantivi divertenti! Oggetti, luoghi e cose da indovinare.',
    verbs: 'Mima verbi d\'azione! Ballare, nuotare, cucinare e altro.',
    adjectives: 'Descrivi aggettivi con i gesti! Enorme, scintillante, gelido e altro.',
    animals: 'Mima i tuoi animali preferiti! Elefante, pinguino, delfino e altro.',
    food: 'Indovina parole di cibo! Pizza, gelato, spaghetti e altro.',
    occupations: 'Mima diverse professioni! Dottore, astronauta, cuoco e altro.',
    movies: 'Mima film famosi! Titanic, Star Wars, Frozen e altro.',
    'tv-shows': 'Mima serie TV! Friends, SpongeBob, Game of Thrones e altro.',
    celebrities: 'Mima celebrità! Taylor Swift, Michael Jordan e altro.',
    sports: 'Mima sport! Calcio, tennis, ginnastica e altro.',
    places: 'Mima luoghi famosi! Torre Eiffel, spiaggia, giungla e altro.',
  },
  ja: {
    nouns: '名詞でジェスチャーゲーム！物や場所を当てよう。',
    verbs: '動詞でジェスチャーゲーム！踊る、泳ぐ、料理するなど。',
    adjectives: '形容詞をジェスチャーで表現！巨大な、キラキラ、凍えるなど。',
    animals: '動物でジェスチャーゲーム！ゾウ、ペンギン、イルカなど。',
    food: '食べ物のジェスチャーゲーム！ピザ、アイスクリームなど。',
    occupations: '職業でジェスチャーゲーム！医者、宇宙飛行士、シェフなど。',
    movies: '映画でジェスチャーゲーム！タイタニック、スターウォーズなど。',
    'tv-shows': 'テレビ番組でジェスチャーゲーム！フレンズ、スポンジボブなど。',
    celebrities: '有名人でジェスチャーゲーム！テイラー・スウィフトなど。',
    sports: 'スポーツでジェスチャーゲーム！サッカー、テニスなど。',
    places: '場所でジェスチャーゲーム！エッフェル塔、ビーチなど。',
  },
  ko: {
    nouns: '명사로 제스처 게임! 물건과 장소를 맞춰보세요.',
    verbs: '동사로 제스처 게임! 춤추다, 수영하다, 요리하다 등.',
    adjectives: '형용사를 몸짓으로 표현! 거대한, 반짝반짝 등.',
    animals: '동물로 제스처 게임! 코끼리, 펭귄, 돌고래 등.',
    food: '음식으로 제스처 게임! 피자, 아이스크림 등.',
    occupations: '직업으로 제스처 게임! 의사, 우주비행사, 요리사 등.',
    movies: '영화로 제스처 게임! 타이타닉, 스타워즈, 겨울왕국 등.',
    'tv-shows': 'TV 프로그램으로 제스처 게임! 프렌즈, 스폰지밥 등.',
    celebrities: '유명인으로 제스처 게임! 테일러 스위프트 등.',
    sports: '스포츠로 제스처 게임! 축구, 테니스, 체조 등.',
    places: '장소로 제스처 게임! 에펠탑, 해변, 정글 등.',
  },
  'zh-tw': {
    nouns: '名詞比手畫腳！猜猜各種物品和事物。',
    verbs: '動詞比手畫腳！跳舞、游泳、煮飯等動作。',
    adjectives: '用動作表達形容詞！巨大的、閃亮的、冰冷的等。',
    animals: '動物比手畫腳！大象、企鵝、海豚等。',
    food: '食物比手畫腳！披薩、冰淇淋、義大利麵等。',
    occupations: '職業比手畫腳！醫生、太空人、廚師等。',
    movies: '電影比手畫腳！鐵達尼號、星際大戰、冰雪奇緣等。',
    'tv-shows': '電視節目比手畫腳！乃們朋友、海綿寶寶等。',
    celebrities: '名人比手畫腳！乃勒絲、乃可乃喬丹等。',
    sports: '運動比手畫腳！足球、網球、體操等。',
    places: '地點比手畫腳！艾菲爾鐵塔、海灘、叢林等。',
  },
}

export const Route = createFileRoute('/$lang/category/$category')({
  beforeLoad: ({ params }) => {
    if (!isValidCategory(params.category)) {
      throw redirect({ to: '/$lang', params: { lang: params.lang } })
    }
  },
  head: ({ params }) => {
    const strings = t(params.lang)
    const categoryName = strings[params.category as keyof typeof strings] || params.category
    const title = `${categoryName} Charades Words — ${strings.siteTitle}`
    const description = categoryDescriptions[params.lang]?.[params.category]
      || categoryDescriptions.en[params.category]
      || strings.siteDescription
    const pageUrl = `${SITE_URL}/${params.lang}/category/${params.category}/`
    const faqs = getCategoryFAQs(params.lang, params.category)

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: pageUrl },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      links: [
        { rel: 'canonical', href: pageUrl },
        // hreflang for this category across all languages
        ...SUPPORTED_LANGUAGES.map((lang) => ({
          rel: 'alternate',
          hrefLang: lang.hreflang,
          href: `${SITE_URL}/${lang.code}/category/${params.category}/`,
        })),
      ],
      scripts: [
        ...(faqs.length > 0
          ? [
              {
                type: 'application/ld+json',
                children: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer,
                    },
                  })),
                }),
              },
            ]
          : []),
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
                name: categoryName,
                item: pageUrl,
              },
            ],
          }),
        },
      ],
    }
  },
  validateSearch: (search: Record<string, unknown>) => ({
    audience: (search.audience as Audience) || undefined,
  }),
  component: CategoryPage,
})

function CategoryPage() {
  const { lang, category } = Route.useParams()
  const { audience } = Route.useSearch()
  const strings = t(lang)
  const catKey = category === 'tv-shows' ? 'tvShows' : category
  const categoryName = strings[catKey as keyof typeof strings] || category
  const faqs = getCategoryFAQs(lang, category)
  const content = getCategoryContent(lang, category)
  const words = getWords(lang, category as Category)
  const previewWords = words.slice(0, 12)
  const otherCategories = ALL_CATEGORIES.filter((c) => c !== category)

  return (
    <div className="flex flex-col gap-12 w-full max-w-2xl mx-auto animate-float-in">
      <Breadcrumb
        items={[
          { label: strings.categories, href: `/${lang}` },
          { label: categoryName as string },
        ]}
      />

      {/* Game Section */}
      <div className="flex flex-col gap-8 max-w-lg mx-auto w-full">
        <h1 className="font-display text-xl md:text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {categoryName} — {strings.siteTitle}
        </h1>
        <WordCard lang={lang} category={category as Category} audience={audience} />
        <CategoryNav activeCategory={category as Category} activeAudience={audience} />
      </div>

      {/* How to Play Guide */}
      {content && (
        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {strings.howToPlay || 'How to Play'} — {categoryName}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
            {content.howToPlay}
          </p>
        </section>
      )}

      {/* Word Preview */}
      {previewWords.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {categoryName} — {strings.wordsAvailable ? `${words.length} ${strings.wordsAvailable}` : `${words.length} Words`}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {previewWords.map((w, i) => (
              <span key={i} className="word-preview-tag">{w.text}</span>
            ))}
          </div>
          {words.length > 12 && (
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              +{words.length - 12} more...
            </p>
          )}
        </section>
      )}

      {/* Tips */}
      {content && content.tips.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {strings.tips || 'Tips'} — {categoryName}
          </h2>
          <div className="flex flex-col gap-2">
            {content.tips.map((tip, i) => (
              <div key={i} className="tip-card">
                <span className="tip-number">{i + 1}</span>
                <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>{tip}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Category-specific FAQ */}
      {faqs.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
            {strings.frequentlyAsked}
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}

      {/* Related Categories */}
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {strings.exploreCategories}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {otherCategories.map((cat) => {
            const catName = strings[cat as keyof typeof strings] || cat
            const catCount = getWords(lang, cat).length
            return (
              <Link
                key={cat}
                to="/$lang/category/$category"
                params={{ lang, category: cat }}
                className="category-card"
              >
                <span className="text-2xl">{categoryEmojis[cat]}</span>
                <span className="font-display font-bold text-sm" style={{ color: 'var(--color-primary)' }}>
                  {catName}
                </span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {catCount} {strings.wordsAvailable}
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`faq-chevron ${open ? 'rotated' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

