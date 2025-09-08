import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'מריאטה פנחסי - עורך דין נדל"ן | הסכמי מכר, ליקויי בניה, צוואות',
  description: 'עורך דין נדל"ן מנוסה. הסכמי מכר ורכישה, תביעות ליקויי בניה, איחור במסירה, סכסוכי שכנים, צוואות ושירותי נוטריון. שירות בכל הארץ',
  keywords: 'עורך דין נדל"ן, הסכמי מכר ורכישה, ליקויי בניה, איחור במסירה, סכסוכי שכנים, צוואות, נוטריון, עורך דין נדל"ן',
  authors: [{ name: 'מריאטה פנחסי' }],
  creator: 'מריאטה פנחסי',
  publisher: 'מריאטה פנחסי - משרד עורכי דין',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marita-pinchasi-law.co.il'),
  alternates: {
    canonical: '/',
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
    'apple-mobile-web-app-title': 'מריאטה פנחסי - עורך דין נדל"ן',
  },
  openGraph: {
    title: 'מריאטה פנחסי - עורך דין נדל"ן',
    description: 'עורך דין נדל"ן מנוסה. הסכמי מכר ורכישה, תביעות ליקויי בניה, צוואות ושירותי נוטריון',
    url: 'https://marita-pinchasi-law.co.il',
    siteName: 'מריאטה פנחסי - משרד עורכי דין',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'מריאטה פנחסי - עורך דין נדל"ן',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מריאטה פנחסי - עורך דין נדל"ן',
    description: 'עורך דין נדל"ן מנוסה. הסכמי מכר ורכישה, תביעות ליקויי בניה, צוואות ושירותי נוטריון',
    images: ['/logo.png'],
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
    google: 'AfzvrTL7y21afQyZ3gvo3QvNeSfT_sbDyliKER_DCLs',
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
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/professional-photo.jpg" as="image" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 