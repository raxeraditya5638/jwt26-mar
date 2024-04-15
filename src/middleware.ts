import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const path = req.nextUrl.pathname;
  const isPublicPathL = path === "/users/login";
  const isPublicPathS = path === "/users/signup";
  const pfile = path === "/profile";
  console.log("pfile", pfile);
  const token = cookieStore.has("jwt");
  console.log("public", isPublicPathL);
  console.log("token", token);
  if (!isPublicPathL && !isPublicPathS && !token) {
    return NextResponse.redirect(new URL("/users/login", req.nextUrl));
  }
  if (isPublicPathL && isPublicPathS && token) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }
  if (isPublicPathL) {
    console.log("is public");
  }
}

export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/profile",
    "/users/login",
    "/users/signup",
  ],
};
