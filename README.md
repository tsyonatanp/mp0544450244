# מריאטה פנחסי - משרד עורכי דין

אתר מקצועי למשרד עורכי דין מריאטה פנחסי, המתמחה בהסכמי מכר ורכישה, ליקויי בניה, צוואות ושירותי נוטריון.

## 🚀 תכונות

- **עיצוב מודרני ונקי** - עיצוב אלגנטי עם צבעים כחול כהה, זהב ולבן
- **תצוגה רספונסיבית** - מותאם למובייל, טאבלט ומחשב
- **SEO מתקדם** - עם Next.js, SSR/SSG ו-meta tags
- **בלוג דינמי** - חיבור ל-Google Sheets לניהול תוכן
- **המלצות מ-Google** - חיבור ל-Google Places API להצגת המלצות אמיתיות
- **ניווט אינטואיטיבי** - עם Header ו-Footer מקצועיים

## 📋 דרישות מערכת

- Node.js 18+ 
- npm או yarn

## 🛠️ התקנה

1. **שכפול הפרויקט**
```bash
git clone <repository-url>
cd marita-pinchasi-law
```

2. **התקנת תלויות**
```bash
npm install
```

3. **הגדרת משתני סביבה**
צור קובץ `.env.local` בתיקיית הפרויקט:
```env
# Google Sheets API (לבלוג)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Google Places API (להמלצות)
GOOGLE_PLACES_API_KEY=your-google-places-api-key-here

# Website Configuration
NEXT_PUBLIC_SITE_URL=https://marita-pinchasi-law.co.il
NEXT_PUBLIC_PHONE=054-4450244
NEXT_PUBLIC_WHATSAPP=972544450244
```

4. **העתקת קבצי תמונות**
העתק את הקבצים הבאים לתיקיית `public/`:
- `לוגו תלת מימד.png` → `public/logo.png`
- `תמונה מקצועית.jpg` → `public/professional-photo.jpg`

## 🚀 הפעלה

**פיתוח:**
```bash
npm run dev
```

**בנייה לפרודקשן:**
```bash
npm run build
npm start
```

## 🔒 אבטחה

### הגנות שהופעלו:
- ✅ **Security Headers** - X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- ✅ **Content Security Policy (CSP)** - הגנה מפני XSS ו-injection attacks
- ✅ **Rate Limiting** - הגבלת בקשות ל-10 לדקה לכל IP
- ✅ **Origin Validation** - בדיקת מקור הבקשות
- ✅ **HTTPS Enforcement** - כפיית HTTPS בפרודקשן
- ✅ **Input Validation** - בדיקת קלט בכל ה-APIs
- ✅ **Error Handling** - טיפול בטעויות ללא חשיפת מידע רגיש

### הנחיות אבטחה:
1. **לעולם אל תעלה קבצי .env לגיט**
2. **השתמש ב-API keys עם הגבלות מתאימות**
3. **הפעל HTTPS בפרודקשן**
4. **עדכן את ה-API keys באופן קבוע**
5. **השתמש ב-strong passwords לכל החשבונות**
6. **הפעל 2FA על כל החשבונות**
7. **עקוב אחר הלוגים לפעילות חשודה**

### בדיקות אבטחה מומלצות:
```bash
# בדיקת dependencies
npm audit

# בדיקת TypeScript
npm run lint

# בדיקת build
npm run build
```

## 📁 מבנה הפרויקט

```
marita-pinchasi-law/
├── app/                    # Next.js App Router
│   ├── blog/              # דפי בלוג
│   ├── contact/           # דף צור קשר
│   ├── globals.css        # סגנונות גלובליים
│   ├── layout.tsx         # Layout ראשי
│   ├── page.tsx           # דף בית
│   ├── robots.ts          # robots.txt
│   └── sitemap.ts         # sitemap.xml
├── components/            # קומפוננטות React
│   ├── Header.tsx         # כותרת האתר
│   └── Footer.tsx         # כותרת תחתונה
├── lib/                   # ספריות עזר
│   ├── googleSheets.ts    # חיבור ל-Google Sheets (בלוג)
│   └── googleReviews.ts   # חיבור ל-Google Places API (המלצות)
├── public/                # קבצים סטטיים
│   ├── logo.png           # לוגו
│   └── professional-photo.jpg # תמונה מקצועית
└── package.json           # תלויות הפרויקט
```

## 🎨 עיצוב

האתר משתמש ב-Tailwind CSS עם הצבעים הבאים:
- **כחול כהה** (`primary-900`): #1e3a8a
- **זהב** (`gold-500`): #f59e0b
- **לבן**: רקע נקי

## 📱 דפים זמינים

- **דף בית** (`/`) - תצוגה כללית ושירותים
- **אודות** (`/about`) - מידע על מריאטה פנחסי
- **שירותים** (`/services/*`) - דפי שירות מפורטים
- **בלוג** (`/blog`) - מאמרים מקצועיים
- **המלצות** (`/testimonials`) - המלצות מ-Google Reviews
- **שאלות נפוצות** (`/faq`) - שאלות ותשובות
- **צור קשר** (`/contact`) - טופס קשר ופרטים

## 🔧 API Integrations

### Google Sheets API (בלוג)
האתר מתחבר ל-Google Sheets לניהול תוכן הבלוג:

**קישור ל-Sheet:** https://docs.google.com/spreadsheets/d/19CylpCFNCIOoKYHA6ieBV2rDmfmTfi5My8s-eP4K16Q/edit?usp=sharing

**עמודות נדרשות:**
- A: כותרת
- B: תאריך
- C: תקציר
- D: תוכן מלא
- E: תמונה (קישור)

### Google Places API (המלצות)
האתר מתחבר ל-Google Places API להצגת המלצות אמיתיות:

**הגדרה נדרשת:**
1. צור Google Cloud Project
2. הפעל Places API
3. צור API Key
4. מצא את ה-Place ID של המשרד ב-Google Maps
5. הוסף את הפרטים ל-`.env.local`:
   ```env
   GOOGLE_PLACES_API_KEY=your-api-key-here
   GOOGLE_PLACE_ID=your-place-id-here
   ```

**איך למצוא Place ID:**
1. פתח Google Maps
2. חפש את המשרד
3. לחץ על המשרד
4. גלול למטה ל-"Share"
5. העתק את ה-ID מהקישור

## 📞 פרטי קשר

- **טלפון:** 054-4450244
- **WhatsApp:** https://wa.me/972544450244
- **פייסבוק:** 
  - https://www.facebook.com/groups/dirahadasha
  - https://www.facebook.com/m0544450244

## 🚀 פריסה

האתר מוכן לפריסה ב-Vercel, Netlify או כל שירות אחסון אחר התומך ב-Next.js.

## 📄 רישיון

© 2024 מריאטה פנחסי - משרד עורכי דין. כל הזכויות שמורות. 