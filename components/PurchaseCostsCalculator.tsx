'use client'

import React, { useState } from 'react'
import { FaCalculator, FaPhone, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa'

// מדרגות מס רכישה 2025 — יש לעדכן מדי שנה (16 בינואר). מקור: רשות המסים.
const SINGLE_HOME_BRACKETS = [
    { upTo: 1978745, rate: 0 },
    { upTo: 2347040, rate: 0.035 },
    { upTo: 6055070, rate: 0.05 },
    { upTo: 20183565, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
]
const ADDITIONAL_HOME_BRACKETS = [
    { upTo: 6055070, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
]
const VAT = 0.18
const LAWYER_RATE = 0.0075 // ~0.75% הערכה לצד הקונה
const BROKER_RATE = 0.02   // 2% מקובל

function calcTax(value: number, brackets: { upTo: number; rate: number }[]) {
    let tax = 0, prev = 0
    for (const b of brackets) {
        if (value > prev) { tax += (Math.min(value, b.upTo) - prev) * b.rate; prev = b.upTo } else break
    }
    return tax
}
function formatNis(n: number) { return '₪' + Math.round(n).toLocaleString('he-IL') }

export default function PurchaseCostsCalculator() {
    const [value, setValue] = useState<string>('2500000')
    const [homeType, setHomeType] = useState<'single' | 'additional'>('single')
    const [broker, setBroker] = useState<boolean>(true)

    const v = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
    const tax = calcTax(v, homeType === 'single' ? SINGLE_HOME_BRACKETS : ADDITIONAL_HOME_BRACKETS)
    const lawyer = v * LAWYER_RATE * (1 + VAT)
    const brokerFee = broker ? v * BROKER_RATE * (1 + VAT) : 0
    const total = tax + lawyer + brokerFee

    const rows = [
        { label: 'מס רכישה', amount: tax },
        { label: 'שכר טרחת עו"ד (הערכה, כולל מע"מ)', amount: lawyer },
        ...(broker ? [{ label: 'דמי תיווך (2% + מע"מ)', amount: brokerFee }] : []),
    ]

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8" dir="rtl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCalculator className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">מחשבון עלויות רכישת דירה</h2>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">שווי הדירה (₪)</label>
                    <input
                        type="text" inputMode="numeric" value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-lg font-medium"
                        placeholder="לדוגמה: 2,500,000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">סוג הרכישה</label>
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setHomeType('single')} className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all ${homeType === 'single' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 bg-white text-gray-600 hover:border-amber-300'}`}>דירה יחידה</button>
                        <button onClick={() => setHomeType('additional')} className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all ${homeType === 'additional' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 bg-white text-gray-600 hover:border-amber-300'}`}>דירה נוספת / משקיע</button>
                    </div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={broker} onChange={(e) => setBroker(e.target.checked)} className="w-5 h-5 accent-amber-500" />
                    <span className="text-sm font-medium text-gray-700">כולל דמי תיווך (2%)</span>
                </label>
            </div>

            {/* Breakdown */}
            <div className="mt-6 space-y-2">
                {rows.map((r, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
                        <span className="text-gray-700 text-sm">{r.label}</span>
                        <span className="font-bold text-gray-900">{v > 0 ? formatNis(r.amount) : '—'}</span>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="mt-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 text-center">
                <p className="text-gray-300 text-sm mb-1">סה"כ עלויות נלוות משוערות</p>
                <p className="text-3xl md:text-4xl font-bold text-amber-400">{v > 0 ? formatNis(total) : '—'}</p>
                <p className="text-gray-400 text-xs mt-2">מעבר למחיר הדירה עצמו</p>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <FaExclamationTriangle className="text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>הערכה בלבד.</strong> מס רכישה לפי מדרגות 2025 (מתעדכן שנתית); שכר טרחת עו"ד ותיווך הם הערכות טווח.
                    לא כולל פטורים/הקלות, שמאות, אגרות ומשכנתא. אין באמור ייעוץ משפטי.
                </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:054-4450244" className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaPhone /> לייעוץ וליווי בעסקה
                </a>
                <a href="https://wa.me/972544450244" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                    <FaWhatsapp /> וואטסאפ
                </a>
            </div>
        </div>
    )
}
