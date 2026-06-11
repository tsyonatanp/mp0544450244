import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'נסח טאבו: מה זה, איך מוציאים ואיך קוראים אותו? | מריאטה פנחסי',
    description: 'מה זה נסח טאבו ולמה הוא קריטי לפני כל עסקת נדל"ן? מדריך מלא: איך מוציאים נסח טאבו אונליין, איך קוראים אותו ומה כל סעיף אומר - בעלות, משכנתאות, עיקולים והערות אזהרה.',
    keywords: 'נסח טאבו, איך מוציאים נסח טאבו, בדיקת נסח טאבו, נסח טאבו אונליין, הערת אזהרה, רישום מקרקעין, בעלות דירה, עיקול דירה, נסח רישום',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/tabu-extract-guide',
    },
    openGraph: {
        title: 'נסח טאבו: מה זה, איך מוציאים ואיך קוראים אותו?',
        description: 'מה זה נסח טאבו ולמה הוא קריטי לפני כל עסקת נדל"ן? מדריך מלא: איך מוציאים, איך קוראים ומה כל סעיף אומר.',
        url: 'https://www.marietta-law.co.il/blog/tabu-extract-guide',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'נסח טאבו: מה זה, איך מוציאים ואיך קוראים אותו?',
        }],
    },
}

export default function TabuExtractGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "נסח טאבו: מה זה, איך מוציאים ואיך קוראים אותו?",
                        "description": "מה זה נסח טאבו ולמה הוא קריטי לפני כל עסקת נדל\"ן? מדריך מלא: איך מוציאים נסח טאבו אונליין, איך קוראים אותו ומה כל סעיף אומר.",
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
                        "url": "https://www.marietta-law.co.il/blog/tabu-extract-guide",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/tabu-extract-guide"
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
                                "name": "איך מוציאים נסח טאבו?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "נסח טאבו מופק אונליין באתר רשות המקרקעין (אגף רישום והסדר מקרקעין) בתשלום אגרה סמלית. צריך לדעת את פרטי הנכס - גוש, חלקה ותת-חלקה. הנסח מתקבל מיידית כקובץ דיגיטלי בעל תוקף משפטי."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "כמה עולה נסח טאבו?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "הפקת נסח טאבו רגיל אונליין עולה אגרה סמלית של מספר שקלים בודדים. זהו אחד הכלים הזולים והחשובים ביותר לבדיקת נכס לפני עסקה."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "מה ההבדל בין נסח טאבו לבין רישום ברמ\"י?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "נסח טאבו רלוונטי לנכסים שבעלותם רשומה בלשכת רישום המקרקעין (טאבו). נכסים רבים בישראל רשומים דווקא ברשות מקרקעי ישראל (רמ\"י) או בחברה משכנת, ושם הבדיקה נעשית באופן שונה. עורך דין יידע היכן בדיוק לבדוק את הזכויות."
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
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">נדל"ן</span>
                        <span className="flex items-center gap-2">
                            <FaCalendar />
                            11 יוני, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser />
                            עו"ד מריאטה פנחסי
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        נסח טאבו: מה זה, איך מוציאים ואיך קוראים אותו?
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        נסח הטאבו הוא "תעודת הזהות" של הנכס. לפני שקונים דירה — זהו המסמך הראשון שצריך לבדוק.
                        הנה כל מה שצריך לדעת: איך מוציאים אותו, מה כתוב בו, ואילו "דגלים אדומים" לחפש.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            <strong>נסח טאבו</strong> (נסח רישום מקרקעין) הוא מסמך רשמי המופק מלשכת רישום המקרקעין,
                            ובו מרוכז כל המידע המשפטי על נכס: מי הבעלים, אילו זכויות רשומות, האם יש משכנתאות,
                            עיקולים, הערות אזהרה או הגבלות אחרות. בכל עסקת נדל"ן, בדיקת נסח הטאבו היא הצעד הראשון והקריטי ביותר.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">איך מוציאים נסח טאבו?</h2>
                        <p>
                            התהליך פשוט וזול, ומתבצע אונליין:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'נכנסים לאתר רשות המקרקעין (אגף רישום והסדר מקרקעין)',
                                'מזינים את פרטי הנכס: גוש, חלקה ותת-חלקה (מופיעים בחוזה או בארנונה)',
                                'משלמים אגרה סמלית (מספר שקלים) בכרטיס אשראי',
                                'מקבלים מיד קובץ דיגיטלי חתום בעל תוקף משפטי',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">איך קוראים נסח טאבו? המבנה</h2>
                        <p>
                            הנסח מחולק לחלקים. הנה מה שחשוב לבדוק בכל אחד:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'פרטי הנכס — גוש, חלקה, תת-חלקה, שטח רשום וכתובת',
                                'הבעלים — שמות הבעלים הרשומים והחלק היחסי של כל אחד (חשוב לוודא שהמוכר הוא אכן הבעלים)',
                                'משכנתאות ושעבודים — האם רשומה משכנתא לטובת בנק שצריך לסלק במכירה',
                                'עיקולים — עיקול רשום עלול למנוע את העברת הזכויות',
                                'הערות אזהרה — האם כבר נרשמה הערה לטובת קונה אחר',
                                'זיקות הנאה והערות נוספות — זכויות מעבר, הגבלות בנייה ועוד',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">דגל אדום חשוב:</h3>
                            <p className="text-gray-700">
                                "אם שם המוכר בחוזה אינו תואם בדיוק לשם הבעלים בנסח, או אם רשומים עיקולים/הערות
                                שלא דווחתם עליהם — עצרו מיד והתייעצו עם עורך דין לפני שמעבירים כל תשלום."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">לא כל נכס רשום בטאבו</h2>
                        <p>
                            נקודה שמפתיעה רבים: נכסים רבים בישראל אינם רשומים בטאבו אלא ב<strong>רשות מקרקעי ישראל (רמ"י)</strong>
                            או ב<strong>חברה משכנת</strong>. במקרים אלה הבדיקה נעשית מול הגוף הרלוונטי ולא דרך נסח טאבו רגיל.
                            עורך דין מקרקעין יידע בדיוק היכן לבדוק את הזכויות לכל סוג נכס — וזו אחת הסיבות שחשוב לא להסתמך רק על בדיקה עצמית.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">למה לא להסתפק בבדיקה עצמית?</h2>
                        <p>
                            נסח טאבו הוא נקודת הפתיחה, אך בדיקה מלאה לפני עסקה כוללת גם היתרי בנייה, חריגות,
                            תיק בניין בעירייה, חובות ארנונה והיטל השבחה. עורך דין מנוסה יודע לקרוא בין השורות,
                            לזהות סיכונים שלא תמיד גלויים, ולהגן עליכם לפני שאתם מתחייבים.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                למידע מלא על תהליך הליווי המשפטי ראו את עמוד <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>,
                                ועל עלויות — <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">לפני שחותמים על חוזה?</h3>
                                <p className="text-gray-300">נבדוק עבורכם את הנכס לעומק ונוודא שהעסקה בטוחה. פנו לייעוץ ראשוני.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                    <FaPhone />
                                    חייגו
                                </a>
                                <a href="https://wa.me/972544450244" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                    <FaWhatsapp />
                                    וואטסאפ
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {['נסח טאבו', 'רישום מקרקעין', 'בדיקת נכס', 'רכישת דירה', 'נדל"ן'].map((tag, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                #{tag}
                            </span>
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
