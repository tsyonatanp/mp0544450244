import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'מס שבח במכירת דירה 2026: פטורים, חישוב ותכנון מס | מריאטה פנחסי',
    description: 'מדריך מס שבח 2026 למוכרי דירה: מתי משלמים ומתי פטורים, פטור דירת מגורים יחידה, החישוב הלינארי המוטב, מכירת דירה בירושה, אילו הוצאות מפחיתות את המס ואיך מתכננים נכון לפני המכירה.',
    keywords: 'מס שבח, מס שבח מכירת דירה, פטור מס שבח, מס שבח דירה יחידה, חישוב מס שבח, חישוב לינארי מס שבח, מס שבח דירה בירושה, מיסוי מקרקעין, פטור דירת מגורים מזכה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/betterment-tax-guide',
    },
    openGraph: {
        title: 'מס שבח במכירת דירה 2026: פטורים, חישוב ותכנון מס',
        description: 'מתי משלמים מס שבח ומתי פטורים, פטור דירה יחידה, החישוב הלינארי המוטב, מכירת דירה בירושה ואיך מפחיתים את המס.',
        url: 'https://www.marietta-law.co.il/blog/betterment-tax-guide',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'מס שבח במכירת דירה 2026: פטורים, חישוב ותכנון מס',
        }],
    },
}

