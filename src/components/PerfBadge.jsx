import { useEffect, useState } from 'react'

// Mesure réelle (Navigation Timing API) du temps de chargement de cette page précise —
// pas un chiffre marketing figé dans le code. PerformanceObserver avec buffered:true
// récupère l'entrée même si l'événement 'load' s'est déjà produit avant ce useEffect
// (cas courant : StrictMode double-invoke, ou montage tardif du composant).
export default function PerfBadge() {
  const [seconds, setSeconds] = useState(null)

  useEffect(() => {
    function report(entry) {
      if (entry.loadEventEnd > 0) setSeconds(entry.loadEventEnd / 1000)
    }

    const observer = new PerformanceObserver((list) => {
      const [entry] = list.getEntriesByType('navigation')
      if (entry) report(entry)
    })
    observer.observe({ type: 'navigation', buffered: true })

    return () => observer.disconnect()
  }, [])

  if (seconds === null) return null

  return (
    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy)]/10 bg-white px-4 py-2 text-sm text-[var(--color-navy)]">
      <span aria-hidden="true">⚡</span>
      Cette page vient de se charger en <strong className="font-semibold">{seconds.toFixed(2)}&nbsp;s</strong>
      <span className="text-xs text-[var(--color-grey-text)]">— mesuré par votre navigateur, à l'instant</span>
    </p>
  )
}
