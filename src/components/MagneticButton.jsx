import useMagnetic from '../hooks/useMagnetic'

// CTA avec effet magnétique (suit le curseur, cf. useMagnetic) — réservé aux
// appels à l'action principaux pour rester une signature, pas un tic généralisé.
export default function MagneticButton({ href, className = '', children }) {
  const ref = useMagnetic()

  return (
    <a
      ref={ref}
      href={href}
      className={`transition duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </a>
  )
}
