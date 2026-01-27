'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaHandshake, FaFileSignature, FaGavel } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function ContractBreach() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-black text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        משפט אזרחי-מסחרי
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        הפרת חוזה: מתי מותר לבטל הסכם ואיך תובעים פיצויים?
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            03 פברואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser className="text-amber-500" />
                            מאת: עו"ד מריאטה פנחסי
                        </span>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                        <div className="prose max-w-none prose-lg text-gray-700">
                            <p className="lead text-xl font-medium text-gray-900 mb-8 border-r-4 border-amber-500 pr-4">
                                "חוזים יש לקיים" הוא כלל הברזל במשפט הישראלי, אבל מה קורה כשהצד השני לא עומד במילה שלו? מתי איחור הופך להפרה, ומתי מותר לכם "לשבור את הכלים"?
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">הפרה יסודית vs הפרה רגילה</h2>
                            <p>
                                החוק מבחין בין שני סוגים של הפרות, וההבדל ביניהן קריטי:
                            </p>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <strong className="text-gray-900 block mb-1">הפרה יסודית:</strong>
                                    הפרה חמורה שאדם סביר לא היה חותם על החוזה לו ידע עליה (למשל: אי תשלום התמורה, איחור קיצוני במסירה), או הפרה שהוגדרה בחוזה כ"יסודית".
                                    <br />
                                    <strong>התוצאה:</strong> זכות ביטול מיידית ואוטומטית + פיצוי מוסכם (לרוב ללא הוכחת נזק).
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <strong className="text-gray-900 block mb-1">הפרה לא יסודית:</strong>
                                    הפרה מינורית יותר.
                                    <br />
                                    <strong>התוצאה:</strong> חובה לתת "ארכה לקיום החוזה" (הזדמנות לתקן) לפני שניתן לבטל את ההסכם.
                                </li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">הפיצוי המוסכם</h2>
                            <p>
                                ברוב החוזים המסחריים (וגם בחוזי דירות) קיים סעיף "פיצוי מוסכם" - סכום קבוע מראש שהמפר ישלם לנפגע. היתרון הגדול הוא שלא צריך להוכיח נזק כדי לקבל אותו. עם זאת, לבית המשפט יש סמכות להפחית את הפיצוי אם הוא נקבע ללא כל יחס סביר לנזק הצפוי.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">חובת הקטנת הנזק</h2>
                            <p>
                                גם אם הצד השני הפר את החוזה, אסור לכם לשבת בחיבוק ידיים ולתת לנזק לגדול. יש לכם חובה משפטית לנסות ולצמצם את הנזק ככל האפשר.
                            </p>
                        </div>
                        <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">הפרו איתכם הסכם?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                אל תרוצו לבטל את החוזה לפני שתתייעצו. ביטול שלא כדין יכול להיחשב בעצמו כהפרת חוזה ולסבך אתכם בתביעה נגדית.
                            </p>
                            <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block">ייעוץ משפטי דחוף</a>
                        </div>
                    </article>
                    <div className="mt-8 text-center">
                        <Link href="/blog" className="text-gray-600 hover:text-amber-600 font-medium inline-flex items-center gap-2 transition-colors">
                            <FaArrowRight /> חזרה לבלוג
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

