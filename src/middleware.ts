import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { getIsTokenValid } from "./lib/session-checker";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { nextUrl } = request;
  const isLoggedIn = !!session?.user;
  const isTokenValid = getIsTokenValid(session?.tokens?.accessToken || "");

  if (!isLoggedIn || !isTokenValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
