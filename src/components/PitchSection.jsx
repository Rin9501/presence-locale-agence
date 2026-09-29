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
      </Reveal>
    </section>
  )
}
