import site from '../config/site'
import Reveal from './Reveal'

export default function FondateurSection() {
  const { fondateur } = site

  return (
    <section id="fondateur" className="bg-[var(--color-navy)] px-6 py-16 text-white">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:flex-row sm:items-center">
        <div className="chamfer flex h-44 w-44 shrink-0 items-center justify-center border border-dashed border-white/20 bg-white/5 text-center">
          <span className="[font-family:var(--font-utility)] px-4 text-[11px] uppercase tracking-wide text-white/45">
            Photo à venir
          </span>
        </div>
        <div>
          <p className="[font-family:var(--font-utility)] text-xs font-semibold uppercase tracking-wide text-[var(--color-orange)]">
            {fondateur.kicker}
          </p>
          <h2 className="mt-3 text-2xl text-white sm:text-3xl">{fondateur.titre}</h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">{fondateur.description}</p>
        </div>
      </Reveal>
    </section>
  )
}
