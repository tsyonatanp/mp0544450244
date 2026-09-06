import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaCalendar, FaUser, FaArrowRight, FaFileInvoiceDollar, FaCheckCircle, FaExclamationTriangle, FaClock } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה? | מריאטה פנחסי - עורכת דין',
    description: 'מדריך מעשי להפחתת ארנונה לעסקים: בדיקת סיווג ושטח, מועדי השגה וערר, פטור לנכס ריק, וטיפים לעסקים באור יהודה ובקעת אונו. מאת עורכת דין מריאטה פנחסי.',
    keywords: 'ארנונה, השגה על ארנונה, הפחתת ארנונה, ארנונה לעסקים, ערר ארנונה, חיוב ארנונה שגוי, עורכת דין ארנונה, ארנונה אור יהודה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/arnona-discounts',
    },
    openGraph: {
        title: 'ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?',
        description: 'מדריך מעשי להפחתת ארנונה לעסקים: בדיקת סיווג ושטח, מועדי השגה וערר, וטיפים לעסקים באור יהודה ובקעת אונו.',
        url: 'https://www.marietta-law.co.il/blog/arnona-discounts',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/arnona_tax_calc.png',
            width: 1200,
            height: 630,
            alt: 'ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?',
        }],
    },
}

export default function ArnonaDiscounts() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?",
                        "description": "מדריך מעשי להפחתת ארנונה לעסקים: בדיקת סיווג ושטח, מועדי השגה וערר, פטור לנכס ריק, וטיפים לעסקים באור יהודה ובקעת אונו.",
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
                        "datePublished": "2026-01-25",
                        "dateModified": "2026-09-06",
                        "image": "https://www.marietta-law.co.il/blog-images/arnona_tax_calc.png",
                        "url": "https://www.marietta-law.co.il/blog/arnona-discounts",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/arnona-discounts"
                        }
                    })
                }}
            />
            <Header />
            <section className="relative bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        משפט מנהלי
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            25 ינואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser className="text-amber-500" />
                            מאת: עורכת דין מריאטה פנחסי
                        </span>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                        <div className="prose max-w-none prose-lg text-gray-700">
                            <p className="lead text-xl font-medium text-gray-900 mb-8 border-r-4 border-amber-500 pr-4">
                                חיוב הארנונה הוא אחת ההוצאות הכבדות ביותר לכל עסק. טעויות בחישוב — בסיווג, בשטח או בפטורים — נפוצות מאוד, וחלון הזמן להשגה קצר. המדריך הזה מסביר איך לבדוק את החיוב ומה עושים כשמוצאים טעות.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">איך מחושבת ארנונה לעסק?</h2>
                            <p>
                                הרשות המקומית מחשבת ארנונה לפי שלושה מרכיבים עיקריים: <strong>שטח הנכס</strong> (במ&quot;ר), <strong>סוג השימוש</strong> (משרדים, מסחר, תעשייה, מלאכה, אחסנה ועוד) ו<strong>אזור התעריף</strong> בעיר. כל שינוי באחד מהם יכול לשנות את החיוב בעשרות אחוזים. לכן חשוב להשוות את הודעת החיוב השנתית למצב בפועל בנכס — ולא להסתמך רק על החיוב של השנה שעברה.
                            </p>
                            <p>
                                בעסקים באור יהודה, יהוד-מונוסון ויתר יישובי בקעת אונו, נפוץ לראות חיובים לפי סיווג &quot;משרדים&quot; גם כשחלק מהשטח משמש לאחסנה או למלאכה. בדיקה כזו היא נקודת התחלה טובה לפני שפונים להשגה.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">הטעויות הנפוצות בחיוב הארנונה</h2>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>מדידה שגויה:</strong> הכללת שטחים שלא אמורים להיכלל בתעריף המלא — למשל שטחים משותפים מסוימים, מרפסות או שטחים שגובהם נמוך מהתקן — או מדידה שאינה תואמת את המצב בפועל.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>סיווג שגוי:</strong> חיוב לפי תעריף &quot;משרדים&quot; או &quot;מסחר&quot; יקר במקום &quot;תעשייה&quot;, &quot;מלאכה&quot; או &quot;אחסנה&quot;. גם חלוקה פנימית נכונה בין שימושים באותו נכס יכולה להפחית את החיוב.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>נכס ריק או לא ראוי לשימוש:</strong> אי מתן פטור או הנחה לנכס שאינו בשימוש, או לנכס שאינו ראוי לשימוש לפי התנאים שקובעת הרשות.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>הנחות ופטורים שלא הוחלו:</strong> עסקים קטנים, עמותות או מצבים מיוחדים עשויים להיות זכאים להנחות — אם לא הוגשה בקשה במועד, החיוב נשאר מלא.</span>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaClock className="text-amber-500" />
                                תהליך ההשגה ולוחות הזמנים
                            </h2>
                            <p>
                                אם קיבלתם חיוב ארנונה שגוי, יש לכם <strong>חלון זמן קצר</strong> לפעול. ככלל, ניתן להגיש <strong>השגה</strong> למנהל הארנונה בתוך <strong>90 יום</strong> מקבלת הודעת התשלום השנתית (או ממועד אחר שקובע החוק/הודעת הרשות — בדקו את התאריך על גבי ההודעה).
                            </p>
                            <p>
                                בהשגה יש לפרט את הטענות העובדתיות והמשפטיות, ולצרף מסמכים תומכים: תוכניות, מדידות נגדיות, חוזה שכירות, תיעוד שימוש בפועל, או חוות דעת מקצועית במקרים מורכבים. אם ההשגה נדחית (או לא נענית במועד), ניתן להגיש <strong>ערר</strong> לוועדת הערר לענייני ארנונה, ובמקרים מתאימים — עתירה מנהלית לבית המשפט.
                            </p>
                            <div className="bg-amber-50 border-r-4 border-amber-500 p-6 my-8 rounded-l-xl">
                                <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    <FaExclamationTriangle /> חשוב לדעת
                                </h3>
                                <p className="text-amber-900">
                                    הגשת השגה אינה פוטרת אוטומטית מתשלום. בדרך כלל יש לשלם את הסכום שאינו שנוי במחלוקת, ולעיתים להפקיד או להסדיר את החלק שבמחלוקת לפי הנחיות הרשות — כדי להימנע מקנסות וריבית. עורכת דין תוכל לכוון אתכם לגבי הסדר הנכון במקרה שלכם.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">צ׳ק־ליסט לבדיקה עצמית לפני השגה</h2>
                            <ul className="space-y-3 my-6 list-none pr-0">
                                {[
                                    'השוו את השטח בחיוב למדידה / תוכנית / חוזה השכירות',
                                    'בדקו אם הסיווג תואם את השימוש בפועל בכל חלק בנכס',
                                    'ודאו שפטורים והנחות שאתם זכאים להם מופיעים בחיוב',
                                    'סמנו את מועד 90 הימים להשגה ביומן',
                                    'אספו תיעוד: תמונות, חוזים, חשבוניות שיפוץ, פניות קודמות לרשות',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">שאלות נפוצות על ארנונה לעסקים</h2>
                            <div className="space-y-4 my-6">
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">האם אפשר להגיש השגה על חיובים משנים קודמות?</h3>
                                    <p>ברוב המקרים ההשגה מוגבלת לחיוב השנתי הנוכחי ולמועדים הקבועים בחוק. יש מצבים חריגים (טעות מהותית, גילוי מאוחר) שבהם אפשר לבחון מסלולים נוספים — אך לא כדאי להמתין: כל שנה שעוברת מקשה על תיקון רטרואקטיבי.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">מתי כדאי להזמין מדידה מקצועית?</h3>
                                    <p>כשיש פער משמעותי בין השטח בחיוב לבין מה שאתם רואים בנכס, או כשהרשות כוללת שטחים שאתם סבורים שאינם חייבים. מדידה מסודרת מחזקת את ההשגה ומונעת ויכוח &quot;מילה מול מילה&quot;.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">העסק שלי באור יהודה / בקעת אונו — יש ייחוד מקומי?</h3>
                                    <p>
                                        כל רשות מפרסמת צו ארנונה ותעריפים משלה. מומלץ לבדוק את צו הארנונה העדכני של הרשות שבה נמצא הנכס, ולוודא שהסיווג והאזור תואמים. למידע על ליווי משפטי באזור ראו{' '}
                                        <Link href="/areas/or-yehuda" className="text-amber-600 font-semibold hover:underline">עמוד אור יהודה</Link>
                                        {' '}ו{' '}
                                        <Link href="/areas/bikat-ono" className="text-amber-600 font-semibold hover:underline">עמוד בקעת אונו</Link>.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                                <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת וקישורים שימושיים</h3>
                                <ul className="list-none space-y-2 pr-0">
                                    <li>
                                        <Link href="/services/administrative-law" className="text-amber-600 font-semibold hover:underline">עמוד שירות: משפט מנהלי וארנונה</Link>
                                        {' '}— ליווי בהשגות, עררים ועתירות מנהליות
                                    </li>
                                    <li>
                                        <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל&quot;ן ומקרקעין</Link>
                                        {' '}— כשסוגיית הארנונה קשורה לעסקת נכס או לשימוש בנכס
                                    </li>
                                    <li>
                                        <Link href="/blog/purchase-tax-guide" className="text-amber-600 font-semibold hover:underline">מדריך מס רכישה</Link>
                                        {' '}·{' '}
                                        <Link href="/blog" className="text-amber-600 font-semibold hover:underline">כל מדריכי הבלוג</Link>
                                    </li>
                                    <li>
                                        <Link href="/#contact" className="text-amber-600 font-semibold hover:underline">צור קשר</Link>
                                        {' '}לייעוץ ראשוני
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-slate-800 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">משלמים יותר מדי ארנונה?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                בדיקה מקצועית של חיובי הארנונה יכולה לחסוך לעסק סכומים משמעותיים לאורך זמן. עורכת הדין מריאטה פנחסי תסייע לבחון את החיוב ולהגיש השגה במועד.
                            </p>
                            <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block">בדיקת חיוב הארנונה</a>
                        </div>
                    </article>
                    <div className="mt-8 text-center">
                        <Link href="/blog" className="text-gray-600 hover:text-amber-600 font-medium inline-flex items-center gap-2 transition-colors">
                            <FaArrowRight /> חזרה לבלוג
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
