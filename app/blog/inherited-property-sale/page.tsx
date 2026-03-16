'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function InheritedPropertySale() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "מכירת דירה שהתקבלה בירושה: המדריך המשפטי המלא",
        "description": "ירשתם דירה ורוצים למכור? כל מה שצריך לדעת על צו ירושה, צו קיום צוואה, היטל השבחה, מס שבח ואיך מתנהל תהליך המכירה בצורה תקינה.",
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
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">נדל"ן וירושות</span>
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
                        מכירת דירה שהתקבלה בירושה: המדריך המשפטי המלא
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        ירשתם דירה? לפני שממהרים לחתום על חוזה מכר, חשוב להבין את הצעדים המשפטיים הנדרשים,
                        הזכויות שלכם ואיך להימנע ממלכודות מס שיכולות לעלות ביוקר.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            מכירת דירה שהתקבלה בירושה היא תהליך שמשלב דיני ירושה, דיני מקרקעין ודיני מיסים.
                            טעות בשלב אחד עשויה לעכב את המכירה בחודשים ארוכים — ולעיתים אף לגרום לסכסוכים בין יורשים.
                            הכנו עבורכם את המדריך המלא לתהליך.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. שלב ראשון: הוצאת צו ירושה או קיום צוואה</h2>
                        <p>
                            לפני שניתן למכור נכס שהתקבל בירושה, יש לקבל מהמרשם הייעודי (הרשם לענייני ירושה
                            או בית הדין הרבני, בהתאם לנסיבות) <strong>צו ירושה</strong> אם הנפטר לא השאיר צוואה,
                            או <strong>צו קיום צוואה</strong> אם הייתה צוואה. הצו מאמת משפטית מי הם היורשים הזכאים ומה חלקו של כל אחד.
                        </p>
                        <p>
                            הגשת הבקשה כוללת מסמכים כמו תעודת פטירה, תעודות זהות של היורשים, מסמכי הצוואה (אם קיימת),
                            ופרסום ברשומות. התהליך אורך בדרך כלל בין 3 ל-6 חודשים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. רישום הנכס על שם היורשים בטאבו</h2>
                        <p>
                            לאחר קבלת הצו, יש לרשום את הנכס על שם היורשים בלשכת רישום המקרקעין (טאבו).
                            ניתן לרשום את הנכס על שם כלל היורשים בחלקים שווים, או לבצע הסכם חלוקת עיזבון
                            שבו יורש אחד נוטל את הדירה ומשלם לאחרים את חלקם.
                        </p>
                        <p>
                            רישום תקין חיוני: מכירת נכס שאינו רשום על שמכם בטאבו כמעט בלתי אפשרית ומסוכנת מבחינה משפטית.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "כאשר ישנם מספר יורשים, מומלץ לגבש הסכמה ביניהם עוד לפני פנייה לרוכשים פוטנציאליים.
                                סכסוך בין יורשים באמצע עסקת מכר עלול להרוס את העסקה ולחשוף את כל הצדדים לתביעות."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. מס שבח — האם אני חייב בתשלום?</h2>
                        <p>
                            מכירת נכס שהתקבל בירושה עשויה להיות חייבת במס שבח. החישוב נעשה על ההפרש בין
                            שווי הנכס ביום הפטירה של המוריש לבין מחיר המכירה. עם זאת, קיימים פטורים חשובים:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'פטור לדירת מגורים — אם הדירה שימשה למגורים ועומדת בתנאי הפטור',
                                'פטור עקב דירה יחידה — אם לך ולמורישׁ לא הייתה דירה נוספת',
                                'תקופת צינון — אם מכרתם דירה אחרת לאחרונה, ייתכן שתצטרכו להמתין',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            ייעוץ מקצועי לפני מכירה יכול לחסוך לכם עשרות אלפי שקלים בתכנון מס נכון.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. איתור חובות ושעבודים על הנכס</h2>
                        <p>
                            לפני שמוכרים, חשוב לבדוק שהנכס נקי מחובות: משכנתאות שטרם נפרעו, עיקולים,
                            הערות אזהרה לטובת צדדים שלישיים, חובות ארנונה למוניציפליות וחיובי ועד בית.
                            בדיקת נסח טאבו עדכני תחשוף את מרבית השעבודים הרשומים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. ניהול מו"מ ועריכת חוזה המכר</h2>
                        <p>
                            לאחר השלמת כל הצעדים המקדמיים, ניתן להתקדם לשלב המכירה עצמה.
                            במקרה של מספר יורשים, כולם נדרשים לחתום על חוזה המכר — ולכן חשוב שכולם יהיו מיוצגים
                            ומסכימים לתנאי העסקה מראש. עורך דין מטעמכם ינהל את המו"מ, יבטיח את הביטחונות
                            ויוודא שהכסף יגיע בבטחה לידיכם.
                        </p>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">ירשתם דירה ורוצים למכור?</h3>
                                <p className="text-gray-300">פנו אלינו לייעוץ ראשוני ונעזור לכם לנהל את התהליך נכון.</p>
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
                        {['ירושה', 'מכירת דירה', 'צו ירושה', 'מס שבח', 'נדל"ן'].map((tag, idx) => (
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
