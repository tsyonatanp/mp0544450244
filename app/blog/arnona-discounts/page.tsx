'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaBuilding, FaPercentage, FaFileInvoiceDollar } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function ArnonaDiscounts() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        משפט מנהלי
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            25 ינואר, 2026
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
                                חיוב הארנונה הוא אחת ההוצאות הכבדות ביותר לכל עסק. אך האם ידעתם שטעויות בחישוב הארנונה הן נפוצות מאוד, ורובן לרעתכם?
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">הטעויות הנפוצות בחיוב הארנונה</h2>
                            <p>
                                הרשויות המקומיות מחשבות את הארנונה על בסיס שטח הנכס, סוג השימוש והאזור. הטעויות הנפוצות כוללות:
                            </p>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>מדידה שגויה:</strong> הכללת שטחים שאסור לחייב עליהם (כמו שטחים משותפים מסוימים או שטחים שגובהם נמוך מהתקן).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>סיווג שגוי:</strong> חיוב לפי תעריף "משרדים" יקר במקום "תעשייה" או "מלאכה" זולים יותר, או חיוב שטחי אחסנה כתעריף עיקרי.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaFileInvoiceDollar className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>נכס ריק:</strong> אי מתן פטור לנכס ריק ולא ראוי לשימוש.</span>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">תהליך ההשגה</h2>
                            <p>
                                אם קיבלתם חיוב ארנונה שגוי, יש לכם חלון זמן קצר לפעול. החוק מאפשר להגיש <strong>"השגה"</strong> למנהל הארנונה בתוך 90 יום מקבלת הודעת התשלום השנתית.
                            </p>
                            <p>
                                בהשגה יש לפרט את כל הטענות העובדתיות והמשפטיות, ולצרף מדידות נגדיות במידת הצורך. אם ההשגה נדחית, ניתן להגיש ערר לוועדת הערר לענייני ארנונה, ולאחר מכן עתירה מנהלית לבית המשפט.
                            </p>
                        </div>
                        <div className="bg-slate-800 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">משלמים יותר מדי ארנונה?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                בדיקה מקצועית של חיובי הארנונה יכולה לחסוך לעסק שלכם עשרות ואף מאות אלפי שקלים בשנה.
                            </p>
                            <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block">בדיקת חיוב הארנונה</a>
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

