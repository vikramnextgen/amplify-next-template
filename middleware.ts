// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  // Simulating a 500 error for a specific path
  if (request.nextUrl.pathname === "/simulate-error") {
    return new NextResponse("Simulated 500 error", { status: 500 });
  }
  return NextResponse.next();
}

// Configure the middleware to run for certain routes
export const config = {
  matcher: ["/simulate-error"],
};
