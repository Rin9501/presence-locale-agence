const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let loaded = false

// N'injecte le script Google Analytics qu'après consentement explicite (bouton "Accepter" du
// bandeau cookies) — aucun cookie de mesure n'est posé avant ce moment, ce qui suffit au RGPD
// sans avoir besoin du Consent Mode avancé de Google (plus complexe, pas nécessaire ici).
export function loadGtag() {
  if (loaded || !MEASUREMENT_ID) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

// Fils ouvert du 05/07/2026 (journal Notion) : décidé mais jamais implémenté. N'envoie rien tant
// que le visiteur n'a pas accepté le bandeau cookies (window.gtag n'existe que dans ce cas, cf.
// loadGtag ci-dessus) — même logique de consentement que le reste de la mesure d'audience.
export function trackPhoneClick(source) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'click_to_call', {
    click_source: source,
    page_path: window.location.pathname,
  })
}
