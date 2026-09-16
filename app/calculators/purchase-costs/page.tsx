import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PurchaseCostsCalculator from '../../../components/PurchaseCostsCalculator'

export const metadata: Metadata = {
    title: 'מחשבון עלויות רכישת דירה | כמה עולה לקנות דירה - מריאטה פנחסי',
    description: 'מחשבון עלויות רכישת דירה: חשבו את כל העלויות הנלוות מעבר למחיר הדירה — מס רכישה, שכר טרחת עורך דין ודמי תיווך. כלי חינמי ומיידי ממשרד עו"ד מריאטה פנחסי.',
    keywords: 'מחשבון עלויות רכישת דירה, כמה עולה לקנות דירה, עלויות נלוות רכישת דירה, מס רכישה עורך דין תיווך, הוצאות קניית דירה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/calculators/purchase-costs',
    },
    openGraph: {
        title: 'מחשבון עלויות רכישת דירה',
        description: 'חשבו את כל העלויות הנלוות לרכישת דירה: מס רכישה, עו"ד ותיווך. כלי חינמי.',
        url: 'https://www.marietta-law.co.il/calculators/purchase-costs',
        images: ['https://www.marietta-law.co.il/logo.png'],
        type: 'website',
    },
}

export default function PurchaseCostsCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "מחשבון עלויות רכישת דירה",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ILS" },
                        "url": "https://www.marietta-law.co.il/calculators/purchase-costs",
                        "provider": { "@type": "LegalService", "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון", "telephone": "054-4450244" }
                    })
                }}
            />
            <Header />
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">מחשבון עלויות רכישת דירה</h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        כמה באמת עולה לקנות דירה? חשבו את כל העלויות הנלוות מעבר למחיר — מס רכישה, עורך דין ותיווך.
                    </p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PurchaseCostsCalculator />
                </div>
            </section>
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">אילו עלויות נלוות יש ברכישת דירה?</h2>
                        <p className="mb-4">
                            מעבר למחיר הדירה עצמו, לרכישה מתלוות עלויות משמעותיות: <strong>מס רכישה</strong> (לפי מדרגות ולפי דירה
                            יחידה/נוספת), <strong>שכר טרחת עורך דין</strong>, <strong>דמי תיווך</strong> (אם רלוונטי), ולעיתים שמאות,
                            אגרות ועלויות משכנתא. חשוב לתקצב את הכל מראש.
                        </p>
                        <p className="mb-4">
                            למידע מפורט ראו <Link href="/blog/purchase-tax-guide" className="text-amber-600 font-semibold hover:underline">מדריך מס רכישה</Link>,
                            <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline"> שכר טרחת עו"ד</Link>,
                            ואת <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">הליווי המשפטי בעסקה</Link>.
                        </p>
                        <p className="text-sm text-gray-500">
                            מחשבונים נוספים: <Link href="/calculators/purchase-tax" className="text-amber-600 font-semibold hover:underline">מס רכישה</Link> · <Link href="/calculators/lawyer-fee" className="text-amber-600 font-semibold hover:underline">שכר טרחה עו"ד</Link> · <Link href="/calculators/delay-compensation" className="text-amber-600 font-semibold hover:underline">פיצוי איחור במסירה</Link>.
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </div>
    )
}
