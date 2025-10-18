"use server";

import { createSession } from "@/hooks/session";
import { SigninFormSchema } from "@/lib/definitions";
import bcrypt from "bcrypt";
import UserModel from "@/models/Signup.model"; // Assuming this is your user model
import dbConnect from "./dbConnect";

export async function signin(state, formData: FormData) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await dbConnect();

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email: validatedFields.data.email });

    // If user doesn't exist, return an error
    if (!user) {
      return {
        errors: {
          email: ["User not found. Please check your email or sign up."],
        },
      };
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(
      validatedFields.data.password,
      user.password
    );

    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return {
        errors: {
          password: ["Invalid password. Please try again."],
        },
      };
    }

    // Create a session for the user
    const createdSession = await createSession(user._id); // Pass the user ID to createSession

    // If session creation fails, return an error
    if (!createdSession.success) {
      return {
        success: false,
        message: "Failed to create session. Please try again.",
      };
    }

    // If everything is valid, return success
    return { success: true, message: "Sign-in successful" };
  } catch (err) {
    console.log("Internal server error : ", err);
    return {
      success: false,
      message: "Internal server error",
    };
  }
}
