import { NextResponse,NextRequest } from "next/server";
import {cookies} from "next/headers"

export function middleware(req:NextRequest){
    const cookieStore = cookies()
    const path = req.nextUrl.pathname;
const isPublicPath = path === '/users/login' || '/users/signup'
const token = cookieStore.get("jwt")?.value || ""
if (isPublicPath && token) {
    return NextResponse.redirect(new URL ("/users/profile",req.nextUrl))
}
if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/users/login",req.nextUrl))
}

// if (!token) {
//     return NextResponse.redirect(new URL("/users/login", req.nextUrl))
// }
}



export const config = {
    matcher:[
        '/',
        '/users/profile',
        '/users/login',
        '/users/signup'
    ]
}