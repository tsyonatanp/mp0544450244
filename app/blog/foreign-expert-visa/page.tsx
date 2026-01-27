'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaPassport, FaGlobeAmericas, FaBriefcase } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function ForeignExpertVisa() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-white text-blue-900 text-sm font-bold px-4 py-1 rounded-full">
                        הגירה ואשרות
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        ויזת מומחה זר: איך להביא עובדים בינלאומיים לישראל?
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-100 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-400" />
                            29 ינואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser className="text-amber-400" />
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
                                העולם הגלובלי מחייב לעיתים גיוס של טאלנטים שאין בנמצא בישראל. בין אם מדובר בשף למסעדת יוקרה, מהנדס תוכנה או מנהל פרויקט בכיר - הדרך להיתר העסקה עוברת בבירוקרטיה סבוכה.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">מהי ויזת ב-1 (מומחה)?</h2>
                            <p>
                                ויזת ב-1 למומחה זר היא האשרה היוקרתית והמבוקשת ביותר. היא מאפשרת לחברות ישראליות להעסיק אזרחים זרים בעלי "מומחיות ייחודית" שאין לה מקבילה בשוק העבודה המקומי.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">התנאים לקבלת ההיתר</h2>
                            <p>
                                רשות האוכלוסין וההגירה אינה מחלקת אשרות אלו בקלות. עליכם להוכיח:
                            </p>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">💰 שכר גבוה</strong>
                                    על המעסיק לשלם למומחה שכר שלפחות כפול מהשכר הממוצע במשק (נכון ל-2025 מדובר על מעל 25,000 ש"ח ברוטו).
                                </li>
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">🎓 מומחיות מוכחת</strong>
                                    יש להציג תעודות אקדמיות, ניסיון מקצועי והמלצות המוכיחות שהעובד הוא אכן בעל ידע נדיר.
                                </li>
                                <li className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <strong className="text-blue-900 block mb-1">🏢 נחיצות</strong>
                                    הסבר מדוע לא ניתן לאייש את המשרה על ידי עובד ישראלי.
                                </li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">המסלול המהיר להייטק (SEA)</h2>
                            <p>
                                לטובת חברות ההייטק, יצרה המדינה מסלול ניסיוני מהיר (SEA) המאפשר להביא מומחים טכנולוגיים תוך ימים ספורים, בהליך מקוצר, וגם מאפשר לבני זוגם לקבל אישור עבודה בישראל.
                            </p>
                        </div>
                        <div className="bg-blue-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">צריכים עזרה מול משרד הפנים?</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                טיפול לא מקצועי בבקשה עלול להוביל לסירובה ולחסימת האפשרות להביא את העובד. תנו למומחים לטפל במומחים שלכם.
                            </p>
                            <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block">ייעוץ להסדרת מעמד</a>
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

