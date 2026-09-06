'use client'

import { FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt, FaStar, FaFacebook } from 'react-icons/fa'
import FacebookGroupInfo from './FacebookGroupInfo'

export default function ContactSection() {
  return (
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">צרו קשר</h2>
            <p className="text-xl text-gray-200">מוכנים לעזור לכם בכל שאלה או בעיה משפטית</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">פרטי קשר</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">טלפון</p>
                      <p className="text-gray-200 text-lg">054-4450244</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-200 text-lg">054-4450244</p>
                    </div>
                  </div>

                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">שעות פעילות</p>
                      <p className="text-gray-200">כל השבוע (למעט שישי-שבת וחגים)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">מיקום המשרד</p>
                      <p className="text-gray-200">חרמון 3, אור יהודה 6041908</p>
                      <p className="text-gray-300 text-sm mt-2">שירות בכל אזור המרכז</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:054-4450244"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaPhone className="text-xl" />
                התקשרו עכשיו
              </a>
              <a
                href="https://wa.me/972544450244"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                שלחו WhatsApp
              </a>
              <a
                href="https://g.page/r/Ce7aJP0Ck8vwEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaStar className="text-xl" />
                השאירו ביקורת
              </a>
              <a
                href="https://www.facebook.com/m0544450244"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaFacebook className="text-xl" />
                עקבו אחרינו
              </a>
              <FacebookGroupInfo
                groupId="dirahadasha"
                groupName="דירה חדשה מקבלן"
                groupUrl="https://www.facebook.com/groups/dirahadasha"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
