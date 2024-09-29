// app/api/simulate-error/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Simulated 500 error" }, { status: 500 });
}
