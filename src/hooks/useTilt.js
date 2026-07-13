import { useEffect, useRef } from 'react'

// Inclinaison 3D légère qui suit le curseur (perspective CSS) — même logique de
// garde-fous que useMagnetic : désactivé au toucher et en prefers-reduced-motion.
export default function useTilt(maxDegrees = 6) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    function handleMove(event) {
      const rect = node.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      node.style.transform = `perspective(1000px) rotateX(${-py * maxDegrees}deg) rotateY(${px * maxDegrees}deg)`
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
  }, [maxDegrees])

  return ref
}
