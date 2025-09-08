'use client'

import React from 'react'
import Link from 'next/link'
import { FaUniversalAccess, FaEye, FaFont, FaMousePointer, FaUndo, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Header from '../../components/Header'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-full mb-4">
              <FaUniversalAccess className="text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">הצהרת נגישות</h1>
            <p className="text-lg text-gray-600">משרד עורכת הדין ונוטריון מריאטה פנחסי מחויב לנגישות מלאה לכל המשתמשים</p>
          </div>

          <div className="space-y-8">
            {/* Commitment Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מחויבות לנגישות</h2>
              <p className="text-gray-700 leading-relaxed">
                משרד עורכת הדין ונוטריון מריאטה פנחסי מחויב לספק שירות נגיש לכל המשתמשים, כולל אנשים עם מוגבלויות. 
                האתר עומד בתקנות הנגישות הישראליות ומאפשר גישה שווה לכל המידע והשירותים.
              </p>
            </section>

            {/* Accessibility Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">אפשרויות נגישות באתר</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <FaFont className="text-amber-500 text-xl mr-3" />
                    <h3 className="text-lg font-semibold">גודל טקסט</h3>
                  </div>
                  <p className="text-gray-700">אפשרות להגדיל או להקטין את גודל הטקסט באתר</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <FaEye className="text-amber-500 text-xl mr-3" />
                    <h3 className="text-lg font-semibold">ניגודיות גבוהה</h3>
                  </div>
                  <p className="text-gray-700">מצב ניגודיות גבוהה לבעלי ראייה מוגבלת</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <FaMousePointer className="text-amber-500 text-xl mr-3" />
                    <h3 className="text-lg font-semibold">הדגשת מיקוד</h3>
                  </div>
                  <p className="text-gray-700">הדגשת אלמנטים במצב מיקוד לניווט מקלדת</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <FaEye className="text-amber-500 text-xl mr-3" />
                    <h3 className="text-lg font-semibold">מצב שחור-לבן</h3>
                  </div>
                  <p className="text-gray-700">מצב שחור-לבן לבעלי עיוורון צבעים</p>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ניווט באתר</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">ניווט מקלדת</h3>
                  <p className="text-blue-800">ניתן לנווט באתר באמצעות מקלדת בלבד. השתמשו במקש Tab לניווט בין אלמנטים</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">קורא מסך</h3>
                  <p className="text-green-800">האתר תואם לקוראי מסך ומכיל תיאורים מפורטים לכל האלמנטים</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">דלג לתוכן</h3>
                  <p className="text-purple-800">קישור "דלג לתוכן הראשי" זמין בתחילת כל עמוד לניווט מהיר</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">פרטי קשר לנגישות</h2>
              <div className="bg-amber-50 rounded-lg p-6">
                <p className="text-amber-900 mb-4">
                  אם נתקלתם בבעיות נגישות או שיש לכם הצעות לשיפור, אנא צרו קשר:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-amber-600 mr-3" />
                    <span className="text-amber-900">טלפון: 054-4450244</span>
                  </div>
                  <div className="flex items-center">
                    <FaWhatsapp className="text-amber-600 mr-3" />
                    <span className="text-amber-900">WhatsApp: 054-4450244</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Standards Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עמידה בתקנים</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>עמידה בתקנות הנגישות הישראליות</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>תמיכה ב-WCAG 2.1 רמה AA</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>תמיכה ב-ARIA (Accessible Rich Internet Applications)</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>תמיכה בניווט מקלדת מלא</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  <span>תמיכה בקוראי מסך</span>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עדכוני נגישות</h2>
              <p className="text-gray-700">
                האתר מתעדכן באופן שוטף כדי לשפר את הנגישות. העדכון האחרון: {new Date().toLocaleDateString('he-IL')}
              </p>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Link 
                href="/"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <FaUndo className="mr-2" />
                חזרה לדף הבית
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 