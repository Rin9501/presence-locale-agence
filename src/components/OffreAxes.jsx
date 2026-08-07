import site from '../config/site'
import MagneticButton from './MagneticButton'
import Reveal from './Reveal'
import chevaletNeutreWebp from '../assets/supports-physiques/chevalet-neutre.webp'
import chevaletNeutreJpg from '../assets/supports-physiques/chevalet-neutre.jpg'
import chevaletAvisGoogleWebp from '../assets/supports-physiques/chevalet-avis-google.webp'
import chevaletAvisGoogleJpg from '../assets/supports-physiques/chevalet-avis-google.jpg'
import flyerBtpWebp from '../assets/supports-physiques/flyer-btp.webp'
import flyerBtpJpg from '../assets/supports-physiques/flyer-btp.jpg'
import carteVisiteBtpWebp from '../assets/supports-physiques/carte-visite-btp.webp'
import carteVisiteBtpJpg from '../assets/supports-physiques/carte-visite-btp.jpg'

const SUPPORTS_IMAGES = {
  chevaletNeutre: { webp: chevaletNeutreWebp, jpg: chevaletNeutreJpg },
  chevaletAvisGoogle: { webp: chevaletAvisGoogleWebp, jpg: chevaletAvisGoogleJpg },
  flyerBtp: { webp: flyerBtpWebp, jpg: flyerBtpJpg },
  carteVisiteBtp: { webp: carteVisiteBtpWebp, jpg: carteVisiteBtpJpg },
}

export default function OffreAxes() {
  const { axeA, axeB, suiviPremium } = site.offres

  return (
    <section id="offres" className="bg-concrete-texture px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        {/* sr-only : le h1 de PageIntro couvre déjà le titre visible de la page, mais la hiérarchie
            de titres (a11y/SEO) ne doit pas sauter de h1 à h3 pour les cartes ci-dessous. */}
        <h2 className="sr-only">Nos offres</h2>
        <p className="mx-auto max-w-xl text-center text-sm text-[var(--ink-muted)]">{site.offresIntro}</p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Axe A — santé réglementée, à part */}
          <Reveal className="chamfer flex flex-col border border-[var(--border-soft)] bg-[var(--surface-card)] p-7">
            <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
              {axeA.cible}
            </span>
            <h3 className="mt-2 text-xl text-[var(--ink)]">{axeA.titre}</h3>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">{axeA.description}</p>
            <ul className="mt-5 space-y-2.5">
              {axeA.inclus.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-[var(--ink-body)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <div className="border-t border-[var(--border-soft)] pt-4">
                <p className="[font-family:var(--font-utility)] text-xl font-bold text-[var(--ink)]">{axeA.prix}</p>
                <p className="mt-1 text-xs text-[var(--ink-muted)]">{axeA.recurrent}</p>
              </div>
              <MagneticButton
                href="/#contact"
                className="cta-glow mt-4 inline-block w-full rounded-sm border border-[var(--color-orange)] px-4 py-2 text-center text-sm font-medium text-[var(--color-orange-text)] hover:bg-[var(--color-orange)] hover:text-white"
              >
                Demander un devis
              </MagneticButton>
            </div>
          </Reveal>

          {/* Axe B — package unique commerces/beauté/BTP, mis en avant */}
          <Reveal
            delay={100}
            className="chamfer flex flex-col border-2 border-[var(--color-orange)] bg-[var(--surface-card)] p-7"
          >
            <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
              {axeB.cible}
            </span>
            <h3 className="mt-2 text-xl text-[var(--ink)]">{axeB.titre}</h3>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">{axeB.description}</p>
            <ul className="mt-5 space-y-2.5">
              {axeB.inclus.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-[var(--ink-body)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <div className="grid grid-cols-2 gap-4 border-t border-[var(--border-soft)] pt-4">
                <div>
                  <p className="[font-family:var(--font-utility)] text-xs uppercase tracking-wide text-[var(--ink-soft)]">
                    Commerces, beauté
                  </p>
                  <p className="[font-family:var(--font-utility)] text-lg font-bold text-[var(--ink)]">{axeB.prixCommerces}</p>
                </div>
                <div>
                  <p className="[font-family:var(--font-utility)] text-xs uppercase tracking-wide text-[var(--ink-soft)]">
                    Artisans du BTP
                  </p>
                  <p className="[font-family:var(--font-utility)] text-lg font-bold text-[var(--ink)]">{axeB.prixBtp}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-[var(--ink-muted)]">{axeB.recurrent}</p>
              <MagneticButton
                href="/#contact"
                className="cta-glow mt-4 inline-block w-full rounded-sm bg-[var(--color-orange-button)] px-4 py-2 text-center text-sm font-medium text-white hover:opacity-90"
              >
                Demander un devis
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Supports physiques inclus — image block, voir site.supportsPhysiques */}
        <Reveal
          delay={120}
          className="chamfer mx-auto mt-6 max-w-5xl border border-[var(--border-soft)] bg-[var(--surface-card)] p-7"
        >
          <h3 className="text-lg text-[var(--ink)]">{site.supportsPhysiques.titre}</h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--ink-muted)]">{site.supportsPhysiques.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.supportsPhysiques.items.map((item) => (
              <figure
                key={item.id}
                className="chamfer overflow-hidden border border-[var(--border-soft)] bg-[var(--surface)]"
              >
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

        {/* Suivi Premium — upsell au-delà du bilan gratuit à 60 jours */}
        <Reveal
          delay={150}
          className="chamfer mx-auto mt-6 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface)] px-6 py-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
        >
          <div>
            <span className="[font-family:var(--font-utility)] rounded-sm border border-[var(--border-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
              {suiviPremium.badge}
            </span>
            <h3 className="mt-2 text-lg text-[var(--ink)]">{suiviPremium.titre}</h3>
            <p className="mt-1 max-w-2xl text-sm text-[var(--ink-muted)]">{suiviPremium.description}</p>
          </div>
          <p className="mt-4 shrink-0 text-right sm:mt-0">
            <span className="[font-family:var(--font-utility)] text-lg font-bold text-[var(--ink)]">{suiviPremium.prix}</span>
            <span className="block text-xs text-[var(--ink-muted)]">{suiviPremium.prixDetail}</span>
          </p>
        </Reveal>

        <Reveal
          delay={200}
          className="chamfer mx-auto mt-6 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-8 text-center"
        >
          <h3 className="text-lg text-[var(--ink)]">{site.besoinSpecifique.titre}</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--ink-muted)]">{site.besoinSpecifique.description}</p>
          <MagneticButton
            href="/#contact"
            className="cta-glow mt-4 inline-block rounded-sm bg-[var(--color-orange-button)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            {site.besoinSpecifique.cta}
          </MagneticButton>
        </Reveal>
      </Reveal>
    </section>
  )
}
