import ApresLivraisonSection from './components/ApresLivraisonSection'
import ContactForm from './components/ContactForm'
import CursorLight from './components/CursorLight'
import FondateurSection from './components/FondateurSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import MentionsLegales from './components/MentionsLegales'
import RealisationsSection from './components/RealisationsSection'
import ScrollProgressBar from './components/ScrollProgressBar'

// Site à une seule vraie page (contenu marketing en ancres sur "/") + une page utilitaire
// "/mentions-legales" — pas besoin de react-router, un simple test du pathname suffit.
// Nécessite le fallback SPA dans netlify.toml (déjà en place) pour l'URL directe en prod.
function App() {
  const isMentionsLegales = window.location.pathname.replace(/\/$/, '') === '/mentions-legales'

  if (isMentionsLegales) {
    return (
      <div className="flex min-h-screen flex-col">
        <LocalBusinessSchema />
        <Header />
        <MentionsLegales />
        <Footer />
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
    </div>
  )
}

export default App
