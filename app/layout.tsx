import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'מריאטה פנחסי - עורך דין נדל"ן ונוטריון בקעת אונו | אור יהודה, קריית אונו, יהוד',
  description: 'משרד עורכי דין מריאטה פנחסי - מומחים במגוון תחומי המשפט: נדל"ן ומקרקעין, משפט אזרחי-מסחרי, דיני משפחה, נזיקין, דיני עבודה, הוצאה לפועל וחדלות פירעון. שירות מקצועי ויחס אישי באור יהודה והמרכז.',
  keywords: 'עורך דין אור יהודה, עורך דין בקעת אונו, נדל"ן ומקרקעין, עסקאות מכר ורכישה, התחדשות עירונית, מיסוי מקרקעין, ליקויי בנייה, משפט אזרחי מסחרי, דיני חוזים, ליטיגציה, גבייה והוצאה לפועל, פשיטת רגל, דיני משפחה, גירושין, צוואות וירושות, ייפוי כוח מתמשך, נזיקין, תאונות דרכים, רשלנות רפואית, דיני עבודה, זכויות עובדים, משפט פלילי, משפט מנהלי, דיני תכנון ובנייה, נוטריון, אזרחות ישראלית, דיני חברות',
  authors: [{ name: 'מריאטה פנחסי' }],
  creator: 'מריאטה פנחסי',
  publisher: 'מריאטה פנחסי - משרד עורכי דין ונוטריון',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marita-pinchasi-law.co.il'),
  alternates: {
    canonical: 'https://marita-pinchasi-law.co.il/',
  },
  other: {
    'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
    'theme-color': '#fbbf24',
    'color-scheme': 'light',
    'accessibility': 'accessible',
    'accessibility-feature': 'high-contrast, large-text, reduced-motion',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'מריאטה פנחסי - משרד עורכי דין ונוטריון',
  },
  openGraph: {
    title: 'מריאטה פנחסי - משרד עורכי דין ונוטריון',
    description: 'משרד עורכי דין ונוטריון מנוסה. הסכמי מכר ורכישה, תביעות ליקויי בניה, צוואות ושירותי נוטריון',
    url: 'https://marita-pinchasi-law.co.il',
    siteName: 'מריאטה פנחסי - משרד עורכי דין ונוטריון',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://marita-pinchasi-law.co.il/logo.png',
        width: 1200,
        height: 630,
        alt: 'מריאטה פנחסי - עורכת דין נדל"ן ונוטריון בקעת אונו - אור יהודה, קריית אונו, יהוד',
        type: 'image/png',
      },
      {
        url: 'https://marita-pinchasi-law.co.il/professional-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'מריאטה פנחסי - עורכת דין מנוסה בקעת אונו',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מריאטה פנחסי - משרד עורכי דין ונוטריון',
    description: 'משרד עורכי דין ונוטריון מנוסה. הסכמי מכר ורכישה, תביעות ליקויי בניה, צוואות ושירותי נוטריון',
    images: ['https://marita-pinchasi-law.co.il/logo.png', 'https://marita-pinchasi-law.co.il/professional-photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'EcJP0O_fKFzQYbmjb1nhwFVMjEsg5m6ktYA9mvFYHio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Accessibility Meta Tags */}
        <meta name="accessibility" content="accessible" />
        <meta name="accessibility-feature" content="high-contrast, large-text, reduced-motion" />
        <meta name="accessibility-hazard" content="none" />
        <meta name="accessibility-control" content="fullKeyboardControl" />
        <meta name="accessibility-api" content="ARIA" />

        {/* Viewport for Accessibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

        {/* Color Scheme */}
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#fbbf24" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        {/* DNS Prefetch & Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//g.page" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="EcJP0O_fKFzQYbmjb1nhwFVMjEsg5m6ktYA9mvFYHio" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
              "url": "https://marita-pinchasi-law.co.il",
              "logo": "https://marita-pinchasi-law.co.il/logo.png",
              "image": "https://marita-pinchasi-law.co.il/professional-photo.jpg",
              "description": "משרד עורכי דין ונוטריון מנוסה באזור בקעת אונו",
              "telephone": "054-4450244",
              "email": "office@marita-pinchasi-law.co.il",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "חרמון 3",
                "addressLocality": "אור יהודה",
                "postalCode": "6041908",
                "addressCountry": "IL",
                "addressRegion": "בקעת אונו"
              },
              "sameAs": [
                "https://www.facebook.com/m0544450244",
                "https://g.page/r/Ce7aJP0Ck8vwEAI"
              ]
            })
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "מריאטה פנחסי",
              "jobTitle": "עורכת דין ונוטריון",
              "image": "https://marita-pinchasi-law.co.il/professional-photo.jpg",
              "url": "https://marita-pinchasi-law.co.il",
              "worksFor": {
                "@type": "Organization",
                "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "חרמון 3",
                "addressLocality": "אור יהודה",
                "postalCode": "6041908",
                "addressCountry": "IL"
              },
              "telephone": "054-4450244",
              "knowsAbout": [
                "דיני נדל\"ן",
                "הסכמי מכר ורכישה",
                "ליקויי בניה",
                "צוואות וירושות",
                "שירותי נוטריון"
              ],
              "areaServed": [
                "בקעת אונו",
                "אור יהודה",
                "קריית אונו",
                "יהוד-מונוסון",
                "גני תקווה"
              ]
            })
          }}
        />

        {/* Legal Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LegalService", "LocalBusiness"],
              "name": "מריאטה פנחסי - משרד עורכי דין ונוטריון",
              "description": "משרד עורכי דין ונוטריון מנוסה. הסכמי מכר ורכישה, תביעות ליקויי בניה, איחור במסירה, סכסוכי שכנים, צוואות ושירותי נוטריון",
              "url": "https://marita-pinchasi-law.co.il",
              "telephone": "054-4450244",
              "areaServed": [
                "בקעת אונו",
                "אור יהודה",
                "קריית אונו",
                "יהוד-מונוסון",
                "יהוד",
                "מונוסון",
                "גני תקווה",
                "תל אביב",
                "רמת גן",
                "גבעתיים",
                "הרצליה",
                "פתח תקווה",
                "רעננה",
                "הוד השרון",
                "כפר סבא",
                "ראשון לציון",
                "רחובות",
                "נס ציונה",
                "רמלה",
                "לוד",
                "מודיעין",
                "מרכז הארץ"
              ],
              "serviceType": [
                "עריכת דין נדל\"ן",
                "הסכמי מכר ורכישה",
                "תביעות ליקויי בניה",
                "איחור במסירה",
                "סכסוכי שכנים",
                "צוואות וירושות",
                "שירותי נוטריון"
              ],
              "provider": {
                "@type": "Person",
                "name": "מריאטה פנחסי",
                "jobTitle": "עורכת דין ונוטריון"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "חרמון 3",
                "addressLocality": "אור יהודה",
                "postalCode": "6041908",
                "addressCountry": "IL",
                "addressRegion": "בקעת אונו"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.0288",
                "longitude": "34.8564"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "18",
                "bestRating": "5",
                "worstRating": "1"
              },
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-ENV1EW9H1B" />
        {children}
      </body>
    </html>
  )
} 