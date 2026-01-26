'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaCheckCircle, FaStar, FaPhone, FaWhatsapp, FaUniversity, FaBuilding, FaRoad } from 'react-icons/fa'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function OrYehudaPage() {
    return (
        <div className="min-h-screen bg-gray-50 direction-rtl">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                        עורך דין נדל"ן באור יהודה
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        משרד עורכי דין מריאטה פנחסי - המומחים שלך לנדל"ן, צוואות ונוטריון בלב אור יהודה.
                        ליווי אישי ומקצועי לתושבי העיר והסביבה.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Right Side */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">למה לבחור במשרד שלנו באור יהודה?</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    היכרות מעמיקה עם העיר, שכונותיה ותוכניות הפיתוח שלה היא יתרון מכריע בעסקאות נדל"ן.
                                    משרדנו ממוקם באור יהודה ומעניק שירות שוטף ליזמים, קבלנים ודיירים בפרויקטים השונים בעיר,
                                    החל משכונת נווה רבין הוותיקה ועד "בית בפארק" החדשה.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <FaUniversity className="text-3xl text-amber-500 mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">יתרון מקומי</h3>
                                    <p className="text-sm text-gray-600">היכרות עם מחלקות העירייה והוועדה לתכנון ובנייה המקומית.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <FaBuilding className="text-3xl text-amber-500 mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">התחדשות עירונית</h3>
                                    <p className="text-sm text-gray-600">ניסיון רב בפרויקטים של פינוי-בינוי ותמ"א 38 באור יהודה.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="bg-slate-800 text-white p-4">
                                    <h3 className="font-bold text-lg flex items-center gap-2">
                                        <FaMapMarkerAlt />
                                        אזורי שירות מרכזיים בעיר
                                    </h3>
                                </div>
                                <div className="p-6 grid grid-cols-2 gap-4">
                                    {['נווה רבין', 'נווה סביון', 'בית בפארק', 'קרית גיורא', 'סקיה', 'אזור התעשייה'].map((neighborhood) => (
                                        <div key={neighborhood} className="flex items-center gap-2 text-gray-700">
                                            <FaCheckCircle className="text-green-500 text-sm" />
                                            {neighborhood}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">שירותים משפטיים לתושבי אור יהודה</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-amber-600">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">מכירה ורכישת דירות</h4>
                                            <p className="text-gray-600 text-sm">ליווי מעטפת מלאה לעסקאות יד שנייה ודירות מקבלן.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-amber-600">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">שירותי נוטריון מקומיים</h4>
                                            <p className="text-gray-600 text-sm">אימות חתימה, ייפוי כוח, אישורי חיים ותרגומים - קרוב לבית.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-amber-600">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">צוואות וירושות</h4>
                                            <p className="text-gray-600 text-sm">עריכת צוואות, בקשות לצווי ירושה וניהול עיזבונות ברגישות ובמקצועיות.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Left Side - Contact & Map */}
                        <div className="lg:sticky lg:top-24 space-y-8">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">גרים באור יהודה והסביבה?</h3>
                                    <p className="text-gray-600">אנחנו קרובים אליכם יותר מתמיד.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                        <FaMapMarkerAlt className="text-amber-500 text-xl" />
                                        <div>
                                            <p className="font-bold text-gray-900">כתובתנו:</p>
                                            <p className="text-gray-600">חרמון 3, אור יהודה 6041908</p>
                                        </div>
                                    </div>

                                    <hr className="border-gray-100" />

                                    <a
                                        href="tel:054-4450244"
                                        className="flex items-center justify-center gap-3 w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg"
                                    >
                                        <FaPhone />
                                        054-4450244
                                    </a>

                                    <a
                                        href="https://wa.me/972544450244"
                                        className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        הודעה בוואטסאפ
                                    </a>
                                </div>
                            </div>

                            {/* Fake Map Image Placeholder */}
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 relative group h-64 flex flex-col items-center justify-center text-center p-6 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]">
                                <FaMapMarkerAlt className="text-5xl text-red-500 mb-4 drop-shadow-md animate-bounce" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">המשרד באור יהודה</h4>
                                <p className="text-gray-600 mb-6">חרמון 3, אור יהודה (קומה 1)</p>

                                <div className="flex gap-3 w-full justify-center">
                                    <a
                                        href="https://waze.com/ul?ll=32.038879,34.859295&navigate=yes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-md"
                                    >
                                        <FaMapMarkerAlt />
                                        נווט עם Waze
                                    </a>
                                    <a
                                        href="https://maps.google.com/?q=32.038879,34.859295"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm"
                                    >
                                        <FaMapMarkerAlt />
                                        Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
