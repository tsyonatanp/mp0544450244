
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaHome, FaLandmark, FaRoute } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'עורך דין ביהוד-מונוסון | מריאטה פנחסי - נדל"ן, נוטריון וצוואות',
    description: 'מחפשים עורך דין או עורכת דין ביהוד-מונוסון? משרד עו"ד ונוטריון מריאטה פנחסי משרת את תושבי יהוד ומונוסון בנדל"ן, שירותי נוטריון, ליקויי בנייה, צוואות וירושות. קרבה גיאוגרפית, זמינות גבוהה ויחס אישי.',
    keywords: 'עורך דין יהוד, עורכת דין ביהוד, עורך דין ביהוד, משרד עורכי דין ביהוד, עורך דין מומלץ ביהוד, עורך דין יהוד מונוסון, נוטריון יהוד, נוטריון ביהוד, עורך דין נדלן יהוד, עורך דין מקרקעין יהוד מונוסון, צוואות וירושות יהוד',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/areas/yehud-monosson',
    },
    openGraph: {
        title: 'עורך דין ביהוד-מונוסון - מריאטה פנחסי',
        description: 'משרד עורכי דין מקומי המשרת את יהוד-מונוסון. התמחות בנדל"ן, ליקויי בנייה ושירותי נוטריון.',
        images: ['https://www.marietta-law.co.il/logo.png'],
    }
}

export default function YehudMonossonPage() {
    const faqs = [
        {
            question: "יש לכם משרד ביהוד-מונוסון?",
            answer: "המשרד ממוקם ברחוב חרמון 3 באור יהודה, סמוך מאוד ליהוד-מונוסון (נסיעה קצרה), עם חניה חופשית בשפע. אנו משרתים תושבים רבים מיהוד ומונוסון, ובמקרים מסוימים (כמו שירותי נוטריון לקשישים) ניתן לתאם שירות עד הבית."
        },
        {
            question: "אילו תחומים אתם מטפלים בהם עבור תושבי יהוד?",
            answer: "המשרד מתמחה בדיני נדל\"ן ומקרקעין (מכר, רכישה ורכישה מקבלן), תביעות ליקויי בנייה ואיחור במסירה, שירותי נוטריון (אימות חתימות, תרגומים, ייפוי כוח), וצוואות, ירושות וייפוי כוח מתמשך."
        },
        {
            question: "כמה עולה עורך דין ביהוד-מונוסון?",
            answer: "בעסקאות נדל\"ן שכר הטרחה נע לרוב בין 0.5% ל-1.5% משווי העסקה בתוספת מע\"מ, בהתאם למורכבות העסקה. שירותי נוטריון הם בתעריף אחיד הקבוע בחוק. אנו מספקים הצעת מחיר שקופה מראש."
        },
        {
            question: "אפשר לתאם פגישת ייעוץ ראשונית?",
            answer: "בהחלט. ניתן ליצור קשר בטלפון 054-4450244 או בוואטסאפ לתיאום פגישת ייעוץ. אנו מקפידים על זמינות גבוהה, יחס אישי ודיסקרטיות מלאה לתושבי יהוד-מונוסון והסביבה."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "מריאטה פנחסי - עורכת דין ונוטריון ליהוד-מונוסון",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "חרמון 3",
                            "addressLocality": "אור יהודה",
                            "postalCode": "6041908",
                            "addressRegion": "בקעת אונו"
                        },
                        "telephone": "054-4450244",
                        "areaServed": {
                            "@type": "City",
                            "name": "יהוד-מונוסון"
                        },
                        "url": "https://www.marietta-law.co.il/areas/yehud-monosson"
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
                { label: 'אזורי שירות' },
                { label: 'עורך דין ביהוד-מונוסון' }
            ]} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/city-pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        עורכת דין ונוטריון ביהוד-מונוסון
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        ליווי משפטי מקצועי לתושבי יהוד ומונוסון.
                        <br />
                        משרדנו בבקעת אונו, סמוך ליהוד-מונוסון, ומעניק שירות אישי, נגיש וזמין.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:054-4450244" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                            <FaPhone />
                            054-4450244
                        </a>
                        <a href="https://waze.com/ul?ll=32.0288,34.8564&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-slate-500/30">
                            <FaRoute />
                            ניווט למשרד (WAZE)
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">עורך דין מקומי לתושבי יהוד-מונוסון</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                יהוד-מונוסון היא אחת הערים המבוקשות בבקעת אונו, עם שילוב של שכונות ותיקות ופרויקטי בנייה חדשים.
                                המשרד שלנו ממוקם בבקעת אונו, בקרבת יהוד-מונוסון, ומלווה תושבים רבים מהאזור בעסקאות נדל"ן, בתביעות מול קבלנים ובשירותי נוטריון.
                            </p>
                            <p className="mb-6">
                                ההיכרות שלנו עם שוק הנדל"ן המקומי ועם הרשויות באזור מאפשרת לנו לקדם תהליכים ביעילות ובמהירות,
                                תוך שמירה על יחס אישי וזמינות גבוהה לכל אורך הדרך.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">שירותים לתושבי יהוד-מונוסון:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'ליווי עסקאות מכר ורכישה של דירות ונכסים ביהוד-מונוסון',
                                'תביעות ליקויי בנייה ואיחור במסירה מול קבלנים',
                                'אישורי נוטריון, תרגומים נוטריוניים וייפוי כוח',
                                'צוואות, ירושות וייפוי כוח מתמשך'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                                    <FaHome className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-amber-600" />
                                נוחות הגעה מיהוד-מונוסון
                            </h4>
                            <p className="text-gray-700">
                                <strong>כתובת:</strong> רחוב חרמון 3, אור יהודה (קומת קרקע)
                                <br />
                                <strong>מרחק:</strong> נסיעה קצרה מיהוד-מונוסון
                                <br />
                                <strong>חניה:</strong> חניה בשפע ברחוב ובקרבת מקום (חינם)
                                <br />
                                <strong>שעות קבלה:</strong> בתיאום מראש (גמישות בשעות)
                            </p>
                        </div>

                        {/* In-depth local content */}
                        <div className="prose prose-lg text-gray-600 mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">למה לבחור בעורך דין מקומי ליהוד-מונוסון?</h3>
                            <p className="mb-4">
                                יהוד-מונוסון היא עיר מבוקשת בבקעת אונו, המשלבת שכונות ותיקות עם פרויקטי בנייה חדשים.
                                עורך דין המכיר את שוק הנדל"ן המקומי ואת הרשויות באזור יכול לקדם את ענייניכם ביעילות,
                                בלי הצורך לנסוע למרכזי הערים הגדולות ולחפש חניה.
                            </p>
                            <p className="mb-4">
                                אנו מלווים תושבי יהוד-מונוסון במגוון רחב: מ<Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">ליווי עסקאות נדל"ן</Link>,
                                דרך <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline">תביעות ליקויי בנייה</Link>,
                                ועד <Link href="/services/notary" className="text-amber-600 font-semibold hover:underline">שירותי נוטריון</Link> ו<Link href="/services/family-law" className="text-amber-600 font-semibold hover:underline">צוואות וירושות</Link>.
                                למידע על עלויות ראו <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>.
                            </p>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות - עורך דין ביהוד-מונוסון</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl p-5">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
