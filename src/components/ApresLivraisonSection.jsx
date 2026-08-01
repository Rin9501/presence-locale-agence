import site from '../config/site'
import Reveal from './Reveal'

export default function ApresLivraisonSection() {
  const { apresLivraison } = site

  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-4xl">
        <p className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
          {apresLivraison.kicker}
        </p>
        <h2 className="mt-3 max-w-lg text-3xl text-[var(--ink)] sm:text-4xl">{apresLivraison.titre}</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {apresLivraison.etapes.map((etape) => (
            <div key={etape.titre} className="chamfer border border-[var(--border-soft)] bg-[var(--surface-card)] p-7">
              <p className="[font-family:var(--font-utility)] text-[11px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                {etape.repere}
              </p>
              <h3 className="mt-2.5 text-xl font-semibold text-[var(--ink)]">{etape.titre}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--ink-muted)]">{etape.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
