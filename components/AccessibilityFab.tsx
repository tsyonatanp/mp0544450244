'use client'

import React, { useEffect, useState } from 'react'
import { FaUniversalAccess, FaEye, FaFont, FaUndo } from 'react-icons/fa'

export default function AccessibilityFab() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [showFocus, setShowFocus] = useState(false)
  const [grayscale, setGrayscale] = useState(false)
  const [largeCursor, setLargeCursor] = useState(false)
  const [disableAnimations, setDisableAnimations] = useState(false)
  const [readingGuide, setReadingGuide] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = `${fontSize}px`
    root.classList.toggle('high-contrast-mode', highContrast)
    root.classList.toggle('grayscale-mode', grayscale)
    root.classList.toggle('cursor-large', largeCursor)
    root.classList.toggle('motion-reduce', disableAnimations)
    root.classList.toggle('reading-guide', readingGuide)
    root.classList.toggle('show-focus', showFocus)
  }, [fontSize, highContrast, grayscale, largeCursor, disableAnimations, readingGuide, showFocus])

  const reset = () => {
    setFontSize(16)
    setHighContrast(false)
    setShowFocus(false)
    setGrayscale(false)
    setLargeCursor(false)
    setDisableAnimations(false)
    setReadingGuide(false)
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-4">
      <button
        onClick={() => setOpen(!open)}
        className="accessibility-button bg-amber-500/80 hover:bg-amber-600/90 text-white p-2.5 sm:p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 keyboard-nav backdrop-blur-sm"
        aria-label="פתח אפשרויות נגישות"
        aria-expanded={open}
        aria-controls="accessibility-panel"
        style={{ minWidth: '40px', minHeight: '40px' }}
      >
        <FaUniversalAccess className="text-lg sm:text-xl" />
        <span className="sr-only">פתח אפשרויות נגישות</span>
      </button>

      {open && (
        <div
          id="accessibility-panel"
          className="accessibility-panel absolute left-0 bottom-12 bg-white rounded-lg shadow-xl border border-gray-200 p-3 sm:p-4 w-72 sm:w-80 max-h-80 sm:max-h-96 overflow-y-auto text-gray-900"
          role="dialog"
          aria-labelledby="accessibility-title"
        >
          <h3 id="accessibility-title" className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">אפשרויות נגישות</h3>

          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">גודל טקסט</label>
            <div className="flex gap-1 sm:gap-2 items-center">
              <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-3 py-2 rounded text-xs sm:text-sm" aria-label="הקטן גודל טקסט" style={{ minWidth: '40px', minHeight: '40px' }}>
                <FaFont className="text-xs" />
              </button>
              <span className="px-2 py-2 bg-gray-100 rounded text-xs sm:text-sm">גודל: {fontSize}px</span>
              <button onClick={() => setFontSize(Math.min(24, fontSize + 2))} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-3 py-2 rounded text-xs sm:text-sm" aria-label="הגדל גודל טקסט" style={{ minWidth: '40px', minHeight: '40px' }}>
                <FaFont className="text-sm sm:text-lg" />
              </button>
            </div>
          </div>

          {[
            { checked: highContrast, set: setHighContrast, label: 'ניגודיות גבוהה' },
            { checked: showFocus, set: setShowFocus, label: 'הדגשת מיקוד' },
            { checked: grayscale, set: setGrayscale, label: 'מצב שחור-לבן' },
            { checked: largeCursor, set: setLargeCursor, label: 'סמן גדול' },
            { checked: disableAnimations, set: setDisableAnimations, label: 'ביטול אנימציות' },
            { checked: readingGuide, set: setReadingGuide, label: 'מדריך קריאה' },
          ].map((item) => (
            <div key={item.label} className="mb-3 sm:mb-4">
              <label className="flex items-center cursor-pointer gap-2">
                <input type="checkbox" checked={item.checked} onChange={(e) => item.set(e.target.checked)} className="w-4 h-4" />
                <FaEye className="text-sm text-gray-700" />
                <span className="text-xs sm:text-sm text-gray-900">{item.label}</span>
              </label>
            </div>
          ))}

          <button onClick={reset} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded text-xs sm:text-sm flex items-center justify-center gap-2 mb-3" aria-label="אפס הגדרות נגישות" style={{ minHeight: '40px' }}>
            <FaUndo className="text-xs sm:text-sm" />
            אפס הגדרות
          </button>
          <button onClick={() => setOpen(false)} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded text-xs sm:text-sm" aria-label="סגור פאנל נגישות" style={{ minHeight: '40px' }}>
            סגור
          </button>
        </div>
      )}
    </div>
  )
}
