import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaGavel, FaBalanceScale, FaUserSecret, FaLock, FaUserShield, FaPhone, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'משפט פלילי | מריאטה פנחסי - עורכת דין ונוטריון',
    description: 'ייצוג בהליכים פליליים: חקירות משטרה, הגנה בבית משפט, עבירות כלכליות ותעבורה. ליווי מקצועי מהחקירה ועד לפסק הדין.',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/criminal-law',
    },
    openGraph: {
        title: 'משפט פלילי | מריאטה פנחסי',
        description: 'ייצוג בהליכים פליליים: חקירות משטרה, הגנה בבית משפט, עבירות כלכליות ותעבורה. ליווי מקצועי מהחקירה ועד לפסק הדין.',
        url: 'https://www.marietta-law.co.il/services/criminal-law',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function CriminalLawPage() {

    const features = [
        {
            title: 'עבירות צווארון לבן',
            description: 'ייצוג בעבירות כלכליות, שוחד, מרמה והפרת אמונים, עם דגש על דיסקרטיות מלאה.',
            icon: <FaUserSecret className="text-2xl text-slate-700" />
        },
        {
            title: 'מעצרים ושחרור',
            description: 'ליווי מיידי בחקירות משטרה, דיוני הארכת מעצר וייצוג בבקשות שחרור בתנאים מגבילים.',
            icon: <FaLock className="text-2xl text-red-600" /> // Using alias if defined, or assume FaHandcuffs doesn't exist and use fallback
        },
        {
            title: 'עבירות סמים ואלימות',
            description: 'ניהול תיקי פשיעה חמורה, עבירות סמים, אלימות במשפחה ועבירות רכוש.',
            icon: <FaGavel className="text-2xl text-amber-600" />
        },
        {
            title: 'ייצוג קטינים ונוער',
            description: 'מומחיות מיוחדת בייצוג קטינים בבתי משפט לנוער, תוך ראייה שיקומית והגנה על עתיד הקטין.',
            icon: <FaUserShield className="text-2xl text-blue-600" />
        }
    ]

    // Handcuffs icon fallback just in case
    const FaHandcuffsIcon = () => <span className="text-2xl text-red-600 font-bold">⚠️</span>;


    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "משפט פלילי - מריאטה פנחסי",
                        "description": "ייצוג בהליכים פליליים: חקירות משטרה, הגנה בבית משפט, עבירות כלכליות ותעבורה. ליווי מקצועי מהחקירה ועד לפסק הדין.",
                        "provider": {
                            "@type": "Person",
                            "name": "מריאטה פנחסי",
                            "jobTitle": "עורכת דין ונוטריון"
                        },
                        "areaServed": "בקעת אונו והמרכז",
                        "url": "https://www.marietta-law.co.il/services/criminal-law"
                    })
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
                        משפט פלילי וייצוג בבתי המשפט
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        כשחירותך עומדת למבחן, אין מקום לטעויות.
                        ייצוג משפטי אגרסיבי ומקצועי משלב החקירה הראשונה ועד לסגירת התיק.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">זמינות מיידית 24/7 במקרי חירום</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        הליך פלילי הוא אירוע משנה חיים. החלטות המתקבלות בשעות הראשונות של החקירה יכולות להכריע את גורל התיק כולו. לכן, ייעוץ לפני חקירה הוא קריטי.
                                    </p>
                                    <p>
                                        משרדנו מעניק מעטפת הגנה משפטית מקיפה לנחקרים ונאשמים.
                                        אנו נלחמים על כל ראיה, בודקים כל פרט ופועלים בנחישות לזיכוי מלא או למזעור הנזק למינימום האפשרי.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="mb-4">
                                            {feature.title === 'מעצרים ושחרור' ? <FaGavel className="text-2xl text-red-600" /> : feature.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white rounded-xl p-8 border border-slate-700">
                                <h3 className="text-xl font-bold text-amber-500 mb-4">כללי ברזל בחקירה</h3>
                                <ul className="space-y-4">
                                    {[
                                        'זכות השתיקה: יש לכם זכות לא להפליל את עצמכם.',
                                        'זכות ההיוועצות: דרשו בתוקף להיפגש עם עורך דין לפני תחילת החקירה.',
                                        'תיעוד: שימו לב אם החקירה מוקלטת או מצולמת.',
                                        'הבטחות שווא: אל תאמינו להבטחות של חוקרים ("תודה ותלך") ללא גיבוי.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">●</span>
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">זקוקים לייעוץ דחוף?</h3>
                                    <p className="text-gray-600">אנחנו זמינים עבורכם</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="tel:054-4450244"
                                        className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl animate-pulse"
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

