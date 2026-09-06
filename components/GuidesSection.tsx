import Link from 'next/link'

export default function GuidesSection() {
  const guides = [
    { href: '/blog/arnona-discounts', title: 'ארנונה לעסקים: השגה והפחתת חיובים', cat: 'משפט מנהלי' },
    { href: '/blog/buying-guide-or-yehuda-2025', title: 'רכישת דירה באור יהודה — מדריך', cat: 'נדל"ן' },
    { href: '/blog/construction-defects-guide', title: 'ליקויי בנייה בדירה חדשה', cat: 'ליקויי בנייה' },
    { href: '/blog/contract-breach', title: 'הפרת חוזה: מתי מותר לבטל?', cat: 'חוזים' },
    { href: '/blog/purchase-tax-guide', title: 'מס רכישה — איך מחשבים?', cat: 'מיסוי' },
    { href: '/blog/late-apartment-delivery', title: 'איחור במסירת דירה מקבלן', cat: 'נדל"ן' },
  ]
  return (
    <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="guides-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="guides-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            מדריכים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מאמרים מעשיים מעודכנים — נדל&quot;ן, ליקויי בנייה, חוזים ועוד. כל המדריכים זמינים גם ב{' '}
            <Link href="/blog" className="text-amber-600 font-semibold hover:underline">בלוג המשפטי</Link>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all group"
            >
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{g.cat}</span>
              <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-amber-700 leading-snug">{g.title}</h3>
              <span className="mt-3 inline-block text-sm font-semibold text-amber-600">לקריאה ←</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all"
          >
            לכל המדריכים בבלוג
          </Link>
        </div>
      </div>
    </section>
  )
}
