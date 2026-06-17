import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some(l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`)
  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/en${pathname === '/' ? '' : pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|.*\\..*).*)',],
}
