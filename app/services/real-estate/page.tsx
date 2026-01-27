
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaHome, FaKey, FaHandshake, FaFileSignature, FaCheckCircle, FaPhone, FaWhatsapp, FaBalanceScale } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין נדל"ן ומקרקעין באור יהודה והסביבה | מריאטה פנחסי',
    description: 'משרד עורכי דין מריאטה פנחסי מתמחה בנדל"ן ומקרקעין באור יהודה, קריית אונו ובקעת אונו. ליווי משפטי מלא בעסקאות מכר ורכישה (יד ראשונה ושנייה), בדיקות מקדימות וייצוג בטאבו.',
    keywords: 'עורך דין נדלן אור יהודה, עורך דין מקרקעין בקעת אונו, הסכם מכר דירה, רכישת דירה מקבלן, עורך דין קריית אונו נדלן, עורך דין יהוד נדלן',
    alternates: {
        canonical: 'https://marita-pinchasi-law.co.il/services/real-estate',
    },
    openGraph: {
        title: 'עורך דין נדל"ן ומקרקעין | מריאטה פנחסי - ליווי עסקאות בטוח',
        description: 'קונים או מוכרים דירה? אל תחתמו בלי ייעוץ משפטי. משרדנו באור יהודה מספק מעטפת הגנה מלאה לכל עסקת נדל"ן.',
        images: ['https://marita-pinchasi-law.co.il/logo.png'],
    }
}

export default function RealEstatePage() {
    const services = [
        {
            icon: <FaHandshake className="text-4xl text-amber-500" />,
            title: 'עסקאות מכר ורכישה',
            description: 'ליווי צמוד במכירה ורכישה של דירות יד שנייה, תוך הקפדה על ביטחונות, לוחות תשלומים והגנה מקסימלית על הלקוח.',
        },
        {
            icon: <FaKey className="text-4xl text-amber-500" />,
            title: 'רכישת דירה מקבלן',
            description: 'בדיקת הסכם המכר מול הקבלן, ניהול משא ומתן על סעיפים משפטיים, ובדיקת הבטוחות והערבויות הבנקאיות.',
        },
        {
            icon: <FaFileSignature className="text-4xl text-amber-500" />,
            title: 'רישום בטאבו ומינהל',
            description: 'העברת זכויות, רישום הערות אזהרה, תיקון טעויות רישום והסדרת רישום בתים משותפים.',
        },
        {
            icon: <FaBalanceScale className="text-4xl text-amber-500" />,
            title: 'מיסוי מקרקעין',
            description: 'ייעוץ ותכנון מס שבח ומס רכישה, בדיקת זכאות לפטורים והגשת דיווחים לרשויות המס.',
        },
    ]

    const faqs = [
        {
            question: "מתי כדאי לפנות לעורך דין בעסקת נדל\"ן?",
            answer: "מומלץ לפנות לעורך דין בשלב המוקדם ביותר, עוד לפני חתימה על זכרון דברים. זכרון דברים הוא חוזה מחייב לכל דבר ועניין, וחתימה עליו ללא בדיקה משפטית עלולה לגרום לנזקים ולחשיפת מס מיותרת."
        },
        {
            question: "מה תפקידו של עורך הדין ברכישת דירה?",
            answer: "עורך הדין מבצע בדיקות מקדימות של הנכס (נסח טאבו, חריגות בניה, עיקולים ושעבודים), מנסח את הסכם המכר כדי להגן על האינטרסים שלכם, מלווה את הדיווח לרשויות המס ומבצע את העברת הזכויות(הרישום) על שמכם בסוף התהליך."
        },
        {
            question: "כמה זמן לוקחת עסקת מקרקעין?",
            answer: "משך העסקה משתנה. עסקת יד שנייה פשוטה יכולה להסתיים תוך 3-4 חודשים מרגע החתימה ועד מסירת החזקה, בכפוף לאישורים כמו אישור עירייה ומשכנתא. רכישה מקבלן תלויה בקצב הבנייה וטופס 4."
        },
        {
            question: "האם חובה לשלם מקדמה בחתימת החוזה?",
            answer: "נהוג לשלם תשלום ראשון (בדרך כלל כ-10%-15%) במעמד החתימה, אך חשוב מאוד שהכסף יועבר לחשבון נאמנות או בצ'ק בנקאי רק לאחר שנרשמה הערת אזהרה לטובת הקונה, כדי להבטיח את הכסף."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

            {/* Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "שירותי עורך דין נדל\"ן באור יהודה",
                        "provider": {
                            "@type": "Attorney",
                            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "חרמון 3",
                                "addressLocality": "אור יהודה",
                                "postalCode": "6041908",
                                "addressRegion": "בקעת אונו"
                            },
                            "telephone": "054-4450244",
                            "priceRange": "$$"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "אור יהודה" },
                            { "@type": "City", "name": "קריית אונו" },
                            { "@type": "City", "name": "יהוד-מונוסון" },
                            { "@type": "City", "name": "גני תקווה" },
                            { "@type": "City", "name": "מרכז הארץ" }
                        ],
                        "description": "ליווי עסקאות נדל\"ן, מכירה ורכישה של דירות, נדל\"ן מסחרי ומיסוי מקרקעין."
                    })
                }}
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                            עורך דין נדל"ן ומקרקעין
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            הבית שלכם הוא הנכס היקר ביותר. אנחנו כאן כדי להגן עליו.
                            <br />
                            ליווי משפטי מקצועי, יסודי ואישי בעסקאות נדל"ן.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                                <FaPhone />
                                שיחת ייעוץ ראשונית
                            </a>
                            <a href="https://wa.me/972544450244" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/30">
                                <FaWhatsapp />
                                דברו איתנו בוואטסאפ
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">תחומי הטיפול בנדל"ן</h2>
                        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1 flex gap-6">
                                <div className="flex-shrink-0 bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">למה חשוב לבחור בעורך דין נדל"ן מנוסה?</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                עסקת נדל"ן היא לרוב העסקה הכלכלית הגדולה ביותר בחייו של אדם. טעות קטנה בחוזה, בבדיקת הזכויות או בתכנון המס עלולה לעלות עשרות ואף מאות אלפי שקלים.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'בדיקות מקדימות יסודיות למניעת "תאונות משפטיות"',
                                    'ניסיון רב בניהול מו"מ מול קבלנים ועורכי דין',
                                    'הגנה הרמטית על כספי התמורה באמצעות נאמנויות',
                                    'טיפול אישי וזמין לאורך כל הדרך - לא "תיק מספר ארכיב"'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                                <FaHome className="text-9xl text-slate-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">שאלות נפוצות בנדל"ן</h2>
                        <p className="text-gray-600">כל מה שחשוב לדעת לפני שיוצאים לדרך</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">עומדים לפני עסקת נדל"ן?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        אל תקחו סיכונים מיותרים. פנו אלינו עוד היום לבדיקה ראשונית ולייצוג משפטי שקט ובטוח.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-amber-500/20">
                            054-4450244
                        </a>
                        <a href="https://wa.me/972544450244" className="bg-white text-slate-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-lg">
                            שליחת הודעה
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

