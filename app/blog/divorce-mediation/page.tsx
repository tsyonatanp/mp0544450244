'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function DivorceMediatio() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "גישור בגירושין: חלופה יעילה להליך משפטי ממושך",
        "description": "גישור בגירושין הוא הליך מהיר, חסכוני ופחות פוגעני מניהול תיק בבית המשפט. כל מה שצריך לדעת על תהליך הגישור, היתרונות, הגבולות ומתי לבחור בו.",
        "image": "https://www.marietta-law.co.il/professional-photo.jpg",
        "author": {
            "@type": "Person",
            "name": "מריאטה פנחסי",
            "url": "https://www.marietta-law.co.il"
        },
        "publisher": {
            "@type": "Organization",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.marietta-law.co.il/logo.png"
            }
        },
        "datePublished": "2026-03-16",
        "dateModified": "2026-03-16"
    }

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">דיני משפחה</span>
                        <span className="flex items-center gap-2">
                            <FaCalendar />
                            16 מרץ, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser />
                            עו"ד מריאטה פנחסי
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        גישור בגירושין: חלופה יעילה להליך משפטי ממושך
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        ניהול גירושין בבית משפט יכול להימשך שנים, לעלות הון — ולהשאיר צלקות עמוקות על הילדים
                        ועל ההורים. גישור הוא הדרך החכמה יותר עבור זוגות רבים. הנה מה שחשוב לדעת.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            גישור בגירושין הוא הליך מובנה שבו מגשר מקצועי (לרוב עורך דין או פסיכולוג משפחתי)
                            מסייע לבני הזוג להגיע להסכם גירושין מוסכם — ללא ניהול קרב משפטי ציבורי.
                            ההסכם שמגובש בגישור לובש צורה של הסכם גירושין מחייב, שצריך לקבל אישור של בית המשפט
                            לענייני משפחה או של בית הדין הרבני.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. מה מטפלים בגישור?</h2>
                        <p>
                            כמעט כל הסוגיות שעולות בגירושין ניתנות לגישור:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'חלוקת רכוש — דירה, חסכונות, קרנות פנסיה, עסקים',
                                'משמורת הילדים — פיזית ומשפטית',
                                'הסדרי ראייה ולינה עם כל הורה',
                                'מזונות ילדים ומזונות אישה',
                                'חיסול חשבונות משותפים וסילוק חובות',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. יתרונות הגישור על פני הליך משפטי</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-base">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-4 text-right">פרמטר</th>
                                        <th className="p-4 text-right">גישור</th>
                                        <th className="p-4 text-right">הליך משפטי</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 bg-green-50">
                                        <td className="p-4">משך זמן</td>
                                        <td className="p-4 font-semibold text-green-700">מספר חודשים</td>
                                        <td className="p-4 text-red-600">1–5 שנים</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4">עלות</td>
                                        <td className="p-4 font-semibold text-green-700">נמוכה יחסית</td>
                                        <td className="p-4 text-red-600">גבוהה מאוד</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-green-50">
                                        <td className="p-4">פרטיות</td>
                                        <td className="p-4 font-semibold text-green-700">מלאה</td>
                                        <td className="p-4 text-red-600">פרוטוקולים פומביים</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4">השפעה על ילדים</td>
                                        <td className="p-4 font-semibold text-green-700">מינימלית</td>
                                        <td className="p-4 text-red-600">לרוב פוגעת</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="p-4">שליטה על התוצאה</td>
                                        <td className="p-4 font-semibold text-green-700">בידי בני הזוג</td>
                                        <td className="p-4 text-red-600">בידי השופט</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "חשוב שכל אחד מבני הזוג יגיע לגישור עם עורך דין אישי לצידו — לייעוץ, לא לניהול.
                                הגישור הוא שלכם, אבל עורך הדין יוודא שהזכויות שלכם לא מקופחות בהסכם הסופי."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. מתי הגישור לא מתאים?</h2>
                        <p>
                            גישור אינו מתאים לכל מצב. יש מקרים שבהם ההליך המשפטי הוא ההכרחי:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'כאשר יש אלימות במשפחה — הגישור עלול לגרום נזק',
                                'כאשר אחד הצדדים מסתיר נכסים ואינו משתף פעולה',
                                'כאשר אחד הצדדים מסרב לגישור מלכתחילה',
                                'כאשר נדרשות הגנות דחופות (צו הגנה, צו עיקול)',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. כיצד מתחילים תהליך גישור?</h2>
                        <p>
                            פנו למגשר מוסמך — כזה שעבר הכשרה מוכרת ורשום ברשימת המגשרים לענייני משפחה.
                            בפגישה הראשונה יוסבר לכם על התהליך, תעלויות ולוח הזמנים.
                            מספר הפגישות תלוי בסיבוכיות הסוגיות אך בדרך כלל נע בין 4 ל-10 מפגשים.
                        </p>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">שוקלים גירושין? נעזור לכם לבחור את הדרך הנכונה</h3>
                                <p className="text-gray-300">ייעוץ ראשוני — כדי שתדעו מה האפשרויות שלכם.</p>
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
                        {['גישור', 'גירושין', 'דיני משפחה', 'הסכם גירושין', 'ילדים'].map((tag, idx) => (
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
