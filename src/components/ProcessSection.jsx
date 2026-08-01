import site from '../config/site'
import Reveal from './Reveal'

export default function ProcessSection() {
  const { process } = site

  return (
    <section id="process" className="px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl text-[var(--ink)]">{process.title}</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <Reveal
              key={step.titre}
              delay={index * 100}
              className="chamfer grout-glow relative border border-[var(--border-soft)] bg-[var(--surface-card)] p-6"
            >
              <span className="[font-family:var(--font-utility)] text-2xl font-bold text-[var(--color-orange-text)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-[var(--ink)]">{step.titre}</h3>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
