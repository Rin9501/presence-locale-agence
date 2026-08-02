import { useEffect } from 'react'

// SPA en CSR sans lib de routing : chaque page dédiée (offres, méthode...) doit poser son
// propre title/meta description au montage, sinon toutes les pages héritent de celles de
// l'accueil définies dans index.html — mauvais pour le SEO des pages nouvellement séparées.
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

    return () => {
      document.title = previousTitle
      if (meta && previousDescription) meta.setAttribute('content', previousDescription)
      if (canonical && previousCanonical) canonical.setAttribute('href', previousCanonical)
    }
  }, [title, description, path])
}
