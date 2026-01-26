'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLandmark, FaCity, FaFileAlt, FaBalanceScale, FaPhone, FaWhatsapp, FaUniversity } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function AdministrativeLawPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "עריכת דין - משפט מנהלי ורשויות מקומיות",
        "description": "ייצוג משפטי בבתי משפט לעניינים מנהליים, מכרזים ציבוריים, רישוי עסקים והתנהלות מול רשויות מקומיות.",
        "provider": {
            "@type": "LegalService",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
        },
        "serviceType": "AdministrativeLaw",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי משפט מנהלי",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עתירות מנהליות" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ייצוג במכרזים" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "רישוי עסקים וארנונה" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תכנון ובנייה" } }
            ]
        }
    }

    const features = [
        {
            title: 'עתירות מנהליות',
            description: 'הגשת עתירות כנגד החלטות של רשויות המדינה, עיריות וגופים ציבוריים שפעלו בחוסר סבירות.',
            icon: <FaLandmark className="text-2xl text-slate-600" />
        },
        {
            title: 'מכרזים ציבוריים',
            description: 'ליווי משפטי בהליכי מכרז, הגשת הצעות, תקיפת תוצאות מכרז וייצוג בוועדות מכרזים.',
            icon: <FaFileAlt className="text-2xl text-amber-600" />
        },
        {
            title: 'רשויות מקומיות',
            description: 'הפחתת חיובי ארנונה, היטלי פיתוח, אגרות והתמודדות מול דרישות תשלום של העירייה.',
            icon: <FaCity className="text-2xl text-blue-600" />
        },
        {
            title: 'דיני תכנון ובנייה',
            description: 'ייצוג בהתנגדויות לתוכניות בנייה, עררים על היתרי בנייה וטיפול בצווי הריסה מנהליים ושיפוטיים.',
            icon: <FaUniversity className="text-2xl text-green-600" />
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
            <section className="relative bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        משפט מנהלי ורשויות מקומיות
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        גם מול הגופים החזקים ביותר, יש לכם זכויות.
                        אנו מומחים בהתמודדות מול הרשויות, ביטול החלטות שגויות והגנה על האזרח הקטן.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">כשצריכים להילחם בבירוקרטיה</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        התמודדות מול רשויות המדינה והשלטון המקומי יכולה להיות מתסכלת ומתישה.
                                        החלטות שרירותיות, סחבת אינסופית ודרישות תשלום מופרזות הן מנת חלקם של אזרחים ועסקים רבים.
                                    </p>
                                    <p>
                                        המשפט המנהלי מעניק לנו את הכלים לתקוף החלטות אלו.
                                        משרדנו יודע כיצד לנווט במסדרונות הבירוקרטיה, להגיש עתירות ממוקדות ולהביא לביטול או לשינוי של החלטות פוגעניות.
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
                                <h3 className="text-xl font-bold text-gray-900 mb-4">תחומי טיפול נפוצים</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'רישוי עסקים',
                                        'ארנונה',
                                        'משרד הפנים',
                                        'משרד התחבורה',
                                        'ועדות ערר',
                                        'הפקעות מקרקעין'
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">נתקלתם בחומה בירוקרטית?</h3>
                                    <p className="text-gray-600">אנחנו נשבור אותה עבורכם</p>
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
