import site from '../config/site'
import MagneticButton from './MagneticButton'
import Reveal from './Reveal'

// CTA de fin de page, réutilisé par /offres et /methode — le vrai formulaire vit sur la
// homepage (#contact), ces pages y renvoient plutôt que de dupliquer le formulaire.
export default function PageCta() {
  return (
    <section className="bg-[var(--surface-card)] px-6 py-16 text-center">
      <Reveal className="mx-auto max-w-xl">
        <h2 className="text-2xl text-[var(--ink)]">Prêt à être trouvé sur Google ?</h2>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          Un audit gratuit de votre fiche Google, sans engagement. Réponse sous 48h.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href="/#contact"
            className="cta-glow inline-block rounded-sm bg-[var(--color-orange-button)] px-6 py-3 font-medium text-white hover:opacity-90"
          >
            {site.hero.ctaAudit}
          </MagneticButton>
          <MagneticButton
            href={site.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow inline-block rounded-sm border border-[var(--border-soft)] px-6 py-3 font-medium text-[var(--ink)] transition hover:border-[var(--color-orange)]"
          >
            Réserver un créneau
          </MagneticButton>
          <MagneticButton
            href={`tel:${site.business.phone.replace(/\s/g, '')}`}
            className="cta-glow inline-block rounded-sm border border-[var(--border-soft)] px-6 py-3 font-medium text-[var(--ink)] transition hover:border-[var(--color-orange)]"
          >
            {site.business.phone}
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  )
}
