import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaUser, FaTag, FaCheckCircle, FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'המדריך המלא לרכישת דירה באור יהודה ב-2025 | מריאטה פנחסי - עורכת דין',
    description: 'מדריך מעשי לרכישת דירה באור יהודה: שכונות, בדיקות תכנוניות, מס רכישה, דירה מקבלן, צ׳ק־ליסט לפני חתימה וקישורים לשירותי עורכת דין באזור.',
    keywords: 'רכישת דירה אור יהודה, נדלן אור יהודה, בית בפארק, מס רכישה, עורך דין מקרקעין, קניית דירה, חוזה מכר',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/buying-guide-or-yehuda-2025',
    },
    openGraph: {
        title: 'המדריך המלא לרכישת דירה באור יהודה ב-2025',
        description: 'מדריך מעשי לרכישת דירה באור יהודה: שכונות, בדיקות תכנוניות, מס רכישה, דירה מקבלן, צ׳ק־ליסט לפני חתימה וקישורים לשירותי עורכת דין באזור.',
        url: 'https://www.marietta-law.co.il/blog/buying-guide-or-yehuda-2025',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'המדריך המלא לרכישת דירה באור יהודה ב-2025 | מריאטה פנחסי - עורכת דין',
        }],
    },
}

export default function BuyingGuideOrYehuda2025() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "המדריך המלא לרכישת דירה באור יהודה ב-2025",
                        "description": "מדריך מעשי לרכישת דירה באור יהודה: שכונות, בדיקות תכנוניות, מס רכישה, דירה מקבלן, צ׳ק־ליסט לפני חתימה וקישורים לשירותי עורכת דין באזור.",
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
                        "datePublished": "2026-01-26",
                        "dateModified": "2026-09-06",
                        "image": "https://www.marietta-law.co.il/blog-images/real_estate_keys.png",
                        "url": "https://www.marietta-law.co.il/blog/buying-guide-or-yehuda-2025",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/buying-guide-or-yehuda-2025"
                        }
                    })
                }}
            />
            <Header />

            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">נדל&quot;ן</span>
                        <span className="flex items-center gap-2">
                            <FaCalendar />
                            26 ינואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser />
                            עורכת דין מריאטה פנחסי
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        המדריך המלא לרכישת דירה באור יהודה ב-2025
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        אור יהודה נמצאת בתנופת פיתוח אדירה עם שכונות חדשות כמו &quot;בית בפארק&quot; ופרויקטים של התחדשות עירונית.
                        מה חשוב לבדוק לפני שקונים דירה בעיר ואיך נמנעים מטעויות יקרות?
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            בשנים האחרונות הפכה אור יהודה לאחת הערים המבוקשות ביותר בבקעת אונו.
                            המיקום המרכזי, הנגישות לכבישים ראשיים והשקעה מסיבית בחינוך ובתשתיות מושכים משפחות רבות ומשקיעים.
                            אך כמו בכל עסקת נדל&quot;ן, גם כאן ישנם דגשים משפטיים ותכנוניים שחייבים להכיר.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. הכירו את השכונות החדשות והוותיקות</h2>
                        <p>
                            שכונת &quot;בית בפארק&quot; החדשה מציעה סטנדרט בנייה מודרני, אך חשוב לבדוק את מועדי המסירה ואת היטלי הפיתוח.
                            לעומת זאת, בשכונות הוותיקות המיועדות לפינוי-בינוי, יש לבדוק את הסטטוס המשפטי של הפרויקט והערות האזהרה בטאבו.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. בדיקת המצב התכנוני</h2>
                        <p>
                            לפני חתימה על זיכרון דברים (שמומלץ להימנע ממנו ככל האפשר), חובה לבדוק את תיק הבניין בעירייה.
                            האם יש חריגות בנייה בדירה? האם יש צווי הריסה? האם הייעוד הוא למגורים?
                            באור יהודה, כמו בערים מתפתחות אחרות, שינויי תב&quot;ע הם דבר נפוץ שחשוב להיות ערים לו.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. מס רכישה ומיסוי מקרקעין</h2>
                        <p>
                            תכנון מס נכון יכול לחסוך לכם עשרות ואף מאות אלפי שקלים.
                            בדקו זכאות לפטורים או הקלות במס רכישה (למשל לדירה יחידה, עולים חדשים או נכים).
                            עו&quot;ד מקרקעין יבצע עבורכם סימולציית מס מדויקת לפני ביצוע העסקה.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                &quot;אל תסתמכו על הבטחות בעל פה, לא של המתווך ולא של המוכר. הכל חייב להיות מעוגן בחוזה המכר ובבדיקות המקדימות.
                                בדיקה משפטית יסודית היא תעודת הביטוח שלכם לעסקה הגדולה בחייכם.&quot;
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. ליווי משפטי בעסקאות מקבלן</h2>
                        <p>
                            ברכישת דירה מקבלן (&quot;על הנייר&quot;), החוזה הוא ארוך ומורכב ולרוב נוטה לטובת הקבלן.
                            חשוב מאוד שעורך דין מטעמכם יעבור על המפרט הטכני, לוחות הזמנים, הביטחונות (ערבות חוק מכר) ומנגנון הצמדת המדד.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. בדיקות מקדימות שחובה לעשות</h2>
                        <p>
                            לפני חתימה על חוזה מכר באור יהודה כדאי לוודא לפחות את אלה:
                        </p>
                        <ul className="list-none space-y-3 pr-4 my-4">
                            <li className="flex items-start gap-3"><FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" /><span><strong>נסח טאבו / אישור זכויות עדכני</strong> — בעלות, משכנתאות, עיקולים, הערות אזהרה.</span></li>
                            <li className="flex items-start gap-3"><FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" /><span><strong>תיק בניין בעירייה</strong> — היתרים, חריגות, צווים, תב&quot;ע רלוונטית.</span></li>
                            <li className="flex items-start gap-3"><FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" /><span><strong>בדיקת חובות</strong> — ועד בית, ארנונה, מים; בדיקת התאמה בין הנכס לרישום.</span></li>
                            <li className="flex items-start gap-3"><FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" /><span><strong>בדק בית / שמאות</strong> — במיוחד בדירות יד שנייה ובפרויקטים ותיקים.</span></li>
                        </ul>
                        <p>
                            להרחבה על קריאת נסח טאבו ראו את המדריך{' '}
                            <Link href="/blog/tabu-extract-guide" className="text-amber-600 font-semibold hover:underline">נסח טאבו: איך קוראים אותו</Link>.
                            לחישוב עלויות מיסוי —{' '}
                            <Link href="/blog/purchase-tax-guide" className="text-amber-600 font-semibold hover:underline">מס רכישה 2026</Link>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. שכונות ופרויקטים — מה לבדוק משפטית</h2>
                        <p>
                            באור יהודה יש שילוב של בנייה חדשה והתחדשות עירונית. בפרויקטים חדשים בדקו ערבויות חוק מכר, לוחות זמנים, הצמדות מדד ומפרט טכני. בשכונות עם פוטנציאל פינוי־בינוי בדקו האם כבר נחתמו הסכמים עם יזם, מה סטטוס החתימות, ומה כתוב בהערות האזהרה — כדי שלא תופתעו ממגבלות על המכירה או מהתחייבויות קיימות.
                        </p>
                        <p>
                            למידע על זכויות דיירים בפרויקטים כאלה ראו{' '}
                            <Link href="/blog/urban-renewal-rights" className="text-amber-600 font-semibold hover:underline">פינוי־בינוי: זכויות הדייר</Link>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">שאלות נפוצות לרוכשים באור יהודה</h2>
                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">האם חובה לחתום על זיכרון דברים?</h3>
                                <p>לא. זיכרון דברים עלול לכבול אתכם לפני שבדיקות המקרקעין הסתיימו. עדיף להתקדם ישירות לחוזה מכר מלא בליווי עורכת דין.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">כמה עולה ליווי משפטי בעסקה?</h3>
                                <p>
                                    שכר הטרחה תלוי בסוג העסקה ובמורכבות. פירוט טווחים מקובלים במדריך{' '}
                                    <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לנדל&quot;ן</Link>.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">מה אם אחרי המסירה מתגלים ליקויים?</h3>
                                <p>
                                    בדירת קבלן חלות תקופות בדק ואחריות לפי חוק המכר. ראו{' '}
                                    <Link href="/blog/construction-defects-guide" className="text-amber-600 font-semibold hover:underline">מדריך ליקויי בנייה</Link>
                                    {' '}ואת עמוד השירות{' '}
                                    <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline">ליקויי בנייה</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת באזור ובשירותים</h3>
                            <ul className="list-none space-y-2 pr-0">
                                <li><Link href="/areas/or-yehuda" className="text-amber-600 font-semibold hover:underline">עמוד אזור: אור יהודה</Link></li>
                                <li><Link href="/areas/bikat-ono" className="text-amber-600 font-semibold hover:underline">עמוד אזור: בקעת אונו</Link></li>
                                <li><Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">שירות: עורך דין נדל&quot;ן ומקרקעין</Link></li>
                                <li><Link href="/blog" className="text-amber-600 font-semibold hover:underline">כל מדריכי הבלוג</Link> · <Link href="/#contact" className="text-amber-600 font-semibold hover:underline">צור קשר</Link></li>
                            </ul>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">מתכננים לקנות דירה באור יהודה?</h3>
                                <p className="text-gray-300">אל תקחו סיכונים מיותרים. פנו אלינו לייעוץ משפטי מקצועי.</p>
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

                    <div className="mt-8 flex flex-wrap gap-2">
                        {['אור יהודה', 'נדל&quot;ן', 'רכישת דירה', 'מיסוי מקרקעין', 'חוזה מכר'].map((tag, idx) => (
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
