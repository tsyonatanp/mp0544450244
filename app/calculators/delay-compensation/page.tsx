import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import DelayCompensationCalculator from '../../../components/DelayCompensationCalculator'

export const metadata: Metadata = {
    title: 'מחשבון פיצוי איחור במסירת דירה | חישוב פיצוי מקבלן - מריאטה פנחסי',
    description: 'מחשבון פיצוי על איחור במסירת דירה מקבלן: חשבו כמה פיצוי מגיע לכם לפי חוק המכר (1.5 מדמי שכירות ראויים לחודש). כלי חינמי ומיידי ממשרד עו"ד מריאטה פנחסי.',
    keywords: 'מחשבון פיצוי איחור במסירת דירה, פיצוי איחור מסירה, איחור במסירת דירה מקבלן, חוק המכר איחור, כמה פיצוי מגיע על איחור מסירה',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/calculators/delay-compensation',
    },
    openGraph: {
        title: 'מחשבון פיצוי איחור במסירת דירה מקבלן',
        description: 'חשבו כמה פיצוי מגיע לכם על איחור במסירה, לפי חוק המכר. כלי חינמי ומיידי.',
        url: 'https://www.marietta-law.co.il/calculators/delay-compensation',
        images: ['https://www.marietta-law.co.il/logo.png'],
        type: 'website',
    },
}

export default function DelayCompensationCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "מחשבון פיצוי איחור במסירת דירה",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ILS" },
                        "url": "https://www.marietta-law.co.il/calculators/delay-compensation",
                        "provider": { "@type": "LegalService", "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון", "telephone": "054-4450244" }
                    })
                }}
            />
            <Header />
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">מחשבון פיצוי איחור במסירת דירה</h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        הקבלן איחר במסירה? חשבו כמה פיצוי מגיע לכם לפי חוק המכר — הזינו דמי שכירות ומספר חודשי איחור.
                    </p>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <DelayCompensationCalculator />
                </div>
            </section>
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">איך מחושב הפיצוי על איחור במסירה?</h2>
                        <p className="mb-4">
                            לפי חוק המכר (דירות), קבלן שמאחר במסירת הדירה מעבר לתקופת גרייס של 60 יום חייב בפיצוי חודשי:
                            כ-<strong>1.5 מדמי השכירות הראויים</strong> ל-8 החודשים הראשונים, ו-1.25 מהחודש התשיעי. הפיצוי מגיע
                            <strong> אוטומטית</strong>, גם ללא הוכחת נזק.
                        </p>
                        <p className="mb-4">
                            למדריך המלא ראו <Link href="/blog/late-apartment-delivery" className="text-amber-600 font-semibold hover:underline">איחור במסירת דירה מקבלן: הזכויות שלכם</Link>,
                            ולתחום כולו — <Link href="/services/construction-defects" className="text-amber-600 font-semibold hover:underline">ליקויי בנייה ותביעות קבלן</Link>.
                        </p>
                        <p className="text-sm text-gray-500">
                            מחשבונים נוספים: <Link href="/calculators/purchase-tax" className="text-amber-600 font-semibold hover:underline">מס רכישה</Link> · <Link href="/calculators/lawyer-fee" className="text-amber-600 font-semibold hover:underline">שכר טרחה עו"ד</Link>.
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </div>
    )
}
