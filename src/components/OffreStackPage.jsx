import pageMeta from '../config/pageMeta'
import useDocumentMeta from '../hooks/useDocumentMeta'
import OffreAxes from './OffreAxes'
import PageCta from './PageCta'
import PageIntro from './PageIntro'
import StackSection from './StackSection'

export default function OffreStackPage() {
  useDocumentMeta(pageMeta['/offres'].title, pageMeta['/offres'].description, '/offres')

  return (
    <main className="flex-1">
      <PageIntro
        kicker="Offre"
        titre="Ce que vous obtenez, et ce que ça coûte."
        intro="Une seule offre pour les artisans du bâtiment : ce qu’elle comprend, ce qu’elle coûte, et ce qu’on fait si votre fiche ne progresse pas."
      />
      <OffreAxes />
      <StackSection />
      <PageCta />
    </main>
  )
}
