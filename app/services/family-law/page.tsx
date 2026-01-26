'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserFriends, FaHandHoldingHeart, FaFileSignature, FaChild, FaGavel, FaPhone, FaWhatsapp, FaBalanceScale } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function FamilyLawPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "עריכת דין - דיני משפחה וירושה",
        "description": "ליווי משפטי רגיש ומקצועי בדיני משפחה: גירושין, הסכמי ממון, ירושות וצוואות, מזונות ומשמורת.",
        "provider": {
            "@type": "LegalService",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
        },
        "serviceType": "FamilyLaw",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי דיני משפחה",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "הסכמי גירושין ושלום בית" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עריכת צוואות וירושות" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "הסכמי ממון" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ייפוי כוח מתמשך" } }
            ]
        }
    }

    const features = [
        {
            title: 'גירושין ופירוק התא המשפחתי',
            description: 'ניהול הליכי גירושין במינימום זעזועים, תוך שמירה על זכויותיכם וטובת הילדים.',
            icon: <FaUserFriends className="text-2xl text-amber-500" />
        },
        {
            title: 'צוואות וירושות',
            description: 'עריכת צוואות, בקשות לצווי ירושה וניהול סכסוכי עיזבון מורכבים.',
            icon: <FaFileSignature className="text-2xl text-amber-500" />
        },
        {
            title: 'מזונות ומשמורת',
            description: 'קביעת דמי מזונות הוגנים והסדרי ראייה המותאמים למציאות המשתנה.',
            icon: <FaChild className="text-2xl text-amber-500" />
        },
        {
            title: 'ייפוי כוח מתמשך',
            description: 'הסדרת עתידכם האישי והרפואי מבעוד מועד, כדי להבטיח שרצונכם יכובד.',
            icon: <FaHandHoldingHeart className="text-2xl text-amber-500" />
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
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        דיני משפחה, צוואות וירושות
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        ברגעים הרגישים ביותר בחיים, אתם צריכים מישהו שילחם עבורכם ברגישות ובנחישות.
                        ליווי משפטי אישי בתהליכי גירושין, ירושות והסדרת המעמד האישי.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">לנהל משברים בתבונה וברגישות</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        תחום דיני המשפחה הוא מהמורכבים והרגישים ביותר בעולם המשפט. הוא נוגע בנימים החשופים ביותר של חיינו - הילדים, הזוגיות והרכוש שצברנו.
                                    </p>
                                    <p>
                                        משרדנו מציע גישה ייחודית המשלבת מקצועיות משפטית בלתי מתפשרת יחד עם ראייה אנושית רחבה.
                                        אנו מאמינים כי ברוב המקרים, הגעה להסכמות עדיפה על פני מלחמות בבתי משפט, אך במידת הצורך אנו יודעים להילחם בנחישות על כל הזכויות המגיעות לכם בערכאות המשפטיות.
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

                            {/* FAQ Section for SEO */}
                            <div className="space-y-6 mt-12">
                                <h3 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h3>

                                <div className="bg-white p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <FaBalanceScale className="text-amber-500" />
                                        מה ההבדל בין הסכם ממון לצוואה?
                                    </h4>
                                    <p className="text-gray-600">
                                        הסכם ממון מסדיר את חלוקת הרכוש במקרה של פרידה או גירושין בעודכם בחיים, בעוד שצוואה קובעת מה ייעשה ברכושכם לאחר אריכות ימים. שני המסמכים משלימים זה את זה ומומלץ לערוך את שניהם.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <FaGavel className="text-amber-500" />
                                        כמה זמן לוקח הליך גירושין?
                                    </h4>
                                    <p className="text-gray-600">
                                        המשך משתנה מאוד. בהסכמה, ניתן לסיים את התהליך תוך מספר שבועות. במקרה של תביעות משפטיות, ההליך יכול לארוך שנה ויותר. אנו פועלים לייעל ולקצר תהליכים ככל הניתן.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Left Column - Form & Contact */}
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">צריכים ייעוץ אישי?</h3>
                                    <p className="text-gray-600">דיסקרטיות מלאה מובטחת</p>
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
