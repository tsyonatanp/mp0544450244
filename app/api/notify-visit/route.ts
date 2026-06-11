import { NextRequest, NextResponse } from 'next/server'

// Sends a Telegram notification when a real visitor lands on the site.
// Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID env vars.

// Basic bot/crawler filter on the server side (the client beacon already
// filters out most non-JS bots).
const BOT_UA = /bot|crawl|spider|slurp|bing|google|yandex|baidu|duckduck|facebookexternalhit|whatsapp|telegrambot|preview|monitor|pingdom|uptime|headless|lighthouse|gtmetrix/i

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  // If not configured, quietly succeed so the site never breaks.
  if (!token || !chatId) {
    return NextResponse.json({ ok: false, reason: 'not_configured' })
  }

  const ua = req.headers.get('user-agent') || ''
  if (BOT_UA.test(ua)) {
    return NextResponse.json({ ok: false, reason: 'bot' })
  }

  let body: { path?: string; referrer?: string } = {}
  try {
    body = await req.json()
  } catch {
    /* no body */
  }

  // Vercel provides geo headers in production.
  const city = req.headers.get('x-vercel-ip-city')
  const country = req.headers.get('x-vercel-ip-country')
  const decodedCity = city ? decodeURIComponent(city) : ''
  const location = [decodedCity, country].filter(Boolean).join(', ')

  const page = body.path || '/'
  const referrer = body.referrer && body.referrer.trim().length > 0 ? body.referrer : 'ישיר / לא ידוע'
  const time = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })

  const text =
    `🔔 מבקר חדש באתר!\n\n` +
    `📄 עמוד: ${page}\n` +
    `↪️ הגיע מ: ${referrer}\n` +
    (location ? `📍 מיקום משוער: ${location}\n` : '') +
    `🕒 ${time}`

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    })
  } catch {
    return NextResponse.json({ ok: false, reason: 'send_failed' })
  }

  return NextResponse.json({ ok: true })
}
