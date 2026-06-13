import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaCarCrash, FaUserMd, FaHardHat, FaWheelchair, FaNotesMedical, FaPhone, FaWhatsapp, FaMedkit } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין נזיקין וביטוח במרכז | תאונות ונכות - מריאטה פנחסי',
    description: 'עורכת דין נזיקין במרכז הארץ וגוש דן. תביעות תאונות דרכים, תאונות עבודה, רשלנות רפואית, ביטוח לאומי ונכות. מיצוי מלא של הפיצוי מול חברות הביטוח. ייעוץ ראשוני ללא התחייבות.',
    keywords: 'עורך דין נזיקין, תביעות נזיקין, עורך דין תאונות דרכים, תאונת עבודה, רשלנות רפואית, תביעת ביטוח, ביטוח לאומי, נכות, פיצויים, עורך דין נזיקין מרכז, עורך דין נזיקין גוש דן, נזקי גוף',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/torts',
    },
    openGraph: {
        title: 'עורך דין נזיקין וביטוח במרכז | תאונות ונכות - מריאטה פנחסי',
        description: 'תביעות תאונות דרכים, תאונות עבודה, רשלנות רפואית וביטוח לאומי. מיצוי מלא של הפיצוי במרכז הארץ וגוש דן.',
        url: 'https://www.marietta-law.co.il/services/torts',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function TortsPage() {

    const features = [
        {
            title: 'תאונות דרכים',
            description: 'טיפול מקיף החל מהדיווח הראשוני, דרך איסוף התיעוד הרפואי ועד קבלת הפיצוי המקסימלי מחברת הביטוח.',
            icon: <FaCarCrash className="text-2xl text-red-500" />
        },
        {
            title: 'תאונות עבודה',
            description: 'מיצוי זכויותיכם מול המוסד לביטוח לאומי ומול המעסיק במקרה של רשלנות.',
            icon: <FaHardHat className="text-2xl text-amber-500" />
        },
        {
            title: 'רשלנות רפואית',
            description: 'בדיקת התיק עם מומחים רפואיים מהשורה הראשונה והגשת תביעה במקרים של נזק כתוצאה מטיפול רפואי לקוי.',
            icon: <FaUserMd className="text-2xl text-blue-500" />
        },
        {
            title: 'ביטוח לאומי ונכות',
            description: 'ליווי וייצוג בוועדות רפואיות לקביעת אחוזי נכות וקבלת קצבאות.',
            icon: <FaWheelchair className="text-2xl text-green-500" />
        }
    ]

    const faqs = [
        {
            question: "כמה זמן יש לי להגיש תביעת נזיקין?",
            answer: "תקופת ההתיישנות בתביעות נזיקין היא בדרך כלל 7 שנים מיום האירוע. בתאונות דרכים גם כן 7 שנים, ובמקרה של קטינים המניין מתחיל מגיל 18. חשוב לא להמתין - ככל שפונים מוקדם יותר, קל יותר לאסוף ראיות ותיעוד רפואי."
        },
        {
            question: "כמה עולה עורך דין נזיקין?",
            answer: "ברוב תביעות הנזיקין ונזקי הגוף שכר הטרחה הוא באחוזים מהפיצוי שמתקבל בפועל ('no win, no fee') - כלומר אתם לא משלמים מראש, ועורך הדין מקבל את שכרו רק אם זכיתם בפיצוי. כך האינטרסים מיושרים והסיכון שלכם מינימלי."
        },
        {
            question: "מה ההבדל בין תביעה מול ביטוח לאומי לתביעה מול חברת ביטוח?",
            answer: "אלה מסלולים נפרדים שלעיתים פועלים במקביל. הביטוח הלאומי מעניק קצבאות וגמלאות (למשל בתאונת עבודה או נכות), בעוד תביעה אזרחית מול חברת ביטוח או מזיק נועדה לפצות על מלוא הנזק (כאב וסבל, הפסדי השתכרות ועוד). מיצוי נכון של שני המסלולים יחד הוא קריטי."
        },
        {
            question: "מה לא כדאי לעשות אחרי תאונה?",
            answer: "אל תחתמו על שום מסמך או הצהרה של חברת הביטוח לפני התייעצות עם עורך דין, אל תוותרו על תיעוד רפואי, ואל תקבלו הצעת פשרה ראשונה ומהירה - לרוב היא נמוכה משמעותית מהמגיע לכם. תעדו הכל ופנו לייעוץ בהקדם."
        },
        {
            question: "האם אתם מייצגים נפגעים בכל אזור המרכז?",
            answer: "כן. המשרד מייצג נפגעים בתביעות נזיקין בכל גוש דן והמרכז - אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה, תל אביב, רמת גן, פתח תקווה ועוד, מול חברות הביטוח, המוסד לביטוח לאומי ובבתי המשפט."
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
                        "name": "נזיקין וביטוח - מריאטה פנחסי",
                        "description": "תביעות נזיקין, תאונות דרכים, רשלנות רפואית ותביעות ביטוח. משרד עו\"ד מריאטה פנחסי מייצג נפגעים ומוודא מיצוי מלא של הזכויות.",
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
                        "url": "https://www.marietta-law.co.il/services/torts"
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
            <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-amber-500 bg-clip-text text-transparent">
                        נזיקין, תאונות וביטוח לאומי
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        נפצעתם? מגיע לכם פיצוי. אנו נילחם מול חברות הביטוח והבירוקרטיה כדי שתקבלו את כל מה שמגיע לכם, עד השקל האחרון.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">אל תתמודדו לבד מול חברות הביטוח</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        לאחר פציעה או תאונה, אתם צריכים להתמקד בהחלמה ושיקום. ההתמודדות מול חברות הביטוח והמוסד לביטוח לאומי היא מתישה, בירוקרטית ולעיתים קרובות מתסכלת.
                                    </p>
                                    <p>
                                        חברות הביטוח מעסיקות סוללות של עורכי דין שמטרתם למזער את הפיצוי שלכם. לכן, חשוב שיהיה לצידכם עורך דין מנוסה שמכיר את המערכת מבפנים ויודע כיצד למקסם את סכום הפיצוי.
                                        אנו מלווים אתכם יד ביד, החל משלב איסוף המסמכים הרפואיים ועד לייצוג בוועדות ובבית המשפט.
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

                            <div className="bg-red-50 rounded-xl p-8 border border-red-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">חשוב לדעת ברגעים הראשונים</h3>
                                <ul className="space-y-3">
                                    {[
                                        'תיעוד מלא: צלמו את מקום התאונה, הנזקים והפציעות.',
                                        'פרטי עדים: קחו שמות וטלפונים של עדים לאירוע.',
                                        'טיפול רפואי: פנו למיון או לקופת חולים באופן מיידי.',
                                        'אל תחתמו: אל תחתמו על שום מסמך של חברת הביטוח ללא התייעצות.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                                            <FaNotesMedical className="text-red-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* In-depth Content */}
                            <article className="prose max-w-none text-gray-600 space-y-4 mt-8 border-t border-gray-100 pt-8">
                                <h3 className="text-2xl font-bold text-gray-900">מיצוי זכויות בנזיקין — מה שחשוב להבין</h3>
                                <p>
                                    דיני הנזיקין נועדו להחזיר את הנפגע, ככל הניתן, למצב שבו היה אלמלא הפגיעה — באמצעות פיצוי כספי.
                                    הפיצוי מורכב מרכיבים רבים: כאב וסבל, הפסדי השתכרות בעבר ובעתיד, הוצאות רפואיות, עזרת צד ג' ועוד.
                                    חברות הביטוח מנוסות במזעור הסכומים — ולכן ייצוג מקצועי עושה הבדל אמיתי בתוצאה.
                                </p>
                                <p>
                                    <strong>תאונות דרכים</strong> מתנהלות לפי חוק הפיצויים לנפגעי תאונות דרכים (הפלת"ד), שמקנה פיצוי
                                    גם ללא הוכחת אשם. <strong>תאונות עבודה</strong> מצריכות מיצוי מקביל מול הביטוח הלאומי ולעיתים גם
                                    תביעה אזרחית מול המעסיק. ב<strong>רשלנות רפואית</strong> נדרשת חוות דעת של מומחה רפואי כבסיס לתביעה.
                                </p>
                                <p>
                                    נפגעתם בתאונת עבודה? כדאי לקרוא את המדריך ל<Link href="/blog/work-accident-rights" className="text-amber-600 font-semibold hover:underline">מיצוי זכויות בתאונת עבודה</Link>.
                                    בכל מקרה — אל תוותרו על זכויותיכם לפני בדיקה משפטית.
                                </p>
                            </article>

                            {/* FAQ Section for SEO */}
                            <div className="space-y-6 mt-12">
                                <h3 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h3>
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <FaMedkit className="text-red-500 flex-shrink-0" />
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">נפגעתם? בדקו זכאותכם לפיצוי</h3>
                                    <p className="text-gray-600">ייעוץ ראשוני ללא התחייבות</p>
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

