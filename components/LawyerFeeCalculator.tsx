'use client'

import React, { useState } from 'react'
import { FaCalculator, FaPhone, FaWhatsapp } from 'react-icons/fa'

// Fee ranges as a share of transaction value (before VAT), by transaction type.
// These are typical market ranges — the office provides an exact quote.
const FEE_RANGES: Record<string, { min: number; max: number; label: string }> = {
    buy_secondhand: { min: 0.005, max: 0.01, label: 'קניית דירה יד שנייה' },
    buy_developer: { min: 0.0075, max: 0.015, label: 'קניית דירה מקבלן' },
    sell: { min: 0.005, max: 0.01, label: 'מכירת דירה' },
}

const VAT = 0.18

function formatNis(n: number) {
    return '₪' + Math.round(n).toLocaleString('he-IL')
}

export default function LawyerFeeCalculator() {
    const [value, setValue] = useState<string>('2000000')
    const [type, setType] = useState<string>('buy_secondhand')

    const numeric = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
    const range = FEE_RANGES[type]
    const minFee = numeric * range.min * (1 + VAT)
    const maxFee = numeric * range.max * (1 + VAT)

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8" dir="rtl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCalculator className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">מחשבון שכר טרחה עורך דין</h2>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">שווי העסקה (₪)</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-lg font-medium"
                        placeholder="לדוגמה: 2,000,000"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">סוג העסקה</label>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {Object.entries(FEE_RANGES).map(([key, r]) => (
                            <button
                                key={key}
                                onClick={() => setType(key)}
                                className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all ${type === key
                                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                                    : 'border-gray-200 bg-white text-gray-600 hover:border-amber-300'
                                    }`}
                            >
                                {r.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Result */}
            <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 text-center">
                <p className="text-gray-300 text-sm mb-1">הערכת שכר טרחה (כולל מע"מ)</p>
                <p className="text-3xl md:text-4xl font-bold text-amber-400">
                    {numeric > 0 ? `${formatNis(minFee)} – ${formatNis(maxFee)}` : '—'}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                    כ-{(range.min * 100).toFixed(2)}%–{(range.max * 100).toFixed(2)}% משווי העסקה + מע"מ
                </p>
            </div>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                * המחשבון מציג <strong>הערכת טווח</strong> בלבד, המבוססת על טווחי שוק מקובלים. שכר הטרחה הסופי תלוי
                במורכבות העסקה ונקבע בהצעת מחיר אישית. אין באמור ייעוץ משפטי.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:054-4450244" className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaPhone /> להצעת מחיר מדויקת
                </a>
                <a href="https://wa.me/972544450244" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaWhatsapp /> וואטסאפ
                </a>
            </div>
        </div>
    )
}
