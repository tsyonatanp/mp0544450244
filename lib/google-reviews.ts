// Fetches the live Google rating, review count and recent reviews via the
// Google Places API (New). Falls back to the last known-good summary values if
// the API key is missing or the request fails, so the site (and its Schema
// markup) never shows broken data.

export interface GoogleReview {
  name: string
  text: string
  rating: number
  relativeTime?: string
}

export interface GoogleReviewSummary {
  rating: number
  reviewCount: number
  reviews: GoogleReview[]
}

// Last known-good values from the Google Business Profile (June 2026).
// Used whenever the API key is absent or the API call fails.
const FALLBACK: GoogleReviewSummary = {
  rating: 4.9,
  reviewCount: 35,
  reviews: [],
}

export async function getGoogleReviews(): Promise<GoogleReviewSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  // Place ID of "מריאטה פנחסי - משרד עורכי דין ונוטריון" on Google Maps.
  const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJOelfqmE1HRUR7tok_QKTy_A'

  if (!apiKey) {
    return FALLBACK
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=he`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
      // Refresh the data once per day instead of on every request.
      next: { revalidate: 86400 },
    })

    if (!res.ok) {
      return FALLBACK
    }

    const data = await res.json()
    const rating = typeof data.rating === 'number' ? data.rating : FALLBACK.rating
    const reviewCount =
      typeof data.userRatingCount === 'number' ? data.userRatingCount : FALLBACK.reviewCount

    const reviews: GoogleReview[] = Array.isArray(data.reviews)
      ? data.reviews
          .map((r: any): GoogleReview => ({
            name: r?.authorAttribution?.displayName ?? 'לקוח/ה',
            text: r?.text?.text ?? r?.originalText?.text ?? '',
            rating: typeof r?.rating === 'number' ? r.rating : 5,
            relativeTime: r?.relativePublishTimeDescription,
          }))
          // Only keep reviews that actually contain written text.
          .filter((r: GoogleReview) => r.text.trim().length > 0)
      : []

    return { rating, reviewCount, reviews }
  } catch {
    return FALLBACK
  }
}
