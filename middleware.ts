import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Define guest-only and protected routes
const guestOnlyRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("auth_token")?.value;

  const isGuestOnly = guestOnlyRoutes.includes(pathname);
  const isProtected = protectedRoutes.includes(pathname);

  if (token && isGuestOnly) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.redirect(new URL("/", req.url));
    } catch {}
  }

  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    // "/profile",
    // "/dashboard",
    "/sign-in",
    "/sign-up",
  ],
};
