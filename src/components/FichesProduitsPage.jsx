import pageMeta from '../config/pageMeta'
import site from '../config/site'
import useDocumentMeta from '../hooks/useDocumentMeta'
import OffreAddOns from './OffreAddOns'
import PageCta from './PageCta'
import PageIntro from './PageIntro'
import Reveal from './Reveal'
import SecteurTabs from './SecteurTabs'

// Lien direct que Mehdi envoie lui-même en RDV/SMS (04/09/2026) — volontairement absent du
// menu et non lié depuis /offres, voir pageMeta['/fiches-produits'].robots. Reprend le
// contenu de l'Artifact "La Dalle — Offres & Tarifs" (03/09/2026), avec le vrai Header/Footer
// du site plutôt qu'un chrome autonome.
export default function FichesProduitsPage() {
  const meta = pageMeta['/fiches-produits']
  useDocumentMeta(meta.title, meta.description, '/fiches-produits', meta.robots)

  const bilan = site.apresLivraison.etapes[0]

  return (
    <main className="flex-1">
      <PageIntro kicker={site.fichesProduits.kicker} titre={site.fichesProduits.titre} intro={site.fichesProduits.intro} />
      <SecteurTabs />

      <section className="bg-concrete-texture px-6 pb-16">
        <Reveal className="mx-auto max-w-5xl">
          <div className="chamfer border-l-2 border-[var(--color-orange)] bg-[var(--surface-card)] p-6">
            <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
              Inclus pour tous
            </span>
            <p className="mt-2 text-sm text-[var(--ink-body)]">{bilan.description}</p>
          </div>

          <div className="mt-6 grid gap-px overflow-hidden border border-[var(--border-soft)] bg-[var(--border-soft)] sm:grid-cols-4">
            {site.fichesProduits.facts.map((fact) => (
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

      <OffreAddOns />
      <PageCta />
    </main>
  )
}
