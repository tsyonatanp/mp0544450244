'use client'

import React from 'react'
import Link from 'next/link'
import { FaHome, FaChevronLeft } from 'react-icons/fa'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "דף הבית",
        "item": "https://marita-pinchasi-law.co.il"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://marita-pinchasi-law.co.il${item.href}` : undefined
      })).filter(item => item.item)
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 border-b border-gray-200">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 max-w-6xl mx-auto">
          <li>
            <Link 
              href="/" 
              className="flex items-center hover:text-amber-600 transition-colors"
              aria-label="דף הבית"
            >
              <FaHome className="text-base" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <FaChevronLeft className="text-xs mx-2 text-gray-400" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

