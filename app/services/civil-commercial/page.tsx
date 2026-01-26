'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBalanceScale, FaFileContract, FaGavel, FaHandshake, FaMoneyBillWave, FaBuilding, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function CivilCommercialPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "עריכת דין - משפט אזרחי ומסחרי",
        "description": "ייעוץ וליווי משפטי לעסקים ולפרטיים: דיני חוזים, תביעות כספיות, הוצאה לפועל וחדלות פירעון.",
        "provider": {
            "@type": "LegalService",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
        },
        "serviceType": "CommercialLaw",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותים אזרחיים-מסחריים",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עריכת חוזים והסכמים" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תביעות כספיות וליטיגציה" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "הוצאה לפועל וגבייה" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "חדלות פירעון/פשיטת רגל" } }
            ]
        }
    }

    const features = [
        {
            title: 'דיני חוזים',
            description: 'עריכה ובדיקה של חוזים מסחריים ופרטיים, הסכמי שותפות, הסכמי מייסדים וחוזים מול ספקים.',
            icon: <FaFileContract className="text-2xl text-amber-500" />
        },
        {
            title: 'ליטיגציה אזרחית',
            description: 'ייצוג משפטי בבתי משפט בתביעות כספיות, סכסוכים עסקיים ותביעות הפרת חוזה.',
            icon: <FaBalanceScale className="text-2xl text-amber-500" />
        },
        {
            title: 'הוצאה לפועל וגבייה',
            description: 'גביית חובות יעילה עבור זוכים, וייצוג חייבים בהליכי הסדר חובות ואיחוד תיקים.',
            icon: <FaMoneyBillWave className="text-2xl text-amber-500" />
        },
        {
            title: 'חדלות פירעון',
            description: 'ליווי בהליכי פשיטת רגל ושיקום כלכלי (חדלות פירעון) לפתיחת דף חדש בחיים.',
            icon: <FaGavel className="text-2xl text-amber-500" />
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-black text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        משפט אזרחי, מסחרי וחוזים
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        הבסיס לכל פעילות עסקית וכלכלית הוא הסדרה משפטית נכונה.
                        אנו מעניקים מעטפת משפטית מלאה לעסקים ולפרטיים - מעריכת החוזה ועד לניהול משברים.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Right Column - Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">יציבות משפטית בעולם העסקי</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        עולם העסקים והמסחר דורש תגובה מהירה, חדה ומקצועית. בין אם אתם חותמים על חוזה חדש, נכנסים לשותפות או נאלצים לתבוע את המגיע לכם - הליווי המשפטי הוא קריטי.
                                    </p>
                                    <p>
                                        משרדנו מתמחה בפתרון סכסוכים אזרחיים ומסחריים, תוך חתירה לתוצאה הטובה והמהירה ביותר עבור הלקוח. אנו מבינים שזמן שווה כסף, ולכן פועלים ביעילות מירבית, בין אם בחדר המשא ומתן ובין אם בבית המשפט.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">תחומי עיסוק נוספים</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'דיני חברות',
                                        'פירוק חברות',
                                        'תביעות ייצוגיות',
                                        'לשון הרע',
                                        'דיני צרכנות',
                                        'קניין רוחני'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Left Column - Form & Contact */}
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">זקוקים לייעוץ משפטי?</h3>
                                    <p className="text-gray-600">אנחנו כאן כדי לעזור</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="tel:054-4450244"
                                        className="flex items-center justify-center gap-3 w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <FaPhone />
                                        054-4450244
                                    </a>

                                    <a
                                        href="https://wa.me/972544450244"
                                        className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        הודעה בוואטסאפ
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
