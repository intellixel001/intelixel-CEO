import { jwtVerify } from "jose";

export async function verifyJWT(token) {
  if (!token) {
    console.log("Unauthorized request");
    return null;
  }
  
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    // console.log("payload----", payload)
    if (!payload) {
      console.log("Unauthorized request");
      return null;
    }
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
