import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaCalculator, FaArrowLeft } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
    title: 'מחשבונים משפטיים | מס רכישה ושכר טרחה - מריאטה פנחסי',
    description: 'כלים ומחשבונים משפטיים חינמיים לעסקאות נדל"ן: מחשבון מס רכישה ומחשבון שכר טרחה עורך דין. הערכה מיידית ונוחה ממשרד עו"ד ונוטריון מריאטה פנחסי.',
    keywords: 'מחשבונים משפטיים, מחשבון מס רכישה, מחשבון שכר טרחה עורך דין, כלים לעסקת נדלן',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/calculators',
    },
    openGraph: {
        title: 'מחשבונים משפטיים לעסקאות נדל"ן',
        description: 'מחשבון מס רכישה ומחשבון שכר טרחה עורך דין - כלים חינמיים להערכה מיידית.',
        url: 'https://www.marietta-law.co.il/calculators',
        images: ['https://www.marietta-law.co.il/logo.png'],
        type: 'website',
    },
}

export default function CalculatorsPage() {
    const tools = [
        {
            title: 'מחשבון מס רכישה',
            desc: 'חשבו כמה מס רכישה תשלמו על דירה יחידה או נוספת, לפי מדרגות המס.',
            href: '/calculators/purchase-tax',
        },
        {
            title: 'מחשבון שכר טרחה עורך דין',
            desc: 'הערכת עלות ליווי משפטי בעסקת נדל"ן, לפי שווי וסוג העסקה.',
            href: '/calculators/lawyer-fee',
        },
        {
            title: 'מחשבון פיצוי איחור במסירה',
            desc: 'הקבלן איחר? חשבו כמה פיצוי מגיע לכם לפי חוק המכר.',
            href: '/calculators/delay-compensation',
        },
        {
            title: 'מחשבון עלויות רכישת דירה',
            desc: 'כל העלויות הנלוות לרכישה: מס רכישה, עורך דין ותיווך.',
            href: '/calculators/purchase-costs',
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
            <Header />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">מחשבונים משפטיים</h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        כלים חינמיים להערכה מהירה של עלויות בעסקת נדל"ן — לפני שאתם חותמים.
                    </p>
                </div>
            </section>

            {/* Tools grid */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {tools.map((t, i) => (
                            <Link key={i} href={t.href} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-8 transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                                    <FaCalculator className="text-3xl text-amber-500" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{t.title}</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">{t.desc}</p>
                                <span className="text-amber-600 font-bold text-sm flex items-center gap-2">
                                    למחשבון
                                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
