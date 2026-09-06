'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeHero />
      <Footer />
    </div>
  )
}
