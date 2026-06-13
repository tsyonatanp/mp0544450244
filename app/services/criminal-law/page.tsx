import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaGavel, FaBalanceScale, FaUserSecret, FaLock, FaUserShield, FaPhone, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין פלילי במרכז | חקירות משטרה והגנה - מריאטה פנחסי',
    description: 'עורכת דין פלילי במרכז הארץ וגוש דן. ליווי בחקירות משטרה, ייצוג והגנה בבית המשפט, עבירות צווארון לבן, מעצרים, עבירות תעבורה וייצוג קטינים. זמינות לייעוץ לפני חקירה.',
    keywords: 'עורך דין פלילי, ייצוג בחקירת משטרה, הגנה פלילית, עבירות צווארון לבן, מעצר, זכות השתיקה, עבירות תעבורה, ייצוג קטינים, עורך דין פלילי מרכז, עורך דין פלילי גוש דן, עורך דין פלילי אור יהודה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/criminal-law',
    },
    openGraph: {
        title: 'עורך דין פלילי במרכז | חקירות משטרה והגנה - מריאטה פנחסי',
        description: 'ליווי בחקירות משטרה, הגנה בבית המשפט, עבירות צווארון לבן ומעצרים. במרכז הארץ וגוש דן.',
        url: 'https://www.marietta-law.co.il/services/criminal-law',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function CriminalLawPage() {

    const features = [
        {
            title: 'עבירות צווארון לבן',
            description: 'ייצוג בעבירות כלכליות, שוחד, מרמה והפרת אמונים, עם דגש על דיסקרטיות מלאה.',
            icon: <FaUserSecret className="text-2xl text-slate-700" />
        },
        {
            title: 'מעצרים ושחרור',
            description: 'ליווי מיידי בחקירות משטרה, דיוני הארכת מעצר וייצוג בבקשות שחרור בתנאים מגבילים.',
            icon: <FaLock className="text-2xl text-red-600" /> // Using alias if defined, or assume FaHandcuffs doesn't exist and use fallback
        },
        {
            title: 'עבירות סמים ואלימות',
            description: 'ניהול תיקי פשיעה חמורה, עבירות סמים, אלימות במשפחה ועבירות רכוש.',
            icon: <FaGavel className="text-2xl text-amber-600" />
        },
        {
            title: 'ייצוג קטינים ונוער',
            description: 'מומחיות מיוחדת בייצוג קטינים בבתי משפט לנוער, תוך ראייה שיקומית והגנה על עתיד הקטין.',
            icon: <FaUserShield className="text-2xl text-blue-600" />
        }
    ]

    // Handcuffs icon fallback just in case
    const FaHandcuffsIcon = () => <span className="text-2xl text-red-600 font-bold">⚠️</span>;

    const faqs = [
        {
            question: "זומנתי לחקירה במשטרה — מה לעשות?",
            answer: "לפני שאתם מתייצבים לחקירה, התייעצו עם עורך דין. יש לכם זכות חוקית להיוועץ בעורך דין לפני החקירה. זכרו: יש לכם זכות שתיקה (אך כדאי להבין מתי להפעיל אותה), וכל מה שתאמרו עלול לשמש כראיה. אל תיכנסו לחקירה 'על עיוור'."
        },
        {
            question: "האם כדאי לשתוק בחקירה?",
            answer: "זכות השתיקה היא זכות יסוד, אך הפעלתה היא החלטה אסטרטגית שתלויה בנסיבות. במקרים מסוימים שתיקה עשויה לשמש כחיזוק ראייתי נגדכם. דווקא בגלל זה חשוב להתייעץ עם עורך דין לפני החקירה, שיתאים את הקו להגנה הספציפית שלכם."
        },
        {
            question: "מה ההבדל בין כתב אישום לתיק שנסגר?",
            answer: "לא כל חקירה מסתיימת בכתב אישום. ניתן לפעול בשלב החקירה ובשלב ה'שימוע הפלילי' כדי לשכנע את התביעה לסגור את התיק או להעמיד באישום מופחת. עורך דין שמעורב מוקדם יכול להשפיע מהותית על התוצאה עוד לפני בית המשפט."
        },
        {
            question: "האם יישאר לי רישום פלילי?",
            answer: "תלוי בתוצאת ההליך. זיכוי או סגירת תיק בעילה מסוימת לא מותירים רישום פלילי. אחת המטרות המרכזיות של ההגנה היא לא רק זיכוי אלא גם מניעת הרשעה ורישום שילווה אתכם בעתיד (תעסוקה, רישיונות ועוד)."
        },
        {
            question: "האם אתם מייצגים בכל אזור המרכז?",
            answer: "כן. המשרד מלווה נחקרים ונאשמים בכל גוש דן והמרכז - אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה, תל אביב, רמת גן, פתח תקווה ועוד, בתחנות המשטרה ובבתי המשפט הרלוונטיים."
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
                        "name": "משפט פלילי - מריאטה פנחסי",
                        "description": "ייצוג בהליכים פליליים: חקירות משטרה, הגנה בבית משפט, עבירות כלכליות ותעבורה. ליווי מקצועי מהחקירה ועד לפסק הדין.",
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
                        "url": "https://www.marietta-law.co.il/services/criminal-law"
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
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
                        משפט פלילי וייצוג בבתי המשפט
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        כשחירותך עומדת למבחן, אין מקום לטעויות.
                        ייצוג משפטי אגרסיבי ומקצועי משלב החקירה הראשונה ועד לסגירת התיק.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">זמינות מיידית 24/7 במקרי חירום</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        הליך פלילי הוא אירוע משנה חיים. החלטות המתקבלות בשעות הראשונות של החקירה יכולות להכריע את גורל התיק כולו. לכן, ייעוץ לפני חקירה הוא קריטי.
                                    </p>
                                    <p>
                                        משרדנו מעניק מעטפת הגנה משפטית מקיפה לנחקרים ונאשמים.
                                        אנו נלחמים על כל ראיה, בודקים כל פרט ופועלים בנחישות לזיכוי מלא או למזעור הנזק למינימום האפשרי.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="mb-4">
                                            {feature.title === 'מעצרים ושחרור' ? <FaGavel className="text-2xl text-red-600" /> : feature.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white rounded-xl p-8 border border-slate-700">
                                <h3 className="text-xl font-bold text-amber-500 mb-4">כללי ברזל בחקירה</h3>
                                <ul className="space-y-4">
                                    {[
                                        'זכות השתיקה: יש לכם זכות לא להפליל את עצמכם.',
                                        'זכות ההיוועצות: דרשו בתוקף להיפגש עם עורך דין לפני תחילת החקירה.',
                                        'תיעוד: שימו לב אם החקירה מוקלטת או מצולמת.',
                                        'הבטחות שווא: אל תאמינו להבטחות של חוקרים ("תודה ותלך") ללא גיבוי.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">●</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* In-depth Content */}
                            <article className="prose max-w-none text-gray-600 space-y-4 mt-8 border-t border-gray-100 pt-8">
                                <h3 className="text-2xl font-bold text-gray-900">הגנה פלילית — למה כל רגע קובע</h3>
                                <p>
                                    בהליך פלילי, ההחלטות המתקבלות בשעות הראשונות — עוד בחדר החקירות — עשויות להכריע את גורל התיק
                                    כולו. לכן ייעוץ משפטי <strong>לפני</strong> החקירה הוא קריטי, ולא מותרות. אתם זכאים להיוועץ
                                    בעורך דין לפני שמתחילים לחקור אתכם, ומומלץ לממש זכות זו.
                                </p>
                                <p>
                                    הגנה מקצועית פועלת בכל שלב: ליווי בחקירה, ייצוג בדיוני מעצר, השפעה על שלב ההחלטה אם להגיש כתב
                                    אישום (כולל באמצעות שימוע פלילי), והגנה בבית המשפט. המטרה אינה רק זיכוי, אלא גם מניעת הרשעה
                                    ורישום פלילי שעלול ללוות אתכם שנים. הרחבנו במדריך <Link href="/blog/police-investigation-guide" className="text-amber-600 font-semibold hover:underline">חקירה במשטרה: זכויות הנחקר</Link>.
                                </p>
                            </article>

                            {/* FAQ Section for SEO */}
                            <div className="space-y-6 mt-12">
                                <h3 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h3>
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <FaBalanceScale className="text-red-600 flex-shrink-0" />
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">זקוקים לייעוץ דחוף?</h3>
                                    <p className="text-gray-600">אנחנו זמינים עבורכם</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="tel:054-4450244"
                                        className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl animate-pulse"
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

