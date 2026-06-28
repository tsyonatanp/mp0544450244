
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaTools, FaHardHat, FaWater, FaGavel, FaCheckCircle, FaPhone, FaWhatsapp, FaRulerCombined } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'עורך דין ליקויי בנייה במרכז | תביעות קבלן ורטיבות - מריאטה פנחסי',
    description: 'עורכת דין ליקויי בנייה מנוסה במרכז הארץ וגוש דן. תביעות נגד קבלנים בגין רטיבות, אי התאמות למפרט, ירידת ערך ואיחור במסירה. ליווי מלא משלב חוות הדעת ההנדסית ועד קבלת הפיצוי. שירות בתל אביב, רמת גן, פתח תקווה והמרכז.',
    keywords: 'ליקויי בנייה, תביעת קבלן, עורך דין ליקויי בנייה, רטיבות בדירה, אי התאמה למפרט, בדק בית, ירידת ערך, פיצוי ליקויי בנייה, עורך דין ליקויי בנייה מרכז, תביעת קבלן תל אביב, ליקויי בנייה גוש דן, חוק המכר דירות',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/construction-defects',
    },
    openGraph: {
        title: 'תביעות ליקויי בנייה ורטיבות | מריאטה פנחסי - השגת פיצוי מקסימלי',
        description: 'גילתם ליקויים בדירה החדשה? הקבלן מתחמק מאחריות? אנו נלחם עבורכם לקבלת הפיצוי המגיע לכם ותיקון הליקויים.',
        images: ['https://www.marietta-law.co.il/logo.png'],
    }
}

