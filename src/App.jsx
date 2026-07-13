import Header from './components/Header'
import Hero from './components/Hero'
import PitchSection from './components/PitchSection'
import StackSection from './components/StackSection'
import OffresCards from './components/OffresCards'
import RealisationsSection from './components/RealisationsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import LocalBusinessSchema from './components/LocalBusinessSchema'
import ScrollProgressBar from './components/ScrollProgressBar'

function App() {
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
        <RealisationsSection />
      </main>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
