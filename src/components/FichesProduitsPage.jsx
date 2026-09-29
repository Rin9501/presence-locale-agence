import pageMeta from '../config/pageMeta'
import site from '../config/site'
import useDocumentMeta from '../hooks/useDocumentMeta'
import OffreEngagements from './OffreEngagements'
import PageCta from './PageCta'
import PageIntro from './PageIntro'
import Reveal from './Reveal'

// Lien direct que Mehdi envoie lui-même en RDV/SMS (04/09/2026) — volontairement absent du
// menu et non lié depuis /offres, voir pageMeta['/fiches-produits'].robots. Depuis l'offre
// unique (29/09/2026), une seule fiche au lieu des onglets par secteur : les anciens liens
// /fiches-produits?secteur=… restent valides et ouvrent cette même fiche.
export default function FichesProduitsPage() {
  const meta = pageMeta['/fiches-produits']
  useDocumentMeta(meta.title, meta.description, '/fiches-produits', meta.robots)

  const { offre, fichesProduits } = site

  return (
    <main className="flex-1">
      <PageIntro kicker={fichesProduits.kicker} titre={fichesProduits.titre} intro={fichesProduits.intro} />

      <section className="bg-concrete-texture px-6 py-16">
        <Reveal className="mx-auto max-w-5xl">
          <div className="chamfer border border-[var(--border-soft)] bg-[var(--surface-card)] p-7">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--border-soft)] pb-6">
              <p className="max-w-sm text-sm text-[var(--ink-muted)]">
                Pour <span className="font-semibold text-[var(--ink)]">{offre.cible}</span>
              </p>
              <div className="text-right">
                <p className="[font-family:var(--font-utility)] text-3xl font-bold text-[var(--ink)]">{offre.prix}</p>
                <p className="mt-1 text-xs text-[var(--ink-body)]">{offre.prixDetail}</p>
                <p className="mt-1 text-xs text-[var(--color-orange-text)]">{offre.renouvellement}</p>
                <p className="mt-1 text-xs text-[var(--ink-muted)]">{offre.tva}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="[font-family:var(--font-utility)] text-[11px] uppercase tracking-wide text-[var(--color-orange-text)]">
                  Inclus
                </p>
                <ul className="mt-3 space-y-2.5">
                  {offre.inclus.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-[var(--ink-body)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="[font-family:var(--font-utility)] text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">
                  Non inclus
                </p>
                <ul className="mt-3 space-y-2.5">
                  {fichesProduits.exclus.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-[var(--ink-muted)]">
                      <span className="mt-1.5 shrink-0 text-[var(--ink-soft)]">–</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <OffreEngagements />
          </div>

          <div className="mt-6 grid gap-px overflow-hidden border border-[var(--border-soft)] bg-[var(--border-soft)] sm:grid-cols-4">
            {fichesProduits.facts.map((fact) => (
              <div key={fact.label} className="bg-[var(--surface-card)] p-5">
                <p className="[font-family:var(--font-utility)] text-[10px] uppercase tracking-wide text-[var(--color-orange-text)]">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm text-[var(--ink-body)]">{fact.valeur}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <PageCta />
    </main>
  )
}
