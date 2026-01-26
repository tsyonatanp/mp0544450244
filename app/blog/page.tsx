'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function BlogPage() {
    const posts = [
        {
            title: 'המדריך המלא לרכישת דירה באור יהודה ב-2025',
            excerpt: 'מתכננים לקנות דירה באור יהודה? כל מה שצריך לדעת על התפתחות העיר, השכונות החדשות וההיבטים המשפטיים החשובים לפני שחותמים על חוזה.',
            date: '26 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'buying-guide-or-yehuda-2025',
            category: 'נדל"ן'
        },
        {
            title: 'ליקויי בנייה בדירה חדשה: המדריך המלא לזכויות הרוכשים',
            excerpt: 'גיליתם רטיבות או סדקים בדירה החדשה? הכירו את זכויותיכם מול הקבלן: ההבדל שבין תקופת בדק לאחריות, איך מתעדים ליקויים וכיצד מקבלים פיצוי.',
            date: '15 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'construction-defects-guide',
            category: 'ליקויי בנייה'
        },
        {
            title: 'הליך גירושין: איך מתחילים ואיך מסיימים בשלום?',
            excerpt: 'הסכם או מלחמה בבית המשפט? כל מה שצריך לדעת על מרוץ הסמכויות, משמורת, חלוקת רכוש ומזונות, כדי לעבור את התקופה הקשה במינימום נזקים.',
            date: '10 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'divorce-process-guide',
            category: 'דיני משפחה'
        },
        {
            title: 'תאונת עבודה: אל תתמודדו לבד מול הביטוח הלאומי',
            excerpt: 'נפגעתם בעבודה או בדרך אליה? הכירו את שלושת השלבים הקריטיים למיצוי הזכויות שלכם ולקבלת הפיצוי הכספי המקסימלי המגיע לכם בחוק.',
            date: '12 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'work-accident-rights',
            category: 'נזיקין'
        },
        {
            title: 'זומנת לשימוע? דע את זכויותיך לפני הפיטורין',
            excerpt: 'השימוע הוא לא רק פרוצדורה, אלא הזדמנות אמיתית לשנות את ההחלטה. מה מותר ואסור למעסיק לעשות, ומתי פיטורים ייחשבו ללא חוקיים?',
            date: '18 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'employee-hearing-rights',
            category: 'דיני עבודה'
        },
        {
            title: 'למה כולם מדברים על ייפוי כוח מתמשך? (וצריכים אחד)',
            excerpt: 'המהפכה השקטה שמאפשרת לכם לשלוט בעתידכם: איך למנות אדם שיקבל עבורכם החלטות ברגע האמת, ולמה זה עדיף בהרבה על מינוי אפוטרופוס בבית משפט.',
            date: '01 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'enduring-power-of-attorney',
            category: 'צוואות וייפוי כוח'
        },
        {
            title: 'חקירה במשטרה: כל מה שצריך לדעת לפני שנכנסים לחדר',
            excerpt: 'זכות ההיוועצות וזכות השתיקה הן קריטיות. מדריך חירום לנחקר: תרגילי החקירה הנפוצים וכיצד להימנע מהפללה עצמית.',
            date: '22 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'police-investigation-guide',
            category: 'פלילי'
        },
        {
            title: 'ארנונה לעסקים: איך להפחית חיובים ולהגיש השגה?',
            excerpt: 'חושבים שאתם משלמים יותר מדי ארנונה? ייתכן שנפלה טעות במדידה או בסיווג הנכס. כך תבדקו את החיוב ותחסכו סכומים משמעותיים.',
            date: '25 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'arnona-discounts',
            category: 'משפט מנהלי'
        },
        {
            title: 'רישום סימן מסחר: ההגנה הכי חשובה למותג שלכם',
            excerpt: 'המוניטין שלכם שווה כסף. הגנו עליו מפני מתחרים ומעתיקים באמצעות רישום סימן מסחר. כל השלבים בדרך לרישום המותג.',
            date: '27 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'trademark-registration',
            category: 'קניין רוחני'
        },
        {
            title: 'ויזת מומחה זר: איך להביא עובדים בינלאומיים לישראל?',
            excerpt: 'המדריך למעסיקים: הקריטריונים לקבלת היתר העסקה למומחה זר (ויזה ב-1) וכיצד לצלוח את הבירוקרטיה של משרד הפנים.',
            date: '29 ינואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'foreign-expert-visa',
            category: 'הגירה'
        },
        {
            title: 'הפרת חוזה: מתי מותר לבטל הסכם ואיך תובעים פיצויים?',
            excerpt: 'מתי הפרה נחשבת ליסודית ומתי לא? כל מה שצריך לדעת על ביטול חוזה, פיצוי מוסכם וחובת הקטנת הנזק.',
            date: '03 פברואר, 2026',
            author: 'עו"ד מריאטה פנחסי',
            slug: 'contract-breach',
            category: 'משפט מסחרי'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                        הבלוג המשפטי
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        מאמרים, מדריכים ועדכונים משפטיים בתחומי הנדל"ן, ליקויי הבנייה והמשפט האזרחי.
                        ידע ששווה לכם כסף.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="h-48 bg-slate-200 relative">
                                    {/* Placeholder for post image - in a real app this would be an Image component */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                        <span className="text-4xl">📄</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                                        <span className="flex items-center gap-1">
                                            <FaCalendar className="text-amber-500" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaUser className="text-amber-500" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-amber-600 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={post.slug !== '#' ? `/blog/${post.slug}` : '#'}
                                            className={`inline-flex items-center font-bold transition-colors ${post.slug !== '#' ? 'text-amber-600 hover:text-amber-700' : 'text-gray-400 cursor-not-allowed'}`}
                                        >
                                            קראו עוד
                                            <FaArrowLeft className="mr-2 text-sm" />
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
