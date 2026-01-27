'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaBalanceScale, FaHome, FaUsers, FaCarCrash, FaUserTie, FaGavel, FaLandmark, FaGlobe, FaPassport, FaBriefcase, FaAngleDown, FaCheck, FaTools, FaStamp } from 'react-icons/fa'

const AllServices = () => {
    const [openCategory, setOpenCategory] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpenCategory(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const categories = [
        {
            title: 'נדל"ן ומקרקעין',
            icon: <FaHome />,
            link: '/services/real-estate',
            items: [
                'עסקאות מכר ורכישה',
                'פינוי־בינוי ותמ״א 38',
                'רישום בטאבו',
                'מיסוי מקרקעין'
            ]
        },
        {
            title: 'ליקויי בנייה',
            icon: <FaTools />, // Assuming FaHaus doesn't exist, will use FaTools or similar. Checking imports... using FaHammer instead if available, or just FaHome again with a different style. Let's use FaTools for construction defects.
            link: '/services/construction-defects',
            items: [
                'רטיבות ונזילות',
                'סדקים וליקויים',
                'אי התאמה למפרט',
                'ירידת ערך'
            ]
        },
        {
            title: 'דיני משפחה',
            icon: <FaUsers />,
            link: '/services/family-law',
            items: [
                'גירושין ומזונות',
                'משמורת ילדים',
                'הסכמי ממון',
                'ירושות וצוואות'
            ]
        },
        {
            title: 'נזיקין וביטוח',
            icon: <FaCarCrash />,
            link: '/services/torts',
            items: [
                'תאונות דרכים',
                'תאונות עבודה',
                'רשלנות רפואית',
                'ביטוח לאומי'
            ]
        },
        {
            title: 'דיני עבודה',
            icon: <FaUserTie />,
            link: '/services/labor-law',
            items: [
                'שימוע ופיטורים',
                'זכויות עובדים',
                'הטרדה מינית',
                'חוזי עבודה'
            ]
        },
        {
            title: 'משפט פלילי',
            icon: <FaGavel />,
            link: '/services/criminal-law',
            items: [
                'חקירה משטרתית',
                'מעצרים',
                'עבירות צווארון לבן',
                'רישום פלילי'
            ]
        },
        {
            title: 'משפט מנהלי',
            icon: <FaLandmark />,
            link: '/services/administrative-law',
            items: [
                'עתירות מנהליות',
                'מכרזים',
                'ארנונה לעסקים',
                'רישוי עסקים'
            ]
        },
        {
            title: 'קניין רוחני',
            icon: <FaGlobe />,
            link: '/services/ip-tech',
            items: [
                'סימני מסחר',
                'זכויות יוצרים',
                'הגנת הפרטיות',
                'דיני אינטרנט'
            ]
        },
        {
            title: 'הגירה ואשרות',
            icon: <FaPassport />,
            link: '/services/immigration',
            items: [
                'ויזת מומחה זר',
                'אזרחות ישראלית',
                'איחוד משפחות',
                'הסדרת מעמד'
            ]
        },
        {
            title: 'נוטריון',
            icon: <FaStamp />,
            link: '/services/notary',
            items: [
                'ייפוי כוח נוטריוני',
                'אימות חתימה',
                'תרגום נוטריוני',
                'צוואה נוטריונית'
            ]
        },
        {
            title: 'משפט מסחרי',
            icon: <FaBalanceScale />,
            link: '/services/civil-commercial',
            items: [
                'דיני חוזים',
                'הקמת חברות',
                'ליטיגציה עסקית',
                'גבייה והוצאה לפועל'
            ]
        }
    ]

    const toggleCategory = (index: number) => {
        setOpenCategory(openCategory === index ? null : index)
    }

    return (
        <div ref={containerRef} className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`
                            relative bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200
                            ${openCategory === index ? 'ring-2 ring-amber-400 z-10' : 'hover:shadow-md hover:-translate-y-1'}
                        `}
                    >
                        <button
                            onClick={() => toggleCategory(index)}
                            className="w-full p-6 flex flex-col items-center gap-3 text-center h-full outline-none"
                            aria-expanded={openCategory === index}
                        >
                            <div className={`
                                w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-2 transition-colors duration-300
                                ${openCategory === index ? 'bg-amber-500 text-white' : 'bg-slate-50 text-slate-600'}
                            `}>
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 leading-tight min-h-[40px] flex items-center justify-center text-sm md:text-base">
                                {category.title}
                            </h3>
                            <FaAngleDown
                                className={`text-gray-400 mt-2 transition-transform duration-300 ${openCategory === index ? 'rotate-180 text-amber-500' : ''}`}
                            />
                        </button>

                        {/* Expandable Content Overlay */}
                        <div
                            className={`
                                absolute left-0 right-0 top-[105%] bg-white rounded-xl shadow-xl border border-gray-100 p-5 z-20
                                transition-all duration-200 origin-top
                                ${openCategory === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                            `}
                            style={{
                                minWidth: '280px',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            {/* Little triangle pointer */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>

                            <div className="text-right relative z-10">
                                <h4 className="font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2 text-sm">תחומי התמחות:</h4>
                                <ul className="space-y-2 mb-4">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <FaCheck className="text-amber-500 text-[10px] flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={category.link}
                                    className="block w-full text-center bg-slate-900 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                                >
                                    למידע נוסף
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllServices
