'use client'

import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

export default function HomeHero() {
  return (
    <section id="main-content" className="relative pt-28 md:pt-32 pb-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
          מריאטה פנחסי
          <span className="block text-xl md:text-2xl lg:text-3xl mt-3 font-semibold text-white tracking-normal">
            עורכת דין נדל״ן ונוטריון באור יהודה
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-amber-500 tracking-wider uppercase">
          משרד עורכי דין ונוטריון
        </h2>

        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full opacity-80"></div>

        <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
          ליווי בעסקאות מקרקעין, ליקויי בנייה, צוואות ושירותי נוטריון — עם יחס אישי וזמינות גבוהה
        </p>

        <p className="text-lg md:text-xl mb-6 text-gray-400 font-light max-w-2xl mx-auto">
          משרד מקומי באור יהודה ובבקעת אונו, לשירות תושבי גוש דן והמרכז
        </p>

        <div className="flex flex-wrap gap-3 justify-center items-center mb-10">
          <Link
            href="/areas/or-yehuda"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm md:text-base text-amber-200 hover:bg-amber-500/20 hover:text-amber-100 transition-colors"
          >
            <FaMapMarkerAlt className="text-amber-400" aria-hidden="true" />
            עורכת דין נדל״ן אור יהודה
          </Link>
          <Link
            href="/areas/bikat-ono"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm md:text-base text-amber-200 hover:bg-amber-500/20 hover:text-amber-100 transition-colors"
          >
            <FaMapMarkerAlt className="text-amber-400" aria-hidden="true" />
            נוטריון בקעת אונו
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:054-4450244"
            className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2 min-w-[220px]"
          >
            <FaPhone className="text-lg" />
            שיחת ייעוץ
          </a>
          <a
            href="https://wa.me/972544450244"
            className="bg-transparent border border-gray-600 hover:border-green-500 hover:text-green-400 text-gray-300 px-10 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 min-w-[220px] hover:bg-white/5"
          >
            <FaWhatsapp className="text-lg" />
            הודעה ב-WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
