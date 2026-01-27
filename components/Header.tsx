'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaWheelchair, FaPhone, FaWhatsapp, FaChevronDown } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesLinks = [
    { name: 'נדל"ן ומקרקעין', href: '/services/real-estate' },
    { name: 'ליקויי בנייה', href: '/services/construction-defects' },
    { name: 'דיני משפחה וירושה', href: '/services/family-law' },
    { name: 'משפט אזרחי ומסחרי', href: '/services/civil-commercial' },
    { name: 'משפט פלילי', href: '/services/criminal-law' },
    { name: 'דיני עבודה', href: '/services/labor-law' },
    { name: 'נזיקין וביטוח', href: '/services/torts' },
    { name: 'משפט מנהלי וארנונה', href: '/services/administrative-law' },
    { name: 'קניין רוחני וטכנולוגיה', href: '/services/ip-tech' },
    { name: 'הגירה ומשרד הפנים', href: '/services/immigration' },
    { name: 'נוטריון', href: '/services/notary' },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section - Right (z-10 to stay clickable) */}
          <Link href="/" className="flex items-center gap-3 group z-10 relative">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="לוגו משרד עו''ד מריאטה פנחסי"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold leading-none group-hover:text-amber-500 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                מריאטה פנחסי
              </span>
              <span className={`text-sm font-medium tracking-wide ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                משרד עורכי דין ונוטריון
              </span>
            </div>
          </Link>

          {/* Center Navigation - Absolute Position for Perfect Center */}
          <div className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-fit pointer-events-none">
            <div className={`pointer-events-auto flex items-center gap-8 px-8 py-2 rounded-full transition-all duration-300 border ${isScrolled
              ? 'bg-white/50 backdrop-blur-sm shadow-sm border-gray-100/50'
              : 'bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/20'
              }`}>
              <Link href="/" className={`font-bold transition-colors py-2 flex items-center ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
                דף הבית
              </Link>

              <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <button className={`flex items-center gap-1 font-bold transition-colors py-2 focus:outline-none ${isScrolled ? 'text-gray-700 group-hover:text-amber-600' : 'text-white group-hover:text-amber-400'}`}>
                  תחומי עיסוק
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu - Centered relative to the button */}
                <div className={`absolute top-full right-1/2 translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 text-center transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blog" className={`font-bold transition-colors py-2 flex items-center ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
                בלוג ומאמרים
              </Link>

              <Link href="/areas/or-yehuda" className={`font-bold transition-colors py-2 flex items-center ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
                אזורי שירות
              </Link>
            </div>
          </div>

          {/* Left Section: Contact & Accessibility (z-10 to stay clickable) */}
          <div className="hidden lg:flex items-center gap-4 z-10 relative">
            <Link
              href="tel:054-4450244"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${isScrolled
                ? 'bg-slate-900 text-white hover:bg-amber-500'
                : 'bg-amber-500 text-white hover:bg-amber-600 border border-amber-400/30'
                }`}
            >
              <FaPhone className="text-sm" />
              <span>054-4450244</span>
            </Link>

            <Link
              href="/accessibility"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isScrolled
                ? 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-600'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              aria-label="הצהרת נגישות"
              title="הצהרת נגישות"
            >
              <FaWheelchair className="text-lg" />
            </Link>
          </div>

          {/* Mobile Menu Button - Color Logic */}
          <div className="lg:hidden flex items-center gap-4 z-10">
            <a href="tel:054-4450244" className={`w-10 h-10 flex items-center justify-center rounded-full ${isScrolled ? 'bg-slate-900 text-white' : 'bg-amber-500 text-white'}`}>
              <FaPhone />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label="תפריט"
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-24 pb-10 px-6 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-amber-600 border-b border-gray-100 pb-4">
            דף הבית
          </Link>

          <div className="space-y-3 pb-4 border-b border-gray-100">
            <span className="text-gray-400 text-sm font-bold block mb-2">תחומי עיסוק</span>
            {servicesLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-amber-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-amber-600 border-b border-gray-100 pb-4">
            בלוג ומאמרים
          </Link>

          <Link href="/areas/or-yehuda" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-800 hover:text-amber-600">
            אזורי שירות
          </Link>

          <div className="pt-6 flex flex-col gap-4">
            <a
              href="tel:054-4450244"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold"
            >
              <FaPhone />
              חייגו עכשיו
            </a>
            <a
              href="https://wa.me/972544450244"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold"
            >
              <FaWhatsapp className="text-xl" />
              ווטסאפ
            </a>
            <Link
              href="/accessibility"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-gray-600 mt-2"
            >
              <FaWheelchair />
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}