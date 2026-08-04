import useDocumentMeta from '../hooks/useDocumentMeta'
import FaqSection from './FaqSection'
import PageCta from './PageCta'
import PageIntro from './PageIntro'
import PitchSection from './PitchSection'
import ProcessSection from './ProcessSection'

export default function MethodeFaqPage() {
  useDocumentMeta(
    'Méthode et FAQ — La Dalle, artisans d\'Ariège',
    'Pourquoi La Dalle, comment se déroule un projet en 4 étapes, et réponses aux questions les plus fréquentes sur les tarifs, délais et la zone d\'intervention.',
    '/methode',
  )

  return (
    <main className="flex-1">
      <PageIntro
        kicker="Méthode"
        titre="Pourquoi La Dalle, et comment ça se passe."
        intro="Le raisonnement derrière chaque site, le déroulé concret d'un projet, et les questions qu'on nous pose le plus souvent."
      />
      <PitchSection />
      <ProcessSection />
      <FaqSection />
      <PageCta />
    </main>
  )
}
