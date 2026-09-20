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
                                    "text": "לרוב לא. מוכר של דירת מגורים מזכה שהיא דירתו היחידה, העומד בכל תנאי סעיף 49ב(2) לחוק (בין היתר החזקה של לפחות 18 חודשים, תושבות ישראל, והיעדר דירה נוספת — בכפוף לחריגים), עשוי להיות זכאי לפטור. הפטור מוגבל בתקרת שווי של 5,008,000 ש\"ח (לתקופה 1.1.2025–31.12.2027, סעיף 49א(א1)), ועל החלק שמעל התקרה מחושב מס. חשוב להדגיש: 'דירה יחידה' כשלעצמה אינה תנאי מספיק — יש לעמוד בכל תנאי הפטור."
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
                                    "text": "ברפורמת 2014 בוטל הפטור שהיה קיים אחת ל-4 שנים, ובמקומו נקבע חישוב לינארי מוטב לפי סעיף 48א(ב2). באופן כללי, בדירת מגורים מזכה שנרכשה לפני 1.1.2014, השבח מיוחס לתקופות ההחזקה שלפני ואחרי מועד זה, והשבח המיוחס לתקופה שלאחר 1.1.2014 חייב בדרך כלל בשיעור של 25%, בכפוף להוראות החוק. אין מדובר בחלוקה מכנית פשוטה לפי שנים — במקרים מסוימים (למשל דירה עם זכויות בנייה בלתי מנוצלות) נדרש פיצול השומה וחישוב מיוחד."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "האם אפשר להפחית את מס השבח?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "כן. ניתן להפחית את המס באמצעות ניכוי הוצאות מוכרות (הוצאות השבחה, שכר טרחת עו\"ד ותיווך, מס הרכישה ששולם, היטל השבחה — בכפוף לתנאי החוק), ניצול נכון של הפטורים, החישוב הלינארי, ותכנון עיתוי המכירה. לא כל הוצאה מוכרת אוטומטית, ולכן תכנון מקדים מול עורך דין למקרקעין הוא הדרך העיקרית לחסוך מס כדין."
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
                            זהו הפטור החשוב ביותר — וגם המקום שבו נעשות רוב הטעויות. תחילה חשוב להבחין בין שלושה מושגים
                            שאינם זהים: <strong>דירת מגורים</strong> (המבנה), <strong>דירת מגורים מזכה</strong> (דירה ששימשה
                            בפועל למגורים ועומדת בהגדרות החוק), ו<strong>דירה יחידה</strong> (מבחן בעלות לפי החוק, הכולל חריגים —
                            למשל החזקת חלק מסוים בדירה נוספת או דירה שהתקבלה בירושה). מוכר של דירת מגורים מזכה שהיא דירתו
                            היחידה <strong>עשוי להיות זכאי</strong> לפטור לפי סעיף 49ב(2), בכפוף לתנאים מצטברים:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'הדירה היא דירת המגורים היחידה של המוכר בישראל (עם חריגים מסוימים, למשל חלק קטן בדירה נוספת)',
                                'המוכר החזיק בדירה לפחות 18 חודשים מרגע שהפכה לדירת מגורים',
                                'המוכר לא ניצל פטור זה במכירת דירה אחרת ב-18 החודשים שקדמו',
                                'המוכר הוא תושב ישראל (תושב חוץ נדרש להוכיח שאין לו דירה במדינת מושבו)',
                                'הפטור מוגבל בתקרת שווי — 5,008,000 ש"ח לתקופה 1.1.2025–31.12.2027 (סעיף 49א(א1)); על החלק שמעל התקרה מחושב מס',
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
                            ובמקומו נקבע ה<strong>חישוב הלינארי המוטב</strong> לפי סעיף 48א(ב2) לחוק. באופן כללי, בדירת מגורים
                            מזכה שנרכשה לפני 1.1.2014, הליניאריות המוטבת מייחסת את השבח לתקופות ההחזקה שלפני ואחרי 1.1.2014,
                            והשבח המיוחס לתקופה שלאחר מועד זה חייב בדרך כלל בשיעור של <strong>25%</strong>, בכפוף להוראות החוק.
                            חשוב להדגיש שאין מדובר בחלוקה מכנית פשוטה של הרווח לפי שנים: במקרים מסוימים נדרש פיצול השומה בין
                            החישוב הלינארי המוטב לחישוב רגיל — למשל כאשר לדירה נלוות זכויות בנייה בלתי מנוצלות. כך, מי שמחזיק
                            בדירה שנים רבות עשוי לשלם מס נמוך משמעותית — גם אם אינו זכאי לפטור המלא.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">דירה עם זכויות בנייה — חישוב מיוחד (סעיף 49ז)</h2>
                        <p>
                            כאשר מחיר הדירה מושפע מ<strong>זכויות בנייה נוספות</strong> (למשל אפשרות להרחיב את הדירה או לבנות
                            יחידה נוספת), החוק קובע מנגנון חישוב מיוחד לפי <strong>סעיף 49ז</strong>. במצב כזה הפטור אינו חל
                            בהכרח על מלוא התמורה, ורשות המסים מפרסמת חישוב נפרד לחלק השווי המיוחס לזכויות הבנייה. זו אחת
                            הסיבות שדירה שנראית "רגילה" עלולה להניב חבות מס בלתי צפויה — ולכן חשוב לבדוק זאת מראש.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מכירת דירה שהתקבלה בירושה</h2>
                        <p>
                            למכירת דירה שהתקבלה בירושה יש מסלול פטור ייעודי לפי <strong>סעיף 49ב(5)</strong>, אך הוא מותנה
                            ב<strong>תנאים מצטברים</strong> שחייבים להתקיים <strong>כולם יחד</strong>:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'היורש הוא בן/בת זוג, צאצא, או בן זוג של צאצא של המוריש',
                                'המוריש החזיק ערב פטירתו בדירת מגורים אחת בלבד',
                                'אילו המוריש היה עדיין בחיים ומוכר את הדירה בעצמו — הוא היה זכאי לפטור',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            כשכל התנאים מתקיימים, מכירת הדירה עשויה להיות פטורה מבלי "לנצל" את הפטור האישי של היורש על דירתו
                            שלו. די בכך שאחד התנאים אינו מתקיים כדי לשלול את הפטור — ולכן זהו נושא רגיש המחייב בדיקה פרטנית
                            לפני המכירה. להרחבה: <Link href="/blog/inherited-property-sale" className="text-amber-600 font-semibold hover:underline">מכירת דירה שהתקבלה בירושה</Link>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">טבלת מצבים: מתי ייתכן פטור ממס שבח?</h2>
                        <p>
                            הטבלה נותנת כיוון כללי בלבד — כל מקרה נבדק לגופו מול הנתונים המעודכנים והוראות החוק:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-right border-collapse text-base">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-3 font-bold">מצב</th>
                                        <th className="p-3 font-bold">האם ייתכן פטור?</th>
                                        <th className="p-3 font-bold">מה בודקים</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['דירה יחידה', 'כן', 'תנאי סעיף 49ב(2)'],
                                        ['שתי דירות ומעלה', 'תלוי', 'מבנה הבעלות והחריגים'],
                                        ['דירה שהתקבלה בירושה', 'כן, בתנאים', 'תנאי סעיף 49ב(5)'],
                                        ['דירה שנרכשה לפני 2014', 'הקלה אפשרית', 'חישוב לינארי מוטב'],
                                        ['דירה עם זכויות בנייה', 'חישוב מיוחד', 'סעיף 49ז'],
                                        ['דירה מעל תקרת הפטור', 'לא בהכרח פטור מלא', 'תקרת הפטור וחישוב היתרה'],
                                        ['דירה שהושכרה', 'תלוי', 'פחת והוצאות מוכרות'],
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="p-3 font-semibold text-gray-900 border-b border-gray-200">{row[0]}</td>
                                            <td className="p-3 border-b border-gray-200">{row[1]}</td>
                                            <td className="p-3 border-b border-gray-200">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">איך מחשבים את השבח — ומה מפחית את המס</h2>
                        <p>
                            נוסחת הבסיס: <strong>שווי מכירה − שווי רכישה − הוצאות מוכרות = השבח</strong>. ככל שההוצאות המוכרות
                            גבוהות יותר, כך קטן הרווח החייב במס. בין ההוצאות שניתן לרוב לנכות:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'הוצאות השבחה של הדירה — לא כל שיפוץ מוכר אוטומטית; ההוצאה צריכה לעמוד בתנאי החוק, להיות קשורה להשבחת הנכס ומגובה בקבלות',
                                'שכר טרחת עורך דין בעסקאות הרכישה והמכירה',
                                'דמי תיווך ששולמו',
                                'מס הרכישה ששולם בעת רכישת הדירה',
                                'היטל השבחה או דמי היתר ששולמו (לרשות המסים טופס ייעודי לדיווח על תשלומים אלה ולבקשה לנכותם בשומת מס השבח)',
                                'הוצאות מימון — רק בתנאים ספציפיים שבחוק; עצם קיום המשכנתא אינו הופך את הריבית להוצאה מוכרת אוטומטית',
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

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">שימו לב: מס שבח אינו היטל השבחה</h3>
                            <p className="text-gray-700">
                                אלה שני תשלומים שונים לחלוטין. <strong>מס שבח</strong> הוא מס ארצי המשולם לרשות המסים על הרווח
                                ממכירת הנכס. <strong>היטל השבחה</strong> הוא תשלום לרשות המקומית (הוועדה המקומית) בגין עליית שווי
                                הנכס עקב אישור תוכנית, מתן הקלה או התרת שימוש חורג. עם זאת, היטל השבחה שכבר שולם עשוי להיחשב
                                הוצאה מוכרת בחישוב מס השבח.
                            </p>
                        </div>

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
