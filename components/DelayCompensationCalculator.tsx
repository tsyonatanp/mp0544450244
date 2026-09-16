'use client'

import React, { useState } from 'react'
import { FaCalculator, FaPhone, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa'

// חוק המכר (דירות): לאחר תקופת גרייס של 60 יום, הקבלן חייב בפיצוי חודשי:
// חודשים 1-8: 1.5 × דמי שכירות ראויים; מהחודש ה-9: 1.25 × דמי שכירות ראויים.
const GRACE_MONTHS = 2 // 60 יום
const RATE_FIRST = 1.5
const RATE_LATER = 1.25
const FIRST_TIER_MONTHS = 8

function formatNis(n: number) {
    return '₪' + Math.round(n).toLocaleString('he-IL')
}

export default function DelayCompensationCalculator() {
    const [rent, setRent] = useState<string>('5000')
    const [months, setMonths] = useState<string>('6')

    const rentNum = parseFloat(rent.replace(/[^0-9.]/g, '')) || 0
    const monthsNum = Math.max(0, Math.floor(parseFloat(months.replace(/[^0-9.]/g, '')) || 0))

    let compensation = 0
    let compensable = 0
    if (monthsNum > GRACE_MONTHS) {
        compensable = monthsNum // הפיצוי מחושב מהחודש הראשון לאיחור לאחר חריגה מהגרייס
        const firstTier = Math.min(FIRST_TIER_MONTHS, compensable)
        const laterTier = Math.max(0, compensable - FIRST_TIER_MONTHS)
        compensation = rentNum * (RATE_FIRST * firstTier + RATE_LATER * laterTier)
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8" dir="rtl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCalculator className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">מחשבון פיצוי איחור במסירת דירה</h2>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">דמי שכירות ראויים לחודש (₪)</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={rent}
                        onChange={(e) => setRent(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-lg font-medium"
                        placeholder="לדוגמה: 5,000"
                    />
                    <p className="text-xs text-gray-400 mt-1">שכר הדירה שניתן לקבל עבור דירה דומה באותו אזור</p>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">חודשי איחור (מהמועד החוזי)</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-lg font-medium"
                        placeholder="לדוגמה: 6"
                    />
                </div>
            </div>

            {/* Result */}
            <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 text-center">
                <p className="text-gray-300 text-sm mb-1">הערכת פיצוי כולל</p>
                <p className="text-3xl md:text-4xl font-bold text-amber-400">
                    {rentNum > 0 && monthsNum > 0 ? formatNis(compensation) : '—'}
                </p>
                {rentNum > 0 && monthsNum > 0 && monthsNum <= GRACE_MONTHS && (
                    <p className="text-gray-400 text-xs mt-2">איחור עד 60 יום — בתוך תקופת הגרייס, ללא פיצוי</p>
                )}
                {compensation > 0 && (
                    <p className="text-gray-400 text-xs mt-2">
                        {Math.min(FIRST_TIER_MONTHS, compensable)} חודשים ×1.5 {compensable > FIRST_TIER_MONTHS ? `+ ${compensable - FIRST_TIER_MONTHS} חודשים ×1.25` : ''}
                    </p>
                )}
            </div>

            {/* Disclaimer */}
            <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <FaExclamationTriangle className="text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-600 leading-relaxed">
                    המחשבון מציג <strong>הערכה בלבד</strong> לפי חוק המכר (דירות). אופן החישוב המדויק תלוי במועד חתימת החוזה
                    ובנסיבות הספציפיות (תיקוני החוק שונים בין תקופות). לבדיקת הזכאות והסכום המדויק — פנו למשרד. אין באמור ייעוץ משפטי.
                </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:054-4450244" className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaPhone /> לבדיקת זכאות לפיצוי
                </a>
                <a href="https://wa.me/972544450244" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaWhatsapp /> וואטסאפ
                </a>
            </div>
        </div>
    )
}
