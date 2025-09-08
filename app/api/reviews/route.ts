import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('Reviews API endpoint called')
  
  // Simple response for testing
  const demoReviews = [
    {
      name: 'דוד כהן',
      text: 'מריאטה ליוותה אותנו לאורך כל תהליך רכישת הדירה. מקצועית, זמינה וקשובה! מאוד מרוצה מהשירות.',
      rating: 5,
      time: 'לפני חודש',
      profile_photo: ''
    },
    {
      name: 'שרה לוי',
      text: 'קיבלנו פיצוי מלא על ליקויי בניה – בזכות ליווי משפטי מדויק ונחוש. ממליצה בחום!',
      rating: 5,
      time: 'לפני חודשיים',
      profile_photo: ''
    },
    {
      name: 'משה ישראלי',
      text: 'פתרה סכסוך שכנים מורכב ברוגע וביעילות. מקצועית ואמינה. ממליץ מאוד!',
      rating: 5,
      time: 'לפני 3 חודשים',
      profile_photo: ''
    },
    {
      name: 'רחל כהן',
      text: 'עזרה לנו עם צוואה מורכבת בצורה מקצועית ורגישה. מאוד מרוצים מהשירות.',
      rating: 5,
      time: 'לפני 4 חודשים',
      profile_photo: ''
    },
    {
      name: 'יוסי לוי',
      text: 'שירותי נוטריון מהירים ומקצועיים. הגיעה עד הבית ועזרה לנו עם כל המסמכים.',
      rating: 5,
      time: 'לפני 5 חודשים',
      profile_photo: ''
    }
  ]

  return new NextResponse(JSON.stringify(demoReviews), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Demo': 'true',
    },
  })
} 