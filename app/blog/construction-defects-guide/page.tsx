'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaFileContract, FaClock } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function ConstructionDefectsGuide() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        ליקויי בנייה ונדל"ן
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        ליקויי בנייה בדירה חדשה: המדריך המלא לזכויות הרוכשים (2025)
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-amber-500" />
                            15 ינואר, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <FaUser className="text-amber-500" />
                            מאת: עו"ד מריאטה פנחסי
                        </span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

                        <div className="prose max-w-none prose-lg text-gray-700">
                            <p className="lead text-xl font-medium text-gray-900 mb-8 border-r-4 border-amber-500 pr-4">
                                נכנסתם לדירה החדשה בהתרגשות, אבל מהר מאוד גיליתם רטיבות בקירות, ריצוף עקום או סדקים? אתם לא לבד. זהו המדריך שיעזור לכם להבין מהן זכויותיכם מול הקבלן ואיך להבטיח שהליקויים יתוקנו.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaExclamationTriangle className="text-amber-500" />
                                מה נחשב ל"ליקוי בנייה"?
                            </h2>
                            <p>
                                ליקוי בנייה הוא כל אי-התאמה בין מה שהובטח לכם במפרט המכר, בתקנים הישראליים או בתקנות התכנון והבנייה, לבין המצב בפועל בדירה. זה יכול לכלול:
                            </p>
                            <ul className="space-y-2 my-4 list-none pr-0">
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>רטיבות ונזילות (הליקוי הנפוץ והחמור ביותר).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>סדקים בקירות ובתקרה.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>בעיות אינסטלציה וניקוז.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>ריצוף עקום או חלול.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>בידוד תרמי או אקוסטי לקוי.</span>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaClock className="text-amber-500" />
                                תקופת הבדק vs תקופת האחריות
                            </h2>
                            <p>
                                חוק המכר (דירות) מגדיר שתי תקופות אחריות שונות שחשוב להכיר:
                            </p>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">1. תקופת הבדק (1-7 שנים)</h3>
                                <p className="mb-4">
                                    מתחילה מרגע מסירת הדירה. בתקופה זו, <strong>חובת ההוכחה היא על הקבלן</strong>. אם התגלה ליקוי, הקבלן צריך להוכיח שהליקוי נגרם באשמתכם. אם לא הצליח להוכיח - עליו לתקן.
                                    אורכה משתנה בהתאם לסוג הליקוי (למשל: שנה לריצוף, 4 שנים לאיטום).
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">2. תקופת האחריות (3 שנים נוספות)</h3>
                                <p>
                                    מתחילה בסיום תקופת הבדק. בתקופה זו, <strong>חובת ההוכחה עליכם</strong>. עליכם להוכיח שהליקוי נובע מתכנון, עבודה או חומרים לקויים.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                                <FaFileContract className="text-amber-500" />
                                מה עושים כשמתגלה ליקוי?
                            </h2>
                            <ol className="list-decimal list-inside space-y-4 marker:text-amber-600 marker:font-bold">
                                <li>
                                    <strong>תיעוד:</strong> צלמו את הליקויים מכל זווית ושמרו תיעוד של כל התכתבות עם הקבלן.
                                </li>
                                <li>
                                    <strong>הודעה בכתב:</strong> שלחו לקבלן מכתב רשום (עם אישור מסירה) המפרט את הליקויים. אל תסתפקו בשיחות טלפון או הודעות וואטסאפ.
                                </li>
                                <li>
                                    <strong>חוות דעת הנדסית:</strong> הזמינו חברת בדק בית או מהנדס מוסמך שיפיק דו"ח ליקויים מקצועי. דו"ח זה הוא קריטי במידה ותגיעו לבית משפט.
                                </li>
                                <li>
                                    <strong>מתן הזדמנות לתיקון:</strong> החוק מחייב לתת לקבלן "הזדמנות נאותה" לתקן את הליקויים.
                                </li>
                            </ol>

                            <div className="bg-red-50 border-r-4 border-red-500 p-6 my-8 rounded-l-xl">
                                <h3 className="text-lg font-bold text-red-800 mb-2">חשוב לזכור!</h3>
                                <p className="text-red-700">
                                    אל תחתמו על מסמך "היעדר תביעות" או ויתור זכויות מבלי להתייעץ עם עורך דין. זכויותיכם מכוח חוק המכר הן קוגנטיות (לא ניתן להתנות עליהן), אך חתימה עלולה לסבך את המצב.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">סיכום</h2>
                            <p>
                                רכישת דירה היא העסקה הגדולה ביותר בחייכם. אל תתפשרו על האיכות המגיעה לכם. אם הקבלן מתעלם או מורח את הזמן, פנו לייעוץ משפטי כדי לקבל את הפיצוי המגיע לכם.
                            </p>
                        </div>

                        {/* Call to Action Box */}
                        <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">נתקלתם בליקויי בנייה והקבלן מתעלם?</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                משרדנו מנוסה בייצוג מאות דיירים מול הקבלנים הגדולים ביותר. נדאג שתקבלו את התיקון או הפיצוי הכספי המלא.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:054-4450244"
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30"
                                >
                                    חייגו לייעוץ: 054-4450244
                                </a>
                                <a
                                    href="https://wa.me/972544450244"
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
                                >
                                    שלחו הודעה בוואטסאפ
                                </a>
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
