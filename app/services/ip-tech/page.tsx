'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGlobe, FaLightbulb, FaLaptopCode, FaUserShield, FaTrademark, FaPhone, FaWhatsapp, FaFingerprint } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function IpTechPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "עריכת דין - קניין רוחני וטכנולוגיה",
        "description": "ייצוג משפטי בתחום הטכנולוגיה והאינטרנט: רישום סימני מסחר, זכויות יוצרים, הגנת הפרטיות ודיני סייבר.",
        "provider": {
            "@type": "LegalService",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
        },
        "serviceType": "IntellectualProperty",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי קניין רוחני",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "רישום סימני מסחר" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "הגנה על זכויות יוצרים" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תקנוני אתרים ופרטיות" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "חוזים טכנולוגיים" } }
            ]
        }
    }

    const features = [
        {
            title: 'רישום סימני מסחר',
            description: 'הגנה על המותג שלכם באמצעות רישום סימן מסחר בישראל ובעולם, וניהול הליכי התנגדות.',
            icon: <FaTrademark className="text-2xl text-purple-600" />
        },
        {
            title: 'זכויות יוצרים',
            description: 'אכיפת זכויות יוצרים של יוצרים ואמנים, תביעות הפרה והסכמי רישיון שימוש.',
            icon: <FaLightbulb className="text-2xl text-yellow-500" />
        },
        {
            title: 'דיני אינטרנט ופרטיות',
            description: 'ניסוח תקנונים ומדיניות פרטיות לאתרים ואפליקציות, עמידה בתקנות GDPR והגנת הפרטיות.',
            icon: <FaUserShield className="text-2xl text-blue-500" />
        },
        {
            title: 'חוזים טכנולוגיים',
            description: 'ליווי חברות טכנולוגיה וסטארטאפים, הסכמי מייסדים, הסכמי פיתוח תוכנה (SaaS) ורישוי.',
            icon: <FaLaptopCode className="text-2xl text-cyan-600" />
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
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                {/* Abstract tech background effect */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')]"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        קניין רוחני,, טכנולוגיה וסייבר
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        הנכסים החשובים ביותר היום הם לא נדל"ן, אלא רעיונות.
                        אנו נדאג להגן על הקניין הרוחני שלכם, המותג והטכנולוגיה שפיתחתם.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">הגנה משפטית בעידן הדיגיטלי</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        בעולם שבו העתקה נמצאת במרחק קליק אחד, ההגנה על הקניין הרוחני הופכת למשימה קריטית לכל עסק ויוצר.
                                    </p>
                                    <p>
                                        משרדנו נמצא בחזית הטכנולוגיה המשפטית ומספק מענה עדכני לאתגרים של העולם החדש:
                                        החל מהגנה על אפליקציות וקוד מקור, דרך התמודדות עם לשון הרע ברשתות החברתיות, ועד להגנה על מאגרי מידע ופרטיות משתמשים.
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

                            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">למה לרשום סימן מסחר?</h3>
                                <ul className="space-y-3">
                                    {[
                                        'בלעדיות: הזכות הבלעדית להשתמש בשם המותג.',
                                        'הרתעה: מונע ממתחרים לחקות אתכם.',
                                        'ערך כלכלי: הופך את המותג לנכס סחיר שניתן למכור.',
                                        'אכיפה: מקל משמעותית בתביעות נגד מפרים.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                                            <FaFingerprint className="text-purple-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Left Column - Form & Contact */}
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">יש לכם רעיון? אל תחכו</h3>
                                    <p className="text-gray-600">הגנו עליו לפני שיהיה מאוחר מדי</p>
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
