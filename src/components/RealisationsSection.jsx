import site from '../config/site'
import useTilt from '../hooks/useTilt'
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

function PreuveCard({ item }) {
  const { jpg, webp } = resolveScreenshot(item.image)
  const tiltRef = useTilt(4)

  return (
    <a
      ref={tiltRef}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="chamfer flex flex-col overflow-hidden border border-white/10 bg-white/5 transition duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:border-white/20"
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
        <div className="stripe-diag-dark flex aspect-[4/3] w-full items-center justify-center text-sm font-medium text-white/50">
          Capture à venir
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {item.badge && (
          <span className="[font-family:var(--font-utility)] text-[10px] font-semibold uppercase tracking-wide text-white/45">
            {item.badge}
          </span>
        )}
        <h3 className="mt-1.5 text-lg text-white">{item.title}</h3>
        <p className="mt-1.5 flex-1 text-sm text-white/60">{item.description}</p>
        {item.stat && (
          <p className="mt-4 border-t border-white/15 pt-3 text-[15px] font-extrabold text-[var(--color-orange)]">
            {item.stat}
          </p>
        )}
        <span className="mt-3 block text-sm font-medium text-[var(--color-orange)]">
          Voir le site en ligne →
        </span>
      </div>
    </a>
  )
}

export default function RealisationsSection() {
  const { realisations, preuveSociale } = site

  return (
    <section id="realisations" className="bg-[var(--color-navy)] px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <p className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange)]">
          {preuveSociale.kicker}
        </p>
        <h2 className="mt-3 max-w-lg text-3xl text-white sm:text-4xl">{preuveSociale.titre}</h2>

        {realisations.length === 0 ? (
          <div className="chamfer mx-auto mt-10 max-w-xl border border-dashed border-white/20 px-6 py-10 text-center">
            <p className="font-medium text-white">Projets en cours de livraison</p>
            <p className="mt-2 text-sm text-white/60">
              Les premières réalisations clients seront visibles ici dès qu'elles seront livrées.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                {item.type === 'before-after' ? (
                  <GalerieSlider before={item.before} after={item.after} title={item.title} />
                ) : (
                  <PreuveCard item={item} />
                )}
              </Reveal>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}
