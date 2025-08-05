'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaUniversalAccess } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="מריאטה פנחסי - משרד עורכי דין"
                width={50}
                height={50}
                className="rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                onError={(e) => {
                  // אם התמונה לא נטענת, נסתיר אותה
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors">
                מריאטה פנחסי
              </h1>
              <p className="text-sm text-gray-600">משרד עורכי דין</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/accessibility"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors duration-300"
            >
              <FaUniversalAccess className="text-amber-600" />
              <span className="text-sm font-medium text-gray-700">נגישות</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <FaTimes size={24} className="text-gray-700" /> : <FaBars size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Accessibility Link */}
              <div className="text-center">
                <Link
                  href="/accessibility"
                  className="flex items-center justify-center space-x-2 p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors duration-300"
                >
                  <FaUniversalAccess className="text-amber-600" />
                  <span className="font-semibold text-gray-900">הצהרת נגישות</span>
                </Link>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">צרו קשר</p>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:054-4450244"
                    className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">טלפון</p>
                      <p className="font-semibold text-gray-900">054-4450244</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/972544450244"
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <p className="font-semibold text-gray-900">054-4450244</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 