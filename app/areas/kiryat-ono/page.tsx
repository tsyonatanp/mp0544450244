
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaHome, FaLandmark, FaRoute } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'עורך דין בקריית אונו | מריאטה פנחסי - נדל"ן, נוטריון וירושות',
    description: 'מחפשים עורך דין או עורכת דין בקריית אונו? משרד עו"ד ונוטריון מריאטה פנחסי משרת את תושבי קריית אונו בנדל"ן, שירותי נוטריון, ליקויי בנייה, צוואות וירושות. דקות נסיעה, זמינות גבוהה ויחס אישי.',
    keywords: 'עורך דין קריית אונו, עורכת דין קריית אונו, עורך דין בקרית אונו, נוטריון קריית אונו, נוטריון בקרית אונו, עורך דין נדלן קריית אונו, עורך דין מקרקעין קריית אונו, עורך דין מומלץ קרית אונו, משרד עורכי דין קרית אונו, ליקויי בנייה קריית אונו, צוואות וירושות קרית אונו',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/areas/kiryat-ono',
    },
    openGraph: {
        title: 'עורך דין בקריית אונו - מריאטה פנחסי',
        description: 'משרד עורכי דין מקומי המשרת את קריית אונו ובקעת אונו. התמחות בנדל"ן, ליקויי בנייה ושירותי נוטריון.',
        images: ['https://www.marietta-law.co.il/logo.png'],
    }
}

export default function KiryatOnoPage() {
    const faqs = [
        {
            question: "יש לכם משרד פיזי בקריית אונו?",
            answer: "המשרד ממוקם ברחוב חרמון 3 באור יהודה, במרחק נסיעה של דקות ספורות מקריית אונו, עם חניה חופשית בשפע. אנחנו מכירים היטב את קריית אונו ומשרתים תושבים רבים מהעיר. במקרים מסוימים (למשל שירותי נוטריון לקשישים) ניתן לתאם גם שירות עד הבית."
        },
        {
            question: "אילו שירותים משפטיים אתם מספקים לתושבי קריית אונו?",
            answer: "המשרד מתמחה בדיני נדל\"ן ומקרקעין (מכר, רכישה, רכישה מקבלן), התחדשות עירונית ופינוי-בינוי - נושא רלוונטי במיוחד בקריית אונו לאור תנופת הבנייה בעיר - תביעות ליקויי בנייה ואיחור במסירה, שירותי נוטריון, וצוואות וירושות."
        },
        {
            question: "כמה עולה עורך דין בקריית אונו?",
            answer: "בעסקאות נדל\"ן שכר הטרחה נע לרוב בין 0.5% ל-1.5% משווי העסקה בתוספת מע\"מ, בהתאם למורכבות. שירותי נוטריון הם בתעריף אחיד הקבוע בחוק. אנחנו מספקים הצעת מחיר שקופה וברורה מראש, ללא הפתעות."
        },
        {
            question: "האם אתם מלווים פרויקטים של התחדשות עירונית בקריית אונו?",
            answer: "כן. קריית אונו נמצאת בתנופת התחדשות עירונית, ואנו מלווים דיירים בבדיקת הסכמי פינוי-בינוי ותמ\"א 38, בדיקת ערבויות וזכויות, וייצוג מול יזמים - כדי לוודא שהזכויות שלכם מוגנות לפני החתימה."
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
                        "name": "מריאטה פנחסי - עורכת דין ונוטריון לקריית אונו",
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
                            "name": "קריית אונו"
                        },
                        "url": "https://www.marietta-law.co.il/areas/kiryat-ono"
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
                { label: 'עורך דין בקריית אונו' }
            ]} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/city-pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        עורכת דין ונוטריון בקריית אונו
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        ליווי משפטי מקצועי לתושבי קריית אונו.
                        <br />
                        משרדנו בלב בקעת אונו, דקות נסיעה בלבד מקריית אונו, ומעניק שירות אישי וזמין.
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">עורך דין מקומי לתושבי קריית אונו</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                קריית אונו עוברת בשנים האחרונות תנופת התחדשות עירונית ובנייה חדשה, ועמה עולה הצורך בליווי משפטי צמוד בעסקאות נדל"ן.
                                המשרד שלנו ממוקם בבקעת אונו, במרחק נסיעה קצר מקריית אונו, ומכיר היטב את שוק הנדל"ן המקומי, את פרויקטי הפינוי-בינוי באזור ואת הרשויות הרלוונטיות.
                            </p>
                            <p className="mb-6">
                                בין אם אתם רוכשים דירה בפרויקט חדש, מוכרים נכס, מתמודדים עם ליקויי בנייה מול קבלן, או זקוקים לשירותי נוטריון –
                                אנו מעניקים שירות אישי, מהיר ומקצועי, בלי הצורך לנסוע לתל אביב ולחפש חניה.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">שירותים לתושבי קריית אונו:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'ליווי עסקאות מכר ורכישה של דירות ונכסים בקריית אונו',
                                'ייצוג בפרויקטי התחדשות עירונית ופינוי-בינוי',
                                'תביעות ליקויי בנייה ואיחור במסירה מול קבלנים',
                                'שירותי נוטריון, צוואות וירושות'
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
                                נוחות הגעה מקריית אונו
                            </h4>
                            <p className="text-gray-700">
                                <strong>כתובת:</strong> רחוב חרמון 3, אור יהודה (קומת קרקע)
                                <br />
                                <strong>מרחק:</strong> דקות נסיעה ספורות מקריית אונו
                                <br />
                                <strong>חניה:</strong> חניה בשפע ברחוב ובקרבת מקום (חינם)
                                <br />
                                <strong>שעות קבלה:</strong> בתיאום מראש (גמישות בשעות)
                            </p>
                        </div>

                        {/* In-depth local content */}
                        <div className="prose prose-lg text-gray-600 mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">למה לבחור בעורך דין מקומי לקריית אונו?</h3>
                            <p className="mb-4">
                                קריית אונו היא מהערים המבוקשות בגוש דן, עם ביקוש גבוה לדירות ותנופת התחדשות עירונית מהמשמעותיות באזור.
                                עורך דין המכיר את השוק המקומי, את הרשויות ואת הוועדה המקומית לתכנון ובנייה – יכול לקדם את ענייניכם
                                במהירות וביעילות, ולזהות מוקדם סיכונים שעורך דין מרוחק עלול לפספס.
                            </p>
                            <p className="mb-4">
                                אנו מלווים תושבי קריית אונו במגוון תחומים: מרכישה ומכירה של דירות, דרך <Link href="/blog/urban-renewal-rights" className="text-amber-600 font-semibold hover:underline">זכויות דייר בפינוי-בינוי</Link>,
                                ועד <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline">תביעות ליקויי בנייה</Link> ו<Link href="/services/notary" className="text-amber-600 font-semibold hover:underline">שירותי נוטריון</Link>.
                                למידע על עלויות ראו <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>.
                            </p>
                        </div>

                        {/* FAQ */}
                        <div className="mt-12 border-t border-gray-100 pt-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">שאלות נפוצות - עורך דין בקריית אונו</h3>
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
