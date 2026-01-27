import Link from 'next/link'
import { FaUserTie, FaBriefcase, FaGavel, FaHandshake, FaMoneyCheckAlt, FaPhone, FaWhatsapp, FaBalanceScale, FaFileContract } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function LaborLawPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "עריכת דין - דיני עבודה",
        "description": "ייצוג משפטי לעובדים ולמעסיקים: שימוע ופיטורים, זכויות סוציאליות, חוזי עבודה, הטרדה מינית והעסקת עובדים זרים.",
        "provider": {
            "@type": "LegalService",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
        },
        "serviceType": "LaborLaw",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי דיני עבודה",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ייצוג בשימוע" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תביעות שכר וזכויות" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "עריכת הסכמי עבודה" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "זכויות עובדים זרים" } }
            ]
        }
    }

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

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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

