import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaLandmark, FaCity, FaFileAlt, FaBalanceScale, FaPhone, FaWhatsapp, FaUniversity } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין מנהלי ותכנון ובנייה במרכז | ארנונה ועתירות - מריאטה פנחסי',
    description: 'עורכת דין למשפט מנהלי במרכז הארץ וגוש דן. עתירות מנהליות, ועדות תכנון ובנייה, ערעורי ארנונה והשגות, רישוי עסקים, מכרזים והליכים מול רשויות מקומיות.',
    keywords: 'עורך דין מנהלי, עתירה מנהלית, ערעור ארנונה, השגת ארנונה, תכנון ובנייה, התנגדות לבנייה, רישוי עסקים, מכרזים ציבוריים, צו הריסה, עורך דין מנהלי מרכז, עורך דין מנהלי גוש דן',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/administrative-law',
    },
    openGraph: {
        title: 'עורך דין מנהלי ותכנון ובנייה במרכז | ארנונה ועתירות - מריאטה פנחסי',
        description: 'עתירות מנהליות, ועדות תכנון ובנייה, ערעורי ארנונה, רישוי עסקים והליכים מול רשויות. במרכז הארץ וגוש דן.',
        url: 'https://www.marietta-law.co.il/services/administrative-law',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function AdministrativeLawPage() {

    const features = [
        {
            title: 'עתירות מנהליות',
            description: 'הגשת עתירות כנגד החלטות של רשויות המדינה, עיריות וגופים ציבוריים שפעלו בחוסר סבירות.',
            icon: <FaLandmark className="text-2xl text-slate-600" />
        },
        {
            title: 'מכרזים ציבוריים',
            description: 'ליווי משפטי בהליכי מכרז, הגשת הצעות, תקיפת תוצאות מכרז וייצוג בוועדות מכרזים.',
            icon: <FaFileAlt className="text-2xl text-amber-600" />
        },
        {
            title: 'רשויות מקומיות',
            description: 'הפחתת חיובי ארנונה, היטלי פיתוח, אגרות והתמודדות מול דרישות תשלום של העירייה.',
            icon: <FaCity className="text-2xl text-blue-600" />
        },
        {
            title: 'דיני תכנון ובנייה',
            description: 'ייצוג בהתנגדויות לתוכניות בנייה, עררים על היתרי בנייה וטיפול בצווי הריסה מנהליים ושיפוטיים.',
            icon: <FaUniversity className="text-2xl text-green-600" />
        }
    ]

    const faqs = [
        {
            question: "איך מגישים השגה על ארנונה?",
            answer: "ניתן להגיש השגה למנהל הארנונה בעירייה תוך 90 יום מקבלת דרישת התשלום השנתית, בטענות כמו טעות בגודל הנכס, סיווג שגוי או זהות המחזיק. אם ההשגה נדחית ניתן לערור לוועדת ערר ואף לבית המשפט. טעויות בחישוב ארנונה נפוצות מאוד וכדאי לבדוק."
        },
        {
            question: "מה זה עתירה מנהלית ומתי מגישים אותה?",
            answer: "עתירה מנהלית היא הליך משפטי לתקיפת החלטה של רשות ציבורית (עירייה, ועדת תכנון, משרד ממשלתי) שפעלה בחוסר סבירות, בחוסר סמכות או תוך פגיעה בזכויות. יש להגישה בדרך כלל ללא שיהוי - לרוב תוך 45 יום מההחלטה - ולכן חשוב לפעול מהר."
        },
        {
            question: "קיבלתי צו הריסה — מה עושים?",
            answer: "צו הריסה (מנהלי או שיפוטי) דורש תגובה משפטית מהירה, שכן יש מועדים קצרים להגשת בקשות לעיכוב או ביטול. ניתן לעיתים להכשיר את הבנייה בדיעבד או להשיג ארכות. אל תתעלמו מהצו - פנו מיד לייעוץ משפטי."
        },
        {
            question: "אפשר להתנגד לבנייה של שכן?",
            answer: "כן. כאשר מתפרסמת בקשה להיתר בנייה או תוכנית שעלולה לפגוע בכם (הצללה, פגיעה בפרטיות, ירידת ערך), ניתן להגיש התנגדות לוועדה המקומית במועד הקבוע, ובהמשך ערר לוועדת הערר המחוזית. ליווי משפטי מגדיל את סיכויי ההתנגדות."
        },
        {
            question: "האם אתם מטפלים מול כל הרשויות במרכז?",
            answer: "כן. המשרד מייצג מול רשויות מקומיות וועדות תכנון בכל גוש דן והמרכז - אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה, תל אביב, רמת גן, פתח תקווה ועוד, ובבתי המשפט לעניינים מנהליים."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "משפט מנהלי ותכנון ובנייה - מריאטה פנחסי",
                        "description": "ייצוג בהליכים מנהליים, ועדות תכנון ובנייה, ערעורי ארנונה, רישוי עסקים והליכים מול רשויות מקומיות.",
                        "provider": {
                            "@type": "Person",
                            "name": "מריאטה פנחסי",
                            "jobTitle": "עורכת דין ונוטריון"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "אור יהודה" },
                            { "@type": "City", "name": "קריית אונו" },
                            { "@type": "City", "name": "יהוד-מונוסון" },
                            { "@type": "City", "name": "גני תקווה" },
                            { "@type": "City", "name": "תל אביב" },
                            { "@type": "City", "name": "רמת גן" },
                            { "@type": "City", "name": "פתח תקווה" },
                            { "@type": "AdministrativeArea", "name": "גוש דן ומרכז הארץ" }
                        ],
                        "url": "https://www.marietta-law.co.il/services/administrative-law"
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

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        משפט מנהלי ורשויות מקומיות
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        גם מול הגופים החזקים ביותר, יש לכם זכויות.
                        אנו מומחים בהתמודדות מול הרשויות, ביטול החלטות שגויות והגנה על האזרח הקטן.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Right Column - Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">כשצריכים להילחם בבירוקרטיה</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        התמודדות מול רשויות המדינה והשלטון המקומי יכולה להיות מתסכלת ומתישה.
                                        החלטות שרירותיות, סחבת אינסופית ודרישות תשלום מופרזות הן מנת חלקם של אזרחים ועסקים רבים.
                                    </p>
                                    <p>
                                        המשפט המנהלי מעניק לנו את הכלים לתקוף החלטות אלו.
                                        משרדנו יודע כיצד לנווט במסדרונות הבירוקרטיה, להגיש עתירות ממוקדות ולהביא לביטול או לשינוי של החלטות פוגעניות.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">תחומי טיפול נפוצים</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'רישוי עסקים',
                                        'ארנונה',
                                        'משרד הפנים',
                                        'משרד התחבורה',
                                        'ועדות ערר',
                                        'הפקעות מקרקעין'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* In-depth Content */}
                            <article className="prose max-w-none text-gray-600 space-y-4 mt-8 border-t border-gray-100 pt-8">
                                <h3 className="text-2xl font-bold text-gray-900">משפט מנהלי — להחזיר את הכוח לאזרח</h3>
                                <p>
                                    מול רשויות המדינה והשלטון המקומי, לאזרח ולעסק יש זכויות — וגם כלים לתקוף החלטות שגויות.
                                    המשפט המנהלי מאפשר לבטל החלטות שהתקבלו בחוסר סבירות, בחוסר סמכות או תוך פגיעה בזכויות, באמצעות
                                    עתירות מנהליות, השגות ועררים.
                                </p>
                                <p>
                                    <strong>ארנונה:</strong> טעויות בחיוב ארנונה נפוצות מאוד — בגודל הנכס, בסיווג או בזהות המחזיק.
                                    הגשת השגה במועד יכולה לחסוך לכם סכומים נכבדים. הרחבנו במדריך <Link href="/blog/arnona-discounts" className="text-amber-600 font-semibold hover:underline">ארנונה לעסקים: איך להפחית חיובים</Link>.
                                </p>
                                <p>
                                    <strong>תכנון ובנייה:</strong> בין אם אתם מתנגדים לבנייה פוגענית של שכן, מתמודדים עם צו הריסה
                                    או מבקשים היתר — המועדים קצרים והליווי המשפטי קריטי. אנו פועלים במהירות ובמיקוד מול הוועדות והרשויות.
                                </p>
                            </article>

                            {/* FAQ Section for SEO */}
                            <div className="space-y-6 mt-12">
                                <h3 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h3>
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <FaBalanceScale className="text-amber-500 flex-shrink-0" />
                                            {faq.question}
                                        </h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Left Column - Form & Contact */}
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">נתקלתם בחומה בירוקרטית?</h3>
                                    <p className="text-gray-600">אנחנו נשבור אותה עבורכם</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="tel:054-4450244"
                                        className="flex items-center justify-center gap-3 w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <FaPhone />
                                        054-4450244
                                    </a>

                                    <a
                                        href="https://wa.me/972544450244"
                                        className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        הודעה בוואטסאפ
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

