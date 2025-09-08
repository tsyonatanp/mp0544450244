'use client'

import React from 'react'
import Link from 'next/link'
import { FaUniversalAccess } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


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