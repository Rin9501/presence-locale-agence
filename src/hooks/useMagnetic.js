import { useEffect, useRef } from 'react'

// Effet "magnétique" : le bouton suit légèrement le curseur dans un rayon donné,
// puis revient à sa place. Désactivé sur tactile (pas de pointeur fin) et en
// prefers-reduced-motion — c'est une signature visuelle, pas un besoin fonctionnel.
export default function useMagnetic(strength = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    function handleMove(event) {
      const rect = node.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      node.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    function handleLeave() {
      node.style.transform = ''
    }

    node.addEventListener('pointermove', handleMove)
    node.addEventListener('pointerleave', handleLeave)
    return () => {
      node.removeEventListener('pointermove', handleMove)
      node.removeEventListener('pointerleave', handleLeave)
    }
  }, [strength])

  return ref
}
