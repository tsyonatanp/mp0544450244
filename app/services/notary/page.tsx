
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaStamp, FaFileContract, FaPenFancy, FaGlobe, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'נוטריון באור יהודה והסביבה | מריאטה פנחסי - שירותי נוטריון מהירים',
    description: 'משרד עורכי דין ונוטריון מריאטה פנחסי מספק שירותי נוטריון מקצועיים באור יהודה, קריית אונו ובקעת אונו. אימות חתימה, ייפוי כוח נוטריוני, תרגומים וצוואות. שירות מהיר וזמין.',
    keywords: 'נוטריון אור יהודה, נוטריון בקעת אונו, אימות חתימה נוטריון, ייפוי כוח נוטריוני, תרגום נוטריוני, נוטריון קריית אונו, מריאטה פנחסי',
    alternates: {
        canonical: 'https://marita-pinchasi-law.co.il/services/notary',
    },
    openGraph: {
        title: 'נוטריון באור יהודה והסביבה | שירותי נוטריון מריאטה פנחסי',
        description: 'צריכים אישור נוטריוני? משרדנו באור יהודה מספק את כל שירותי הנוטריון במהירות ובמקצועיות. התקשרו עכשיו לקביעת תור.',
        images: ['https://marita-pinchasi-law.co.il/logo.png'],
    }
}

export default function NotaryPage() {
    const services = [
        {
            icon: <FaPenFancy className="text-4xl text-amber-500" />,
            title: 'אימות חתימה',
            description: 'אימות חתימה על מסמכים משפטיים, ייפויי כוח למשכנתא, והצהרות שונות הדורשות אישור נוטריוני.',
        },
        {
            icon: <FaFileContract className="text-4xl text-amber-500" />,
            title: 'ייפוי כוח מתמשך',
            description: 'עריכה ואישור של ייפוי כוח מתמשך, המאפשר לכם לקבוע מי יטפל בענייניכם אם חלילה לא תוכלו לעשות זאת בעצמכם.',
        },
        {
            icon: <FaGlobe className="text-4xl text-amber-500" />,
            title: 'תרגום נוטריוני',
            description: 'אישור נכונות תרגום למסמכים רשמיים, תעודות לימודים, תעודות נישואין ומסמכים לחו"ל.',
        },
        {
            icon: <FaStamp className="text-4xl text-amber-500" />,
            title: 'אישור צוואה',
            description: 'עריכת צוואה נוטריונית שדינה כצוואה בפני רשות, המבטיחה את קיום רצונכם האחרון ללא עוררין.',
        },
    ]

    const faqs = [
        {
            question: "כמה עולה אישור נוטריוני?",
            answer: "שכר הטרחה של נוטריון קבוע בתקנות הנוטריונים ומתעדכן אחת לשנה (בדרך כלל בחודש ינואר). המחיר אחיד לכל הנוטריונים בישראל ואסור לגבות יותר או פחות מהתעריף הקבוע בחוק. המחיר משתנה בהתאם לסוג האישור, מספר החותמים ומספר העותקים."
        },
        {
            question: "האם חובה להגיע למשרד הנוטריון?",
            answer: "בדרך כלל כן, הנוטריון חייב לזהות את החותם פנים אל פנים. עם זאת, במקרים מיוחדים של מוגבלות רפואית או ריתוק למיטה, ניתן לתאם שירות נוטריון עד הבית או לבית החולים (בתוספת תשלום כקבוע בתקנות)."
        },
        {
            question: "אילו מסמכים צריך להביא לפגישה?",
            answer: "חובה להצטייד בתעודת זהות רשמית (או דרכון בתוקף לתושבי חוץ). כמו כן, יש להביא את המסמך שעליו רוצים לחתום (ללא חתימה מוקדמת - החתימה מתבצעת בפני הנוטריון). אם מדובר באישור העתק צילום, יש להביא את המסמך המקורי."
        },
        {
            question: "תוך כמה זמן מקבלים את האישור?",
            answer: "ברוב המקרים, השירות מתבצע במקום. אתם יוצאים מהפגישה עם המסמך החתום והמאושר. מקרים מורכבים יותר כמו עריכת צוואה או תרגום מסמכים ארוכים עשויים לדרוש זמן הכנה קצר."
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
                        "@type": "Service",
                        "name": "שירותי נוטריון באור יהודה",
                        "provider": {
                            "@type": "Notary",
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
                            { "@type": "City", "name": "סביון" }
                        ],
                        "description": "שירותי נוטריון מקצועיים הכוללים אימות חתימה, ייפוי כוח, אישורי העתק נאמן למקור, צוואות נוטריוניות ותרגומים."
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
                            שירותי נוטריון באור יהודה ובקעת אונו
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            שירות מקצועי, מהיר וזמין לאימות חתימות, ייפויי כוח, צוואות ותרגומים.
                            <br />
                            שירות עד הבית במקרים דחופים.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30">
                                <FaPhone />
                                חייגו לתיאום: 054-4450244
                            </a>
                            <a href="https://wa.me/972544450244" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30">
                                <FaWhatsapp />
                                שלחו הודעה בוואטסאפ
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">סוגי השירותים הניתנים במשרד</h2>
                        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-2">
                                <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">למה לבחור בשירותי הנוטריון שלנו?</h2>
                            <div className="space-y-6">
                                {[
                                    'זמינות גבוהה וגמישות בשעות הקבלה',
                                    'מיקום מרכזי ונגיש באור יהודה (חניה בשפע)',
                                    'אפשרות לשירות "נוטריון עד הבית"',
                                    'שירות בשפות עברית, אנגלית ורומנית',
                                    'ניסיון של מעל 14 שנים בתחום המשפט'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href="#contact" className="text-amber-600 font-bold text-lg hover:text-amber-700 underline decoration-2 underline-offset-4">
                                    לפרטים נוספים וקביעת פגישה &larr;
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                {/* Placeholder for legal/office image */}
                                <FaStamp className="text-9xl text-slate-300" />
                            </div>
                            {/* Note: You can add an actual Image component here later */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-xl">מריאטה פנחסי</p>
                                    <p>עורכת דין ונוטריון</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">שאלות ותשובות נפוצות</h2>
                        <p className="text-gray-600">כל מה שצריך לדעת לפני שמגיעים לנוטריון</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">זקוקים לאישור נוטריוני דחוף?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        אנחנו כאן לשירותכם. צרו קשר לקבלת הצעת מחיר ותיאום פגישה מיידית.
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
