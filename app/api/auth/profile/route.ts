import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
      email: string;
      name: string;
    };

    return NextResponse.json({ user: decoded });

  } catch (error) {
    console.error("Profile error:", error);
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}
