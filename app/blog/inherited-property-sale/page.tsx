import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'מכירת דירה שהתקבלה בירושה 2026: מס שבח, צו ירושה והליך מלא | מריאטה פנחסי',
    description: 'ירשתם דירה ורוצים למכור? המדריך המלא: צו ירושה מול צו קיום צוואה, פטור ממס שבח על דירה יורשת, מה קורה כשיש כמה יורשים, ואיך מוכרים נכון וללא סכסוכים.',
    keywords: 'מכירת דירה בירושה, מכירת דירה שהתקבלה בירושה, צו ירושה, צו קיום צוואה, מס שבח דירה בירושה, פטור ממס שבח ירושה, מכירת נכס בין יורשים, עורך דין ירושה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/blog/inherited-property-sale',
    },
    openGraph: {
        title: 'מכירת דירה שהתקבלה בירושה 2026: המדריך המלא',
        description: 'צו ירושה מול צו קיום צוואה, פטור ממס שבח, ומה עושים כשיש כמה יורשים - המדריך המלא למכירת דירה בירושה.',
        url: 'https://www.marietta-law.co.il/blog/inherited-property-sale',
        type: 'article',
        images: [{
            url: 'https://www.marietta-law.co.il/blog-images/real_estate_keys.png',
            width: 1200,
            height: 630,
            alt: 'מכירת דירה שהתקבלה בירושה: המדריך המשפטי המלא | מריאטה פנחסי - עורכת דין',
        }],
    },
}

