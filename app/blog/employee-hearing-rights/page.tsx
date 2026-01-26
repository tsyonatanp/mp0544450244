'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaBriefcase, FaGavel, FaBullhorn } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function EmployeeHearingRights() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-blue-900 via-sky-900 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        דיני עבודה
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        זומנת לשימוע? דע את זכויותיך לפני הפיטורין
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            18 ינואר, 2026
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
                                ההזמנה לשימוע היא רגע מלחיץ, אך היא לא סוף פסוק. שימוע הוא הליך משפטי מחייב, ואם הוא לא מתבצע כהלכה - הפיטורין עשויים להיחשב שלא כדין.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מהו בכלל שימוע?</h2>
                            <p>
                                שימוע הוא הזדמנות אמיתית וכנה הניתנת לעובד לשכנע את המעסיק שלא לפטר אותו. המעסיק חייב להגיע לשימוע "בלב פתוח ובנפש חפצה", ולא כאשר ההחלטה כבר התקבלה מראש.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5 הכללים לשימוע תקין</h2>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">1. הודעה מוקדמת בכתב</strong>
                                    על המעסיק לזמן את העובד לשימוע בכתב, זמן סביר מראש (לפחות 48-72 שעות), כדי לאפשר לו להיערך.
                                </li>
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">2. פירוט הטענות</strong>
                                    בהזמנה לשימוע חייבות להיות מפורטות כל הסיבות והטענות שבגינן נשקלים הפיטורים. אסור למעסיק להעלות בשימוע טענות חדשות שהעובד לא ידע עליהן.
                                </li>
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">3. זכות הייצוג</strong>
                                    לעובד יש זכות מלאה להגיע לשימוע מלווה בעורך דין.
                                </li>
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">4. פרוטוקול</strong>
                                    במהלך השימוע חייב להירשם פרוטוקול מדויק המשקף את הדברים שנאמרו. זכותכם לקבל עותק ולתקן אותו אם אינו מדויק.
                                </li>
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">5. מתן תשובה תוך זמן סביר</strong>
                                    אסור למעסיק לתת תשובה במקום. עליו לשקול את הטענות ולתת תשובה לאחר מס' ימים.
                                </li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מה אם השימוע היה "משחק מכור"?</h2>
                            <p>
                                אם המעסיק פיטר אתכם ללא שימוע, או שערך שימוע למראית עין בלבד כאשר מכתב הפיטורים כבר היה מוכן במגירה - אתם עשויים להיות זכאים לפיצוי של עשרות אלפי שקלים בבית הדין לעבודה, בגין פיטורים שלא כדין.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">אל תלכו לשימוע לבד</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                ייעוץ משפטי לפני השימוע יכול לשנות את התוצאה, או לפחות להבטיח שתקבלו את מקסימום הפיצויים המגיעים לכם.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:054-4450244" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:bg-gray-100">חייגו לייעוץ: 054-4450244</a>
                            </div>
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
