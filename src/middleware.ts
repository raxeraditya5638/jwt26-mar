import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/users/login" || path === "/users/signup";
  const pfile = path === "/profile";
  const token = cookieStore.has("jwt");
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/users/login", req.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/profile", "/users/login", "/users/signup"],
};
