import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaCalendar, FaUser, FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaGavel, FaFileSignature } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'הפרת חוזה: מתי מותר לבטל? | מריאטה פנחסי - עורכת דין',
    description: 'מדריך מעשי להפרת חוזה: מתי הפרה יסודית, איך מבטלים כדין, פיצוי מוסכם, חובת הקטנת נזק וטיפים לפני תביעה. מאת עורכת דין מריאטה פנחסי.',
    keywords: 'הפרת חוזה, ביטול חוזה, הפרה יסודית, פיצוי מוסכם, תביעת הפרת חוזה, עורכת דין חוזים, דיני חוזים',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/contract-breach',
    },
    openGraph: {
        title: 'הפרת חוזה: מתי מותר לבטל?',
        description: 'מדריך מעשי להפרת חוזה: מתי הפרה יסודית, איך מבטלים כדין, פיצוי מוסכם וחובת הקטנת נזק.',
        url: 'https://www.marietta-law.co.il/blog/contract-breach',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/contract_breach_pen.png',
            width: 1200,
            height: 630,
            alt: 'הפרת חוזה: מתי מותר לבטל?',
        }],
    },
}

export default function ContractBreach() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "הפרת חוזה: מתי מותר לבטל?",
                        "description": "מדריך מעשי להפרת חוזה: מתי הפרה יסודית, איך מבטלים כדין, פיצוי מוסכם, חובת הקטנת נזק וטיפים לפני תביעה.",
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
                        "datePublished": "2026-01-22",
                        "dateModified": "2026-09-06",
                        "image": "https://www.marietta-law.co.il/blog-images/contract_breach_pen.png",
                        "url": "https://www.marietta-law.co.il/blog/contract-breach",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/contract-breach"
                        }
                    })
                }}
            />
            <Header />
            <section className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-black text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        משפט אזרחי-מסחרי
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        הפרת חוזה: מתי מותר לבטל?
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            22 ינואר, 2026
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
                                &quot;חוזים יש לקיים&quot; הוא כלל יסוד במשפט הישראלי — אבל מה קורה כשהצד השני לא עומד בהתחייבויותיו? מתי איחור או אי־ביצוע נחשבים להפרה, ומתי מותר לבטל את ההסכם בלי להפוך אתם למפרים?
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaGavel className="text-amber-500" />
                                הפרה יסודית מול הפרה רגילה
                            </h2>
                            <p>
                                חוק החוזים (תרופות בשל הפרת חוזה) מבחין בין סוגי הפרות — וההבחנה קובעת אם מותר לבטל מיד או רק אחרי מתן הזדמנות לתיקון:
                            </p>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <strong className="text-gray-900 block mb-1">הפרה יסודית:</strong>
                                    הפרה שאדם סביר לא היה מתקשר בחוזה אילו ידע עליה מראש (למשל אי־תשלום מהותי, איחור קיצוני במסירה), או הפרה שהוגדרה בחוזה כ&quot;יסודית&quot;.
                                    <br />
                                    <strong>התוצאה:</strong> זכות ביטול מיידית (בכפוף להודעה כדין) + אפשרות לדרוש פיצויים, ובכלל זה לעיתים פיצוי מוסכם.
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <strong className="text-gray-900 block mb-1">הפרה שאינה יסודית:</strong>
                                    הפרה פחות חמורה — למשל איחור קל או ליקוי שניתן לתקן במהירות.
                                    <br />
                                    <strong>התוצאה:</strong> בדרך כלל יש לתת <strong>ארכה סבירה לקיום</strong> לפני ביטול. ביטול בלי ארכה עלול להיחשב בעצמו להפרה.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaFileSignature className="text-amber-500" />
                                איך מבטלים חוזה בצורה נכונה?
                            </h2>
                            <ol className="list-decimal list-inside space-y-3 marker:text-amber-600 marker:font-bold">
                                <li><strong>בדקו את החוזה:</strong> האם יש סעיף שמגדיר הפרות יסודיות? האם נקבע מנגנון הודעה / תיקון?</li>
                                <li><strong>תעדו את ההפרה:</strong> התכתבויות, איחורים, אי־תשלום, דוחות — תיעוד מסודר קריטי אם תגיעו לתביעה.</li>
                                <li><strong>שלחו הודעת ביטול בכתב:</strong> ברורה, מתוארכת, ומציינת את עילת הביטול. שמרו אישור מסירה.</li>
                                <li><strong>שקלו תרופות חלופיות:</strong> אכיפה, פיצויים בלי ביטול, או הסדר פשרה — לא תמיד ביטול הוא הצעד הנכון.</li>
                            </ol>
                            <div className="bg-red-50 border-r-4 border-red-500 p-6 my-8 rounded-l-xl">
                                <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
                                    <FaExclamationTriangle /> זהירות
                                </h3>
                                <p className="text-red-700">
                                    ביטול שלא כדין עלול להפוך אתכם למפרים ולחשוף אתכם לתביעה נגדית. לפני ש&quot;שוברים את הכלים&quot; — במיוחד בעסקאות נדל&quot;ן או חוזים מסחריים — מומלץ להתייעץ עם עורכת דין.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">פיצוי מוסכם ופיצויים נוספים</h2>
                            <p>
                                בחוזים רבים (כולל חוזי דירות ועסקאות מסחריות) מופיע סעיף <strong>פיצוי מוסכם</strong> — סכום שנקבע מראש. היתרון: לעיתים אין צורך להוכיח את מלוא הנזק בפועל. עם זאת, בית המשפט רשאי להפחית פיצוי מוסכם אם הוא בלתי סביר ביחס לנזק שהיה צפוי בעת כריתת החוזה.
                            </p>
                            <p>
                                מעבר לפיצוי המוסכם ניתן לתבוע גם נזקים נוספים (הוצאות, אובדן רווח סביר וכדומה), בכפוף לכללי ההוכחה ולהגבלות שבחוק.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">חובת הקטנת הנזק</h2>
                            <p>
                                גם אם הצד השני הפר — אסור לשבת בחיבוק ידיים. על הנפגע לפעול באופן סביר כדי לצמצם את הנזק (למשל חיפוש חלופה בשוק, עצירת הוצאות מיותרות). נזק שניתן היה למנוע בקלות עלול שלא להיות בר־פיצוי במלואו.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מתי כדאי לפנות לעורכת דין?</h2>
                            <ul className="space-y-3 my-6 list-none pr-0">
                                {[
                                    'כשמדובר בסכומים משמעותיים או בנכס (דירה, עסק, שכירות ארוכה)',
                                    'כשהחוזה מגדיר פיצוי מוסכם גבוה או סעיפי ביטול מורכבים',
                                    'כשיש חשש שביטול חד־צדדי ייחשב להפרה מצדכם',
                                    'כשהצד השני כבר שלח התראה / תביעה או מאיים בהליכים',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">שאלות נפוצות</h2>
                            <div className="space-y-4 my-6">
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">האם איחור במסירת דירה הוא תמיד הפרה יסודית?</h3>
                                    <p>
                                        לא בהכרח. תלוי באורך האיחור, בנוסח החוזה ובנסיבות. בעסקאות מקבלן קיימים גם מנגנוני פיצוי ייעודיים בחוק המכר — ראו את המדריך על{' '}
                                        <Link href="/blog/late-apartment-delivery" className="text-amber-600 font-semibold hover:underline">איחור במסירת דירה</Link>.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">האם אפשר לבטל בשיחת טלפון?</h3>
                                    <p>מומלץ תמיד לבטל בכתב ולשמור הוכחת מסירה. הודעה בעל־פה קשה להוכחה ומגדילה סיכון למחלוקת על עצם הביטול ועל מועדו.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">יש קשר לעסקאות נדל&quot;ן באור יהודה ובקעת אונו?</h3>
                                    <p>
                                        כן — מחלוקות על חוזי מכר, שכירות ומפרט נפוצות גם באזור. למידע מקומי:{' '}
                                        <Link href="/areas/or-yehuda" className="text-amber-600 font-semibold hover:underline">אור יהודה</Link>
                                        {' '}·{' '}
                                        <Link href="/areas/bikat-ono" className="text-amber-600 font-semibold hover:underline">בקעת אונו</Link>.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                                <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת</h3>
                                <ul className="list-none space-y-2 pr-0">
                                    <li>
                                        <Link href="/services/civil-commercial" className="text-amber-600 font-semibold hover:underline">שירות: משפט אזרחי־מסחרי וחוזים</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל&quot;ן</Link>
                                        {' '}·{' '}
                                        <Link href="/blog/construction-defects-guide" className="text-amber-600 font-semibold hover:underline">ליקויי בנייה</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="text-amber-600 font-semibold hover:underline">כל המדריכים בבלוג</Link>
                                        {' '}·{' '}
                                        <Link href="/#contact" className="text-amber-600 font-semibold hover:underline">צור קשר</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">הפרו איתכם הסכם?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                אל תרוצו לבטל לפני ייעוץ. ביטול שלא כדין עלול לסבך אתכם בתביעה נגדית. עורכת הדין מריאטה פנחסי תסייע להעריך את המצב ולבחור בתרופה הנכונה.
                            </p>
                            <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block">ייעוץ משפטי דחוף</a>
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
