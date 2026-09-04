import { useState } from 'react'
import site from '../config/site'
import Reveal from './Reveal'

// Section "Zone d'intervention" — homepage uniquement, voir site.zoneIntervention pour la
// méthode de construction de la liste. Reprend la structure de DeliveryZone.jsx
// (mirepoix-materiaux) : villes vedettes affichées d'emblée, liste complète dépliable pour ne
// pas noyer la page dans 50+ puces au premier écran.
export default function ZoneInterventionSection() {
  const [depliee, setDepliee] = useState(false)
  const { eyebrow, titre, intro, featured, closingNote, communes, radiusKm } = site.zoneIntervention
  const restantes = communes.filter((c) => !featured.includes(c.nom))

  return (
    <section id="zone" className="bg-concrete-texture px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
          {eyebrow}
        </span>
        <h2 className="mt-2 max-w-2xl text-2xl text-[var(--ink)] sm:text-3xl">{titre}</h2>
        <p className="mt-4 max-w-xl text-sm text-[var(--ink-muted)]">{intro}</p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {featured.map((ville) => (
            <span
              key={ville}
              className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-card)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
            >
              {ville}
            </span>
          ))}
        </div>

        {depliee && (
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {restantes.map((c) => (
              <span
                key={c.nom}
                className="rounded-full border border-dashed border-[var(--border-soft)] px-4 py-2 text-sm text-[var(--ink-muted)]"
              >
                {c.nom}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setDepliee((v) => !v)}
            className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)] underline decoration-[var(--border-soft)] underline-offset-4 hover:decoration-[var(--color-orange-text)]"
          >
            {depliee ? 'Voir moins de communes' : `Voir les ${restantes.length} autres communes à moins de ${radiusKm}km`}
          </button>
        </div>

        <p className="mt-6 max-w-xl text-sm text-[var(--ink-muted)]">{closingNote}</p>
      </Reveal>
    </section>
  )
}
