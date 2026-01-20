import { NextRequest, NextResponse } from "next/server";
import { getUserData, getAuthToken } from "./lib/cookie";

const publicPaths = ["/login","/register","/forgot-password"];
const adminPaths = ["/admin"]

export async function proxy(req: NextRequest) {
    const{pathname} = req.nextUrl;

    const token = await getAuthToken();
    const user = token ? await getUserData() : null;

    const isPUblicPath = publicPaths.some((path) => pathname.startsWith(path));

    if(pathname == "/login"){
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // ehivh path should be checked inside proxy
        "/admin/:path*",
        "/login",
        "/register"
        
    ]
}