'use client'

import { useEffect } from 'react'

// Fires a single visit notification per browser session (not per page view),
// so one visitor browsing several pages produces only one alert.
export default function VisitNotifier() {
  useEffect(() => {
    try {
      const KEY = 'visit_notified'
      if (sessionStorage.getItem(KEY)) return
      sessionStorage.setItem(KEY, '1')

      fetch('/api/notify-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: window.location.pathname,
          referrer: document.referrer,
        }),
        keepalive: true,
      }).catch(() => {
        /* ignore network errors */
      })
    } catch {
      /* sessionStorage unavailable — skip silently */
    }
  }, [])

  return null
}
