import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export function getAuthStatus() {
  const token = cookies().get("auth_token")?.value;

  if (!token) {
    return {
      isAuthenticated: false,
      user: null,
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return {
      isAuthenticated: true,
      user: decoded,
    };
  } catch (err) {
    return {
      isAuthenticated: false,
      user: null,
    };
  }
}