export default function InheritedPropertySale() {
    const faqs = [
        {
            question: "האם חייבים במס שבח על מכירת דירה שהתקבלה בירושה?",
            answer: "לא בהכרח. אם היורש זכאי לפטור ממס שבח (למשל פטור לדירת מגורים יחידה, בהתאם לתנאים שהתקיימו אצל המוריש או היורש), ייתכן שהמכירה תהיה פטורה כולה או בחלקה. החישוב נעשה על ההפרש בין שווי הנכס במועד הפטירה למחיר המכירה, ולכן שווי במועד הפטירה הוא נתון קריטי שיש לתעד."
        },
        {
            question: "כמה זמן לוקח להוציא צו ירושה לפני מכירת הדירה?",
            answer: "התהליך אורך בדרך כלל בין חודש למספר חודשים, תלוי בעומס אצל הרשם לענייני ירושה, בפרסום ברשומות ובהמתנה לתגובת האפוטרופוס הכללי. ניתן להתחיל לשווק את הדירה כבר בשלב זה, אך לא ניתן להשלים את המכירה (חתימת חוזה מחייב עם רישום) ללא הצו."
        },
        {
            question: "מה קורה אם אחד היורשים מתנגד למכירה?",
            answer: "כאשר יש מספר יורשים ואחד מתנגד למכירה, ניתן לנסות להגיע להסכם חלוקת עיזבון (למשל: יורש אחד קונה את חלקי האחרים), ובמקרים של מבוי סתום - לפנות לבית המשפט בבקשה לפירוק שיתוף במקרקעין, שעשוי להורות על מכירת הנכס וחלוקת התמורה."
        },
        {
            question: "האם צריך לשלם מס רכישה כשיורשים דירה?",
            answer: "לא. ירושה עצמה אינה אירוע מס רכישה - העברת הזכויות ליורשים אינה חייבת במס רכישה. מס הרכישה רלוונטי רק כאשר מישהו רוכש את הדירה (למשל אם יורש קונה את חלקי היורשים האחרים בעסקה נפרדת מירושה טהורה)."
        },
        {
            question: "אפשר למכור את הדירה לפני שמסתיים רישום היורשים בטאבו?",
            answer: "אפשר לחתום על הסכם מכר המותנה בהשלמת רישום הזכויות, אך מומלץ מאוד להשלים תחילה את רישום היורשים בטאבו (או לפחות לקבל את הצו) לפני מכירה בפועל, כדי להימנע מסיכונים משפטיים ומעיכובים מול הקונה."
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
                        "headline": "מכירת דירה שהתקבלה בירושה 2026: מס שבח, צו ירושה והליך מלא",
                        "description": "ירשתם דירה ורוצים למכור? המדריך המלא: צו ירושה מול צו קיום צוואה, פטור ממס שבח, ומה קורה כשיש כמה יורשים.",
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
                        "image": "https://www.marietta-law.co.il/blog-images/real_estate_keys.png",
                        "url": "https://www.marietta-law.co.il/blog/inherited-property-sale",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.marietta-law.co.il/blog/inherited-property-sale"
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
                { label: 'מכירת דירה שהתקבלה בירושה' }
            ]} />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">נדל"ן וירושות</span>
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
                        מכירת דירה שהתקבלה בירושה 2026: מס שבח, צו ירושה וההליך המלא
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        ירשתם דירה? לפני שממהרים לחתום על חוזה מכר, חשוב להבין את הצעדים המשפטיים הנדרשים,
                        מתי מגיע פטור ממס שבח, ואיך להימנע ממלכודות וסכסוכים בין יורשים שיכולים לעלות ביוקר.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            מכירת דירה שהתקבלה בירושה היא תהליך שמשלב דיני ירושה, דיני מקרקעין ודיני מיסים.
                            טעות בשלב אחד עשויה לעכב את המכירה בחודשים ארוכים — ולעיתים אף לגרום לסכסוכים בין יורשים.
                            הכנו עבורכם את המדריך המלא לתהליך.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. שלב ראשון: הוצאת צו ירושה או קיום צוואה</h2>
                        <p>
                            לפני שניתן למכור נכס שהתקבל בירושה, יש לקבל מהמרשם הייעודי (הרשם לענייני ירושה
                            או בית הדין הרבני, בהתאם לנסיבות) <strong>צו ירושה</strong> אם הנפטר לא השאיר צוואה,
                            או <strong>צו קיום צוואה</strong> אם הייתה צוואה. הצו מאמת משפטית מי הם היורשים הזכאים ומה חלקו של כל אחד.
                        </p>
                        <p>
                            הגשת הבקשה כוללת מסמכים כמו תעודת פטירה, תעודות זהות של היורשים, מסמכי הצוואה (אם קיימת),
                            ופרסום ברשומות. התהליך אורך בדרך כלל בין 3 ל-6 חודשים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. רישום הנכס על שם היורשים בטאבו</h2>
                        <p>
                            לאחר קבלת הצו, יש לרשום את הנכס על שם היורשים בלשכת רישום המקרקעין (טאבו).
                            ניתן לרשום את הנכס על שם כלל היורשים בחלקים שווים, או לבצע הסכם חלוקת עיזבון
                            שבו יורש אחד נוטל את הדירה ומשלם לאחרים את חלקם.
                        </p>
                        <p>
                            רישום תקין חיוני: מכירת נכס שאינו רשום על שמכם בטאבו כמעט בלתי אפשרית ומסוכנת מבחינה משפטית.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "כאשר ישנם מספר יורשים, מומלץ לגבש הסכמה ביניהם עוד לפני פנייה לרוכשים פוטנציאליים.
                                סכסוך בין יורשים באמצע עסקת מכר עלול להרוס את העסקה ולחשוף את כל הצדדים לתביעות."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. מס שבח — האם אני חייב בתשלום?</h2>
                        <p>
                            מכירת נכס שהתקבל בירושה עשויה להיות חייבת במס שבח. החישוב נעשה על ההפרש בין
                            שווי הנכס ביום הפטירה של המוריש לבין מחיר המכירה. עם זאת, קיימים פטורים חשובים:
                        </p>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'פטור לדירת מגורים — אם הדירה שימשה למגורים ועומדת בתנאי הפטור',
                                'פטור עקב דירה יחידה — אם לך ולמורישׁ לא הייתה דירה נוספת',
                                'תקופת צינון — אם מכרתם דירה אחרת לאחרונה, ייתכן שתצטרכו להמתין',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            ייעוץ מקצועי לפני מכירה יכול לחסוך לכם עשרות אלפי שקלים בתכנון מס נכון.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. איתור חובות ושעבודים על הנכס</h2>
                        <p>
                            לפני שמוכרים, חשוב לבדוק שהנכס נקי מחובות: משכנתאות שטרם נפרעו, עיקולים,
                            הערות אזהרה לטובת צדדים שלישיים, חובות ארנונה למוניציפליות וחיובי ועד בית.
                            בדיקת נסח טאבו עדכני תחשוף את מרבית השעבודים הרשומים.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. ניהול מו"מ ועריכת חוזה המכר</h2>
                        <p>
                            לאחר השלמת כל הצעדים המקדמיים, ניתן להתקדם לשלב המכירה עצמה.
                            במקרה של מספר יורשים, כולם נדרשים לחתום על חוזה המכר — ולכן חשוב שכולם יהיו מיוצגים
                            ומסכימים לתנאי העסקה מראש. עורך דין מטעמכם ינהל את המו"מ, יבטיח את הביטחונות
                            ויוודא שהכסף יגיע בבטחה לידיכם.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">שאלות נפוצות</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">קריאה נוספת:</h3>
                            <p className="text-gray-700">
                                מבולבלים לגבי סוג הצו שאתם צריכים? ראו <Link href="/blog/inheritance-order-vs-probate" className="text-amber-600 font-semibold hover:underline">צו ירושה מול צו קיום צוואה</Link>.
                                לפני חתימה על חוזה מכר, כדאי להכיר את <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">הליווי המשפטי בעסקת נדל"ן</Link>,
                                ואת <Link href="/blog/purchase-tax-guide" className="text-amber-600 font-semibold hover:underline">מדרגות מס הרכישה</Link> אם אתם גם רוכשים דירה אחרת.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">ירשתם דירה ורוצים למכור?</h3>
                                <p className="text-gray-300">פנו אלינו לייעוץ ראשוני ונעזור לכם לנהל את התהליך נכון.</p>
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
                        {['ירושה', 'מכירת דירה', 'צו ירושה', 'מס שבח', 'נדל"ן'].map((tag, idx) => (
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
