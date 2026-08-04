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
        intro="Deux axes, pas trois catégories par secteur : la fiche Google seule pour les professions de santé réglementées, un package unique pour tout le reste."
      />
      <OffreAxes />
      <StackSection />
      <PageCta />
    </main>
  )
}
