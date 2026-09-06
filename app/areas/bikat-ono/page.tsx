import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaHome, FaRoute } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'נוטריון בקעת אונו | מריאטה פנחסי - אימות חתימה, ייפוי כוח ותרגום',
    description: 'נוטריון בבקעת אונו: אימות חתימה, ייפוי כוח, תרגום נוטריוני וצוואה נוטריונית. משרד עורכת דין ונוטריון מריאטה פנחסי באור יהודה — זמינות גבוהה, תעריף חוקי ושירות עד הבית במקרים מתאימים.',
    keywords: 'נוטריון בקעת אונו, נוטריון בבקעת אונו, נוטריון אור יהודה, נוטריון קריית אונו, נוטריון יהוד, אימות חתימה בקעת אונו, ייפוי כוח נוטריוני, תרגום נוטריוני',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/areas/bikat-ono',
    },
    openGraph: {
        title: 'נוטריון בקעת אונו - מריאטה פנחסי',
        description: 'שירותי נוטריון מקצועיים לתושבי בקעת אונו: אור יהודה, קריית אונו, יהוד וגני תקווה. זמינות גבוהה ויחס אישי.',
        url: 'https://www.marietta-law.co.il/areas/bikat-ono',
        images: ['https://www.marietta-law.co.il/logo.png'],
        locale: 'he_IL',
        type: 'website',
    }
}

