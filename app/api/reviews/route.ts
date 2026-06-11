import { NextResponse } from 'next/server'
import { getGoogleReviews } from '../../../lib/google-reviews'

// Cache the Google response for a day; the secret API key stays on the server.
export const revalidate = 86400

export async function GET() {
  const data = await getGoogleReviews()
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  })
}
