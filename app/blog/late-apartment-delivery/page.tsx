'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function LateApartmentDelivery() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "איחור במסירת דירה מקבלן: הזכויות שלכם ואיך למצות פיצויים",
        "description": "הקבלן לא מסר את הדירה במועד שנקבע בחוזה? חוק המכר קובע פיצוי חד-משמעי. כל מה שצריך לדעת על חישוב הפיצוי, הגשת תביעה ואיך לפעול נכון.",
        "image": "https://www.marietta-law.co.il/professional-photo.jpg",
        "author": {
            "@type": "Person",
            "name": "מריאטה פנחסי",
            "url": "https://www.marietta-law.co.il"
        },
        "publisher": {
            "@type": "Organization",
            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.marietta-law.co.il/logo.png"
            }
        },
        "datePublished": "2026-03-16",
        "dateModified": "2026-03-16"
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
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">ליקויי בנייה</span>
                        <span className="flex items-center gap-2">
                            <FaCalendar />
                            16 מרץ, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser />
                            עו"ד מריאטה פנחסי
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        איחור במסירת דירה מקבלן: הזכויות שלכם ואיך למצות פיצויים
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        קניתם דירה על הנייר, ועכשיו הקבלן מאחר במסירה? אתם לא לבד — וחשוב שתדעו:
                        החוק לצידכם. כל חודש איחור שווה לכם כסף — ואנחנו מסבירים בדיוק כמה.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content text-lg text-gray-800 leading-relaxed space-y-8">

                        <p>
                            רכישת דירה מקבלן היא אחת ההחלטות הכלכליות הגדולות בחיים. כאשר הקבלן מפר
                            את הבטחתו ומאחר במסירת הדירה — הנזק הוא כפול: התמהמהות בכניסה לדירה
                            ובד"כ גם תשלום שכירות מיותר. חוק המכר (דירות) קובע פיצוי ברור וחד-משמעי.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. מהי "תקופת הגרייס" המותרת?</h2>
                        <p>
                            גם כשיש איחור, החוק מאפשר לקבלן <strong>תקופת איחור מוצדקת של עד 60 ימים</strong> ללא פיצוי.
                            מהיום ה-61 ואילך — הקבלן חייב לשלם לכם פיצוי חודשי. לכן, בדקו בחוזה שלכם
                            מה מועד המסירה המוסכם, ספרו 60 יום — ומיום ה-61 שעבר מתחיל השעון לרוץ.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. כמה פיצוי מגיע לי?</h2>
                        <p>
                            לפי תיקון 5 לחוק המכר (דירות), שיעור הפיצוי הוא:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-base">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-4 text-right">תקופת האיחור</th>
                                        <th className="p-4 text-right">שיעור הפיצוי החודשי</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 bg-amber-50">
                                        <td className="p-4">חודשים 1-8 (לאחר 60 ימי גרייס)</td>
                                        <td className="p-4 font-bold">1.5 × דמי שכירות ראויים</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4">מחודש 9 ואילך</td>
                                        <td className="p-4 font-bold">1.25 × דמי שכירות ראויים</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            "דמי שכירות ראויים" הם שכר הדירה שניתן לקבל בשוק עבור דירה דומה באותו אזור.
                            לדוגמה: אם שכר דירה ראוי הוא 5,000 ₪ לחודש — מגיע לכם 7,500 ₪ לחודש ב-8 החודשים הראשונים.
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border-r-4 border-amber-500 my-8">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">טיפ של עורכת דין:</h3>
                            <p className="text-gray-700">
                                "שמרו כל מכתב ותקשורת עם הקבלן. לקבלנים יש נטייה לטעון ל'נסיבות שאינן בשליטתם'
                                (מלחמה, שביתות, מזג אוויר). תיעוד מדויק יקשה עליהם להתחמק מהפיצוי המגיע לכם."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. האם הקבלן יכול לפטור עצמו מהפיצוי בחוזה?</h2>
                        <p>
                            <strong>לא.</strong> סעיף בחוזה שמנסה להוציא את הקבלן מחבות פיצוי לפי חוק המכר
                            הוא בטל ומבוטל. אפילו אם חתמתם על סעיף כזה — הוא לא תקף.
                            זה אחד הנושאים שחשוב שעורך דין יבדוק בחוזה לפני החתימה.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. כיצד תובעים פיצוי?</h2>
                        <ul className="list-none space-y-3 pr-4">
                            {[
                                'שלח מכתב התראה רשמי לקבלן (רצוי באמצעות עורך דין)',
                                'אסוף ראיות לאיחור: תמונות, התכתבויות, עדויות',
                                'בירור שכר דירה ראוי באמצעות שמאי או עורך דין',
                                'הגשת תביעה לבית משפט שלום (עד 2.5 מיליון ₪) או לבית משפט מחוזי',
                                'שקול גישור — לעיתים מהיר ויעיל יותר',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. האם כדאי לסרב לקבל את הדירה?</h2>
                        <p>
                            <strong>לא!</strong> סירוב לקבל את הדירה עלול לפגוע בזכאות שלכם לפיצויים.
                            קבלו את הדירה, חתמו על פרוטוקול מסירה המפרט את הליקויים שמצאתם —
                            והמשיכו לתביעת הפיצויים בנפרד.
                        </p>

                        <hr className="border-gray-200 my-12" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">הקבלן איחר במסירה?</h3>
                                <p className="text-gray-300">אל תוותרו על הפיצוי שמגיע לכם. פנו אלינו לייעוץ ראשוני.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                    <FaPhone />
                                    חייגו
                                </a>
                                <a href="https://wa.me/972544450244" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                                    <FaWhatsapp />
                                    וואטסאפ
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {['איחור מסירה', 'קבלן', 'חוק המכר', 'פיצויים', 'ליקויי בנייה', 'נדל"ן'].map((tag, idx) => (
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
