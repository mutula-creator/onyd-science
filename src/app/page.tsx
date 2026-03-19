import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Clients from './components/Clients'
import VisionMission from './components/VisionMission'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Clients />
      <VisionMission />
      <Contact />
      <Footer />
    </main>
  )
}