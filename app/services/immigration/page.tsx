import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaPassport, FaPlane, FaIdCard, FaHandHoldingHeart, FaUserCheck, FaPhone, FaWhatsapp, FaGlobeAmericas } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'הגירה ואזרחות | מריאטה פנחסי - עורכת דין ונוטריון',
    description: 'סיוע בהליכי הגירה, אשרות עבודה, ויזות מומחה זר, אזרחות ישראלית ומעמד בישראל. ליווי מקצועי מול משרד הפנים.',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/immigration',
    },
    openGraph: {
        title: 'הגירה ואזרחות | מריאטה פנחסי',
        description: 'סיוע בהליכי הגירה, אשרות עבודה, ויזות מומחה זר, אזרחות ישראלית ומעמד בישראל. ליווי מקצועי מול משרד הפנים.',
        url: 'https://www.marietta-law.co.il/services/immigration',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function ImmigrationPage() {

    const features = [
        {
            title: 'מומחים זרים (ויזה ב-1)',
            description: 'טיפול בהיתרי העסקה לחברות היי-טק, תעשייה ומסעדנות המעוניינות להביא מומחים מחו"ל.',
            icon: <FaUserCheck className="text-2xl text-blue-600" />
        },
        {
            title: 'איחוד משפחות',
            description: 'הסדרת מעמד לבני זוג זרים של אזרחים ישראלים ("הליך מדורג") לרבות בני זוג מאותו מין.',
            icon: <FaHandHoldingHeart className="text-2xl text-red-500" />
        },
        {
            title: 'אזרחות ישראלית',
            description: 'בדיקת זכאות לאזרחות מכוח חוק השבות, והגשת בקשות להתאזרחות עבור תושבי קבע.',
            icon: <FaIdCard className="text-2xl text-green-600" />
        },
        {
            title: 'מסורבי כניסה',
            description: 'טיפול דחוף במקרים של סירוב כניסה בנתב"ג ושחרור ממתקני משמורת.',
            icon: <FaPlane className="text-2xl text-slate-500" />
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "הגירה ואזרחות - מריאטה פנחסי",
                        "description": "סיוע בהליכי הגירה, אשרות עבודה, ויזות מומחה זר, אזרחות ישראלית ומעמד בישראל. ליווי מקצועי מול משרד הפנים.",
                        "provider": {
                            "@type": "Person",
                            "name": "מריאטה פנחסי",
                            "jobTitle": "עורכת דין ונוטריון"
                        },
                        "areaServed": "בקעת אונו והמרכז",
                        "url": "https://www.marietta-law.co.il/services/immigration"
                    })
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        הגירה, ויזות ומעמד בישראל
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        הדרך להסדרת המעמד בישראל רצופה אתגרים בירוקרטיים.
                        אנו כאן כדי לפלס עבורכם את הדרך מול משרד הפנים ורשות האוכלוסין.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">מומחיות מול משרד הפנים</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        מדיניות ההגירה של ישראל היא מהקשוחות בעולם.
                                        בין אם אתם חברה המעוניינת להעסיק מומחה זר, ובין אם התאהבתם באזרח זר ואתם רוצים לבנות יחד את חייכם בישראל - אתם זקוקים לליווי מקצועי.
                                    </p>
                                    <p>
                                        משרדנו בקיא בכל הנהלים הפנימיים של רשות האוכלוסין וההגירה.
                                        אנו מלווים את הלקוח החל מהכנת התיק הראשוניה, דרך הראיונות בלשכות ועד לקבלת המעמד הנכסף.
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

                            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">תהליך הסדרת מעמד לבן זוג</h3>
                                <ol className="space-y-4 relative border-r-2 border-blue-200 mr-3">
                                    {[
                                        'פתיחת תיק חיים משותפים: הגשת מסמכים המוכיחים כנות קשר.',
                                        'קבלת אשרת ב/1: אישור עבודה זמני.',
                                        'מעמד ארעי (א/5): תושבות זמנית הכוללת תעודת זהות כתומה וזכויות סוציאליות.',
                                        'התאזרחות או תושבות קבע: סיום ההליך לאחר כ-5-7 שנים.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 pr-6 relative">
                                            <span className="absolute -right-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        {/* Left Column - Form & Contact */}
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">זקוקים לאשרה או ויזה?</h3>
                                    <p className="text-gray-600">צרו קשר לבדיקת זכאות מיידית</p>
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

