'use client'

import React, { useState } from 'react'
import { FaCalculator, FaPhone, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa'

/**
 * ⚠️ עדכון שנתי נדרש! מדרגות מס הרכישה מתעדכנות מדי שנה (16 בינואר) לפי מדד מחירי הדיור.
 * המדרגות כאן נכונות ל-2025. יש לעדכן את המספרים מדי שנה מאתר רשות המסים.
 * מקור רשמי: https://www.gov.il/he/departments/taxes
 */
const TAX_YEAR = 2025

// דירה יחידה — מדרגות מס רכישה (2025)
const SINGLE_HOME_BRACKETS = [
    { upTo: 1978745, rate: 0 },
    { upTo: 2347040, rate: 0.035 },
    { upTo: 6055070, rate: 0.05 },
    { upTo: 20183565, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
]

// דירה נוספת / משקיע — מדרגות מס רכישה (2025)
const ADDITIONAL_HOME_BRACKETS = [
    { upTo: 6055070, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
]

function calcTax(value: number, brackets: { upTo: number; rate: number }[]) {
    let tax = 0
    let prev = 0
    for (const b of brackets) {
        if (value > prev) {
            const taxable = Math.min(value, b.upTo) - prev
            tax += taxable * b.rate
            prev = b.upTo
        } else break
    }
    return tax
}

function formatNis(n: number) {
    return '₪' + Math.round(n).toLocaleString('he-IL')
}

export default function PurchaseTaxCalculator() {
    const [value, setValue] = useState<string>('2500000')
    const [homeType, setHomeType] = useState<'single' | 'additional'>('single')

    const numeric = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
    const brackets = homeType === 'single' ? SINGLE_HOME_BRACKETS : ADDITIONAL_HOME_BRACKETS
    const tax = calcTax(numeric, brackets)
    const effectiveRate = numeric > 0 ? (tax / numeric) * 100 : 0

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8" dir="rtl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCalculator className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">מחשבון מס רכישה {TAX_YEAR}</h2>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">שווי הדירה (₪)</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-lg font-medium"
                        placeholder="לדוגמה: 2,500,000"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">סוג הרכישה</label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setHomeType('single')}
                            className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all ${homeType === 'single'
                                ? 'border-amber-500 bg-amber-50 text-amber-700'
                                : 'border-gray-200 bg-white text-gray-600 hover:border-amber-300'
                                }`}
                        >
                            דירה יחידה
                        </button>
                        <button
                            onClick={() => setHomeType('additional')}
                            className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all ${homeType === 'additional'
                                ? 'border-amber-500 bg-amber-50 text-amber-700'
                                : 'border-gray-200 bg-white text-gray-600 hover:border-amber-300'
                                }`}
                        >
                            דירה נוספת / משקיע
                        </button>
                    </div>
                </div>
            </div>

            {/* Result */}
            <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 text-center">
                <p className="text-gray-300 text-sm mb-1">מס רכישה משוער</p>
                <p className="text-3xl md:text-4xl font-bold text-amber-400">
                    {numeric > 0 ? formatNis(tax) : '—'}
                </p>
                {numeric > 0 && (
                    <p className="text-gray-400 text-xs mt-2">שיעור אפקטיבי: {effectiveRate.toFixed(2)}% משווי הדירה</p>
                )}
            </div>

            {/* Disclaimer */}
            <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <FaExclamationTriangle className="text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-600 leading-relaxed">
                    המחשבון מציג <strong>הערכה בלבד</strong> לפי מדרגות מס הרכישה לשנת {TAX_YEAR}. המדרגות מתעדכנות מדי שנה,
                    וקיימים פטורים והקלות (עולה חדש, נכה, משפר דיור) שאינם מחושבים כאן. לחישוב מדויק ולתכנון מס — פנו למשרד.
                    אין באמור ייעוץ משפטי.
                </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:054-4450244" className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaPhone /> לתכנון מס ובדיקת פטורים
                </a>
                <a href="https://wa.me/972544450244" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaWhatsapp /> וואטסאפ
                </a>
            </div>
        </div>
    )
}
