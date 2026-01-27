'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaHandHoldingHeart, FaChild, FaBalanceScale } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function DivorceProcessGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        דיני משפחה
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        הליך גירושין: איך מתחילים ואיך מסיימים בשלום?
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            10 ינואר, 2026
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
                                ההחלטה לפרק את החבילה היא אף פעם לא קלה. אבל ברגע שההחלטה התקבלה, הדרך שבה תנהלו את ההליך תשפיע על חייכם ועל חיי ילדיכם לשנים רבות.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">שלב ראשון: מרוץ הסמכויות</h2>
                            <p>
                                בישראל קיימת מערכת כפולה: בית המשפט לענייני משפחה (אזרחי) ובית הדין הרבני (דתי). לכל אחד מהם גישה שונה, ולעיתים יש משמעות קריטית לשאלה היכן נפתח התיק ראשון. זהו הצעד הראשון שחייבים להתייעץ לגביו לפני שעושים כל פעולה.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">שלושת עמודי התווך של הגירושין</h2>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <strong className="text-gray-900 block mb-1"><FaChild className="inline ml-2 text-amber-500" /> משמורת וזמני שהות</strong>
                                    חלוקת הזמן ההורי עם הילדים. המגמה היום היא לאחריות הורית משותפת, אך כל מקרה לגופו.
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <strong className="text-gray-900 block mb-1"><FaBalanceScale className="inline ml-2 text-amber-500" /> חלוקת רכוש</strong>
                                    איזון המשאבים שנצברו במהלך החיים המשותפים: נדל"ן, חסכונות, פנסיות וזכויות סוציאליות.
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <strong className="text-gray-900 block mb-1"><FaHandHoldingHeart className="inline ml-2 text-amber-500" /> מזונות</strong>
                                    דמי המזונות נועדו להבטיח את רמת חייהם של הילדים. החישוב השתנה בשנים האחרונות ומתחשב יותר בזמני השהות ובהכנסות שני ההורים.
                                </li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">הסכם או מלחמה?</h2>
                            <p>
                                הדרך הטובה ביותר היא כמובן להגיע להסכם גירושין כולל, המאושר על ידי בית המשפט. זה חוסך זמן, כסף והרבה מאוד כאב לב. משרדנו מתמחה בגישור ובניהול משא ומתן רגיש אך נחוש, כדי להביא אתכם לחוף מבטחים במהירות האפשרית.
                            </p>
                        </div>
                        <div className="bg-indigo-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">צריכים ייעוץ רגיש ומקצועי?</h3>
                            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                                אל תישארו עם השאלות לבד. פנו אלינו לשיחת ייעוץ דיסקרטית ומחייבת.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:054-4450244" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg">054-4450244</a>
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

