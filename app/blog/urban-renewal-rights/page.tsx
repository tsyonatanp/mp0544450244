import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone, FaExclamationTriangle } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'פינוי-בינוי: כל מה שדייר צריך לדעת על הזכויות שלו | מריאטה פנחסי - עורכת דין',
    description: 'הציעו לכם פינוי-בינוי? לפני שחותמים — חשוב לדעת מה מגיע לכם: מה הדירה החדשה, דמי שכירות לתקופת הבנייה, ערבויות, ואיך מתמודדים עם יזמים.',
    keywords: 'פינוי בינוי, התחדשות עירונית, זכויות דיירים, תמא 38, יזם פינוי בינוי, ערבות בנקאית, עורך דין פינוי בינוי',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/urban-renewal-rights',
    },
    openGraph: {
        title: 'פינוי-בינוי: כל מה שדייר צריך לדעת על הזכויות שלו',
        description: 'הציעו לכם פינוי-בינוי? לפני שחותמים — חשוב לדעת מה מגיע לכם: מה הדירה החדשה, דמי שכירות לתקופת הבנייה, ערבויות, ואיך מתמודדים עם יזמים.',
        url: 'https://www.marietta-law.co.il/blog/urban-renewal-rights',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/construction_defects_tools.png',
            width: 1200,
            height: 630,
            alt: 'פינוי-בינוי: כל מה שדייר צריך לדעת על הזכויות שלו | מריאטה פנחסי - עורכת דין',
        }],
    },
}

export default function UrbanRenewalRights() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "פינוי-בינוי: כל מה שדייר צריך לדעת על הזכויות שלו",
                        "description": "הציעו לכם פינוי-בינוי? לפני שחותמים — חשוב לדעת מה מגיע לכם: מה הדירה החדשה, דמי שכירות לתקופת הבנייה, ערבויות, ואיך מתמודדים עם יזמים.",
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
                        "dateModified": "2026-03-16",
                        "image": "https://www.marietta-law.co.il/blog-images/construction_defects_tools.png",
                        "url": "https://www.marietta-law.co.il/blog/urban-renewal-rights",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/urban-renewal-rights"
                        }
                    })
                }}
            />
            <Header />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">התחדשות עירונית</span>
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
                        פינוי-בינוי: כל מה שדייר צריך לדעת על הזכויות שלו
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        אלפי בניינים ישנים בישראל נמצאים כיום בתהליכי פינוי-בינוי. אם גם הבניין שלכם עומד לעבור
                        מהפכה — חשוב מאוד לדעת מה מגיע לכם לפני שחותמים על כל מסמך.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            פינוי-בינוי (המכונה גם "תמ"א 38/2") הוא תהליך שבו דיירי בניין ישן מפנים את דירותיהם
                            לגמרי, הבניין נהרס ובמקומו קם מבנה חדש ומודרני. הדיירים מקבלים דירה חדשה,
                            בדרך כלל גדולה יותר מקודמתה — תמורת זכויות הבנייה הנוספות שמוקנות ליזם.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. מה מגיע לכם כדיירים?</h2>
                        <p>
                            הזכויות הבסיסיות שמגיעות לכל דייר בפינוי-בינוי כוללות:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'דירה חדשה בשטח גדול יותר מהדירה המקורית (בד"כ 12-20 מ"ר נוספים)',
                                'דמי שכירות מלאים לתקופת הבנייה, כולל הוצאות מעבר',
                                'ערבויות בנקאיות להבטחת קבלת הדירה החדשה',
                                'מניעת חיוב במס שבח או מע"מ על העסקה (בתנאים מסוימים)',
                                'עורך דין מטעם הדיירים — הממומן על ידי היזם',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. רוב דרוש — מה קורה עם דיירים סרבנים?</h2>
                        <p>
                            לפי החוק, נדרש <strong>רוב של 80% מבעלי הדירות</strong> להסכים לפינוי-בינוי.
                            אם 80% הסכימו, בית המשפט רשאי לפסוק כי על הסרבנים לעזוב — ובלבד שהסיבה לסירוב
                            אינה סבירה. החוק מגן על דיירים שיש להם סיבות לגיטימיות לסרב (למשל: גיל מבוגר, קשיי
                            התאמה לדירה חלופית, חשש מהיזם), אך סרבנות שרירותית עלולה לגרור הליך משפטי.
                        </p>

                        <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-400 my-8 flex gap-4">
                            <FaExclamationTriangle className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-gray-900">אזהרה חשובה:</h3>
                                <p className="text-gray-700">
                                    אל תחתמו על שום מסמך — לא זיכרון דברים, לא הסכם ולא ייפוי כוח — לפני שעורך דין
                                    שמייצג אתכם בלבד (לא את היזם!) עבר על המסמכים. חתימה מוקדמת עשויה לוותר על זכויות
                                    משמעותיות.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. איך בוחרים יזם אמין?</h2>
                        <p>
                            לפני שמתחייבים לעבוד עם יזם ספציפי, בדקו:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'פרויקטים שהיזם כבר השלים — פנו לדיירים שכבר עברו את התהליך',
                                'האם היזם רשום ברשם הקבלנים ומחזיק ערבויות בנקאיות תקפות',
                                'גובה דמי השכירות המוצעים: האם הם מספיקים לשכירות ממשית באזורכם',
                                'מועד מסירת הדירה החדשה — ומה קורה אם חורגים מהמועד',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "הדיירים הם בעלי הנכס — לא היזם. כוח המיקוח שלכם גבוה בהרבה ממה שנדמה לכם.
                                קבוצת דיירים מאוחדת, עם ייצוג משפטי נכון, יכולה להשיג תנאים טובים בהרבה מהפורמה הסטנדרטית."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. ביטחונות שחובה לדרוש</h2>
                        <p>
                            ערבות בנקאית אוטונומית היא הביטחון החזק ביותר שתוכלו לקבל.
                            היא מאפשרת לכם לממש את הכסף מהבנק ישירות אם היזם לא יעמוד בהתחייבויותיו —
                            ללא צורך בהליך משפטי ממושך. אל תסכימו לפרויקט ללא ערבות בנקאית!
                        </p>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">הציעו לכם פינוי-בינוי?</h3>
                                <p className="text-gray-300">נייצג אתכם מול היזם ונוודא שמקבלים את מירב הזכויות.</p>
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
                        {['פינוי-בינוי', 'התחדשות עירונית', 'זכויות דיירים', 'נדל"ן', 'תמ"א 38'].map((tag, idx) => (
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
