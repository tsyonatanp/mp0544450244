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
        <div ref={containerRef} className="relative w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`
                            relative bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200 flex flex-col
                            ${openCategory === index ? 'ring-2 ring-amber-400 z-10' : 'hover:shadow-md hover:-translate-y-1'}
                        `}
                    >
                        <button
                            onClick={() => setOpenCategory(openCategory === index ? null : index)}
                            className="w-full p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 text-center outline-none h-full"
                            aria-expanded={openCategory === index}
                        >
                            <div className={`
                                w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-1 sm:mb-2 transition-colors duration-300
                                ${openCategory === index ? 'bg-amber-500 text-white' : 'bg-slate-50 text-slate-600'}
                            `}>
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 leading-tight flex items-center justify-center text-xs sm:text-sm md:text-base min-h-[32px] sm:min-h-[40px]">
                                {category.title}
                            </h3>
                            <FaAngleDown
                                className={`text-gray-400 mt-1 sm:mt-2 transition-transform duration-300 ${openCategory === index ? 'rotate-180 text-amber-500' : ''}`}
                            />
                        </button>

                        {/* Expandable Content */}
                        {/* Mobile/Tablet: Inline (Static) */}
                        <div
                            className={`
                                lg:hidden bg-gray-50 border-t border-gray-100 p-4 rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out
                                ${openCategory === index ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0 border-none'}
                            `}
                        >
                            <div className="text-right">
                                <ul className="space-y-2 mb-4">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                                            <FaCheck className="text-amber-500 text-[10px] mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={category.link}
                                    className="block w-full text-center bg-slate-900 text-white py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-slate-800 transition-colors"
                                >
                                    למידע נוסף
                                </a>
                            </div>
                        </div>

                        {/* Desktop: Popover (Absolute) */}
                        <div
                            className={`
                                hidden lg:block absolute left-1/2 -translate-x-1/2 top-[110%] bg-white rounded-xl shadow-xl border border-gray-100 p-5 z-20 w-[280px]
                                transition-all duration-200 origin-top
                                ${openCategory === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                            `}
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
