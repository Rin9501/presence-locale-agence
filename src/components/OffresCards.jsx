import site from '../config/site'
import MagneticButton from './MagneticButton'
import Reveal from './Reveal'

export default function OffresCards() {
  return (
    <section id="offres" className="bg-concrete-texture px-6 py-16">
      <Reveal>
        <h2 className="text-center text-2xl text-[var(--ink)]">Nos offres</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[var(--ink-muted)]">
          {site.offresIntro}
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
          {site.offres.map((offre, index) => (
            <Reveal
              key={offre.niveau}
              delay={index * 100}
              className="chamfer flex flex-col border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="[font-family:var(--font-utility)] font-bold text-[var(--color-orange-text)]">
                  {String(offre.niveau).padStart(2, '0')}
                </span>
                <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
                  {offre.cible}
                </span>
              </div>
              <h3 className="mt-2 text-lg text-[var(--ink)]">{offre.titre}</h3>
              <p className="mt-2 flex-1 text-sm text-[var(--ink-muted)]">{offre.description}</p>
              <div className="mt-6 border-t border-[var(--border-soft)] pt-4">
                <p className="[font-family:var(--font-utility)] text-xl font-bold text-[var(--ink)]">{offre.prix}</p>
                {offre.recurrent && (
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">{offre.recurrent}</p>
                )}
                <MagneticButton
                  href="#contact"
                  className="cta-glow mt-4 inline-block w-full rounded-sm bg-[var(--color-orange-button)] px-4 py-2 text-center text-sm font-medium text-white hover:opacity-90"
                >
                  Demander un devis
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="chamfer mx-auto mt-6 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-8 text-center">
          <h3 className="text-lg text-[var(--ink)]">{site.besoinSpecifique.titre}</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--ink-muted)]">{site.besoinSpecifique.description}</p>
          <MagneticButton
            href="#contact"
            className="cta-glow mt-4 inline-block rounded-sm bg-[var(--color-orange-button)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            {site.besoinSpecifique.cta}
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  )
}
