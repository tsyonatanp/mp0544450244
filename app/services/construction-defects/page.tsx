
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaTools, FaHardHat, FaWater, FaGavel, FaCheckCircle, FaPhone, FaWhatsapp, FaRulerCombined } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין ליקויי בנייה באור יהודה והמרכז | מריאטה פנחסי',
    description: 'משרד עורכי דין מריאטה פנחסי מתמחה בתביעות ליקויי בנייה, רטיבות ואי התאמות מול קבלנים. ליווי משפטי מלא משלב חוות הדעת ההנדסית ועד קבלת הפיצוי הכספי.',
    keywords: 'ליקויי בנייה, תביעת קבלן, רטיבות בדירה, אי התאמה למפרט, עורך דין ליקויי בנייה אור יהודה, בדק בית, ירידת ערך, פיצוי ליקויי בנייה',
    alternates: {
        canonical: 'https://mp0544450244.vercel.app/services/construction-defects',
    },
    openGraph: {
        title: 'תביעות ליקויי בנייה ורטיבות | מריאטה פנחסי - השגת פיצוי מקסימלי',
        description: 'גילתם ליקויים בדירה החדשה? הקבלן מתחמק מאחריות? אנו נלחם עבורכם לקבלת הפיצוי המגיע לכם ותיקון הליקויים.',
        images: ['https://mp0544450244.vercel.app/logo.png'],
    }
}

export default function ConstructionDefectsPage() {
    const services = [
        {
            icon: <FaWater className="text-4xl text-amber-500" />,
            title: 'רטיבות ונזילות',
            description: 'טיפול משפטי בבעיות רטיבות, עובש ונזילות חוזרות, כולל דרישה לתיקון שורש הבעיה ופיצוי על עוגמת נפש.',
        },
        {
            icon: <FaRulerCombined className="text-4xl text-amber-500" />,
            title: 'אי התאמות למפרט',
            description: 'תביעות בגין אי התאמה בין המפרט הטכני שהובטח לבין הדירה שנמסרה בפועל (ריצוף, כלים סניטריים, גודל חדרים ועוד).',
        },
        {
            icon: <FaGavel className="text-4xl text-amber-500" />,
            title: 'תביעות ירידת ערך',
            description: 'דרישת פיצוי כספי בגין ליקויים שלא ניתנים לתיקון וגרמו לירידה בשווי הנכס (כגון ליקויים אקוסטיים, גובה תקרה נמוך).',
        },
        {
            icon: <FaHardHat className="text-4xl text-amber-500" />,
            title: 'ליווי מול בדק בית',
            description: 'עבודה משותפת עם מהנדסי בדק בית מומחים להכנת חוות דעת משפטית שתחייב את הקבלן בבית המשפט.',
        },
    ]

    const faqs = [
        {
            question: "מתי כדאי להזמין חברת בדק בית?",
            answer: "מומלץ להזמין בדיקת בדק בית מיד עם קבלת המפתח (פרוטוקול מסירה) או בסמוך לכך. הדו\"ח ההנדסי משמש כבסיס לדרישת התיקונים מהקבלן וכראיה משפטית במקרה הצורך."
        },
        {
            question: "כמה זמן יש לקבלן לתקן ליקויים?",
            answer: "לפי חוק המכר, יש לאפשר לקבלן \"הזדמנות נאותה\" לתקן את הליקויים. תקופת הבדק משתנה בהתאם לסוג הליקוי (בין שנה ל-7 שנים). אם הקבלן נכשל בתיקון או מתעלם, ניתן להגיש תביעה לפיצוי כספי."
        },
        {
            question: "האם ניתן לתבוע פיצוי על עוגמת נפש?",
            answer: "בהחלט. בתי המשפט נוהגים לפסוק פיצויים על עוגמת נפש, סבל ואי נוחות שנגרמו לדיירים כתוצאה מליקויים משמעותיים (כגון רטיבות קשה) או מהצורך לפנות את הדירה לצורך תיקונים."
        },
        {
            question: "האם ניתן לתבוע את הקבלן שנים אחרי המסירה?",
            answer: "כן, בהתאם לתקופות האחריות בחוק המכר. למשל, על כשלי צנרת ואיטום האחריות היא ארוכה (עד 7 שנים ויותר). בנוסף, במקרים של רשלנות או אי התאמה חמורה, ניתן לתבוע גם מעבר לתקופת הבדק הרגילה."
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
                        "name": "עורך דין ליקויי בנייה באור יהודה",
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
                            { "@type": "City", "name": "פתח תקווה" },
                            { "@type": "City", "name": "ראש העין" }
                        ],
                        "description": "ייצוג דיירים בתביעות ליקויי בנייה, רטיבות, בדק בית ואי התאמות."
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
                            תביעות ליקויי בנייה
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            הקבלן מתעלם? הרטיבות חוזרת?
                            <br />
                            אנו נדאג שתקבלו את הדירה שמגיעה לכם, או את הפיצוי המלא בגינה.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                                <FaPhone />
                                שיחת ייעוץ חינם
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">תחומי הטיפול בליקויי בנייה</h2>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">אל תתמודדו מול הקבלן לבד</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                קבלנים מחזיקים בסוללת עורכי דין שמטרתם למזער את אחריותם. כדי לקבל את המגיע לכם, אתם צריכים ייצוג משפטי תקיף, מקצועי ובלתי מתפשר שיודע לדבר בשפה שלהם.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'שיתוף פעולה הדוק עם מיטב המהנדסים ומומחי בדק בית',
                                    'ניסיון מוכח בהשגת פיצויים משמעותיים ללקוחות',
                                    'טיפול במקרים מורכבים של רטיבות ובעיות איטום',
                                    'מיצוי זכויות מלא כולל פיצוי על דיור חלופי ועוגמת נפש'
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
                                <FaTools className="text-9xl text-slate-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">שאלות נפוצות בנושא ליקויי בנייה</h2>
                        <p className="text-gray-600">כל המידע שחשוב לדעת לפני תביעת קבלן</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">יש לכם ליקויים בדירה?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        אל תחכו שיהיה מאוחר מדי. פנו אלינו לבחינת התיק ובניית אסטרטגיה משפטית מנצחת.
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

