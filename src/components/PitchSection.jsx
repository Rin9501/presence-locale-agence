import site from '../config/site'
import Reveal from './Reveal'

export default function PitchSection() {
  const { pitch } = site

  return (
    <section className="bg-[var(--surface-card)] px-6 py-16">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-[var(--ink)]">{pitch.title}</h2>
        {pitch.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 20)} className="mt-4 text-[var(--ink-body)]">
            {paragraph}
          </p>
        ))}

        <h3 className="mt-10 text-lg font-semibold text-[var(--ink)]">
          {pitch.whyNotWordpress.title}
        </h3>
        <ul className="mt-4 space-y-2">
          {pitch.whyNotWordpress.points.map((point) => (
            <li key={point} className="flex gap-3 text-[var(--ink-body)]">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange)]" />
              {point}
            </li>
          ))}
        </ul>

        <div className="chamfer mt-10 border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold text-[var(--ink)]">{pitch.beyondTheSite.title}</h3>
          <p className="mt-2 text-[var(--ink-body)]">{pitch.beyondTheSite.description}</p>
        </div>
      </Reveal>
    </section>
  )
}
