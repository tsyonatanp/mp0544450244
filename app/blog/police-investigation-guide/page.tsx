'use client'

import React from 'react'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaFingerprint, FaGavel, FaUserSecret } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function PoliceInvestigationGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        משפט פלילי
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        חקירה במשטרה: כל מה שצריך לדעת לפני שנכנסים לחדר החקירות
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            22 ינואר, 2026
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
                                הטלפון מצלצל, ועל הקו שוטר שמזמן אתכם לחקירה. הלחץ בשמיים, אבל הטעויות שתעשו בשעות הקרובות עלולות ללוות אתכם לכל החיים.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">זכות ההיוועצות - קלף הזהב שלכם</h2>
                            <p>
                                הכלל הראשון והחשוב ביותר: <strong>יש לכם זכות להתייעץ עם עורך דין לפני החקירה</strong>. לא מדובר ב"הודאה באשמה" וזה לא גורם לכם להיראות חשודים יותר. זוהי זכות יסוד. השוטרים עשויים לנסות לשכנע אתכם לוותר עליה ("סתם יקח זמן", "תספר וזהו"), אך אסור ליפול במלכודת הזו.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">זכות השתיקה</h2>
                            <p>
                                אם אתם חשים שכל דבר שתאמרו יפליל אתכם, שמורה לכם זכות השתיקה. עם זאת, יש להשתמש בה בחוכמה, שכן שתיקה עלולה לעיתים לחזק את הראיות נגדכם ("שתיקה כהודאה"). ההחלטה האם לשתוק או לדבר חייבת להתקבל רק לאחר ייעוץ משפטי.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">תרגילי חקירה נפוצים</h2>
                            <ul className="space-y-4 my-6 list-none pr-0">
                                <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <strong className="text-gray-900 block mb-1">🕵️ השוטר הטוב והשוטר הרע</strong>
                                    קלאסיקה שעדיין עובדת. אחד מפחיד, והשני "רק רוצה לעזור לכם". שניהם רוצים שתפלילו את עצמכם.
                                </li>
                                <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <strong className="text-gray-900 block mb-1">🤥 "החבר שלך כבר סיפר הכל"</strong>
                                    פעמים רבות השוטרים ישקרו ויגידו שיש להם ראיות שלא קיימות, כדי לגרום לכם להודות.
                                </li>
                                <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                    <strong className="text-gray-900 block mb-1">☕ השיחה במסדרון / סיגריה</strong>
                                    אין דבר כזה "שיחה לא לפרוטוקול". כל מילה שאתם מחליפים עם שוטר, גם בהפסקת סיגריה, נרשמת בזיכרון דברים ויכולה לשמש נגדכם.
                                </li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">סיכום</h2>
                            <p>
                                חקירה משטרתית היא אירוע מלחיץ ומתוכנן היטב שנועד להוציא מכם מידע. אל תתמודדו איתו לבד. עורך דין פלילי זמין 24/7 כדי להגיע לתחנה ולייעץ לכם לפני שיהיה מאוחר מדי.
                            </p>
                        </div>
                        <div className="bg-gray-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">זהו מקרה חירום?</h3>
                            <a href="tel:054-4450244" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg inline-block animate-pulse">חייגו עכשיו: 054-4450244</a>
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
