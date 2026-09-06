'use client'

import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<{ name: string; text: string; rating: number; relativeTime?: string }[]>([])
  const [googleRating, setGoogleRating] = useState(4.9)
  const [googleReviewCount, setGoogleReviewCount] = useState(35)
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 1

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.rating === 'number') setGoogleRating(data.rating)
        if (typeof data.reviewCount === 'number') setGoogleReviewCount(data.reviewCount)
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setTestimonials(data.reviews)
        }
      })
      .catch(() => {
        /* keep fallback display */
      })
  }, [])

  return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">דברי לקוחותינו</h2>
            <p className="text-xl text-gray-600">הצלחות ותוצאות מוכחות</p>

            {/* Live Google rating summary */}
            <div className="flex flex-col items-center gap-2 mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(googleRating) ? 'text-amber-500 text-2xl' : 'text-gray-300 text-2xl'}
                  />
                ))}
              </div>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-amber-600">{googleRating.toFixed(1)}</span>
                <span className="text-gray-500"> מתוך 5 · </span>
                <span className="font-semibold">{googleReviewCount} ביקורות ב-Google</span>
              </p>
            </div>
          </div>

          {/* Reviews Display */}
          <div className="relative">
            <div className="flex justify-center">
              {testimonials.length > 0 ? (
                testimonials
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
                        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                          <span className="font-semibold text-gray-900">– {testimonial.name}</span>
                          {testimonial.relativeTime && (
                            <span className="text-sm text-gray-400">{testimonial.relativeTime}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200 h-80 flex flex-col w-full max-w-lg items-center justify-center text-center">
                  <div className="text-6xl mb-4">⭐</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ביקורות Google</h3>
                  <p className="text-gray-700">
                    דירוג <span className="font-bold text-amber-600">{googleRating.toFixed(1)}</span> מתוך 5
                    על סמך <span className="font-semibold">{googleReviewCount}</span> ביקורות אמיתיות ב-Google Business Profile.
                  </p>
                </div>
              )}
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

          {/* Review CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="https://g.page/r/Ce7aJP0Ck8vwEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaStar className="text-lg" />
              השאירו ביקורת ב-Google
            </a>
            <a
              href="https://www.google.com/search?q=מריאטה+פנחסי+עורך+דין+נדלן"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaStar className="text-lg text-amber-500" />
              צפו בכל הביקורות
            </a>
          </div>
        </div>
      </section>
  )
}
