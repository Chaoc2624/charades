import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { t } from '../../../data/i18n'
import { getFAQs } from '../../../data/faq'
import { SITE_URL } from '../../../data/site'
import { SUPPORTED_LANGUAGES } from '../../../data/languages'
import Breadcrumb from '../../../components/Breadcrumb'

interface Gesture {
  icon: string
  name: string
  description: string
}

const gestureData: Record<string, Gesture[]> = {
  en: [
    { icon: '✋', name: 'Word Count', description: 'Hold up fingers to show the number of words in the phrase. This is usually the first gesture you make.' },
    { icon: '🤚', name: 'Syllable Count', description: 'Place the number of fingers against your forearm to indicate how many syllables are in the current word.' },
    { icon: '🤏', name: 'Short Word', description: 'Pinch your thumb and index finger close together to signal the word is short (like "a," "the," "it").' },
    { icon: '👐', name: 'Long Word', description: 'Hold your thumb and index finger far apart to indicate the word is long or complex.' },
    { icon: '👂', name: 'Sounds Like', description: 'Cup your hand behind your ear to signal that you\'re about to act out a word that sounds like the target word.' },
    { icon: '🔗', name: 'Plural Word', description: 'Hook your little fingers together to show the word is plural, helping teammates avoid guessing the singular form.' },
    { icon: '✅', name: 'Correct / Keep Going', description: 'Point at the guesser and nod enthusiastically when they say the right word or are getting close.' },
  ],
  de: [
    { icon: '✋', name: 'Wortanzahl', description: 'Finger hochhalten, um die Anzahl der Wörter anzuzeigen. Das ist normalerweise die erste Geste.' },
    { icon: '🤚', name: 'Silbenanzahl', description: 'Finger an den Unterarm legen, um die Anzahl der Silben eines Wortes zu zeigen.' },
    { icon: '🤏', name: 'Kurzes Wort', description: 'Daumen und Zeigefinger zusammendrücken, um ein kurzes Wort anzuzeigen.' },
    { icon: '👐', name: 'Langes Wort', description: 'Daumen und Zeigefinger weit auseinander halten, um ein langes Wort anzuzeigen.' },
    { icon: '👂', name: 'Klingt wie', description: 'Hand hinter das Ohr halten, um anzuzeigen, dass ein ähnlich klingendes Wort dargestellt wird.' },
    { icon: '🔗', name: 'Mehrzahl', description: 'Kleine Finger verhaken, um die Mehrzahl eines Wortes anzuzeigen.' },
    { icon: '✅', name: 'Richtig', description: 'Auf den Ratenden zeigen und enthusiastisch nicken, wenn die richtige Antwort kommt.' },
  ],
  fr: [
    { icon: '✋', name: 'Nombre de mots', description: 'Levez les doigts pour indiquer le nombre de mots. C\'est le premier geste habituel.' },
    { icon: '🤚', name: 'Nombre de syllabes', description: 'Placez les doigts contre votre avant-bras pour les syllabes.' },
    { icon: '🤏', name: 'Mot court', description: 'Pincez pouce et index pour signaler un mot court.' },
    { icon: '👐', name: 'Mot long', description: 'Écartez pouce et index pour signaler un mot long.' },
    { icon: '👂', name: 'Ressemble à', description: 'Placez la main derrière l\'oreille pour indiquer un mot qui ressemble au mot cible.' },
    { icon: '🔗', name: 'Mot au pluriel', description: 'Accrochez vos auriculaires pour indiquer le pluriel.' },
    { icon: '✅', name: 'Correct', description: 'Pointez et hochez la tête quand la bonne réponse est donnée.' },
  ],
  es: [
    { icon: '✋', name: 'Número de palabras', description: 'Levanta los dedos para indicar cuántas palabras hay.' },
    { icon: '🤚', name: 'Número de sílabas', description: 'Coloca los dedos en tu antebrazo para las sílabas.' },
    { icon: '🤏', name: 'Palabra corta', description: 'Junta pulgar e índice para señalar una palabra corta.' },
    { icon: '👐', name: 'Palabra larga', description: 'Separa pulgar e índice para señalar una palabra larga.' },
    { icon: '👂', name: 'Suena como', description: 'Coloca la mano detrás de la oreja para palabras que suenan similar.' },
    { icon: '🔗', name: 'Palabra en plural', description: 'Engancha los meñiques para indicar plural.' },
    { icon: '✅', name: 'Correcto', description: 'Señala y asiente cuando la respuesta correcta es dada.' },
  ],
  it: [
    { icon: '✋', name: 'Conteggio parole', description: 'Alza le dita per indicare il numero di parole.' },
    { icon: '🤚', name: 'Conteggio sillabe', description: 'Metti le dita sull\'avambraccio per le sillabe.' },
    { icon: '🤏', name: 'Parola breve', description: 'Avvicina pollice e indice per una parola breve.' },
    { icon: '👐', name: 'Parola lunga', description: 'Allontana pollice e indice per una parola lunga.' },
    { icon: '👂', name: 'Suona come', description: 'Metti la mano dietro l\'orecchio per parole simili.' },
    { icon: '🔗', name: 'Parola al plurale', description: 'Aggancia i mignoli per indicare il plurale.' },
    { icon: '✅', name: 'Corretto', description: 'Indica e annuisci quando la risposta giusta arriva.' },
  ],
  ja: [
    { icon: '✋', name: '語数', description: '指を立てて単語の数を示します。最初にする定番のジェスチャーです。' },
    { icon: '🤚', name: '音節数', description: '前腕に指を当てて音節の数を示します。' },
    { icon: '🤏', name: '短い言葉', description: '親指と人差し指を近づけて短い言葉を示します。' },
    { icon: '👐', name: '長い言葉', description: '親指と人差し指を離して長い言葉を示します。' },
    { icon: '👂', name: '似た音', description: '耳の後ろに手を当てて、似た音の言葉を使うことを示します。' },
    { icon: '🔗', name: '複数形', description: '小指を引っかけて複数形を示します。' },
    { icon: '✅', name: '正解', description: '正しい答えが出たら指さして頷きます。' },
  ],
  ko: [
    { icon: '✋', name: '단어 수', description: '손가락을 세워 단어 수를 보여줍니다. 보통 첫 번째로 하는 제스처입니다.' },
    { icon: '🤚', name: '음절 수', description: '팔뚝에 손가락을 대어 음절 수를 보여줍니다.' },
    { icon: '🤏', name: '짧은 단어', description: '엄지와 검지를 가까이 하여 짧은 단어를 표시합니다.' },
    { icon: '👐', name: '긴 단어', description: '엄지와 검지를 멀리 하여 긴 단어를 표시합니다.' },
    { icon: '👂', name: '비슷한 소리', description: '귀 뒤에 손을 대어 비슷한 발음의 단어를 사용할 것을 알립니다.' },
    { icon: '🔗', name: '복수형', description: '새끼손가락을 걸어 복수형을 표시합니다.' },
    { icon: '✅', name: '정답', description: '정답이 나오면 가리키고 고개를 끄덕입니다.' },
  ],
  'zh-tw': [
    { icon: '✋', name: '詞語數量', description: '舉起手指表示短語中有幾個詞。通常是第一個手勢。' },
    { icon: '🤚', name: '音節數', description: '將手指放在前臂上表示音節數量。' },
    { icon: '🤏', name: '短詞', description: '拇指和食指靠近表示短詞。' },
    { icon: '👐', name: '長詞', description: '拇指和食指分開表示長詞或複雜的詞。' },
    { icon: '👂', name: '聽起來像', description: '手放在耳後表示要演的詞和目標詞發音相似。' },
    { icon: '🔗', name: '複數', description: '小指互勾表示複數形式。' },
    { icon: '✅', name: '正確', description: '當猜對時，指向猜測者並熱情點頭。' },
  ],
}

