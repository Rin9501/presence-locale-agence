import useReveal from '../hooks/useReveal'

// Wrapper drop-in pour le conteneur interne d'une section — remplace le
// <div className="mx-auto ..."> existant, sans toucher au <section id="..."> parent.
// delay (ms) permet un effet cascade quand plusieurs Reveal voisins (ex. cartes d'une grille)
// entrent dans le viewport au même moment — chacun observe indépendamment son propre ref.
export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className} transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  )
}
