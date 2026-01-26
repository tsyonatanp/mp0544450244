
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
    title: 'בלוג משפטי ומאמרים | מריאטה פנחסי - עורכת דין ונוטריון',
    description: 'מאמרים מקצועיים, טיפים ועדכונים משפטיים בתחומי הנדל"ן, ליקויי בנייה, צוואות ונוטריון. כל מה שצריך לדעת לפני שיוצאים לדרך.',
    keywords: 'בלוג משפטי, מאמרים עורך דין נדלן, מדריך רכישת דירה, זכויות דיירים, טיפים משפטיים',
    alternates: {
        canonical: 'https://marita-pinchasi-law.co.il/blog',
    },
}

export default function BlogPage() {
    const posts = [
        {
            title: 'רכישת דירה מקבלן – ממה חשוב להיזהר?',
            excerpt: 'עומדים לרכוש דירה חדשה? מזל טוב! אבל רגע לפני החתימה, יש כמה דברים קריטיים שאתם חייבים לבדוק בחוזה המכר כדי להגן על כספכם וזכויותיכם.',
            date: '26 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'נדל"ן ומקרקעין',
            slug: '#'
        },
        {
            title: 'ליקויי רטיבות בדירה חדשה – מי אחראי?',
            excerpt: 'גיליתם רטיבות בקירות חודשיים אחרי הכניסה לדירה? הקבלן טוען שזה "עיבוי"? המדריך המלא לאחריות קבלן ותקופות בדק.',
            date: '15 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'ליקויי בנייה',
            slug: '#'
        },
        {
            title: 'למה חשוב לערוך צוואה נוטריונית?',
            excerpt: 'החיים לא צפויים, וצוואה היא הדרך היחידה להבטיח שיקירכם יהיו מסודרים. מה ההבדל בין צוואה רגילה לצוואה נוטריונית ומתי כדאי לערוך אותה?',
            date: '02 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'צוואות וירושות',
            slug: '#'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        הבלוג המשפטי
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        מאמרים, עדכוני פסיקה וטיפים חשובים שיעזרו לכם לקבל החלטות נכונות.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                                <div className="h-48 bg-slate-200 relative">
                                    {/* Placeholder for post image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                        <span className="text-4xl font-bold opacity-20">Blog Post</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaUser />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-4 hover:text-amber-600 transition-colors">
                                        <Link href={post.slug}>{post.title}</Link>
                                    </h2>

                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <Link href={post.slug} className="text-amber-600 font-bold text-sm hover:text-amber-700 flex items-center gap-2 group">
                                            קראו עוד
                                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
