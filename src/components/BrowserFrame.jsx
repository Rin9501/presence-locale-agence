import useTilt from '../hooks/useTilt'

// Servi depuis public/ (chemin statique, non hashé) pour que le <link rel="preload">
// de index.html cible le même fichier — nécessaire pour que ce soit détectable dès le HTML,
// vu que l'app est en CSR pur (cf. leçon LCP du skill).
const screenshot = '/mockup-clo.webp'

// Mockup façon fenêtre de navigateur — encadre la capture d'un site déjà livré
// pour donner un ancrage visuel concret au hero (plutôt qu'un hero 100% texte).
// Chrome du mockup volontairement non thémé (blanc/crème) : il représente une vraie
// capture de site externe, indépendante du thème clair/sombre de l'agence.
export default function BrowserFrame({ url, imageAlt }) {
  const tiltRef = useTilt()

  return (
    <div
      ref={tiltRef}
      className="overflow-hidden rounded-xl border border-[var(--color-navy)]/10 bg-white shadow-lg shadow-[var(--color-navy)]/10 transition-transform duration-200 ease-out will-change-transform"
    >
      <div className="flex items-center gap-3 border-b border-[var(--color-navy)]/10 bg-[var(--color-cream)] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-navy)]/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-navy)]/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-navy)]/15" />
        </div>
        <div className="flex-1 truncate rounded bg-white px-3 py-1 text-center text-xs text-[var(--color-grey-text)]">
          {url}
        </div>
      </div>
      <img
        src={screenshot}
        alt={imageAlt}
        width={700}
        height={525}
        fetchPriority="high"
        className="aspect-[4/3] w-full object-cover object-top"
      />
    </div>
  )
}
