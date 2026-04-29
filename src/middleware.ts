import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAuthenticated = request.cookies.get("auth_token");

  const isPublicRoute = pathname.startsWith("/login");
  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/charts") ||
    pathname.startsWith("/live-feed") ||
    pathname.startsWith("/sensor-details") ||
    pathname.startsWith("/reports") ||
    pathname.startsWith("/sensor-management");

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|public|favicon.ico).*)"],
};
