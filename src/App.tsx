import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import ExhibitsGallery from './components/ExhibitsGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <ExhibitsGallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
