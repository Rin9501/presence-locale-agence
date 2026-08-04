import pageMeta from '../config/pageMeta'
import useDocumentMeta from '../hooks/useDocumentMeta'
import FaqSection from './FaqSection'
import PageCta from './PageCta'
import PageIntro from './PageIntro'
import PitchSection from './PitchSection'
import ProcessSection from './ProcessSection'

export default function MethodeFaqPage() {
  useDocumentMeta(pageMeta['/methode'].title, pageMeta['/methode'].description, '/methode')

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