function getGestures(lang: string): Gesture[] {
  return gestureData[lang] || gestureData.en
}

export const Route = createFileRoute('/$lang/faq/')(  {
  head: ({ params }) => {
    const strings = t(params.lang)
    const pageUrl = `${SITE_URL}/${params.lang}/faq/`
    const faqs = getFAQs(params.lang)

    return {
      meta: [
        { title: `${strings.frequentlyAsked} — ${strings.siteTitle}` },
        { name: 'description', content: strings.faqDescription },
        { property: 'og:title', content: `${strings.frequentlyAsked} — ${strings.siteTitle}` },
        { property: 'og:description', content: strings.faqDescription },
        { property: 'og:url', content: pageUrl },
        { name: 'twitter:title', content: `${strings.frequentlyAsked} — ${strings.siteTitle}` },
        { name: 'twitter:description', content: strings.faqDescription },
      ],
      links: [
        { rel: 'canonical', href: pageUrl },
        ...SUPPORTED_LANGUAGES.map((lang) => ({
          rel: 'alternate',
          hrefLang: lang.hreflang,
          href: `${SITE_URL}/${lang.code}/faq/`,
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/en/faq/` },
      ],
      scripts: [
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
                name: 'FAQ',
                item: pageUrl,
              },
            ],
          }),
        },
      ],
    }
  },
  component: FAQPage,
})

function FAQPage() {
  const { lang } = Route.useParams()
  const strings = t(lang)
  const faqs = getFAQs(lang)

  const gestures = getGestures(lang)

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto animate-float-in">
      <Breadcrumb items={[{ label: strings.faq }]} />

      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {strings.frequentlyAsked}
        </h1>
        <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>
          {strings.faqDescription}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Common Gestures Guide */}
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
          {strings.gesturesGuide}
        </h2>
        <div className="flex flex-col gap-3">
          {gestures.map((g, i) => (
            <div key={i} className="gesture-card">
              <span className="gesture-icon">{g.icon}</span>
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  {g.name}
                </span>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                  {g.description}
                </p>
              </div>
            </div>
          ))}
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
