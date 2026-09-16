'use client'

import React from 'react'
import Link from 'next/link'
import { FaUniversalAccess } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Areas Served */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-amber-500 mb-4">אזורי השירות שלנו</h3>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-300">
            <Link href="/areas/or-yehuda" className="hover:text-white transition-colors duration-200">
              עורכת דין נדל״ן אור יהודה
            </Link>
            <Link href="/areas/bikat-ono" className="hover:text-white transition-colors duration-200">
              נוטריון בקעת אונו
            </Link>
            <Link href="/areas/kiryat-ono" className="hover:text-white transition-colors duration-200">
              עורכת דין בקריית אונו
            </Link>
            <Link href="/areas/yehud-monosson" className="hover:text-white transition-colors duration-200">
              עורכת דין ביהוד-מונוסון
            </Link>
            <Link href="/areas/ganei-tikva" className="hover:text-white transition-colors duration-200">
              עורכת דין בגני תקווה
            </Link>
          </nav>
        </div>

        {/* Tools */}
        <div className="text-center mt-8">
          <h3 className="text-lg font-bold text-amber-500 mb-4">מחשבונים משפטיים</h3>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-300">
            <Link href="/calculators/purchase-tax" className="hover:text-white transition-colors duration-200">
              מחשבון מס רכישה
            </Link>
            <Link href="/calculators/lawyer-fee" className="hover:text-white transition-colors duration-200">
              מחשבון שכר טרחה עורך דין
            </Link>
            <Link href="/calculators/delay-compensation" className="hover:text-white transition-colors duration-200">
              מחשבון פיצוי איחור במסירה
            </Link>
            <Link href="/calculators/purchase-costs" className="hover:text-white transition-colors duration-200">
              מחשבון עלויות רכישת דירה
            </Link>
          </nav>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 מריאטה פנחסי - משרד עורכי דין ונוטריון. כל הזכויות שמורות.
            </p>
            <Link
              href="/accessibility"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaUniversalAccess className="text-amber-500" />
              <span>הצהרת נגישות</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
