import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'איחור במסירת דירה מקבלן 2026: כמה פיצוי מגיע לכם? | מריאטה פנחסי',
    description: 'הקבלן איחר במסירת הדירה? חוק המכר קובע פיצוי אוטומטי של 1.5-1.25 משכר דירה ראוי לכל חודש איחור, גם ללא הוכחת נזק. מדריך מלא: חישוב הפיצוי, 60 ימי הגרייס, ואיך תובעים.',
    keywords: 'איחור מסירת דירה, איחור במסירת דירה מקבלן, פיצוי איחור מסירה, חוק המכר דירות, תביעת קבלן, כמה פיצוי מגיע לי, דמי שכירות ראויים, עורך דין מקרקעין',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/late-apartment-delivery',
    },
    openGraph: {
        title: 'איחור במסירת דירה מקבלן 2026: כמה פיצוי מגיע לכם?',
        description: 'חוק המכר קובע פיצוי אוטומטי של 1.5-1.25 משכר דירה ראוי לכל חודש איחור, גם ללא הוכחת נזק. מדריך מלא לחישוב הפיצוי ולתביעה.',
        url: 'https://www.marietta-law.co.il/blog/late-apartment-delivery',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/construction_defects_tools.png',
            width: 1200,
            height: 630,
            alt: 'איחור במסירת דירה מקבלן: הזכויות שלכם ואיך למצות פיצויים | מריאטה פנחסי - עורכת דין',
        }],
    },
}

