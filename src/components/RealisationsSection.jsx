import site from '../config/site'
import GalerieSlider from './GalerieSlider'
import Reveal from './Reveal'

// Résout les images déposées dans src/assets/realisations/ — ne casse pas le build si le fichier n'est pas encore livré
const screenshots = import.meta.glob('../assets/realisations/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

function resolveScreenshot(relativePath) {
  if (!relativePath) return { jpg: null, webp: null }
  const base = relativePath.replace(/\.[^.]+$/, '')
  return {
    jpg: screenshots[`../assets/realisations/${relativePath}`] ?? null,
    webp: screenshots[`../assets/realisations/${base}.webp`] ?? null,
  }
}

function SiteRealisationCard({ item }) {
  const { jpg, webp } = resolveScreenshot(item.image)

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="chamfer flex flex-col overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-card)] transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {jpg ? (
        <picture>
          {webp && <source srcSet={webp} type="image/webp" />}
          <img
            src={jpg}
            alt={`Capture d'écran du site ${item.title}`}
            width={700}
            height={525}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-top"
          />
        </picture>
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center border-b border-dashed border-[var(--border-soft)] bg-[var(--surface)] text-sm font-medium text-[var(--ink-soft)]">
          Capture à venir
        </div>
      )}
      <div className="p-4">
        {item.badge && (
          <span className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange-text)]">
            {item.badge}
          </span>
        )}
        <h3 className="mt-1 text-lg text-[var(--ink)]">{item.title}</h3>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">{item.description}</p>
        {item.stat && (
          <p className="chamfer mt-3 inline-block border border-[var(--border-soft)] bg-[var(--surface)] px-2.5 py-1 [font-family:var(--font-utility)] text-xs font-semibold text-[var(--ink)]">
            {item.stat}
          </p>
        )}
        <span className="mt-3 block text-sm font-medium text-[var(--color-orange-text)]">
          Voir le site en ligne →
        </span>
      </div>
    </a>
  )
}

export default function RealisationsSection() {
  const { realisations } = site

  return (
    <section id="realisations" className="bg-[var(--surface-card)] px-6 py-16">
      <Reveal>
        <h2 className="text-center text-2xl text-[var(--ink)]">Réalisations</h2>

        {realisations.length === 0 ? (
          <div className="chamfer mx-auto mt-10 max-w-xl border border-dashed border-[var(--border-soft)] bg-[var(--surface)] px-6 py-10 text-center">
            <p className="font-medium text-[var(--ink)]">Projets en cours de livraison</p>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              Les premières réalisations clients seront visibles ici dès qu'elles seront livrées.
            </p>
          </div>
        ) : (
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2">
            {realisations.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                {item.type === 'before-after' ? (
                  <GalerieSlider before={item.before} after={item.after} title={item.title} />
                ) : (
                  <SiteRealisationCard item={item} />
                )}
              </Reveal>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}
