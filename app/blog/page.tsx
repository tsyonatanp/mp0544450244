'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa'

// Note: Metadata export is not supported in client components in the same way, 
// usually this should be a server component or metadata extracted to layout/pageWrapper. 
// But keeping structure as is for now to avoid large refactors.

export default function BlogPage() {
    const posts = [
        {
            title: 'המדריך המלא לרכישת דירה באור יהודה ב-2025',
            excerpt: 'מתכננים לקנות דירה באור יהודה? כל מה שצריך לדעת על התפתחות העיר, השכונות החדשות וההיבטים המשפטיים החשובים לפני שחותמים על חוזה.',
            date: '26 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'נדל"ן',
            slug: '/blog/buying-guide-or-yehuda-2025',
            image: '/professional-photo.jpg'
        },
        {
            title: 'ארנונה לעסקים: איך להפחית חיובים להגיש השגה?',
            excerpt: 'חיוב הארנונה הוא אחת ההוצאות הכבדות לעסק. האם ידעתם שטעויות בחישוב הארנונה נפוצות מאוד? כך תבדקו אם מגיע לכם כסף בחזרה.',
            date: '25 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'משפט מנהלי',
            slug: '/blog/arnona-discounts',
            image: '/professional-photo-2.jpg'
        },
        {
            title: 'ליקויי בנייה בדירה חדשה: מדריך לזכויות הרוכשים',
            excerpt: 'נכנסתם לדירה החדשה וגיליתם רטיבות? הקבלן מתעלם? המדריך המלא לתקופות הבדק והאחריות ואיך להבטיח שהליקויים יתוקנו.',
            date: '15 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'ליקויי בנייה',
            slug: '/blog/construction-defects-guide',
            image: '/photo-new.jpg'
        },
        {
            title: 'למה כולם מדברים על ייפוי כוח מתמשך?',
            excerpt: 'ייפוי כוח מתמשך הוא המהפכה המשפטית שהחזירה את הכוח לידיים שלנו. איך בוחרים מיופה כוח ולמה חשוב לערוך את המסמך כשאנחנו בריאים?',
            date: '01 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'צוואות וייפוי כוח',
            slug: '/blog/enduring-power-of-attorney',
            image: '/logo-new.png'
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
                            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                                <Link href={post.slug} className="block relative h-56 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                        {post.category}
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-amber-500" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaUser className="text-amber-500" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors leading-tight">
                                        <Link href={post.slug}>{post.title}</Link>
                                    </h2>

                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <Link href={post.slug} className="text-amber-600 font-bold text-sm hover:text-amber-800 flex items-center gap-2 group/btn">
                                            קראו עוד
                                            <FaArrowLeft className="group-hover/btn:-translate-x-1 transition-transform" />
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
