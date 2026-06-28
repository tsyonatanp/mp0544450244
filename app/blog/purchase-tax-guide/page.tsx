import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'מס רכישה 2026: כמה משלמים ואיך מחשבים? | מריאטה פנחסי',
    description: 'מדריך מס רכישה 2026: מהן מדרגות המס, כמה משלמים על דירה יחידה מול דירה נוספת, אילו פטורים והקלות קיימים (נכה, עולה, רכישה מקרוב) ואיך מתכננים נכון כדי לא לשלם יותר מדי.',
    keywords: 'מס רכישה, מדרגות מס רכישה 2026, מס רכישה דירה יחידה, מס רכישה דירה שנייה, פטור מס רכישה, חישוב מס רכישה, מיסוי מקרקעין, מס רכישה עולה חדש',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/purchase-tax-guide',
    },
    openGraph: {
        title: 'מס רכישה 2026: כמה משלמים ואיך מחשבים?',
        description: 'מדרגות מס רכישה, ההבדל בין דירה יחידה לנוספת, פטורים והקלות, ותכנון מס נכון לרכישת דירה.',
        url: 'https://www.marietta-law.co.il/blog/purchase-tax-guide',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'מס רכישה 2026: כמה משלמים ואיך מחשבים?',
        }],
    },
}

export default function PurchaseTaxGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "מס רכישה 2026: כמה משלמים ואיך מחשבים?",
                        "description": "מדריך מס רכישה 2026: מדרגות המס, דירה יחידה מול נוספת, פטורים והקלות ותכנון מס נכון.",
                        "author": {
                            "@type": "Person",
                            "name": "מריאטה פנחסי",
                            "jobTitle": "עורכת דין ונוטריון",
                            "url": "https://www.marietta-law.co.il"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
                            "url": "https://www.marietta-law.co.il",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.marietta-law.co.il/logo.png"
                            }
                        },
                        "datePublished": "2026-06-11",
                        "dateModified": "2026-06-11",
                        "image": "https://www.marietta-law.co.il/blog-images/real_estate_keys.png",
                        "url": "https://www.marietta-law.co.il/blog/purchase-tax-guide",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/purchase-tax-guide"
                        }
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
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "כמה מס רכישה משלמים על דירה יחידה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "על דירה יחידה קיימת מדרגת פטור עד תקרה מסוימת (שמתעדכנת מדי שנה), ומעליה המס עולה במדרגות. רוכש דירה יחידה נהנה ממדרגות מס מופחתות משמעותית בהשוואה לרוכש דירה נוספת. את הסכומים המדויקים יש לבדוק מול המדרגות המעודכנות לשנת הרכישה."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "כמה מס רכישה משלמים על דירה שנייה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "על דירה נוספת (שאינה יחידה) המס מתחיל מהשקל הראשון בשיעור גבוה יותר מאשר על דירה יחידה, ללא מדרגת פטור. לכן ההבחנה אם מדובר בדירה יחידה או נוספת היא קריטית לחישוב."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "מתי משלמים את מס הרכישה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "יש להגיש דיווח לרשות המסים ולשלם את מס הרכישה תוך 60 יום ממועד החתימה על הסכם המכר. עיכוב בתשלום עלול לגרור ריבית והצמדה."
                                }
                            }
                        ]
                    })
                }}
            />
            <Header />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">נדל"ן ומיסוי</span>
                        <span className="flex items-center gap-2"><FaCalendar /> 11 יוני, 2026</span>
                        <span className="flex items-center gap-2"><FaUser /> עו"ד מריאטה פנחסי</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        מס רכישה 2026: כמה משלמים ואיך מחשבים?
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        מס הרכישה הוא אחת ההוצאות הגדולות בעסקת נדל"ן — והוא תלוי לחלוטין בשאלה אם זו דירתכם היחידה או נוספת.
                        הנה כל מה שצריך להבין כדי לתכנן נכון ולא לשלם יותר מהנדרש.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            מס רכישה הוא מס שמשלם <strong>הקונה</strong> בכל עסקת מקרקעין, כאחוז משווי הנכס. בניגוד לתפיסה הרווחת,
                            הוא אינו אחיד — הוא מחושב ב<strong>מדרגות</strong>, והשיעור משתנה דרמטית לפי השאלה אם מדובר בדירה
                            יחידה או בדירה נוספת. תכנון נכון יכול לחסוך עשרות אלפי שקלים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">דירה יחידה מול דירה נוספת — ההבדל המכריע</h2>
                        <p>
                            <strong>דירה יחידה:</strong> רוכש שזו דירתו היחידה נהנה ממדרגת פטור עד תקרה מסוימת (המתעדכנת מדי שנה),
                            ומעליה המס עולה בהדרגה. זו הטבה משמעותית שנועדה לעודד בעלות על דירת מגורים אחת.
                        </p>
                        <p>
                            <strong>דירה נוספת (משקיעים):</strong> מי שכבר מחזיק בדירה משלם מס רכישה מהשקל הראשון, בשיעור גבוה
                            יותר וללא מדרגת פטור. לכן עצם ההגדרה — "יחידה" או "נוספת" — היא הגורם המשפיע ביותר על גובה המס.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">חשוב לדעת:</h3>
                            <p className="text-gray-700">
                                "המדרגות והתקרות מתעדכנות מדי שנה (בדרך כלל בינואר). תמיד יש לבדוק את הסכומים המעודכנים
                                לשנת הרכישה הספציפית — ולא להסתמך על מספרים ישנים."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">פטורים והקלות שחשוב להכיר</h2>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'משפר דיור — מי שמוכר דירה ישנה וקונה חדשה עשוי להיחשב כבעל דירה יחידה (בתנאי מכירת הישנה בתוך פרק זמן קבוע)',
                                'נכים, עיוורים ונפגעי פעולות איבה — זכאים למדרגות מס מופחתות',
                                'עולים חדשים — זכאים להטבה ייעודית במס רכישה בתקופה שלאחר העלייה',
                                'העברה ללא תמורה בין קרובים (מתנה) — חיוב מופחת בחלק מהמקרים',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מתי ואיך משלמים?</h2>
                        <p>
                            יש להגיש דיווח לרשות המסים ולשלם את מס הרכישה <strong>תוך 60 יום</strong> ממועד החתימה על הסכם המכר.
                            הדיווח נעשה לרוב על ידי עורך הדין המלווה את העסקה, שגם בודק את הזכאות לפטורים ולהקלות ומבצע תכנון מס מיטבי.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                לתמונה מלאה על העסקה ראו את עמוד <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>,
                                ועל עלות הליווי — <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>.
                                מוכרים דירה שירשתם? ראו <Link href="/blog/inherited-property-sale" className="text-amber-600 font-semibold hover:underline">מכירת דירה שהתקבלה בירושה</Link>.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">רוצים לדעת כמה מס תשלמו?</h3>
                                <p className="text-gray-300">פנו אלינו לתכנון מס ובדיקת זכאות לפטורים לפני העסקה.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                    <FaPhone /> חייגו
                                </a>
                                <a href="https://wa.me/972544450244" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                    <FaWhatsapp /> וואטסאפ
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {['מס רכישה', 'מיסוי מקרקעין', 'רכישת דירה', 'דירה יחידה', 'נדל"ן'].map((tag, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">#{tag}</span>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/blog" className="text-amber-600 hover:text-amber-700 font-bold inline-flex items-center">
                            חזרה לכל המאמרים
                            <span className="mr-2">←</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
