'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCarCrash, FaUserMd, FaHardHat, FaWheelchair, FaNotesMedical, FaPhone, FaWhatsapp, FaMedkit } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function TortsPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "עורך דין נזיקין וביטוח לאומי",
        "description": "ייצוג נפגעים בתביעות נזיקין, תאונות דרכים, תאונות עבודה ורשלנות רפואית מול חברות הביטוח וביטוח לאומי.",
        "provider": {
            "@type": "LegalService",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
        },
        "serviceType": "AccidentLaw",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי נזיקין",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תביעות תאונות דרכים" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תביעות תאונות עבודה" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "רשלנות רפואית" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "וועדות רפואיות ביטוח לאומי" } }
            ]
        }
    }

    const features = [
        {
            title: 'תאונות דרכים',
            description: 'טיפול מקיף החל מהדיווח הראשוני, דרך איסוף התיעוד הרפואי ועד קבלת הפיצוי המקסימלי מחברת הביטוח.',
            icon: <FaCarCrash className="text-2xl text-red-500" />
        },
        {
            title: 'תאונות עבודה',
            description: 'מיצוי זכויותיכם מול המוסד לביטוח לאומי ומול המעסיק במקרה של רשלנות.',
            icon: <FaHardHat className="text-2xl text-amber-500" />
        },
        {
            title: 'רשלנות רפואית',
            description: 'בדיקת התיק עם מומחים רפואיים מהשורה הראשונה והגשת תביעה במקרים של נזק כתוצאה מטיפול רפואי לקוי.',
            icon: <FaUserMd className="text-2xl text-blue-500" />
        },
        {
            title: 'ביטוח לאומי ונכות',
            description: 'ליווי וייצוג בוועדות רפואיות לקביעת אחוזי נכות וקבלת קצבאות.',
            icon: <FaWheelchair className="text-2xl text-green-500" />
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
            <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-amber-500 bg-clip-text text-transparent">
                        נזיקין, תאונות וביטוח לאומי
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        נפצעתם? מגיע לכם פיצוי. אנו נילחם מול חברות הביטוח והבירוקרטיה כדי שתקבלו את כל מה שמגיע לכם, עד השקל האחרון.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">אל תתמודדו לבד מול חברות הביטוח</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        לאחר פציעה או תאונה, אתם צריכים להתמקד בהחלמה ושיקום. ההתמודדות מול חברות הביטוח והמוסד לביטוח לאומי היא מתישה, בירוקרטית ולעיתים קרובות מתסכלת.
                                    </p>
                                    <p>
                                        חברות הביטוח מעסיקות סוללות של עורכי דין שמטרתם למזער את הפיצוי שלכם. לכן, חשוב שיהיה לצידכם עורך דין מנוסה שמכיר את המערכת מבפנים ויודע כיצד למקסם את סכום הפיצוי.
                                        אנו מלווים אתכם יד ביד, החל משלב איסוף המסמכים הרפואיים ועד לייצוג בוועדות ובבית המשפט.
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

                            <div className="bg-red-50 rounded-xl p-8 border border-red-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">חשוב לדעת ברגעים הראשונים</h3>
                                <ul className="space-y-3">
                                    {[
                                        'תיעוד מלא: צלמו את מקום התאונה, הנזקים והפציעות.',
                                        'פרטי עדים: קחו שמות וטלפונים של עדים לאירוע.',
                                        'טיפול רפואי: פנו למיון או לקופת חולים באופן מיידי.',
                                        'אל תחתמו: אל תחתמו על שום מסמך של חברת הביטוח ללא התייעצות.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                                            <FaNotesMedical className="text-red-500 flex-shrink-0" />
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">נפגעתם? בדקו זכאותכם לפיצוי</h3>
                                    <p className="text-gray-600">ייעוץ ראשוני ללא התחייבות</p>
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

