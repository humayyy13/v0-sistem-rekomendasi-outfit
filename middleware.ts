import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("admin_token")?.value

  const publicPaths = ["/", "/about", "/login"]
  const isPublicPath = publicPaths.includes(pathname)

  // If user is not authenticated and trying to access protected route
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If user is authenticated and trying to access login page, redirect to pilih-tema
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/pilih-tema", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
}
