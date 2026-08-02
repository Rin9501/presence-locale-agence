import useCookieConsent from '../hooks/useCookieConsent'

// Bandeau minimal : tant qu'aucun choix n'est fait, aucun script Google Analytics n'est chargé
// (cf. loadGtag dans lib/analytics.js) — pas de cookie posé avant consentement explicite.
export default function CookieConsent() {
  const { consent, accept, refuse } = useCookieConsent()

  if (consent) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="text-sm text-[var(--ink-body)]">
        On utilise Google Analytics pour mesurer la fréquentation du site, uniquement avec votre accord — pas de
        publicité, pas de revente de données.{' '}
        <a href="/mentions-legales#cookies" className="underline hover:text-[var(--color-orange-text)]">
          En savoir plus
        </a>
      </p>
      <div className="mt-3 flex shrink-0 gap-3 sm:mt-0">
        <button
          type="button"
          onClick={refuse}
          className="rounded-sm border border-[var(--border-soft)] px-4 py-2 text-sm font-medium text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={accept}
          className="cta-glow rounded-sm bg-[var(--color-orange-button)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Accepter
        </button>
      </div>
    </div>
  )
}
