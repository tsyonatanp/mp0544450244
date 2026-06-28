import Link from 'next/link'
import { Metadata } from 'next'
import { FaUserTie, FaBriefcase, FaGavel, FaHandshake, FaMoneyCheckAlt, FaPhone, FaWhatsapp, FaBalanceScale, FaFileContract } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'עורך דין דיני עבודה במרכז | פיטורין, שימוע וזכויות - מריאטה פנחסי',
    description: 'עורכת דין דיני עבודה במרכז הארץ וגוש דן. ייצוג עובדים ומעסיקים: פיטורים ושימוע, זכויות עובדים ותלושי שכר, פיצויי פיטורים, הסכמי העסקה, הטרדה מינית ותביעות בבית הדין לעבודה.',
    keywords: 'עורך דין דיני עבודה, זכויות עובדים, פיטורים, שימוע לפני פיטורין, פיצויי פיטורים, הסכם העסקה, תלוש שכר, בית הדין לעבודה, הטרדה מינית בעבודה, עורך דין דיני עבודה מרכז, עורך דין עבודה גוש דן',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/labor-law',
    },
    openGraph: {
        title: 'עורך דין דיני עבודה במרכז | פיטורין, שימוע וזכויות - מריאטה פנחסי',
        description: 'ייצוג עובדים ומעסיקים: פיטורים ושימוע, זכויות עובדים, פיצויים, הסכמי העסקה ותביעות בבית הדין לעבודה. במרכז הארץ וגוש דן.',
        url: 'https://www.marietta-law.co.il/services/labor-law',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function LaborLawPage() {

    const features = [
        {
            title: 'זכויות עובדים',
            description: 'בדיקת תלושי שכר, דמי הבראה, ימי חופשה, פנסיה ופיצויי פיטורים - מוודאים שקיבלתם את כל המגיע לכם.',
            icon: <FaMoneyCheckAlt className="text-2xl text-blue-500" />
        },
        {
            title: 'פיטורים ושימוע',
            description: 'הכנה וייצוג בהליכי שימוע, תביעות בגין פיטורים שלא כדין ופיטורי נשים בהריון.',
            icon: <FaGavel className="text-2xl text-amber-500" />
        },
        {
            title: 'הסכמי עבודה',
            description: 'ניסוח ובדיקה של חוזי העסקה אישיים, הסכמי סודיות ואי-תחרות למנהלים ולעובדים בכירים.',
            icon: <FaFileContract className="text-2xl text-slate-500" />
        },
        {
            title: 'הטרדה מינית',
            description: 'טיפול רגיש ודיסקרטי בתביעות בגין הטרדה מינית במקום העבודה והתנכלות תעסוקתית.',
            icon: <FaUserTie className="text-2xl text-red-500" />
        }
    ]

    const faqs = [
        {
            question: "פוטרתי ללא שימוע — מה הזכויות שלי?",
            answer: "פיטורים ללא שימוע כדין נחשבים פגומים, ובית הדין לעבודה עשוי לפסוק פיצוי משמעותי (לעיתים מספר משכורות) גם אם הפיטורים עצמם היו מוצדקים. למעסיק חובה לזמן אתכם לשימוע מראש, להציג את הטענות ולשמוע אתכם בלב פתוח לפני קבלת החלטה."
        },
        {
            question: "כמה זמן יש לי לתבוע זכויות עבר?",
            answer: "תקופת ההתיישנות בתביעות דיני עבודה היא בדרך כלל 7 שנים. עם זאת, רכיבים מסוימים (כמו דמי הבראה) מוגבלים לשנתיים האחרונות, ולכן כדאי לא להתמהמה. בדיקת תלושי שכר לאחור יכולה לחשוף סכומים נכבדים שלא שולמו."
        },
        {
            question: "האם מגיעים לי פיצויי פיטורים אם התפטרתי?",
            answer: "ככלל פיצויי פיטורים מגיעים בפיטורים, אך קיימים מקרים של 'התפטרות בדין מפוטר' שבהם מגיעים פיצויים גם בהתפטרות — למשל הרעה מוחשית בתנאים, אי-תשלום זכויות, או התפטרות לרגל לידה/מעבר דירה בנסיבות מסוימות. כל מקרה נבחן לגופו."
        },
        {
            question: "מי משלם את שכר הטרחה בתביעת עבודה?",
            answer: "בתביעות עובדים רבות ניתן לעבוד במודל של שכר טרחה מותנה בתוצאה. בנוסף, אם זוכים בבית הדין, הוא מחייב לעיתים את המעסיק בהוצאות משפט ושכר טרחת עורך דין. בפגישת הייעוץ נסביר את מבנה העלויות בשקיפות."
        },
        {
            question: "האם אתם מייצגים בכל אזור המרכז?",
            answer: "כן. המשרד מייצג עובדים ומעסיקים בכל גוש דן והמרכז - אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה, תל אביב, רמת גן, פתח תקווה ועוד, ובבתי הדין האזוריים לעבודה."
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
                        "name": "דיני עבודה - מריאטה פנחסי",
                        "description": "ייצוג עובדים ומעסיקים בדיני עבודה: פיטורין, שימוע, זכויות עובדים, הסכמי העסקה ותביעות בבית הדין לעבודה.",
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
                        "url": "https://www.marietta-law.co.il/services/labor-law"
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
            <section className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                        דיני עבודה וזכויות עובדים
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        מקום העבודה הוא הבית השני שלנו. אל תתפשרו על הזכויות שלכם.
                        ליווי משפטי מקצועי לעובדים ולמעסיקים, תוך הקפדה על יחס אישי ותוצאות.
                    </p>
                </div>
            </section>

            <Breadcrumbs items={[{ label: 'עורך דין דיני עבודה', href: '/services/labor-law' }]} />

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Right Column - Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">איזון נכון בין עובד למעביד</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        דיני העבודה בישראל הם מורכבים ודינמיים, ומשתנים תדיר בפסיקות בתי הדין לעבודה.
                                        עובדים רבים אינם מודעים למלוא זכויותיהם הסוציאליות, ולעיתים מוותרים על סכומים משמעותיים המגיעים להם כחוק.
                                    </p>
                                    <p>
                                        מצד שני, גם מעסיקים חשופים לתביעות ענק אם לא יקפידו על הנהלים (כמו עריכת שימוע כדין).
                                        משרדנו מספק ייעוץ משפטי שוטף לשני הצדדים, במטרה למנוע סכסוכים או לפתור אותם במהירות וביעילות המרבית.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">זומנתם לשימוע? 4 כלי זהב</h3>
                                <ul className="space-y-3">
                                    {[
                                        'זכות הייצוג: מותר לכם להגיע עם עורך דין.',
                                        'פרוטוקול: דרשו שכל שנאמר יירשם בפרוטוקול.',
                                        'הודעה מוקדמת: אסור לפטר "מהרגע להרגע" ללא הזמנה מסודרת.',
                                        'שימוע בלב פתוח: למעסיק אסור להחליט מראש על הפיטורים.'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                                            <FaBalanceScale className="text-blue-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* In-depth Content */}
                            <article className="prose max-w-none text-gray-600 space-y-4 mt-8 border-t border-gray-100 pt-8">
                                <h3 className="text-2xl font-bold text-gray-900">דיני עבודה — מה שכל עובד ומעסיק צריך לדעת</h3>
                                <p>
                                    דיני העבודה בישראל מעניקים לעובדים שורת זכויות שאי אפשר לוותר עליהן (זכויות קוגנטיות):
                                    שכר מינימום, דמי הבראה, ימי חופשה ומחלה, הפרשות לפנסיה ופיצויי פיטורים. עובדים רבים אינם
                                    מודעים למלוא הזכויות, ובדיקת תלושי שכר לאחור חושפת לא פעם סכומים משמעותיים שלא שולמו.
                                </p>
                                <p>
                                    <strong>פיטורים והליך שימוע:</strong> מעסיק חייב לערוך שימוע כדין לפני פיטורים — לזמן מראש,
                                    להציג טענות, ולשמוע את העובד בלב פתוח. פגם בהליך עלול לזכות את העובד בפיצוי נכבד. הרחבנו על כך
                                    במדריך <Link href="/blog/employee-hearing-rights" className="text-amber-600 font-semibold hover:underline">זכויות עובדים בשימוע לפני פיטורין</Link>.
                                </p>
                                <p>
                                    <strong>גם מעסיקים</strong> זקוקים להגנה: ניסוח הסכמי העסקה תקינים, מדיניות מניעת הטרדה מינית
                                    ועריכת הליכי פיטורים כדין מונעים תביעות יקרות. אנו מלווים את שני הצדדים למניעת סכסוכים ולפתרונם.
                                </p>
                            </article>

                            {/* FAQ Section for SEO */}
                            <div className="space-y-6 mt-12">
                                <h3 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h3>
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <FaBalanceScale className="text-blue-500 flex-shrink-0" />
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">מרגישים שזכויותיכם נפגעו?</h3>
                                    <p className="text-gray-600">בואו נבדוק את זה יחד</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="tel:054-4450244"
                                        className="flex items-center justify-center gap-3 w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
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

