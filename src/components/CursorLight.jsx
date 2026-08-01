import useCursorLight from '../hooks/useCursorLight'

// Curseur = source de lumière, en continu sur toute la page (monté une fois dans App.jsx,
// comme ScrollProgressBar). 2 couches fixes, transform/CSS vars uniquement, jamais
// au-dessus du contenu : le glow suit le curseur, la couche fissure translate légèrement
// à l'inverse (profondeur). Coût quasi nul, désactivé au toucher / reduced-motion (cf. hook).
export default function CursorLight() {
  useCursorLight()

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="cursor-light-glow absolute inset-0" />
      <img
        src="/la-dalle-crack-accent.svg"
        alt=""
        className="cursor-light-parallax absolute right-[8%] top-0 h-full w-auto max-w-none"
      />
    </div>
  )
}
