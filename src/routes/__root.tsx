import { HeadContent, Outlet, Scripts, createRootRoute, useParams } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Charades Word Generator — Free Online Charades Game' },
      { name: 'description', content: 'Play charades online with 500+ words across 11 categories. Generate random words for kids, adults, or all ages. Free word guessing game in 8 languages.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Charades' },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎭</text></svg>' },
      // hreflang tags are set by leaf routes to avoid duplication
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const params = useParams({ strict: false }) as { lang?: string }
  const lang = params.lang || 'en'

  return (
    <html lang={lang === 'zh-tw' ? 'zh-TW' : lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
