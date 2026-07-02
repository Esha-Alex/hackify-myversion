import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // ─── FORWARD TO FORMSPREE ────────────────────────────────────────
    // Paste your unique link here:
    const FORMSPREE_URL = "https://formspree.io/f/mdarwdlb" 

    await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    // ─────────────────────────────────────────────────────────────────

    console.log(`[SUCCESS] Email securely forwarded to database: ${email}`)
    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Newsletter backend processing error:', error)
    return NextResponse.json({ error: 'Internal server breakdown' }, { status: 500 })
  }
}