import Header from './components/Header'
import Hero from './components/Hero'
import PitchSection from './components/PitchSection'
import StackSection from './components/StackSection'
import OffresCards from './components/OffresCards'
import ProcessSection from './components/ProcessSection'
import RealisationsSection from './components/RealisationsSection'
import FaqSection from './components/FaqSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import ScrollProgressBar from './components/ScrollProgressBar'
import MentionsLegales from './components/MentionsLegales'

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
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <PitchSection />
        <StackSection />
        <OffresCards />
        <ProcessSection />
        <RealisationsSection />
        <FaqSection />
      </main>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
