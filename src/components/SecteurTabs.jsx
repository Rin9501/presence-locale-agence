import { useEffect, useState } from 'react'
import site from '../config/site'
import Reveal from './Reveal'

const SECTEURS = ['commerces', 'btp', 'sante']

// Prix lus directement depuis site.offres — jamais dupliqués dans site.fichesProduits,
// pour garder une seule source de vérité sur les montants (voir commentaire dans site.js).
const PRIX = {
  commerces: { montant: site.offres.axeB.prixCommerces, recurrent: site.offres.axeB.recurrent },
  btp: { montant: site.offres.axeB.prixBtp, recurrent: site.offres.axeB.recurrent },
  sante: { montant: site.offres.axeA.prix, recurrent: site.offres.axeA.recurrent },
}

function secteurFromSearch() {
  const params = new URLSearchParams(window.location.search)
  const value = params.get('secteur')
  return SECTEURS.includes(value) ? value : 'commerces'
}

// Onglet par secteur, pas de lib de routing (cf. App.jsx) : l'état vit dans ?secteur=,
// lu au montage puis réécrit via replaceState au clic — jamais pushState, pour ne pas
// polluer le bouton retour avec un simple changement d'onglet sur la même page. Ceci permet
// à Mehdi d'envoyer un lien direct vers le bon secteur pour un prospect donné
// (/fiches-produits?secteur=btp).
export default function SecteurTabs() {
  const [actif, setActif] = useState(secteurFromSearch)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('secteur', actif)
    window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`)
  }, [actif])

  const secteur = site.fichesProduits.secteurs[actif]
  const prix = PRIX[actif]

  return (
    <section className="bg-concrete-texture px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <div
          role="tablist"
          aria-label="Choisir votre secteur"
          className="inline-flex flex-wrap gap-1 rounded-full border border-[var(--border-soft)] bg-[var(--surface-card)] p-1"
        >
          {SECTEURS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={actif === key}
              onClick={() => setActif(key)}
              className={`[font-family:var(--font-utility)] rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                actif === key ? 'bg-[var(--color-orange)] text-white' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
              }`}
            >
              {site.fichesProduits.secteurs[key].label}
            </button>
          ))}
        </div>

        <div className="chamfer mt-8 border border-[var(--border-soft)] bg-[var(--surface-card)] p-7">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--border-soft)] pb-6">
            <p className="max-w-sm text-sm text-[var(--ink-muted)]">
              Pour <span className="font-semibold text-[var(--ink)]">{secteur.cible}</span>
            </p>
            <div className="text-right">
              <p className="[font-family:var(--font-utility)] text-3xl font-bold text-[var(--ink)]">{prix.montant}</p>
              <p className="mt-1 text-xs text-[var(--color-orange-text)]">{prix.recurrent}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="[font-family:var(--font-utility)] text-[11px] uppercase tracking-wide text-[var(--color-orange-text)]">
                Inclus
              </p>
              <ul className="mt-3 space-y-2.5">
                {secteur.inclus.map((point) => (
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
                {secteur.exclus.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-[var(--ink-muted)]">
                    <span className="mt-1.5 shrink-0 text-[var(--ink-soft)]">–</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
