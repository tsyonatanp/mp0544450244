import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const { name, email, phone, message } = body

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'שדות חובה חסרים. נא למלא שם, אימייל והודעה.' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'כתובת אימייל לא תקינה' },
                { status: 400 }
            )
        }

        // TODO: Here you can add logic to send email or save to database
        // For now, we'll just return a success response

        console.log('Contact form submission:', { name, email, phone, message })

        return NextResponse.json(
            {
                success: true,
                message: 'הפנייה התקבלה בהצלחה! ניצור איתך קשר בהקדם.'
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error in contact API:', error)
        return NextResponse.json(
            { error: 'שגיאה בשליחת הפנייה. אנא נסה שוב מאוחר יותר.' },
            { status: 500 }
        )
    }
}

// Handle GET requests - return method not allowed
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed. Please use POST.' },
        { status: 405 }
    )
}
