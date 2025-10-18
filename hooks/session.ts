import dbConnect from "@/actions/dbConnect";
import SessionModel from "@/models/Session.model";
import { SignJWT } from "jose"; // Use jose for JWT generation
import { cookies } from "next/headers";

export async function createSession(userId: any) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // Cookie expiration
  const expiresIn = process.env.ACCESS_TOKEN_EXPIRY || "7d"; // JWT expiration (fallback to 7 days)

  await dbConnect();

  try {
    // 1. Create a session in the database
    const createdSession = await SessionModel.create({
      userId,
      expiresIn,
    });

    if (!createdSession) {
      console.log("Error creating user session");
      return {
        success: false,
        message: "Error creating user session",
      };
    }

    // 2. Generate the JWT using jose
    const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Encode the secret
    const accessToken = await new SignJWT({
      sessionId: createdSession._id,
      userId,
    })
      .setProtectedHeader({ alg: "HS256" }) // Use HS256 algorithm
      .setIssuedAt()
      .setExpirationTime(expiresIn) // Set expiration time
      .sign(secret); // Sign the token

    // 3. Store the session in cookies for optimistic auth checks
    const cookieStore = await cookies(); // No need for await
    cookieStore.set("session", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });

    return {
      success: true,
      message: "Session created successfully",
    };
  } catch (error) {
    console.log("Internal server error while creating session.", error);
    return {
      success: false,
      message: "Internal server error. Error creating user session.",
    };
  }
}
