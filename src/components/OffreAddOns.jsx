import site from '../config/site'
import Reveal from './Reveal'

export default function OffreAddOns() {
  const { titre, intro, extensionMultipage, identiteVisuelle, autres, modalites } = site.offresAddOns

  return (
    <section className="bg-concrete-texture px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl text-[var(--ink)]">{titre}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--ink-muted)]">{intro}</p>

        {/* Extension multipage */}
        <Reveal
          delay={80}
          className="chamfer mx-auto mt-8 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-6 sm:flex sm:items-start sm:justify-between sm:gap-8"
        >
          <div>
            <span className="[font-family:var(--font-utility)] rounded-sm border border-[var(--border-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
              {extensionMultipage.badge}
            </span>
            <h3 className="mt-2 text-lg text-[var(--ink)]">{extensionMultipage.titre}</h3>
            <p className="mt-1 max-w-2xl text-sm text-[var(--ink-muted)]">{extensionMultipage.description}</p>
          </div>
          <p className="mt-4 shrink-0 text-right sm:mt-0">
            <span className="[font-family:var(--font-utility)] text-lg font-bold text-[var(--ink)]">{extensionMultipage.prix}</span>
            <span className="block text-xs text-[var(--ink-muted)]">{extensionMultipage.prixDetail}</span>
          </p>
        </Reveal>

        {/* Identité visuelle DA/logo */}
        <Reveal
          delay={120}
          className="chamfer mx-auto mt-6 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface-card)] px-6 py-6"
        >
          <span className="[font-family:var(--font-utility)] rounded-sm border border-[var(--border-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
            {identiteVisuelle.badge}
          </span>
          <h3 className="mt-2 text-lg text-[var(--ink)]">{identiteVisuelle.titre}</h3>
          <p className="mt-1 max-w-2xl text-sm text-[var(--ink-muted)]">{identiteVisuelle.description}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {identiteVisuelle.formules.map((formule) => (
              <div key={formule.nom} className="border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                <p className="text-sm font-medium text-[var(--ink)]">{formule.nom}</p>
                <p className="mt-1 text-xs text-[var(--ink-muted)]">{formule.description}</p>
                <p className="mt-3 [font-family:var(--font-utility)] text-lg font-bold text-[var(--ink)]">{formule.prix}</p>
                <p className="text-xs text-[var(--ink-muted)]">{formule.revisions}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--ink-muted)]">{identiteVisuelle.note}</p>
        </Reveal>

        {/* Autres add-ons courts */}
        <Reveal
          delay={160}
          className="chamfer mx-auto mt-6 max-w-5xl border border-[var(--border-soft)] bg-[var(--surface-card)] p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {autres.map((item) => (
              <div key={item.titre} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[var(--ink)]">{item.titre}</p>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">{item.description}</p>
                </div>
                <span className="[font-family:var(--font-utility)] shrink-0 text-sm font-bold text-[var(--ink)]">{item.prix}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Modalités */}
        <Reveal
          delay={200}
          className="chamfer mx-auto mt-6 max-w-5xl border border-dashed border-[var(--border-soft)] bg-[var(--surface)] px-6 py-6"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-soft)]">{modalites.titre}</h3>
          <ul className="mt-3 space-y-2">
            {modalites.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-[var(--ink-body)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Reveal>
    </section>
  )
}
