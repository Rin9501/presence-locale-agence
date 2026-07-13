import site from '../config/site'
import MagneticButton from './MagneticButton'
import Reveal from './Reveal'

export default function OffresCards() {
  return (
    <section id="offres" className="bg-tile-texture px-6 py-16">
      <Reveal>
        <h2 className="text-center text-2xl font-semibold text-[var(--ink)]">Mes offres</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[var(--ink-muted)]">
          Prix de lancement, le temps de constituer les premières références.
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
          {site.offres.map((offre, index) => (
            <Reveal
              key={offre.niveau}
              delay={index * 100}
              className="flex flex-col rounded-lg border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="[font-family:var(--font-heading)] font-semibold text-[var(--color-orange-text)]">
                  {String(offre.niveau).padStart(2, '0')}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
                  {offre.cible}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{offre.titre}</h3>
              <p className="mt-2 flex-1 text-sm text-[var(--ink-muted)]">{offre.description}</p>
              <div className="mt-6 border-t border-[var(--border-soft)] pt-4">
                <p className="text-xl font-bold text-[var(--ink)]">{offre.prix}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-5xl rounded-lg border border-dashed border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-8 text-center">
          <h3 className="text-lg font-semibold text-[var(--ink)]">{site.besoinSpecifique.titre}</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--ink-muted)]">{site.besoinSpecifique.description}</p>
          <MagneticButton
            href="#contact"
            className="mt-4 inline-block rounded-md bg-[var(--color-orange-button)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            {site.besoinSpecifique.cta}
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  )
}
