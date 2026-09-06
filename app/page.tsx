'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import GuidesSection from '../components/GuidesSection'
import AllServices from '../components/AllServices'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import AccessibilityFab from '../components/AccessibilityFab'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>

      <Header />
      <AccessibilityFab />
      <HomeHero />
      <AboutSection />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">תחומי התמחות</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנו מתמחים במגוון רחב של שירותים משפטיים בתחום הנדל"ן והמשפט האזרחי
            </p>
          </div>
          <div className="mb-16 text-center">
            <AllServices />
          </div>
        </div>
      </section>

      <GuidesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
