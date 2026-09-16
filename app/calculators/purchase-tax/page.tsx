import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PurchaseTaxCalculator from '../../../components/PurchaseTaxCalculator'

export const metadata: Metadata = {
    title: 'מחשבון מס רכישה 2026 | חישוב מס רכישה לדירה - מריאטה פנחסי',
    description: 'מחשבון מס רכישה חינמי: חשבו כמה מס רכישה תשלמו על דירה יחידה או נוספת, לפי מדרגות המס. כלי מהיר ונוח + הסבר על פטורים והקלות. משרד עו"ד ונוטריון מריאטה פנחסי.',
    keywords: 'מחשבון מס רכישה, מחשבון מס רכישה 2026, חישוב מס רכישה, מדרגות מס רכישה, מס רכישה דירה יחידה, מס רכישה דירה נוספת, כמה מס רכישה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/calculators/purchase-tax',
    },
    openGraph: {
        title: 'מחשבון מס רכישה 2026 - חישוב מהיר',
        description: 'חשבו כמה מס רכישה תשלמו על דירה, לפי מדרגות המס. כלי חינמי + הסבר על פטורים והקלות.',
        url: 'https://www.marietta-law.co.il/calculators/purchase-tax',
        images: ['https://www.marietta-law.co.il/logo.png'],
        type: 'website',
    },
}

export default function PurchaseTaxCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "מחשבון מס רכישה",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ILS" },
                        "url": "https://www.marietta-law.co.il/calculators/purchase-tax",
                        "provider": {
                            "@type": "LegalService",
                            "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
                            "telephone": "054-4450244"
                        }
                    })
                }}
            />

            <Header />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        מחשבון מס רכישה 2026
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        כמה מס רכישה תשלמו על הדירה? הזינו את שווי הדירה ואת סוג הרכישה וקבלו הערכה מיידית.
                    </p>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PurchaseTaxCalculator />
                </div>
            </section>

            {/* Content */}
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">איך מחושב מס רכישה?</h2>
                        <p className="mb-4">
                            מס רכישה משולם על ידי <strong>הקונה</strong> בכל עסקת מקרקעין, ומחושב ב<strong>מדרגות</strong> —
                            כלומר כל חלק משווי הדירה חייב בשיעור מס שונה. הגורם המשפיע ביותר הוא האם מדובר ב<strong>דירה יחידה</strong>
                            (מדרגות מופחתות עם פטור עד תקרה) או ב<strong>דירה נוספת</strong> (מס מהשקל הראשון).
                        </p>
                        <p className="mb-4">
                            קיימים גם פטורים והקלות — לעולים חדשים, לנכים ולמשפרי דיור — שהמחשבון אינו כולל, וכדאי לבדוק אותם
                            מול עורך דין לפני העסקה. למידע מלא ראו את המדריך <Link href="/blog/purchase-tax-guide" className="text-amber-600 font-semibold hover:underline">מס רכישה: כמה משלמים ואיך מחשבים</Link>,
                            ועל כלל הליווי — <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>.
                        </p>
                        <p className="text-sm text-gray-500">
                            שווה גם לבדוק: <Link href="/calculators/lawyer-fee" className="text-amber-600 font-semibold hover:underline">מחשבון שכר טרחה עורך דין</Link>.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </div>
    )
}
