import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'איך מחשבים שטח דירה? תקן 9.1 וההבדלים בשטח (טאבו, ארנונה, מודעה) | מריאטה פנחסי',
    description: 'למה השטח של הדירה שונה במודעה, בטאבו ובארנונה? מדריך משפטי לתקן 9.1 החדש לחישוב שטח דירה, מה כלול בשטח, איך זה משפיע על המחיר ומה לבדוק לפני שקונים.',
    keywords: 'איך מחשבים שטח דירה, תקן 9.1, שטח דירה, שטח נטו ברוטו, הבדל שטח טאבו ארנונה, שטח דירה במודעה, מדידת דירה, שטח דירה בטאבו',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/apartment-area-calculation',
    },
    openGraph: {
        title: 'איך מחשבים שטח דירה? תקן 9.1 וההבדלים בשטח',
        description: 'למה השטח שונה במודעה, בטאבו ובארנונה? מדריך משפטי לתקן 9.1 ומה לבדוק לפני שקונים דירה.',
        url: 'https://www.marietta-law.co.il/blog/apartment-area-calculation',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'איך מחשבים שטח דירה? תקן 9.1 וההבדלים בשטח',
        }],
    },
}

export default function ApartmentAreaCalculation() {
    const faqs = [
        {
            question: "מה זה תקן 9.1 לחישוב שטח דירה?",
            answer: "תקן 9.1 הוא תקן מדידה חדש של מועצת שמאי המקרקעין, שנועד ליצור אחידות באופן חישוב שטח דירת מגורים. הוא מחליף את תקן 9.0 משנת 2006, ומגדיר במדויק כיצד מודדים קירות (חיצוניים עד הפן הפנימי, קירות משותפים עד המרכז) ומה נכלל בשטח ומה לא."
        },
        {
            question: "למה השטח של הדירה שונה במודעה, בטאבו ובארנונה?",
            answer: "מדובר בשלושה מקורות שמודדים אחרת: המודעה השיווקית מציגה לרוב שטח 'ברוטו' נדיב (כולל חלקים משותפים); נסח הטאבו מציג את השטח הרשום; והארנונה נמדדת לפי כללי העירייה. לכן חשוב לבדוק לפי איזו הגדרה מחושב השטח בחוזה."
        },
        {
            question: "מה עושים אם השטח בפועל קטן ממה שפורסם?",
            answer: "פער בין השטח שהובטח לשטח בפועל עשוי להקים עילה לתביעה (אי-התאמה או הפרת חוזה), במיוחד ברכישה מקבלן. חשוב לתעד את מה שהובטח (מודעה, מפרט, חוזה) ולהתייעץ עם עורך דין - הפער יכול להיות שווה עשרות אלפי שקלים."
        },
        {
            question: "מה חשוב לבדוק לגבי שטח הדירה לפני שקונים?",
            answer: "לוודא לפי איזו הגדרה מצוין השטח בחוזה (נטו/ברוטו/עיקרי), להשוות מול נסח הטאבו והמפרט, ובמקרה של קבלן - לבדוק את תשריט הדירה. מומלץ שעורך דין יבדוק את התאמת ההגדרות לפני החתימה."
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "איך מחשבים שטח דירה? תקן 9.1 וההבדלים בשטח (טאבו, ארנונה, מודעה)",
                        "description": "מדריך משפטי לתקן 9.1 החדש לחישוב שטח דירה, ההבדלים בין המקורות, וההשלכות על הקונה.",
                        "author": { "@type": "Person", "name": "מריאטה פנחסי", "jobTitle": "עורכת דין ונוטריון", "url": "https://www.marietta-law.co.il" },
                        "publisher": { "@type": "Organization", "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון", "url": "https://www.marietta-law.co.il", "logo": { "@type": "ImageObject", "url": "https://www.marietta-law.co.il/logo.png" } },
                        "datePublished": "2026-09-19",
                        "dateModified": "2026-09-19",
                        "image": "https://www.marietta-law.co.il/blog-images/real_estate_keys.png",
                        "url": "https://www.marietta-law.co.il/blog/apartment-area-calculation",
                        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.marietta-law.co.il/blog/apartment-area-calculation" }
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
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />
            <Header />

            {/* Article Header */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-medium">נדל"ן</span>
                        <span className="flex items-center gap-2"><FaCalendar /> 19 ספטמבר, 2026</span>
                        <span className="flex items-center gap-2"><FaUser /> עו"ד מריאטה פנחסי</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        איך מחשבים שטח דירה? תקן 9.1 וההבדלים בין השטח בטאבו, בארנונה ובמודעה
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        קניתם דירה של "100 מ׳" — אבל בטאבו כתוב 90? אתם לא לבד. מדריך משפטי להבנת שטח הדירה,
                        לתקן 9.1 החדש, ולמה ההבדל הזה יכול לעלות לכם עשרות אלפי שקלים.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            אחת התופעות המבלבלות ביותר ברכישת דירה היא ש<strong>לאותה דירה יש כמה "שטחים" שונים</strong>:
                            השטח שמופיע במודעה, השטח הרשום בנסח הטאבו, והשטח שלפיו מחושבת הארנונה. ההבדלים אינם טעות —
                            הם נובעים משיטות מדידה שונות. הבנת ההבדל חשובה, כי היא משפיעה ישירות על המחיר האמיתי למטר ועל הזכויות שלכם.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">תקן 9.1 — התקן החדש לחישוב שטח</h2>
                        <p>
                            כדי ליצור אחידות, אימצה מועצת שמאי המקרקעין את <strong>תקן 9.1</strong>, שמחליף את התקן הקודם
                            (9.0 משנת 2006). התקן מגדיר במדויק כיצד מודדים את שטח הדירה — למשל אופן מדידת הקירות:
                            קיר חיצוני נמדד עד הפן הפנימי שלו, וקיר משותף עד מרכזו (עד עובי מסוים). ההגדרות האלה קובעות
                            אילו חלקים "נספרים" בשטח ואילו לא, ומצמצמות את הפער בין הצהרות שיווקיות לבין המציאות.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">שלושת ה"שטחים" — ולמה הם שונים</h2>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'שטח במודעה: לרוב שטח "ברוטו" נדיב, שיכול לכלול חלקים משותפים, מרפסות ומחסן — נועד להציג דירה גדולה.',
                                'שטח בנסח טאבו: השטח הרשום רשמית בלשכת רישום המקרקעין — לא תמיד תואם למודעה.',
                                'שטח לארנונה: נמדד לפי כללי העירייה (לעיתים כולל שטחים שלא נכללים במדידה אחרת) — ולכן שוב שונה.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">למה זה נוגע לכיס:</h3>
                            <p className="text-gray-700">
                                "דירה שפורסמה כ-100 מ׳ במחיר 3 מיליון ₪ = 30,000 ₪ למ׳. אם השטח בפועל הוא 90 מ׳,
                                שילמתם למעשה כ-33,300 ₪ למ׳ — פער של 11% במחיר האמיתי. לכן חשוב לדעת לפי איזו הגדרה נמדד השטח."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מה חשוב לבדוק לפני החתימה</h2>
                        <p>
                            ההבדלים בשטח אינם בהכרח בעיה — אבל <strong>חוסר בהירות לגביהם כן.</strong> לפני שחותמים:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'לוודא לפי איזו הגדרה מצוין השטח בחוזה (עיקרי / ברוטו / כולל מרפסת ומחסן).',
                                'להשוות את השטח בחוזה מול נסח הטאבו והמפרט הטכני.',
                                'ברכישה מקבלן — לבדוק את תשריט הדירה ואת המפרט לפי חוק המכר.',
                                'לתעד את מה שהובטח (מודעה, מצגות, תכתובות) — למקרה של פער עתידי.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מה עושים אם התגלה פער?</h2>
                        <p>
                            אם הדירה קטנה משמעותית ממה שהובטח, ייתכן שקמה עילה לתביעה בגין <strong>אי-התאמה או הפרת חוזה</strong> —
                            במיוחד ברכישה מקבלן, שם חלים כללי חוק המכר. הסעד יכול לכלול פיצוי כספי בגובה הפער. חשוב לפעול עם
                            תיעוד מסודר ובליווי משפטי.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                לבדיקת נכס לפני קנייה ראו <Link href="/blog/tabu-extract-guide" className="text-amber-600 font-semibold hover:underline">נסח טאבו: מה זה ואיך קוראים אותו</Link>,
                                ועל ליווי מלא — <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>.
                                רכשתם מקבלן וגיליתם פער? ראו <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline">ליקויי בנייה ואי-התאמות</Link>.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">שאלות נפוצות</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">קונים דירה? אל תסתמכו רק על המודעה</h3>
                                <p className="text-gray-300">נבדוק עבורכם את השטח וההגדרות לפני החתימה. פנו לייעוץ ראשוני.</p>
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

                    <div className="mt-8 flex flex-wrap gap-2">
                        {['שטח דירה', 'תקן 9.1', 'נדל"ן', 'רכישת דירה', 'בדיקת נכס'].map((tag, idx) => (
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
