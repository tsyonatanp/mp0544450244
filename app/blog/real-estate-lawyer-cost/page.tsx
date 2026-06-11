import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'כמה עולה עורך דין לעסקת נדל"ן? מדריך שכר טרחה 2026 | מריאטה פנחסי',
    description: 'כמה עולה עורך דין לרכישת או מכירת דירה? כל מה שצריך לדעת על שכר טרחה בעסקאות נדל"ן ב-2026 - אחוזים, סכומים קבועים, מה כלול בשירות ואיך לא לשלם יותר מדי.',
    keywords: 'כמה עולה עורך דין נדלן, שכר טרחה עורך דין נדלן, עלות עורך דין רכישת דירה, שכר טרחה עסקת מקרקעין, עורך דין מכירת דירה מחיר, עורך דין נדלן מרכז, עלות עורך דין מקרקעין',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/real-estate-lawyer-cost',
    },
    openGraph: {
        title: 'כמה עולה עורך דין לעסקת נדל"ן? מדריך שכר טרחה 2026',
        description: 'כמה עולה עורך דין לרכישת או מכירת דירה? כל מה שצריך לדעת על שכר טרחה בעסקאות נדל"ן ב-2026 - אחוזים, סכומים, ומה כלול בשירות.',
        url: 'https://www.marietta-law.co.il/blog/real-estate-lawyer-cost',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'כמה עולה עורך דין לעסקת נדל"ן? מדריך שכר טרחה 2026',
        }],
    },
}

export default function RealEstateLawyerCost() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "כמה עולה עורך דין לעסקת נדל\"ן? מדריך שכר טרחה 2026",
                        "description": "כמה עולה עורך דין לרכישת או מכירת דירה? כל מה שצריך לדעת על שכר טרחה בעסקאות נדל\"ן ב-2026 - אחוזים, סכומים קבועים ומה כלול בשירות.",
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
                        "url": "https://www.marietta-law.co.il/blog/real-estate-lawyer-cost",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/real-estate-lawyer-cost"
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
                                "name": "כמה עולה עורך דין לרכישת דירה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "שכר הטרחה לרכישת דירה נע לרוב בין 0.5% ל-1.5% משווי העסקה בתוספת מע\"מ, בהתאם למורכבות. בעסקאות מסוימות נהוג שכר טרחה קבוע. עסקה מקבלן עשויה להיות מורכבת יותר ולכן יקרה יותר מעסקת יד שנייה פשוטה."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "האם שכר הטרחה כולל מע\"מ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "לא תמיד. חשוב לוודא בהצעת המחיר אם הסכום הנקוב כולל מע\"מ או לפניו. תמיד בקשו הצעת מחיר בכתב שמפרטת את הסכום הסופי כולל מע\"מ ואת רשימת השירותים הכלולים."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "מה כלול בשכר הטרחה של עורך דין נדל\"ן?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "בדרך כלל כלולים: בדיקות מקדימות, ניסוח ובדיקת הסכם המכר, ניהול נאמנות, דיווח לרשות המסים ורישום הזכויות. הוצאות נוספות כמו אגרות רישום, מס רכישה ושמאות אינן חלק משכר הטרחה."
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
                        כמה עולה עורך דין לעסקת נדל"ן? מדריך שכר טרחה 2026
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        אחת השאלות הראשונות שעולות לפני רכישה או מכירה של דירה. הנה פירוט ברור של טווחי המחירים,
                        מה משפיע עליהם, מה כלול בשירות — ולמה דווקא כאן כדאי לא להתפשר על המחיר הזול ביותר.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            עסקת נדל"ן היא לרוב העסקה הכלכלית הגדולה בחיינו, והליווי המשפטי הוא חלק בלתי נפרד ממנה.
                            בניגוד לשירותי נוטריון (שתעריפם קבוע בחוק), שכר הטרחה של עורך דין בעסקת מקרקעין אינו קבוע
                            ונתון למשא ומתן. לכן חשוב להבין מה הטווחים המקובלים בשוק של גוש דן והמרכז ב-2026.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">כמה זה עולה? הטווחים המקובלים</h2>
                        <p>
                            שכר הטרחה לליווי עסקת נדל"ן נע לרוב בין <strong>0.5% ל-1.5% משווי העסקה</strong>, בתוספת מע"מ.
                            ככל שהעסקה מורכבת יותר — כך שכר הטרחה גבוה יותר:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'עסקת יד שנייה פשוטה — בדרך כלל בקצה התחתון של הטווח',
                                'רכישה מקבלן — מורכבת יותר (בדיקת ערבויות, מפרט, חוק המכר) ולכן יקרה יותר',
                                'עסקאות עם משכנתא, נאמנות מורכבת או מספר בעלים — בקצה הגבוה',
                                'בחלק מהמשרדים נהוג שכר טרחה קבוע במקום אחוזים — בעיקר בעסקאות קטנות',
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
                                "המחיר הזול ביותר הוא לא תמיד הזול ביותר בסוף. עורך דין שחוסך בבדיקות מקדימות
                                או מנסח חוזה רשלני עלול לעלות לכם בעשרות אלפי שקלים — הרבה מעבר להפרש בשכר הטרחה."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מה כלול בשכר הטרחה?</h2>
                        <p>
                            שכר טרחה הוגן בעסקת נדל"ן כולל בדרך כלל את כל מעטפת הליווי המשפטי:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'בדיקות מקדימות — נסח טאבו, זכויות, היתרים, חריגות, עיקולים ושעבודים',
                                'ניסוח ובדיקה של הסכם המכר ומשא ומתן על סעיפיו',
                                'הקמת מנגנון נאמנות והגנה על כספי התמורה',
                                'דיווח לרשות המסים וליווי תכנון מס שבח ומס רכישה',
                                'רישום הזכויות והערות אזהרה בטאבו / רמ"י',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">הוצאות נוספות שאינן חלק משכר הטרחה</h2>
                        <p>
                            חשוב להבחין בין שכר הטרחה לבין הוצאות העסקה עצמן, שאינן נכנסות לכיסו של עורך הדין:
                            <strong> מס רכישה</strong> (לקונה), <strong>מס שבח</strong> (למוכר, אם חל),
                            אגרות רישום בטאבו, ולעיתים עלות שמאות או בדק בית. עורך דין טוב יציג לכם תמונת עלויות מלאה מראש.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">איך לבחור — ולא לשלם יותר מדי</h2>
                        <p>
                            בקשו <strong>הצעת מחיר בכתב</strong> שמפרטת את הסכום הסופי (כולל מע"מ) ואת רשימת השירותים הכלולים.
                            השוו בין 2-3 משרדים, אך אל תבחרו רק לפי המחיר — בדקו ניסיון ספציפי בנדל"ן, זמינות ויחס אישי.
                            זכרו: אתם מפקידים בידי עורך הדין את העסקה הגדולה בחייכם.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                למידע מלא על תהליך הליווי ראו את עמוד <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>.
                                רוכשים דירה מקבלן? כדאי להכיר את הזכויות במקרה של <Link href="/blog/late-apartment-delivery" className="text-amber-600 font-semibold hover:underline">איחור במסירה</Link> ושל <Link href="/blog/construction-defects-guide" className="text-amber-600 font-semibold hover:underline">ליקויי בנייה</Link>.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">לפני עסקת נדל"ן?</h3>
                                <p className="text-gray-300">פנו אלינו להצעת מחיר שקופה ולייעוץ ראשוני ללא התחייבות.</p>
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
                        {['שכר טרחה', 'עורך דין נדל"ן', 'רכישת דירה', 'מכירת דירה', 'עלויות'].map((tag, idx) => (
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
