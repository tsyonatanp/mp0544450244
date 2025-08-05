import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const googleApiRateLimit = new Map<string, { count: number; resetTime: number }>()

// Cache for Google API responses (in production, use Redis)
const reviewsCache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 86400000 // 24 hours in milliseconds - cache ארוך מאוד

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(ip)
  
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 3600000 }) // 1 hour window
    return false
  }
  
  if (limit.count >= 3) { // 3 requests per hour per IP - הגבלה חזקה מאוד
    return true
  }
  
  limit.count++
  return false
}

function isGoogleApiRateLimited(): boolean {
  const now = Date.now()
  const globalLimit = googleApiRateLimit.get('global')
  
  if (!globalLimit || now > globalLimit.resetTime) {
    googleApiRateLimit.set('global', { count: 1, resetTime: now + 60000 }) // 1 minute window
    return false
  }
  
  if (globalLimit.count >= 2) { // 2 requests per minute globally - הגבלה חזקה מאוד
    return true
  }
  
  globalLimit.count++
  return false
}

export async function GET(request: NextRequest) {
  // Rate limiting
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  if (isRateLimited(ip)) {
    return new NextResponse(JSON.stringify({ 
      error: 'Rate limit exceeded', 
      message: 'יותר מדי בקשות. נסה שוב בעוד שעה.',
      retryAfter: 3600 
    }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Retry-After': '3600', // 1 hour
      },
    })
  }

  // Google API Rate Limiting
  if (isGoogleApiRateLimited()) {
    return new NextResponse(JSON.stringify({ 
      error: 'Google API rate limit exceeded',
      message: 'המערכת עמוסה. נסה שוב בעוד דקה.',
      retryAfter: 60
    }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Retry-After': '60', // 1 minute
      },
    })
  }

  // Validate request origin
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'https://marita-pinchasi-law.co.il',
    'http://localhost:3000',
    'http://localhost:3001'
  ]
  
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
  }
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJ4bekR3JKHRURjd6jEiR8SoE'

  if (!apiKey) {
    return new NextResponse(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
  }

  // Check cache first
  const cacheKey = `reviews_${placeId}`
  const cachedData = reviewsCache.get(cacheKey)
  
  if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
    return new NextResponse(JSON.stringify(cachedData.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Cache': 'HIT',
      },
    })
  }

  try {
    // רק השדות המינימליים הנדרשים - חוסך בקריאות API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews.author_name,reviews.text,reviews.rating&language=iw&reviews_sort=newest&key=${apiKey}`

    const placeResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'marita-pinchasi-law/1.0'
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000) // 10 second timeout
    })

    if (!placeResponse.ok) {
      return new NextResponse(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
    }

    const placeData = await placeResponse.json()

    // Handle Google API specific errors
    if (placeData.status === 'OVER_QUERY_LIMIT') {
      return new NextResponse(JSON.stringify({ error: 'API quota exceeded' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Retry-After': '3600', // 1 hour
        },
      })
    }

    if (placeData.status === 'REQUEST_DENIED') {
      return new NextResponse(JSON.stringify({ error: 'API access denied' }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
    }

    if (placeData.status === 'INVALID_REQUEST') {
      return new NextResponse(JSON.stringify({ error: 'Invalid request' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
    }

    if (placeData.status !== 'OK') {
      return new NextResponse(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
    }

    const reviews = placeData.result.reviews || []

    if (reviews.length === 0) {
      return new NextResponse(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
    }

    const formattedReviews = reviews.slice(0, 3).map((review, index) => { // רק 3 ביקורות במקום 10
      return {
        name: review.author_name || 'Anonymous',
        text: (review.text || 'No text provided').substring(0, 200), // הגבלה ל-200 תווים
        rating: review.rating || 5,
        time: review.relative_time_description || '',
        profile_photo: review.profile_photo_url || ''
      }
    })

    // Cache the response
    reviewsCache.set(cacheKey, {
      data: formattedReviews,
      timestamp: Date.now()
    })

    return new NextResponse(JSON.stringify(formattedReviews), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Cache': 'MISS',
      },
    })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return new NextResponse(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
  }
} 