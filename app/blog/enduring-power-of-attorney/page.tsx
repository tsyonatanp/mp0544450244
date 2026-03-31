import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaHandHoldingHeart, FaFileSignature, FaShieldAlt } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'למה כולם מדברים על ייפוי כוח מתמשך? | מריאטה פנחסי - עורכת דין',
    description: 'ייפוי כוח מתמשך הוא המהפכה המשפטית שהחזירה את הכוח לידיים שלנו. איך בוחרים מיופה כוח ולמה חשוב לערוך את המסמך כשאנחנו בריאים?',
    keywords: 'ייפוי כוח מתמשך, אפוטרופסות, צוואה, תכנון עתידי, מיופה כוח, אפוטרופוס כללי, דמנציה, עורך דין ייפוי כוח',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/enduring-power-of-attorney',
    },
    openGraph: {
        title: 'למה כולם מדברים על ייפוי כוח מתמשך?',
        description: 'ייפוי כוח מתמשך הוא המהפכה המשפטית שהחזירה את הכוח לידיים שלנו. איך בוחרים מיופה כוח ולמה חשוב לערוך את המסמך כשאנחנו בריאים?',
        url: 'https://www.marietta-law.co.il/blog/enduring-power-of-attorney',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/power_of_attorney_hands.png',
            width: 1200,
            height: 630,
            alt: 'למה כולם מדברים על ייפוי כוח מתמשך?',
        }],
    },
}

export default function EnduringPowerOfAttorneyGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "למה כולם מדברים על ייפוי כוח מתמשך?",
                        "description": "ייפוי כוח מתמשך הוא המהפכה המשפטית שהחזירה את הכוח לידיים שלנו. איך בוחרים מיופה כוח ולמה חשוב לערוך את המסמך כשאנחנו בריאים?",
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
                        "datePublished": "2026-01-01",
                        "dateModified": "2026-01-01",
                        "image": "https://www.marietta-law.co.il/blog-images/power_of_attorney_hands.png",
                        "url": "https://www.marietta-law.co.il/blog/enduring-power-of-attorney",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/enduring-power-of-attorney"
                        }
                    })
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        צוואות וייפוי כוח
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        למה כולם מדברים על ייפוי כוח מתמשך? (וצריכים אחד)
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            01 ינואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser className="text-amber-500" />
                            מאת: עו"ד מריאטה פנחסי
                        </span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                        <div className="prose max-w-none prose-lg text-gray-700">
                            <p className="lead text-xl font-medium text-gray-900 mb-8 border-r-4 border-amber-500 pr-4">
                                ייפוי כוח מתמשך הוא המהפכה המשפטית השקטה ששינתה את האופן שבו אנחנו מתכננים את העתיד. במקום שהמדינה תחליט עבורנו ברגע האמת, הכוח חוזר לידיים שלנו.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaShieldAlt className="text-amber-500" />
                                מה זה בכלל?
                            </h2>
                            <p>
                                ייפוי כוח מתמשך הוא מסמך משפטי המאפשר לכל אדם בגיר (מעל גיל 18), שהוא "בעל כשירות", למנות אדם אחד או יותר שיהיו מוסמכים לקבל החלטות בענייניו אם וכאשר לא יהיה מסוגל עוד לעשות זאת בעצמו (למשל עקב דמנציה, תאונה, או מחלה).
                            </p>
                            <p>
                                בעבר, במצבים כאלו, המשפחה הייתה נאלצת לפנות לבית המשפט כדי להתמנות ל"אפוטרופוס" - הליך בירוקרטי, יקר, ופומבי, הכרוך בפיקוח הדוק ומעיק של האפוטרופוס הכללי.
                                <strong>ייפוי כוח מתמשך חוסך את כל זה.</strong>
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaHandHoldingHeart className="text-amber-500" />
                                באילו תחומים ניתן לטפל?
                            </h2>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <strong className="text-gray-900 block mb-1">🏥 עניינים אישיים ורפואיים</strong>
                                    איפה ארצה לגור (בבית או במוסד)? איזה טיפול רפואי אקבל? מי יטפל בצרכים היומיומיים שלי?
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <strong className="text-gray-900 block mb-1">💰 עניינים רכושיים</strong>
                                    ניהול חשבונות הבנק, תשלום חשבונות, ניהול נכסי נדל"ן, והחלטות השקעה.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaFileSignature className="text-amber-500" />
                                מי יכול לערוך את המסמך?
                            </h2>
                            <p>
                                ייפוי כוח מתמשך יכול להיערך ולהיחתם <strong>רק בפני עורך דין שעבר הכשרה מיוחדת</strong> של האפוטרופוס הכללי (משרד המשפטים) וקיבל הסמכה לכך.
                                לא כל עורך דין מוסמך לערוך מסמך זה.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">למה לא לחכות?</h2>
                            <p>
                                את המסמך ניתן לערוך רק כאשר האדם צלול וכשיר לחלוטין ("בעל כשירות משפטית"). ברגע שמתחילה ירידה קוגניטיבית (כמו דמנציה התחלתית), עלול להיות מאוחר מדי, ואז ברירת המחדל היא מינוי אפוטרופוס בבית המשפט.
                                לכן, ההמלצה הגורפת היא לערוך את המסמך כשאנחנו בריאים וחזקים, כחלק מתכנון עתידי אחראי.
                            </p>
                        </div>

                        {/* Call to Action Box */}
                        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">תכננו את העתיד שלכם היום</h3>
                            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                                משרדנו מוסמך לעריכת ייפוי כוח מתמשך מטעם משרד המשפטים. בואו לפגישה בה נתפור לכם את החליפה המשפטית המדויקת והאישית ביותר.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:054-4450244"
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
                                >
                                    חייגו לתיאום: 054-4450244
                                </a>
                                <a
                                    href="https://wa.me/972544450244"
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
                                >
                                    הודעה בוואטסאפ
                                </a>
                            </div>
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