export default function BettermentTaxGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "מס שבח במכירת דירה 2026: פטורים, חישוב ותכנון מס",
                        "description": "מדריך מס שבח למוכרי דירה: מתי משלמים ומתי פטורים, פטור דירת מגורים יחידה, החישוב הלינארי המוטב, מכירת דירה בירושה ואיך מפחיתים את המס.",
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
                        "datePublished": "2026-09-20",
                        "dateModified": "2026-09-20",
                        "image": "https://www.marietta-law.co.il/blog-images/real_estate_keys.png",
                        "url": "https://www.marietta-law.co.il/blog/betterment-tax-guide",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/betterment-tax-guide"
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
                                "name": "האם משלמים מס שבח על מכירת דירה יחידה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "לרוב לא. מוכר של דירת מגורים יחידה שעומד בתנאי החוק (בין היתר החזקה של לפחות 18 חודשים, תושב ישראל, ואין לו דירה נוספת) זכאי לפטור ממס שבח עד תקרת שווי המתעדכנת מדי שנה (כ-5 מיליון ש\"ח). על החלק שמעל התקרה מחושב מס בשיטה הלינארית. חשוב לבדוק את התנאים והתקרה המעודכנים לפני המכירה."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "כמה מס שבח משלמים?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "מס השבח מחושב על הרווח הריאלי בלבד (שווי המכירה בניכוי שווי הרכישה וההוצאות המוכרות), ולא על מלוא מחיר הדירה. שיעור המס ליחיד הוא כ-25% על השבח הריאלי. עבור דירות שנרכשו לפני 1.1.2014 ניתן לרוב ליהנות מ'חישוב לינארי מוטב', שמפחית משמעותית את המס בפועל."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "מהו החישוב הלינארי המוטב במס שבח?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "ברפורמת 2014 בוטל הפטור שהיה קיים אחת ל-4 שנים, ובמקומו נקבע חישוב לינארי מוטב: השבח מחולק לפי תקופות, כאשר החלק שנצבר עד 1.1.2014 פטור ממס, והחלק שנצבר מאותו מועד ואילך מחויב בכ-25%. זהו מנגנון מרכזי למי שמוכר דירה שאינה זכאית לפטור מלא."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "האם אפשר להפחית את מס השבח?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "כן. ניתן להפחית את המס באמצעות ניכוי הוצאות מוכרות (שיפוצים והשבחה, שכר טרחת עו\"ד ותיווך, מס הרכישה ששולם ברכישה, היטל השבחה ועוד), ניצול נכון של הפטורים, החישוב הלינארי, ותכנון עיתוי המכירה. תכנון מקדים מול עורך דין למקרקעין הוא הדרך העיקרית לחסוך מס."
                                }
                            }
                        ]
                    })
                }}
            />
            <Header />

            {/* Article Header */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-medium">נדל"ן ומיסוי</span>
                        <span className="flex items-center gap-2"><FaCalendar /> 20 ספטמבר, 2026</span>
                        <span className="flex items-center gap-2"><FaUser /> עו"ד מריאטה פנחסי</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        מס שבח במכירת דירה 2026: פטורים, חישוב ותכנון מס
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        אם מס הרכישה הוא המס של הקונה — מס השבח הוא המס של המוכר. אבל רוב מוכרי דירת המגורים היחידה
                        כלל אינם משלמים אותו, בזכות פטור ייעודי. הנה מתי משלמים, כמה, ואיך מתכננים נכון לפני המכירה.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            מס שבח הוא מס שמשלם <strong>המוכר</strong> בעסקת מקרקעין, על ה<strong>רווח</strong> שנוצר לו מהמכירה —
                            ולא על מלוא מחיר הדירה. הוא מעוגן בחוק מיסוי מקרקעין (שבח ורכישה), התשכ"ג-1963, ומהווה מעין
                            "בן זוג" של מס הרכישה שמשלם הקונה. הבשורה הטובה: החוק מעניק פטור רחב לדירת מגורים יחידה,
                            כך שחלק ניכר מהמוכרים אינם משלמים מס שבח כלל — אם הם עומדים בתנאים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מה זה מס שבח ועל מה בדיוק משלמים?</h2>
                        <p>
                            "השבח" הוא ההפרש בין <strong>שווי המכירה</strong> לבין <strong>שווי הרכישה</strong> בתוספת ההוצאות
                            המוכרות. כלומר, המס מחושב על הרווח בלבד. שיעור המס ליחיד הוא כ-<strong>25% על השבח הריאלי</strong> —
                            החלק "האמיתי" של הרווח, לאחר נטרול עליית המדד (רכיב האינפלציה אינו ממוסה באותו אופן). המשמעות:
                            גם כשחייבים במס, בסיס החישוב קטן בהרבה ממחיר הדירה.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">הפטור המרכזי — דירת מגורים יחידה</h2>
                        <p>
                            זהו הפטור החשוב ביותר. מוכר של <strong>דירת מגורים מזכה שהיא דירתו היחידה</strong> זכאי לפטור ממס
                            שבח, בכפוף לתנאים עיקריים:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'הדירה היא דירת המגורים היחידה של המוכר בישראל (עם חריגים מסוימים, למשל חלק קטן בדירה נוספת)',
                                'המוכר החזיק בדירה לפחות 18 חודשים מרגע שהפכה לדירת מגורים',
                                'המוכר לא ניצל פטור זה במכירת דירה אחרת ב-18 החודשים שקדמו',
                                'המוכר הוא תושב ישראל (תושב חוץ נדרש להוכיח שאין לו דירה במדינת מושבו)',
                                'הפטור חל עד תקרת שווי המתעדכנת מדי שנה (כ-5 מיליון ש"ח); על החלק שמעל התקרה מחושב מס לינארי',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">חשוב לדעת:</h3>
                            <p className="text-gray-700">
                                "דירה יחידה" אינה מזכה בפטור אוטומטי. יש לעמוד בכל התנאים, והפטור מוגבל בתקרת שווי.
                                התקרות והסכומים מתעדכנים מדי שנה — תמיד יש לבדוק את הנתונים המעודכנים למועד המכירה.
                                האמור כאן הוא מידע כללי ואינו תחליף לייעוץ משפטי-מיסויי פרטני.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">אין פטור מלא? החישוב הלינארי המוטב</h2>
                        <p>
                            עד 2014 היה קיים פטור אחת ל-4 שנים, גם לבעלי מספר דירות. <strong>רפורמת 2014 ביטלה אותו</strong>,
                            ובמקומו נקבע ה<strong>חישוב הלינארי המוטב</strong>. לפי מנגנון זה, כאשר מדובר בדירת מגורים שנרכשה
                            לפני 1.1.2014, השבח מחולק לפי תקופות: החלק שנצבר <strong>עד 1.1.2014 פטור ממס</strong>, והחלק שנצבר
                            מאותו מועד ואילך מחויב בכ-25%. כך, מי שמחזיק בדירה שנים רבות עשוי לשלם מס נמוך משמעותית — גם אם
                            אינו זכאי לפטור המלא (למשל בעל דירה נוספת).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מכירת דירה שהתקבלה בירושה</h2>
                        <p>
                            למכירת דירה שהתקבלה בירושה יש מסלול פטור ייעודי, בתנאים מסוימים — בין היתר כאשר היורש הוא בן/בת
                            זוג, צאצא או בן זוג של צאצא של המוריש, המוריש החזיק ערב פטירתו בדירה אחת בלבד, ואילו המוריש היה
                            מוכר את הדירה בעצמו — היה זכאי לפטור. במקרים אלה מכירת הדירה עשויה להיות פטורה מבלי "לנצל" את
                            הפטור האישי של היורש. זהו נושא רגיש שדורש בדיקה פרטנית.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">איך מחשבים את השבח — ומה מפחית את המס</h2>
                        <p>
                            נוסחת הבסיס: <strong>שווי מכירה − שווי רכישה − הוצאות מוכרות = השבח</strong>. ככל שההוצאות המוכרות
                            גבוהות יותר, כך קטן הרווח החייב במס. בין ההוצאות שניתן לרוב לנכות:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'הוצאות השבחה ושיפוץ מהותי של הדירה (עם קבלות)',
                                'שכר טרחת עורך דין בעסקאות הרכישה והמכירה',
                                'דמי תיווך ששולמו',
                                'מס הרכישה ששולם בעת רכישת הדירה',
                                'היטל השבחה ששולם לרשות המקומית',
                                'הוצאות מימון מסוימות (כגון ריבית ריאלית על משכנתא, בתנאים שבחוק)',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            שימו לב: בדירה שהושכרה ונדרש בגינה פחת, ייתכן שיהיה צורך "להוסיף בחזרה" את הפחת לחישוב השבח.
                            תכנון נכון של ההוצאות והמסמכים לפני המכירה יכול לחסוך אלפי שקלים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מתי ואיך מדווחים?</h2>
                        <p>
                            יש להגיש הצהרה ("שומה עצמית") למשרדי מיסוי מקרקעין תוך פרק זמן קצר מהעסקה (כיום <strong>30 יום</strong>
                            ממועד המכירה). הדיווח, בדיקת הזכאות לפטורים וחישוב המס נעשים בדרך כלל על ידי עורך הדין המלווה את
                            העסקה. בסיום התהליך מתקבלים <strong>אישורי מסים</strong> — תנאי הכרחי להעברת הזכויות בטאבו על שם הקונה.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                מהצד של הקונה — ראו <Link href="/blog/purchase-tax-guide" className="text-amber-600 font-semibold hover:underline">מס רכישה: כמה משלמים ואיך מחשבים</Link>.
                                לתמונה מלאה על העסקה — <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>,
                                ועל עלות הליווי — <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>.
                                מוכרים דירה שירשתם? ראו <Link href="/blog/inherited-property-sale" className="text-amber-600 font-semibold hover:underline">מכירת דירה שהתקבלה בירושה</Link>.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">מוכרים דירה? בדקו את חבות המס מראש</h3>
                                <p className="text-gray-300">פנו אלינו לבדיקת זכאות לפטור ותכנון מס שבח לפני חתימת הסכם המכר.</p>
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
                        {['מס שבח', 'מיסוי מקרקעין', 'מכירת דירה', 'דירה יחידה', 'נדל"ן'].map((tag, idx) => (
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
