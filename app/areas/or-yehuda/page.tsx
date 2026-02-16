
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaHome, FaLandmark, FaRoute } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין באור יהודה | מריאטה פנחסי - משרד מקומי וזמין',
    description: 'מחפשים עורך דין באור יהודה? משרד עו"ד מריאטה פנחסי ממוקם בלב אור יהודה ומעניק שירותי נדל"ן, נוטריון וליקויי בנייה לתושבי העיר והסביבה. זמינות גבוהה ויחס אישי.',
    keywords: 'עורך דין אור יהודה, נוטריון באור יהודה, עורך דין נדלן אור יהודה, נווה סביון, סביון, קריית אונו',
    alternates: {
        canonical: 'https://mp0544450244.vercel.app/areas/or-yehuda',
    },
    openGraph: {
        title: 'עורך דין באור יהודה - מריאטה פנחסי',
        description: 'משרד עורכי דין מקומי באור יהודה. התמחות בנדל"ן, ליקויי בנייה ושירותי נוטריון מהיום להיום.',
        images: ['https://mp0544450244.vercel.app/logo.png'],
    }
}

export default function OrYehudaPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "מריאטה פנחסי - עורכת דין ונוטריון באור יהודה",
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
                            "name": "אור יהודה"
                        },
                        "url": "https://mp0544450244.vercel.app/areas/or-yehuda"
                    })
                }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/city-pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        עורכת דין ונוטריון באור יהודה
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        שירות משפטי מקצועי ליד הבית.
                        <br />
                        משרדנו ממוקם בלב אור יהודה ומשרת את תושבי העיר, נווה סביון ובקעת אונו.
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">למה לבחור בעורך דין מקומי?</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                כשאתם בוחרים עורך דין מהעיר שלכם, אתם מרוויחים יותר מרק נוחות גיאוגרפית.
                                ההיכרות המעמיקה שלנו עם הרשות המקומית, מחלקות ההנדסה בעיריית אור יהודה והטאבו האזורי, מאפשרת לנו לקדם תהליכים במהירות וביעילות.
                            </p>
                            <p className="mb-6">
                                אנו גאים להיות חלק מהקהילה באור יהודה ולספק שירות אישי, נגיש ומקצועי לשכנים שלנו.
                                אין צורך לנסוע לתל אביב ולחפש חניה – כל השירותים המשפטיים זמינים לכם כאן, ליד הבית.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">שירותים לתושבי אור יהודה והסביבה:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'אישורי נוטריון מהירים (כולל שירות עד הבית לקשישים ומוגבלים)',
                                'ליווי רכישת דירה בפרויקטים החדשים באור יהודה (בית בפארק, עיריית אור יהודה)',
                                'טיפול בליקויי בנייה מול קבלנים באזור',
                                'צוואות וירושות'
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
                                איפה אנחנו נמצאים?
                            </h4>
                            <p className="text-gray-700">
                                <strong>כתובת:</strong> רחוב חרמון 3, אור יהודה (קומת קרקע)
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
