import { useEffect } from 'react'

// Corrige un bug classique de SPA en CSR pur (04/09/2026) : le navigateur tente de sauter vers
// l'ancre #hash au tout premier parse du HTML, avant que React n'ait rendu l'élément cible
// (index.html ne contient qu'un <div id="root"> vide au chargement, cf. commentaire dans
// seo-meta.js) — ce saut natif échoue silencieusement et la page reste en haut. Symptôme
// observé : un lien /#contact cliqué depuis /offres, /methode ou le Header ramène en haut de la
// homepage (vers le Hero) au lieu du formulaire de contact. Rejoue le saut une fois le DOM
// réellement peuplé. Depuis la homepage elle-même (ex. le CTA du Hero, href="#contact"), la
// navigation reste dans le même document et le saut natif fonctionne déjà — ce hook est un no-op
// dans ce cas puisque le scroll a déjà eu lieu avant que l'effet ne s'exécute.
export default function useScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return
    const el = document.querySelector(window.location.hash)
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [])
}