export default function LateApartmentDelivery() {
    const faqs = [
        {
            question: "האם מגיע פיצוי גם אם לא נגרם לי נזק כספי בפועל?",
            answer: "כן. הפיצוי לפי חוק המכר (דירות) הוא פיצוי מוסכם וקבוע מראש (\"פיצוי ליקווידציה\") ומגיע אוטומטית בגין עצם האיחור, ללא צורך להוכיח נזק ממשי או לשלם שכירות בפועל. זה יתרון משמעותי לרוכש - אין צורך בהליך הוכחה מורכב."
        },
        {
            question: "מתי מתחיל האיחור להיספר - ממועד המסירה בחוזה או ממועד אחר?",
            answer: "האיחור נספר ממועד המסירה החוזי (או המועד הדחוי אם הוסכם על דחייה בחוזה). לכך מתווספת תקופת גרייס של עד 60 יום שבה הקבלן פטור מפיצוי. מהיום ה-61 לאיחור ואילך, הפיצוי רץ ומצטבר על בסיס חודשי."
        },
        {
            question: "כמה זמן יש לי להגיש תביעה על איחור במסירה?",
            answer: "תקופת ההתיישנות הכללית היא 7 שנים ממועד המסירה בפועל. עם זאת, מומלץ לפעול מוקדם ככל האפשר - גם כדי לשמר ראיות וגם כדי לקבל את הפיצוי בלי לחכות שנים."
        },
        {
            question: "מה קורה אם הקבלן טוען ל'כוח עליון' כתירוץ לאיחור?",
            answer: "בתי המשפט בוחנים כל מקרה לגופו, אך הפסיקה נוטה שלא לקבל בקלות טענות כלליות של מזג אוויר, מחסור בעובדים או עיכובים בירוקרטיים כפטור מפיצוי. אירועים חריגים ובלתי צפויים באמת (כמו מלחמה) עשויים להיחשב שונה - אך הנטל להוכיח זאת מוטל על הקבלן."
        },
        {
            question: "האם ניתן לתבוע גם על איחור בפרויקט התחדשות עירונית (פינוי-בינוי)?",
            answer: "כן, גם בפרויקטים של פינוי-בינוי ותמ\"א 38 חלה חובת פיצוי על איחור במסירה, בכפוף לתנאי ההסכם הספציפי. מומלץ לבדוק את סעיפי הפיצוי בהסכם הפינוי-בינוי מראש, לפני החתימה."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "איחור במסירת דירה מקבלן 2026: כמה פיצוי מגיע לכם?",
                        "description": "חוק המכר קובע פיצוי אוטומטי של 1.5-1.25 משכר דירה ראוי לכל חודש איחור, גם ללא הוכחת נזק. מדריך מלא לחישוב הפיצוי ולתביעה.",
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
                        "datePublished": "2026-03-16",
                        "dateModified": "2026-07-05",
                        "image": "https://www.marietta-law.co.il/blog-images/construction_defects_tools.png",
                        "url": "https://www.marietta-law.co.il/blog/late-apartment-delivery",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/late-apartment-delivery"
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
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />
            <Header />
            <Breadcrumbs items={[
                { label: 'בלוג', href: '/blog' },
                { label: 'איחור במסירת דירה מקבלן' }
            ]} />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">ליקויי בנייה</span>
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
                        איחור במסירת דירה מקבלן 2026: כמה פיצוי מגיע לכם?
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        קניתם דירה על הנייר, ועכשיו הקבלן מאחר במסירה? אתם לא לבד — וחשוב שתדעו:
                        החוק לצידכם, והפיצוי מגיע לכם <strong>אוטומטית</strong>, גם בלי להוכיח נזק.
                        במדריך הזה נסביר בדיוק כמה כסף מגיע לכם, איך מחשבים ואיך תובעים.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            רכישת דירה מקבלן היא אחת ההחלטות הכלכליות הגדולות בחיים. כאשר הקבלן מפר
                            את הבטחתו ומאחר במסירת הדירה — הנזק הוא כפול: התמהמהות בכניסה לדירה
                            ובד"כ גם תשלום שכירות מיותר. חוק המכר (דירות) קובע פיצוי ברור וחד-משמעי.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. מהי "תקופת הגרייס" המותרת?</h2>
                        <p>
                            גם כשיש איחור, החוק מאפשר לקבלן <strong>תקופת איחור מוצדקת של עד 60 ימים</strong> ללא פיצוי.
                            מהיום ה-61 ואילך — הקבלן חייב לשלם לכם פיצוי חודשי. לכן, בדקו בחוזה שלכם
                            מה מועד המסירה המוסכם, ספרו 60 יום — ומיום ה-61 שעבר מתחיל השעון לרוץ.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. כמה פיצוי מגיע לי?</h2>
                        <p>
                            לפי תיקון 5 לחוק המכר (דירות), שיעור הפיצוי הוא:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-base">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-4 text-right">תקופת האיחור</th>
                                        <th className="p-4 text-right">שיעור הפיצוי החודשי</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 bg-amber-50">
                                        <td className="p-4">חודשים 1-8 (לאחר 60 ימי גרייס)</td>
                                        <td className="p-4 font-bold">1.5 × דמי שכירות ראויים</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4">מחודש 9 ואילך</td>
                                        <td className="p-4 font-bold">1.25 × דמי שכירות ראויים</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            "דמי שכירות ראויים" הם שכר הדירה שניתן לקבל בשוק עבור דירה דומה באותו אזור.
                            לדוגמה: אם שכר דירה ראוי הוא 5,000 ₪ לחודש — מגיע לכם 7,500 ₪ לחודש ב-8 החודשים הראשונים.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "שמרו כל מכתב ותקשורת עם הקבלן. לקבלנים יש נטייה לטעון ל'נסיבות שאינן בשליטתם'
                                (מלחמה, שביתות, מזג אוויר). תיעוד מדויק יקשה עליהם להתחמק מהפיצוי המגיע לכם."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. האם הקבלן יכול לפטור עצמו מהפיצוי בחוזה?</h2>
                        <p>
                            <strong>לא.</strong> סעיף בחוזה שמנסה להוציא את הקבלן מחבות פיצוי לפי חוק המכר
                            הוא בטל ומבוטל. אפילו אם חתמתם על סעיף כזה — הוא לא תקף.
                            זה אחד הנושאים שחשוב שעורך דין יבדוק בחוזה לפני החתימה.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. כיצד תובעים פיצוי?</h2>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'שלח מכתב התראה רשמי לקבלן (רצוי באמצעות עורך דין)',
                                'אסוף ראיות לאיחור: תמונות, התכתבויות, עדויות',
                                'בירור שכר דירה ראוי באמצעות שמאי או עורך דין',
                                'הגשת תביעה לבית משפט שלום (עד 2.5 מיליון ₪) או לבית משפט מחוזי',
                                'שקול גישור — לעיתים מהיר ויעיל יותר',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. האם כדאי לסרב לקבל את הדירה?</h2>
                        <p>
                            <strong>לא!</strong> סירוב לקבל את הדירה עלול לפגוע בזכאות שלכם לפיצויים.
                            קבלו את הדירה, חתמו על פרוטוקול מסירה המפרט את הליקויים שמצאתם —
                            והמשיכו לתביעת הפיצויים בנפרד.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. איחור לעומת ליקויי בנייה — שתי תביעות נפרדות</h2>
                        <p>
                            חשוב להבחין: הפיצוי על איחור במסירה הוא נפרד לגמרי מתביעה על <strong>ליקויי בנייה</strong> שהתגלו בדירה
                            (רטיבות, אי-התאמות למפרט וכו'). ניתן - ולעיתים כדאי - להגיש את שתי התביעות במקביל.
                            הרחבנו על כך במדריך <Link href="/blog/construction-defects-guide" className="text-amber-600 font-semibold hover:underline">ליקויי בנייה בדירה חדשה</Link>.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                לפני שרוכשים דירה מקבלן, כדאי להכיר את מלוא הליווי המשפטי בעמוד <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>,
                                ואת עלויות הליווי במדריך <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>.
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
                                <h3 className="text-2xl font-bold mb-2">הקבלן איחר במסירה?</h3>
                                <p className="text-gray-300">אל תוותרו על הפיצוי שמגיע לכם. פנו אלינו לייעוץ ראשוני.</p>
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
                        {['איחור מסירה', 'קבלן', 'חוק המכר', 'פיצויים', 'ליקויי בנייה', 'נדל"ן'].map((tag, idx) => (
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