export default function ConstructionDefectsPage() {
    const services = [
        {
            icon: <FaWater className="text-4xl text-amber-500" />,
            title: 'רטיבות ונזילות',
            description: 'טיפול משפטי בבעיות רטיבות, עובש ונזילות חוזרות, כולל דרישה לתיקון שורש הבעיה ופיצוי על עוגמת נפש.',
        },
        {
            icon: <FaRulerCombined className="text-4xl text-amber-500" />,
            title: 'אי התאמות למפרט',
            description: 'תביעות בגין אי התאמה בין המפרט הטכני שהובטח לבין הדירה שנמסרה בפועל (ריצוף, כלים סניטריים, גודל חדרים ועוד).',
        },
        {
            icon: <FaGavel className="text-4xl text-amber-500" />,
            title: 'תביעות ירידת ערך',
            description: 'דרישת פיצוי כספי בגין ליקויים שלא ניתנים לתיקון וגרמו לירידה בשווי הנכס (כגון ליקויים אקוסטיים, גובה תקרה נמוך).',
        },
        {
            icon: <FaHardHat className="text-4xl text-amber-500" />,
            title: 'ליווי מול בדק בית',
            description: 'עבודה משותפת עם מהנדסי בדק בית מומחים להכנת חוות דעת משפטית שתחייב את הקבלן בבית המשפט.',
        },
    ]

    const faqs = [
        {
            question: "מתי כדאי להזמין חברת בדק בית?",
            answer: "מומלץ להזמין בדיקת בדק בית מיד עם קבלת המפתח (פרוטוקול מסירה) או בסמוך לכך. הדו\"ח ההנדסי משמש כבסיס לדרישת התיקונים מהקבלן וכראיה משפטית במקרה הצורך."
        },
        {
            question: "כמה זמן יש לקבלן לתקן ליקויים?",
            answer: "לפי חוק המכר, יש לאפשר לקבלן \"הזדמנות נאותה\" לתקן את הליקויים. תקופת הבדק משתנה בהתאם לסוג הליקוי (בין שנה ל-7 שנים). אם הקבלן נכשל בתיקון או מתעלם, ניתן להגיש תביעה לפיצוי כספי."
        },
        {
            question: "האם ניתן לתבוע פיצוי על עוגמת נפש?",
            answer: "בהחלט. בתי המשפט נוהגים לפסוק פיצויים על עוגמת נפש, סבל ואי נוחות שנגרמו לדיירים כתוצאה מליקויים משמעותיים (כגון רטיבות קשה) או מהצורך לפנות את הדירה לצורך תיקונים."
        },
        {
            question: "האם ניתן לתבוע את הקבלן שנים אחרי המסירה?",
            answer: "כן, בהתאם לתקופות האחריות בחוק המכר. למשל, על כשלי צנרת ואיטום האחריות היא ארוכה (עד 7 שנים ויותר). בנוסף, במקרים של רשלנות או אי התאמה חמורה, ניתן לתבוע גם מעבר לתקופת הבדק הרגילה."
        },
        {
            question: "מה ההבדל בין תקופת בדק לתקופת אחריות?",
            answer: "תקופת הבדק היא התקופה שבה הקבלן אחראי לתקן ליקויים והנטל עליו להוכיח שהליקוי לא נובע מעבודתו (בין שנה ל-7 שנים לפי סוג הליקוי). תקופת האחריות מתחילה בתום תקופת הבדק ונמשכת 3 שנים נוספות - אך בה הנטל עובר לדייר להוכיח שהליקוי באחריות הקבלן. לכן חשוב לפעול מוקדם, בתוך תקופת הבדק."
        },
        {
            question: "כמה עולה להגיש תביעת ליקויי בנייה?",
            answer: "העלויות כוללות חוות דעת מהנדס (מומחה בדק בית) ושכר טרחת עורך דין, ולעיתים אגרת בית משפט. בתביעות מוצדקות, בית המשפט מחייב בדרך כלל את הקבלן להחזיר את עלות חוות הדעת ושכר הטרחה. בפגישת הייעוץ נסביר את מבנה העלויות בשקיפות מלאה ונעריך את כדאיות התביעה."
        },
        {
            question: "האם אתם מטפלים בתביעות בכל אזור המרכז?",
            answer: "כן. המשרד מלווה דיירים בתביעות ליקויי בנייה בכל גוש דן והמרכז - אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה, תל אביב, רמת גן, גבעתיים, פתח תקווה, ראש העין, ראשון לציון ועוד. אנו עובדים עם מהנדסי בדק בית באזורים אלה ומייצגים בבתי המשפט הרלוונטיים."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

            {/* Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "עורך דין ליקויי בנייה באור יהודה",
                        "provider": {
                            "@type": "Attorney",
                            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "חרמון 3",
                                "addressLocality": "אור יהודה",
                                "postalCode": "6041908",
                                "addressRegion": "בקעת אונו"
                            },
                            "telephone": "054-4450244",
                            "priceRange": "$$"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "אור יהודה" },
                            { "@type": "City", "name": "קריית אונו" },
                            { "@type": "City", "name": "יהוד-מונוסון" },
                            { "@type": "City", "name": "גני תקווה" },
                            { "@type": "City", "name": "תל אביב" },
                            { "@type": "City", "name": "רמת גן" },
                            { "@type": "City", "name": "פתח תקווה" },
                            { "@type": "City", "name": "ראש העין" },
                            { "@type": "City", "name": "ראשון לציון" },
                            { "@type": "AdministrativeArea", "name": "גוש דן ומרכז הארץ" }
                        ],
                        "description": "ייצוג דיירים בתביעות ליקויי בנייה, רטיבות, בדק בית ואי התאמות."
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
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                            תביעות ליקויי בנייה
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            הקבלן מתעלם? הרטיבות חוזרת?
                            <br />
                            אנו נדאג שתקבלו את הדירה שמגיעה לכם, או את הפיצוי המלא בגינה.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                                <FaPhone />
                                שיחת ייעוץ חינם
                            </a>
                            <a href="https://wa.me/972544450244" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/30">
                                <FaWhatsapp />
                                דברו איתנו בוואטסאפ
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Breadcrumbs items={[{ label: 'עורך דין ליקויי בנייה', href: '/services/construction-defects' }]} />

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">תחומי הטיפול בליקויי בנייה</h2>
                        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1 flex gap-6">
                                <div className="flex-shrink-0 bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">אל תתמודדו מול הקבלן לבד</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                קבלנים מחזיקים בסוללת עורכי דין שמטרתם למזער את אחריותם. כדי לקבל את המגיע לכם, אתם צריכים ייצוג משפטי תקיף, מקצועי ובלתי מתפשר שיודע לדבר בשפה שלהם.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'שיתוף פעולה הדוק עם מיטב המהנדסים ומומחי בדק בית',
                                    'ניסיון מוכח בהשגת פיצויים משמעותיים ללקוחות',
                                    'טיפול במקרים מורכבים של רטיבות ובעיות איטום',
                                    'מיצוי זכויות מלא כולל פיצוי על דיור חלופי ועוגמת נפש'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                                <FaTools className="text-9xl text-slate-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-depth Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">תביעות ליקויי בנייה במרכז הארץ — המדריך המעשי</h2>
                        <p className="mb-6">
                            קניתם דירה חדשה מקבלן וגיליתם רטיבות, סדקים, ריצוף לקוי או אי התאמה למפרט? אתם לא לבד.
                            ליקויי בנייה הם תופעה נפוצה בפרויקטים חדשים בכל גוש דן והמרכז – מתל אביב ורמת גן ועד פתח תקווה, אור יהודה וראש העין.
                            החוק מגן עליכם, אך מימוש הזכויות דורש ידע, תיעוד נכון וייצוג משפטי תקיף.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מה אומר חוק המכר (דירות)?</h3>
                        <p className="mb-6">
                            חוק המכר (דירות) מטיל על הקבלן אחריות לתקן ליקויים שהתגלו בדירה במשך תקופות מוגדרות.
                            במהלך <strong>תקופת הבדק</strong> (בין שנה ל-7 שנים לפי סוג הליקוי) הנטל על הקבלן להוכיח שהליקוי אינו באחריותו.
                            בתום תקופה זו מתחילה <strong>תקופת אחריות</strong> של 3 שנים נוספות, שבה הנטל עובר אליכם. לכן חשוב לפעול מוקדם ככל האפשר.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">השלבים לתביעת ליקויי בנייה מוצלחת</h3>
                        <p className="mb-4"><strong>1. תיעוד מיידי:</strong> צלמו כל ליקוי, שמרו תכתובות עם הקבלן ואת פרוטוקול המסירה.</p>
                        <p className="mb-4"><strong>2. חוות דעת הנדסית:</strong> מהנדס בדק בית מכין דו"ח מקצועי שמכמת את הליקויים ואת עלות תיקונם – זוהי הראיה המרכזית בתביעה.</p>
                        <p className="mb-4"><strong>3. מתן הזדמנות לתיקון:</strong> החוק מחייב לאפשר לקבלן "הזדמנות נאותה" לתקן. אנו מנהלים את ההתכתבות הרשמית ואת לוחות הזמנים.</p>
                        <p className="mb-6"><strong>4. תביעה משפטית:</strong> אם הקבלן מתחמק או מתקן ברשלנות – מגישים תביעה לפיצוי כספי, כולל עלות תיקון, ירידת ערך, דיור חלופי ועוגמת נפש.</p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">איחור במסירת הדירה — פיצוי נפרד</h3>
                        <p className="mb-6">
                            מעבר לליקויים, קבלן שמאחר במסירת הדירה חייב בפיצוי קבוע לפי חוק (גם ללא הוכחת נזק).
                            הרחבנו על כך במדריך <Link href="/blog/late-apartment-delivery" className="text-amber-600 font-semibold hover:underline">איחור במסירת דירה מקבלן</Link>.
                            כן כדאי לקרוא את <Link href="/blog/construction-defects-guide" className="text-amber-600 font-semibold hover:underline">המדריך המלא לליקויי בנייה</Link>,
                            ואם אתם בתהליך רכישה – על <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">ליווי משפטי בעסקת נדל"ן</Link>.
                        </p>
                    </article>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">שאלות נפוצות בנושא ליקויי בנייה</h2>
                        <p className="text-gray-600">כל המידע שחשוב לדעת לפני תביעת קבלן</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">יש לכם ליקויים בדירה?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        אל תחכו שיהיה מאוחר מדי. פנו אלינו לבחינת התיק ובניית אסטרטגיה משפטית מנצחת.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-amber-500/20">
                            054-4450244
                        </a>
                        <a href="https://wa.me/972544450244" className="bg-white text-slate-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-lg">
                            שליחת הודעה
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

