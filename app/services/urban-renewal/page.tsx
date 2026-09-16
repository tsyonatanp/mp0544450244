import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaBuilding, FaShieldAlt, FaFileSignature, FaHardHat, FaCheckCircle, FaPhone, FaWhatsapp, FaHome } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'עורך דין פינוי בינוי והתחדשות עירונית באור יהודה | מריאטה פנחסי',
    description: 'עורך דין פינוי בינוי והתחדשות עירונית באור יהודה ובקעת אונו. ליווי דיירים בבדיקת הסכמי פינוי-בינוי ותמ"א 38, ערבויות, זכויות והגנה מול יזמים - לפני שחותמים. ייעוץ ראשוני.',
    keywords: 'עורך דין פינוי בינוי אור יהודה, פינוי בינוי אור יהודה, התחדשות עירונית אור יהודה, עורך דין התחדשות עירונית, תמא 38 אור יהודה, זכויות דייר פינוי בינוי, עורך דין פינוי בינוי בקעת אונו',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/services/urban-renewal',
    },
    openGraph: {
        title: 'עורך דין פינוי בינוי והתחדשות עירונית באור יהודה - מריאטה פנחסי',
        description: 'ליווי דיירים בפינוי-בינוי ותמ"א 38 באור יהודה ובקעת אונו: בדיקת הסכם, ערבויות והגנה על הזכויות לפני החתימה.',
        url: 'https://www.marietta-law.co.il/services/urban-renewal',
        images: ['https://www.marietta-law.co.il/logo.png'],
    },
}

