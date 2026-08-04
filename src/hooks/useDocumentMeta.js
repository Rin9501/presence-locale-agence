import { useEffect } from 'react'

// SPA en CSR sans lib de routing : chaque page dédiée (offres, méthode...) doit poser son
// propre title/meta description au montage, sinon toutes les pages héritent de celles de
// l'accueil définies dans index.html — mauvais pour le SEO des pages nouvellement séparées.
// Couvre aussi og:title/og:description/og:url et twitter:title/twitter:description, sinon un
// partage de /offres ou /methode sur Facebook/LinkedIn affiche toujours la carte de l'accueil
// (audit SEO du 04/08/2026).
const OG_SELECTORS = {
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogUrl: 'meta[property="og:url"]',
  twitterTitle: 'meta[name="twitter:title"]',
  twitterDescription: 'meta[name="twitter:description"]',
}

export default function useDocumentMeta(title, description, path) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content')
    if (meta && description) meta.setAttribute('content', description)

    const canonical = document.querySelector('link[rel="canonical"]')
    const previousCanonical = canonical?.getAttribute('href')
    if (canonical && path) canonical.setAttribute('href', `https://ladalle-agence.fr${path}`)

    const url = path ? `https://ladalle-agence.fr${path}` : undefined
    const values = { ogTitle: title, ogDescription: description, ogUrl: url, twitterTitle: title, twitterDescription: description }
    const elements = {}
    const previousValues = {}
    for (const [key, selector] of Object.entries(OG_SELECTORS)) {
      const el = document.querySelector(selector)
      elements[key] = el
      previousValues[key] = el?.getAttribute('content')
      if (el && values[key]) el.setAttribute('content', values[key])
    }

    return () => {
      document.title = previousTitle
      if (meta && previousDescription) meta.setAttribute('content', previousDescription)
      if (canonical && previousCanonical) canonical.setAttribute('href', previousCanonical)
      for (const key of Object.keys(OG_SELECTORS)) {
        if (elements[key] && previousValues[key]) elements[key].setAttribute('content', previousValues[key])
      }
    }
  }, [title, description, path])
}
