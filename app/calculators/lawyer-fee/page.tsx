import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import LawyerFeeCalculator from '../../../components/LawyerFeeCalculator'

export const metadata: Metadata = {
    title: 'מחשבון שכר טרחה עורך דין נדל"ן | הערכת עלות עסקה - מריאטה פנחסי',
    description: 'מחשבון שכר טרחה עורך דין לעסקת נדל"ן: הזינו את שווי העסקה וסוגה (קנייה/מכירה/מקבלן) וקבלו הערכת עלות מיידית כולל מע"מ. כלי חינמי ממשרד עו"ד מריאטה פנחסי.',
    keywords: 'מחשבון שכר טרחה עורך דין, שכר טרחה עורך דין נדלן, עלות עורך דין קניית דירה, כמה עולה עורך דין מכירת דירה, מחשבון עלות עורך דין נדלן',
    alternates: {
        canonical: 'https://www.marietta-law.co.il/calculators/lawyer-fee',
    },
    openGraph: {
        title: 'מחשבון שכר טרחה עורך דין נדל"ן',
        description: 'הזינו שווי עסקה וסוגה וקבלו הערכת שכר טרחה מיידית כולל מע"מ. כלי חינמי.',
        url: 'https://www.marietta-law.co.il/calculators/lawyer-fee',
        images: ['https://www.marietta-law.co.il/logo.png'],
        type: 'website',
    },
}

export default function LawyerFeeCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "מחשבון שכר טרחה עורך דין נדל\"ן",
                        "applicationCategory": "FinanceApplication",
                        "operatingSystem": "Web",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ILS" },
                        "url": "https://www.marietta-law.co.il/calculators/lawyer-fee",
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
                        מחשבון שכר טרחה עורך דין נדל"ן
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        כמה עולה עורך דין לעסקת נדל"ן? הזינו את שווי העסקה ואת סוגה וקבלו הערכת עלות מיידית.
                    </p>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <LawyerFeeCalculator />
                </div>
            </section>

            {/* Content */}
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">כמה עולה עורך דין לעסקת נדל"ן?</h2>
                        <p className="mb-4">
                            שכר הטרחה בעסקת מקרקעין נע בדרך כלל בין <strong>0.5% ל-1.5% משווי העסקה</strong> בתוספת מע"מ,
                            בהתאם למורכבות ולסוג העסקה. קנייה מקבלן נוטה להיות בקצה הגבוה (בדיקת ערבויות ומפרט), ומכירת יד שנייה
                            פשוטה בקצה הנמוך.
                        </p>
                        <p className="mb-4">
                            חשוב לזכור: עורך דין טוב חוסך לכם הרבה מעבר להפרש בשכר הטרחה — במניעת טעויות, בתכנון מס נכון ובהגנה
                            על הכספים. למידע מלא ראו <Link href="/blog/real-estate-lawyer-cost" className="text-amber-600 font-semibold hover:underline">כמה עולה עורך דין לעסקת נדל"ן</Link>,
                            ועל הליווי המלא — <Link href="/services/real-estate" className="text-amber-600 font-semibold hover:underline">עורך דין נדל"ן ומקרקעין</Link>.
                        </p>
                        <p className="text-sm text-gray-500">
                            שווה גם לבדוק: <Link href="/calculators/purchase-tax" className="text-amber-600 font-semibold hover:underline">מחשבון מס רכישה</Link>.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </div>
    )
}