export default function UrbanRenewalPage() {
    const services = [
        {
            icon: <FaFileSignature className="text-4xl text-amber-500" />,
            title: 'בדיקת הסכם פינוי-בינוי',
            description: 'קריאה וניתוח של הסכם הפינוי-בינוי או התמ"א מול היזם, זיהוי סעיפים בעייתיים והגנה על האינטרס של הדייר לפני החתימה.',
        },
        {
            icon: <FaShieldAlt className="text-4xl text-amber-500" />,
            title: 'ערבויות וביטחונות',
            description: 'בדיקת הערבויות שהיזם מחויב להעמיד — ערבות חוק מכר, ערבות שכירות, ערבות מסים ובדק — כדי שהדירה החדשה מובטחת.',
        },
        {
            icon: <FaBuilding className="text-4xl text-amber-500" />,
            title: 'ליווי מול היזם והנציגות',
            description: 'ייצוג הדייר מול היזם, עורכי דינו ונציגות הדיירים, כולל משא ומתן על התמורה (גודל הדירה החדשה, מפרט, דמי שכירות).',
        },
        {
            icon: <FaHardHat className="text-4xl text-amber-500" />,
            title: 'תמ"א 38 / 2 והריסה ובנייה',
            description: 'ליווי בפרויקטי חיזוק (תמ"א 38/1) והריסה ובנייה (תמ"א 38/2), על כל ההיבטים המשפטיים והמיסויים הכרוכים.',
        },
    ]

    const faqs = [
        {
            question: "האם צריך עורך דין משלי בפינוי בינוי, אם היזם משלם לעורך דין?",
            answer: "היזם אכן נושא בעלות עורך דין מטעם הדיירים, אך חשוב להבין שעורך הדין שהיזם מממן פועל עבור כלל הנציגות. במקרים רבים כדאי לדייר בדיקה נוספת ובלתי תלויה של ההסכם, במיוחד כשיש נסיבות אישיות מיוחדות (דירה גדולה מהממוצע, מבוגרים, יורשים). אנו בודקים את ההסכם מנקודת המבט שלכם בלבד."
        },
        {
            question: "אילו ערבויות היזם חייב לתת בפינוי בינוי?",
            answer: "היזם מחויב בשורת ערבויות להגנת הדיירים: ערבות חוק המכר (להבטחת הדירה החדשה), ערבות שכירות (למימון דיור חלופי בתקופת הבנייה), ערבות מסים וערבות בדק. היעדר ערבות תקינה הוא דגל אדום — אין לחתום לפני בדיקתן."
        },
        {
            question: "כמה דיירים צריך כדי לקדם פרויקט פינוי בינוי?",
            answer: "לפי החוק, נדרש רוב מיוחס של בעלי הדירות (בדרך כלל כ-66%-80% בהתאם לסוג הפרויקט ולשלב). דייר שמסרב שלא בתום לב עלול להיחשב 'דייר סרבן' ולחוב בפיצוי. ליווי משפטי חשוב הן לדיירים המקדמים והן לדייר שיש לו הסתייגויות לגיטימיות."
        },
        {
            question: "כמה זמן לוקח פרויקט פינוי בינוי באור יהודה?",
            answer: "פרויקט פינוי-בינוי הוא הליך ארוך — לרוב מספר שנים משלב ההסכמות ועד האכלוס מחדש, כולל תכנון, היתרים, פינוי ובנייה. באור יהודה, שנמצאת בתנופת התחדשות, יש ניסיון מצטבר בפרויקטים באזור, אך כל פרויקט תלוי בנסיבותיו."
        },
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
                        "name": "עורך דין פינוי בינוי והתחדשות עירונית באור יהודה - מריאטה פנחסי",
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
                            { "@type": "AdministrativeArea", "name": "בקעת אונו" }
                        ],
                        "description": "ליווי משפטי לדיירים בפרויקטי פינוי-בינוי ותמ\"א 38 באור יהודה ובבקעת אונו.",
                        "url": "https://www.marietta-law.co.il/services/urban-renewal"
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
                { label: 'תחומי עיסוק' },
                { label: 'פינוי בינוי באור יהודה' }
            ]} />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        עורך דין פינוי בינוי באור יהודה
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        לפני שחותמים על הסכם פינוי-בינוי או תמ"א 38 — ודאו שהזכויות שלכם מוגנות.
                        ליווי דיירים באור יהודה ובבקעת אונו, בדיקה בלתי תלויה של ההסכם והערבויות.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                            <FaPhone /> שיחת ייעוץ ראשונית
                        </a>
                        <a href="https://wa.me/972544450244" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/30">
                            <FaWhatsapp /> דברו איתנו בוואטסאפ
                        </a>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הליווי שלנו בהתחדשות עירונית</h2>
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

            {/* In-depth local content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">התחדשות עירונית באור יהודה — מה חשוב לדעת</h2>
                        <p className="mb-4">
                            אור יהודה נמצאת בשנים האחרונות בתנופת התחדשות עירונית משמעותית. שכונות ותיקות רבות בעיר מיועדות
                            לפרויקטי פינוי-בינוי ותמ"א 38, שמציעים לדיירים דירה חדשה וגדולה יותר במקום הדירה הישנה. זו הזדמנות
                            מצוינת — אך גם עסקה משפטית מורכבת מול יזם מקצועי, שבה לדייר יש הרבה מה להרוויח, ולא מעט לאבד אם לא נזהרים.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">פינוי-בינוי מול תמ"א 38 — מה ההבדל?</h3>
                        <p className="mb-4">
                            <strong>פינוי-בינוי:</strong> מתחם שלם נהרס ונבנה מחדש — הדיירים מפונים לדיור חלופי לתקופת הבנייה
                            ומקבלים דירה חדשה בבניין חדש. <strong>תמ"א 38/1 (חיזוק):</strong> הבניין הקיים מחוזק ומורחב מבלי להרוס.
                            <strong> תמ"א 38/2 (הריסה ובנייה):</strong> הבניין הבודד נהרס ונבנה מחדש. לכל מסלול השלכות שונות על התמורה,
                            המיסוי ולוחות הזמנים.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">מה חשוב לבדוק לפני החתימה</h3>
                        <ul className="list-disc pr-6 space-y-2 mb-6">
                            <li><strong>הערבויות</strong> — ערבות חוק מכר, ערבות שכירות, ערבות מסים וערבות בדק. זהו קו ההגנה המרכזי של הדייר.</li>
                            <li><strong>התמורה</strong> — גודל הדירה החדשה, מפרט טכני, מרפסת/חניה/מחסן, ודמי שכירות ראויים לתקופת הבנייה.</li>
                            <li><strong>איתנות היזם</strong> — ניסיון, יציבות פיננסית ופרויקטים קודמים.</li>
                            <li><strong>לוחות זמנים ופיצוי על איחור</strong> — מנגנון פיצוי אם היזם מאחר במסירת הדירה החדשה.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">למה עורך דין מקומי מבקעת אונו?</h3>
                        <p className="mb-4">
                            עורך דין המכיר את אור יהודה ואת הוועדה המקומית לתכנון ובנייה בבקעת אונו מביא יתרון אמיתי: היכרות עם
                            התב"עות המקומיות, עם קצב ההתחדשות בעיר ועם הפרקטיקה מול הרשות. בנוסף — זמינות ונגישות, בלי הצורך לנסוע
                            למרכזי הערים הגדולות.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">קריאה נוספת</h3>
                            <p className="text-gray-700">
                                מדריך מפורט על הזכויות: <Link href="/blog/urban-renewal-rights" className="text-amber-600 font-semibold hover:underline">פינוי-בינוי: כל מה שדייר צריך לדעת</Link>.
                                תחומים קשורים: <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן</Link>,
                                <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline"> ליקויי בנייה</Link>,
                                ו<Link href="/areas/or-yehuda" className="text-amber-600 font-semibold hover:underline">עורך דין באור יהודה</Link>.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">שאלות נפוצות - פינוי בינוי באור יהודה</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">קיבלתם הצעת פינוי-בינוי?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        אל תחתמו לפני בדיקה משפטית בלתי תלויה. פנו אלינו לבדיקת ההסכם והערבויות — ולהגנה על הזכויות שלכם.
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
