import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaHome, FaRoute } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'עורכת דין נדל״ן אור יהודה | מריאטה פנחסי - משרד מקומי וזמין',
    description: 'עורכת דין נדל״ן באור יהודה: ליווי עסקאות מכר ורכישה, ליקויי בנייה ושירותי נוטריון. משרד עו״ד מריאטה פנחסי בחרמון 3, אור יהודה — זמינות גבוהה, חניה בשפע ויחס אישי.',
    keywords: 'עורכת דין נדל״ן אור יהודה, עורכת דין אור יהודה, עורך דין נדלן אור יהודה, נוטריון באור יהודה, עורכת דין מקרקעין אור יהודה, נווה סביון, סביון, בקעת אונו',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/areas/or-yehuda',
    },
    openGraph: {
        title: 'עורכת דין נדל״ן אור יהודה - מריאטה פנחסי',
        description: 'משרד עורכת דין ונוטריון בלב אור יהודה. התמחות בנדל״ן, ליקויי בנייה ושירותי נוטריון מהיום להיום.',
        url: 'https://www.marietta-law.co.il/areas/or-yehuda',
        images: ['https://www.marietta-law.co.il/logo.png'],
        locale: 'he_IL',
        type: 'website',
    }
}

export default function OrYehudaPage() {
    const faqs = [
        {
            question: 'איפה נמצא משרד עורכת הדין באור יהודה?',
            answer: 'המשרד ממוקם ברחוב חרמון 3 באור יהודה (קומת קרקע), עם חניה חופשית בשפע ברחוב ובקרבת מקום. קבלה בתיאום מראש, עם גמישות בשעות.'
        },
        {
            question: 'אילו שירותי נדל״ן אתם מספקים לתושבי אור יהודה?',
            answer: 'ליווי עסקאות מכר ורכישה (יד שנייה ומקבלן), בדיקת חוזים ונסח טאבו, רישום בטאבו, מיסוי מקרקעין, ייצוג בהתחדשות עירונית, ותביעות ליקויי בנייה ואיחור במסירה מול קבלנים באזור.'
        },
        {
            question: 'כמה עולה עורכת דין נדל״ן באור יהודה?',
            answer: 'בעסקאות נדל״ן שכר הטרחה נע לרוב בין 0.5% ל־1.5% משווי העסקה בתוספת מע״מ, בהתאם למורכבות. שירותי נוטריון הם בתעריף אחיד הקבוע בחוק. אנו מספקות הצעת מחיר שקופה וברורה מראש.'
        },
        {
            question: 'האם יש שירות נוטריון עד הבית באור יהודה?',
            answer: 'כן. במקרים של מוגבלות רפואית, קשישים או דחיפות ניתן לתאם שירות נוטריון עד הבית באור יהודה ובסביבה (נווה סביון, בקעת אונו), בתיאום מראש ובתעריף הקבוע בתקנות.'
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
                        "name": "מריאטה פנחסי - עורכת דין נדל״ן ונוטריון באור יהודה",
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
                            "name": "אור יהודה"
                        },
                        "url": "https://www.marietta-law.co.il/areas/or-yehuda"
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
                { label: 'עורכת דין נדל״ן אור יהודה' }
            ]} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/city-pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        עורכת דין נדל״ן אור יהודה
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        ליווי משפטי מקצועי בעסקאות נדל״ן — ליד הבית.
                        <br />
                        משרדנו בלב אור יהודה ומשרת את תושבי העיר, נווה סביון ובקעת אונו.
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">עורכת דין נדל״ן מקומית באור יהודה</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                אור יהודה מתפתחת במהירות: פרויקטי מגורים חדשים, שכונות ותיקות שמתחדשות, וביקוש גבוה לעסקאות מכר ורכישה.
                                כשבוחרים עורכת דין נדל״ן באור יהודה, מרוויחים יותר מנוחות גיאוגרפית — גם היכרות עם הרשות המקומית,
                                מחלקות ההנדסה בעירייה והטאבו האזורי, שמסייעת לקדם תהליכים במהירות ובדיוק.
                            </p>
                            <p className="mb-4">
                                משרד עורכת הדין מריאטה פנחסי ממוקם ברחוב חרמון 3, בלב העיר, ומלווה רוכשים ומוכרים לאורך כל העסקה:
                                מבדיקת נסח טאבו וחוזה, דרך מיסוי מקרקעין ורישום בטאבו, ועד טיפול בליקויי בנייה או איחור במסירה מול קבלן.
                                אין צורך לנסוע לתל אביב ולחפש חניה — השירות המשפטי זמין כאן, ליד הבית.
                            </p>
                            <p className="mb-6">
                                מעבר לנדל״ן, המשרד מעניק גם שירותי נוטריון (אימות חתימה, ייפוי כוח, תרגום נוטריוני וצוואה נוטריונית),
                                וכן ליווי בצוואות וירושות — כך שתושבי אור יהודה, נווה סביון והסביבה מקבלים מענה משפטי מרוכז במקום אחד.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">שירותים לתושבי אור יהודה והסביבה:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'ליווי רכישה ומכירה של דירות ונכסים באור יהודה (יד שנייה ומקבלן)',
                                'בדיקת חוזים, נסח טאבו ורישום בטאבו',
                                'טיפול בליקויי בנייה ואיחור במסירה מול קבלנים באזור',
                                'אישורי נוטריון מהירים (כולל שירות עד הבית לקשישים ומוגבלים)',
                                'צוואות, ירושות וייפוי כוח מתמשך',
                                'ייעוץ במיסוי מקרקעין ומס רכישה'
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
                                איפה אנחנו נמצאים?
                            </h4>
                            <p className="text-gray-700">
                                <strong>כתובת:</strong> רחוב חרמון 3, אור יהודה (קומת קרקע)
                                <br />
                                <strong>חניה:</strong> חניה בשפע ברחוב ובקרבת מקום (חינם)
                                <br />
                                <strong>שעות קבלה:</strong> בתיאום מראש (גמישות בשעות)
                            </p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link href="/#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                                    צרו קשר לייעוץ
                                </Link>
                                <a href="https://wa.me/972544450244" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* In-depth local content */}
                        <div className="prose prose-lg text-gray-600 mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">למה לבחור בעורכת דין נדל״ן באור יהודה?</h3>
                            <p className="mb-4">
                                עסקת נדל״ן באור יהודה — בין אם מדובר בדירת יד שנייה בשכונה ותיקה ובין אם ברכישה מקבלן בפרויקט חדש —
                                דורשת בדיקות מדויקות: זכויות בנכס, שעבודים, היתרים, לוחות זמנים למסירה וערבויות.
                                עורכת דין שמכירה את השוק המקומי ואת הרשויות באזור יכולה לזהות מוקדם סיכונים ולחסוך עיכובים יקרים.
                            </p>
                            <p className="mb-4">
                                אנו מלוות תושבי אור יהודה ובקעת אונו במגוון תחומים: מ
                                <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">ליווי עסקאות נדל״ן</Link>
                                , דרך <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline">תביעות ליקויי בנייה</Link>
                                ו<Link href="/services/notary" className="text-amber-600 font-semibold hover:underline">שירותי נוטריון</Link>,
                                ועד <Link href="/areas/bikat-ono" className="text-amber-600 font-semibold hover:underline">נוטריון בבקעת אונו</Link>.
                                למידע על עלויות ראו <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל״ן</Link>,
                                ולמדריך מקומי ראו גם <Link href="/blog/buying-guide-or-yehuda-2025" className="text-amber-600 font-semibold hover:underline">מדריך רכישת דירה באור יהודה</Link>.
                            </p>
                            <p className="mb-4">
                                שירותים קרובים זמינים גם לתושבי <Link href="/areas/kiryat-ono" className="text-amber-600 font-semibold hover:underline">קריית אונו</Link>
                                , <Link href="/areas/yehud-monosson" className="text-amber-600 font-semibold hover:underline">יהוד-מונוסון</Link>
                                ו<Link href="/areas/ganei-tikva" className="text-amber-600 font-semibold hover:underline">גני תקווה</Link> — כולם בנסיעה קצרה ממשרדנו באור יהודה.
                            </p>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות - עורכת דין נדל״ן באור יהודה</h3>
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
