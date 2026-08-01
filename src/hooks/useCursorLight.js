import { useEffect } from 'react'

// Écrit --cursor-x/--cursor-y (en %) sur <html> au fil du pointermove, throttlé en rAF —
// un seul listener global pour toute la page. Consommé en CSS pur par .cursor-light-glow /
// .cursor-light-parallax (cf. CursorLight.jsx). Mêmes garde-fous que useTilt/useMagnetic :
// désactivé au toucher et en prefers-reduced-motion, ce n'est qu'une signature visuelle.
export default function useCursorLight() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    const root = document.documentElement
    let frameId = null
    let pending = null

    function applyPosition() {
      frameId = null
      if (!pending) return
      root.style.setProperty('--cursor-x', `${pending.x}%`)
      root.style.setProperty('--cursor-y', `${pending.y}%`)
    }

    function handleMove(event) {
      pending = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      }
      if (frameId === null) {
        frameId = requestAnimationFrame(applyPosition)
      }
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (frameId !== null) cancelAnimationFrame(frameId)
      root.style.removeProperty('--cursor-x')
      root.style.removeProperty('--cursor-y')
    }
  }, [])
}
