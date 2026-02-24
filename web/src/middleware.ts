import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token");

  // If the user does not have an auth token and is not visiting the login page,
  // redirect them to the login page.
  if (!authToken && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If they are logged in and hit the login page, redirect to dashboard.
  if (authToken && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
