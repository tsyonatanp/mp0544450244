'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaUser, FaTag, FaCheckCircle, FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function BuyingGuideOrYehuda2025() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "המדריך המלא לרכישת דירה באור יהודה ב-2025",
        "description": "מתכננים לקנות דירה באור יהודה? כל מה שצריך לדעת על התפתחות העיר, השכונות החדשות וההיבטים המשפטיים החשובים לפני שחותמים על חוזה.",
        "image": "https://marita-pinchasi-law.co.il/professional-photo.jpg",
        "author": {
            "@type": "Person",
            "name": "מריאטה פנחסי",
            "url": "https://marita-pinchasi-law.co.il"
        },
        "publisher": {
            "@type": "Organization",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
            "logo": {
                "@type": "ImageObject",
                "url": "https://marita-pinchasi-law.co.il/logo.png"
            }
        },
        "datePublished": "2026-01-26",
        "dateModified": "2026-01-26"
    }

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">נדל"ן</span>
                        <span className="flex items-center gap-2">
                            <FaCalendar />
                            26 ינואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser />
                            עו"ד מריאטה פנחסי
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        המדריך המלא לרכישת דירה באור יהודה ב-2025
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        אור יהודה נמצאת בתנופת פיתוח אדירה עם שכונות חדשות כמו "בית בפארק" ופרויקטים של התחדשות עירונית.
                        מה חשוב לבדוק לפני שקונים דירה בעיר ואיך נמנעים מטעויות יקרות?
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            בשנים האחרונות הפכה אור יהודה לאחת הערים המבוקשות ביותר בבקעת אונו.
                            המיקום המרכזי, הנגישות לכבישים ראשיים והשקעה מסיבית בחינוך ובתשתיות מושכים משפחות רבות ומשקיעים.
                            אך כמו בכל עסקת נדל"ן, גם כאן ישנם דגשים משפטיים ותכנוניים שחייבים להכיר.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. הכירו את השכונות החדשות והוותיקות</h2>
                        <p>
                            שכונת "בית בפארק" החדשה מציעה סטנדרט בנייה מודרני, אך חשוב לבדוק את מועדי המסירה ואת היטלי הפיתוח.
                            לעומת זאת, בשכונות הוותיקות המיועדות לפינוי-בינוי, יש לבדוק את הסטטוס המשפטי של הפרויקט והערות האזהרה בטאבו.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. בדיקת המצב התכנוני</h2>
                        <p>
                            לפני חתימה על זיכרון דברים (שמומלץ להימנע ממנו ככל האפשר), חובה לבדוק את תיק הבניין בעירייה.
                            האם יש חריגות בנייה בדירה? האם יש צווי הריסה? האם הייעוד הוא למגורים?
                            באור יהודה, כמו בערים מתפתחות אחרות, שינויי תב"ע הם דבר נפוץ שחשוב להיות ערים לו.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. מס רכישה ומיסוי מקרקעין</h2>
                        <p>
                            תכנון מס נכון יכול לחסוך לכם עשרות ואף מאות אלפי שקלים.
                            בדקו זכאות לפטורים או הקלות במס רכישה (למשל לדירה יחידה, עולים חדשים או נכים).
                            עו"ד מקרקעין יבצע עבורכם סימולציית מס מדויקת לפני ביצוע העסקה.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "אל תסתמכו על הבטחות בעל פה, לא של המתווך ולא של המוכר. הכל חייב להיות מעוגן בחוזה המכר ובבדיקות המקדימות.
                                בדיקה משפטית יסודית היא תעודת הביטוח שלכם לעסקה הגדולה בחייכם."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. ליווי משפטי בעסקאות מקבלן</h2>
                        <p>
                            ברכישת דירה מקבלן ("על הנייר"), החוזה הוא ארוך ומורכב ולרוב נוטה לטובת הקבלן.
                            חשוב מאוד שעורך דין מטעמכם יעבור על המפרט הטכני, לוחות הזמנים, הביטחונות (ערבות חוק מכר) ומנגנון הצמדת המדד.
                        </p>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">מתכננים לקנות דירה באור יהודה?</h3>
                                <p className="text-gray-300">אל תקחו סיכונים מיותרים. פנו אלינו לייעוץ משפטי מקצועי.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                                    <FaPhone />
                                    חייגו
                                </a>
                                <a href="https://wa.me/972544450244" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                                    <FaWhatsapp />
                                    וואטסאפ
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Tags area */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {['אור יהודה', 'נדל"ן', 'רכישת דירה', 'מיסוי מקרקעין', 'חוזה מכר'].map((tag, idx) => (
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

