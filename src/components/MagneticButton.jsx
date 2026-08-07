import useMagnetic from '../hooks/useMagnetic'
import useRipple from '../hooks/useRipple'

// CTA avec effet magnétique (suit le curseur, cf. useMagnetic) — réservé aux
// appels à l'action principaux pour rester une signature, pas un tic généralisé.
// Ripple "impact carrelage" au clic (useRipple) — relative/overflow-hidden nécessaires au clip.
export default function MagneticButton({ href, className = '', children, ...rest }) {
  const ref = useMagnetic()
  const handleRipple = useRipple()

  return (
    <a
      ref={ref}
      href={href}
      onPointerDown={handleRipple}
      className={`relative overflow-hidden transition duration-200 ease-out will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
