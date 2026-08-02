import ApresLivraisonSection from './components/ApresLivraisonSection'
import ContactForm from './components/ContactForm'
import CookieConsent from './components/CookieConsent'
import CursorLight from './components/CursorLight'
import FondateurSection from './components/FondateurSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import MentionsLegales from './components/MentionsLegales'
import MethodeFaqPage from './components/MethodeFaqPage'
import OffreStackPage from './components/OffreStackPage'
import RealisationsSection from './components/RealisationsSection'
import ScrollProgressBar from './components/ScrollProgressBar'

// Peu de pages (accueil + 3 pages de contenu) : un simple test du pathname suffit, pas besoin
// de react-router. Nécessite le fallback SPA dans netlify.toml (déjà en place) pour l'URL
// directe en prod. Chaque page utilitaire/contenu partage Header + Footer avec la homepage.
const PAGES = {
  '/mentions-legales': MentionsLegales,
  '/offres': OffreStackPage,
  '/methode': MethodeFaqPage,
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const Page = PAGES[pathname]

  if (Page) {
    return (
      <div className="flex min-h-screen flex-col">
        <LocalBusinessSchema />
        <Header />
        <Page />
        <Footer />
        <CookieConsent />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <LocalBusinessSchema />
      <CursorLight />
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <RealisationsSection />
        <ApresLivraisonSection />
        <FondateurSection />
      </main>
      <ContactForm />
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
