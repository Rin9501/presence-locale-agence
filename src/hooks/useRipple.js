import { useCallback, useRef } from 'react'

// Ripple "impact carrelage" au clic — injecte un span animé (.ripple-impact, cf. index.css)
// directement dans l'élément cliqué via event.currentTarget, donc pas de ref dédiée : se
// compose sans conflit avec un autre hook de ref déjà posé sur le même nœud (ex. useMagnetic).
// Manipulation DOM directe plutôt qu'un state React — effet fire-and-forget, pas de re-render.
export default function useRipple() {
  const reduceMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  return useCallback((event) => {
    if (reduceMotion.current) return

    const node = event.currentTarget
    const rect = node.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)

    const span = document.createElement('span')
    span.className = 'ripple-impact pointer-events-none absolute rounded-full'
    span.style.width = `${size}px`
    span.style.height = `${size}px`
    span.style.left = `${event.clientX - rect.left - size / 2}px`
    span.style.top = `${event.clientY - rect.top - size / 2}px`
    span.style.background = 'var(--color-lueur)'

    node.appendChild(span)
    span.addEventListener('animationend', () => span.remove(), { once: true })
  }, [])
}
