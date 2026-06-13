import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaUserFriends, FaHandHoldingHeart, FaFileSignature, FaChild, FaGavel, FaPhone, FaWhatsapp, FaBalanceScale } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
    title: 'עורך דין דיני משפחה במרכז | גירושין, מזונות וצוואות - מריאטה פנחסי',
    description: 'עורכת דין דיני משפחה מנוסה במרכז הארץ וגוש דן. ליווי בגירושין, משמורת ומזונות, חלוקת רכוש, הסכמי ממון, צוואות, ירושות וייפוי כוח מתמשך. גישה רגישה ומקצועית, דיסקרטיות מלאה.',
    keywords: 'עורך דין דיני משפחה, עורך דין גירושין, גירושין, מזונות, משמורת ילדים, חלוקת רכוש, הסכם ממון, צוואות וירושות, ייפוי כוח מתמשך, עורך דין משפחה מרכז, עורך דין גירושין גוש דן, עורך דין דיני משפחה אור יהודה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/family-law',
    },
    openGraph: {
        title: 'עורך דין דיני משפחה במרכז | גירושין, מזונות וצוואות - מריאטה פנחסי',
        description: 'ליווי משפטי רגיש ומקצועי בדיני משפחה: גירושין, משמורת, מזונות, חלוקת רכוש, צוואות וירושות. במרכז הארץ וגוש דן.',
        url: 'https://www.marietta-law.co.il/services/family-law',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function FamilyLawPage() {

    const features = [
        {
            title: 'גירושין ופירוק התא המשפחתי',
            description: 'ניהול הליכי גירושין במינימום זעזועים, תוך שמירה על זכויותיכם וטובת הילדים.',
            icon: <FaUserFriends className="text-2xl text-amber-500" />
        },
        {
            title: 'צוואות וירושות',
            description: 'עריכת צוואות, בקשות לצווי ירושה וניהול סכסוכי עיזבון מורכבים.',
            icon: <FaFileSignature className="text-2xl text-amber-500" />
        },
        {
            title: 'מזונות ומשמורת',
            description: 'קביעת דמי מזונות הוגנים והסדרי ראייה המותאמים למציאות המשתנה.',
            icon: <FaChild className="text-2xl text-amber-500" />
        },
        {
            title: 'ייפוי כוח מתמשך',
            description: 'הסדרת עתידכם האישי והרפואי מבעוד מועד, כדי להבטיח שרצונכם יכובד.',
            icon: <FaHandHoldingHeart className="text-2xl text-amber-500" />
        }
    ]

    const faqs = [
        {
            question: "מה ההבדל בין הסכם ממון לצוואה?",
            answer: "הסכם ממון מסדיר את חלוקת הרכוש במקרה של פרידה או גירושין בעודכם בחיים, בעוד שצוואה קובעת מה ייעשה ברכושכם לאחר אריכות ימים. שני המסמכים משלימים זה את זה ומומלץ לערוך את שניהם."
        },
        {
            question: "כמה זמן לוקח הליך גירושין?",
            answer: "המשך משתנה מאוד. בהסכמה, ניתן לסיים את התהליך תוך מספר שבועות. במקרה של תביעות משפטיות, ההליך יכול לארוך שנה ויותר. אנו פועלים לייעל ולקצר תהליכים ככל הניתן, ולהעדיף הסכמות על פני התדיינות."
        },
        {
            question: "מה ההבדל בין בית הדין הרבני לבית המשפט לענייני משפחה?",
            answer: "בישראל קיימת סמכות מקבילה. ענייני הגירושין עצמם (התרת הנישואין) מתנהלים בבית הדין הרבני, אך נושאים כמו מזונות, משמורת וחלוקת רכוש יכולים להתנהל בבית המשפט לענייני משפחה. בחירת הערכאה הנכונה ('מרוץ הסמכויות') היא החלטה אסטרטגית חשובה שכדאי לקבל בליווי עורך דין."
        },
        {
            question: "איך נקבעים דמי המזונות?",
            answer: "דמי מזונות נקבעים בהתאם לצרכי הילדים, יכולת ההשתכרות של ההורים וחלוקת זמני השהות. בעקבות פסיקה עדכנית, גם הכנסות האם והסדרי המשמורת המשותפת נלקחים בחשבון. כל מקרה נבחן לגופו."
        },
        {
            question: "האם אתם מלווים תיקים בכל אזור המרכז?",
            answer: "כן. המשרד מלווה לקוחות בדיני משפחה בכל גוש דן והמרכז - אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה, תל אביב, רמת גן, פתח תקווה ועוד, ומייצג בבתי המשפט לענייני משפחה ובבתי הדין הרלוונטיים באזור."
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
                        "name": "דיני משפחה וירושה - מריאטה פנחסי",
                        "description": "עורכת דין מריאטה פנחסי מתמחה בדיני משפחה: גירושין, משמורת, מזונות, צוואות, ירושות וייפוי כוח מתמשך. ליווי אישי ומקצועי באזור בקעת אונו והמרכז.",
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
                        "url": "https://www.marietta-law.co.il/services/family-law"
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
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        דיני משפחה, צוואות וירושות
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        ברגעים הרגישים ביותר בחיים, אתם צריכים מישהו שילחם עבורכם ברגישות ובנחישות.
                        ליווי משפטי אישי בתהליכי גירושין, ירושות והסדרת המעמד האישי.
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">לנהל משברים בתבונה וברגישות</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        תחום דיני המשפחה הוא מהמורכבים והרגישים ביותר בעולם המשפט. הוא נוגע בנימים החשופים ביותר של חיינו - הילדים, הזוגיות והרכוש שצברנו.
                                    </p>
                                    <p>
                                        משרדנו מציע גישה ייחודית המשלבת מקצועיות משפטית בלתי מתפשרת יחד עם ראייה אנושית רחבה.
                                        אנו מאמינים כי ברוב המקרים, הגעה להסכמות עדיפה על פני מלחמות בבתי משפט, אך במידת הצורך אנו יודעים להילחם בנחישות על כל הזכויות המגיעות לכם בערכאות המשפטיות.
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

                            {/* In-depth Content */}
                            <article className="prose max-w-none text-gray-600 space-y-4 mt-8 border-t border-gray-100 pt-8">
                                <h3 className="text-2xl font-bold text-gray-900">ליווי בדיני משפחה — מה חשוב לדעת</h3>
                                <p>
                                    דיני המשפחה נוגעים בנקודות הרגישות ביותר בחיינו. בין אם מדובר בגירושין, בקביעת
                                    מזונות ומשמורת, בחלוקת רכוש או בעריכת צוואה — להחלטות יש השפעה לטווח ארוך, ולכן חשוב
                                    לקבל אותן מתוך הבנה משפטית מלאה ולא מתוך רגש בלבד.
                                </p>
                                <p>
                                    <strong>גירושין בהסכמה מול התדיינות:</strong> כאשר ניתן, הסכם גירושין כולל (הקובע מזונות,
                                    משמורת וחלוקת רכוש) חוסך זמן, כסף ונזק רגשי — בעיקר לילדים. כשאין הסכמה, אנו מייצגים אתכם
                                    בנחישות בערכאות. בחירת הערכאה הנכונה — בית הדין הרבני או בית המשפט לענייני משפחה — היא צעד
                                    אסטרטגי משמעותי.
                                </p>
                                <p>
                                    <strong>הגנה על העתיד:</strong> מעבר למשבר עצמו, אנו ממליצים להסדיר מבעוד מועד מסמכים כמו
                                    הסכם ממון, צוואה ו<Link href="/blog/enduring-power-of-attorney" className="text-amber-600 font-semibold hover:underline">ייפוי כוח מתמשך</Link> —
                                    כלים שמונעים סכסוכים עתידיים ומבטיחים שרצונכם יכובד. ראו גם את המדריך ל<Link href="/blog/divorce-mediation" className="text-amber-600 font-semibold hover:underline">גישור בגירושין</Link>.
                                </p>
                            </article>

                            {/* FAQ Section for SEO */}
                            <div className="space-y-6 mt-12">
                                <h3 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h3>
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            <FaBalanceScale className="text-amber-500 flex-shrink-0" />
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">צריכים ייעוץ אישי?</h3>
                                    <p className="text-gray-600">דיסקרטיות מלאה מובטחת</p>
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

