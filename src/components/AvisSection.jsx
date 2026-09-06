import site from '../config/site'
import Reveal from './Reveal'

// Avis réels de la fiche Google Business Profile de La Dalle Agence Web — repris
// tels quels (captures fournies par Mehdi le 06/09/2026), pas de texte inventé.
// Voir avis-google.ts sur chape-liquide-occitanie pour le même principe.
const avis = [
  {
    nom: 'Finnian Carroll',
    note: 5,
    texte: 'Mehdi m’a fait un super boulot pour le site internet et la fiche Google. Il a été très agréable et efficace, je recommande à 100%',
  },
  {
    nom: 'Idriss Levillain',
    note: 5,
    texte: 'Création d’un joli site, je recommande !',
  },
  {
    nom: 'Victoria Hanya',
    note: 5,
    texte: 'J’ai fait appel à La Dalle Agence pour mon site internet et c’était parfait ! Je recommande',
  },
]

function Star({ filled }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? 'var(--color-orange)' : 'none'} stroke={filled ? 'none' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5">
      <path d="M12 2.5l2.97 6.02 6.64.97-4.8 4.68 1.13 6.61L12 17.77l-5.94 3.01 1.13-6.61-4.8-4.68 6.64-.97L12 2.5z" />
    </svg>
  )
}

function AvisCard({ item }) {
  return (
    <div className="chamfer flex flex-col justify-between border border-white/10 bg-white/5 p-6">
      <div>
        <div
          className="flex gap-[3px]"
          role="img"
          aria-label={`Note : ${item.note} sur 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < item.note} />
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-white/75">&ldquo;{item.texte}&rdquo;</p>
      </div>
      <p className="mt-5 text-sm font-semibold text-white">{item.nom}</p>
    </div>
  )
}

export default function AvisSection() {
  const { business } = site

  return (
    <section id="avis" className="bg-[var(--color-navy)] px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <p className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange)]">
          Avis clients
        </p>
        <h2 className="mt-3 max-w-lg text-3xl text-white sm:text-4xl">Ce qu&rsquo;en disent nos clients.</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {avis.map((item, index) => (
            <Reveal key={item.nom} delay={index * 100}>
              <AvisCard item={item} />
            </Reveal>
          ))}
        </div>

        <a
          href={business.gmbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-orange)]"
        >
          Voir tous nos avis sur Google →
        </a>
      </Reveal>
    </section>
  )
}
