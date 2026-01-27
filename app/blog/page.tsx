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
            image: '/blog-images/real_estate_keys.png'
        },
        {
            title: 'ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?',
            excerpt: 'חיוב הארנונה הוא אחת ההוצאות הכבדות לעסק. האם ידעתם שטעויות בחישוב הארנונה נפוצות מאוד? כך תבדקו אם מגיע לכם כסף בחזרה.',
            date: '25 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'משפט מנהלי',
            slug: '/blog/arnona-discounts',
            image: '/blog-images/arnona_tax_calc.png'
        },
        {
            title: 'תאונת עבודה: מיצוי זכויות ופיצויים',
            excerpt: 'נפצעתם במהלך העבודה? המדריך המלא לזכויות שלכם מול המוסד לביטוח לאומי ומול המעסיק. אל תישארו בלי הפיצוי המגיע לכם.',
            date: '24 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'נזיקין וביטוח',
            slug: '/blog/work-accident-rights',
            image: '/blog-images/work_accident_helmet.png'
        },
        {
            title: 'הפרת חוזה: מתי מותר לבטל?',
            excerpt: 'חתמתם על חוזה והצד השני לא קיים אותו? מתי הפרה נחשבת יסודית, האם מותר לבטל את החוזה חד-צדדית ומהם הפיצויים שניתן לדרוש.',
            date: '22 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'חוזים ומסחר',
            slug: '/blog/contract-breach',
            image: '/blog-images/contract_breach_pen.png'
        },
        {
            title: 'הליך גירושין: צעד אחר צעד',
            excerpt: 'עומדים בפני הליך גירושין? חשוב שתכירו את השלבים השונים, ההבדל בין בית הדין הרבני לבית המשפט לענייני משפחה, ואיך צולחים את התקופה הזו.',
            date: '20 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'דיני משפחה',
            slug: '/blog/divorce-process-guide',
            image: '/blog-images/divorce_justice_scales.png'
        },
        {
            title: 'זכויות עובדים בשימוע לפני פיטורין',
            excerpt: 'זומנתם לשימוע? זהו שלב קריטי. דעו את הזכויות שלכם: הזכות לייצוג, הזכות לעיין במסמכים והזכות לטעון כנגד הכוונה לפטר אתכם.',
            date: '18 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'דיני עבודה',
            slug: '/blog/employee-hearing-rights',
            image: '/blog-images/labor_hearing_room.png'
        },
        {
            title: 'ליקויי בנייה בדירה חדשה: מדריך לזכויות הרוכשים',
            excerpt: 'נכנסתם לדירה החדשה וגיליתם רטיבות? הקבלן מתעלם? המדריך המלא לתקופות הבדק והאחריות ואיך להבטיח שהליקויים יתוקנו.',
            date: '15 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'ליקויי בנייה',
            slug: '/blog/construction-defects-guide',
            image: '/blog-images/construction_defects_tools.png'
        },
        {
            title: 'חקירה במשטרה: זכויות הנחקר',
            excerpt: 'זומנתם לחקירה במשטרה? כל מילה שתאמרו עלולה לשמש נגדכם. המדריך החיוני לזכויות הנחקר, חשיבות ההיוועצות בעורך דין וכיצד לנהוג בחדר החקירות.',
            date: '10 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'משפט פלילי',
            slug: '/blog/police-investigation-guide',
            image: '/blog-images/police_investigation_abstract.png'
        },
        {
            title: 'ויזת מומחה זר: המדריך למעסיק',
            excerpt: 'מעוניינים להעסיק מומחה זר? הבירוקרטיה יכולה להיות מתישה. כל מה שצריך לדעת על היתרי העסקה, סוגי הויזות והתהליך מול משרד הפנים.',
            date: '08 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'הגירה',
            slug: '/blog/foreign-expert-visa',
            image: '/blog-images/visa_passport_globe.png'
        },
        {
            title: 'רישום סימן מסחר: איך להגן על המותג?',
            excerpt: 'בניתם עסק ומותג מצליח? אל תשאירו אותו חשוף. למה חשוב לרשום סימן מסחר, איך עושים את זה ומה נותנת לכם ההגנה המשפטית.',
            date: '05 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'קניין רוחני',
            slug: '/blog/trademark-registration',
            image: '/blog-images/trademark_protection.png'
        },
        {
            title: 'למה כולם מדברים על ייפוי כוח מתמשך?',
            excerpt: 'ייפוי כוח מתמשך הוא המהפכה המשפטית שהחזירה את הכוח לידיים שלנו. איך בוחרים מיופה כוח ולמה חשוב לערוך את המסמך כשאנחנו בריאים?',
            date: '01 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            category: 'צוואות וייפוי כוח',
            slug: '/blog/enduring-power-of-attorney',
            image: '/blog-images/power_of_attorney_hands.png'
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

