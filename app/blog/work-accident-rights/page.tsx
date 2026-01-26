'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaCrutch, FaFirstAid, FaMoneyBillWave } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function WorkAccidentRights() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-red-800 via-rose-900 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        נזיקין וביטוח לאומי
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        תאונת עבודה: אל תתמודדו לבד מול הביטוח הלאומי
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            12 ינואר, 2026
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
                                נפגעתם במהלך העבודה, בדרך אליה או בחזרה ממנה? אתם עשויים להיות זכאים לפיצוי כספי משמעותי, אך הדרך לשם רצופה בירוקרטיה.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מהי בעצם "תאונת עבודה"?</h2>
                            <p>
                                החוק מגדיר תאונת עבודה בצורה רחבה. לא רק פציעה במפעל או במשרד נחשבת לתאונת עבודה, אלא גם תאונת דרכים בדרך לעבודה, מחלת מקצוע שהתפתחה לאורך זמן (כמו בעיות גב או שמיעה), ואפילו אירוע לבבי שנגרם עקב לחץ חריג בעבודה.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">שלושת השלבים למיצוי זכויות</h2>
                            <div className="space-y-6 my-6">
                                <div className="flex gap-4">
                                    <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">דיווח ותיעוד רפואי</h3>
                                        <p>דווחו מיידית למעסיק ופנו לטיפול רפואי. וודאו שבמסמכים הרפואיים כתוב במפורש שהפגיעה ארעה בעבודה.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">דמי פגיעה (90 יום ראשונים)</h3>
                                        <p>הביטוח הלאומי משלם פיצוי על אובדן שכר בגין ימי ההיעדרות הראשונים לאחר התאונה.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">קביעת נכות וקצבה</h3>
                                        <p>במידה ונותרה נכות (זמנית או קבועה), תזומנו לוועדה רפואית שתקבע את אחוזי הנכות ואת גובה המענק או הקצבה החודשית.</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">למה חשוב ייצוג משפטי בוועדה הרפואית?</h2>
                            <p>
                                הוועדות הרפואיות של הביטוח הלאומי ידועות בקשיחותן. עורך דין מנוסה יכין את התיק הרפואי, ינחה אתכם מה לומר ומה לא לומר, וייכנס איתכם לחדר הוועדה כדי להילחם על אחוזי הנכות המגיעים לכם. ההבדל בין 9% ל-10% נכות יכול להיות שווה עשרות אלפי שקלים.
                            </p>
                        </div>
                        <div className="bg-amber-500 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">נפגעתם? אנחנו כאן בשבילכם</h3>
                            <a href="tel:054-4450244" className="bg-white text-amber-600 font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block hover:bg-gray-100">בדיקת זכאות ללא עלות</a>
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
