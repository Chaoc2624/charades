import { HeadContent, Outlet, Scripts, createRootRoute, useParams } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Charades Word Generator — Free Online Charades Game' },
      { name: 'description', content: 'Play charades online with 500+ random words across 11 categories. Generate random words for kids, adults, or all ages. Play charades free in 3 languages!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Charades' },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%235B6E72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3C3.5 3 2 5 2 8c0 3.5 2 6 5.5 6S12 11.5 12 8c0-3-1.5-5-3.5-5h-3z"/><path d="M6 8.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z"/><path d="M8.5 8.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z"/><path d="M5.5 10.5s.5 1 2 1 2-1 2-1"/><path d="M18.5 3c2 0 3.5 2 3.5 5 0 3.5-2 6-5.5 6S12 11.5 12 8c0-3 1.5-5 3.5-5h3z"/><path d="M15 8.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z"/><path d="M17.5 8.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z"/><path d="M15 11s.5-1 2-1 2 1 2 1"/><path d="M7 14c-1 2.5-1 5 1.5 6.5"/><path d="M17 14c1 2.5 1 5-1.5 6.5"/></svg>' },
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N1BT41T5G4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N1BT41T5G4');`
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRS3QSJ5');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRS3QSJ5"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
