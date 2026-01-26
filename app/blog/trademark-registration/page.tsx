'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaTrademark, FaLightbulb, FaGlobe } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function TrademarkRegistration() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                {/* Abstract tech background effect */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')]"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        קניין רוחני וטכנולוגיה
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        רישום סימן מסחר: ההגנה הכי חשובה למותג שלכם
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            27 ינואר, 2026
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
                                השקעתם שנים בבניית מוניטין, עיצוב לוגו ושם? אם לא רשמתם סימן מסחר, המתחרים שלכם יכולים להעתיק אתכם, ואתם עלולים למצוא את עצמכם חסרי אונים.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מה נותן לי סימן מסחר רשום?</h2>
                            <p>
                                סימן מסחר (Trademark) הוא נכס קנייני לכל דבר. הרישום מעניק לכם:
                            </p>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                    <strong className="text-purple-900 block mb-1">בלעדיות:</strong> זכות שימוש ייחודית בסימן עבור הסחורות או השירותים שרשמתם.
                                </li>
                                <li className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                    <strong className="text-purple-900 block mb-1">כוח הרתעה:</strong> היכולת למנוע ממתחרים להשתמש בשם דומה או מטעה, ולתבוע אותם בגין הפרה ללא צורך בהוכחת נזק (במקרים מסוימים).
                                </li>
                                <li className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                    <strong className="text-purple-900 block mb-1">ערך כלכלי:</strong> סימן מסחר חזק מעלה את שווי העסק וניתן למכירה או למתן רישיון (זכיינות).
                                </li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">תהליך הרישום בישראל (ובעולם)</h2>
                            <p>
                                הליך הרישום אורך זמן (כ-4 חודשים עד שנה ויותר) וכולל בחינה קפדנית של רשות הפטנטים. הם בודקים שהסימן אינו "מתאר" מדי (למשל, אי אפשר לרשום את המילה "תפוח" עבור עסק למכירת פירות, אך כן עבור מחשבים), ושהוא אינו דומה מדי לסימנים קיימים.
                            </p>
                            <p>
                                חשוב לדעת שרישום בישראל מגן עליכם <strong>רק בישראל</strong>. אם אתם פונים לשוק הבינלאומי, יש לבצע רישום בינלאומי (פרוטוקול מדריד) כדי להגן על המותג במדינות היעד.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">המותג שלכם שווה הגנה</h3>
                            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                                אל תחכו שמישהו אחר יתפוס לכם את השם. אנו מבצעים בדיקת היתכנות ורישום סימני מסחר בארץ ובעולם.
                            </p>
                            <a href="tel:054-4450244" className="bg-white text-purple-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block hover:bg-gray-100">התייעצות עם עורך דין</a>
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
