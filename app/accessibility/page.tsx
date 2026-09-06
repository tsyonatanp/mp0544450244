import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaUniversalAccess, FaEye, FaFont, FaMousePointer, FaUndo, FaCheckCircle, FaPhone, FaWhatsapp, FaKeyboard, FaHeadset } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'הצהרת נגישות | מריאטה פנחסי - עורכת דין ונוטריון באור יהודה',
  description: 'הצהרת נגישות של אתר משרד עורכת הדין מריאטה פנחסי: התאמות באתר, ניווט מקלדת, קורא מסך, דרכי פנייה לרכזת נגישות ושירות נגיש באור יהודה ובקעת אונו.',
  keywords: 'הצהרת נגישות, נגישות אתר, עורכת דין נגישה, נגישות אור יהודה, מריאטה פנחסי',
  alternates: {
    canonical: 'https://www.marietta-law.co.il/accessibility',
  },
  openGraph: {
    title: 'הצהרת נגישות | מריאטה פנחסי - עורכת דין ונוטריון',
    description: 'מחויבות לנגישות דיגיטלית ושירותית: התאמות באתר, ניווט נגיש ודרכי פנייה לתיקון ליקויים.',
    url: 'https://www.marietta-law.co.il/accessibility',
    type: 'website',
    images: [{
      url: 'https://www.marietta-law.co.il/logo.png',
      width: 1200,
      height: 630,
      alt: 'הצהרת נגישות - מריאטה פנחסי',
    }],
  },
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 pt-32">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-full mb-4">
              <FaUniversalAccess className="text-2xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הצהרת נגישות</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              משרד עורכת הדין ונוטריון מריאטה פנחסי מחויב לנגישות דיגיטלית ושירותית — כדי שכל גולשת וגולש יוכלו לקבל מידע משפטי ברור ולפנות אלינו בנוחות.
            </p>
          </div>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מחויבות המשרד לנגישות</h2>
              <p className="mb-4">
                אנו רואים בנגישות חלק בלתי נפרד מהשירות המשפטי. האתר מיועד לספק מידע על שירותי המשרד — נדל&quot;ן, ליקויי בנייה, דיני משפחה, נוטריון ועוד — באופן שיהיה שמיש גם לאנשים עם מוגבלויות. אנו פועלים בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות) ולעקרונות WCAG 2.1 ברמת AA, ככל שהדבר ישים באתר.
              </p>
              <p>
                המשרד ממוקם באור יהודה ומשרת לקוחות מכל בקעת אונו והמרכז. לצד הנגישות הדיגיטלית, אנו משתדלים לאפשר תיאום פגישות, שיחות טלפון והתכתבות בוואטסאפ באופן נגיש וגמיש.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מה תמצאו באתר הנגיש</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3 gap-3">
                    <FaFont className="text-amber-500 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-900">גודל טקסט</h3>
                  </div>
                  <p>באמצעות כפתור הנגישות באתר ניתן להגדיל או להקטין את גודל הטקסט לקריאה נוחה יותר.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3 gap-3">
                    <FaEye className="text-amber-500 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-900">ניגודיות ומצב שחור־לבן</h3>
                  </div>
                  <p>מצבי ניגודיות גבוהה ושחור־לבן מסייעים למשתמשים עם לקויות ראייה או רגישות לצבעים.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3 gap-3">
                    <FaMousePointer className="text-amber-500 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-900">הדגשת מיקוד וסמן מוגדל</h3>
                  </div>
                  <p>הדגשת אלמנטים במצב מיקוד וסמן גדול יותר לניווט ברור יותר במקלדת ובעכבר.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-3 gap-3">
                    <FaKeyboard className="text-amber-500 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-900">ניווט מקלדת ודלג לתוכן</h3>
                  </div>
                  <p>ניתן לנווט עם Tab בין קישורים וכפתורים. בראש העמודים מופיע קישור &quot;דלג לתוכן הראשי&quot;.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">קוראי מסך ותוכן</h2>
              <p className="mb-4">
                האתר נבנה עם כותרות היררכיות (H1–H3), טקסט חלופי לתמונות מרכזיות ככל האפשר, ותוויות לכפתורים. עמודי השירות והמדריכים בבלוג נכתבים בעברית ברורה, עם קישורי ניווט פנימיים — למשל לעמודי{' '}
                <Link href="/areas/or-yehuda" className="text-amber-600 font-semibold hover:underline">אור יהודה</Link>
                ,{' '}
                <Link href="/areas/bikat-ono" className="text-amber-600 font-semibold hover:underline">בקעת אונו</Link>
                {' '}ו{' '}
                <Link href="/blog" className="text-amber-600 font-semibold hover:underline">הבלוג המשפטי</Link>.
              </p>
              <p>
                אם נתקלתם בתוכן שאינו קריא בקורא מסך (למשל מסמך PDF ישן או רכיב ויזואלי), אנא דווחו לנו — נטפל בתיקון או נספק חלופה נגישה.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שירות נגיש במשרד</h2>
              <p className="mb-4">
                מעבר לאתר, המשרד משתדל לאפשר קבלת שירות בדרכים מגוונות: שיחת טלפון, וואטסאפ, דוא&quot;ל ותיאום פגישה. אם נדרשות התאמות סבירות לפגישה (זמן נוסף, ליווי, העדפת ערוץ תקשורת מסוים) — ציינו זאת בעת הפנייה ונעשה מאמץ לסייע.
              </p>
              <ul className="space-y-2 list-none pr-0">
                {[
                  'מידע על שירותים משפטיים בעמודי /services',
                  'מדריכים מעשיים בעמוד /blog',
                  'יצירת קשר מהירה מהעמוד הראשי ומכפתורי הטלפון/וואטסאפ',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaHeadset className="text-amber-500" />
                רכזת נגישות ודיווח על ליקויים
              </h2>
              <div className="bg-amber-50 rounded-lg p-6">
                <p className="text-amber-950 mb-4">
                  נתקלתם בבעיית נגישות באתר או בשירות? נשמח לקבל פנייה מפורטת (איזה עמוד, איזה מכשיר/דפדפן, מה קרה) ונפעל לתקן בהקדם האפשרי.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-amber-600" />
                    <a href="tel:054-4450244" className="text-amber-900 font-semibold hover:underline">טלפון: 054-4450244</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-amber-600" />
                    <a href="https://wa.me/972544450244" className="text-amber-900 font-semibold hover:underline">WhatsApp: 054-4450244</a>
                  </div>
                  <p className="text-amber-900 pt-2">
                    ניתן גם לפנות דרך{' '}
                    <Link href="/#contact" className="font-semibold underline">טופס יצירת הקשר</Link>
                    {' '}בעמוד הבית.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עמידה בתקנים וסטטוס</h2>
              <ul className="space-y-3 list-none pr-0">
                {[
                  'התאמה לעקרונות תקנות הנגישות הישראליות לשירות',
                  'מטרת יישום: WCAG 2.1 רמה AA ככל שהדבר ישים',
                  'תמיכה בניווט מקלדת ובקוראי מסך נפוצים',
                  'שימוש בתוויות ARIA ברכיבים אינטראקטיביים מרכזיים',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600">
                האתר מתעדכן באופן שוטף. עדכון אחרון להצהרה זו: ספטמבר 2026. ייתכן שחלק מהתכנים החיצוניים או רכיבי צד־שלישי יהיו פחות נגישים — נשמח לקבל דיווח ונציע חלופה במידת הצורך.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 gap-2"
              >
                <FaUndo />
                חזרה לדף הבית
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300"
              >
                למדריכים המשפטיים
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
