import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'צו ירושה מול צו קיום צוואה: מה ההבדל ואיך מוציאים? | מריאטה פנחסי',
    description: 'מה ההבדל בין צו ירושה לצו קיום צוואה? מתי צריך כל אחד, איך מגישים בקשה לרשם לענייני ירושה, כמה זמן זה לוקח ומה העלות. המדריך המלא לטיפול בעיזבון.',
    keywords: 'צו ירושה, צו קיום צוואה, ההבדל בין צו ירושה לצו קיום צוואה, רשם לענייני ירושה, ירושה, עיזבון, חלוקת עיזבון, עורך דין ירושות, צוואה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/inheritance-order-vs-probate',
    },
    openGraph: {
        title: 'צו ירושה מול צו קיום צוואה: מה ההבדל ואיך מוציאים?',
        description: 'ההבדל בין צו ירושה לצו קיום צוואה, מתי צריך כל אחד, ואיך מגישים בקשה לרשם לענייני ירושה.',
        url: 'https://www.marietta-law.co.il/blog/inheritance-order-vs-probate',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/power_of_attorney_hands.png',
            width: 1200,
            height: 630,
            alt: 'צו ירושה מול צו קיום צוואה: מה ההבדל ואיך מוציאים?',
        }],
    },
}

export default function InheritanceOrderVsProbate() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "צו ירושה מול צו קיום צוואה: מה ההבדל ואיך מוציאים?",
                        "description": "ההבדל בין צו ירושה לצו קיום צוואה, מתי צריך כל אחד, ואיך מגישים בקשה לרשם לענייני ירושה.",
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
                        "datePublished": "2026-06-11",
                        "dateModified": "2026-06-11",
                        "image": "https://www.marietta-law.co.il/blog-images/power_of_attorney_hands.png",
                        "url": "https://www.marietta-law.co.il/blog/inheritance-order-vs-probate",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/inheritance-order-vs-probate"
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
                                "name": "מה ההבדל בין צו ירושה לצו קיום צוואה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "צו ירושה ניתן כאשר הנפטר לא השאיר צוואה, והעיזבון מתחלק לפי חוק הירושה (בני זוג, ילדים וכו'). צו קיום צוואה ניתן כאשר קיימת צוואה, והוא מאשר את תוקפה ומורה לקיים את האמור בה. בשני המקרים מדובר בצו רשמי הנדרש כדי לפעול בנכסי העיזבון."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "כמה זמן לוקח להוציא צו ירושה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "התהליך אורך בדרך כלל בין חודש לכמה חודשים, תלוי בעומס אצל הרשם לענייני ירושה, בצורך בפרסום ברשומות ובהמתנה לתגובת האפוטרופוס הכללי, ובשאלה אם מוגשות התנגדויות."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "האם חייבים עורך דין כדי להוציא צו ירושה?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "אפשר להגיש בקשה גם באופן עצמאי, אך כאשר יש מספר יורשים, נכסים מורכבים, חשש לסכסוך או צוואה שעלולה להיות שנויה במחלוקת — ליווי עורך דין מונע טעויות שעלולות לעכב את התהליך בחודשים."
                                }
                            }
                        ]
                    })
                }}
            />
            <Header />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">ירושות וצוואות</span>
                        <span className="flex items-center gap-2"><FaCalendar /> 11 יוני, 2026</span>
                        <span className="flex items-center gap-2"><FaUser /> עו"ד מריאטה פנחסי</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        צו ירושה מול צו קיום צוואה: מה ההבדל ואיך מוציאים?
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        כשאדם נפטר, לא ניתן לפעול בנכסיו ללא צו רשמי. אך איזה צו צריך — צו ירושה או צו קיום צוואה?
                        ההבדל פשוט, ותלוי בשאלה אחת: האם הנפטר השאיר צוואה.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            לאחר פטירה, כדי לממש זכויות בעיזבון — למכור דירה, לסגור חשבונות בנק או להעביר רכב — נדרש <strong>צו</strong>
                            רשמי מהרשם לענייני ירושה (או מבית הדין הרבני בנסיבות מסוימות). הצו הוא המסמך שקובע באופן מחייב מי היורשים
                            ומה חלקו של כל אחד. סוג הצו תלוי בשאלה אחת מרכזית: האם הנפטר השאיר צוואה.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">צו ירושה — כשאין צוואה</h2>
                        <p>
                            כאשר הנפטר <strong>לא השאיר צוואה</strong>, העיזבון מתחלק לפי <strong>חוק הירושה</strong>. החוק קובע סדר
                            יורשים קבוע: בן/בת הזוג והילדים הם היורשים העיקריים, ובהיעדרם — הורים, אחים וכן הלאה. צו הירושה מאשר
                            רשמית את זהות היורשים ואת חלקיהם לפי החוק, ללא שיקול דעת לגבי רצון הנפטר.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">צו קיום צוואה — כשיש צוואה</h2>
                        <p>
                            כאשר הנפטר <strong>השאיר צוואה</strong> תקפה, מגישים בקשה לצו קיום צוואה. הצו מאשר את תוקפה של הצוואה
                            ומורה לחלק את העיזבון לפי הוראותיה — ולא לפי חוק הירושה. כך אדם יכול לקבוע מראש מי יירש ומה יקבל,
                            גם בניגוד לסדר היורשים הקבוע בחוק.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">בקצרה:</h3>
                            <p className="text-gray-700">
                                "אין צוואה → צו ירושה (חלוקה לפי החוק). יש צוואה → צו קיום צוואה (חלוקה לפי רצון הנפטר).
                                בשני המקרים — בלי צו אי אפשר לפעול בנכסי העיזבון."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">איך מגישים את הבקשה?</h2>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'הגשת בקשה לרשם לענייני ירושה (אונליין או בלשכה)',
                                'צירוף תעודת פטירה, תעודות זהות של היורשים והצוואה המקורית (אם קיימת)',
                                'תשלום אגרה ופרסום הודעה ברשומות ובעיתון',
                                'המתנה לתגובת האפוטרופוס הכללי ולחלוף תקופת ההתנגדויות',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            אם מוגשת התנגדות (למשל ערעור על תוקף הצוואה), התיק עובר לבית המשפט לענייני משפחה, וההליך מתארך.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מתי כדאי עורך דין?</h2>
                        <p>
                            כשיש מספר יורשים, נכסים מורכבים (כמו דירה שצריך למכור), חשש לסכסוך משפחתי או צוואה שעלולה להיות
                            שנויה במחלוקת — ליווי משפטי מונע טעויות שמעכבות את התהליך בחודשים, ומסייע גם בחלוקת העיזבון בפועל.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                ירשתם דירה ורוצים למכור? ראו <Link href="/blog/inherited-property-sale" className="text-amber-600 font-semibold hover:underline">מכירת דירה שהתקבלה בירושה</Link>.
                                למידע על תכנון מראש ראו <Link href="/blog/enduring-power-of-attorney" className="text-amber-600 font-semibold hover:underline">ייפוי כוח מתמשך</Link>,
                                ועל כלל השירותים — <Link href="/services/family-law" className="text-amber-600 font-semibold hover:underline">דיני משפחה, צוואות וירושות</Link>.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">צריכים להוציא צו ירושה או צו קיום צוואה?</h3>
                                <p className="text-gray-300">פנו אלינו ונלווה אתכם בתהליך מההתחלה ועד הסוף.</p>
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
                        {['צו ירושה', 'צו קיום צוואה', 'ירושה', 'עיזבון', 'צוואה'].map((tag, idx) => (
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
