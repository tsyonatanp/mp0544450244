'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaGavel, FaHome, FaTools, FaUsers, FaFileContract, FaStamp, FaMapMarkerAlt, FaClock, FaFacebook, FaStar, FaCheckCircle, FaUniversalAccess, FaEye, FaFont, FaMousePointer, FaUndo } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FacebookGroupInfo from '../components/FacebookGroupInfo'

export default function HomePage() {
  const services = [
    {
      icon: <FaHome className="text-3xl" />,
      title: 'הסכמי מכר ורכישה',
      description: 'ליווי משפטי מקיף בעסקאות נדל"ן – החל מהשלב הראשון ועד להשלמת העסקה',
      features: ['בדיקות מקדימות של נסח טאבו', 'ניסוח והערות להסכם מכר/רכישה', 'ליווי מול הבנקים והרשויות', 'טיפול בעסקאות יד שנייה']
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: 'ליקויי בנייה',
      description: 'ייצוג משפטי מול קבלנים וחברות בנייה בגין ליקויים בדירות חדשות או לאחר שיפוץ',
      features: ['חוות דעת הנדסית', 'תביעות בגין רטיבות וליקויים', 'ייעוץ אסטרטגי וליווי משפטי', 'ניהול מו״מ והליכי פיצוי']
    },
    {
      icon: <FaGavel className="text-3xl" />,
      title: 'תביעות בגין איחור במסירה',
      description: 'השגת פיצויים מכוח חוק המכר דירות, במקרה של איחור במסירת הנכס',
      features: ['בדיקת זכאות וחישוב פיצויים', 'טיפול בהתנגדויות מצד הקבלן', 'ייצוג משפטי מלא עד למיצוי הזכויות', 'קבלת הפיצוי המלא']
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'סכסוכי שכנים וניהול בניינים',
      description: 'מענה משפטי מקצועי לסכסוכים בבנייני מגורים',
      features: ['מטרדי רעש ובנייה בלתי חוקית', 'סכסוכים מול ועד בית', 'ליווי בתביעות לפינוי', 'פתרונות גישור במידת הצורך']
    },
    {
      icon: <FaFileContract className="text-3xl" />,
      title: 'צוואות, ירושות וניהול עיזבון',
      description: 'שמירה על רצון המצווה והגנה על זכויות היורשים',
      features: ['עריכת צוואות פשוטות ומורכבות', 'הגשת בקשות לצו ירושה', 'טיפול בהתנגדויות וסכסוכים משפחתיים', 'ניהול עיזבונות מורכבים']
    },
    {
      icon: <FaStamp className="text-3xl" />,
      title: 'שירותי נוטריון',
      description: 'שירותי נוטריון מהירים, מקצועיים ונוחים',
      features: ['אישור מסמכים רשמיים ותצהירים', 'אימות חתימה, הסכמים ותרגומים נוטריוניים', 'הנפקת אישור אפוסטיל', 'שירות נייד – עד הבית או בית העסק']
    }
  ]

  const [testimonials, setTestimonials] = useState([
    {
      name: 'דוד כהן',
      text: 'מריאטה ליוותה אותנו לאורך כל תהליך רכישת הדירה. מקצועית, זמינה וקשובה!',
      rating: 5
    },
    {
      name: 'שרה לוי',
      text: 'קיבלנו פיצוי מלא על ליקויי בניה – בזכות ליווי משפטי מדויק ונחוש.',
      rating: 5
    },
    {
      name: 'משה ישראלי',
      text: 'פתרה סכסוך שכנים מורכב ברוגע וביעילות. ממליץ מאוד!',
      rating: 5
    }
  ])

  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 1

  // Accessibility state
  const [accessibilityOpen, setAccessibilityOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [showFocus, setShowFocus] = useState(false)
  const [grayscale, setGrayscale] = useState(false)
  const [largeCursor, setLargeCursor] = useState(false)
  const [disableAnimations, setDisableAnimations] = useState(false)
  const [readingGuide, setReadingGuide] = useState(false)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews')
        if (response.ok) {
          const reviews = await response.json()
          if (reviews.length > 0) {
            setTestimonials(reviews)
          }
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
        // לא נשנה את testimonials אם יש שגיאה - נשאיר את הביקורות הקיימות
      }
    }

    // נחכה קצת לפני שננסה לטעון ביקורות
    const timer = setTimeout(fetchReviews, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className={`min-h-screen ${disableAnimations ? 'motion-reduce' : ''} ${largeCursor ? 'cursor-large' : ''} ${highContrast ? 'high-contrast-mode' : ''} ${grayscale ? 'grayscale-mode' : ''} ${readingGuide ? 'reading-guide' : ''}`}
      style={{
        fontSize: `${fontSize}px`,
        ...(showFocus && {
          '--tw-ring-offset-shadow': '0 0 #0000',
          '--tw-ring-shadow': '0 0 0 3px rgba(251, 191, 36, 0.5)',
        })
      }}
    >
      {/* Skip to Content Link */}
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>
      
      <Header />
      
      {/* Accessibility Button */}
      <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-4">
        <button
          onClick={() => setAccessibilityOpen(!accessibilityOpen)}
          onKeyDown={(e) => e.key === 'Enter' && setAccessibilityOpen(!accessibilityOpen)}
          className="accessibility-button bg-amber-500/80 hover:bg-amber-600/90 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 keyboard-nav backdrop-blur-sm"
          aria-label="פתח אפשרויות נגישות"
          aria-expanded={accessibilityOpen}
          aria-controls="accessibility-panel"
          tabIndex={0}
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <FaUniversalAccess className="text-lg sm:text-xl" />
          <span className="sr-only">פתח אפשרויות נגישות</span>
        </button>
        
        {/* Accessibility Panel */}
        {accessibilityOpen && (
          <div 
            id="accessibility-panel"
            className="accessibility-panel absolute left-0 bottom-12 bg-white rounded-lg shadow-xl border border-gray-200 p-3 sm:p-4 w-72 sm:w-80 max-h-80 sm:max-h-96 overflow-y-auto"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <h3 id="accessibility-title" className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">אפשרויות נגישות</h3>
            <p id="accessibility-description" className="sr-only">פאנל להגדרת אפשרויות נגישות לאתר</p>
            
            {/* Font Size */}
            <div className="mb-3 sm:mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">גודל טקסט</label>
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  onKeyDown={(e) => e.key === 'Enter' && setFontSize(Math.max(12, fontSize - 2))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-3 py-2 rounded text-xs sm:text-sm keyboard-nav"
                  aria-label="הקטן גודל טקסט"
                  tabIndex={0}
                  style={{ minWidth: '40px', minHeight: '40px' }}
                >
                  <FaFont className="text-xs" />
                  <span className="sr-only">הקטן גודל טקסט</span>
                </button>
                <span className="px-2 sm:px-3 py-2 bg-gray-100 rounded text-xs sm:text-sm flex items-center" aria-live="polite">גודל: {fontSize}px</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  onKeyDown={(e) => e.key === 'Enter' && setFontSize(Math.min(24, fontSize + 2))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-3 py-2 rounded text-xs sm:text-sm keyboard-nav"
                  aria-label="הגדל גודל טקסט"
                  tabIndex={0}
                  style={{ minWidth: '40px', minHeight: '40px' }}
                >
                  <FaFont className="text-sm sm:text-lg" />
                  <span className="sr-only">הגדל גודל טקסט</span>
                </button>
              </div>
            </div>
            
            {/* High Contrast */}
            <div className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="mr-2 w-4 h-4"
                  aria-describedby="high-contrast-desc"
                />
                <FaEye className="mr-2 text-sm" />
                <span className="text-xs sm:text-sm">ניגודיות גבוהה</span>
              </label>
              <p id="high-contrast-desc" className="sr-only">הפעלת מצב ניגודיות גבוהה לבעלי ראייה מוגבלת</p>
            </div>
            
            {/* Focus Indicators */}
            <div className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFocus}
                  onChange={(e) => setShowFocus(e.target.checked)}
                  className="mr-2 w-4 h-4"
                  aria-describedby="focus-desc"
                />
                <FaMousePointer className="mr-2 text-sm" />
                <span className="text-xs sm:text-sm">הדגשת מיקוד</span>
              </label>
              <p id="focus-desc" className="sr-only">הדגשת אלמנטים במצב מיקוד לניווט מקלדת</p>
            </div>

            {/* Grayscale */}
            <div className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={grayscale}
                  onChange={(e) => setGrayscale(e.target.checked)}
                  className="mr-2 w-4 h-4"
                  aria-describedby="grayscale-desc"
                />
                <FaEye className="mr-2 text-sm" />
                <span className="text-xs sm:text-sm">מצב שחור-לבן</span>
              </label>
              <p id="grayscale-desc" className="sr-only">הפעלת מצב שחור-לבן לבעלי עיוורון צבעים</p>
            </div>

            {/* Large Cursor */}
            <div className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={largeCursor}
                  onChange={(e) => setLargeCursor(e.target.checked)}
                  className="mr-2 w-4 h-4"
                  aria-describedby="cursor-desc"
                />
                <FaMousePointer className="mr-2 text-sm" />
                <span className="text-xs sm:text-sm">סמן גדול</span>
              </label>
              <p id="cursor-desc" className="sr-only">הגדלת הסמן לניווט קל יותר</p>
            </div>

            {/* Disable Animations */}
            <div className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={disableAnimations}
                  onChange={(e) => setDisableAnimations(e.target.checked)}
                  className="mr-2 w-4 h-4"
                  aria-describedby="animations-desc"
                />
                <FaEye className="mr-2 text-sm" />
                <span className="text-xs sm:text-sm">ביטול אנימציות</span>
              </label>
              <p id="animations-desc" className="sr-only">ביטול אנימציות לבעלי רגישות לתנועה</p>
            </div>

            {/* Reading Guide */}
            <div className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={readingGuide}
                  onChange={(e) => setReadingGuide(e.target.checked)}
                  className="mr-2 w-4 h-4"
                  aria-describedby="reading-desc"
                />
                <FaEye className="mr-2 text-sm" />
                <span className="text-xs sm:text-sm">מדריך קריאה</span>
              </label>
              <p id="reading-desc" className="sr-only">הוספת מדריך קריאה לבעלי קשיי קריאה</p>
            </div>
            
            {/* Reset Button */}
            <div className="mb-3 sm:mb-4">
              <button
                onClick={() => {
                  setFontSize(16)
                  setHighContrast(false)
                  setShowFocus(false)
                  setGrayscale(false)
                  setLargeCursor(false)
                  setDisableAnimations(false)
                  setReadingGuide(false)
                }}
                onKeyDown={(e) => e.key === 'Enter' && (() => {
                  setFontSize(16)
                  setHighContrast(false)
                  setShowFocus(false)
                  setGrayscale(false)
                  setLargeCursor(false)
                  setDisableAnimations(false)
                  setReadingGuide(false)
                })()}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded text-xs sm:text-sm keyboard-nav flex items-center justify-center gap-2"
                aria-label="אפס הגדרות נגישות"
                tabIndex={0}
                style={{ minHeight: '40px' }}
              >
                <FaUndo className="text-xs sm:text-sm" />
                אפס הגדרות
              </button>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setAccessibilityOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setAccessibilityOpen(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded text-xs sm:text-sm keyboard-nav"
              aria-label="סגור פאנל נגישות"
              tabIndex={0}
              style={{ minHeight: '40px' }}
            >
              סגור
            </button>
          </div>
        )}
      </div>
      
      {/* Hero Section */}
      <section id="main-content" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-800/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="מריאטה פנחסי - משרד עורכי דין"
                  width={140}
                  height={140}
                  className="rounded-full shadow-2xl ring-4 ring-white/20"
                  onError={(e) => {
                    // אם התמונה לא נטענת, נציג placeholder
                    e.currentTarget.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'w-35 h-35 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl ring-4 ring-white/20'
                    placeholder.textContent = 'מ'
                    e.currentTarget.parentNode?.appendChild(placeholder)
                  }}
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              מריאטה פנחסי
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              משרד עורכי דין
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
              מומחית בדיני נדל"ן, ליקויי בנייה, צוואות ושירותי נוטריון
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto">
              שירות מקצועי בכל אזור המרכז: תל אביב, רמת גן, גבעתיים, הרצליה, פתח תקווה, רעננה, הוד השרון, כפר סבא, ראשון לציון, רחובות, נס ציונה, רמלה, לוד, מודיעין ועוד
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:054-4450244"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <FaPhone className="text-xl" />
                התקשרו: 054-4450244
              </a>
              <a
                href="https://wa.me/972544450244"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                אודות המשרד
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  משרד עורכת הדין <strong className="text-gray-900">מריאטה פנחסי</strong> נוסד מתוך מחויבות עמוקה למקצועיות, שירות אישי והגנה על זכויות הלקוח.
                </p>
                <p>
                  עם ניסיון של מעל 14 שנות ניסיון בתחומי הנדל"ן והמשפט האזרחי, המשרד מעניק ליווי משפטי מלא, מדויק ואמין – מהשלב הראשון ועד לסיום התהליך – תוך שמירה על זמינות גבוהה ויחס אישי בגובה העיניים.
                </p>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">חזון המשרד</h3>
                  <p className="text-gray-700">
                    אנו מאמינים שלכל לקוח מגיע ייצוג משפטי איכותי, הוגן ונגיש. מטרתנו היא להפוך את המורכב לפשוט, ולהעניק תחושת ביטחון בכל צעד משפטי.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-6">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="font-semibold">ניסיון מעשי עשיר בליווי מאות לקוחות</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="font-semibold">תוצאות מוכחות בפיצויים והצלחות משפטיות</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="font-semibold">זמינות גבוהה ומענה אישי</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="font-semibold">התאמת השירות לצרכים הייחודיים</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <Image
                  src="/professional-photo.jpg"
                  alt="מריאטה פנחסי"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  onError={(e) => {
                    // אם התמונה לא נטענת, נסתיר אותה
                    e.currentTarget.style.display = 'none'
                  }}
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">14+</div>
                    <div className="text-sm">שנות ניסיון</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">תחומי התמחות</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנו מתמחים במגוון רחב של שירותים משפטיים בתחום הנדל"ן והמשפט האזרחי
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">דברי לקוחותינו</h2>
            <p className="text-xl text-gray-600">הצלחות ותוצאות מוכחות</p>
            
            {/* Google Reviews CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ביקורות Google</h3>
              <p className="text-gray-700 mb-6">השאירו ביקורת ותעזרו לאחרים למצוא את השירות הטוב ביותר</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://g.page/r/CYhK8Q9QZQhKEAg/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaStar className="text-xl" />
                  השאירו ביקורת ב-Google
                </a>
                <a
                  href="https://www.google.com/search?q=מריאטה+פנחסי+עורך+דין+נדלן&rlz=1C1CHBF_heIL922IL922&oq=מריאטה+פנחסי+עורך+דין+נדלן&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YDRiABDIKCAIQABgNGA0YgAQyCggDEC4YDRiABDIKCAQQABgNGA0YgAQyCggFEC4YDRiABDIKCAYQABgNGA0YgAQyCggHEC4YDRiABDIKCAgQABgNGA0YgAQyCggJEC4YDRiABNIBCDI0MTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x151d4b8b8b8b8b8b:0x8b8b8b8b8b8b8b8b,1,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaStar className="text-xl" />
                  צפו בביקורות Google
                </a>
              </div>
            </div>
          </div>
          
          {/* Reviews Display */}
          <div className="relative">
            <div className="flex justify-center">
              {testimonials
                .slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)
                .map((testimonial, index) => (
                  <div key={currentPage * reviewsPerPage + index} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-100 h-80 flex flex-col w-full max-w-md">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-amber-500" />
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <p className="text-gray-700 leading-relaxed flex-1 overflow-hidden">
                        "{testimonial.text.length > 200 ? `${testimonial.text.substring(0, 200)}...` : testimonial.text}"
                      </p>
                      <div className="font-semibold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                        – {testimonial.name}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={() => setCurrentPage(currentPage === 0 ? testimonials.length - 1 : currentPage - 1)}
                  onKeyDown={(e) => e.key === 'Enter' && setCurrentPage(currentPage === 0 ? testimonials.length - 1 : currentPage - 1)}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full shadow-lg transition-all duration-300 bg-white text-amber-500 hover:bg-amber-500 hover:text-white border-2 border-amber-500 keyboard-nav"
                  aria-label="הקודם"
                  tabIndex={0}
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => setCurrentPage(currentPage === testimonials.length - 1 ? 0 : currentPage + 1)}
                  onKeyDown={(e) => e.key === 'Enter' && setCurrentPage(currentPage === testimonials.length - 1 ? 0 : currentPage + 1)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full shadow-lg transition-all duration-300 bg-white text-amber-500 hover:bg-amber-500 hover:text-white border-2 border-amber-500 keyboard-nav"
                  aria-label="הבא"
                  tabIndex={0}
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">צרו קשר</h2>
            <p className="text-xl text-gray-200">מוכנים לעזור לכם בכל שאלה או בעיה משפטית</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">פרטי קשר</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">טלפון</p>
                      <p className="text-gray-200 text-lg">054-4450244</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-200 text-lg">054-4450244</p>
                    </div>
                  </div>

                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">שעות פעילות</p>
                      <p className="text-gray-200">כל השבוע (למעט שישי-שבת וחגים)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">אזור שירות</p>
                      <p className="text-gray-200">מרכז הארץ - תל אביב, רמת גן, גבעתיים, הרצליה, פתח תקווה, רעננה, הוד השרון, כפר סבא, ראשון לציון, רחובות, נס ציונה, רמלה, לוד, מודיעין</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:054-4450244"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaPhone className="text-xl" />
                התקשרו עכשיו
              </a>
              <a
                href="https://wa.me/972544450244"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                שלחו WhatsApp
              </a>
              <a
                href="https://g.page/r/CYhK8Q9QZQhKEAg/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaStar className="text-xl" />
                השאירו ביקורת
              </a>
              <a
                href="https://www.facebook.com/m0544450244"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaFacebook className="text-xl" />
                עקבו אחרינו
              </a>
              <FacebookGroupInfo
                groupId="dirahadasha"
                groupName="דירה חדשה מקבלן"
                groupUrl="https://www.facebook.com/groups/dirahadasha"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 