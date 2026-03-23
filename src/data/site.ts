// Site configuration for SEO
export const SITE_URL = 'https://charades.fun' // Update this to your actual domain

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`
}

export function getPageUrl(lang: string, path: string = ''): string {
  return `${SITE_URL}/${lang}${path ? `/${path}` : ''}/`
}
