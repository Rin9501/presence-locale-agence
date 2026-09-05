import { trackPhoneClick } from '../lib/analytics'
import site from '../config/site'

// CTA persistant mobile uniquement (05/09/2026) : sur mobile, le Header masque son bouton
// "Un audit gratuit" derrière le menu hamburger (cf. Header.jsx, classe "hidden ... sm:inline-block")
// — sans ce bandeau, un visiteur mobile n'a aucun CTA visible sans ouvrir le menu. Le Header
// reste sticky en haut (logo + burger) ; celui-ci reste fixé en bas, complémentaire, pas redondant.
// z-40, sous le bandeau cookies (z-50, CookieConsent.jsx) : le temps qu'il soit accepté/refusé,
// il passe devant sans casser l'affichage, comportement standard pour deux barres fixed bottom-0.
export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[var(--border-soft)] bg-[var(--surface-card)]/95 backdrop-blur [padding-bottom:env(safe-area-inset-bottom)] sm:hidden">
      <a
        href={`tel:${site.business.phone.replace(/\s/g, '')}`}
        onClick={() => trackPhoneClick('mobile_sticky_cta')}
        className="flex-1 border-r border-[var(--border-soft)] px-4 py-3 text-center text-sm font-medium text-[var(--ink)]"
      >
        Appeler
      </a>
      <a
        href="/#contact"
        className="cta-glow flex-1 bg-[var(--color-orange-button)] px-4 py-3 text-center text-sm font-medium text-white"
      >
        Un audit gratuit
      </a>
    </div>
  )
}
