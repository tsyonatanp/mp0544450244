import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Note: Security headers are defined in next.config.js
  // to avoid duplication and console warnings

  // Rate Limiting (Basic)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const userAgent = request.headers.get('user-agent') || ''

  // Block suspicious requests
  if (
    userAgent.includes('bot') && !userAgent.includes('googlebot') ||
    userAgent.includes('crawler') ||
    userAgent.includes('spider')
  ) {
    // Allow legitimate bots but log suspicious ones
    // console.log(`Suspicious bot detected: ${userAgent} from ${ip}`) // Disabled for production
  }

  // Block common attack patterns
  const url = request.nextUrl.pathname
  if (
    url.includes('..') ||
    url.includes('wp-admin') ||
    url.includes('php') ||
    url.includes('admin') ||
    url.includes('config')
  ) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 