import { type NextRequest, NextResponse } from "next/server"
import { Paths } from "./config/consts"

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * @see https://next-auth.js.org/configuration/nextjs#middleware
 * */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone()
    url.pathname = Paths.CONTENTS
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
