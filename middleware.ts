import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./hooks/vewrifyJWT";

// Define protected and public routes
const protectedRoutes = ["/admin", "/admin/create-post"];
const loginRoutes = ["/sign-in", "/sign-up"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isLoginRoute = loginRoutes.includes(path);

  try {
    // Get the session token from cookies synchronously (Edge runtime compatibility)
    const cookie = req.cookies.get("session");
    const cookieValue = cookie?.value;

    let session = null;
    if (cookieValue) {
      session = await verifyJWT(cookieValue);
    }

    // Redirect logic for protected routes
    if (isProtectedRoute && !session?.userId) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    // Redirect logic for login routes
    if (isLoginRoute && session?.userId) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  } catch (error) {
    console.error("Error in middleware:", error);
  }

  // Allow access to all other routes (public routes)
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