export default function BikatOnoPage() {
    const faqs = [
        {
            question: 'איפה מקבלים שירותי נוטריון בבקעת אונו?',
            answer: 'המשרד ממוקם ברחוב חרמון 3 באור יהודה — בלב בקעת אונו — ומשרת תושבי אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה וסביון. חניה בשפע וקבלה בתיאום מראש.'
        },
        {
            question: 'אילו שירותי נוטריון זמינים באזור?',
            answer: 'אימות חתימה על מסמכים וייפויי כוח (כולל למשכנתא), אישור העתק נאמן למקור, תרגום נוטריוני, צוואה נוטריונית, וייפוי כוח מתמשך. רוב האישורים ניתנים במקום בפגישה אחת.'
        },
        {
            question: 'כמה עולה נוטריון בבקעת אונו?',
            answer: 'שכר הטרחה של נוטריון קבוע בתקנות ואחיד לכל הנוטריונים בישראל — אסור לגבות יותר או פחות מהתעריף. המחיר תלוי בסוג האישור, מספר החותמים ומספר העותקים, ומתעדכן מדי שנה.'
        },
        {
            question: 'האם אפשר לקבל נוטריון עד הבית בבקעת אונו?',
            answer: 'במקרים של מוגבלות רפואית, ריתוק למיטה או דחיפות מיוחדת ניתן לתאם שירות נוטריון עד הבית באזור בקעת אונו, בתיאום מראש ובתעריף הקבוע בתקנות.'
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
                        "name": "מריאטה פנחסי - נוטריון בקעת אונו",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "חרמון 3",
                            "addressLocality": "אור יהודה",
                            "postalCode": "6041908",
                            "addressRegion": "בקעת אונו"
                        },
                        "telephone": "054-4450244",
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "בקעת אונו"
                        },
                        "url": "https://www.marietta-law.co.il/areas/bikat-ono"
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
                { label: 'נוטריון בקעת אונו' }
            ]} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/city-pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        נוטריון בקעת אונו
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        שירותי נוטריון מקצועיים, מהירים וזמינים לתושבי האזור.
                        <br />
                        משרד בלב בקעת אונו — אור יהודה, קריית אונו, יהוד וגני תקווה.
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">נוטריון מקומי לתושבי בקעת אונו</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                בקעת אונו — הכוללת את אור יהודה, קריית אונו, יהוד-מונוסון, גני תקווה ויישובים סמוכים —
                                היא אזור מגורים ועסקים תוסס, עם צורך יומיומי באישורים נוטריוניים: ייפוי כוח למשכנתא,
                                אימות חתימה על מסמכים, תרגומים לחו״ל וצוואות נוטריוניות.
                            </p>
                            <p className="mb-4">
                                עורכת הדין והנוטריון מריאטה פנחסי מעניקה שירותי נוטריון בבקעת אונו ממשרד ברחוב חרמון 3 באור יהודה,
                                במרחק נסיעה קצר מכל יישובי האזור. השירות ניתן בעברית, באנגלית וברומנית, עם דגש על זמינות,
                                דיוק ובהירות — כדי שתצאו מהפגישה עם המסמך המוכן.
                            </p>
                            <p className="mb-6">
                                חשוב לדעת: שכר הטרחה של נוטריון קבוע בחוק ואחיד בכל הארץ. ההבדל בין משרדים הוא ברמת השירות,
                                במהירות ובנוחות ההגעה — ולכן נוטריון מקומי בבקעת אונו חוסך זמן יקר בלי לשנות את המחיר.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">שירותי נוטריון באזור:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'אימות חתימה על ייפויי כוח, הסכמים והצהרות',
                                'ייפוי כוח למשכנתא ואישורי בנק',
                                'תרגום נוטריוני ותעודות לחו״ל (כולל הנחיה לאפוסטיל)',
                                'צוואה נוטריונית וייפוי כוח מתמשך',
                                'אישור העתק נאמן למקור',
                                'שירות נוטריון עד הבית במקרים מתאימים'
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
                                נוחות הגעה מכל בקעת אונו
                            </h4>
                            <p className="text-gray-700">
                                <strong>כתובת:</strong> רחוב חרמון 3, אור יהודה (קומת קרקע)
                                <br />
                                <strong>אזור שירות:</strong> אור יהודה, קריית אונו, יהוד, גני תקווה וסביון
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
                                <Link href="/services/notary" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                                    פירוט שירותי נוטריון
                                </Link>
                            </div>
                        </div>

                        {/* In-depth local content */}
                        <div className="prose prose-lg text-gray-600 mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">למה לבחור בנוטריון מקומי בבקעת אונו?</h3>
                            <p className="mb-4">
                                אישור נוטריוני דורש זיהוי פנים אל פנים של החותם. לכן קרבה גיאוגרפית חשובה:
                                במקום לנסוע למרכז תל אביב, תושבי בקעת אונו יכולים להגיע למשרד באור יהודה תוך דקות,
                                עם חניה נוחה וזמינות גבוהה לתיאום פגישה.
                            </p>
                            <p className="mb-4">
                                מעבר לנוטריון, המשרד מלווה גם בעסקאות נדל״ן ובליקויי בנייה — שילוב שימושי כשצריך
                                גם אישור נוטריוני וגם ליווי משפטי לעסקה. למידע מורחב ראו את עמוד
                                {' '}<Link href="/services/notary" className="text-amber-600 font-semibold hover:underline">שירותי הנוטריון</Link>
                                , את <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עמוד הנדל״ן</Link>
                                , ואת <Link href="/blog/enduring-power-of-attorney" className="text-amber-600 font-semibold hover:underline">המדריך לייפוי כוח מתמשך</Link>.
                            </p>
                            <p className="mb-4">
                                דפי שירות מקומיים נוספים:{' '}
                                <Link href="/areas/or-yehuda" className="text-amber-600 font-semibold hover:underline">עורכת דין נדל״ן אור יהודה</Link>
                                {' · '}
                                <Link href="/areas/kiryat-ono" className="text-amber-600 font-semibold hover:underline">קריית אונו</Link>
                                {' · '}
                                <Link href="/areas/yehud-monosson" className="text-amber-600 font-semibold hover:underline">יהוד-מונוסון</Link>
                                {' · '}
                                <Link href="/areas/ganei-tikva" className="text-amber-600 font-semibold hover:underline">גני תקווה</Link>.
                            </p>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות - נוטריון בקעת אונו</h3>
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
