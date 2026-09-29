import site from '../config/site'

// Garantie + exclusivité de l'offre unique (29/09/2026), partagées par /offres et /fiches-produits.
// Formulations de Mehdi reprises mot pour mot, au tutoiement : affichées comme une citation signée,
// le reste du site restant en "nous/vous".
export default function OffreEngagements() {
  const { garantie, exclusivite, signature } = site.offre

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[garantie, exclusivite].map((engagement) => (
        <figure key={engagement.titre} className="chamfer border-l-2 border-[var(--color-orange)] bg-[var(--surface-card)] p-6">
          <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
            {engagement.titre}
          </span>
          <blockquote className="mt-2 text-[15px] leading-relaxed text-[var(--ink-body)]">« {engagement.citation} »</blockquote>
          <figcaption className="mt-3 text-sm font-medium text-[var(--ink)]">— {signature}</figcaption>
        </figure>
      ))}
    </div>
  )
}
