import site from '../config/site'
import MagneticButton from './MagneticButton'
import OffreEngagements from './OffreEngagements'
import Reveal from './Reveal'
import chevaletAvisGoogleWebp from '../assets/supports-physiques/chevalet-avis-google.webp'
import chevaletAvisGoogleJpg from '../assets/supports-physiques/chevalet-avis-google.jpg'
import flyerBtpWebp from '../assets/supports-physiques/flyer-btp.webp'
import flyerBtpJpg from '../assets/supports-physiques/flyer-btp.jpg'
import carteVisiteBtpWebp from '../assets/supports-physiques/carte-visite-btp.webp'
import carteVisiteBtpJpg from '../assets/supports-physiques/carte-visite-btp.jpg'

const SUPPORTS_IMAGES = {
  chevaletAvisGoogle: { webp: chevaletAvisGoogleWebp, jpg: chevaletAvisGoogleJpg },
  flyerBtp: { webp: flyerBtpWebp, jpg: flyerBtpJpg },
  carteVisiteBtp: { webp: carteVisiteBtpWebp, jpg: carteVisiteBtpJpg },
}

// Offre unique v1 (29/09/2026) : une seule carte, remplace les deux axes santé / site + fiche,
// le Suivi Premium et l'encart "Besoin spécifique". Nom de fichier conservé pour limiter le diff.
export default function OffreAxes() {
  const { offre, supportsPhysiques } = site

  return (
    <section id="offres" className="bg-concrete-texture px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        {/* sr-only : le h1 de PageIntro couvre déjà le titre visible de la page, mais la hiérarchie
            de titres (a11y/SEO) ne doit pas sauter de h1 à h3 pour la carte ci-dessous. */}
        <h2 className="sr-only">Notre offre</h2>
        <p className="mx-auto max-w-xl text-center text-sm text-[var(--ink-muted)]">{site.offresIntro}</p>

        <Reveal className="chamfer mx-auto mt-10 grid max-w-5xl gap-8 border-2 border-[var(--color-orange)] bg-[var(--surface-card)] p-7 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
              {offre.cible}
            </span>
            <h3 className="mt-2 text-xl text-[var(--ink)]">{offre.titre}</h3>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">{offre.description}</p>
            <ul className="mt-5 space-y-2.5">
              {offre.inclus.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-[var(--ink-body)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col border-t border-[var(--border-soft)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="[font-family:var(--font-utility)] text-3xl font-bold text-[var(--ink)]">{offre.prix}</p>
            <p className="mt-1 text-sm text-[var(--ink-body)]">{offre.prixDetail}</p>
            <p className="mt-1 text-xs text-[var(--ink-muted)]">{offre.tva}</p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--ink-muted)]">
              <li>{offre.paiement}</li>
              <li>{offre.renouvellement}</li>
              <li>{offre.sortie}</li>
            </ul>
            <MagneticButton
              href="/#contact"
              className="cta-glow mt-6 inline-block w-full rounded-sm bg-[var(--color-orange-button)] px-4 py-2.5 text-center text-sm font-medium text-white hover:opacity-90 lg:mt-auto"
            >
              Demander un devis
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-6 max-w-5xl">
          <OffreEngagements />
        </Reveal>

        {/* Supports physiques inclus — bloc retiré le 05/09/2026 (commit 2ed80e0), remis le 29/09/2026
            avec l'offre unique, sans le chevalet neutre santé. */}
        <Reveal
          delay={120}
          className="chamfer mx-auto mt-6 max-w-5xl border border-[var(--border-soft)] bg-[var(--surface-card)] p-7"
        >
          <h3 className="text-lg text-[var(--ink)]">{supportsPhysiques.titre}</h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--ink-muted)]">{supportsPhysiques.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {supportsPhysiques.items.map((item) => (
              <figure key={item.id} className="chamfer overflow-hidden border border-[var(--border-soft)] bg-[var(--surface)]">
                <picture>
                  <source srcSet={SUPPORTS_IMAGES[item.id].webp} type="image/webp" />
                  <img
                    src={SUPPORTS_IMAGES[item.id].jpg}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </picture>
                <figcaption className="p-3 text-xs text-[var(--ink-muted)]">{item.legende}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        {/* Seule option de l'offre : page consacrée à une commune */}
        <Reveal
          delay={160}
          className="chamfer mx-auto mt-6 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface)] px-6 py-6 sm:flex sm:items-start sm:justify-between sm:gap-8"
        >
          <div>
            <span className="[font-family:var(--font-utility)] rounded-sm border border-[var(--border-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
              {offre.option.badge}
            </span>
            <h3 className="mt-2 text-lg text-[var(--ink)]">{offre.option.titre}</h3>
            <p className="mt-1 max-w-2xl text-sm text-[var(--ink-muted)]">{offre.option.description}</p>
          </div>
          <p className="mt-4 shrink-0 text-right sm:mt-0">
            <span className="[font-family:var(--font-utility)] text-lg font-bold text-[var(--ink)]">{offre.option.prix}</span>
            <span className="block text-xs text-[var(--ink-muted)]">{offre.option.prixDetail}</span>
            <span className="block text-xs text-[var(--ink-muted)]">{offre.tva}</span>
          </p>
        </Reveal>
      </Reveal>
    </section>
  )
}
