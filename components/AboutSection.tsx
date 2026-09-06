import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

export default function AboutSection() {
  return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
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
                  alt="מריאטה פנחסי - עורכת דין נדלן ונוטריון בקעת אונו עם 14 שנות ניסיון"
                  width={500}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="rounded-2xl shadow-2xl"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
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
  )
}
