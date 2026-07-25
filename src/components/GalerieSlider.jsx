import { useId, useState } from 'react'

// Composant isolé, réutilisable tel quel dans template/ pour les clients BTP (galerie chantiers avant/après)
export default function GalerieSlider({ before, after, altBefore = 'Avant', altAfter = 'Après', title }) {
  const [position, setPosition] = useState(50)
  const sliderId = useId()

  return (
    <figure className="overflow-hidden rounded-lg border border-[var(--color-navy)]/10 bg-white">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden">
        <img
          src={after}
          alt={altAfter}
          width={800}
          height={600}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={before}
          alt={altBefore}
          width={800}
          height={600}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
          style={{ left: `${position}%` }}
        />
        <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-[var(--color-navy)]/80 px-2 py-0.5 text-xs font-medium text-white">
          {altBefore}
        </span>
        <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-[var(--color-orange-button)] px-2 py-0.5 text-xs font-medium text-white">
          {altAfter}
        </span>

        <label htmlFor={sliderId} className="sr-only">
          Curseur de comparaison avant / après{title ? ` — ${title}` : ''}
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      {title && (
        <figcaption className="p-3 text-sm text-neutral-600">{title}</figcaption>
      )}
    </figure>
  )
}
