import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "./lib/cookie";

export async function proxy(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    const pathname = request.nextUrl.pathname;

    // 🔒 Protected routes
    if (pathname.startsWith("/dashboard")) {

        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            await decrypt(session);

            return NextResponse.next();

        } catch {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // 🚫 Logged users can't access login/register
    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
        if (session) {
            try {
                await decrypt(session);

                return NextResponse.redirect(
                    new URL("/dashboard", request.url)
                );

            } catch {
                return NextResponse.next();
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/register"
    ],
};