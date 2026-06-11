
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaHome, FaLandmark, FaRoute } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין בגני תקווה | מריאטה פנחסי - נדל"ן, נוטריון וצוואות',
    description: 'מחפשים עורך דין בגני תקווה? משרד עו"ד מריאטה פנחסי משרת את תושבי גני תקווה ובקעת אונו בנדל"ן, שירותי נוטריון, ליקויי בנייה וצוואות. קרבה גיאוגרפית, זמינות גבוהה ויחס אישי.',
    keywords: 'עורך דין גני תקווה, נוטריון גני תקווה, עורך דין נדלן גני תקווה, מקרקעין גני תקווה, ליקויי בנייה גני תקווה, צוואות גני תקווה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/areas/ganei-tikva',
    },
    openGraph: {
        title: 'עורך דין בגני תקווה - מריאטה פנחסי',
        description: 'משרד עורכי דין מקומי המשרת את גני תקווה. התמחות בנדל"ן, ליקויי בנייה ושירותי נוטריון.',
        images: ['https://www.marietta-law.co.il/logo.png'],
    }
}

export default function GaneiTikvaPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "מריאטה פנחסי - עורכת דין ונוטריון לגני תקווה",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "חרמון 3",
                            "addressLocality": "אור יהודה",
                            "postalCode": "6041908",
                            "addressRegion": "בקעת אונו"
                        },
                        "telephone": "054-4450244",
                        "areaServed": {
                            "@type": "City",
                            "name": "גני תקווה"
                        },
                        "url": "https://www.marietta-law.co.il/areas/ganei-tikva"
                    })
                }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/city-pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        עורכת דין ונוטריון בגני תקווה
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        ליווי משפטי מקצועי לתושבי גני תקווה.
                        <br />
                        משרדנו בבקעת אונו, סמוך לגני תקווה, ומעניק שירות אישי, נגיש וזמין.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                            <FaPhone />
                            054-4450244
                        </a>
                        <a href="https://waze.com/ul?ll=32.0288,34.8564&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-slate-500/30">
                            <FaRoute />
                            ניווט למשרד (WAZE)
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">עורך דין מקומי לתושבי גני תקווה</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                גני תקווה היא אחת היישובים המבוקשים באזור בקעת אונו, עם ביקוש גבוה לנדל"ן ולשירותים משפטיים מקצועיים.
                                המשרד שלנו ממוקם בבקעת אונו, בקרבת גני תקווה, ומלווה תושבים מהאזור בעסקאות נדל"ן, בתביעות מול קבלנים ובשירותי נוטריון.
                            </p>
                            <p className="mb-6">
                                אנו מאמינים בשירות משפטי אישי ונגיש – בלי הצורך לנסוע למרכזי הערים הגדולות.
                                ההיכרות שלנו עם האזור והרשויות המקומיות מאפשרת לנו לקדם את ענייניכם ביעילות ובמקצועיות.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">שירותים לתושבי גני תקווה:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'ליווי עסקאות מכר ורכישה של דירות ונכסים בגני תקווה',
                                'תביעות ליקויי בנייה ואיחור במסירה מול קבלנים',
                                'אישורי נוטריון, תרגומים נוטריוניים וייפוי כוח',
                                'צוואות, ירושות וייפוי כוח מתמשך'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                                    <FaHome className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-amber-600" />
                                נוחות הגעה מגני תקווה
                            </h4>
                            <p className="text-gray-700">
                                <strong>כתובת:</strong> רחוב חרמון 3, אור יהודה (קומת קרקע)
                                <br />
                                <strong>מרחק:</strong> נסיעה קצרה מגני תקווה
                                <br />
                                <strong>חניה:</strong> חניה בשפע ברחוב ובקרבת מקום (חינם)
                                <br />
                                <strong>שעות קבלה:</strong> בתיאום מראש (גמישות בשעות)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
